import { Component, signal } from '@angular/core';
import { CardPrincipal } from "./components/card-principal/card-principal";

@Component({
  selector: 'app-root',
  imports: [CardPrincipal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('to-do-list');
}
