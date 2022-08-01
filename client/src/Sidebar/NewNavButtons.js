import { Avatar, Button } from "@mui/material";
import MenuListComposition from "../components/shared/ProfilePopUp.tsx";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import "../Css/NewNavButtons.css"


const NewNavButtons = () => {
  const { logout, user } = useContext(AuthContext);

  const LoadAvatar = () =>{
    if (user) {
      return <>
      <Avatar />
      <MenuListComposition />
    </>
    }
  }


  return (
    <div className="navrightside">
      <LoadAvatar />
    </div>
   
  );
};

export default NewNavButtons;
