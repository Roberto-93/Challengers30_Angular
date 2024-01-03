import { Injectable } from '@angular/core';
import { Expense } from './models/expense.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = []; // Array per memorizzare le spese
  private expensesUpdated = new BehaviorSubject<Expense[]>(this.expenses);

  constructor() { }

  

  // Metodi CRUD
  // getExpenses(): Expense[] {
  //   return this.expenses;
  // }
  getExpenses() {
    return this.expensesUpdated.asObservable();
  }

  getExpenseById(id: string): Expense {
    const expense = this.expenses.find(expense => expense.id === id);
    if (!expense) {
      // Gestisci il caso in cui la spesa non viene trovata
      // Potresti lanciare un errore o ritornare un valore di default
      throw new Error('Spesa non trovata');
    }
    return expense;
  }
  
  addExpense(expense: Expense): void {
    this.expenses.push(expense);
    this.expensesUpdated.next(this.expenses.slice());

  }

  updateExpense(id: string, updatedExpense: Expense): void {
    const index = this.expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
      this.expenses[index] = updatedExpense;
    }
  }

  deleteExpense(id: string): void {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
    this.expensesUpdated.next(this.expenses.slice());

  }
}
