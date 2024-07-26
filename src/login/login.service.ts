import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateLoginDto } from './dto/create-login.dto';
import { hashPassword, verifyPassword } from 'src/utils/hash';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async createJWT(loginDto: CreateLoginDto) {
    const { email, password } = loginDto;
    const usuario = await this.usuarioRepository.findOneBy({ email });
    if (!usuario) throw new BadRequestException('El usuario no existe');
    //tomo la contraseña encriptada del usuario
    const usuarioPassEncripted = usuario.password;
    const IsEqual = await verifyPassword(password, usuarioPassEncripted);
    if (!IsEqual) throw new BadRequestException('La contraseña es incorrecta');

    const data = { mail: usuario.email, rol: usuario.rol };
    const token = this.jwtService.sign(data, { expiresIn: 100 });
    return { token: token };
    /*
    const data = { user: { name: 'fede', apellido: 'Huenteman' } };
    const token = this.jwtService.sign(data, { expiresIn: 20 });

    return {
      token: token,
    };*/
    //UnauthorizedException
  }

  async verifyToken(token: string) {
    try {
      await this.jwtService.verify(token);
      const decoded = await this.jwtService.decode(token);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
