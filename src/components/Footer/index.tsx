import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { MainFooter } from "./styles";

const Footer: React.FC = () => {
  return (
    <MainFooter className="mt-auto mb-3 align-items-center">
      <AiOutlineCopyrightCircle color="#ffffff" />
      <span className="text-white">2022 Paula Nader</span>
    </MainFooter>
  );
};

export default Footer;
