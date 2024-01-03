export interface Expense {
    id: string;        // Identificatore unico per la spesa
    amount: number;    // Importo della spesa
    date: Date;        // Data della spesa
    type: 'Entrate' | 'Uscite'; // Aggiungi questo campo

  }
  