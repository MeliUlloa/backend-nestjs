import {  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards, } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { PagosService } from './pagos.service';

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}
// Inyecta el servicio `PagosService` para manejar la lógica del negocio (CRUD de pagos)
  
@Post() // Define que esta ruta es un POST (para crear un nuevo recurso)
// Usa `@Body()` para acceder al cuerpo de la solicitud, que contendrá los datos para crear un pago
  create(@Body() createPagoDto: CreatePagoDto) {
    //Llama al método `create` del servicio para crear un pago con los datos proporcionados
    return this.pagosService.create(createPagoDto);
  }

  @Get() // Define que esta ruta es un GET (para obtener recursos)
  findAll() {
    return this.pagosService.findAll();
    // Llama al método `findAll` del servicio para obtener todos los pagos
  }

  @Get(':id') // Define que esta ruta es un GET para obtener un recurso por su `id`
  // Usa `@Param()` para acceder al parámetro `id` en la ruta y convierte el `id` a un número usando `ParseIntPipe`
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pagosService.findOne(id); 
    // Llama al método `findOne` del servicio para obtener un pago con el `id` especificado
  }

  @Patch(':id') // Define que esta ruta es un PATCH para actualizar un recurso parcialmente
  update(
    @Param('id', ParseIntPipe) id: number,
    // Usa `@Param()` para acceder al `id` en la ruta y convierte el `id` a un número
    @Body() updatePagoDto: UpdatePagoDto,
    // Usa `@Body()` para acceder al cuerpo de la solicitud, que contendrá los datos para actualizar el pago
  ) {
    return this.pagosService.update(id, updatePagoDto);
    // Llama al método `update` del servicio para actualizar un pago con el `id` y los datos proporcionados
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pagosService.remove(id);
  }
}

// Los decoradores como @Controller, @Get, @Post, @Param, y @Body 
// son proporcionados por NestJS y se utilizan para asociar métodos 
// de la clase con rutas HTTP específicas.

// ParseIntPipe:
// Un pipe en NestJS es una clase que se usa para transformar o validar datos antes de que lleguen a los métodos del controlador. 
// El ParseIntPipe específicamente convierte el valor de un parámetro de la ruta (que por defecto es un string) en un número entero.
// Sin el ParseIntPipe, el id que recibes en las rutas (por ejemplo, @Get(':id') o @Delete(':id')) 
// sería tratado como una cadena de texto (string). Si necesitas realizar operaciones numéricas, tendrías que convertir manualmente ese string a número en cada método,
// lo cual puede ser propenso a errores o inconsistencias.