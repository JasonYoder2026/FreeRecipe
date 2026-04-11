import { Component } from '@angular/core';
import { Header } from '../header/header';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [Header, SidebarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
