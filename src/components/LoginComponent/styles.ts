import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 100%;

  .container-login {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  .wrap-login {
    width: 390px;
    background-color: var(--gray-dark);
    border-radius: 10px;

    overflow: hidden;
    padding: 77px 55px 33px 55px;
  }

  .login-form {
    width: 100%;
  }

  .login-form-title {
    display: block;
    font-size: 30px;
    color: azure;

    line-height: 1.2;
    text-align: center;
  }

  .wrap-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
  }

  .input {
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    border: none;
    display: block;
    width: 100%;
    height: 45px;

    background-color: transparent;

    padding: 0 5px;
  }

  .focus-input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    pointer-events: none;
    color: #adadad;
  }

  .focus-input::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
  }

  .focus-input::after {
    font-size: 15px;
    color: #9999;
    line-height: 1.2;

    content: attr(data-placeholder);

    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0;
    padding-left: 5px;
  }

  .input:focus {
    outline: 0;
  }

  .input:focus + .focus-input::after {
    top: -15px;
  }

  .input:focus + .focus-input::before {
    top: -15px;
  }

  .has-value + .focus-input::after {
    top: -15px;
  }

  .container-login-form-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;
  }

  .login-form-btn {
    font-size: 15px;
    border: none;
    border-radius: 10px;
    color: var(--white);

    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: linear-gradient(to left, #ffd640, #b721ff);
  }

  .login-form-btn:hover {
    cursor: pointer;
  }

  .text-cernter {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
  }

  .txt1 {
    font-size: 14px;
    color: #adadad;
    line-height: 1.5;
    padding-right: 5px;
    text-decoration: none;
  }

  .txt2 {
    font-size: 14px;
    color: #6a7dfe;
    line-height: 1.5;
    text-decoration: none;
  }
`;
