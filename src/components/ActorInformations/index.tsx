import { ActorType } from "../../@types/ActorType";
import { Cover, ImageStyle, InformationStyle } from "./styles";

interface IActorInformationsProps {
  info: ActorType;
}
const ActorInformations: React.FC<IActorInformationsProps> = ({ info }) => {
  return (
    <>
      <InformationStyle className="row row-cols-1 row-cols-sm-2 mb-3">
        <ImageStyle className="col mb-3">
          <Cover style={{ backgroundImage: `url(${info.picture})` }} />
        </ImageStyle>
        <div className="col">
          <div>
            <span className="fw-bold me-2">Nome:</span>
            <span>{info.name}</span>
          </div>
          <div>
            <span className="fw-bold me-2">Aniversário:</span>
            <span>{info.birth_date}</span>
          </div>
          <div>
            <span className="fw-bold me-2">Local de nascimento:</span>
            <span>{info.birth_place}</span>
          </div>
        </div>
      </InformationStyle>
      <InformationStyle>
        <h3 className="fw-bold mb-3">Biografia</h3>
        <p className="text-left">{info.biography}</p>
      </InformationStyle>
    </>
  );
};

export default ActorInformations;
