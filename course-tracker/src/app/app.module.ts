import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
