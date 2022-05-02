import { Link } from "react-router-dom";
import styled from "styled-components";

export const StylesCard = styled.div`
  border: none;
  box-shadow: 5px;
  background-color: var(--gray);
  h2 {
    font-size: 18px;
    color: var(--white);
    font-weight: 700;
  }

  p {
    color: var(--white);
    font-size: 16px;
  }

  img {
    position: relative;
    display: block;
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export const ImgageCardLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`;
export const Margin = styled.div`
  margin-bottom: -25px;
  background-color: var(--gray-dark);
`;

export const LinkDecoration = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  line-height: 1.2;
  color: #ffffff;
  font-size: 18px;

  &:hover {
    text-decoration: underline var(--white);
    color: var(--yellow);
  }
`;
export const ADecoration = styled.a`
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
