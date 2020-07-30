import React, { useContext } from 'react'
import { UserContext } from '../App'
import { useHistory } from 'react-router-dom'

const Listing = props => {
    console.log(props)

    const {push} = useHistory()
    const {user} = useContext(UserContext)
    // console.log(user)

    const modifyItem = event => {
        push(`/modify-item/${props.item.id}`)
    }

    return(
        <div className='item-card'>
            <div className='description'>
            Product Name: {props.item.product_name};
            </div>
            <div className='description'>
            Price: {props.item.product_price}
            </div>
            <div className='description'>
            Quantity: {props.item.product_quantity};
            </div>
            <div className='description'>
            Category: {props.item.product_category}
            </div>
            <div className='description'>
            Description: {props.item.product_description};
            </div>
            <div className='description'>
            Country: {props.item.country}
            </div> 
            <div className='description'>
            Market Name: {props.item.market_name}
            </div> 
            {user.id === props.item.id && <button onClick={modifyItem}>Modify Item</button>}
        </div>
    )
}

export default Listing