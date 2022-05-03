import { useState } from "react";
import {
  RiAddLine,
  RiArrowUpDownLine,
  RiDashboardLine,
  RiDeleteBin7Fill,
} from "react-icons/ri";
import SidebarLink from "./SidebarLink";
import SidebarSection from "./SidebarSection";
import { SidebarStyles } from "./styles";

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <SidebarStyles className="me-4">
      <div className="flex-start">
        <SidebarSection title="CATEGORIAS">
          <SidebarLink
            isActive={isActive}
            children="Todas"
            to="/browse/allcategories"
            icon={<RiDashboardLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Cadastrar"
            to="/browse/addcategory"
            icon={<RiAddLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Atualizar"
            to="/browse/categorias/atualizar"
            icon={<RiArrowUpDownLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Deletar"
            to="/browse/categorias/deletar"
            icon={<RiDeleteBin7Fill size={20} />}
            _onClick={() => setIsActive(true)}
          />
        </SidebarSection>
        <SidebarSection title="ATORES">
          <SidebarLink
            children="Todas"
            to="/browse/atores/todas"
            icon={<RiDashboardLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Cadastrar"
            to="/browse/atores/cadastrar"
            icon={<RiAddLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Atualizar"
            to="/browse/atores/atualizar"
            icon={<RiArrowUpDownLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Deletar"
            to="/browse/atores/deletar"
            icon={<RiDeleteBin7Fill size={20} />}
            _onClick={() => setIsActive(true)}
          />
        </SidebarSection>
        <SidebarSection title="FILMES">
          <SidebarLink
            children="Todas"
            to="/browse/filmes/todas"
            icon={<RiDashboardLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Cadastrar"
            to="/browse/filmes/cadastrar"
            icon={<RiAddLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Atualizar"
            to="/browse/filmes/atualizar"
            icon={<RiArrowUpDownLine size={20} />}
            _onClick={() => setIsActive(true)}
          />
          <SidebarLink
            children="Deletar"
            to="/browse/filmes/deletar"
            icon={<RiDeleteBin7Fill size={20} />}
            _onClick={() => setIsActive(true)}
          />
        </SidebarSection>
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
