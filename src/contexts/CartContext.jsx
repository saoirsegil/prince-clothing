import { createContext, useState, useEffect } from "react";

const addCartItems = (cartItems, productToadd) => {
// find if cartItems contains productToAdd
const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToadd.id)
// if found, increment quantity
if (existingCartItem) {
    return cartItems.map((cartItem ) => cartItem.id === productToadd.id ?
    {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
    )
}
// return new array with modified cartItems/ new cart item
return [...cartItems, {...productToadd, quantity: 1}]
}

export const CartContext = createContext({
isCartOpen: false,
setIsCartOpen: () => {},
cartItems: [],
setCartItems: () => {},
cartCount: 0
})

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToadd) => {
        setCartItems(addCartItems(cartItems, productToadd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export default CartContext;