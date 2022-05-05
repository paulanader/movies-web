import { useEffect } from "react";
import { RiPencilLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import CreateCategory from "../../../components/CreateCategory";
import Footer from "../../../components/Footer";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import { Wrapper } from "../../../components/Wrapper";
import { useAdminCategories } from "../../../hooks/Admin/AdminCategoryProvider";

const UpDateCategory: React.FC = () => {
  const { category, getCategory } = useAdminCategories();
  const { slug } = useParams();

  useEffect(() => {
    getCategory(slug ?? "");
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
              <h3 className="mb-4">Editar categoria</h3>
              <div className="row row-cols-1 d-flex align-items-center justify-content-between">
                <div className="col">
                  <span className="text-white fw-bold me-3">
                    Categoria atual:
                  </span>
                  <span>{category?.name}</span>
                </div>
              </div>
              <div className="col d-flex align-items-center mt-5">
                <span className="text-white fw-bold me-3 d-flex">
                  Nova categoria:
                </span>
              </div>
              <div className="col">
                <CreateCategory
                  placeholder="Editar categoria acima"
                  buttonName="Editar"
                  icon={<RiPencilLine />}
                />
              </div>
            </Base>
          </>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default UpDateCategory;
