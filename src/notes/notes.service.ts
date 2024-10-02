import { Injectable } from '@nestjs/common';

@Injectable() // Armazenamento em memória para as notas
export class NotesService {
  private notes = [];

  create(note) { // Cria uma nova nota
    const newNote = { id: Date.now(), ...note };
    this.notes.push(newNote);
    return newNote;
  }
  // Retorna todas as notas
  findAll() {
    return this.notes;
  }
  // Retorna uma nota pelo ID
  findOne(id: number) {
    return this.notes.find((note) => note.id === id);
  }
  // Atualiza uma nota pelo ID
  update(id: number, note) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex === -1) {
      throw new Error('Note not found');
    }
    this.notes[noteIndex] = { ...this.notes[noteIndex], ...note };
    return this.notes[noteIndex];
  }
  // Remove uma nota pelo ID
  remove(id: number) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex === -1) {
      throw new Error('Note not found');
    }
    const deletedNote = this.notes.splice(noteIndex, 1);
    return deletedNote[0];
  }
}