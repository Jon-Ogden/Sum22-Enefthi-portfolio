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
import { DataContext } from "../../providers/DataProvider";

const Profile = () => {
  const {user} = useContext(AuthContext)
  const {nfts} = useContext(DataContext)
  const [display, setDisplay] = useState("created")
  const params = useParams();
  const [creator, setCreator] = useState({}) 
  const [loading, setLoading] = useState(true)
  const [creatorNfts, setCreatorNfts] = useState([])
  const [normData, setNormData] = useState([])
  const [userLikes, setUserLikes] = useState([])


  const getUserLikes = async(id) => {
    try {
      let res = await axios.get(`/api/users/${id}/liked_nfts`)
      setUserLikes(res.data)
      const likeArr = res.data.map(c => c.nft_id)
    } catch(error){
      alert(error)
    }
  }

  async function getCreator(){
    let res = await axios.get(`/api/users/${params.id}`)
    setCreator(res.data)
    setLoading(false)
  }

  useEffect(()=>{
    getCreator();
    console.log(nfts)
    setCreatorNfts(nfts.filter(c => c.creator_id == params.id))
    if(user){
      getUserLikes(user.id)
    }
    setNormData(normalize(nfts.filter(c => c.creator_id == params.id), userLikes))
  },[])
  console.log(normData)
  console.log(creatorNfts)

  const normalize = (nfts, userlikes) => {
    if(userlikes.length <= 0){
        return nfts.map(c => ({...c, liked:false}))
    }
    const arr = userlikes.map(c => c.nft_id)
    const idArr = userLikes.map(c => c.id)

     return nfts.map((c) => {
        if(arr.includes(c.id)){
            return ({...c, liked:true, like_id:userlikes.find((x)=>{return x.nft_id === c.id}).id})
        } else {
            return ({...c, liked:false, like_id:undefined})
        } 
     })
}

const renderCreatorCards = () => {
  return normData.map((c) => {
      return <NftCard 
      key={c.id}
      id={c.id}
      title={c.title}
      price={c.price}
      image={c.image}
      creator={creator.name}
      liked={c.liked}
      like_id={c.like_id}
      />
  })
}

  if(loading){
    return (<div><h1 className="shiftleft">loading...</h1></div>)
  } 
  if(display === "created"){
  return (
    <div>
      <div className="shiftleft">
        <UserBanner />
        <div className="usercard">
          <UserCard avatar={creator.image}/>
        </div>
        <div className="nftbar grouping">
          <Button variant="contained">Created</Button>
          <Button onClick={()=>{setDisplay("collection")}} variant="outlined">Collection</Button>
          <Button onClick={()=>{setDisplay("liked")}} variant="outlined">Liked</Button>
          <div className="search">
            <input></input>
          </div>
        </div>
        <div className="nftstack">
          {renderCreatorCards()}
        </div>
      </div>
      </div>)
  } else if(display === "collection"){
    return (
      <div>
        <div className="shiftleft">
          <UserBanner />
          <div className="usercard">
            <UserCard avatar={creator.image}/>
          </div>
          <div className="nftbar grouping">
            <Button onClick={()=>{setDisplay("created")}} variant="outlined">Created</Button>
            <Button variant="contained">Collection</Button>
            <Button onClick={()=>{setDisplay("liked")}} variant="outlined">Liked</Button>
            <div className="search">
              <input></input>
            </div>
          </div>
          <div className="nftstack">
            {renderCreatorCards()}
          </div>
        </div>
        </div>)
  } else if(display === "liked"){
    return (
      <div>
        <div className="shiftleft">
          <UserBanner />
          <div className="usercard">
            <UserCard avatar={creator.image}/>
          </div>
          <div className="nftbar grouping">
            <Button onClick={()=>{setDisplay("created")}} variant="outlined">Created</Button>
            <Button onClick={()=>{setDisplay("collection")}} variant="outlined">Collection</Button>
            <Button variant="contained">Liked</Button>
            <div className="search">
              <input></input>
            </div>
          </div>
          <div className="nftstack">
            {renderCreatorCards()}
          </div>
        </div>
        </div>)
  }
  
  
};

export default Profile;
