import { RiAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Contant, Input } from "./styles";

const CreateCategory: React.FC = () => {
  return (
    <Contant className="mt-4">
      <div className="mt-4 px-4">
        <div className=" d-flex align-items-center justify-content-between">
          <h3>Cadastrar Categoria</h3>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 d-flex align-items-center justify-content-between mt-5">
          <div className="col col-sm-9">
            <Input
              type="name"
              className="form-control border-bottom"
              placeholder="Insira a categoria"
            />
          </div>
          <div className="col col-sm-3">
            <Link to="/users/create">
              <button className="btn btn-warning align-items-center text-white fw-bold">
                <RiAddLine className="me-1" />
                <span>Cadastrar</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Contant>
  );
};

export default CreateCategory;
