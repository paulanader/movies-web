import { Container } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
};

export const LoginComponent = () => {
  const { register, handleSubmit } = useForm<SignInFormData>();

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  };
  return (
    <Container className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit(handleSignIn)}>
            <span className="login-form-title mb-5">Bem-vindo!</span>
            <div className="wrap-input">
              <input
                className={"has-value input"}
                type="email"
                {...register("email")}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={"has-value input"}
                type="password"
                {...register("password")}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
