import { Component, EventEmitter, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matAddNotesOutline } from '@ng-icons/material-symbols/outline';

@Component({
  imports: [NgIcon],
  providers: [provideIcons({ matAddNotesOutline })],
  selector: 'app-list-header',
  templateUrl: './list-header.html',
})
export class ListHeader {
  @Output() state = new EventEmitter<void>();

  change(): void {
    this.state.emit();
  }
}
