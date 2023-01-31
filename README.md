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

1) Adding Input decorator- use aliases
~~~ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @Input("is-favourite")
  isFavourite: boolean = false;

  onClickButton() {
    this.isFavourite = !this.isFavourite;
  }
}
~~~

Raising Events
~~~ts
<favourite [is-favourite]="post.isFavourite" (change)="onFavouriteChange()"></favourite>
~~~

~~~ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent {
  @Input("is-favourite") isFavourite: boolean = false;
  @Output() change = new EventEmitter();

  onClickButton() {
    this.isFavourite = !this.isFavourite;
    this.change.emit();
  }
}
~~~

Passing Event Data
~~~ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent {
  @Input("is-favourite") isFavourite: boolean = false;
  @Output() change = new EventEmitter();

  onClickButton() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ value: this.isFavourite, name: "heshan" });
  }
}
~~~

~~~ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: "title",
    isFavourite: true
  }

  onFavouriteChange(eventArgs: object) {
    console.log("favourite changed ", eventArgs);
  }
}
~~~

Different ways to define styles
style tag in html > inline styles in html > styles in ts(styles or stylesUrl)
~~~ts
<style>
    .star-color {
        font-size: 20rem;
    }
</style>

<h1 class="star-color" [class.star-color-red]="isFavourite" [class.star-color-blue]="!isFavourite"
    (click)="onClickButton()">
    heshan</h1>
~~~

~~~ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',

  styles: [
    `
    .star-color {
      font-size: 5rem;
    }
    .star-color-red {
    color: green;
    }
    `
  ],
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @Input("is-favourite") isFavourite: boolean = false;
  @Output() change = new EventEmitter();

  onClickButton() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ value: this.isFavourite, name: "heshan" });
  }
}

~~~

Easy html tag generation

div.panel.panel-default>div.panel-heading+div.panel.body
PRESS tab to generate below format

~~~html
<div class="panel panel-default">
    <div class="panel-heading">Heading</div>
    <div class="panel-body">Body</div>
</div>
~~~

Using ng-content for reusable components

~~~html
<div class="panel panel-default">
    <div class="panel-heading">
        <ng-content select=".heading"></ng-content>
    </div>
    <div class="panel-body">
        <ng-content select=".body"></ng-content>
    </div>
</div>
~~~

~~~html
<bootstrap-panel>
    <div class="heading">Heading</div>
    <div class="body">
        <h2>body</h2>
        <p>Heshans paragraph</p>
    </div>
</bootstrap-panel>
~~~

ng-container: If you dont need to render an additional html tag use ng-container that only renders the value

~~~html
<bootstrap-panel>
    <ng-container class="heading">Heading</ng-container>
    <div class="body">
        <h2>body</h2>
        <p>Heshans paragraph</p>
    </div>
</bootstrap-panel>
~~~

Directives

1) ngIf
~~~html
<div *ngIf="courses.length > 0">
    List of courses
</div>
<div *ngIf="courses.length == 0">
    No courses yet
</div>
~~~

~~~html
<div *ngIf="courses.length > 0; else noCourses">
    List of courses
</div>
<ng-template #noCourses>
    No courses yet
</ng-template>
~~~

~~~html
<div *ngIf="courses.length > 0; then coursesList else noCourses">
    List of courses
</div>
<ng-template #coursesList>
    List of courses
</ng-template>
<ng-template #noCourses>
    No courses yet
</ng-template>
~~~

Or you can use [hidden] 
~~~html
<div [hidden]="courses.length == 0">
    List of courses
</div>
<div [hidden]="courses.length > 0">
    No courses yet
</div>
~~~

2) ngSwitch
~~~html
<ul class="nav nav-pills">
    <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
    <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
</ul>

<div [ngSwitch]="viewMode">
    <div *ngSwitchCase="'map'">Map View Content</div>
    <div *ngSwitchCase="'list'">List View Content</div>
    <div *ngSwitchDefault>Otherwise</div>
</div>
~~~

3) ngFor
~~~html
<ul>
    <li *ngFor="let course of courses; even as even; index as i">
        {{i}} - {{course.name}} <span *ngIf="even">(EVEN)</span>
    </li>
</ul>
~~~

4) ngClass
~~~html
<i class="bi" [class.bi-star-fill]="isLiked" [class.bi-star]="!isLiked" (click)="onFavouriteClick()"></i>
~~~

Can be converted to below format
~~~html
<i class="bi" [ngClass]="{
    'bi-star-fill':isLiked,
    'bi-star':!isLiked
}" (click)="onFavouriteClick()"></i>
~~~

