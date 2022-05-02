import { MetaType } from "./MetaType";
import { MovieType } from "./MovieType";

export type PaginetedMovieType = {
  data: MovieType[];
  meta: MetaType;
};
