import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-note-header',
  templateUrl: './note-header.html',
})
export class NoteHeader {
  @Input() addForm: boolean = false;
}
