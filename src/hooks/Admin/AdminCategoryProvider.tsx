import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
  ReactElement,
  ReactNode,
} from "react";
import { CategoryType } from "../../@types/CategoryType";
import { MetaType } from "../../@types/MetaType";
import Api from "../../services/api";

interface ICreateCategoryProps {
  name: string;
}

interface ICategoryContextProp {
  categories: CategoryType[];
  category: CategoryType | null;
  meta: MetaType | null;
  isLoading: boolean;
  getCategories: (page: number) => void;
  getCategory: (slug: string) => void;
  createCategory: (transaction: ICreateCategoryProps) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const CategoriesContext = createContext<ICategoryContextProp>(
  {} as ICategoryContextProp
);

export const useAdminCategories = (): ICategoryContextProp => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("useCategories must be within CategoriesProvider");
  }

  return context;
};

export const AdminCategoryProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState<MetaType | null>(null);

  const getCategories = useCallback((page = 1): void => {
    const params: {
      per_page: number;
      page?: number;
      order_by: string;
      order: string;
    } = {
      per_page: 12,
      page,
      order_by: "id",
      order: "desc",
    };

    Api.get(`/categories`, { params })
      .then((response) => {
        setCategories(response?.data?.data);
        setMeta(response?.data?.meta);
      })
      .catch(() => {
        setCategories([]);
        setMeta(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getCategory = useCallback((slug: string): void => {
    Api.get(`/categories/${slug}`)
      .then((response) => {
        setCategory(response?.data);
      })
      .catch(() => {
        setCategory(null);
      })
      .finally();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createCategory = async (newCategory: ICreateCategoryProps) => {
    const response = await Api.post(`/categories`, {
      ...newCategory,
    });
    const { categoryNew } = response.data;

    setCategories([...categories, categoryNew]);
  };

  const providerValue = useMemo(
    () => ({
      categories,
      meta,
      category,
      isLoading,
      getCategory,
      getCategories,
      createCategory,
    }),
    [
      categories,
      meta,
      category,
      isLoading,
      getCategory,
      getCategories,
      createCategory,
    ]
  );

  return (
    <CategoriesContext.Provider value={providerValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
