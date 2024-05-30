import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule, NgForm} from '@angular/forms';
import { Qrcodeservice } from '../qrcode.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, QRCodeModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(public service: Qrcodeservice, private router: Router){}

  onSubmit(form: NgForm) {
    const data = form.value.url;
    this.service.qrcode = data;
    this.navigateToQrcodePage();
  }

  navigateToQrcodePage() {
    this.router.navigate(['/qrcode-page']);
  }

  inputSelected() {
    const formElement = document.querySelector('#form-selected');
    if (formElement != null) {
      formElement.classList.add('focused');
    }
  }

  inputUnselected() {
    const formElement = document.querySelector('#form-selected');
    if (formElement != null) {
      formElement.classList.remove('focused');
    }
  }


}