5) ngStyle
~~~html
<button [ngStyle]="{
        'backgroundColor':canSave ? 'blue':'gray',
        'color':canSave ? 'white':'black',
        'fontWeight':canSave ? 'bold':'normal'
    }">
    Save</button>
~~~

Creating Custom Directives:
You can have custom directives to have more control over behaviour of dom elements.
You can use @HostListener() decorator to subscribe to the events raised from the host dom objects
~~~ts
<input type="text" [appInputFormat]="'uppercase'" />

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string = "";
  constructor(private el: ElementRef) {
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
}
~~~

Form Control: value, touched, untouched, dirty, pristine, valid, errors
Form Group: value, touched, untouched, dirty, pristine, valid, errors

Reactive Forms: More control over validation login, Good for conplex forms, Unit testable
Template Driven Forms: Simple Forms, Simple validation, Less code, Easier to create

ngModel
1) If adding ngmodel you need to add 'name' attribute as well
2) If you need to log ngModel value need to create a template variable and assign it ngModel value and pass it to a log() so that it can be console.log()
~~~html
 <input ngModel name="firstName" #firstName="ngModel" (change)="log(firstName)" id="firstName" type="text"
            class="form-control">
~~~

Touched and not Valid
~~~html
<div class="alert alert-danger" *ngIf="firstName.touched && !firstName.valid">First Name is required</div>
~~~

Specific Validations
~~~html
<form>
    <div class="form-group">
        <label for="firstName">First Name</label>
        <input required minlength="4" maxlength="10" pattern="banana" ngModel name="firstName" #firstName="ngModel"
            (change)="log(firstName)" id="firstName" type="text" class="form-control">
        <div class="alert alert-danger" *ngIf="firstName.touched && !firstName.valid">
            <div *ngIf="firstName.errors?.['required']">First name is required</div>
            <div *ngIf="firstName.errors?.['minlength']">First should be of minimum {{
                firstName.errors?.['minlength']?.requiredLength }} characters</div>
            <div *ngIf="firstName.errors?.['pattern']">Doesn't match the pattern</div>
        </div>
    </div>
    <div class="form-group">
        <label for="comment">Comment</label>
        <textarea ngModel name="comment" id="comment" type="text" rows="30" cols="30" class="form-control"></textarea>
    </div>
    <button class="btn btn-primary">Submit</button>
</form>
~~~

Styling invalid input fields
~~~scss
.form-control.ng-touched.ng-invalid {
    border: 2px red solid;
}
~~~

ngForm
~~~html
<form #f="ngForm" (ngSubmit)="submit(f)">
    <div ngModelGroup="contact" #contact="ngModelGroup">
    </div>
    <div class="form-group">
        <label for="comment">Comment</label>
        <textarea ngModel name="comment" id="comment" type="text" rows="30" cols="30" class="form-control"></textarea>
    </div>
    <button class="btn btn-primary">Submit</button>
</form>
~~~

ngModelGroup
~~~html
<form #f="ngForm" (ngSubmit)="submit(f)">
    <div ngModelGroup="contact" #contact="ngModelGroup">
        <div class="form-group">
        </div>
    </div>
    <div class="form-group">
    </div>
    <button class="btn btn-primary">Submit</button>
</form>
~~~

Two classes to keep track of state of Input fields and validity
FormControl: One Input Field     <------------------------ngModel
FormGroup: Group of Input Fields <------------------------ngForm       ------> output ngSubmit
                                                          ngModelGroup


Disable Submit Button
~~~html
<form #f="ngForm" (ngSubmit)="submit(f)">
    <button class="btn btn-primary" [disabled]="!f.valid">Submit</button>
</form>
~~~

Working With Checkboxes
~~~html
<div class="checkbox">
        <label>
            <input type="checkbox" ngModel name="isSubscribed"> Subscribe to mailing list
        </label>
</div>
~~~

See the Form in a form of JSON
~~~html
<p>{{f.value | json}}</p>
~~~

Dropdown List:
*** Use ngValue when you want to map complex object rather than passing only id to value
~~~html
<div class="form-group">
        <label for="contactMethod">Contact Method</label>
        <select multiple ngModel name="contactMethod" id="contactMethod" class="form-control">
            <option *ngFor="let method of contactMethods" [ngValue]="method">{{method.name}}</option>
        </select>
</div>
~~~

