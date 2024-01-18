export interface IAuthDTO {
  email: string;
  password: string;
}

export interface ISignUpDto {
  name: string;
  email: string;
  password: string;
}

export interface ILoginRes {
  access_token: string;
  id: string;
  email: string;
  password: string;
}
