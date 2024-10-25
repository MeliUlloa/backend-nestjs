import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsNumber()
  @IsPositive()
  @Type(()=> Number)
  
  id: number;
  @Type(()=>Date)
  @IsDate()
  @IsOptional()
  fecha_eliminado: Date;
}
