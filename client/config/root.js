import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../components/home'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root
