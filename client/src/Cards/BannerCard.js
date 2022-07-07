import React from "react";
import { Button } from "@mui/material";
import "../Css/bannercard.css";
// make the image fill the div by adding

const BannerCard = () => {
  return (
    <div className="banner-card">
      <h1>Banner title</h1>
      {/* <img src="https://i0.wp.com/aestheticsforbirds.com/wp-content/uploads/2021/03/beeple-horiz.jpg?resize=768%2C476&ssl=1"></img> */}
      <Button variant="contained">Contained</Button>
      <Button variant="contained">other</Button>
    </div>
  );
};

export default BannerCard;
