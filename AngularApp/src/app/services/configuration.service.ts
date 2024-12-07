import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private apiUrl = 'http://localhost:5000/api/configuration';  // Update this URL based on your actual API

  constructor(private http: HttpClient) { }

  getConfigurations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Add other methods to interact with different APIs if needed
}

