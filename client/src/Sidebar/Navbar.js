import React from "react";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../Css/navbar.css";
import NavbarButtons from "./NavbarButtons";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import NewNavButtons from "./NewNavButtons";
export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="shiftleft">
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <div className="input">
            {/* <Input className="serchinput">Hello</Input> */}
            <TextField
              className="serchinput"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="medium"
            />
          </div>
          <div className="rightbuttons">
            <NewNavButtons />
          </div>
        </div>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link
                    to={item.path}
                    onClick={item.title === "Logout" ? () => logout() : null}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
