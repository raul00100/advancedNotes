import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from '../../services/note-service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixDeleteBin5Line } from '@ng-icons/remixicon';
import { matAddNotesOutline } from '@ng-icons/material-symbols/outline';

@Component({
  imports: [NgIcon],
  providers: [provideIcons({ remixDeleteBin5Line, matAddNotesOutline })],
  selector: 'app-note-header',
  templateUrl: './note-header.html',
})
export class NoteHeader {
  @Input() addForm: boolean = false;
  @Input() selectedNote: string | null = null;

  @Output() delete = new EventEmitter<void>();
  @Output() openForm = new EventEmitter<void>();
  @Output() closeForm = new EventEmitter<void>();

  constructor(public service: NoteService) {}

  async removeNote(): Promise<void> {
    if (this.selectedNote === null) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete the note? \nThis action can't be undone",
    );
    if (!confirmed) return;

    await this.service.deleteNote(this.selectedNote);
    this.delete.emit();
  }

  open(): void {
    this.openForm.emit();
  }

  close(): void {
    this.closeForm.emit();
  }
}
