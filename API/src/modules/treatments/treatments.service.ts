import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TreatmentsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.treatment.findMany();
  }

  findOne(id: number) {
    return this.prisma.treatment.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.treatment.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.treatment.delete({ where: { id } });
  }
}
