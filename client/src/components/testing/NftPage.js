import {Title} from '../styled-components/Fonts'
import NftCard from '../../Cards/NftCard'
import "../../Css/shiftleft.css"
import { useContext } from 'react'
import { DataContext } from '../../providers/DataProvider'


export default function NftPage(){
    const { nfts, users } = useContext(DataContext)



    const renderCards = () => {
        return nfts.map((c) => {
            return <NftCard 
            key={c.id}
            title={c.title}
            price={c.price}
            image={c.image}
            creator={users.filter(x => x.id == c.creator_id)[0].name}
            />
            
        })
    }

    return(
        <div classname="shiftleft">
            <Title>All NFTs</Title>
            {renderCards()}
        </div>
    )
}