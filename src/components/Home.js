import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {BASE_URL} from '../utils/URLs'

import Listing from './Listing'


const Home = () => {
    const {push} = useHistory()
    const [itemsForSale, setItemsForSale] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/users`)
        .then(res => {
            console.log(res)
            setItemsForSale(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const addItem = event => {
        push('/add-item')
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <div>
                <h2>Items for Sale</h2>
                {itemsForSale.map(item => {
                    return(
                        <Listing key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home