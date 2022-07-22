import {Title} from '../styled-components/Fonts'
import NftCard from '../../Cards/NftCard'
import "../../Css/shiftleft.css"
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../providers/DataProvider'
import { AuthContext } from '../../providers/AuthProvider'
import axios from 'axios'


export default function Market(){
    const { users } = useContext(DataContext)
    const { user } = useContext(AuthContext)
    const [ normData, setNormData] = useState([])
    const [ userLikes, setUserLikes] = useState([])
    const [ nfts, setNfts] = useState([])

    const getInitData = async(id) => {
        try {
          let res1 = await axios.get(`/api/users/${id}/liked_nfts`)
          let res2 = await axios.get(`/api/nfts/page/${1}`)
          setUserLikes(res1.data)
          setNormData(normalize(res2.data.nfts, res1.data))
        } catch(error){
          alert(error)
        }
      }

      const paginateNft = async(pagenum = 1) => {
        try {
          let res = await axios.get(`/api/nfts/page/${pagenum}`)
          return res.data
        } catch (error) {
          alert(error)
        }
      };

    useEffect(()=>{
        if(user){
            getInitData(user.id)
        }
    },[])

    const normalize = (nfts, userlikes) => {
        console.log(userlikes)
        if(userlikes.length <= 0){
            return nfts.map(c => ({...c, liked:false}))
        }
        const arr = userlikes.map(c => c.nft_id)
        const idArr = userLikes.map(c => c.id)

         return nfts.map((c) => {
            if(arr.includes(c.id)){
                console.log(userlikes.find((x)=>{return x.nft_id == c.id}).id)
                return ({...c, liked:true, like_id:userlikes.find((x)=>{return x.nft_id == c.id}).id})
            } else {
                return ({...c, liked:false, like_id:undefined})
            } 
         })
    }

    const renderCards = () => {
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

    return(
        <div className="shiftleft">
            <Title>DISCOVER</Title>
            <div className="marketContainer">
                {renderCards()}
            </div>
        </div>
    )
}