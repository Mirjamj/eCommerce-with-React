import { useState } from "react"
import ReactDOM from 'react-dom'
import Shoppingcart from "./Shoppingcart"

const Cartdropdown = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <CartdropdownBg setIsOpen={setIsOpen} />}
      <button onClick={() => setIsOpen(state => !state)} className="nav-link p-2" aria-label='Go to cart' tabIndex={8}>
        {children}
      </button>

      {
        isOpen && (
          <div className="position-absolute bg-white end-0 cart-dropdown border shadow">
            <Shoppingcart setIsOpen={setIsOpen} />
          </div>
        )
      }
    </>
  )
}

export default Cartdropdown

const CartdropdownBg = ({ setIsOpen }) => {
  return ReactDOM.createPortal((
    <div onClick={() => setIsOpen(false)} className="position-absolute inset-0 bg-transparent"></div>
  ), document.querySelector('#cartoverview'))
}