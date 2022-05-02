import { ReactNode } from "react";
import { Main } from "./styles";

interface IContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: React.FC<IContainerProps> = ({
  className,
  children,
}) => <Main className={`container mb-3 ${className ?? ""}`}>{children}</Main>;
