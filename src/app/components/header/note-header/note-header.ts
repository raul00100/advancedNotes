import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-note-header',
  templateUrl: './note-header.html',
})
export class NoteHeader {
  @Input() addForm: boolean = false;
}
