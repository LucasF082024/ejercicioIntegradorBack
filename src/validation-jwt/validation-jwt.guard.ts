import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoginService } from 'src/login/login.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthAdmin implements CanActivate {
  //constructor(private readonly loginService: LoginService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('entro');
    const request = context.switchToHttp().getRequest();
    const token = request.headers['token'];
    console.log(token);
    return;

    // Verificar si el header 'role' es igual a 'admin'
  }
}
