import React from "react";
import { IconContext } from "react-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import "../Css/navbar.css";
import { Avatar } from "@mui/material"
import FileUploadIcon from "@mui/icons-material/FileUpload";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import NewNavButtons from "./NewNavButtons";
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
const SidebarDataUser = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Market Place",
    path: "/market",
    icon: <StorefrontIcon />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
    cName: "nav-text",
  },
 
  
]

const Register = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Market Place",
    path: "/market",
    icon: <StorefrontIcon />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: <CreateIcon />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <LoginIcon />,
    cName: "nav-text",
  },
]

export default function Navbar() {
  const { logout, user } = useContext(AuthContext);

  function getSideBar() {
    if(user) {
      return [
        ...SidebarDataUser,   
      
        {
          title: "Create An Nft",
          path: "/createnft",
          icon: <FileUploadIcon />,
          cName: "nav-text",
        },
  
      
        {
          title: "Logout",
          path: "",
          icon: <LogoutIcon />,
          cName: "nav-text",
        },
      ] 
      }else {
        return  Register
      }
  }

  const UserNav = (i) =>{
    const navbar = getSideBar()
    if (user) {
      return (
        <div className="user present">
          <IconContext.Provider value={{ color: "#FFF" }}>
          <nav className={"nav-menu active"}>
           <ul className="nav-menu-items">
   
            {navbar.map((item, index) => {
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
        )} else {
        return (
          <div>
            <IconContext.Provider value={{ color: "#FFF" }}>
            <nav className={"nav-menu active"}>
            <ul className="nav-menu-items">
            {navbar.map((item, index) => {
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
              )})}
            </ul>
            </nav>
            </IconContext.Provider>
          </div>
        )
      }
    }
    return (
      <>
       <div className="shiftleft">
    
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
      </div>
      {UserNav()}
      </>
    )
  }



  // return (
  //   <div className="shiftleft">
  //     <IconContext.Provider value={{ color: "#FFF" }}>
  //       <div className="navbar">
  //         <div className="input">
  //           {/* <Input className="serchinput">Hello</Input> */}
  //           <TextField
  //             className="serchinput"
  //             id="outlined-basic"
  //             label="Outlined"
  //             variant="outlined"
  //             size="medium"
  //           />
  //         </div>
  //         <div className="rightbuttons">
  //           <NewNavButtons />
  //         </div>
  //       </div>
  //       <nav className={"nav-menu active"}>
          
  //         <ul className="nav-menu-items">
  //           {SidebarDataUserPresent.map((item, index) => {
  //             return (
  //               <li key={index} className={item.cName}>
  //                 <Link
  //                   to={item.path}
  //                   onClick={item.title === "Logout" ? () => logout() : null}
  //                 >
  //                   {item.icon}
  //                   <span>{item.title}</span>
  //                 </Link>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </nav>
  //     </IconContext.Provider>
  //   </div>
  // );

