import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = [];

  async register(username: string, password: string) {
    const user = { id: Date.now(), username, password };
    this.users.push(user);
    return user;
  }

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