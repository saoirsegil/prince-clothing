import { React, Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {UserContext} from '../../contexts/UserContext'
import Logo from '../../assets/logo.jpg';

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from'./Navigation.Styles';

import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import CartContext from '../../contexts/CartContext'

import {signOutUser} from '../../components/utils/firebase'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  const { isCartOpen } = useContext(CartContext)
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> )
              : (<NavLink to="/auth">SIGN-IN</NavLink>
          )
          }
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
