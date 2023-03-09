import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Results from './components/Results'
import Home from './components/Home'


const App = () => {



  
  return (  
    <main className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>

    </main> 
  )
}
export default App

