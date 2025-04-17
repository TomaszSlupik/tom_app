import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log('Klik'); 
    this.formSubmitted = true;
    // wszystkie pola jako "touched", aby wymusić wyświetlenie błędów
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      // Formularz zawiera błędy – nie wysyłam dalej
      return;
    }

    this.router.navigate(['/message-sent']);
  }
}