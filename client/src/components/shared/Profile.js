import "../../Css/shiftleft.css";
import UserBanner from "../../Cards/UserBanner";
import UserCard from "../../Cards/UserCard";
import "../../Css/Profile.css";
import { Button, createChainedFunction, useThemeProps } from "@mui/material";
import NftCard from "../../Cards/NftCard";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Text, Title } from "../styled-components/Fonts";

const Profile = () => {
  const {user} = useContext(AuthContext)
  const {nfts, isLoading, users} = useContext(DataContext)
  const [display, setDisplay] = useState("created")
  const params = useParams();
  const [creator, setCreator] = useState({}) 

  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [normData, setNormData] = useState([])
  const [normData2, setNormData2] = useState([])
  const [ownedNormData, setOwnedNormData] = useState([])
  const [likedNormData, setLikedNormData] = useState([])
  const [creatorLikes, setCreatorLikes] = useState([])
  const [userLikes, setUserLikes] = useState([])


  const getInitDataUser = async(id) => {
    try {
      let res1 = await axios.get(`/api/users/${id}/liked_nfts`)
      let res2 = await axios.get(`/api/users/${params.id}/liked_nfts`)
      let res3 = await axios.get(`/api/users/${params.id}`)
      setCreator(res3.data)
      setUserLikes(res2.data)
      const likeArr = res2.data.map(c => c.nft_id)
      setNormData(normalize(nfts.filter(c => c.creator_id == params.id), res1.data))
      setOwnedNormData(normalize(nfts.filter(c => c.user_id == params.id), res1.data))
      setLikedNormData(normalize(nfts.filter(c => likeArr.includes(c.id)), res1.data))
      setLoading(false)
    } catch(error){
      alert(error)
    }
  }

  const getInitDataNoUser = async() => {
    try {
      let res1 = await axios.get(`/api/users/${params.id}`)
      let res2 = await axios.get(`/api/users/${params.id}/liked_nfts`)
      const likeArr = res2.data.map(c => c.nft_id)
      setCreator(res1.data)
      setNormData(normalize(nfts.filter(c => c.creator_id == params.id), []))
      setOwnedNormData(normalize(nfts.filter(c => c.user_id == params.id), []))
      setLikedNormData(normalize(nfts.filter(c => likeArr.includes(c.id)), []))
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }


  useEffect(()=>{
    if(user){
      getInitDataUser(user.id)
    } else {
      getInitDataNoUser()
    }
  },[isLoading, loading])

  useEffect(()=>{
    if(search !== ""){
      if(display == "created"){
        setNormData2(normData.filter(c => c.title.toLowerCase().includes(search.toLowerCase())))
      } else if(display == "collection"){
        setNormData2(ownedNormData.filter(c => c.title.toLowerCase().includes(search.toLowerCase())))
      } else if(display == "liked"){
        setNormData2(likedNormData.filter(c => c.title.toLowerCase().includes(search.toLowerCase())))
      }
    }

  },[search])

  const normalize = (nfts, userlikes) => {
    if(userlikes.length <= 0){
        return nfts.map(c => ({...c, liked:false}))
    }
    const arr = userlikes.map(c => c.nft_id)
    const idArr = userLikes.map(c => c.id)

     return nfts.map((c) => {
        if(arr.includes(c.id)){
            return ({...c, liked:true, like_id:userlikes.find((x)=>{return x.nft_id === c.id}).id})
        } else {
            return ({...c, liked:false, like_id:undefined})
        } 
     })
}

const renderUsersTab = () =>{
  if(isLoading || loading){
    return (<div><h1 className="shiftleft">loading...</h1></div>)
  } 
  if(search.length > 0){
    if(normData2.length == 0){
      return (<div><Text>No users match this search</Text></div>)
    } return normData2.map((c)=>{
      let userCard = users.filter(x => x.id == c.user_id)[0]
      return <UserCard 
      key={c.id}
      id={c.id}
      name={c.name}
      email={c.email} 
      image={c.image}
      user={userCard.name}
      />
    })}}




const renderCreatorCards = () => {
  if(isLoading || loading){
    return (<div><h1 className="shiftleft">loading...</h1></div>)
  } 
  if(search.length > 0){
    if(normData2.length == 0){
      return (<div><Text>No NFTs match this search</Text></div>)
    }
    return (
      normData2.map((c) => {
        let nftCreator = users.filter(x => x.id == c.creator_id)[0]
        return <NftCard 
        key={c.id}
        id={c.id}
        title={c.title}
        price={c.price}
        image={c.image}
        creator={nftCreator.name}
        liked={c.liked}
        like_id={c.like_id}
        for_sale={c.for_sale}
        owner={c.user_id}
        />
    })
    )
  } else if(display === "created"){
    if(normData.length == 0){
      return (<div><Text>This User has no Created NFTs.</Text></div>)
    }
  return normData.map((c) => {
      let nftCreator = users.filter(x => x.id == c.creator_id)[0]
      return <NftCard 
      key={c.id}
      id={c.id}
      title={c.title}
      price={c.price}
      image={c.image}
      creator={nftCreator.name}
      liked={c.liked}
      like_id={c.like_id}
      for_sale={c.for_sale}
      owner={c.user_id}
      />
  })
} else if(display === "collection"){
  if(ownedNormData.length == 0){
    return (<div><Text>This User owns no NFTs.</Text></div>)
  }
  return ownedNormData.map((c) => {
    let nftCreator = users.filter(x => x.id == c.creator_id)[0]
    return <NftCard 
    key={c.id}
    id={c.id}
    title={c.title}
    price={c.price}
    image={c.image}
    creator={nftCreator.name}
    liked={c.liked}
    like_id={c.like_id}
    for_sale={c.for_sale}
    owner={c.user_id}
    />
})
} else if(display === "liked"){
  if(likedNormData.length == 0){
    return (<div><Text>This User has no liked NFTs.</Text></div>)
  }
  return likedNormData.map((c) => {
      let nftCreator = users.filter(x => x.id == c.creator_id)[0]
      return <NftCard 
      key={c.id}
      id={c.id}
      title={c.title}
      price={c.price}
      image={c.image}
      creator={nftCreator.name}
      liked={c.liked}
      like_id={c.like_id}
      for_sale={c.for_sale}
      owner={c.user_id}
      />
  })
}
}

 
 
  return (
    <div>
      <div className="shiftleft">
        <UserBanner />
        <div className="usercard">
          {/* <UserCard avatar={user.image} name={user.name} email={user.email} joined_in={user.joined_in}/> */}
          {renderUsersTab()}
        </div>
        <div className="nftbar grouping">
          <Button variant={display == "created" ? "contained" : "outlined"} onClick={()=>{setDisplay("created")}}>Created</Button>
          <Button variant={display == "collection" ? "contained" : "outlined"} onClick={()=>{setDisplay("collection")}}>Collection</Button>
          <Button variant={display == "liked" ? "contained" : "outlined"} onClick={()=>{setDisplay("liked")}}>Liked</Button>
          <div className="search">
            <input value={search} onChange={(e) => {setSearch(e.target.value)}}></input>
          </div>
        </div>
        <div className="nftstack">
          {renderCreatorCards()}
        </div>
      </div>
  </div>
  );

};

export default Profile;
