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
import { MovieType } from "../../@types/MovieType";
import Api from "../../services/api";

type NewType = MovieType;

interface IMovieContextProp {
  movies: MovieType[];
  movie: NewType | null;
  meta: MetaType | null;
  categories: CategoryType[];
  category: CategoryType | null;
  isLoading: boolean;
  setCategory: (slug: CategoryType) => void;
  getMoviesByCategory: (
    slug: string,
    page?: number,
    searchText?: string
  ) => void;
  getMovies: (page?: number, searchText?: string) => void;
  getMovie: (slug: string) => void;
  getCategory: (slug: string) => void;
}

export const MoviesContext = createContext<IMovieContextProp>(
  {} as IMovieContextProp
);

export const useAdminMovies = (): IMovieContextProp => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("useMovies must be within MoviesProvider");
  }

  return context;
};

export const AdminMovieProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [meta, setMeta] = useState<MetaType | null>(null);
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);

  const getMovies = useCallback((page = 1, searchText = ""): void => {
    const params: { per_page: number; search?: string; page?: number } = {
      per_page: 12,
      page,
    };

    if (searchText) {
      params.search = searchText;
    }

    setIsLoading(true);

    Api.get("/movies", { params })
      .then((response) => {
        setMovies(response?.data?.data);
        setMeta(response?.data?.meta);
        if (response.data.data.categories) {
          setCategories(response?.data?.data?.categories);
        }
      })
      .catch(() => {
        setMovies([]);
        setCategories([]);
        setMeta(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getMovie = useCallback(
    (slug: string, page = 1, searchText = ""): void => {
      const params: { per_page: number; search?: string; page?: number } = {
        per_page: 12,
        page,
      };

      if (searchText) {
        params.search = searchText;
      }

      setIsLoading(true);
      Api.get(`/movies/${slug}`, { params })
        .then((response) => {
          setMovie(response.data);
          setMeta(response?.data?.meta);
        })
        .catch(() => {
          setMovie(null);
          setMeta(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    []
  );

  const getMoviesByCategory = useCallback(
    (slug: string, page = 1, searchText = ""): void => {
      const params: { per_page: number; search?: string; page?: number } = {
        per_page: 12,
        page,
      };

      if (searchText) {
        params.search = searchText;
      }
      setIsLoading(true);
      Api.get(`/categories/${slug}/movies`, { params })
        .then((response) => {
          setMovies(response?.data?.data);
          setMeta(response?.data?.meta?.last_page);
        })
        .catch(() => {
          setMovies([]);
          setMeta(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    []
  );

  const getCategory = useCallback((slug: string): void => {
    setIsLoading(true);
    Api.get(`/categories/${slug}/movies`)
      .then((response) => {
        setMovies(response?.data?.data);
      })
      .catch(() => {
        setMovies([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const providerValue = useMemo(
    () => ({
      movies,
      movie,
      meta,
      categories,
      category,
      isLoading,
      setCategory,
      getMoviesByCategory,
      getMovies,
      getMovie,
      getCategory,
    }),
    [
      movies,
      movie,
      meta,
      categories,
      category,
      isLoading,
      setCategory,
      getMoviesByCategory,
      getMovies,
      getMovie,
      getCategory,
    ]
  );

  return (
    <MoviesContext.Provider value={providerValue}>
      {children}
    </MoviesContext.Provider>
  );
};
