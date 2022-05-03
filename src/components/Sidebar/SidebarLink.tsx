import { StyleSidebarLink } from "./styles";
import { ReactElement } from "react";

interface INavLinkProps {
  icon?: ReactElement;
  children: string;
  to: string;
  isActive?: boolean;
  _onClick: () => void;
}

const SidebarLink: React.FC<INavLinkProps> = ({
  icon,
  children,
  to,
  isActive = false,
  _onClick,
}) => {
  return (
    <StyleSidebarLink
      to={to}
      className="d-flex align-items-center"
      isActive={isActive}
      onClick={_onClick}
    >
      <div className="me-1">{icon}</div>
      <span className="fw-bold">{children}</span>
    </StyleSidebarLink>
  );
};

export default SidebarLink;
