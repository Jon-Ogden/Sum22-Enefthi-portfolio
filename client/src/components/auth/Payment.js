import react, { useContext, useEffect } from "react";
import "../../Css/shiftleft.css"
import { useNavigate, useParams } from "react-router";
import { Text, Title } from "../styled-components/Fonts";
import BraintreeDropin from "braintree-dropin-react";
import { Button } from "@mui/material";
import braintree from "braintree-web-drop-in";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Payment = () => {
  const { user } = useContext(AuthContext)
  const params = useParams();
  const navigate = useNavigate();
  const [nft, setNft] = useState({})
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(true)

  const getNft = async() => {
    try {
      let res1 = await axios.get(`/api/nfts/${params.id}`)
      let res2 = await axios.get("/api/braintree_token");
      setNft(res1.data)
      setToken(res2.data)
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(()=>{
    getNft();
  },[])

  const handlePaymentMethod = async (payload) => {
    const amount = nft.price
    try{
      let res = await axios.post('/api/payment',{amount,nonce:payload.nonce})
      let nftData = {...nft}
      nftData.user_id = user.id
      await axios.post(`/api/nfts/${params.id}/sales`,{price:nft.price, sold_by:nft.user_id, purchased_by:user.id})
      await axios.put(`/api/nfts/${params.id}`,nftData)
      
      navigate(`/profile/${user.id}`)
    }catch(err){
        console.log('err:', err)
    }
  };

  const button = ({onClick, isDiasbled, text}) => {
    return(
      <Button
      variant="contained"
      onClick={onClick}
      disabled={isDiasbled}>
        Submit
      </Button>
    )
  }

  if(loading){
    return(
      <div><Title>Loading...</Title></div>
    )
  }
  return (
    <div className="shiftleft">
      <Title>Payment</Title>
      <img src={nft.image}/>
      <Title>Payment Amount: ${nft.price}</Title>

      <BraintreeDropin
        braintree={braintree}
        authorizationToken={token}
        handlePaymentMethod={handlePaymentMethod}
        renderSubmitButton={button}
      />
    </div>
  );
};

export default Payment;
