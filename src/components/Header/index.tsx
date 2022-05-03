import { DarkHeader, MainHeader, Span } from "./styles";

import { AiOutlineMenu } from "react-icons/ai";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/MoviesProvider";
import Logo from "../Logo";

const Header: React.FC = () => {
  const { setCategory } = useMovies();
  return (
    <DarkHeader className="mb-3">
      <MainHeader>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              style={{ border: 0 }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <AiOutlineMenu color="#ffffff" />
            </button>
            <a
              className="navbar-brand "
              href="https://www.imdb.com/chart/top/?ref_=nv_mv_250"
            >
              <Logo />
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    <Span>Home</Span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/movies"
                  >
                    <Span>Filmes</Span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Dropdown _setCategory={setCategory} />
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/actors"
                  >
                    <Span>Atores</Span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/login"
                  >
                    <Span>Login</Span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </MainHeader>
    </DarkHeader>
  );
};

export default Header;
