import { useState } from 'react'
import axios from 'axios'
import AddProduct from './AddProduct'
import Header from './header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserLogin from './UserLogin'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/AddProduct'element={<AddProduct/>}></Route>
    <Route path='/UserLogin'element={<UserLogin/>}></Route>

    </Routes>
   
  <AddProduct/>
  </BrowserRouter>
  
    </>
  )
}

export default App
