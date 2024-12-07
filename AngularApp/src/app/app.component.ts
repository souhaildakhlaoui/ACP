import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';  // Import the service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  configurations: any[] = [];

  constructor(private configService: ConfigurationService) { }

  ngOnInit() {
    this.configService.getConfigurations().subscribe(data => {
      this.configurations = data;
      console.log(this.configurations);
    });
  }
}
