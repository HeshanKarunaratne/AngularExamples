import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArchiveComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'archive/:year/:month', component: ArchiveComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
