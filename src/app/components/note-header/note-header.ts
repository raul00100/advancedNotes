import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from '../../services/note-service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixDeleteBin5Line } from '@ng-icons/remixicon';
import { matAddNotesOutline } from '@ng-icons/material-symbols/outline';
import { lucideEdit } from '@ng-icons/lucide';

@Component({
  imports: [NgIcon],
  providers: [provideIcons({ remixDeleteBin5Line, matAddNotesOutline, lucideEdit })],
  selector: 'app-note-header',
  templateUrl: './note-header.html',
})
export class NoteHeader {
  @Input() addFormState: boolean = false;
  @Input() editFormState: boolean = false;
  @Input() selectedNote: string | null = null;

  @Output() clearSelectedNote = new EventEmitter<void>();
  @Output() openAddForm = new EventEmitter<void>();
  @Output() closeAddForm = new EventEmitter<void>();
  @Output() openEditForm = new EventEmitter<void>();
  @Output() closeEditForm = new EventEmitter<void>();

  constructor(public service: NoteService) {}

  async removeNote(): Promise<void> {
    if (this.selectedNote === null) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete the note? \nThis action can't be undone",
    );
    if (!confirmed) return;

    await this.service.deleteNote(this.selectedNote);
    this.clearSelectedNote.emit();
  }

  newAddForm(): void {
    this.openAddForm.emit();
  }

  removeAddForm(): void {
    this.closeAddForm.emit();
  }

  addEditForm(): void {
    this.openEditForm.emit();
  }

  removeEditForm(): void {
    this.closeEditForm.emit();
  }
}
