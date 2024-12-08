import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


 
 

  
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter([]), // Define your routes here
      provideHttpClient() // Provide HttpClient for services
    ]
  }).catch(err => console.error(err));
  