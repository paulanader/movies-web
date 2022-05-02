import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import { Search } from "../../components/Search";
import { useMovies } from "../../hooks/MoviesProvider";

const CategoryMovie: React.FC = () => {
  const {
    movies,
    category,
    meta,
    getMoviesByCategory,
    getMovies,
    setCategory,
  } = useMovies();
  const { slug } = useParams();

  useEffect(() => {
    getMoviesByCategory(slug ?? "", meta?.current_page);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = useCallback((searchText: string): void => {
    getMoviesByCategory(slug ? slug : "", meta?.current_page, searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 justify-content-between align-items-center">
            <div className="col">
              <PageTitle
                title={category?.name}
                url="/movies"
                category="Filmes"
              />
            </div>
            <div className="col d-flex">
              <Search
                placeHolderValue="Buscar filmes"
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
          {movies.map((movie) => {
            return (
              <div key={movie.slug} className="col d-flex align-items-stretch">
                <Card item={movie} url="movies" _setCategory={setCategory} />
              </div>
            );
          })}
        </div>
        <Pagination
          pageCount={meta ? meta.last_page : 1}
          forcePage={meta ? meta.total : 1}
          onPageChange={(event) => getMovies(event.selected + 1, "")}
        />
      </Container>
      <Footer />
    </>
  );
};

export default CategoryMovie;
