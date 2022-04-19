import './CartDropdown.scss'
import Button from '../button/Button'

import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'

import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {
const {cartItems} = useContext(CartContext)

return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map(item => <CartItem 
            key={cartItems.id} cartItem={item}/>)}
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)
}

export default CartDropdown;