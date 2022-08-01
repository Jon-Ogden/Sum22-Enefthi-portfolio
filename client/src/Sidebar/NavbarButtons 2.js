import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Button from "../components/styled-components/Button";
import { useNavigate } from "react-router-dom";

const NavbarButtons = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const renderNavItems = () => {
    if (user) {
      return (
        <>
          <Button
            event={() => {
              navigate("/account");
            }}
          >
            Account
          </Button>
          <Button
            event={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </>
      );
    } else {
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
          </div>
        </>
      );
    }
  };

  return (
    <div className="logo">
      <nav>
        <Button
          className=""
          event={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        {renderNavItems()}
      </nav>
    </div>
  );
};

export default NavbarButtons;
