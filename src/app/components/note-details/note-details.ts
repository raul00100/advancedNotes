import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-note-details',
  templateUrl: './note-details.html',
})
export class NoteDetails {
  @Input() addForm: boolean = false;

  private noteTitle: string = '';
  private noteDetails: string = '';

  constructor(private service: NoteService) {}

  sendNote() {
    this.service.addNote(this.noteTitle, this.noteDetails);
  }
}
