import './CartDropdown.scss'
import Button from '../button/Button'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'

import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {
const {cartItems} = useContext(CartContext)

const navigate = useNavigate()

const goToCheckoutHandler = () => {
    navigate('/checkout')
}

return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems && cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))}
        </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
)
}

export default CartDropdown;