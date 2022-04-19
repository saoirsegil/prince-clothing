import { React, Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {UserContext} from '../../contexts/UserContext'
import Logo from '../../assets/logo.jpg';
import './Navigation.scss';
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import CartContext from '../../contexts/CartContext'
import {signOutUser} from '../../components/utils/firebase'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  const { isCartOpen } = useContext(CartContext)
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> )
              : (<Link className="nav-link" to="/auth">
            SIGN-IN
          </Link>
          )
          }
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
