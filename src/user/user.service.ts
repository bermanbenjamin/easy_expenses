import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDTO } from './dtos/create_user.dto';
import { UpdateUserDTO } from './dtos/update_user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDTO) {
    return await this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
        total_compensation: data.total_compensation,
      },
    });
  }

  async getUser(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async updateUser(data: UpdateUserDTO, id: string) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        email: data.email,
        balance: data.balance,
        password: data.password,
        total_compensation: data.total_compensation,
      },
    });
  }

  async deleteUser(id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
