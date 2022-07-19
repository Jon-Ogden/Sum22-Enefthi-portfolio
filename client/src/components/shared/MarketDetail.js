import "../../Css/shiftleft.css";
import "../../Css/marketDetail.css";
import NftCard from "../../Cards/NftCard";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const MarketDetail = () => {
  return (
    <div className="shiftleft">
      <img
        className="nftimg"
        src="https://static.news.bitcoin.com/wp-content/uploads/2021/01/OVofab6V-esiyicbxyaqnh8u.jpeg"
      />
      <div className="nftdiscription">
        <h2>Nft title</h2>
        <p>Nft discription</p>
        <Avatar />
        <hr />
        <p>current bid</p>
        <h4>Price</h4>
        <Button>Like</Button>
        <Button>Buy</Button>
      </div>

      <div className="morenft">
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
    </div>
  );
};

export default MarketDetail;
