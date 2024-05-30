import { Routes } from '@angular/router';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'qrcode-page', component: QrcodeComponent},
];
