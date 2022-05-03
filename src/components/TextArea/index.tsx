import { StyleInput } from "./styles";

interface IInputProps {
  placeholder: string;
  name: string;
  _onChange?: () => void;
}

const TextArea: React.FC<IInputProps> = ({ placeholder, name, _onChange }) => {
  return (
    <StyleInput
      className="form-control border-bottom mb-5"
      placeholder={placeholder}
      onChange={_onChange}
    ></StyleInput>
  );
};

export default TextArea;
