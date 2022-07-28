import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";
import "../Css/letswork.css";

function NftCard(props) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(props.liked)
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
            {props.price}
            <br />
            <MonetizationOnIcon />
            {/* {price ?} */}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button variant="outlined" onClick={()=>{navigate(`/payment/${props.id}`)}} size="small">Buy Piece</Button>
        <IconButton onClick={()=>{toggleLike()}}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default NftCard;
