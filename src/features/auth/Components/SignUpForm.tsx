import { FormEvent, useState } from "react";
import { Input } from "../../../common/components/Input/Input";
import { Button } from "primereact/button";
import { StyledAuthForm } from "./styles";
import { usePostResource } from "../../../common/hooks/useApi";
import { ISignUpDto } from "../auth.interfaces";
import { authApiPaths } from "../auth.api";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../../../pages/routes/enums";
import { toast } from "react-toastify";
import { initialSingUpState } from "../auth.models";
import { onDataChange } from "../../../common/utils/handlers";

const SignUpForm = () => {
  const [data, setData] = useState(initialSingUpState);

  const navigate = useNavigate();

  const { mutate, isLoading } = usePostResource<ISignUpDto, void>(
    authApiPaths.signUp,
    {
      onSuccess() {
        navigate(RouteEnum.Login);
      },
      onError(error) {
        if (error instanceof Error)
          toast(error.message, {
            type: "error",
          });
      },
    }
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(data);
  };
  return (
    <StyledAuthForm onSubmit={handleSubmit}>
      <Input
        name="email"
        label="Email"
        placeholder="Type your email"
        onChange={onDataChange(setData)}
        value={data.email}
      />
      <Input
        name="password"
        placeholder="Type your password"
        label="Password"
        onChange={onDataChange(setData)}
        value={data.password}
      />
      <Input
        name="name"
        placeholder="Enter your name"
        label="Name"
        onChange={onDataChange(setData)}
        value={data.password}
      />
      <Button loading={isLoading} type="submit" label="Submit" />
    </StyledAuthForm>
  );
};

export default SignUpForm;
