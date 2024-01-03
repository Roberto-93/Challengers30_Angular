import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestioneSpeseRoutingModule } from './gestione-spese-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardComponent,
    ExpenseListComponent,
    ExpenseFormComponent
  ],
  imports: [
    CommonModule,
    GestioneSpeseRoutingModule,
    ReactiveFormsModule,
    NgxChartsModule,
    MatIconModule

  ]
})
export class GestioneSpeseModule { }
