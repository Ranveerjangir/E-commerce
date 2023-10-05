import { useState } from 'react'
import axios from 'axios'
import './App.css'


const AddProduct =()=> {
  const [name, setName]=useState("")
  const [price, setPrice]=useState("")
  const [category, setCategory]=useState("")
  const [company, setCompany]=useState("")
   

  const RegisterProduct=async()=>{
    let result=await axios.post("http://localhost:4000/product/add",{name,price,category,company})
    result= result.data
    if(result.name){
      alert("Product has been added to data base")
    }
  }

  return (
    <>
     <div className='wrapper'>
      <h1> Products </h1>
      <form action="">
      <input type="text" placeholder='Name of product' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='price of product' value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder='Category of product' value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="text" placeholder='Company of product' value={company} onChange={(e) => setCompany(e.target.value)} />
      <button
          onClick={(e) => {
              e.preventDefault()
              RegisterProduct()
          }}>Add Product</button>
      </form>
     </div>
    </>
  )
}

export default AddProduct