import styled from "styled-components";

export const Index = styled.div`
  .modalBackground {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  }

  .modalContainer {
    width: 500px;
    height: 250px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: #4a5568 0px 5px 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
  }
  .modalContainer .title {
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
  }

  .titleCloseBtn button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }

  .modalContainer .body {
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
  }

  .modalContainer .footer button {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modalContainer .footer button {
    width: 50%;
    height: 45%;
    margin: 10px;
    border: none;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }
`;
