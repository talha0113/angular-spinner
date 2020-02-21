import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerModule } from '@talha0113/spinner';
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummy2Component } from './dummy2/dummy2.component';

@NgModule({
  declarations: [
    AppComponent,
    Dummy1Component,
    Dummy2Component
  ],
  imports: [
    BrowserModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
