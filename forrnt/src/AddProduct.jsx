import { useState } from 'react'
import './App.css'
import axios from 'axios'


const AddProduct =()=> {
  const [name, setName]=useState("")
  const [price, setPrice]=useState("")
  const [category, setCategory]=useState("")
  const [company, setCompany]=useState("")
  const [photo, setPhoto]=useState("")

   

  const RegisterProduct=async()=>{
    let result= await axios.post("http://localhost:8080/product/add",{name,price,category,company})
    result= result.data
    console.log(result);
    if(result.name){
      alert("Product has been added to data base")

    }
  }
  return (
    <>
     <div className='addproduct'>
      <h1> Products</h1>
      <form action="">
      <input type="text" placeholder='Name of product' value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="number" placeholder='price of product' value={price} onChange={(e) => setPrice(e.target.value)}/>
      <br />
      <input type="text" placeholder='Category of product' value={category} onChange={(e) => setCategory(e.target.value)} />
      <br />
      <input type="text" placeholder='Company of product' value={company} onChange={(e) => setCompany(e.target.value)} />      
      <br />
      <input type="file" placeholder='photo' onChange={(e) => setPhoto(e.target.files)} />
<br />
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