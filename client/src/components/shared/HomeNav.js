import { useNavigate } from "react-router-dom";
import Button from "../styled-components/Button";
const HomeNavbarButtons = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="search"></div>
      <div className="buttons">
        <Button
          className="header_center"
          event={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Button
          className="header_right"
          event={() => {
            navigate("/register");
          }}
        >
          Register
        </Button>
        <Button
          className="header_right"
          event={() => {
            navigate("/dashboard");
          }}
        >
          DashBoard
        </Button>
      </div>
    </>
  );
};

export default HomeNavbarButtons;
