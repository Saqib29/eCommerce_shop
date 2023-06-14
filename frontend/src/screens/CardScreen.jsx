import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'

const CardScreen = () => {
    const params = useParams()
    const location = useLocation()

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const productId = params.id

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    console.log(cartItems)

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    

  return (
    <div>
        {qty}
    </div>
  )
}

export default CardScreen
