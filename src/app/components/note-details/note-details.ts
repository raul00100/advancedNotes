import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note-service';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-note-details',
  templateUrl: './note-details.html',
})
export class NoteDetails {
  @Input() addForm: boolean = false;
  @Input() selectedNote: string | null = null;
  @Output() state = new EventEmitter<void>();

  private noteTitle: string = '';
  private noteDetails: string = '';

  constructor(public service: NoteService) {}

  async sendNote() {
    if (!this.noteTitle.trim() || !this.noteDetails.trim()) return;
    await this.service.addNote(this.noteTitle, this.noteDetails);

    // reset the form after sending the note
    this.noteTitle = '';
    this.noteDetails = '';

    this.state.emit();
  }

  provideSelected(): Note | undefined {
    if (this.selectedNote === null) return undefined;

    return this.service.notes().find((note) => note.id === this.selectedNote);
  }
}
