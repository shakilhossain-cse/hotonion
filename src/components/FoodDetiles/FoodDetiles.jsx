import React from 'react'
import { useParams } from 'react-router'

const FoodDetiles = () => {
    const {id} = useParams()

    return (
        <div>
         {id}
        </div>
    )
}

export default FoodDetiles
