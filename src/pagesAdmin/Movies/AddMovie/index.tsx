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
              <h3 className="mb-4">Adicionar Filme</h3>
              <div className="row row-cols-1 d-flex align-items-center justify-content-between"></div>
              <div className="col mt-3">
                <h4>Título</h4>
                <Input placeholder="Digite o título" name="" />
                <h4>Direção</h4>
                <Input placeholder="Nome do diretor" name="" />
                <h4>Score</h4>
                <Input placeholder="Score" name="" />
                <h4>Ano</h4>
                <Input placeholder="AAAA" name="" />
                <h4>Duração</h4>
                <Input placeholder="Em minutos" name="" />
                <h4>URL Trailer</h4>
                <Input placeholder="https://youtube.com/..." name="" />
                <h4>URL Imagem</h4>
                <Input placeholder="http://...jpg" name="" />
                <h4>Sinopse</h4>
                <TextArea placeholder="Sobre..." name="" />
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
