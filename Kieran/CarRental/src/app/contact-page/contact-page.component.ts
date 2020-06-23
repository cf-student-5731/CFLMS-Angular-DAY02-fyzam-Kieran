import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { isBuffer } from 'util';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactInput = new FormGroup({
    name: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSend() {
    if (this.contactInput.valid) {
      console.log(this.contactInput.value);
      alert('Thank you for your message, We will be with you shortly');
    }
  }
}
