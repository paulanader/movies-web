import { useCallback, useEffect } from "react";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import { Search } from "../../components/Search";
import { Wrapper } from "../../components/Wrapper";
import { useMovies } from "../../hooks/MoviesProvider";

const Movies: React.FC = () => {
  const { movies, isLoading, meta, setCategory, getMovies } = useMovies();

  useEffect(() => {
    getMovies(meta?.current_page);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = useCallback((searchText: string): void => {
    getMovies(meta?.current_page, searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <div className="row row-cols-1 row-cols-md-2 justify-content-between align-items-center">
          <div className="col col-md-6">
            <PageTitle title={"Movies"} url={"/"} />
          </div>
          <div className="d-flex col col-md-6">
            <Search placeHolderValue="Buscar filmes" onSearch={handleSearch} />
          </div>
        </div>
        {isLoading && <Loading />}
        {!isLoading && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            {movies.map((movie) => {
              return (
                <div
                  key={movie.slug}
                  className="col d-flex align-items-stretch mb-3"
                >
                  <Card
                    item={movie}
                    url={`${movie.slug}`}
                    _setCategory={setCategory}
                  />
                </div>
              );
            })}
          </div>
        )}
        <Pagination
          pageCount={meta ? meta.last_page : 1}
          forcePage={meta ? meta.total : 1}
          onPageChange={(event) => getMovies(event.selected + 1, "")}
        />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Movies;
