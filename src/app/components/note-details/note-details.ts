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
  @Input() addFormState: boolean = false;
  @Input() selectedNote: string | null = null;

  @Output() closeAddForm = new EventEmitter<void>();
  @Output() closeEditForm = new EventEmitter<void>();

  public editTitle = '';
  public editContent = '';

  private noteTitle: string = '';
  private noteDetails: string = '';

  private _editedNote = false;
  @Input() set editFormState(value: boolean) {
    this._editedNote = value;
    if (value) this.setEditDetails();
  }

  get editFormState(): boolean {
    return this._editedNote;
  }

  constructor(public service: NoteService) {}

  async sendNote() {
    if (!this.noteTitle.trim() || !this.noteDetails.trim()) return;
    await this.service.addNote(this.noteTitle, this.noteDetails);

    // reset the value after submitting the form
    this.noteTitle = '';
    this.noteDetails = '';

    this.closeAddForm.emit();
  }

  selectedNoteDetails(): Note | undefined {
    if (this.selectedNote === null) return;

    return this.service.notes().find((note) => note.id === this.selectedNote);
  }

  setEditDetails() {
    if (this.selectedNote === null) return;

    const data = this.service.notes().find((note) => note.id === this.selectedNote);
    if (!data) return;

    // set the editing form values to the selected note's title and content
    this.editTitle = data.title;
    this.editContent = data.content;
  }

  submitEditForm() {
    if (this.selectedNote === null) return;

    this.service.editNote(this.selectedNote, this.editTitle, this.editContent);

    this.closeEditForm.emit();
  }
}
