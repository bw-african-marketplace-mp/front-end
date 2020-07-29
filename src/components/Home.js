import React, { useEffect, useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'
import {BASE_URL, PRODUCTS_PATH} from '../utils/URLs'

import Listing from './Listing'


const Home = () => {
    const {push} = useHistory()
    const [itemsForSale, setItemsForSale] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get(`${PRODUCTS_PATH}`)
            .then(res => {
                console.log(res)
                setItemsForSale(res.data.data)
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