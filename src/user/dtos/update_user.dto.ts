import { IsDecimal, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsDecimal()
  balance: number;

  @IsOptional()
  @IsDecimal()
  total_compensation: number;
}
