import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static shouldMatchOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }

    static shouldMatchConfirmPasswordWithNewPassword(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword?.value !== confirmPassword?.value)
            return { passwordShouldMatch: true };

        return null;
    }
}