import { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AdminModal } from "../../../components/AdminModal";
import AdminMoviesTable from "../../../components/AdminMoviesTable";
import AdminPagination from "../../../components/AdminPagination";
import Base from "../../../components/Base";
import { Container } from "../../../components/Container";
import Footer from "../../../components/Footer";
import { Loading } from "../../../components/Loading";
import MainHeader from "../../../components/MainHeader";
import Sidebar from "../../../components/Sidebar";
import { Wrapper } from "../../../components/Wrapper";
import { useAdminMovies } from "../../../hooks/Admin/AdminMovieProvider";

const AdminMovie: React.FC = () => {
  const { meta, movies, isLoading, getMovies } = useAdminMovies();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getMovies(1);
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
              <div className="row row-cols-1 row-cols-sm-2 d-flex align-items-center justify-content-between mb-3">
                <div className="col">
                  <h3>Atores</h3>
                </div>
                <div className="col text-end">
                  <Link to="/admin/addmovie">
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
                <AdminMoviesTable
                  _setOpenModal={setOpenModal}
                  movies={movies}
                />
              )}
              <div className="mb-3 text-white fw-bold">
                <AdminPagination
                  pageCount={meta ? meta.last_page : 1}
                  forcePage={meta ? meta.total : 1}
                  onPageChange={(event) => getMovies(event.selected + 1)}
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

export default AdminMovie;
