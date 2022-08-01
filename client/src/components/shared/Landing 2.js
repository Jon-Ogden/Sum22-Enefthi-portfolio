import { Title, Text } from "../styled-components/Fonts";
import { useNavigate } from "react-router-dom";
import HomeNavbarButtons from "./HomeNav";
import "../../Css/landing.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";




// Not in use
const Landing = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <header>
          <div className="header">
            <Title>Welcome to ENEFTHI</Title>
            {user ? <p>Hello, {user.name}</p> : <Text>not logged in</Text>}
            <HomeNavbarButtons />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Landing;