Radio Buttons
~~~html
<div *ngFor="let method of contactMethods" class="radio">
        <label>
            <input ngModel type="radio" name="contactMethod" [value]="method.id">
            {{ method.name }}
        </label>
</div>
~~~

Reactive Forms

Need to import below module
    import { ReactiveFormsModule } from '@angular/forms';

~~~ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
}
~~~

~~~html
<form [formGroup]="form">
    <div class="form-group">
        <label for="username">Username</label>
        <input formControlName="username" id="username" type="text" class="form-control">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input formControlName="password" id="password" type="text" class="form-control">
    </div>
    <button class="btn btn-primary" type="submit">Sign Up</button>
</form>
~~~

Add Validations
~~~ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
~~~

~~~html
<form [formGroup]="form">
    <div class="form-group">
        <label for="username">Username</label>
        <input formControlName="username" id="username" type="text" class="form-control">
        <div *ngIf="username?.touched && username?.invalid" class="alert alert-danger">Username
            is required</div>
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input formControlName="password" id="password" type="text" class="form-control">
        <div *ngIf="password?.touched && password?.invalid" class="alert alert-danger">Password
            is required</div>
    </div>
    <button class="btn btn-primary" type="submit">Sign Up</button>
</form>
~~~

Creating Custom Validation
~~~ts
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        return null;
    }
}
~~~

~~~html
<div *ngIf="username?.touched && username?.invalid" class="alert alert-danger">
            <div *ngIf="username?.errors?.['required']">Username is required</div>
            <div *ngIf="username?.errors?.['cannotContainSpace']">Username cannot contain space</div>
            <div *ngIf="username?.errors?.['minlength']">Minimum length is {{
                username?.errors?.['minlength']?.requiredLength}}</div>
</div>
~~~

When we are using asynOperations for validatorFn the signature changes

AsyncValidators: returns a Promise object of ValidationErrors or null
For a Promise you need to supply a resolve and a reject
Rather than using return use resolve and reject (when return used it automatically takes out from the block- but with resolve and reject this behaviour is not happening)

~~~ts
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'heshan')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}
~~~

This will trigger error after 2 seconds since we used setTimeout async function
~~~html
<div *ngIf="username?.errors?.['shouldBeUnique']">Username already taken</div>
~~~

Loader property pending
~~~html
<div *ngIf="username?.pending">Checking for uniqueness...</div>
~~~

Adding Validation to the Form
~~~ts
 login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
~~~

~~~html
<form [formGroup]="form" (ngSubmit)="login()">
    <div *ngIf="form.errors" class="alert alert-danger">Username and Password is invalid</div>
</form>
~~~

FormGroup
~~~ts
import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
~~~

~~~html
<form [formGroup]="form" (ngSubmit)="login()">
    <div *ngIf="form.errors" class="alert alert-danger">Username and Password is invalid</div>
    <div formGroupName="account">
        <div class="form-group">
            <label for="username">Username</label>
            <input formControlName="username" id="username" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input formControlName="password" id="password" type="text" class="form-control">
        </div>
    </div>
    <button class="btn btn-primary" type="submit">Sign Up</button>
</form>
~~~

FormArray
~~~html
<form>
    <input type="text" class="form-control" (keyup.enter)="addTopic(topic)" #topic>
    <ul class="list-group">
        <li *ngFor="let topic of getControls()" (click)="removeTopic(topic)" class="list-group-item">
            {{ topic.value}}
        </li>
    </ul>
</form>
~~~

~~~ts
import { AbstractControl } from '@angular/forms';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  getControls() {
    return (this.topics).controls;
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
~~~

FormBuilder
~~~ts
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
~~~

Consuming HTTP Services

~~~ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

~~~ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any = [];
  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      })
  }
}
~~~

~~~html
<ul class="list-group">
    <li *ngFor="let post of posts" class="list-group-item">{{post.title}}</li>
</ul>
~~~

Create Post
~~~ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any = [];
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      })
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(data => {
        let id = (data as any).id;
        post['id'] = id;
        this.posts.splice(0, 0, post);
      });
  }
}
~~~

Update Posts

~~~ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any = [];
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      })
  }

  updatePost(post: any) {
    this.http.patch(this.url + "/" + post.id, JSON.stringify({
      isRead: true
    })).subscribe(response => {
      console.log(response);
    })
  }
}
~~~

Delete Posts

~~~ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any = [];
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      })
  }
  deletePost(post: any) {
    this.http.delete(this.url + "/" + post.id).subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    })
  }
}
~~~

