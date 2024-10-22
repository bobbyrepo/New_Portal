import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Search from './Pages/Search'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/explore' element={<Explore />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App