import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Informations from "../../components/Informations";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { Wrapper } from "../../components/Wrapper";
import { useMovies } from "../../hooks/MoviesProvider";

const Movie: React.FC = () => {
  const { movie, isLoading, getMovie } = useMovies();
  const { slug } = useParams();

  useEffect(() => {
    getMovie(slug ?? "");
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <PageTitle url={"/movies"} title={"Filmes"} title2={movie?.title} />
        {isLoading && <Loading />}
        {!isLoading && movie && <Informations info={movie} />}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Movie;
