import { Contant } from "./styles";

interface IBaseProps {
  children: React.ReactNode;
}

const Base: React.FC<IBaseProps> = ({ children }) => {
  return (
    <Contant className="mt-4">
      <div className="mt-4 px-4">{children}</div>
    </Contant>
  );
};

export default Base;
