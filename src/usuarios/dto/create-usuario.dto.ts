import {
  IsAlphanumeric,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MIN_LENGTH,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(10)
  password: string;

  @IsString()
  rol: string;
}
