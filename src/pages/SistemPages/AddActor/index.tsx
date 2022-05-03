import { RiAddLine } from "react-icons/ri";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import TextArea from "../../../components/TextArea";
import { Wrapper } from "../../../components/Wrapper";

const AddActor: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <MainHeader />
        <div className="d-flex w-100">
          <Sidebar />
          <Base title="Adicionar ator">
            <div
              className="row row-cols-1 align-items-center justify-content-center text-center mt-5"
              onSubmit={() => {}}
            >
              <div className="col">
                <Input placeholder="Nome completo" name="" />
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

export default AddActor;
