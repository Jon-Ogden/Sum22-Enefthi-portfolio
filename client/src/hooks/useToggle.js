import { useState } from "react"

// when create a hook your hook name must begin with use

// initialState should be a boolean
export const useToggle = (initialState) =>{
    const [isToggled, setIsToggled] = useState(initialState)

    const toggle = () =>{
        setIsToggled(!isToggled)
    }
    return {isToggled, toggle, setIsToggled}
}