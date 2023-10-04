import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [name,setName] =useState()
  const [prize,setPrize] =useState()
  const [categary,seCategary] =useState()
  const [company,setCompany] =useState()


  return (
    <>
    <div id="wrapper">
    <h1>Products</h1>
    <form action="">
    <input type="text" placeholder='product Name' value={name} onChange={(e) => setName(e.target.value)} />
    <input type="numbers" placeholder='product prize'value={prize} onChange={(e) => setPrize(e.target.value)} />
    <input type="text" placeholder='product categary'value={categary} onChange={(e) => seCategary(e.target.value)}/>
    <input type="text" placeholder='product company'value={company} onChange={(e) => setCompany(e.target.value)}/>
    <button>submit</button>
    </form>
    </div>
    </>
  )
}

export default App
