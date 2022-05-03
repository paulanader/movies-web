import { TitleStyles } from "./styles";

const Logo: React.FC = () => {
  return (
    <TitleStyles>
      Movies Web
      <span className="ml-5 text-warning">.</span>
    </TitleStyles>
  );
};

export default Logo;
