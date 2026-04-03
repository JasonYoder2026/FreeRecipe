import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Home } from './home/home';


export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: Login },
  { path: 'register', component: Signup},
  { path: 'home', component: Home }
];
