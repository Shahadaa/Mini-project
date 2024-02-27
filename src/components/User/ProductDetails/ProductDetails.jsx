import React from 'react'
import './ProductDetails.css'
import product from '../../../product.json'

function ProductDetails({addToCart}) {
  return (
    <div className="product-list">
    {product.map((product) => (
        <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className='product-image' />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>

    ))}
 </div>
  )
}

export default ProductDetails