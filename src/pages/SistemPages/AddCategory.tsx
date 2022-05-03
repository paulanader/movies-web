import { Container } from "../../components/Container";
import CreateCategory from "../../components/CreateCategory";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { Wrapper } from "../../components/Wrapper";

const AddCategory: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <MainHeader />
        <div className="d-flex w-100">
          <Sidebar />
          <CreateCategory />
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default AddCategory;
