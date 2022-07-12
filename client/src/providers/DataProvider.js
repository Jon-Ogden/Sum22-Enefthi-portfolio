import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DataContext = React.createContext();

const DataProvider = ({children})=> {
    const [nfts, setNfts] = useState([])
    const [users, setUsers] = useState([])
    const [sales, setSales] = useState([])
    const [liked_nfts, setLiked_nfts] = useState([])
    const [relationships, setRelationships] = useState([])

    const getThings = async() => {
        try{
            let nfts = await axios.get(`/api/nfts`)
            let users = await axios.get(`/api/users`)
            let sales = await axios.get(`/api/sales`)
            let liked_nfts = await axios.get(`/api/liked_nfts`)
            let relationships = await axios.get(`/api/relationships`)
            
            setNfts(nfts.data)
            setUsers(users.data)
            setSales(sales.data)
            setLiked_nfts(liked_nfts.data)
            setRelationships(relationships.data)
        } catch(error){
            console.log(error)
        }
    };

    useEffect(()=>{
        getThings();
    },[])

    const deleteThing = (id, things, setThings) =>{
        setThings(things.filter((c) => c.id !== id));
        axios.delete(`/api/${things}/${id}`);
    }

    const updateNft = async (newInfo) => {
        let newNfts = nfts.map((c) =>
          c.id === newInfo.id ? newInfo : c
        );
        setNfts(newNfts);
        axios.put(`/api/nfts/${newInfo.id}`, newInfo);
      };
    const newNft = async (newInfo) => {
        let newNfts = [...nfts, newInfo];
        setNfts(newNfts);
        axios.post(`/api/nfts/`, newInfo);
      };

    const updateSale = async (newInfo) => {
        let newSales = sales.map((c) => (c.id === newInfo.id ? newInfo : c));
        setSales(newSales);
        axios.put(
          `/api/nfts/${newInfo.nft_id}/sales/${newInfo.id}`,
          newInfo
        );
      };
    const newSale = async (newInfo) => {
        let newSales = [...sales, newInfo];
        setSales(newSales);
        axios.post(`/api/nfts/${newInfo.nft_id}/sales/`, newInfo);
      };

    return (
        <DataContext.Provider value={{nfts, users, sales, liked_nfts, relationships,
        deleteThing}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider