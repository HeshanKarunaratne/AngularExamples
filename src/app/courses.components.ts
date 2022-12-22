import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
           <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        `
})
export class CoursesComponent {
    email: any = "heshan@yahoo.com";
    onKeyUp() {
        console.log("here ", this.email);
    }
}