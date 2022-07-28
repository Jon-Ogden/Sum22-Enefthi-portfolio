import react from "react";
import "../../Css/shiftleft.css"
import { useNavigate, useParams } from "react-router";
import { Title } from "../styled-components/Fonts";
import axios from "axios";
import { useState } from "react";

const Payment = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [nft, setNft] = useState({})

  const getNft = async() => {
    try {
      let res = await axios.get(`api/nfts/${params.id}`)
    } catch (error) {
      
    }
  }

  return (
    <div className="shiftleft">
      <Title>Payment</Title>
      <img src={nft.image}/>
    </div>
  );
};

export default Payment;
