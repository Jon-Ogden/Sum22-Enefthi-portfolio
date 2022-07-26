import "../../Css/shiftleft.css";
import "../../Css/marketDetail.css";
import NftCard from "../../Cards/NftCard";
import { Button, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../styled-components/Fonts";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import { useEffect } from "react";

const MarketDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { nfts, users, deleteThing, newLike, liked_nfts, setLiked_nfts } = useContext(DataContext)
  const { user } = useContext(AuthContext)
  const nft = nfts.filter(c => c.id == params.id)[0]
  const creator = users.filter(c => nft.creator_id == c.id)[0]
  const [userLikes, setUserLikes] = useState([])
  const [like_id, setLike_id] = useState(userLikes.filter(c => c.nft_id == params.id)[0])
  const [ normData, setNormData] = useState([])
  const creator_nfts = nfts.filter(c => c.creator_id == nft.creator_id && c.id !== nft.id)
  
  const [liked, setLiked] = useState(false)


  const getUserLikes = async(id) => {
    try {
      let res = await axios.get(`/api/users/${id}/liked_nfts`)
      setUserLikes(res.data)
      const likeArr = res.data.map(c => c.nft_id)
      setLiked(likeArr.includes(parseInt(params.id)))
      if(likeArr.includes(parseInt(params.id))){
        setLike_id(res.data.filter(c => c.nft_id == params.id)[0].id)
      }
    } catch(error){
      alert(error)
    }
  }

  useEffect(()=>{
    if(user){
      getUserLikes(user.id)
    }
    setNormData(normalize(creator_nfts, userLikes))
  },[])

  const toggleLike = () => {
    if(!liked){
      let info = {nft_id:params.id, user_id:user.id}
      setLike_id(newLike(info).id)
      setLiked(true)

    } else {
      deleteThing(like_id, liked_nfts, setLiked_nfts, 'liked_nfts')
      setLiked(false)
    }
  }

  const normalize = (nfts, userlikes) => {
    if(userlikes.length <= 0){
        return nfts.map(c => ({...c, liked:false}))
    }
    const arr = userlikes.map(c => c.nft_id)
    const idArr = userLikes.map(c => c.id)

     return nfts.map((c) => {
        if(arr.includes(c.id)){
            return ({...c, liked:true, like_id:userlikes.find((x)=>{return x.nft_id == c.id}).id})
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
        creator={users.filter(x => x.id == c.creator_id)[0].name}
        liked={c.liked}
        like_id={c.like_id}
        />
        
    })
}

  return (
    <div className="shiftleft">
      <img
        className="nftimg"
        src={nft.image}
      />
      <div className="nftdiscription">
        <h2>{nft.title}</h2>
        <p>{nft.description}</p>
        <Avatar src={creator.image} onClick={()=>{navigate(`/profile/${nft.creator_id}`)}}/>
        <Text>Created by: {creator.name}</Text>
        <hr />
        <h4>Price: ${nft.price}</h4>
        <Button variant="outlined">Buy</Button>
        <IconButton onClick={()=>{toggleLike()}}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>

      <div className="morenft">
        {renderCreatorCards()}
      </div>
    </div>
  );
};

export default MarketDetail;
