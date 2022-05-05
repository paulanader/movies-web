import { THeadBorder, Title, TRBorder } from "./styles";
import { ActionsDropdown } from "../ActionDropdown";
import { CategoryType } from "../../@types/CategoryType";

interface ICategoryTableProps {
  _setOpenModal: (ev: boolean) => void;
  categories: CategoryType[];
}

const CategoryTable: React.FC<ICategoryTableProps> = ({
  categories,
  _setOpenModal,
}) => {
  return (
    <table className="table table-borderless  text-white justify-content-between">
      <THeadBorder>
        <Title>
          <th style={{ width: "65px" }}>#</th>
          <th>Categorias</th>
          <th style={{ width: "65px" }} className="text-end">
            Ações
          </th>
        </Title>
      </THeadBorder>
      <tbody>
        {categories.map((category) => {
          return (
            <TRBorder key={category.id}>
              <th>{category.id}</th>
              <td>{category.name}</td>
              <td className="text-end">
                <ActionsDropdown
                  link1={`/admin/updatecategory/${category.slug}`}
                  link2="/"
                  _setOpenModal={() => _setOpenModal(true)}
                />
              </td>
            </TRBorder>
          );
        })}
      </tbody>
    </table>
  );
};

export default CategoryTable;
