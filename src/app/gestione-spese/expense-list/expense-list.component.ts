import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../models/expense.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];
  private expensesSub: Subscription | null = null; // Inizializza come null

  constructor(private expenseService: ExpenseService) { }

  
  ngOnInit(): void {
    this.expensesSub = this.expenseService.getExpenses().subscribe(expenses => {
      this.expenses = expenses;
    });
    
  }

  
  removeExpense(expense: Expense): void {
    this.expenseService.deleteExpense(expense.id);
  }
  
}
