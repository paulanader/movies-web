import { RiAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Title } from "../Title";
import { Contant } from "./styles";

const CreateCategory: React.FC = () => {
  return (
    <Contant className="mt-4">
      <div className="mt-4 px-4">
        <div className=" d-flex align-items-center justify-content-between">
          <h3>Cadastrar Categoria</h3>
          <Link to="/users/create">
            <button className="btn btn-warning align-items-center text-white fw-bold">
              <RiAddLine className="me-1" />
              <span>Criar novo</span>
            </button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th color="gray.300">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
              </th>
              <th>Usuário</th>
              <th>Data de cadastro</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </Contant>
  );
};

export default CreateCategory;
