import { RiAddLine } from "react-icons/ri";
import SidebarLink from "./SidebarLink";
import SidebarSection from "./SidebarSection";
import { SidebarStyles } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <SidebarStyles className="me-4">
      <div className="flex-start">
        <SidebarSection title="GERAL">
          <SidebarLink
            children="Categorias"
            to="/admin/category"
            icon={<RiAddLine size={20} />}
          />
          <SidebarLink
            children="Atores"
            to="/admin/actors"
            icon={<RiAddLine size={20} />}
          />
          <SidebarLink
            children="Filmes"
            to="/admin/movies"
            icon={<RiAddLine size={20} />}
          />
        </SidebarSection>
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
