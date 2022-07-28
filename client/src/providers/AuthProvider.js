import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext();

const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    const logout = async() => {
        try{
            await axios.delete('/api/auth/sign_out')
            setUser(null)
            navigate('/')
        }catch(err){
            setUser(null)
            console.log(err)
        }
        
    }

    const login =  async(user) => {
        try{
            let res = await axios.post('/api/auth/sign_in', user)
            setUser(res.data.data)
            navigate('/')
        }catch(err){
            alert('failed to sign in')
            console.log(err)
        }
    };

    const register = async(user) => {
        try{
            let res = await axios.post('/api/auth', user)
            console.log(res)
            navigate('/login')
        }catch(err){
            alert('failed to register new account')
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{user, setUser, logout, login, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider