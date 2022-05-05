import { Container } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().min(6).required("Senha obrigatória"),
});

export const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
              <span className="focus-input" data-placeholder="E-mail"></span>
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
