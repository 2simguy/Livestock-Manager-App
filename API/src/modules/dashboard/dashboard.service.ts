import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async summary() {
    const total = await this.prisma.livestock.count();
    const avgWeight = await this.prisma.weightRecord.aggregate({ _avg: { weightKg: true } });
    return { totalLivestock: total, avgWeight: avgWeight._avg.weightKg };
  }

  recentActivity() {
    return this.prisma.treatment.findMany({ take: 5, orderBy: { date: 'desc' } });
  }
}
