import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Layout from './pages/Layout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import VedioPlayer from './pages/VedioPlayer'
import SearchResult from './components/serchResult/searchResult'

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  
  return (

    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Layout sidebar={sidebar} />} />
        <Route path='/vedio/:id' element={<VedioPlayer />} />
        <Route path='/searchResults/:id' element={<SearchResult sidebar={sidebar} />} />
        
      </Routes>
    </div>
  )
}

export default App