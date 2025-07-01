import { Controller, Get, Param, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WeightsService } from './weights.service';

@UseGuards(AuthGuard('jwt'))
@Controller('weights')
export class WeightsController {
  constructor(private readonly service: WeightsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
