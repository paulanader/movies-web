import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title mb-5">Cadastre-se</span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-value input" : "input"}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-value input" : "input"}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Cadastrar</button>
            </div>
            <div className="text-center">
              <span className="txt1">Já possui conta?</span>
              <Link className="txt2" to="/login">
                Entrar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
