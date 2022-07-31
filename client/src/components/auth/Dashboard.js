import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BannerCard from "../../Cards/BannerCard";
import NftCard from "../../Cards/NftCard";
import "../../Css/Nftcard.css";
import MediaCard from "../../Cards/CreatorCard";
import RecentSale from "../../Cards/RecentSale";
import TopCollection from "../../Cards/TopCollection";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { DataContext } from "../../providers/DataProvider";
import { useState } from "react";
import LoadingSpinner from '../../assets/Loadingspinner'
import axios from 'axios'
import { useEffect } from "react";
import RecentSale2 from "../../Cards/RecentSale 2";

const DashBoard = (c) => {
  const { user } = useContext(AuthContext);
  const { users, isLoading } = useContext(DataContext)
  const [ normData, setNormData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [ userLikes, setUserLikes] = useState([])
  const navigate = useNavigate()
  const getInitData = async(id) => {
    try {
      let res1 = await axios.get(`/api/users/${id}/liked_nfts`)
      let res2 = await axios.get(`/api/nfts/page/${1}`)
      setUserLikes(res1.data)
      setNormData(normalize(res2.data.nfts, res1.data))
      setTotalPages(res2.data.total_pages)
    } catch(error){
      alert(error)
    }
  }

const getInitDataNoUser = async() => {
  try {
    let res2 = await axios.get(`/api/nfts/page/${1}`)
    console.log(res2)
    setNormData(normalize(res2.data.nfts))
    setTotalPages(res2.data.total_pages)
  } catch(error){
    alert(error)
  }
}

  const renderNft = () => {
    if(isLoading) {
        return <LoadingSpinner />
    }else {
        return normData.slice(0,6).map((c) => {
            return <NftCard 
            key={c.id}
            id={c.id}
            title={c.title}
            price={c.price}
            image={c.image}
            creator={users.filter(x => x.id == c.creator_id)[0].name}
            liked={c.liked}
            like_id={c.like_id}
            for_sale={c.for_sale}
            owner={c.user_id}
            />})}}

            useEffect(()=>{
              if(user){
                  getInitData(user.id)
              } else {
                  getInitDataNoUser()
              }
          },[])


  const renderRecentSales = () =>{
    return normData.slice(15,19).map((c)=>{
      return <RecentSale2 
      key={c.id}
      id={c.id}
      title={c.title}
      name={c.name}
      price={c.price}
      />
    })
  }

  const renderFollowing = () =>{
    if(isLoading) {
      return <LoadingSpinner />
  }else {
    return normData.slice(10,11).map((c, props)=>{
      return <MediaCard 
      key={c.id}
      id={c.id}
      image={c.image}
      title={c.title}
      username={c.username}
      descritption={c.descritption}
      avatar={props.avatar}

      />
    })
  }}
          const normalize = (nfts, userlikes = []) => {
            if(userlikes.length <= 0){
                return nfts.map(c => ({...c, liked:false}))
            }
            const arr = userlikes.map(c => c.nft_id)
            const idArr = userLikes.map(c => c.id)
    
             return nfts.map((c) => {
                if(arr.includes(c.id)){
                    return ({...c, liked:true, like_id:userlikes.find((x)=>{return x.nft_id == c.id}).id})
                } else {
                    return ({...c, liked:false, like_id:undefined})
                } 
             })
        }

  return (
    <div>
      <div className="parent">
        <BannerCard />
        <h1 className="newest">Newest Pieces</h1>
        <div className="nftdisplay">
          {renderNft()}
        </div>
       
      </div>
      <div className="rightbar">
        <h2></h2>
        <br />
        <div className="creatorcard">
          {/* <MediaCard /> */}
          {renderFollowing()}
          <hr />
          <h2>Recent Sales</h2>
          <Button onClick={()=>{
            navigate('/sales')
          }}>See all</Button>
          {renderRecentSales()}
 
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
