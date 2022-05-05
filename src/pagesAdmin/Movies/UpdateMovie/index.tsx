import { useEffect } from "react";
import { RiPencilLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import TextArea from "../../../components/TextArea";
import { Wrapper } from "../../../components/Wrapper";
import { useAdminMovies } from "../../../hooks/Admin/AdminMovieProvider";

const UpdateMovie: React.FC = () => {
  const { movie, getMovie } = useAdminMovies();
  const { slug } = useParams();
  useEffect(() => {
    getMovie(slug ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <Container>
        <MainHeader />
        <div className="d-flex w-100">
          <Sidebar />
          <>
            <Base>
              <h3 className="mb-4">Editar Filme</h3>
              <div className="row row-cols-1 d-flex align-items-center justify-content-between"></div>
              <div className="col mt-3">
                <h4>Título</h4>
                <Input
                  placeholder={`${movie?.title}`}
                  name={`${movie?.title}`}
                />
                <h4>Direção</h4>
                <Input
                  placeholder={`${movie?.director}`}
                  name={`${movie?.director}`}
                />
                <h4>Score</h4>
                <Input
                  placeholder={`${movie?.score}`}
                  name={`${movie?.score}`}
                />
                <h4>Ano</h4>
                <Input placeholder={`${movie?.year}`} name={`${movie?.year}`} />
                <h4>Duração</h4>
                <Input
                  placeholder={`${movie?.duration}`}
                  name={`${movie?.duration}`}
                />
                <h4>URL Trailer</h4>
                <Input
                  placeholder={`${movie?.trailer}`}
                  name={`${movie?.trailer}`}
                />
                <h4>URL Imagem</h4>
                <Input
                  placeholder={`${movie?.cover}`}
                  name={`${movie?.cover}`}
                />
                <h4>Sinopse</h4>
                <TextArea
                  placeholder={`${movie?.description}`}
                  name={`${movie?.description}`}
                />
              </div>
              <div className="col mt-3 text-center mb-4">
                <button
                  type="button"
                  className="btn btn-primary align-items-center text-white fw-bold"
                >
                  <span className="me-1">
                    <RiPencilLine />
                  </span>
                  <span>Editar</span>
                </button>
              </div>
            </Base>
          </>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default UpdateMovie;
