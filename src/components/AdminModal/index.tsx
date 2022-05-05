import { RiCloseLine } from "react-icons/ri";
import { Index } from "./styles";

interface IAdminModalProps {
  closeModal: (ev: boolean) => void;
}
export const AdminModal: React.FC<IAdminModalProps> = ({ closeModal }) => {
  return (
    <Index className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn text-end">
          <button onClick={() => closeModal(false)}>
            <RiCloseLine />
          </button>
        </div>
        <div className="title mb-5 text-center">
          <h2>Deseja excluir o item?</h2>
        </div>

        <div className="footer d-flex">
          <button
            onClick={() => closeModal(false)}
            className="btn btn-secondary"
          >
            Cancelar
          </button>
          <button className="btn btn-primary">Confirmar</button>
        </div>
      </div>
    </Index>
  );
};
