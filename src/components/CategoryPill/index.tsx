import { CategoryType } from "../../@types/CategoryType";
import { OverFlow, StylesPill } from "./styles";

interface ICategoriesProps {
  categories?: CategoryType[];
  url: string;
  page?: string;
  size?: number;
  _setCategory: (category: CategoryType) => void;
}

export const CategoriesPill: React.FC<ICategoriesProps> = ({
  categories,
  url,
  _setCategory,
}) => {
  return (
    <OverFlow className="d-flex m-0 mb-3 list-unstyled align-items-start">
      {Array.isArray(categories) &&
        categories.length > 0 &&
        categories.map((category) => (
          <li key={category.slug} className="text-white">
            <StylesPill
              className={`btn btn-outline-light me-3 mb-1 text-white`}
              to={`/categories/${category.slug}/movies`}
              onClick={() => _setCategory(category)}
            >
              {category.name}
            </StylesPill>
          </li>
        ))}
    </OverFlow>
  );
};
