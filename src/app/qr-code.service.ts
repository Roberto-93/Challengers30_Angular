import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  generateQRCode(data: string, options?: QRCode.QRCodeToDataURLOptions): Promise<string> {
    return QRCode.toDataURL(data, options);
  }
}
