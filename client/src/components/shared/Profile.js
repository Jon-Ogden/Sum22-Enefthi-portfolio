import "../../Css/shiftleft.css";
import UserBanner from "../../Cards/UserBanner";
import UserCard from "../../Cards/UserCard";
import "../../Css/usercard.css";
import { Button, createChainedFunction } from "@mui/material";
import NftCard from "../../Cards/NftCard";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Profile = () => {
  const {user} = useContext(AuthContext)
  const [display, setDisplay] = useState("created")
  const params = useParams();
  const [creator, setCreator] = useState({}) 
  const [loading, setLoading] = useState(true)

  async function getUser(){
    let res = await axios.get(`/api/users/${params.id}`)
    setCreator(res.data)
    setLoading(false)
  }

  useEffect(()=>{
    getUser()
    
  },[])
  console.log(creator.image)

  if(loading){
    return (<div><h1 className="shiftleft">loading...</h1></div>)
  } 
  return (
    <div>

      <div className="shiftleft">
        <UserBanner />
        <div className="usercard">
          <UserCard avatar={creator.image}/>
        </div>
        <div className="nftbar">
          <Button variant="outlined">Created</Button>
          <Button variant="outlined">Collection</Button>
          <Button variant="outlined">History</Button>
        </div>
        <div className="search">
          <input></input>
        </div>
        <div className="nftstack">
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
      </div>)
  }
  </div>
  );
};

export default Profile;
