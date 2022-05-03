import { FormEvent, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/CategoryProvider";
import Base from "../Base";
import { Input } from "./styles";

const CreateCategory: React.FC = () => {
  const { createCategory } = useCategories();

  const [name, setName] = useState("");

  const handleCreateNewCategory = async (event: FormEvent) => {
    event.preventDefault();

    await createCategory({
      name,
    });

    setName("");
  };

  return (
    <Base title="Cadastrar Categoria">
      <div
        className="row row-cols-1 row-cols-sm-2 d-flex align-items-center justify-content-between mt-5"
        onSubmit={handleCreateNewCategory}
      >
        <div className="col col-sm-9">
          <Input
            type="name"
            className="form-control border-bottom"
            placeholder="Insira a categoria"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="col col-sm-3">
          <button
            type="button"
            className="btn btn-warning align-items-center text-white fw-bold"
            onClick={handleCreateNewCategory}
          >
            <RiAddLine className="me-1" />
            <span>Cadastrar</span>
          </button>
        </div>
      </div>
    </Base>
  );
};

export default CreateCategory;
