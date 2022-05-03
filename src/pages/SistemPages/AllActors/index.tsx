import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import { Wrapper } from "../../../components/Wrapper";
import Base from "../../../components/Base";
import { Fragment, useEffect, useState } from "react";
import { useActors } from "../../../hooks/ActorProvider";

const AllActors: React.FC = () => {
  const { actors, actor, getActors, getActor } = useActors();
  const [textSelect, setTextSelect] = useState("");

  useEffect(() => {
    getActors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Container>
        <MainHeader />
        <div className="d-flex w-100">
          <Sidebar />
          <Base title="Atores">
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
                    {actors.map((actor) => {
                      return (
                        <Fragment key={actor.slug}>
                          <option value={actor.slug}>{actor.name}</option>
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
                    getActor(textSelect);
                  }}
                >
                  <span>Procurar</span>
                </button>
                <>{console.log("ator:", actor)}</>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-3">
                <span className="fw-bold me-3">Nome completo:</span>
                <span className="text-white">{actor?.name}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Data de nascimento:</span>
                {actor?.birth_date && (
                  <span>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(actor.birth_date)
                    )}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <span className="fw-bold me-3">Local de Nascimento:</span>
                <span className="text-white">{actor?.birth_place}</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold">Filmes:</span>
              </div>
              <div className="mb-3">
                <span className="fw-bold">Bibliografia:</span>
                <p className="text-white mt-3">{actor?.biography}</p>
              </div>
            </div>
          </Base>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default AllActors;
