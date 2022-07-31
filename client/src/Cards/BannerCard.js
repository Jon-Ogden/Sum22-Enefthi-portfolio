import React from "react";
import { Button } from "@mui/material";
import "../Css/bannercard.css";
import { useNavigate } from "react-router";
// make the image fill the div by adding

const BannerCard = () => {
  const navigate = useNavigate()
  return (
    <div className="bannercard">
      <div id="imageonly">
        <div class="content">
          <h1>ENEFTHI</h1>
          <div class="btn-cont">
            <div className="button1">
            <Button 
              onClick={()=>{
                navigate('/market')
              }}
            variant="contained">Explore More</Button>
            </div>
            <div className="button2">
            <Button variant="contained" 
                onClick={()=>{
                  navigate('/createnft')
                }}>Sell Artwork</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
