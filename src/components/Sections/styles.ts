import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: var(--white);

  &:hover {
    filter: brightness(0.7);
    color: var(--white);
  }
`;
