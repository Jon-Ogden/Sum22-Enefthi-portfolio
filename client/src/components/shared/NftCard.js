import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function NftCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://static.news.bitcoin.com/wp-content/uploads/2021/01/OVofab6V-esiyicbxyaqnh8u.jpeg"
        alt="NFT IMAGE"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NFT Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By Artist Name
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Price 
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
