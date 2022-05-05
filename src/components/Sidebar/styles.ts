import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleSection = styled.p`
  color: var(--gray400);
  font-size: 13px;
`;

export const SidebarStyles = styled.div`
  width: 64;
  margin-right: 4;
`;

export const StyleSidebarLink = styled(Link)`
  text-decoration: none;
  color: #f7fafc;
  margin-bottom: 10px;

  &:hover {
    color: #ffd640;
  }
`;
