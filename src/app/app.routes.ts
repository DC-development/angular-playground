import { Routes } from '@angular/router';
import {StartPageComponent} from './components/start-page/start-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'contact', component: ContactPageComponent }
];
