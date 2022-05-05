import { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CategoryTable from "../../../components/AdminCategoryTable";
import { AdminModal } from "../../../components/AdminModal";
import AdminPagination from "../../../components/AdminPagination";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import { Loading } from "../../../components/Loading";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import { Wrapper } from "../../../components/Wrapper";
import { useAdminCategories } from "../../../hooks/Admin/AdminCategoryProvider";

const AdminCategory: React.FC = () => {
  const { meta, categories, isLoading, getCategories } = useAdminCategories();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getCategories(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {openModal && <AdminModal closeModal={() => setOpenModal(false)} />}

      <Wrapper>
        <Container>
          <MainHeader />
          <div className="d-flex w-100">
            <Sidebar />
            <Base>
              <div className="row row-cols-1 row-cols-sm-2 d-flex align-items-center justify-content-between mb-5">
                <div className="col">
                  <h3>Categorias</h3>
                </div>
                <div className="col text-end">
                  <Link to="/admin/addcategory">
                    <button
                      type="button"
                      className="btn btn-primary align-items-center text-white fw-bold "
                    >
                      <span className="me-1">
                        <RiAddLine />
                      </span>
                      <span>Adicionar</span>
                    </button>
                  </Link>
                </div>
              </div>
              {isLoading && <Loading />}
              {!isLoading && (
                <CategoryTable
                  _setOpenModal={setOpenModal}
                  categories={categories}
                />
              )}
              <div className="mb-3 text-white fw-bold">
                <AdminPagination
                  pageCount={meta ? meta.last_page : 1}
                  forcePage={meta ? meta.total : 1}
                  onPageChange={(event) => getCategories(event.selected + 1)}
                />
              </div>
            </Base>
          </div>
        </Container>

        <Footer />
      </Wrapper>
    </>
  );
};

export default AdminCategory;
