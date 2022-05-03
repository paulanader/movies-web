import { Fragment, useEffect } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import { Wrapper } from "../../../components/Wrapper";
import { useCategories } from "../../../hooks/CategoryProvider";

const DellCategory: React.FC = () => {
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
          <Base title="Deletar categoria">
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
              <div className="col col-sm-3">
                <button
                  type="button"
                  className="btn btn-warning align-items-center text-white fw-bold"
                >
                  <span className="me-1">
                    <RiDeleteBin7Fill />
                  </span>
                  <span>Apagar</span>
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

export default DellCategory;
