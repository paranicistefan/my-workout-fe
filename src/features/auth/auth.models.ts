import { IAuthDTO, ISignUpDto } from "./auth.interfaces";

export const initialLoginState: IAuthDTO = {
  email: "",
  password: "",
};

export const initialSingUpState: ISignUpDto = {
  ...initialLoginState,
  name: "",
};
