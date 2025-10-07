import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Leftsidebar } from './leftsidebar/leftsidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Leftsidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signup');
}
