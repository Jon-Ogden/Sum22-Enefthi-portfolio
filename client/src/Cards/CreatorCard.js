import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";

export default function MediaCard(props) {
  const navigate = useNavigate()

  return (
    <Card sx={{ width: 280, maxHeight: 500 }}>
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
          {props.description}
        </Typography>
        <br />
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={()=>{
          navigate(`profile/${props.id}`)
        }}>View Profile</Button>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
