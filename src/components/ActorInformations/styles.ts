import styled from "styled-components";

export const InformationStyle = styled.div`
  color: #ffffff;
  h3 {
    font-size: 24px;
  }
`;

export const ImageStyle = styled.div`
  max-width: 20%;
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

export const Cover = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-size: cover;
  background-position: center center;
`;
