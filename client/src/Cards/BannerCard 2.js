import React from "react";
import { Button } from "@mui/material";
import "../Css/bannercard.css";
// make the image fill the div by adding

const BannerCard = () => {
  return (
    <div className="bannercard">
      <div id="imageonly">
        <div class="content">
          <h1>title</h1>
          <div class="btn-cont">
            <Button variant="contained">Explore More</Button>
            <Button variant="contained">add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
