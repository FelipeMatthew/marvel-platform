import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  age: number

  @IsNotEmpty()
  @IsString()
  password: string
}
