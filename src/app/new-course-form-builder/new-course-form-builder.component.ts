import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form-builder',
  templateUrl: './new-course-form-builder.component.html',
  styleUrls: ['./new-course-form-builder.component.scss']
})
export class NewCourseFormBuilderComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }
}
