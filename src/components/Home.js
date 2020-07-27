import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Listing from './Listing'

const Home = () => {

    const [itemsForSale, setItemsForSale] = useState([])

    useEffect(() => {
        axios.get()
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    })



    return (
        <div>
            {itemsForSale.map(item => {
                return(
                    <Listing key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default Home