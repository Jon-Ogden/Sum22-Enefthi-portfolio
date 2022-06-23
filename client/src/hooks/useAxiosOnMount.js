import axios from "axios"
import { useEffect, useState } from "react"

export const useAxiosOnMount = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        try{
          let res = await axios.get(url) 
          setData(res.data)
        }catch(err){
          setError({message: err.message, response:err.response})
        } finally{
          setLoading(false)
        }
    }

    return {data, loading, error}
}