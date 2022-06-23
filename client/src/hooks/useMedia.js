import { useEffect, useState } from "react"

export const useMedia = ()=>{
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)
    
    const onResize =()=>{
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)
        setIsMobile(window.innerWidth < 768)
    }

    useEffect(()=>{
        window.addEventListener('resize', onResize)
        // this callback get called when component onMounts
        return ()=>{
          window.removeEventListener('resize', onResize)
        }
    },[])

    // prented this is done
    return {isMobile, screenWidth, screenHeight }
}