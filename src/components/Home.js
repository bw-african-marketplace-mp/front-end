import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {BASE_URL, PRODUCTS_PATH} from '../utils/URLs'

import Listing from './Listing'


const Home = () => {
    const {push} = useHistory()
    const [itemsForSale, setItemsForSale] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}${PRODUCTS_PATH}`)
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
                <h2 className='home-title'>Items for Sale</h2>
                {itemsForSale.map(item => {
                    return(
                        <Listing key={item.id} item={item} />
                    )
                })}
                <div>
                    <button className='btn' onClick={addItem}>Add Item</button>
            </div>
        </div>
    )
}

export default Home