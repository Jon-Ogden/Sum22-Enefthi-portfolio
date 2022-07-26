import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import StorefrontIcon from "@mui/icons-material/Storefront";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const SidebarData = [
  {
    title: "User",
    path: "/myuser",
    icon: <Avatar />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/dashboard",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Create An Nft",
    path: "/createnft",
    icon: <FileUploadIcon />,
    cName: "nav-text",
  },
  {
    title: "Market Place",
    path: "/products",
    icon: <StorefrontIcon />,
    cName: "nav-text",
  },

  {
    title: "Settings",
    path: "/settings",
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
