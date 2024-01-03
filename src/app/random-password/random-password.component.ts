import { Component } from '@angular/core';

@Component({
  selector: 'app-random-password',
  templateUrl: './random-password.component.html',
  styleUrls: ['./random-password.component.scss']
})
export class RandomPasswordComponent {

  generatedPassword: string = '';

  generatePassword(length: number = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.generatedPassword = password;
  }
}
