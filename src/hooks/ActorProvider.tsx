import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
  ReactNode,
} from "react";
import { ActorType } from "../@types/ActorType";
import { CategoryType } from "../@types/CategoryType";
import { MetaType } from "../@types/MetaType";
import Api from "../services/api";

interface IActorContextProp {
  actors: ActorType[];
  actor: ActorType | null;
  meta: MetaType | null;
  categories: CategoryType[];
  category: CategoryType | null;
  isLoading: boolean;
  setCategory: (slug: CategoryType) => void;
  getActorsByCategory: (slug: string) => void;
  getActors: (page?: number, searchText?: string) => void;
  getActor: (slug: string) => void;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const ActorsContext = createContext<IActorContextProp>(
  {} as IActorContextProp
);

export const useActors = (): IActorContextProp => {
  const context = useContext(ActorsContext);

  if (!context) {
    throw new Error("useActors must be within ActorsProvider");
  }

  return context;
};

interface IActorProviderProps {
  children: ReactNode;
}

export const ActorProvider: React.FC<IActorProviderProps> = ({ children }) => {
  const [actors, setActors] = useState<ActorType[]>([]);
  const [actor, setActor] = useState<ActorType | null>(null);
  const [meta, setMeta] = useState<MetaType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);

  const getActors = useCallback((page = 1, searchText = ""): void => {
    const params: { per_page: number; search?: string; page?: number } = {
      per_page: 12,
      page,
    };

    if (searchText) {
      params.search = searchText;
    }

    setIsLoading(true);

    Api.get("/actors", { params })
      .then((response) => {
        setActors(response?.data?.data);
        setMeta(response?.data?.meta);
        if (response.data.data.categories) {
          setCategories(response?.data?.data?.categories);
        }
      })
      .catch(() => {
        setActors([]);
        setCategories([]);
        setMeta(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getActor = useCallback((slug: string): void => {
    setIsLoading(true);
    Api.get(`/actors/${slug}`)
      .then((response) => setActor(response.data))
      .catch(() => setActor(null))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getActorsByCategory = useCallback(
    async (slug: string): Promise<void> => {
      setIsLoading(true);
      Api.get(`/categories/${slug}/movies`)
        .then((response) => {
          setActors(response?.data?.data);
        })
        .catch()
        .finally(() => {
          setIsLoading(false);
        });
    },
    []
  );

  const providerValue = useMemo(
    () => ({
      actors,
      actor,
      meta,
      categories,
      category,
      isLoading,
      setCategory,
      getActorsByCategory,
      getActors,
      getActor,
    }),
    [
      actors,
      actor,
      meta,
      categories,
      category,
      isLoading,
      setCategory,
      getActorsByCategory,
      getActors,
      getActor,
    ]
  );

  return (
    <ActorsContext.Provider value={providerValue}>
      {children}
    </ActorsContext.Provider>
  );
};
