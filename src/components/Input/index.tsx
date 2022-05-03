import { StyleInput } from "./styles";

interface IInputProps {
  placeholder: string;
  name: string;
  _onChange?: () => void;
}

const Input: React.FC<IInputProps> = ({ placeholder, name, _onChange }) => {
  return (
    <StyleInput
      type="name"
      className="form-control border-bottom mb-5"
      placeholder={placeholder}
      value={name}
      onChange={_onChange}
    />
  );
};

export default Input;
