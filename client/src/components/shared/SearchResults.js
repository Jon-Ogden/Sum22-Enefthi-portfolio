import {Title} from '../styled-components/Fonts'
import NftCard from '../../Cards/NftCard'
import "../../Css/shiftleft.css"
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../providers/DataProvider'
import { AuthContext } from '../../providers/AuthProvider'
import axios from 'axios'
import LoadingSpinner from '../../assets/Loadingspinner'
import { useParams } from 'react-router'

export default function SearchResults(){
    const params = useParams();
    const { users, isLoading } = useContext(DataContext)
    const { user } = useContext(AuthContext)
    const [ normData, setNormData] = useState([])
    const [ userLikes, setUserLikes] = useState([])
    const getInitData = async(id) => {
        try {
          let res1 = await axios.get(`/api/users/${id}/liked_nfts`)
          let res2 = await axios.get(`/api/nfts`)
          setUserLikes(res1.data)
            setNormData(normalize(res2.data.filter(c => c.title.toLowerCase().includes(params.search.toLowerCase())), res1.data))
        } catch(error){
          alert(error)
        }
      }

    const getInitDataNoUser = async() => {
      try {
        let res2 = await axios.get(`/api/nfts`)
            setNormData(normalize(res2.data.filter(c => c.title.toLowerCase().includes(params.search.toLowerCase()))))
      } catch(error){
        alert(error)
      }
    }
    
    useEffect(()=>{
        if(user){
            getInitData(user.id)
        } else {
            getInitDataNoUser()
        }
    },[])


    const normalize = (nfts, userlikes = []) => {
        if(userlikes.length <= 0){
            return nfts.map(c => ({...c, liked:false}))
        }
        if(user){
            let marketNfts = nfts.filter(c => c.user_id !== user.id)
            const arr = userlikes.map(c => c.nft_id)

         return marketNfts.map((c) => {
            if(arr.includes(c.id)){
                return ({...c, liked:true, like_id:userlikes.find((x)=>{return x.nft_id == c.id}).id})
            } else {
                return ({...c, liked:false, like_id:undefined})
            } 
         })
        }
        const arr = userlikes.map(c => c.nft_id)
         return nfts.map((c) => {
            if(arr.includes(c.id)){
                return ({...c, liked:true, like_id:userlikes.find((x)=>{return x.nft_id == c.id}).id})
            } else {
                return ({...c, liked:false, like_id:undefined})
            } 
         })
    }

    const renderCards = () => {
        if(isLoading) {
            return <LoadingSpinner />
        }else {
            return normData.map((c) => {
                return <NftCard 
                key={c.id}
                id={c.id}
                title={c.title}
                price={c.price}
                image={c.image}
                creator={users.filter(x => x.id == c.creator_id)[0].name}
                liked={c.liked}
                like_id={c.like_id}
                /> 
            })
        }
    }

    return(
        <div className="shiftleft">
            <Title>Search Results: {params.search}</Title>
            <div className="marketContainer">
                {renderCards()}
            </div>
        </div>
    )
}