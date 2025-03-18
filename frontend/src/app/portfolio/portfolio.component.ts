import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDialogComponent } from '../portfolio-dialog/portfolio-dialog.component'


interface PortfolioItem {
  title: string;
  company: string;
  date: string;
  description: string;
  image: string;
  techStack: { name: string, icon: string }[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(private dialog: MatDialog) {}

  portfolioItems: PortfolioItem[] = [
    {
      title: 'Wypożyczalnia samochodów',
      company: 'XYZ Tech Solutions',
      date: '2021 - Present',
      description: 'Aplikacja to innowacyjne rozwiązanie, które umożliwia łatwe rezerwowanie i wypożyczanie samochodów.',
      image: 'assets/project/car_django/screenFive.jpg',
      techStack: [
        {name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'},
        { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-plain.svg' }
      ]
    },
    {
      title: 'E-commerce Platform',
      company: 'ABC Software',
      date: '2018 - 2021',
      description: 'Led a team in building a scalable e-commerce platform with real-time payments and modern UI/UX.',
      image: 'assets/projects/ecommerce.jpg',
      techStack: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' }
      ]
    },
    {
      title: 'Fintech - Zarządzanie Portfelem',
      company: 'Startup Inc.',
      date: '2016 - 2018',
      description: 'Worked on a financial management tool, improving investment tracking and user experience.',
      image: 'assets/projects/fintech.jpg',
      techStack: [
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-plain.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain.svg' }
      ]
    }
  ];

  openDialog(item: PortfolioItem) {
    this.dialog.open(PortfolioDialogComponent, {
      data: item,
      width: '600px',
      panelClass: 'custom-dialog-container'
    });
  }

}
