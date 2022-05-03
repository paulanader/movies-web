import { Fragment, useEffect, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import TextArea from "../../../components/TextArea";
import { Wrapper } from "../../../components/Wrapper";
import { useActors } from "../../../hooks/ActorProvider";

const UpdateActor: React.FC = () => {
  const { actors, actor, getActors } = useActors();
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
          <Base title="Editar Ator">
            <div
              className="row row-cols-1 align-items-center justify-content-center text-center mt-5"
              onSubmit={() => {}}
            >
              <div className="col">
                <select
                  className="form-select mb-5"
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
                <Input placeholder="URL imagem" name="" />
                <Input placeholder="Data de nascimento AAAA-MM-DD" name="" />
                <Input placeholder="Local de nascimento" name="" />
                <TextArea placeholder="Bibliografia" name={""} />
              </div>
              <div className="col mt-4">
                <button
                  type="button"
                  className="btn btn-warning align-items-center text-white fw-bold mb-5"
                  onClick={() => {}}
                >
                  <span className="me-1">
                    <RiPencilLine />
                  </span>
                  <span>Editar</span>
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

export default UpdateActor;
