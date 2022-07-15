import { Title } from "../styled-components/Fonts";
import Button from "../styled-components/Button";
import { useNavigate } from "react-router-dom";
import HomeNavbarButtons from "./HomeNav";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HomeNavbarButtons />
      <div>
        <header> </header>
        <div>
          <Title>Welcome to ENEFTHI</Title>
        </div>
      </div>
    </div>
  );
};

export default Landing;
