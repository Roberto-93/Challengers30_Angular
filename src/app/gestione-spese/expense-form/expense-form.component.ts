import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  expenseForm: FormGroup = this.fb.group({}); // Inizializzazione qui
  editing = false; // Verrà impostato a true se stai modificando una spesa esistente

  constructor(private fb: FormBuilder, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      amount: [null, [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      type: ['expense', Validators.required] // default to 'expense'

    });

    // Se stai modificando una spesa esistente, popola il form qui
  }

  onSubmit(): void {
    if (this.expenseForm.valid) {
      const newExpense: Expense = {
        ...this.expenseForm.value,
        id: Math.random().toString(36).substring(2, 9) // generazione di un ID casuale
      };
      this.expenseService.addExpense(newExpense);
      // Resetta il form o esegui altre azioni necessarie
    
     // Resetta il form
     this.expenseForm.reset();
    }
  }
}
