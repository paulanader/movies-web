import { FormEvent, useEffect, useState } from "react";
import { useCategories } from "../../hooks/CategoryProvider";
import { Input } from "./styles";

interface ICreateCategoryProps {
  placeholder: string;
  buttonName: string;
  icon?: React.ReactElement;
  _onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateCategory: React.FC<ICreateCategoryProps> = ({
  placeholder,
  buttonName,
  icon,
  _onChange,
}) => {
  const { createCategory, getCategories } = useCategories();

  const [name, setName] = useState("");

  const handleCreateNewCategory = async (event: FormEvent) => {
    event.preventDefault();

    await createCategory({
      name,
    });

    setName("");
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className="row row-cols-1 row-cols-sm-2 d-flex align-items-center justify-content-between mt-5"
      onSubmit={handleCreateNewCategory}
    >
      <div className="col col-sm-9">
        <Input
          type="name"
          className="form-control border-bottom"
          placeholder={placeholder}
          value={name}
          onChange={_onChange}
        />
      </div>
      <div className="col col-sm-3">
        <button
          type="button"
          className="btn btn-primary align-items-center text-white fw-bold"
          onClick={handleCreateNewCategory}
        >
          <span className="me-1">{icon}</span>
          <span>{buttonName}</span>
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
