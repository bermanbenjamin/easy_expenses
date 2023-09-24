import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Max(20)
  @Min(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Max(16)
  @Min(3)
  name: string;
}
