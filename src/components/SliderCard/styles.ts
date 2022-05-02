import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cover = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-size: cover;
  background-position: center center;
`;

export const LinkDecoration = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  line-height: 1.2;
  color: #ffffff;

  &:hover {
    color: #ffd640;
  }

  h2 {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const ADecoration = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  line-height: 1.2;
  color: #ffffff;

  &:hover {
    color: #ffd640;
  }

  span {
    font-size: 16px;
  }
`;
