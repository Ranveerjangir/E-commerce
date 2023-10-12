import React from 'react'
import AddProduct from './AddProduct'
import Header from './Header'
import Home from './home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Userlogin from './Userlogin'
import AllProduct from './AllProduct'
import AdminLogin from './AdminLogin'
import SignUp from './SignUp'

function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
    <Routes>
    <Route path='/AddProduct' element={<AddProduct/>}></Route>
    <Route path='/userLogin' element={<Userlogin/>}></Route>
    <Route path='/allProducts' element={<AllProduct/>}></Route>
    <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
    <Route path='/SignUp' element={<SignUp/>}></Route>

    <Route path='/'element={<Home/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )}

export default App