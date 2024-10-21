import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/' element={<div>Category</div>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App