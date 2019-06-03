import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseTableComponent2 } from './course-table-2/course-table-2.component';
import { TeachMeFormComponent } from './teach-me-form/teach-me-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseTableComponent2,
    TeachMeFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
