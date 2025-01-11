import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import Productpage from './pages/Productpage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Productpage' element={<Productpage />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
