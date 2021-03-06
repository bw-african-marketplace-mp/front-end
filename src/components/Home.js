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
    const [userList, setUserList] = useState([])

    useEffect(() => {
        // get list of all users - single API call providing data to all children
        axiosWithAuth()
        .get(`${USERS_PATH}`)
        .then(res => {
            setUserList(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
        //set user context - uses username from localStorage if the page was reloaded
        let usernameSnapshot = user.username
        if (usernameSnapshot === '') {
            usernameSnapshot = localStorage.getItem('username')
        }
        axiosWithAuth()
            .get(`${USERS_PATH}`)
            .then(res => {
                const currentUser = res.data.data.filter(u => usernameSnapshot === u.username)
                const userId = currentUser[0].id
                setUser({
                    username: usernameSnapshot,
                    id: userId
                })
                // set list of items for sale
                // triggers children to mount
                // children require user context to mount correctly
                axiosWithAuth()
                    .get(`${PRODUCTS_PATH}`)
                    .then(res => {
                        console.log(res)
                        setItemsForSale(res.data.data)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const addItem = () => {
        push('/add-item')
    }

    return (
        
            <div>
                <h2 className='home-title'>Items for Sale</h2>
                {itemsForSale.map(item => {
                    return(
                        <Listing key={item.id} item={item} userList={userList} />
                    )
                })}
                <div>
                    <button className='btn' onClick={addItem}>Add Item</button>
            </div>
        </div>
    )
}

export default Home