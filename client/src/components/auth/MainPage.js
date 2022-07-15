import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BannerCard from "../../Cards/BannerCard";
import NftCard from "../../Cards/NftCard";
import "../../Css/Nftcard.css";
const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="parent">
        <BannerCard />
        <h1>Newest Peices</h1>
        <div className="nftdisplay">
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
      </div>
      <div className="rightbar"></div>
    </div>
  );
};

export default DashBoard;
