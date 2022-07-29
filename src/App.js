import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CertificatesPage from './pages/CertificatesPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  )
}

export default App
