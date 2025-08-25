import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer-action-bar',
  imports: [MatButtonModule, MatDividerModule],
  templateUrl: './footer-action-bar.html',
  styleUrl: './footer-action-bar.css',
})
export class FooterActionBar {
  @Output() clearListClicked = new EventEmitter<void>();
  @Output() clearCompletedClicked = new EventEmitter<void>();
  @Output() saveClicked = new EventEmitter<void>();

  onClearListClick() {
    console.log('Botão "Limpar lista" foi clicado no FooterActionBar');
    this.clearListClicked.emit();
  }

  onClearCompletedClick() {
    console.log('Botão "Limpar concluídas" foi clicado no FooterActionBar');
    this.clearCompletedClicked.emit();
  }

  onSaveClick() {
    console.log('Botão "Salvar" foi clicado no FooterActionBar');
    this.saveClicked.emit();
  }
}
