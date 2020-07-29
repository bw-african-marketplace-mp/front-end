import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { PRODUCTS_PATH } from '../utils/URLs'

const Listing = props => {
    console.log(props)
    const deleteItem = event => {
        axiosWithAuth()
            .delete(`${PRODUCTS_PATH}${props.item.id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
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
            <button className='third-btn'>Edit Listing</button>
            <button className='third-btn' onClick={deleteItem}>Delete Listing</button> 
        </div>
    )
}

export default Listing