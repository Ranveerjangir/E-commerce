import { useState } from 'react'
import axios from 'axios'
import AddProduct from './AddProduct'
import Header from './Header'
import AllProduct from './AllProduct'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserLogin from './UserLogin'
import Home from './Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path='/AddProduct'element={<AddProduct/>}></Route>
    <Route path='/UserLogin'element={<UserLogin/>}></Route>
    <Route path='/AllProduct'element={<AllProduct/>}></Route>
    <Route path='/adminLogin'element={<adminLogin />}></Route>
    <Route path='/Home'element={<Home/>}></Route>


   

    </Routes>
   
  <AddProduct/>
  </BrowserRouter>
  
    </>
  )
}

export default App
