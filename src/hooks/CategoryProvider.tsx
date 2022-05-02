import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
  ReactElement,
  ReactNode,
} from "react";
import { CategoryType } from "../@types/CategoryType";
import Api from "../services/api";

interface ICategoryContextProp {
  categories: CategoryType[];
  getCategories: (withMovies?: boolean) => void;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const CategoriesContext = createContext<ICategoryContextProp>(
  {} as ICategoryContextProp
);

export const useCategories = (): ICategoryContextProp => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("useCategories must be within CategoriesProvider");
  }

  return context;
};

export const CategoryProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const getCategories = useCallback((withMovies = false): void => {
    const params: { with_movies?: boolean; all: boolean } = {
      all: true,
    };

    if (withMovies) {
      params.with_movies = true;
    }

    Api.get(`/categories`, { params })
      .then((response) => {
        setCategories(response?.data);
      })
      .catch(() => {
        setCategories([]);
      })
      .finally();
  }, []);

  const providerValue = useMemo(
    () => ({
      categories,
      getCategories,
    }),
    [categories, getCategories]
  );

  return (
    <CategoriesContext.Provider value={providerValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
