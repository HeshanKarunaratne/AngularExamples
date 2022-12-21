import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
            <div (click)="onDivClicked()">
                <button (click)="onSave($event)" >Save</button>
            </div>
        `
})
export class CoursesComponent {
    onDivClicked() {
        console.log("Div clicked");
    }
    onSave(event: Event) {
        event.stopPropagation();
        console.log("Button clicked ", event);
    }
}