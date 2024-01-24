import { Link } from "react-router-dom";
import LoginForm from "../features/auth/Components/LoginForm";
import { RouteEnum } from "./routes/enums";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <h4>
        Don't have an account ? <Link to={RouteEnum.SignUP}>Sign Up</Link>
      </h4>
    </div>
  );
};

export default Login;
