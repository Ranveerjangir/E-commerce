import React, { useState } from 'react'
import AddProduct from './AddProduct'
import Header from './Header'
import Home from './home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AllProduct from './AllProduct'
import AdminLogin from './AdminLogin'
import userSignup from './UserSignup'
// import CategoryRibbon from './CategoryRibbon'

// function App(){
//   const[AllCategories,setAllCategories]=useState([]);
//   const[Allisfillter,setIsFillter]=useState([]);
//   const[All,set]=useState([]);

// }
function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
    <Routes>
    <Route path='/AddProduct' element={<AddProduct/>}></Route>
    <Route path='/allProducts' element={<AllProduct/>}></Route>
    <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
    <Route path='/UserSignup' element={<userSignup/>}></Route>
    <Route path='/'element={<Home/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )}

export default App