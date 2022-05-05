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
import { useActors } from "../../../hooks/ActorProvider";

const UpdateActor: React.FC = () => {
  const { actor, getActor } = useActors();
  const { slug } = useParams();
  useEffect(() => {
    getActor(slug ?? "");
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
              <h3 className="mb-4">Editar Ator</h3>
              <div className="row row-cols-1 d-flex align-items-center justify-content-between"></div>
              <div className="col mt-3">
                <h4>Nome</h4>
                <Input placeholder={`${actor?.name}`} name={`${actor?.name}`} />
                <h4>Data de nascimento</h4>
                <Input
                  placeholder={`${actor?.birth_date}`}
                  name={`${actor?.birth_date}`}
                />
                <h4>Local de nascimento</h4>
                <Input
                  placeholder={`${actor?.birth_place}`}
                  name={`${actor?.birth_place}`}
                />
                <h4>URL da imagem</h4>

                <Input
                  placeholder={`${actor?.picture}`}
                  name={`${actor?.picture}`}
                />
                <h4>Biografia</h4>

                <TextArea
                  placeholder={`${actor?.biography}`}
                  name={`${actor?.biography}`}
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

export default UpdateActor;
