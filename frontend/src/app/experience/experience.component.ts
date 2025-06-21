import { Component, Input, ElementRef, ViewChild } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  position: 'left' | 'right';
  img: string;
}


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent {
  @Input() animate: boolean = false;
  isVisible = false;

  ngOnInit() {
    if (this.animate) {
      setTimeout(() => {
        this.isVisible = true;
      }, 300);
    }
  }
  
  experienceItems: ExperienceItem[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Eurocash S.A.',
      date: '2024 - Obecnie',
      description: '',
      position: 'left', 
      img: 'assets/icon/code.png'
    },
    {
      title: 'Programming Trainer',
      company: 'InfoShare Academy sp. z o.o.',
      date: '2024 - Obecnie',
      description: '',
      position: 'right',
      img: 'assets/icon/trainer.png'
    },
    {
      title: 'Full Stack Developer',
      company: 'Eurocash S.A.',
      date: '2022 - 2024',
      description: '',
      position: 'left',
      img: 'assets/icon/code.png'
    },
    {
      title: 'Reporting IT specialist',
      company: 'Idea Money S.A.',
      date: '2021 - 2022',
      description: '',
      position: 'right',
      img: 'assets/icon/code.png'
    },
    {
      title: 'Freelancer',
      company: '',
      date: '2021 - Obecnie',
      description: '',
      position: 'left',
      img: 'assets/icon/code.png'
    },
    {
      title: 'Analysis and Data Mining Specialist',
      company: 'Idea Bank',
      date: '2020 - 2021',
      description: '',
      position: 'right',
      img: 'assets/icon/data.png'
    },
    {
      title: 'Junior Engineer',
      company: 'Vigo System S.A.',
      date: '2018 - 2019',
      description: '',
      position: 'left',
      img: 'assets/icon/code.png'
    },
    {
      title: 'Trainee',
      company: 'Vigo System S.A.',
      date: '2018 - 2018',
      description: '',
      position: 'right',
      img: 'assets/icon/code.png'
    }
  ];

  @ViewChild('timelineContainer') timelineRef!: ElementRef;

  scrollTimeline(direction: number) {
    const el = this.timelineRef.nativeElement;
    const scrollAmount = 300; // px
    el.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

}