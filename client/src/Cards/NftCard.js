import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";
import "../Css/letswork.css";
import axios from "axios";
import eth from '../assets/eth.png'

function NftCard(props) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(props.liked)
  const [for_sale, setFor_sale] = useState(props.for_sale)
  const { deleteThing, newLike, liked_nfts, setLiked_nfts} = useContext(DataContext)
  const { user } = useContext(AuthContext)

  const toggleLike = () => {
    if(!liked){
      let info = {nft_id:props.id, user_id:user.id}
      newLike(info)
      setLiked(true)
    } else {
      deleteThing(props.like_id, liked_nfts, setLiked_nfts, 'liked_nfts')
      setLiked(false)
    }
  }

  const toggleForSale = async() => {
    if(for_sale){
      await axios.put(`/api/nfts/${props.id}`,{for_sale:false})
      setFor_sale(false)
    } else if(!for_sale){
      await axios.put(`/api/nfts/${props.id}`,{for_sale:true})
      setFor_sale(true)
    }
  }

  if(!user){
    return (
      <Card sx={{ maxWidth: 345 }} className='card letswork'>
        <div onClick={()=>{navigate(`/MarketDetail/${props.id}`)}}>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="NFT IMAGE"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By {props.creator}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
            <div className="eth">
              <p>Current price</p>
            <img src={eth}/>  &nbsp; <div className="price"> {props.price} $ </div>
            </div>
              <br />
              {/* {price ?} */}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          {for_sale ? <Button variant="outlined" onClick={()=>{navigate(`/payment/${props.id}`)}} size="small">Buy Piece</Button> :
          <Button variant="outlined">Not for sale</Button>}
        </CardActions>
      </Card>
    );
  }

  if(!user || props.owner !== user.id){
    return (
      <Card sx={{ maxWidth: 345 }} className='card letswork'>
        <div onClick={()=>{navigate(`/MarketDetail/${props.id}`)}}>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="NFT IMAGE"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By {props.creator}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
            <div className="eth">
              <p>Current price</p>
            <img src={eth}/>  &nbsp; <div className="price"> {props.price} $ </div>
            </div>
              <br />
   
            </Typography>
          </CardContent>
        </div>
        <div className="bottombuttons">
        <CardActions>
          {for_sale ? <Button variant="outlined" onClick={()=>{navigate(`/payment/${props.id}`)}} size="small">Buy Piece</Button> :
          <Button variant="outlined">Not for sale</Button>}
          <div className="likebutton">
          <IconButton onClick={()=>{toggleLike()}}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          
          </div >
          
        </CardActions>
        </div>
      </Card>
    );
  } else {
    return (
    <Card sx={{ maxWidth: 345 }} className='card letswork'>
    <div onClick={()=>{navigate(`/MarketDetail/${props.id}`)}}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="NFT IMAGE"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {props.creator}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
        <div className="eth">
              <p>Current price</p>
            <img src={eth}/>  &nbsp; <div className="price"> {props.price} ETH </div>
            </div>
          <br />
         </Typography>
      </CardContent>
    </div>
    <CardActions>
    <Typography variant="body2" color="text.secondary">
          {for_sale ? "Nft is for sale" : "Nft is not for sale "}
        </Typography>
      {for_sale ? <Button variant="outlined" onClick={()=>{toggleForSale()}} size="small">Mark "Not for sale"</Button> :
      <Button variant="outlined" onClick={()=>{toggleForSale()}} >Mark "For sale"</Button>}
      <IconButton onClick={()=>{toggleLike()}}>
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </CardActions>
  </Card>
    )
  }
}
export default NftCard;