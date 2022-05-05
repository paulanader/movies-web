import { THeadBorder, Title, TRBorder } from "./styles";
import { ActionsDropdown } from "../ActionDropdown";
import { ActorType } from "../../@types/ActorType";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

interface ICategoryTableProps {
  _setOpenModal: (ev: boolean) => void;
  categories: ActorType[];
}

const AdminActorTable: React.FC<ICategoryTableProps> = ({
  categories,
  _setOpenModal,
}) => {
  return (
    <table className="table table-borderless  text-white justify-content-between">
      <THeadBorder>
        <Title>
          <th style={{ width: "30px" }}>#</th>
          <th>Nome</th>
          <th>Aniversário</th>
          <th>Local de nascimento</th>
          <th>Possui bibiliografia</th>
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
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(category.birth_date)
                )}
              </td>
              <td>{category.birth_place}</td>
              <td className="text-center">
                {category.biography ? <RiCheckLine /> : <RiCloseLine />}
              </td>
              <td className="text-end">
                <ActionsDropdown
                  link1={`/admin/updateactor/${category.slug}`}
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

export default AdminActorTable;
