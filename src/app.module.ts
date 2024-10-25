// app.module.ts, que es el modulo raíz, encargado
// de transferir las configuraciones a los demas modulos de la aplicación. Actúa como un
// contenedor central que inyecta configuraciones y dependencias en los demás módulos de la
// aplicación. Al configurar módulos globales como ConfigModule y TypeOrmModule, te aseguras
// de que todas las partes de la aplicación tengan acceso a la configuración necesaria sin duplicar

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagosModule } from './pagos/pagos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule, PagosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
