import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { Contant } from "./styles";

interface IPageTitleProps {
  title?: string;
  category?: string;
  url: string;
  title2?: string;
}

export const Title: React.FC<IPageTitleProps> = ({
  title,
  url,
  category,
  title2,
}) => (
  <Contant className="d-flex align-items-center justify-content-start mb-3">
    <Link className="fs-3 text-white me-2 d-flex align-items-center" to={url}>
      <MdArrowBack
        className="justify-content-start"
        color="#ffffff"
        size={20}
      />
    </Link>
    <div>
      <p className="fs-sm fw-light mt-0 mb-0">{category}</p>
      <h1 className="fs-lg fw-bold m-0">{title}</h1>
      <h2 className="fs-lg fw-bold m-0">{title2}</h2>
    </div>
  </Contant>
);
