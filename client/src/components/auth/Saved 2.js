import { Button } from "@mui/material";
import NftCard from "../../Cards/NftCard";
import "../../Css/shiftleft.css";
import "../../Css/saved.css";

const Saved = () => {
  return (
    <div className="shiftleft">
      <div className="buttons">
        <h2>Saved</h2>
        <br />
        <Button variant="outlined">Catagory</Button>
        <Button variant="outlined">Collection</Button>
        <Button variant="outlined"> price Range</Button>
      </div>
      <div className="filter">
        <Button variant="outlined">Filter Sort</Button>
      </div>
      <div className="saved cards">
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
    </div>
  );
};

export default Saved;
