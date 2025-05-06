import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() triggerTyping: boolean = false;
  isTypingActive = false;
  displayText: string = `Cześć,
  Nazywam się Tomasz Słupik.
  Jestem Full Stack Developerem z wieloletnim doświadczeniem.`;

    characters: string[] = [];

    ngOnInit() {
      if (this.triggerTyping) {
        this.characters = this.displayText.split('');
      }
      if (this.triggerTyping) {
        setTimeout(() => {
          this.isTypingActive = true;
        }, 300); 
      }
    }
}
