import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './database/prisma.service';
import { UserModule } from './user/user.module';
import { SavingBankModule } from './expense_box/expense_box.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, SavingBankModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
