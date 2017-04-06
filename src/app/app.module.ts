import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// third-party
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
