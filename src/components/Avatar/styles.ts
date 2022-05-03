import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cover = styled.div`
  width: 100%;
  color: #fff;
  margin-left: 25px;
`;

export const StylesLink = styled(Link)`
  text-decoration: none;
  color: #ffff;

  &:hover {
    color: var(--yellow);
  }
`;
