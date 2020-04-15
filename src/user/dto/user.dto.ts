export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly dob: number;
  readonly mobile: string;
  readonly password: string;
}

export class LoginUserDto {
  username: string;
  password: string;
}
