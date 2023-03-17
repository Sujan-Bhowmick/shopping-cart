import React from 'react'
import { useSelector } from 'react-redux'
import '../../App.css'
export default function Navbar() {
const carts = useSelector(state => state.carts.cart);
console.log(carts)
const totalQuantity= carts.reduce((total, cart) => total + cart.quantity, 0)
  return (
    <div>
       <nav className="bg-[#171C2A] py-4">
          <div className="navBar">
            <a href="index.html">
              <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
            </a>

            <div className="flex gap-4">
              <a href="#home" className="navHome" id="lws-home"> Home </a>
              <a href="cart.html" className="navCart" id="lws-cart">
                <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="lws-totalCart">{totalQuantity}</span>
              </a>
            </div>
          </div>
        </nav>

    </div>
  )
}
