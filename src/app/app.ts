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

  changeState() {
    this.addForm.set(true);
  }
}
