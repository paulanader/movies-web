import { GoStar } from "react-icons/go";
import { MovieType } from "../../@types/MovieType";
import ActorInfo from "../ActorInfo";
import Sections from "../Sections";
import YouTubeVideo from "../YouTube";
import { ImageStyle, InformationStyle } from "./styles";

interface IInformationsProps {
  info: MovieType;
}
const Informations: React.FC<IInformationsProps> = ({ info }) => {
  return (
    <>
      <InformationStyle className="row row-cols-1 row-cols-sm-2 mb-3">
        <ImageStyle className="col">
          <img src={info.cover} alt={info.title} className="img-fluid" />
        </ImageStyle>
        <div className="col">
          <div className="mb-3">
            <span className="me-2 fw-bold">Título:</span>
            <span>{info.title}</span>
          </div>
          <div className="mb-3">
            <GoStar color="#FFD640" size={19} className="me-2" />
            <span className="text-white">{info.score}</span>
          </div>

          <div className="mb-3">
            <span className="me-2 fw-bold">Duração:</span>
            <span>{`${info.duration} min`}</span>
          </div>
          <div className="mb-3">
            <span className="me-2 fw-bold">Ano de lançamento:</span>
            <span>{info.year}</span>
          </div>
          <div className="mb-3">
            <span className="me-2 fw-bold">Sinopse:</span>
            <span>{info.description}</span>
          </div>
          <div className="mb-3">
            <span className="me-2 fw-bold">Diretor:</span>
            <span>{info.director}</span>
          </div>
          <div className="mb-3">
            <div>
              <span className="me-2 fw-bold">Atores:</span>
            </div>
            <div>
              <ActorInfo actors={info.actors} />
            </div>
          </div>
        </div>
      </InformationStyle>
      <div>
        <Sections title={"Trailer"} url={""} />
        <div className="d-flex justify-content-center">
          <YouTubeVideo videoId={info} />
        </div>
      </div>
    </>
  );
};

export default Informations;
