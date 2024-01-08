import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { RandomPasswordComponent } from './random-password/random-password.component';
import { TimerComponent } from './timer/timer.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ChatComponent } from './chat/chat.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { WeatherComponent } from './weather/weather.component';
import { CalculatorComponent } from './calculator/calculator.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 { path: 'todo-list', component: TodoListComponent },
 { path: 'generate-password', component: RandomPasswordComponent }, 
 { path: 'time', component: TimerComponent }, 
 { path: 'converter-valuta', component: CurrencyConverterComponent }, 
 { path: 'chat', component: ChatComponent }, 
 { path: 'QrCode', component: QrCodeGeneratorComponent }, 
 { path: 'meteo', component: WeatherComponent }, 
 { path: 'gestione-spese', loadChildren: () => import('./gestione-spese/gestione-spese.module').then(m => m.GestioneSpeseModule) },
 { path: 'simple-blog', loadChildren: () => import('./simple-blog/simple-blog.module').then(m => m.SimpleBlogModule) },
 { path: 'calculator', component: CalculatorComponent }, 


 { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
