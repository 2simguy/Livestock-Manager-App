import { Controller, Get, Put, Body, Param, Post, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FarmService } from './farm.service';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('farm')
export class FarmController {
  constructor(private readonly farmService: FarmService) {}

  @Get()
  getFarm(@Req() req: any) {
    return this.farmService.findByUser(req.user.userId);
  }

  @Put()
  async updateFarm(@Req() req: any, @Body() body: UpdateFarmDto) {
    const farm = await this.farmService.findByUser(req.user.userId);
    return this.farmService.update(farm.id, body);
  }

  @Get('fields')
  async getFields(@Req() req: any) {
    const farm = await this.farmService.findByUser(req.user.userId);
    return this.farmService.fields(farm.id);
  }

  @Post('fields')
  async addField(@Req() req: any, @Body() body: CreateFieldDto) {
    const farm = await this.farmService.findByUser(req.user.userId);
    return this.farmService.addField(farm.id, body);
  }

  @Put('fields/:id')
  updateField(@Param('id') id: string, @Body() body: UpdateFieldDto) {
    return this.farmService.updateField(+id, body);
  }

  @Delete('fields/:id')
  removeField(@Param('id') id: string) {
    return this.farmService.removeField(+id);
  }
}
