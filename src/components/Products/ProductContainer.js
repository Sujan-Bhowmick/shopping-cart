import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../App.css'
import { addToCart } from '../../redux/carts/actions';

export default function ProductContainer() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.product)
  // console.log(products)

  const handleCart = (product) => {
    // dispatch(addToCart(product))
    
  }

    return (
        <div className="productContainer" id="lws-productContainer">
        {/* <!-- product item --> */}
       {
        products.map((product) =>  <div key = {product.id} className="lws-productCard">
        <img className="lws-productImage" src= {product.image}alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{product.product}</h4>
          <p className="lws-productCategory">{product.category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
            <p className="productQuantity">QTY <span className="lws-quantity">{product.quantities}</span></p>
          </div>
          <button onClick={() => handleCart(product)} className="lws-btnAddToCart">Add To Cart</button>
        </div>
      </div>)
        }
      </div>
    )
}
