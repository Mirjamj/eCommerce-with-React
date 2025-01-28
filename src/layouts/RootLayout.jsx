import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Providers from '../components/Providers'

const RootLayout = () => {
  return (
    <Providers>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Providers>
  )
}

export default RootLayout