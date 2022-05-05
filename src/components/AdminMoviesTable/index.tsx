import { THeadBorder, Title, TRBorder } from "./styles";
import { ActionsDropdown } from "../ActionDropdown";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { MovieType } from "../../@types/MovieType";

interface ICategoryTableProps {
  _setOpenModal: (ev: boolean) => void;
  movies: MovieType[];
}

const AdminMoviesTable: React.FC<ICategoryTableProps> = ({
  movies,
  _setOpenModal,
}) => {
  return (
    <table className="table table-borderless  text-white justify-content-between">
      <THeadBorder>
        <Title>
          <th style={{ width: "30px" }}>#</th>
          <th>Título</th>
          <th>Ano</th>
          <th>Diretor</th>
          <th>Duração</th>
          <th>Qtde de atores</th>
          <th>Possui Sinopse</th>
          <th style={{ width: "65px" }} className="text-end">
            Ações
          </th>
        </Title>
      </THeadBorder>
      <tbody>
        {movies.map((movie) => {
          return (
            <TRBorder key={movie.id}>
              <th>{movie.id}</th>
              <td>{movie.title ? movie.title : <RiCloseLine />}</td>
              <td>{movie.year ? movie.year : <RiCloseLine />}</td>
              <td>{movie.director ? movie.director : <RiCloseLine />}</td>
              <td>{movie.duration ? movie.duration : <RiCloseLine />}</td>
              <td className="text-center">
                {movie.actors && movie.actors.length > 0 ? (
                  movie.actors.length
                ) : (
                  <RiCloseLine />
                )}
              </td>
              <td>{movie.description ? <RiCheckLine /> : <RiCloseLine />}</td>
              <td className="text-end">
                <ActionsDropdown
                  link1={`/admin/updatemovie/${movie.slug}`}
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

export default AdminMoviesTable;
