import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  weather: any;
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  search() {
    if (this.city.trim()) {
      this.weatherService.getWeather(this.city).subscribe(data => {
        this.weather = data;
      });
    }
  }
}
