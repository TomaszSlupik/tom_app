import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationItems = [
    {
      title: 'Python Development – analiza danych, uczenie maszynowe, projektowanie rozwiązań IT',
      institution: 'Akademia Leona Koźmińskiego',
      date: '2024 – 2025',
      description: 'Studia podyplomowe Python Development łączące praktyczne programowanie z projektowaniem rozwiązań IT oraz analizą danych. Program obejmował m.in. programowanie i programowanie obiektowe w języku Python, pracę z bibliotekami do analizy danych (NumPy, pandas, matplotlib), tworzenie aplikacji internetowych w Django z wykorzystaniem REST API oraz dobre praktyki inżynierii oprogramowania. Studia wzbogacone zostały o moduły dotyczące projektowania UI/UX, systemu kontroli wersji GIT, uczenia maszynowego (machine learning, sieci neuronowe) oraz realizację kilku praktycznych projektów końcowych – w tym aplikacji webowej i analiz danych.',
      position: 'left'
    },
    {
      title: 'Frontend Development z React',
      institution: 'Akademia Leona Koźmińskiego',
      date: '2022 – 2023',
      description: 'Program studiów Frontend Developer, obejmujący kompleksowe przygotowanie do pracy na stanowisku programisty frontendowego. Zakres studiów objął: HTML5, CSS3, SCSS, JavaScript (w tym zaawansowane wzorce ES6+), UX/UI, system kontroli wersji GIT, a także budowanie aplikacji w React i React Native. Uczestniczyłem w projektowaniu nowoczesnych interfejsów użytkownika, pracy z RESTful API, zarządzaniu stanem aplikacji (Redux), testowaniu (TDD, Jest) oraz budowie aplikacji SPA i mobilnych (Android/iOS). Program zakończył się stworzeniem pełnoprawnego projektu aplikacji biznesowej.',
      position: 'right'
    },
    {
      title: 'Master of Business Administration',
      institution: 'Akademia Ekonomiczno - Humanistyczna w Warszawie',
      date: '2021 – 2022',
      description: 'Studia MBA o profilu menedżerskim, skoncentrowane na rozwoju kompetencji, strategicznego zarządzania projektami IT oraz efektywnej komunikacji w zespołach technicznych. Program obejmował m.in. negocjacje biznesowe, zarządzanie zespołami, analizę marketingową i kreowanie strategii',
      position: 'left'
    },
    {
      title: 'Zarządzanie i Inżynieria produkcji',
      institution: 'Politechnika Warszawska',
      date: '2016 – 2018',
      description: 'Magister Inżynier',
      position: 'right'
    },
    {
      title: 'Zarządzanie i Inżynieria produkcji',
      institution: 'Politechnika Warszawska',
      date: '2012 – 2016',
      description: 'Inżynier',
      position: 'right'
    }
  ]

  @ViewChildren('educationCard', { read: ElementRef }) cards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    document.body.classList.add('edu-bg-loaded');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  
    this.cards.forEach((card: ElementRef, index: number) => {
      setTimeout(() => {
        observer.observe(card.nativeElement);
      }, index * 550); 
    });
  }

  visibleCards: boolean[] = [];
  expandedCard: number | null = null;

  toggleCard(index: number, event: Event) {
    event.stopPropagation(); 
    this.expandedCard = this.expandedCard === index ? null : index;
  }

  hoveredIndex: number | null = null;

  onMouseEnter(i: number) {
    this.hoveredIndex = i;
  }
  
  onMouseLeave() {
    this.hoveredIndex = null;
  }

}
