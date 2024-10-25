import { IsOptional, IsString } from "class-validator";
import { IsEmail }

export class CreateUsuarioDto {
  @IsEmail()
  correo: string;

  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  apellido?: string;
}
