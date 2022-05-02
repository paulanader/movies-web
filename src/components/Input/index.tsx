import { forwardRef, ForwardRefRenderFunction } from "react";

interface IInputBaseProps {
  isActive: boolean;
  type: string;
  value: string;
  _onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputBaseProps> = (
  { isActive, type, value, _onChange },
  ref
) => {
  return (
    <input
      className={isActive ? "has-value input" : "input"}
      type={type}
      ref={ref}
      value={value}
      onChange={_onChange}
    />
  );
};

export const Input = forwardRef(InputBase);
