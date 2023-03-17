import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../App.css'
import { increaseQuantity } from '../../redux/carts/actions';
import { decreaseQuantity } from '../../redux/products/action';

export default function Container() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.product)
  console.log(products)


  const handleCart = (product, productId) => {
    // dispatch(addToCart(product))
    dispatch(increaseQuantity(product))
    dispatch(decreaseQuantity(productId))
  }

  return (
    <div className="productContainer" id="lws-productContainer">
      {/* <!-- product item --> */}
      {
        products.sort((a,b) => a.id - b.id).map((product, id) => <div key={product.id} className="lws-productCard">
          <img className="lws-productImage" src={product.image} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{product.product}</h4>
            <p className="lws-productCategory">{product.category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">{product.quantities}</span></p>
            </div>
           {
            product.quantities > 1 ? (
              <button onClick={() => handleCart(product, id)} className="lws-btnAddToCart">Add To Cart</button>) : <div>out of stock </div>
            
            }
          </div>
        </div>)
      }
    </div>
  )
}
