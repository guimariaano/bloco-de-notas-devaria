import { Injectable } from '@nestjs/common';

@Injectable() // Armazenamento em memória para os usuários
export class AuthService {
  private users = [];

  // Registra um novo usuário
  async register(username: string, password: string) {
    const user = { id: Date.now(), username, password };
    this.users.push(user);
    return user;
  }
  
// Faz login de um usuário, verificando as credenciais
  async login(username: string, password: string) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
}