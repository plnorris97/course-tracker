import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseTableComponent2 } from './course-table-2/course-table-2.component';
import { TeachMeFormComponent } from './teach-me-form/teach-me-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CourseTableComponent,
    CourseTableComponent2,
    TeachMeFormComponent,
    FooterComponent
  ],  
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  id: number;
  title: string;
  completionDate: Date; 
  sourceSite: string;
  category: string;
  notes: string;
 }
