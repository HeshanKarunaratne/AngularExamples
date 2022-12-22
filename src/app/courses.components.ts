import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
           {{ course.title | uppercase | lowercase}} <br/>
           {{ course.students | number}} <br/>
           {{ course.rating | number:'2.1-1' }} <br/>
           {{ course.price | currency:'AUD':false:'3.2-2'}} <br/>
           {{ course.releaseDate | date:'shortDate' }} <br/>
        `
})
export class CoursesComponent {
    course = {
        title: "Angular course!!!",
        rating: 4.9543,
        students: 30211,
        price: 109.43,
        releaseDate: new Date(2016, 3, 1)
    }
}