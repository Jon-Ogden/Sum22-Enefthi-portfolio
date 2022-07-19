import "../../Css/shiftleft.css";
import UserBanner from "../../Cards/UserBanner";
import UserCard from "../../Cards/UserCard";
import "../../Css/usercard.css";
import { Button } from "@mui/material";
import NftCard from "../../Cards/NftCard";

const OtherUser = () => {
  return (
    <div className="shiftleft">
      <UserBanner />
      <div className="usercard">
        <UserCard />
      </div>
      <div className="nftbar">
        <Button>Created</Button>
        <Button>Collection</Button>
        <Button>History</Button>
      </div>
      <div className="search">
        <input></input>
      </div>
      <div className="nftstack">
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
    </div>
  );
};

export default OtherUser;
