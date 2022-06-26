import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../components/home'
import Level1 from '../components/section1/level1'
import Level2 from '../components/section2/level2'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Root
