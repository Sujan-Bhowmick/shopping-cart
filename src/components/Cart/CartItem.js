import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { incrementCartQuantity, decrementCartQuantity } from '../../redux/carts/actions';
import { decrementProduct, incrementProduct } from '../../redux/products/action';

export default function CartItem() {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.carts.cart)
    console.log(carts)
    const totalPrice = carts.reduce((total, cart) => total + cart.quantity * cart.price, 0)

    const incrementHandler = (productId) => {
        dispatch(incrementCartQuantity(productId));
        dispatch(decrementProduct(productId))
    }
    const decrementHandler = (productId) => {
        dispatch(decrementCartQuantity(productId))
        dispatch(incrementProduct(productId));
    }

   
    return (
        <div>
            {
                carts.sort((a, b) => a.id - b.id).map((cart, id) => <div key={cart.id} className="cartCard">

                    <div className="flex items-center col-span-6 space-x-6">
                        <img className="lws-cartImage" src={cart.image} alt="product" />

                        <div className="space-y-2">
                            <h4 className="lws-cartName">{cart.product}</h4>
                            <p className="lws-cartCategory">Branded Car</p>
                            <p>BDT <span className="lws-cartPrice">{totalPrice}</span></p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                        <div className="flex items-center space-x-4">
                            {cart.quantities >= cart.quantity ?
                                <button
                                    onClick={() => incrementHandler(id)}
                                    className="lws-incrementQuantity">
                                    <i className="text-lg fa-solid fa-plus"></i>
                                </button> : <button> + </button>
                            }
                            <span className="lws-cartQuantity">{cart.quantity}</span>
                            {cart.quantities <= cart.quantity ?
                                <button
                                    onClick={() => decrementHandler(id)}
                                    className="lws-decrementQuantity">
                                    <i className="text-lg fa-solid fa-minus"></i>
                                </button> : <button> - </button>
                            }

                            {/* <button
                                onClick={() => decrementHandler(id)}
                                className="lws-decrementQuantity">
                                <i className="text-lg fa-solid fa-minus"></i>
                            </button>  */}
                        </div>

                        <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">${totalPrice}</span></p>
                    </div>
                    <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                        <button className="lws-removeFromCart">
                            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                )}

        </div>
    )
}
