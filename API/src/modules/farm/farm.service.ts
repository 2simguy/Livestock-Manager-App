import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FarmService {
  constructor(private readonly prisma: PrismaService) {}

  findByUser(userId: number) {
    return this.prisma.farm.findFirst({ where: { users: { some: { id: userId } } }, include: { fields: true } });
  }

  update(id: number, data: any) {
    return this.prisma.farm.update({ where: { id }, data });
  }

  fields(farmId: number) {
    return this.prisma.field.findMany({ where: { farmId } });
  }

  addField(farmId: number, data: any) {
    return this.prisma.field.create({ data: { ...data, farmId } });
  }

  updateField(id: number, data: any) {
    return this.prisma.field.update({ where: { id }, data });
  }

  removeField(id: number) {
    return this.prisma.field.delete({ where: { id } });
  }
}
