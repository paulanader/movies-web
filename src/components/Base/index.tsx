import { Contant } from "./styles";

interface IBaseProps {
  children: React.ReactNode;
  title: string;
}

const Base: React.FC<IBaseProps> = ({ children, title }) => {
  return (
    <Contant className="mt-4">
      <div className="mt-4 px-4">
        <div className=" d-flex align-items-center justify-content-between">
          <h3>{title}</h3>
        </div>
        {children}
      </div>
    </Contant>
  );
};

export default Base;
