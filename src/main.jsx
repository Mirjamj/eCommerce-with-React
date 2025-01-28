import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'

import './index.css'

import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Productpage from './pages/Productpage'
import RootLayout from './layouts/Rootlayout'
import Checkout from './pages/Checkout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products/:product_id',
        element: <Productpage />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'notfound',
        element: <NotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
