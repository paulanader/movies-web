import { RiAddLine } from "react-icons/ri";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import TextArea from "../../../components/TextArea";
import { Wrapper } from "../../../components/Wrapper";

const AddMovie: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <MainHeader />
        <div className="d-flex w-100">
          <Sidebar />
          <>
            <Base>
              <h3 className="mb-4">Adicionar Ator</h3>
              <div className="row row-cols-1 d-flex align-items-center justify-content-between"></div>
              <div className="col mt-3">
                <h4>Nome</h4>
                <Input placeholder="Nome completo" name="" />
                <h4>Data de nascimento</h4>
                <Input placeholder="AAAA-MM-DD" name="" />
                <h4>Local de nascimento</h4>
                <Input placeholder="Cidade, Estado, País" name="" />
                <h4>URL da imagem</h4>

                <Input placeholder="http://..." name="" />
                <h4>Biografia</h4>

                <TextArea placeholder="Sobre" name="" />
              </div>
              <div className="col mt-3 text-center mb-4">
                <button
                  type="button"
                  className="btn btn-primary align-items-center text-white fw-bold"
                >
                  <span className="me-1">
                    <RiAddLine />
                  </span>
                  <span>Adicionar</span>
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

export default AddMovie;
