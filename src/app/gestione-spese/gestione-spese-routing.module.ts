import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'list', component: ExpenseListComponent },
  { path: 'add', component: ExpenseFormComponent },
  { path: 'edit/:id', component: ExpenseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestioneSpeseRoutingModule { }
