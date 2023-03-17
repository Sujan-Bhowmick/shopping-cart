import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../../App.css"
import { addProduct } from '../../redux/products/action'

export default function ProductForm() {
  const dispatch = useDispatch()
  const [id, setId] = useState(0)
  const handleId = (value)=> {
    setId( prev => prev + value)
  }

  const [formData, setFormData] = useState({
    product: '',
    category: '',
    image: '',
    price: "",
    quantities: "",
  
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData))
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData,id, [e.target.name]: e.target.value })

  }
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input onChange={handleChange} name="product" className="addProductInput" id="lws-inputName" type="text" required />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input value={formData.category} onChange={handleChange} name="category" className="addProductInput" id="lws-inputCategory" type="text" required />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input value={formData.image} onChange={handleChange} name="image" className="addProductInput" id="lws-inputImage" type="text" required />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input onChange={handleChange} value={formData.price} name="price" className="addProductInput" type="number" id="lws-inputPrice" required />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input onChange={handleChange} value={formData.quantities} name="quantities" className="addProductInput" type="number" id="lws-inputQuantity" required />
          </div>
        
        </div>
        {/* <!-- submit button --> */}
        <button onClick={() => handleId(1)} type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
      </form>
    </div>
  )
}
