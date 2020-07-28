import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddItem = props => {
    const initialFormValues = {
        product: '',
        price: '',
        quantity: '',
        image: ''
    }
    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        axiosWithAuth()
            .post('/placeholder', formValues)
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
                        name='product'
                        value={formValues.product}
                        onChange={onChange}                
                    />
                </label>
                <label>Price:
                    <input 
                        type='text'
                        name='price'
                        value={formValues.price}
                        onChange={onChange}                
                    />
                </label>
                <label>Quantity:
                    <input 
                        type='text'
                        name='quantity'
                        value={formValues.quantity}
                        onChange={onChange}                
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='image'
                        value={formValues.image}
                        onChange={onChange}
                    />
                </label>
                <button>Create Sale Listing</button>
            </form>
        </>
    )
}

export default AddItem