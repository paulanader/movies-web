import Logo from "../Logo";
import Profile from "../Profile";
import { Container, DarkHeader } from "./styles";

const MainHeader: React.FC = () => {
  return (
    <DarkHeader className="mb-3 mt-3">
      <Container className="d-flex justify-content-between h-100 w-100 py-3 align-items-center">
        <div>
          <Logo />
        </div>
        <div>
          <Profile />
        </div>
      </Container>
    </DarkHeader>
  );
};

export default MainHeader;
