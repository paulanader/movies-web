/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BorderLi, ButtonStyles } from "./styles";

interface IActionsDropdownProps {
  link1: string;
  link2?: string;
  _setOpenModal: (ev: boolean) => void;
}

export const ActionsDropdown: React.FC<IActionsDropdownProps> = ({
  link1,
  link2,
  _setOpenModal,
}) => {
  return (
    <div className="dropdown dropstart">
      <ButtonStyles
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <BiDotsVerticalRounded color="#fff" />
      </ButtonStyles>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <BorderLi className="text-center">
          <a className="dropdown-item" href={link1}>
            Editar
          </a>
        </BorderLi>
        <li className="text-center">
          <ButtonStyles
            type="button"
            className="openModalBtn"
            onClick={() => {
              _setOpenModal(true);
            }}
          >
            <span>Deletar</span>
          </ButtonStyles>
        </li>
      </ul>
    </div>
  );
};
