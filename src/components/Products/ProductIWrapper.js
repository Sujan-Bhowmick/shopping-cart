import React from 'react'
import '../../App.css'
import ProductContainer from './ProductContainer'
import ProductForm from './ProductForm'
import Container from './Container'

export default function ProductWrapper() {
    return (
        <div>
            <main className="py-16">
                <div className="productWrapper">
                    {/* <ProductContainer /> */}
                    <Container />
                    <ProductForm />
                </div>
            </main>
        </div>
    )
}
