import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../../services/note-service';

@Component({
  imports: [],
  selector: 'app-note-list',
  templateUrl: './note-list.html',
})
export class NoteList {
  @Output() selected = new EventEmitter<string>();
  public holdColor: string | null = localStorage.getItem('selectedNote');
  constructor(private service: NoteService) {}

  ngOnInit(): void {
    void this.service.getNotes();
  }

  // sort the notes by createdAt date in descending order
  sortedNotes() {
    return this.service.notes().sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  selectNote(id: string) {
    this.holdColor = id;
    this.selected.emit(id);
  }
}
