import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateExpenseBoxDTO {
  @IsNotEmpty()
  @IsString()
  @Min(3)
  @Max(20)
  name: string;
  @IsNotEmpty()
  description: string;
  amount: number;
  date: Date;
  estimated_expense: number;
}
