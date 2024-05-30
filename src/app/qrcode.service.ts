import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Qrcodeservice {
  qrcode!: string;
  constructor() { }

}
