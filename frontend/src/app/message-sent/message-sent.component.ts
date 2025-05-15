import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.scss']
})
export class MessageSentComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']); 
  }
}
