import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDialogComponent } from '../portfolio-dialog/portfolio-dialog.component'


interface PortfolioItem {
  title: string;
  company: string;
  date: string;
  description: string;
  mainDescription: string,
  image: string;
  images?: string[];
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
      mainDescription: 'Aplikacja to innowacyjne rozwiązanie, które umożliwia łatwe rezerwowanie i wypożyczanie samochodów. Oferuje szeroki wybór pojazdów, w tym SUV-y, kombi oraz sedany, dostosowanych do różnych potrzeb i preferencji użytkowników. Użytkownicy mają możliwość przeglądania swoich rezerwacji w intuicyjny sposób, co zapewnia pełną kontrolę nad planowanymi podróżami. Dodatkowo, aplikacja umożliwia zwalnianie rezerwacji w prosty sposób, co zwiększa elastyczność korzystania z usług.',
      image: 'assets/project/car_django/screenFive.jpg',
      images: [
        'assets/project/car_django/screenOne.jpg',
        'assets/project/car_django/screenTwo.jpg',
        'assets/project/car_django/screenThree.jpg',
      ],
      techStack: [
        {name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'},
        { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },

      ]
    },
    {
      title: 'Rezerwacja sal konferencyjnych',
      company: 'ABC Software',
      date: '2018 - 2021',
      description: 'Aplikacja umożliwia zarządzanie rezerwacjami sal konferencyjnych, oferując użytkownikom pełną kontrolę nad swoimi rezerwacjami.',
      mainDescription: '',
      image: 'assets/project/booking_system/one_book.jpg',
      techStack: [
        {name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'},
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'MuI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'},
        { name: 'NextJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' }
      ]
    },
    {
      title: 'Kuchenne Inspiracje',
      company: 'Startup Inc.',
      date: '2016 - 2018',
      description: 'Aplikacja zarządzania przepisami to innowacyjne narzędzie stworzone z myślą o pasjonatach gotowania. Dzięki aplikacji możesz w łatwy sposób przeglądać sprawdzone przepisy, a także dodawać swoje własne kulinarne pomysły. ',
      mainDescription: '',
      image: 'assets/project/recipes/one.jpg',
      techStack: [
        {name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'},
        { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        { name: 'MuI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'},
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'},
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg' }
      ]
    },
    {
      title: 'Memy',
      company: 'Startup Inc.',
      date: '2016 - 2018',
      description: 'Aplikacja służy do dodawania i przeglądania memów, z funkcją oceny oraz inteligentnym filtrowaniem na podstawie popularności.',
      mainDescription: '',
      image: 'assets/project/mem/one.jpg',
      techStack: [
        {name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'},
        { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        { name: 'MuI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'},
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'},
        { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' }
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

  rotatingImage: string | null = null;
  zoomedImage: string | null = null;
  
  startAnimation(image: string): void {
    if (this.zoomedImage === image) return; 
  
    this.rotatingImage = image;
  
    setTimeout(() => {
      this.rotatingImage = null;
      this.zoomedImage = image;
    }, 600);
  }
  
  resetZoom(image: string): void {
    if (this.zoomedImage === image) {
      this.zoomedImage = null;
    }
  }
  

}
