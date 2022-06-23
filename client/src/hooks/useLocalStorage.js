import {useState, useEffect} from 'react'

export const useLocalStorage = (key, initialValue)=>{
    const item = window.localStorage.getItem(key)

    const [value, setValue] = useState(item || initialValue)

    const removeValue = ()=>{
        window.localStorage.removeItem(key)
    }

    // with [value, key] as dependecy array, the callback in use EFfect
    // will get called when ever those change 
    useEffect(()=>{
       window.localStorage.setItem(key, value)
    },[value, key])

    return [value, setValue, removeValue]
}