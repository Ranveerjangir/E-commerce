import React, { useEffect, useState } from 'react'

function AllProduct() {
const [AllProduct, setAllProduct]=useState()

    useEffect(()=>{
        getProduct();

    },[])

    const getProduct=async()=>{
        let rep=
    }
  return (
   <div className='product'>
    <h2>All Product</h2>
    <div className='products-1'>
        {
       AllProduct.map((product)=>{
        
       })
        }
    </div>
   
    </div>
  )
}

export default AllProduct