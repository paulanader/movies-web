import { LinkDecoration } from "./styles";

interface ISectionsProps {
  title: string;
  url: string;
}

const Sections: React.FC<ISectionsProps> = ({ title, url }) => {
  return (
    <div className="align-items-center border-start border-warning border-2">
      <div className="mb-3 mt-3 d-flex me-3">
        <LinkDecoration to={url}>
          <h2 className="text-white fs-bold ms-3">{title}</h2>
        </LinkDecoration>
      </div>
    </div>
  );
};

export default Sections;
