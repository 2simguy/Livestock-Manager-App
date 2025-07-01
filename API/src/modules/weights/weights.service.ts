import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WeightsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.weightRecord.findMany();
  }

  findOne(id: number) {
    return this.prisma.weightRecord.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.weightRecord.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.weightRecord.delete({ where: { id } });
  }
}
