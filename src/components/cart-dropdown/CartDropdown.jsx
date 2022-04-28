import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdown.Styles.jsx";

import Button from "../button/Button";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import CartItem from "../cart-item/CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
