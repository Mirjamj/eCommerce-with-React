import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/default/Footer'
import { Outlet } from 'react-router'
import Providers from '../components/default/Providers'

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