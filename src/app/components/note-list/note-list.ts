import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../../services/note-service';
import { EventManager } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-note-list',
  templateUrl: './note-list.html',
})
export class NoteList {
  @Output() selectedNote = new EventEmitter<string>();
  @Output() closeForm = new EventEmitter<void>();

  public saveSelectedNote: string | null = localStorage.getItem('selectedNote');
  loadError = '';

  constructor(private service: NoteService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.service.getNotes();
    } catch (error: unknown) {
      console.error('failed to fetch the notes', error);
      this.loadError = 'failed to fetch the notes';
    }
  }

  // sort the notes by createdAt date in descending order
  sortedNotes() {
    return this.service.notes().sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  selectNote(id: string) {
    this.saveSelectedNote = id;
    this.selectedNote.emit(id);

    this.closeForm.emit(); // close active form when clicking on a note from the list
  }
}
