import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BannerCard from "../../Cards/BannerCard";
import NftCard from "../../Cards/NftCard";
import "../../Css/Nftcard.css";
import MediaCard from "../../Cards/CreatorCard";
import RecentSale from "../../Cards/RecentSale";
import TopCollection from "../../Cards/TopCollection";
const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="parent">
        <BannerCard />
        <h1 className="newest">Newest Peices</h1>
        <div className="nftdisplay">
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
        <TopCollection />
      </div>
      <div className="rightbar">
        <h2></h2>
        <br />
        <div className="creatorcard">
          <MediaCard />
          <hr />
          <h2>Recent Sales</h2>
          <RecentSale />
          <RecentSale />
          <RecentSale />
          <RecentSale />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
