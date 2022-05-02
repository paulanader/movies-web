import styled from "styled-components";

export const DarkHeader = styled.header`
  background-color: var(--gray-dark);
`;

export const MainHeader = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  span {
    color: var(--white);
  }
`;

export const Logo = styled.div`
  background: var(--yellow);
  border-radius: 5px;
  padding: 0.3rem;

  h1 {
    font-size: 1.5rem;
  }
`;
