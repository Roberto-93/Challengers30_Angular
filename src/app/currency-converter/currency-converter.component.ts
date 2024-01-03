import { Component } from '@angular/core';

interface ExchangeRates {
  [key: string]: { [key: string]: number };
}
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent {
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number = 0;

  // Lista fittizia di valute per l'esempio
  currencies: string[] = ['USD', 'EUR', 'GBP', 'JPY'];
  
  // Struttura fittizia per memorizzare i tassi di cambio
  exchangeRates: ExchangeRates = {
    'USD': { 'EUR': 0.85, 'GBP': 0.75, 'JPY': 110 },
    'EUR': { 'USD': 1.17, 'GBP': 0.88, 'JPY': 130 },
    // Aggiungi altre coppie di valute e i loro tassi di cambio
  };

  convertCurrency() {
    // Qui dovresti calcolare il tasso di cambio tra fromCurrency e toCurrency
    // Per ora usiamo un tasso fittizio
    const exchangeRate = this.getExchangeRate(this.fromCurrency, this.toCurrency);
    this.convertedAmount = this.amount * exchangeRate;
  }
  
  getExchangeRate(fromCurrency: string, toCurrency: string): number {
    // Ottiene il tasso di cambio dalla struttura dati
    const rates = this.exchangeRates[fromCurrency] || {};
    return rates[toCurrency] || 0; // Ritorna 0 se non troviamo una corrispondenza
  }
}
