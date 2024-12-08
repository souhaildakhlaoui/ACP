import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for the ConfigurationService
import { RouterModule } from '@angular/router'; // Import RouterModule for routing (including router-outlet)
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like ngIf, ngFor

@Component({
  selector: 'app-root',
  standalone: true, // Mark this component as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HttpClientModule, RouterModule, CommonModule], // Import the necessary modules
  providers: [ConfigurationService] // Add ConfigurationService to the providers array
})
export class AppComponent implements OnInit {
  title = 'Angular App'; // Define the missing title property
  configurations: any[] = [];

  constructor(private configService: ConfigurationService) { }

  ngOnInit() {
    this.configService.getConfigurations().subscribe(data => {
      this.configurations = data;
      console.log(this.configurations);
    });
  }
}
