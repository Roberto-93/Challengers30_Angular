import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Challenges30';
  currentRoute: string='home';

  constructor(private router: Router) {
    this.router.events.pipe(
       // Filtra gli eventi per ottenere solo quelli di tipo NavigationEnd
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Una volta che un evento di tipo NavigationEnd è catturato, aggiorna la rotta corrente
      this.currentRoute = event.url;
    });
  }

  shouldShowBackButton() {
    return this.currentRoute !== '/home';
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
  
}
