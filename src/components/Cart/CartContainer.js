import React from 'react'
import BillDetail from './BillDetail'
import CartItem from './CartItem'
import '../../App.css'

export default function CartContainer() {
    return (
        <div>
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <div className="space-y-6">
                            <CartItem />
                            <BillDetail />
                        </div>
                    </div>
                </div>
        </div>
    )
}
