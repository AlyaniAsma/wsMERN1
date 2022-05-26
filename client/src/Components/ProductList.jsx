import React from 'react'
import {useSelector} from 'react-redux'
import ProductCard from './ProductCard'

const ProductList = () => {
  const produits= useSelector((state)=>state.products)
  // console.log(produits)
  return (
    <div><h1>ProductList</h1>
    <div>
      {
        produits.map(
          (el)=><ProductCard el={el} key={el._id}/>
        )
      }
    </div>

    </div>
  )
}


export default ProductList