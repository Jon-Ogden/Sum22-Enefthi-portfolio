import { Avatar, Button } from "@mui/material";
import { createRoutesFromChildren } from "react-router";
import "../Css/usercard.css"
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
const UserCard = (props) => {
  const navigate = useNavigate();
    if (props.signed_id == props.id) {
  return (
    <div className="overall">
      <div className="avataricon">
      <Avatar src={props.image} sx={{ width: 56, height: 56 }}/>
      </div>
      <div className="avatarname">
      <h2>{props.name}</h2>
      </div>
      <div className="avataremail">
      <p>{props.email}</p>
      </div>
      <br />
      <div className="details">
      <p>Dedicated to create amazing for art exhibition</p>
      </div>
      <div className="editprofile">
      <Button variant="contained" onClick={()=>{navigate(`/settings/`)}}>Edit profile</Button>
      </div>
    
    </div>
  );
  } else {
    return (
      <div className="overall">
      <div className="avataricon">
      <Avatar src={props.image} sx={{ width: 56, height: 56 }}/>
      </div>
      <div className="avatarname">
      <h2>{props.name}</h2>
      </div>
      <div className="avataremail">
      <p>{props.email}</p>
      </div>
      <br />
      <div className="details">
      <p>Dedicated to create amazing for art exhibition</p>
      </div>
      <div className="editprofile">
      </div>
  
    </div>
    )
  }
};

export default UserCard;
