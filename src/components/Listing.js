import React from 'react'

const Listing = props => {
    console.log(props)
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
        </div>
    )
}

export default Listing