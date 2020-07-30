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
        axiosWithAuth()
            .get(`${USERS_PATH}`)
            .then(res => {
                // console.log('res', res)
                // console.log('user', username)
                // console.log(typeof username)
                setUserList(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    useEffect(() => {
        let usernameSnapshot = user.username
        if (usernameSnapshot === '') {
            usernameSnapshot = localStorage.getItem('username')
        }
        const currentUser =userList.filter(u => usernameSnapshot === u.username)
        // console.log(currentUser)
        const userId = currentUser[0].id
        setUser({
            username: usernameSnapshot,
            id: userId
        })
    }, [])

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