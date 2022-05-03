import { TitleSection } from "./styles";

interface ISidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection: React.FC<ISidebarSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="mt-4">
      <TitleSection className="fw-bold">{title}</TitleSection>
      <div className="mt-8 align-items-strech">{children}</div>
    </div>
  );
};

export default SidebarSection;
