import {useContext, Fragment} from 'react'
import {CategoriesContext} from '../../contexts/CategoriesContext'
import CategogryPreview from '../../components/category-preview/CategoryPreview'
import './CategoriesPreview.scss'

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return (
            <CategogryPreview key={title} title={title} products={products}/>
      )
      })}
    </Fragment>
  )
}

export default CategoriesPreview;