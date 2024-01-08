import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { RandomPasswordComponent } from './random-password/random-password.component';
import { TimerComponent } from './timer/timer.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { WeatherComponent } from './weather/weather.component';
import { SimpleBlogModule } from './simple-blog/simple-blog.module';
import { CalculatorComponent } from './calculator/calculator.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
    RandomPasswordComponent,
    TimerComponent,
    CurrencyConverterComponent,
    ChatComponent,
    QrCodeGeneratorComponent,
    WeatherComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    SimpleBlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
