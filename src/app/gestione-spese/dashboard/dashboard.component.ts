import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts'; // Importa il tipo corretto per i colori
import { ExpenseService } from '../expense.service'; // Importa il servizio ExpenseService
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
view: [number, number] = [700, 400]; // Inizializza la proprietà 'view' con un valore [larghezza, altezza]
data: any[] = []; // Inizializza la proprietà 'data' come array vuoto
colorScheme: Color = { // Dichiarazione di un oggetto Color personalizzato
  name: 'custom',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ['#AAAAAA'] // Due colori personalizzati
};


constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe(expenses => {
      this.data = this.transformDataForChart(expenses);
      console.log(this.data); // Debug
  });
}

  
  
  private transformDataForChart(expenses: Expense[]): any[] {
    let cumulativeTotal = 0; // Saldo cumulativo iniziale
    const combinedSeriesMap = new Map<string, number>();
  
    expenses.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .forEach(expense => {
      const date = this.formatDate(expense.date);
      if (expense.type === 'Entrate') {
        cumulativeTotal += expense.amount;
      } else {
        cumulativeTotal -= expense.amount;
      }
      combinedSeriesMap.set(date, cumulativeTotal);
    });
  
    const combinedSeriesArray = Array.from(combinedSeriesMap).map(([date, total]) => ({ name: date, value: total }));
  
    return [{ name: 'Saldo', series: combinedSeriesArray }];
  }
  
  
  

  private formatDate(dateInput: any): string {
    let date = dateInput;

    // Se date non è un oggetto Date, prova a convertirlo
    if (!(date instanceof Date)) {
      date = new Date(dateInput);
    }
  
    // Verifica che la conversione sia riuscita
    if (isNaN(date.getTime())) {
      return 'Data non valida'; // O gestisci l'errore come preferisci
    }
    // Esempio: formatta la data in "DD/MM/YYYY"
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 perché i mesi partono da 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
