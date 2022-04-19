import './ProductCard.scss'

import { useContext } from 'react';

import {CartContext} from '../../contexts/CartContext'

import Button from '../button/Button';

const ProductCard = ({product}) => {
const {name, price, imageUrl} = product;
const {addItemToCart} = useContext(CartContext)

const addProductToCart = () => addItemToCart(product)

 return (   
 <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart} >Add to cart</Button>
    </div>
    )
}

export default ProductCard;