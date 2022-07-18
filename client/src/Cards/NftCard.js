import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function NftCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
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
      <CardActions>
        <Button size="small">Buy Piece</Button>
      </CardActions>
    </Card>
  );
}
export default NftCard;
