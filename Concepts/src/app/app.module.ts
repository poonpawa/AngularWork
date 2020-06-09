import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservableBasicsComponent } from './observable-basics/observable-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableBasicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
