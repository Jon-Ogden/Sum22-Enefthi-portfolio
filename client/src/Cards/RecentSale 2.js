import { Avatar } from "@mui/material";
import "../Css/recentsale.css";
import { useNavigate } from "react-router";

const RecentSale2 = (props) => {
  const navigate = useNavigate()
  return (
    <div className="Recentsale" onClick={()=>{
      navigate(`/MarketDetail/${props.id}`)
    }}>
      <div className="image1">
      <img src={props.image} />
      </div>
      <div className="props">
      <p>{props.title}</p>
      <p>{props.name}</p>
      <p>{props.price} $</p>
      </div>
    </div>
  );
};

export default RecentSale2;
