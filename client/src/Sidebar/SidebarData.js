import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "User",
    path: "/",
    icon: <Avatar />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <InsertPhotoIcon />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <InsertPhotoIcon />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <InsertPhotoIcon />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/",
    icon: <SettingsIcon />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "",
    icon: <LogoutIcon />,
    cName: "nav-text",
  },
];
//  <Button
// event={() => {
//   logout();
// }}
// >
