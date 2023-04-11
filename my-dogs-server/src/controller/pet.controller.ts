import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
  UploadedFiles,
  Put,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { Pet } from '../model/Pet.schema';
import { PetService } from '../service/Pet.service';
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';

@Controller('/api/v1/Pet')
export class PetController {
  constructor(private readonly PetService: PetService) {}

  @Post()
  async createPet(@Res() response, @Req() request, @Body() Pet: Pet) {
    const requestBody = {
      lofName: Pet.lofName,
      surname: Pet.surname,
      sex: Pet.sex,
      transponderNumber: Pet.transponderNumber,
      birthdate: Pet.birthdate,
      dress: Pet.dress,
      createDate: Date.now(),
      createdBy: request.user,
    };
    console.log(requestBody);
    const newPet = await this.PetService.createPet(requestBody);
    return response.status(HttpStatus.CREATED).json({
      newPet,
    });
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/ban-types
  async read(@Query() id): Promise<Object> {
    return await this.PetService.readPet(id);
  }
  //   @Get('/:id')
  //   async stream(@Param('id') id, @Res() response, @Req() request) {
  //     return this.PetService.streamPet(id, response, request);
  //   }
  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() Pet: Pet) {
    const updatedPet = await this.PetService.update(id, Pet);
    return response.status(HttpStatus.OK).json(updatedPet);
  }
  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    await this.PetService.delete(id);
    return response.status(HttpStatus.OK).json({
      user: null,
    });
  }
}
