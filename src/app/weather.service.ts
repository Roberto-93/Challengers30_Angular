import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '313aa92456a61ee74b509acbf34b9d9b';
  private url = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(`${this.url}/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
