import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { FarmModule } from './modules/farm/farm.module';
import { LivestockModule } from './modules/livestock/livestock.module';
import { TreatmentsModule } from './modules/treatments/treatments.module';
import { WeightsModule } from './modules/weights/weights.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    FarmModule,
    LivestockModule,
    TreatmentsModule,
    WeightsModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
