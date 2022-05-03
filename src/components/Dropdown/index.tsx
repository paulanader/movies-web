import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoryType } from "../../@types/CategoryType";
import { useCategories } from "../../hooks/CategoryProvider";
import { Span } from "../Header/styles";

interface IDropdownProp {
  _setCategory: (category: CategoryType) => void;
}

/* eslint-disable jsx-a11y/anchor-is-valid */
const Dropdown: React.FC<IDropdownProp> = ({ _setCategory }) => {
  const { categories, getCategories } = useCategories();

  useEffect(() => {
    getCategories();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-link text-white"
            href="#"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Span>Categorias</Span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <Link className="dropdown-item" to="/movies">
                Todas
              </Link>
            </li>
            {categories.map((category) => {
              return (
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/categories/${category.slug}/movies`}
                    onClick={() => _setCategory(category)}
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
