import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { Wrapper } from "../../components/Wrapper";

const Browse: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <MainHeader />
        <div className="d-flex w-100">
          <Sidebar />
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Browse;
