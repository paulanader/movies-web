import { MdPlayArrow } from "react-icons/md";
import { CategoryType } from "../../@types/CategoryType";
import { MovieType } from "../../@types/MovieType";
import { CategoriesPill } from "../CategoryPill";
import {
  ADecoration,
  ImgageCardLink,
  LinkDecoration,
  Margin,
  StylesCard,
} from "./styles";

interface ICardProps {
  item: MovieType;
  url: string;
  _setCategory: (category: CategoryType) => void;
}

export const Card: React.FC<ICardProps> = ({ item, url, _setCategory }) => {
  return (
    <StylesCard className="card rounded rounded-top w-100 mb-2">
      <ImgageCardLink to={url}>
        <img className="img-responsive" src={item.cover} alt={item.title} />
      </ImgageCardLink>
      <Margin className="card-body">
        <h2 className="card-title fs-md mb-2 mt-0">
          <LinkDecoration to={url} className="fs-5">
            {item.title}
          </LinkDecoration>
        </h2>
        <div>
          <CategoriesPill
            categories={item.categories}
            url={""}
            _setCategory={_setCategory}
          />
        </div>
      </Margin>
      <Margin className="justify-content-center fs-6 mt-0 mb-3 p-3">
        <ADecoration
          href={`${item.trailer}`}
          target="_blank"
          className="fs-5"
          rel="noreferrer"
        >
          <MdPlayArrow color="#ffffff" size={22} className="me-2" />
          <span>Trailer</span>
        </ADecoration>
      </Margin>
    </StylesCard>
  );
};