ngOnInit: Call http endpoints inside ngOnInit life cycle hooks

~~~ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      })
  }
}
~~~

Seperation of Concerns

~~~ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any) {
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({
      isRead: true
    }))
  }

  deletePost(id: any) {
    return this.http.delete(this.url + "/" + id);
  }
}
~~~

~~~ts
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      })
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";

    this.service.createPost(post)
      .subscribe(data => {
        let id = (data as any).id;
        post['id'] = id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post: any) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }
}
~~~

Unexpected Errors: Server is offline, Network is down, Unhandled exceptions
Expected Errors: Not Found(404), Bad Request(400)


Handling Unexpected Errors
~~~ts
  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
        console.log(response);
        this.posts = response;
      }, 
      error => {
        alert("An Unexpected Error occurred.");
        console.log(error);
      })
  }
~~~

Handling Expected Errors
~~~ts
 deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error.status === 404)
            alert("This post has already been deleted");
          else {
            alert("An Unexpected Error occurred.");
            console.log(error);
          }
        })
  }
~~~

Throwing Application specific Errors
~~~ts
import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(catchError((error: Response) => {
      if (error.status === 400)
        return throwError(new BadInput(error.json()));

      return throwError(new AppError(error.json()));
    }));
  }

  deletePost(id: any) {
    return this.http.delete(this.url + "/" + id).pipe(catchError((error: Response) => {
      if (error.status === 404)
        return throwError(new NotFoundError());

      return throwError(new AppError(error.json()));
    }));
  }
}
~~~

~~~ts
import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  constructor(private service: PostService) { }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";

    this.service.createPost(post)
      .subscribe(
        response => {
          let id = (response as any).id;
          post['id'] = id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            //this.form.setErrors(error.json())

          } else {
            alert("An Unexpected Error occurred.");
            console.log(error);
          }
        });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert("This post has already been deleted");
          else {
            alert("An Unexpected Error occurred.");
            console.log(error);
          }
        })
  }
}
~~~

Handle Unexpected Errors Globally
Need to register this in app-module.ts as a object to replace ErrorHandler 
~~~ts
import { AppErrorHandler } from './common/app-error-handler';
@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    {
      provide: ErrorHandler, useClass: AppErrorHandler
    }
  ],
  bootstrap: []
})
export class AppModule { }
~~~

Create a global MyErrorHanlder

~~~ts
import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert("An Unexpected Error occurred.");
        console.log(error);
    }
}
~~~

Optimistic Vs Pessimistic Way of Coding
We can call an api and refresh the page base on the result or we can directly refresh the page and then call the api and if there is an error revert the ui

Observables Vs Promises
1) Can convert Observables to Promises
2) Observables are lazy - nothing happens unless you subscribe
3) Allows reactive programming
4) Enables useful operators

Routing Steps
* Configure the routes(dont use slash in beginning)
* Add a router outlet
* Add links

How to define routes and components for each route

~~~ts
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

Make sure to use routerLink instead of href when using(href downloads full page onclick). 
If you are using a simple route use routerLink as an attribute and a string value.
If ypu are dealing with routeParameters use property binding syntax 

~~~html
<h4 class="media-heading"><a [routerLink]="['/followers', follower.id]">{{ follower.login }}</a></h4>
~~~

routerLinkActive property
~~~html
<li routerLinkActive="active current" class="nav-item">
    <a class="nav-link" routerLink="/followers">Followers</a>
</li>
~~~

ParamMap

~~~ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get("id");
        console.log("id:", id);
      })
  }

}
~~~

Routes with multiple parameters

~~~ts
RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ])
~~~

~~~html
 <h4 class="media-heading"><a [routerLink]="['/followers', follower.id, follower.login]">{{ follower.login }}</a>
  </h4>
~~~

Subscribing to multiple Observables

~~~ts
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];
  constructor(private service: GithubService, private route: ActivatedRoute) { }

  ngOnInit() {

    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .subscribe(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get("page");

        // this.service.getAll({id: id, page: page})
        //   .subscribe(
        //     followers => {
        //       this.followers = followers;
        //     })
 
        this.service.getAll()
          .subscribe(
            followers => {
              this.followers = followers;
            })
      })
  }
}
~~~

switchMap operator for cleaning 

~~~ts
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { combineLatest, map, switchMap } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];
  constructor(private service: GithubService, private route: ActivatedRoute) { }

  ngOnInit() {

    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get("page");
        return this.service.getAll()
      }))
      .subscribe(followers => this.followers = followers)
  }
}
~~~