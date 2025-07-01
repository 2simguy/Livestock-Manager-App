import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LivestockService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.livestock.findMany();
  }

  create(data: any) {
    return this.prisma.livestock.create({ data });
  }

  findOne(id: number) {
    return this.prisma.livestock.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.livestock.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.livestock.delete({ where: { id } });
  }
}
