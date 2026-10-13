import { Component, signal } from '@angular/core';
import { NoteDetails } from './components/note-details/note-details';
import { NoteList } from './components/note-list/note-list';
import { ListHeader } from './components/header/list-header/list-header';
import { NoteHeader } from './components/header/note-header/note-header';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NoteDetails, NoteList, ListHeader, NoteHeader, FormsModule],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly addForm = signal(false);
  protected readonly selectedNote = signal<string | null>(localStorage.getItem('selectedNote'));

  // open the form when the add button is clicked
  openState() {
    this.addForm.set(true);
  }

  // close the form when submit button is clicked or when the close button is clicked
  closeState() {
    this.addForm.set(false);
  }

  updateSelected(id: string) {
    this.selectedNote.set(id);
    localStorage.setItem('selectedNote', id);
  }
}
