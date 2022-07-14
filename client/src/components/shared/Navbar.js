import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../styled-components/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "../../Css/navbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
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
          <div className="search">
            <input type="text" className="input" />
            <SearchIcon />
          </div>
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
      <nav className="nav">
        <NavLink to="/" className="logo-button">
          <img className="logo" src={Logo} alt="" />
        </NavLink>
        {renderNavItems()}
      </nav>
    </div>
  );
};

export default Navbar;
