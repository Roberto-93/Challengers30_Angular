import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  currentOperation: string = '';
  displayValue: string = '0';
  private previousInput: string = '';
  private currentInput: string = '';
  private operator: string = '';
  private isNewInput: boolean = true;

  onButtonPress(symbol: string) {
    if ('0123456789.'.includes(symbol)) {
      this.appendNumber(symbol);
    } else if ('+-x÷'.includes(symbol)) {
      this.chooseOperation(symbol);
    } else if (symbol === '=') {
      this.compute();
    } else if (symbol === 'C') {
      this.clear();
    } else if (symbol === 'CE') {
      this.clearEntry();
    } else if (symbol === '⌫') {
      this.delete();
    } else if (symbol === '%') {
      this.percent();
    } else if (symbol === '1/x') {
      this.reciprocal();
    } else if (symbol === 'x²') {
      this.square();
    } else if (symbol === '√x') {
      this.squareRoot();
    } else if (symbol === '±') {
      this.negate();
    }
  }

  private appendNumber(number: string) {
    if (number === '.' && this.currentInput.includes('.')) return;
    if (this.isNewInput || this.currentInput === '0') {
      this.currentInput = number;
      this.isNewInput = false;
    } else {
      this.currentInput += number;
    }
    this.updateDisplay();
  }

  private chooseOperation(op: string) {
    if (this.currentInput === '') return;
    if (this.previousInput !== '') {
      this.compute();
    }
    this.operator = op;
    this.previousInput = this.currentInput;
    this.currentInput = '';
    this.isNewInput = true;
  }

  private compute() {
    let computation;
    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'x':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
     // Dopo aver calcolato il risultato, aggiorna l'operazione corrente con il risultato
     this.currentOperation = `${this.previousInput} ${this.operator} ${this.currentInput}`;
     this.displayValue = computation.toString();
      
     // Resetta le variabili per il prossimo input
    this.currentInput = computation.toString();
    this.operator = '';
    this.previousInput = '';
    this.isNewInput = true;

    // Aggiorna il display con l'operazione e il risultato
    this.updateDisplay();
  }

  private clear() {
    this.currentInput = '0';
    this.previousInput = '';
    this.operator = '';
    this.updateDisplay();
    this.isNewInput = true;
    this.currentOperation = '';
  }

  private clearEntry() {
    this.currentInput = '0';
    this.updateDisplay();
    this.isNewInput = true;
    this.currentOperation = '';

  }

  private delete() {
    //this.currentInput = this.currentInput.slice(0, -1) || '0';
    this.currentOperation = '';

    this.updateDisplay();

  }

  private percent() {
    const current = parseFloat(this.currentInput);
    if (isNaN(current)) return;
    this.currentInput = (current / 100).toString();
    this.updateDisplay();
  }

  private reciprocal() {
    const current = parseFloat(this.currentInput);
    if (isNaN(current) || current === 0) return;
    this.currentInput = (1 / current).toString();
    this.updateDisplay();
  }

  private square() {
    const current = parseFloat(this.currentInput);
    if (isNaN(current)) return;
    this.currentInput = (current * current).toString();
    this.updateDisplay();
  }

  private squareRoot() {
    const current = parseFloat(this.currentInput);
    if (isNaN(current) || current < 0) return;
    this.currentInput = Math.sqrt(current).toString();
    this.updateDisplay();
  }

  private negate() {
    const current = parseFloat(this.currentInput);
    if (isNaN(current)) return;
    this.currentInput = (current * -1).toString();
    this.updateDisplay();
  }

  private updateDisplay() {
 // Aggiorna il display con l'input corrente o il risultato
 this.displayValue = this.currentInput;
    
 // Aggiorna l'operazione corrente da mostrare sopra il risultato
 if (this.previousInput && this.operator) {
   this.currentOperation = `${this.previousInput} ${this.operator} ${this.currentInput}`;
 } else {
  //  this.currentOperation = '';
 }   
  }
}
