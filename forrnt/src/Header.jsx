import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const adminAuth = localStorage.getItem("admin")
  const userAuth = localStorage.getItem("user")
  return (
    <div className='header'>
      <Link to="/">Home</Link>
      {
        adminAuth ?
          <>
            <Link to="/allProducts">All Products</Link>
            <Link to="/add-product">Add Product</Link>
            <Link to="/edit">Edit Product</Link>

          </> : ""
      }
      {
        userAuth ?
          <>
            <Link to="/allUserProducts">All Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
          </> : ""

      }

      {
        
        userAuth || adminAuth ?
          <Link to="/" onClick={() => { localStorage.clear() }}>Logout <span id='loggername'>&#41; {adminAuth ? JSON.parse(adminAuth).name : ""}{userAuth ? JSON.parse(userAuth).name : ""} &#41;</span> </Link>
          :
          <>
            <Link to="/userLogin">User Login</Link>
            <Link to="/adminlogin" >Admin Login</Link>
            
          </>
      }

</div>
  )
}

export default Header





