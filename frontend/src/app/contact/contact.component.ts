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
    this.contactForm.markAllAsTouched();
  
    if (this.contactForm.invalid) {
      console.warn('Formularz niepoprawny – nie wysyłam!');
      return;
    }

    const { name, email, message } = this.contactForm.value;
  
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/slupiktomasz@gmail.com';
    form.method = 'POST';
    form.style.display = 'none';
  
    const inputs = [
      { name: 'name', value: name },
      { name: 'email', value: email },
      { name: 'message', value: message },
      { name: '_captcha', value: 'false' },
      { name: '_next', value: 'https://slupikprogrammer.pl/message-sent' }
    ];
  
    inputs.forEach(({ name, value }) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });
  
    document.body.appendChild(form);
    form.submit();
    form.remove();
  }
  
}