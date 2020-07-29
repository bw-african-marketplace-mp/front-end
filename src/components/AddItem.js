import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {BASE_URL, NEW_ITEM_PATH} from '../utils/URLs'

const AddItem = props => {
    const initialFormValues = {
        product_name: "", 
        product_category: "", 
        product_description: "", 
        product_quantity: "", 
        product_price: "", 
        country: "", 
        market_name: ""
    }

    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = event => {
        console.log(event.target)
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        axiosWithAuth()
            .post(`${BASE_URL}${NEW_ITEM_PATH}${props.user.id}`, formValues)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return(
        <>
            <h2>Create a New Listing</h2>
            <form onSubmit={onSubmit}>
                <label>Product Name:
                    <input 
                        type='text'
                        name='product_name'
                        value={formValues.product_name}
                        onChange={onChange}                
                    />
                </label>
                <label>Price:$
                    <input 
                        type='text'
                        name='product_price'
                        value={formValues.product_price}
                        onChange={onChange}                
                    />
                </label>
                <label>Quantity:
                    <input 
                        type='text'
                        name='product_quantity'
                        value={formValues.product_quantity}
                        onChange={onChange}                
                    />
                </label>
                <label>Product Category:
                    <input 
                        type='text'
                        name='product_category'
                        value={formValues.product_category}
                        onChange={onChange}
                    />
                </label>
                <label>Product Description:
                    <input 
                        type='text'
                        name='product_description'
                        value={formValues.product_description}
                        onChange={onChange}
                    />
                </label>
                <label>Country:
                    <input 
                        type='text'
                        name='country'
                        value={formValues.country}
                        onChange={onChange}
                    />
                </label>
                <label>Market Name:
                    <input 
                        type='text'
                        name='market_name'
                        value={formValues.market_name}
                        onChange={onChange}
                    />
                </label>
                <button>Create Sale Listing</button>
            </form>
        </>
    )
}

export default AddItem