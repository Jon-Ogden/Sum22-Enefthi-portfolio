import { Avatar } from "@mui/material";
import "../Css/recentsale.css";
import { useNavigate } from "react-router";

const RecentSale2 = (props) => {
  const navigate = useNavigate()
  return (
    <div className="Recentsale" onClick={()=>{
      navigate(`/MarketDetail/${props.id}`)
    }}>
      <Avatar />
      <p>{props.title}</p>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default RecentSale2;
