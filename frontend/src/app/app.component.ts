import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tom_page';
  
  constructor(private router: Router) {}
  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '/home';
  }

  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }
  
}
