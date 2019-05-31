import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
// import { TeachMeFormComponent } from './teach-me-form/teach-me-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    // TeachMeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
