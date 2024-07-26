import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/utils/hash';
import { AuthAdmin } from 'src/validation-jwt/validation-jwt.guard';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const { password } = createUsuarioDto;
      const res = await hashPassword(password);
      createUsuarioDto['password'] = res;
      return await this.usuarioRepository.save(createUsuarioDto);
    } catch (error) {
      throw new BadRequestException('El email ya existe');
    }
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(email: string) {
    return this.usuarioRepository.findOneBy({ email });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}
