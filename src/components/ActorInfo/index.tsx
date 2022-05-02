import { ActorType } from "../../@types/ActorType";
import { Cover, StylesLink } from "./styles";

interface IActorsProps {
  actors: ActorType[];
}
const ActorInfo: React.FC<IActorsProps> = ({ actors }) => {
  return (
    <div className="row row-cols-2 row-cols-sm-4 mb-3 mt-3">
      {actors.map((actor) => {
        return (
          <div key={actor.id} className="col mb-3">
            <Cover>
              <div
                className="me-3 d-inline-flex rounded-circle"
                style={{
                  width: 100,
                  height: 100,
                  backgroundImage: `url(${actor.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              />
            </Cover>
            <StylesLink to={`/actors/${actor.slug}`}>
              <span>{actor.name}</span>
            </StylesLink>
          </div>
        );
      })}
    </div>
  );
};

export default ActorInfo;
