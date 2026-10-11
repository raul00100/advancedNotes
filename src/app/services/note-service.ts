import { Service, signal } from '@angular/core';
import { Note } from '../models/note.model';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

@Service()
export class NoteService {
  // private var that can be changed only by service
  private readonly _notes = signal<Note[]>([]);
  // public version of _note; only for reading
  readonly notes = this._notes.asReadonly();

  async addNote(title: string, content: string) {
    if (!title.trim() || !content.trim()) return;

    const notes = collection(db, 'notes');

    const newNote = {
      title: title,
      content: content,
      createdAt: new Date(),
    };

    await addDoc(notes, newNote);

    console.log('note was submitted successfully');
  }

  async getNotes(): Promise<void> {
    const snapshot = await getDocs(collection(db, 'notes'));

    const fetched: Note[] = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        title: doc.data()['title'],
        content: doc.data()['content'],
        createdAt: doc.data()['createdAt'].toDate(),
      };
    });
    this._notes.set(fetched);
  }
}
