import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // For HTTP requests
import { CommonModule } from '@angular/common'; // For *ngIf and *ngFor

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Declare the AppComponent
  ],
  imports: [
    BrowserModule, // Required for browser-based apps
    CommonModule,  // For using *ngIf and *ngFor
    HttpClientModule, // For making HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrapping the root component (AppComponent)
})
export class AppModule { }
