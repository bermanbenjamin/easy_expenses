import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class SavingBankService {
  constructor(private prisma: PrismaService) {}

  async createSavingBank(data: any, user_id: string) {
    return await this.prisma.expenseBox.create({
      data: {
        user: {
          connect: {
            id: user_id,
          },
        },
        name: data.name,
        description: data.description,
        endDate: data.endDate,
      },
    });
  }

  async getAllSavingBank(user_id: string) {
    return await this.prisma.expenseBox.findMany({
      where: {
        user: {
          id: user_id,
        },
      },
    });
  }

  async getSavingBankById(id: string, user_id: string) {
    return await this.prisma.expenseBox.findFirst({
      where: {
        id: id,
        user: {
          id: user_id,
        },
      },
    });
  }

  async updateSavingBank(id: string, data: any, user_id: string) {
    return await this.prisma.expenseBox.update({
      where: {
        id: id,
        user: {
          id: user_id,
        },
      },
      data: {
        name: data.name,
        description: data.description,
        endDate: data.endDate,
      },
    });
  }
}
