import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  private notes = [];

  create(note) {
    const newNote = { id: Date.now(), ...note };
    this.notes.push(newNote);
    return newNote;
  }

  findAll() {
    return this.notes;
  }

  findOne(id: number) {
    return this.notes.find((note) => note.id === id);
  }

  update(id: number, note) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex === -1) {
      throw new Error('Note not found');
    }
    this.notes[noteIndex] = { ...this.notes[noteIndex], ...note };
    return this.notes[noteIndex];
  }

  remove(id: number) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex === -1) {
      throw new Error('Note not found');
    }
    const deletedNote = this.notes.splice(noteIndex, 1);
    return deletedNote[0];
  }
}