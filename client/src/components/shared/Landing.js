import { Title } from "../styled-components/Fonts";
import Button from "../styled-components/Button";
import { useNavigate } from "react-router-dom";
import HomeNavbarButtons from "./HomeNav";
import "../../Css/landing.css";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <header>
          <div className="header">
            <Title>Welcome to ENEFTHI</Title>
            <HomeNavbarButtons />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Landing;
