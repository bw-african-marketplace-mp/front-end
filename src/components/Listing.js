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
        <div>Placeholder text {props.item.id}
        <button>Edit Listing</button>
        <button onClick={deleteItem}>Delete Listing</button>
        </div>
    )
}

export default Listing