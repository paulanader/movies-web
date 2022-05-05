import { Fragment, useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import TextArea from "../../../components/TextArea";
import { Wrapper } from "../../../components/Wrapper";
import { useActors } from "../../../hooks/ActorProvider";
import { useCategories } from "../../../hooks/CategoryProvider";

const AddMovies: React.FC = () => {
  const { categories, getCategories } = useCategories();
  const { actors, actor, getActors, getActor } = useActors();
  const [textSelect, setTextSelect] = useState("");

  useEffect(() => {
    getActors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <Container>
        <MainHeader />
        <div className="d-flex w-100">
          <Sidebar />
          <Base>
            <div
              className="row row-cols-1 align-items-center justify-content-center text-center mt-5"
              onSubmit={() => {}}
            >
              <div className="col">
                <Input placeholder="Título" name="" />
                <Input placeholder="URL imagem" name="" />
                <Input placeholder="Diretor" name="" />
                <Input placeholder="Ano AAAA" name="" />
                <Input placeholder="Duração em minutos" name="" />
                <Input placeholder="Score" name="" />
                <Input placeholder="Foto de capa" name="" />
                <Input placeholder="Trailer" name="" />
                <TextArea placeholder="Descrição" name={""} />
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <>
                    <option selected>Categorias</option>
                    {categories.map((category) => {
                      return (
                        <Fragment key={category.id}>
                          <option value={category.id}>{category.name}</option>
                        </Fragment>
                      );
                    })}
                  </>
                </select>
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
              <div className="col mt-4">
                <button
                  type="button"
                  className="btn btn-warning align-items-center text-white fw-bold mb-5"
                  onClick={() => {}}
                >
                  <span className="me-1">
                    <RiAddLine />
                  </span>
                  <span>Adicionar</span>
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

export default AddMovies;
