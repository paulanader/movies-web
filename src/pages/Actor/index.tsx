import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ActorInformations from "../../components/ActorInformations";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { Wrapper } from "../../components/Wrapper";
import { useActors } from "../../hooks/ActorProvider";

const Actor: React.FC = () => {
  const { actor, isLoading, getActor } = useActors();
  const { slug } = useParams();

  useEffect(() => {
    getActor(slug ?? "");
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <PageTitle title={"Actors"} title2={actor?.name} url={"/actors"} />
        {isLoading && <Loading />}
        {!isLoading && actor && <ActorInformations info={actor} />}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Actor;
