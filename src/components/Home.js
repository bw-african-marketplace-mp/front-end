import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../utils/URLs'

import Listing from './Listing'

const Home = () => {

    const [itemsForSale, setItemsForSale] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/users`)
        .then(res => {
            console.log(res)
            setItemsForSale(res.data)
        })
        .catch(err => console.log(err))
    }, [])



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