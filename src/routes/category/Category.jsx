import { useEffect, useState, useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/CategoriesContext';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/ProductCard';

import './Category.scss'


const Category = () => {
const { category } = useParams();
const { categoriesMap } = useContext(CategoriesContext)
const [ products, setProducts ] = useState(categoriesMap[category])

useEffect(() => {
setProducts(categoriesMap[category])
}, [category, categoriesMap])

return (
    <Fragment>
    <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
    <div className='category-container'>
        {products && 
        products.map((product) => (
    <ProductCard key={product.id} product={product} />
    ))}
    </div>
    </Fragment>
)
}

export default Category;