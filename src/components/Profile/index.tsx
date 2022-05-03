import Avatar from "../Avatar";
import { PStyles } from "./styles";

const Profile: React.FC = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="text-end">
        <p className="text-white fw-bold mb-0">Paula Nader</p>
        <PStyles>paulanader@gmail.com</PStyles>
      </div>
      <Avatar image="https://github.com/paulanader.png" />
    </div>
  );
};

export default Profile;
