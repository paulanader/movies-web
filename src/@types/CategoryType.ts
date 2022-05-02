import { MovieType } from "./MovieType";

export type CategoryType = {
  id: number;
  name: string;
  slug: string;
  movies: MovieType[];
};
