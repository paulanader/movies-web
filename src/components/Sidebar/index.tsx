import {
  RiAddLine,
  RiDashboardLine,
  RiDeleteBin7Fill,
  RiPencilLine,
} from "react-icons/ri";
import SidebarLink from "./SidebarLink";
import SidebarSection from "./SidebarSection";
import { SidebarStyles } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <SidebarStyles className="me-4">
      <div className="flex-start">
        <SidebarSection title="CATEGORIAS">
          <SidebarLink
            children="Todas"
            to="/browse/allcategories"
            icon={<RiDashboardLine size={20} />}
          />
          <SidebarLink
            children="Cadastrar"
            to="/browse/addcategory"
            icon={<RiAddLine size={20} />}
          />
          <SidebarLink
            children="Editar"
            to="/browse/updatecategory"
            icon={<RiPencilLine size={20} />}
          />
          <SidebarLink
            children="Deletar"
            to="/browse/dellcategory"
            icon={<RiDeleteBin7Fill size={20} />}
          />
        </SidebarSection>
        <SidebarSection title="ATORES">
          <SidebarLink
            children="Todas"
            to="/browse/allactors"
            icon={<RiDashboardLine size={20} />}
          />
          <SidebarLink
            children="Cadastrar"
            to="/browse/addactor"
            icon={<RiAddLine size={20} />}
          />
          <SidebarLink
            children="Editar"
            to="/browse/updateactor"
            icon={<RiPencilLine size={20} />}
          />
          <SidebarLink
            children="Deletar"
            to="/browse/dellactor"
            icon={<RiDeleteBin7Fill size={20} />}
          />
        </SidebarSection>
        <SidebarSection title="FILMES">
          <SidebarLink
            children="Todas"
            to="/browse/allmovies"
            icon={<RiDashboardLine size={20} />}
          />
          <SidebarLink
            children="Cadastrar"
            to="/browse/addmovies"
            icon={<RiAddLine size={20} />}
          />
          <SidebarLink
            children="Editar"
            to="/browse/updatemovies"
            icon={<RiPencilLine size={20} />}
          />
          <SidebarLink
            children="Deletar"
            to="/browse/dellmovie"
            icon={<RiDeleteBin7Fill size={20} />}
          />
        </SidebarSection>
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
