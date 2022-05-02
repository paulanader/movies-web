/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { CategoriesList } from "../../components/CategoriesList";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";
import Sections from "../../components/Sections";
import { SliderCard } from "../../components/SliderCard";
import { Wrapper } from "../../components/Wrapper";
import { useMovies } from "../../hooks/MoviesProvider";

const Home: React.FC = () => {
  const { movies, isLoading, getMovies } = useMovies();

  useEffect(() => {
    getMovies(1, "");
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <Sections title={"Filmes"} url={"/movies"} />
            <SliderCard images={movies} url={"movies"} />
            <Sections title={"Categorias"} url={"/movies"} />
            <CategoriesList />
          </>
        )}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Home;
