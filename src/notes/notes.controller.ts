import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post() // Cria uma nova nota
  create(@Body() createNoteDto: { title: string; content: string }) {
    return this.notesService.create(createNoteDto);
  }

  @Get() // Retorna todas as notas
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id') // Retorna uma única nota pelo ID
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(Number(id));
  }

  @Put(':id')  // Atualiza uma nota pelo ID
  update(
    @Param('id') id: string,
    @Body() updateNoteDto: { title?: string; content?: string },
  ) {
    return this.notesService.update(Number(id), updateNoteDto);
  }

  @Delete(':id') // Remove uma nota pelo ID
  remove(@Param('id') id: string) {
    return this.notesService.remove(Number(id));
  }
}