import { useCallback, useEffect } from "react";
import ActorInfo from "../../components/ActorInfo";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import { Search } from "../../components/Search";
import { Wrapper } from "../../components/Wrapper";
import { useActors } from "../../hooks/ActorProvider";

const Actors: React.FC = () => {
  const { actors, meta, isLoading, getActors } = useActors();

  useEffect(() => {
    getActors(meta?.current_page);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = useCallback((searchText: string): void => {
    getActors(meta?.current_page, searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <div className="row row-cols-1 row-cols-md-2 justify-content-between align-items-center">
          <div className="col col-md-6">
            <PageTitle title={"Actors"} url={"/"} />
          </div>
          <div className="d-flex col col-md-6">
            <Search placeHolderValue="Buscar atores" onSearch={handleSearch} />
          </div>
        </div>

        {isLoading && <Loading />}
        {!isLoading && <ActorInfo actors={actors} />}
        <Pagination
          pageCount={meta ? meta.last_page : 1}
          forcePage={meta ? meta.total : 1}
          onPageChange={(event) => getActors(event.selected + 1, "")}
        />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Actors;
