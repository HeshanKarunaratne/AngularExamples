# Angular Examples

Angular is a framework for building client applications in HTML, CSS, Javascript or Typescript

 - To work with Angular you need to install node.js(Get the latest stable version)
    node --version

 - You need to have agular cli as well
    npm install -g @angular/cli
 
 - Check angular version
    ng version

 - Start angular app
    ng serve

TypeScript Fundametals
 - Type Annotation
 - Arrow function
 - Interfaces
 - Classes
 - Contructors
 - Access Modifiers
 - Properties
 - Modules

* Javascript is a subset of Typescript
* For browsers Typescript is transpiled into Javascript

Install Typescript
 - npm install -g typescript
 - tsc --version
 
Convert .ts file to .js
 - tsc file_name.ts

* In javascript variable declared with var keyword is scoped to the nearest function.

Types in Typescript

~~~ts
let a: number;
let b: string;
let c: any;
let d: boolean;
let e: number[] = [1, 3, 5];
let f: any[] = [1, true, "2"];

enum Color { Orange = 20, Red, Blue, Green = 100 }
const backgroundColor = Color.Blue;
~~~

Type Assertions
~~~ts
let message;
message = 'abc';
let endsWith = (<string>message).endsWith('c');
let alternateWay = (message as string).endsWith('c');
~~~

Arrow Function
~~~ts
let fun1 = function (message) {
    console.log(message);
}

let fun2 = (message2) => console.log(message2);
~~~

Interfaces: Use Pascal naming conventions when defining names
~~~ts
interface Point {
    x: number,
    y: number
}

let draw1 = (point: { x: number, y: number }) => {
    //    
}

let draw2 = (point: Point) => {
    //    
}

draw1({
    x: 10,
    y: 20
})
~~~

Access Modifier: private, public, protected
~~~ts
class Point {
    
    constructor(private x?: number,private y?: number) {}

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }
}

let pointer = new Point(10);
pointer.draw();
~~~

Ex: When Accessors are only available when targeting ES5 error occurs
tsc LikeMain.ts --target ES5 && node LikeMain.js

Selectors
<courses>             -> "courses"
<div class="courses"> -> ".courses"
<div id="courses">    -> "#courses"

Generate Components from cli
 - ng g c componentName


Directives
~~~ts
import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
        <h2>{{getTitle()}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
})
export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3"];

    getTitle() {
        return this.title;
    }
}
~~~

Property binding - [] syntax binding
~~~ts
import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <h2 [textContent]="title"></h2>
        `
})
export class CoursesComponent {
    title = "List of courses";
}
~~~

Attribute Binding
~~~ts
<table>
    <tr>
        <td [attr.colspan]="colspan"></td>
    </tr>
</table>
~~~

Adding Bootstrap
 - npm install bootstrap --save

Adding Bootstrap to styles.scss
~~~scss
/* You can add global styles to this file, and also import other style files */
@import "../node_modules/bootstrap/scss/bootstrap.scss";

body {
    padding: 20px;
}
~~~

Class Binding: Add classes dynamically based on condition
~~~ts
import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
            <button class="btn btn-primary" [class.active]="isActive">Save</button>
        `
})
export class CoursesComponent {
    isActive = true;
}
~~~

Style Binding
~~~ts
import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
            <h1>Here</h1>
            <button [style.backgroundColor]="isActive ? 'blue': 'white'" >Save</button>
        `
})
export class CoursesComponent {
    isActive = false;
}
~~~

Event Binding and Bubbling
~~~ts
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
~~~

Event Filtering
~~~ts
import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
           <input (keyup.enter)="onKeyUp()" />
        `
})
export class CoursesComponent {
    onKeyUp() {
        console.log("Enter Clicked");
    }
}
~~~

Template Variables
~~~ts
import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
           <input #email (keyup.enter)="onKeyUp(email.value)" />
        `
})
export class CoursesComponent {
    onKeyUp(email: string) {
        console.log(email);
    }
}
~~~

ngModel directive is used for 2 way binding
To access ngModel you need to import  @angular/forms

Two-way Binding
~~~ts
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
~~~

Built in Pipes
~~~ts
import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
           {{ course.title | uppercase | lowercase}} <br/>
           {{ course.students | number }} <br/>
           {{ course.rating | number:'2.1-1' }} <br/>
           {{ course.price | currency:'AUD':false:'3.2-2' }} <br/>
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
~~~

Creating custom Pipes: Need to include the newly created custom pipe in app.modules.ts declarations list
~~~ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value) return null;

        let actualLimit = (limit) ? limit : 50;
        return value.substring(0, actualLimit) + "...";
    }
}


import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
           {{ text | summary:10 }} <br/>
        `
})
export class CoursesComponent {
    text = `vdsvsdv sdvsdvvdv dvdavdv adcvadvadva advadvadvadv advadvadvad vadvadvadvdav advadvad advadvadv advadvad vadvavav advadvadv advadvdavdav davaddavdav davadvadv adadadvadv vdavdavdavdvd advdvr bd fs bsfbsfbs zgash bfsbsfhd dv adsfhsfhsf adgsr hf hsfdsgad gad g dag dag adgg`;
}
~~~

Property(Input) and Event Binding(Output) to make a component more reusable.

<favourite></favourite>
          ||
          \/
<favourite [isFavourite]="post.isFavourite" (change)="onFavoutieChange()"></favourite>

1) Adding Input decorator
~~~ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @Input()
  isFavourite: boolean = false;

  onClickButton() {
    this.isFavourite = !this.isFavourite;
  }
}
~~~
