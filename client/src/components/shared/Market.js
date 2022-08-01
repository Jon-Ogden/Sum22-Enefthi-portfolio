import {Title} from '../styled-components/Fonts'
import NftCard from '../../Cards/NftCard'
import "../../Css/shiftleft.css"
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../providers/DataProvider'
import { AuthContext } from '../../providers/AuthProvider'
import axios from 'axios'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { IconButton, Button } from '@mui/material'
import LoadingSpinner from '../../assets/Loadingspinner'


export default function Market(){
    const { users, isLoading } = useContext(DataContext)
    const { user } = useContext(AuthContext)
    const [ normData, setNormData] = useState([])
    const [ userLikes, setUserLikes] = useState([])
    const [ nfts, setNfts] = useState([])
    const [ currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
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
    

      const paginateNft = async(pagenum = 1) => {
        try {
          let res = await axios.get(`/api/nfts/page/${pagenum}`)
          setNormData(normalize(res.data.nfts, userLikes))
          setTotalPages(res.data.total_pages)
        } catch (error) {
          alert(error)
        }
      };

    useEffect(()=>{
        if(user){
            getInitData(user.id)
        } else {
            getInitDataNoUser()
        }
    },[])

    const firstPage = () => {
        if(currentPage > 1){
            paginateNft(1)
            setCurrentPage(1)
        }
    }
    const previousPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
            paginateNft(currentPage - 1)
        }
    }
    const nextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
            paginateNft(currentPage + 1)
        }
    }
    const lastPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(totalPages)
            paginateNft(totalPages)
        }
    }

    const normalize = (nfts, userlikes = []) => {
        if(userlikes.length <= 0){
            return nfts.map(c => ({...c, liked:false}))
        }
        if(user){
            let marketNfts = nfts.filter(c => c.user_id !== user.id)
            const arr = userlikes.map(c => c.nft_id)
            const idArr = userLikes.map(c => c.id)

         return marketNfts.map((c) => {
            if(arr.includes(c.id)){
                return ({...c, liked:true, like_id:userlikes.find((x)=>{return x.nft_id == c.id}).id})
            } else {
                return ({...c, liked:false, like_id:undefined})
            } 
         })
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
                for_sale={c.for_sale}
                owner={c.user_id}
                />
                
            })
        }
        
      
    }

    return(
        <div className="shiftleft">
            <div className='discover'>
            <Title>DISCOVER</Title>
            </div>
            <div className="marketContainer">
                {renderCards()}
            </div>
            <div className='pageController'>
                <Button onClick={()=>{firstPage()}} variant="outlined" startIcon={<FirstPageIcon />} >
                </Button>
                <Button onClick={()=>{previousPage()}} variant="outlined" startIcon={<ChevronLeftIcon />} >
                </Button>
                <Button variant="outlined">
                    {currentPage}
                </Button>
                <Button onClick={()=>{nextPage()}} variant="outlined" startIcon={<ChevronRightIcon />} >
                </Button>
                <Button onClick={()=>{lastPage()}} variant="outlined" startIcon={<LastPageIcon />} >
                </Button>
            </div>
        </div>
    )
}