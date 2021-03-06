import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { PRODUCTS_PATH } from '../utils/URLs'
import { useHistory, useParams } from 'react-router-dom'

const ModifyItem = () => {

    const initialFormValues = {
        product_name: "", 
        product_category: "", 
        product_description: "", 
        product_quantity: "", 
        product_price: "", 
        country: "", 
        market_name: ""
    }

    const {push} = useHistory()
    let {itemId} = useParams()
    // console.log(itemId)

    const [formValues, setFormValues] = useState(initialFormValues)

    useEffect(() => {
        axiosWithAuth()
            .get(`${PRODUCTS_PATH}/${itemId}`)
            .then(res => {
                // console.log(res)
                setFormValues(res.data.data)
            })
    }, [itemId])

    const onChange = event => {
        // console.log(event.target)
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const editListing = event => {
        event.preventDefault()
        axiosWithAuth()
            .put(`${PRODUCTS_PATH}/${itemId}`, formValues)
            .then(res => {
                push('/')
            })
            .catch(err => console.log(err))
    }

    const deleteListing = event => {
        event.preventDefault()
        axiosWithAuth()
            .delete(`${PRODUCTS_PATH}/${itemId}`)
            .then(res => {
                push('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <>
            <h2 className='change-title'>Create a New Listing</h2>
            <div className='list'>
                <form>
                    <label className='item'>Product Name:
                        <input 
                            type='text'
                            name='product_name'
                            value={formValues.product_name}
                            onChange={onChange}                
                        />
                    </label>
                    <label className='item'>Price:$
                        <input 
                            type='text'
                            name='product_price'
                            value={formValues.product_price}
                            onChange={onChange}                
                        />
                    </label>
                    <label className='item'>Quantity:
                        <input 
                            type='text'
                            name='product_quantity'
                            value={formValues.product_quantity}
                            onChange={onChange}                
                        />
                    </label>
                    <label className='item'>Product Category:
                        <input 
                            type='text'
                            name='product_category'
                            value={formValues.product_category}
                            onChange={onChange}
                        />
                    </label>
                    <label className='item'>Product Description:
                        <input 
                            type='text'
                            name='product_description'
                            value={formValues.product_description}
                            onChange={onChange}
                        />
                    </label>
                    <label className='item'>Country:
                        <input 
                            type='text'
                            name='country'
                            value={formValues.country}
                            onChange={onChange}
                        />
                    </label>
                    <label className='item'>Market Name:
                        <input 
                            type='text'
                            name='market_name'
                            value={formValues.market_name}
                            onChange={onChange}
                        />
                    </label>
                    <button onClick={editListing} className='sale-btn'>Edit Listing</button>
                    <button onClick={deleteListing} className='sale-btn'>Delete Listing</button>
                </form>
            </div>
        </>
    )
}

export default ModifyItem