import React, { useEffect, useState, useContext } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'
import {PRODUCTS_PATH, USERS_PATH} from '../utils/URLs'
import {UserContext} from '../App'

import Listing from './Listing'


const Home = () => {
    const {push} = useHistory()
    const [itemsForSale, setItemsForSale] = useState([])
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        axiosWithAuth()
            .get(`${PRODUCTS_PATH}`)
            .then(res => {
                console.log(res)
                setItemsForSale(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get(`${USERS_PATH}`)
            .then(res => {
                // console.log(res)
                // console.log(user)
                const userId = res.data.data.filter(u => user.username === u.username)
                setUser({
                    ...user,
                    id: userId
                })
            })
            .catch(err => {
                console.log(err)
            })
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