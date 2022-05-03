import { Cover } from "./styles";

interface IActorsProps {
  image: string;
}
const Avatar: React.FC<IActorsProps> = ({ image }) => {
  return (
    <Cover>
      <div
        className="me-3 d-inline-flex rounded-circle"
        style={{
          width: 70,
          height: 70,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
    </Cover>
  );
};

export default Avatar;
