import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpenseBoxService } from './expense_box.service';

@Controller('/users/:user_id/expense-box')
export class ExpenseBoxController {
  constructor(private readonly expenseBoxService: ExpenseBoxService) {}

  @Get()
  getAllSavingBank(@Param('user_id') user_id: string) {
    return this.expenseBoxService.getAllSavingBank(user_id);
  }

  @Get(':expense_box_id')
  getSavingBankById(
    @Param('expense_box_id') expense_box_id: string,
    @Param('user_id') user_id: string,
  ) {
    return this.expenseBoxService.getSavingBankById(expense_box_id, user_id);
  }

  @Post()
  createSavingBank(@Param('user_id') user_id: string, @Body() data: any) {
    return this.expenseBoxService.createSavingBank(data, user_id);
  }

  @Put(':expense_box_id')
  updateSavingBank(
    @Param('expense_box_id') expense_box_id: string,
    @Param('user_id') user_id: string,
    @Body() data: any,
  ) {
    return this.expenseBoxService.updateSavingBank(
      expense_box_id,
      data,
      user_id,
    );
  }

  @Delete(':expense_box_id')
  deleteSavingBank(
    @Param('expense_box_id') expense_box_id: string,
    @Param('user_id') user_id: string,
  ) {
    return this.expenseBoxService.deleteSavingBank(expense_box_id, user_id);
  }
}
