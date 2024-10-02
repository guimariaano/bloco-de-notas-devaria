import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register') // Esta rota permite registrar um novo usuário.
  async register(@Body() body: { username: string; password: string }) {
    return this.authService.register(body.username, body.password);
  }


  @Post('login') // Rota para login de usuário
  async login(@Body() body: { username: string; password: string }) {
    return this.authService.login(body.username, body.password);
  }
}