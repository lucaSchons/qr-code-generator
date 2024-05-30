import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { Qrcodeservice } from '../qrcode.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [RouterOutlet, QRCodeModule],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.scss'
})

export class QrcodeComponent {
  qrdata: string = "teste";
  qrCodeDownloadLink: SafeUrl = "";

  constructor(public service: Qrcodeservice) {
    this.qrdata = this.service.qrcode;
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  activeAlert(){
    alert("Não implementado");
  }

}