import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  log(value: any) {
    console.log(value);
  }

  submit(f: any) {
    console.log(f);
  }

  contactMethods = [
    { id: 1, name: "Email" },
    { id: 2, name: "Phone" }
  ]
}
