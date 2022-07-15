import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export default function MediaCard() {
  return (
    <Card sx={{ width: 280, maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://static.news.bitcoin.com/wp-content/uploads/2021/01/OVofab6V-esiyicbxyaqnh8u.jpeg"
        alt="NFT IMAGE"
      />
      <Avatar alt="Profile Photo" src="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Creator Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          @creatorusername
        </Typography>
        <br />
      </CardContent>
      <CardActions>
        <Button size="small">Follow</Button>
      </CardActions>
      <CardContent>
        <hr />
        <Typography variant="body2" color="text.secondary">
          lorem ipsum
        </Typography>
      </CardContent>
    </Card>
  );
}
