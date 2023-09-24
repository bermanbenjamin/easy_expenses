import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { SavingBankController } from './expense_box.controller';
import { SavingBankService } from './expense_box.service';

@Module({
  controllers: [SavingBankController],
  providers: [SavingBankService, PrismaService],
})
export class SavingBankModule {}
