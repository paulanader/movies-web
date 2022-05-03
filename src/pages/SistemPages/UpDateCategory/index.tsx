import { Fragment, useEffect } from "react";
import { RiPencilLine } from "react-icons/ri";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import CreateCategory from "../../../components/CreateCategory";
import Footer from "../../../components/Footer";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import { Wrapper } from "../../../components/Wrapper";
import { useCategories } from "../../../hooks/CategoryProvider";

const UpDateCategory: React.FC = () => {
  const { categories, getCategories } = useCategories();

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
          <Base title="Editar categoria">
            <div className="row row-cols-1 row-cols-sm-2 d-flex align-items-center justify-content-between mt-5">
              <div className="col col-sm-9">
                <select
                  className="form-select"
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
              </div>
            </div>
            <CreateCategory
              placeholder="Editar categoria"
              buttonName="Editar"
              icon={<RiPencilLine />}
            />
          </Base>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default UpDateCategory;
