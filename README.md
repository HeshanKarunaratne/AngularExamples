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