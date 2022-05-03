import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import { Wrapper } from "../../../components/Wrapper";
import Base from "../../../components/Base";
import { Fragment, useEffect, useState } from "react";
import { useMovies } from "../../../hooks/MoviesProvider";
import { RiDeleteBin7Fill } from "react-icons/ri";

const DellMovie: React.FC = () => {
  const { movies, movie, getMovies, getMovie } = useMovies();
  const [textSelect, setTextSelect] = useState("");

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Container>
        <MainHeader />
        <div className="d-flex w-100">
          <Sidebar />
          <Base title="Filmes">
            <div className="row row-cols-1 row-cols-sm-2 d-flex align-items-center justify-content-between mt-5">
              <div className="col col-sm-9">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(ev) => {
                    setTextSelect(ev.target.value);
                  }}
                >
                  <>
                    <option selected>Atores</option>
                    {movies.map((movie) => {
                      return (
                        <Fragment key={movie.slug}>
                          <option value={movie.slug}>{movie.title}</option>
                        </Fragment>
                      );
                    })}
                  </>
                </select>
              </div>
              <div className="col col-sm-3">
                <button
                  type="button"
                  className="btn btn-warning align-items-center text-white fw-bold"
                  onClick={() => {
                    getMovie(textSelect);
                  }}
                >
                  <span>Procurar</span>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-3">
                <span className="fw-bold me-3">Título:</span>
                <span className="text-white">{movie?.title}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Diretor:</span>
                <span className="text-white">{movie?.description}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Diretor:</span>
                <span className="text-white">{movie?.director}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Ano:</span>
                <span className="text-white">{movie?.year}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Duração:</span>
                <span className="text-white">{movie?.duration}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Score:</span>
                <span className="text-white">{movie?.score}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Cover:</span>
                <span className="text-white">{movie?.cover}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Trailer:</span>
                <span className="text-white">{movie?.trailer}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Categorias:</span>
                {movie?.categories.map((category) => (
                  <span className="text-white">{category.name}</span>
                ))}
              </div>
              <div className="mb-4 text-center">
                <button
                  type="button"
                  className="btn btn-warning align-items-center text-white fw-bold"
                >
                  <span className="me-1">
                    <RiDeleteBin7Fill />
                  </span>
                  <span>Apagar</span>
                </button>
              </div>
            </div>
          </Base>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default DellMovie;
