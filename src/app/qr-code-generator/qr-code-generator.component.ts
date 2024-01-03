import { Component } from '@angular/core';
import { QrCodeService } from '../qr-code.service';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.scss']
})
export class QrCodeGeneratorComponent {
  data: string = '';
  qrCodeUrl: string = '';

  constructor(private qrCodeService: QrCodeService) {}

  generateQRCode() {
    if (!this.data.trim()) return;

    this.qrCodeService.generateQRCode(this.data)
      .then(url => this.qrCodeUrl = url)
      .catch(err => console.error(err));
  }
}
