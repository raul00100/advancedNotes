import { Component } from '@angular/core';
import { NoteService } from '../../services/note-service';

@Component({
  imports: [],
  selector: 'app-note-list',
  templateUrl: './note-list.html',
})
export class NoteList {
  constructor(public service: NoteService) {}

  ngOnInit(): void {
    void this.service.getNotes();
  }
}
