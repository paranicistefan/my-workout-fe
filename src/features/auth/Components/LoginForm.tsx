import { ChangeEvent, FormEvent, useState } from "react";
import { initialLoginState } from "../auth.models";
import { Input } from "../../../common/components/Input/Input";
import { Button } from "primereact/button";
import { StyledAuthForm } from "./styles";
import { usePostResource } from "../../../common/hooks/useApi";
import { IAuthDTO, ILoginRes } from "../auth.interfaces";
import { authApiPaths } from "../auth.api";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../../../pages/routes/enums";
import { toast } from "react-toastify";
import { useUser } from "../Hooks/useUser";

const LoginForm = () => {
  const [data, setData] = useState(initialLoginState);

  const navigate = useNavigate();

  const { setUser } = useUser();

  const { mutate, isLoading } = usePostResource<IAuthDTO, ILoginRes>(
    authApiPaths.login,
    {
      onSuccess(data) {
        console.log("pu;la");

        setUser(data);
        navigate(RouteEnum.Dashobard);
      },
      onError(error) {
        if (error instanceof Error)
          toast(error.message, {
            type: "error",
          });
      },
    }
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
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
        onChange={handleChange}
        value={data.email}
      />
      <Input
        name="password"
        placeholder="Type your password"
        label="Password"
        onChange={handleChange}
        type="password"
        value={data.password}
      />
      <Button loading={isLoading} type="submit" label="Submit" />
    </StyledAuthForm>
  );
};

export default LoginForm;
