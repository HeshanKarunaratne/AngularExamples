import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.components';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleComponent } from './title/title.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
    TitleComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
