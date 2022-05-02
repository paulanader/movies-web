import { useEffect } from "react";
import { useCategories } from "../../hooks/CategoryProvider";
import { SliderCard } from "../SliderCard";

export const CategoriesList: React.FC = () => {
  const { categories, getCategories } = useCategories();

  useEffect(() => {
    getCategories(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {categories.map((category) => {
        return (
          <>
            {Array.isArray(category.movies) && category.movies.length > 3 && (
              <div key={category.id} className="text-white">
                <h3>{category.name}</h3>
                <SliderCard images={category.movies} url={""} />
              </div>
            )}
          </>
        );
      })}
    </>
  );
};
