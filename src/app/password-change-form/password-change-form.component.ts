import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.scss']
})
export class PasswordChangeFormComponent {

  form = new FormGroup({
    oldPassword: new FormControl('', [Validators.required], PasswordValidators.shouldMatchOldPassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: PasswordValidators.shouldMatchConfirmPasswordWithNewPassword});

  get oldPassword() {
    return this.form.get('oldPassword')
  }

  get newPassword() {
    return this.form.get('newPassword')
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')
  }
}
