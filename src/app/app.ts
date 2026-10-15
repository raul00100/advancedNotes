import { Component, signal } from '@angular/core';
import { NoteDetails } from './components/note-details/note-details';
import { NoteList } from './components/note-list/note-list';
import { NoteHeader } from './components/note-header/note-header';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NoteDetails, NoteList, NoteHeader, FormsModule],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly addFormState = signal(localStorage.getItem('addForm') === 'true');
  protected editFormState = signal(localStorage.getItem('editForm') === 'true');
  protected readonly selectedNote = signal<string | null>(localStorage.getItem('selectedNote'));

  openAddForm() {
    this.addFormState.set(true);
    localStorage.setItem('addForm', 'true');
  }

  closeAddForm() {
    this.addFormState.set(false);
    localStorage.setItem('addForm', 'false');
  }

  updateSelectedNote(id: string) {
    this.selectedNote.set(id);
    localStorage.setItem('selectedNote', id);
  }

  clearSelectedNote() {
    this.selectedNote.set(null);
    localStorage.removeItem('selectedNote');
  }

  openEditForm() {
    this.editFormState.set(true);
    localStorage.setItem('editForm', 'true');
  }

  closeEditForm() {
    this.editFormState.set(false);
    localStorage.setItem('editForm', 'false');
  }
}
