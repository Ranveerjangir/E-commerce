import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Allproducts from './AllProduct.css'
function AllProduct() {
  const [allproducts, setAllproduct] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getProducts();
  }, [])


  const getProducts = async () => {
    let response = await axios.get("http://localhost:8080/product/")
    setAllproduct(response.data);

  }

  const HandleEdit = (id) =>{
    navigate (`/edit/${id}`)
  }

  const HandleDelete =  async(id) =>{
    let result = await axios.delete(`http://localhost:8080/del/${id}`)
    if(result.data.acknowledged){
      alert(`product with ID : ${id} has been deleted`)
      navigate("/allProducts")
    }
  }
  return (
    <div className='Allproduct'>
      <h1>All Product</h1>
      <div className='product-cont'>
        {
          allproducts.map((products) => {
            return (
              <div className='product' key={products._id}>

                <div className="items">
                  <h2 className='label'>Product:</h2>
                  <h4>{products.name}</h4>
                </div>
                <br />
                <div className="items">
                  <h2 className='label'>Price:</h2>
                  <h4>{products.price}</h4>
                </div>
                <br />
                <div className="items">
                  <h2 className='label'>Category:</h2>
                  <h4>{products.category}</h4>
                </div> <div className="items">
                  <h2 className='label'>Company:</h2>
                  <h4>{products.company}</h4>
                </div>
                <div className="actions">
                  <button className='edit btns'onClick={()=>HandleEdit(products._id)}>Edit</button>
                  <button className='delete btns'onClick={()=>HandleDelete(products._id)}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct