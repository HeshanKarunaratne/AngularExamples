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