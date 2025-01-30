import { NavLink } from 'react-router'
import CustomNavLink from './CustomNavLink';
import Cartdropdown from '../cart/Cartdropdown';
import { useSelector } from 'react-redux';
import logo from "/src/assets/images/logotype.png";


const Navbar = () => {

  // Using useSelector to get the total quantity of items in the shopping cart from the Redux store
  const { totalQuantity } = useSelector(state => state.shoppingCart)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4">
      <div className="container-fluid navbar-desktop">
        <NavLink className="navbar-brand" to="/" aria-label='Go to homepage' tabIndex={1}>
          <img src={logo} className="logotype" alt="Logotype bmerketo" />
        </NavLink>
        <div className='navbar-nav d-flex align-items-center nav-visible'>
          <div className="d-flex">

            <label htmlFor="search-name" className='visually-hidden'>Search</label>
            <button className="btn nav-link p-2" type="button" aria-label='Toggle search bar' tabIndex={5}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input className='ms-2 search-bar border-0' type="search" placeholder="Search" aria-label="Search" tabIndex={6} />
            <ul className='navbar-nav d-flex align-items-center flex-row'>
              <li className="nav-item">
                <NavLink className="nav-link p-2" to="#" aria-label='Go to login page' tabIndex={7}>
                  <span className='user nav-link'>Log in</span>
                  <i className="fa-solid fa-user nav-link" aria-hidden="true"></i>
                </NavLink>
              </li>
              <li className="nav-item position-relative">
                {/* Display cart notification if there are items in the cart */}
                {
                  totalQuantity > 0 && (
                    <div className='cart-notification position-absolute'>
                      {totalQuantity} {/* Displaying the total quantity of items in the cart */}
                    </div>
                  )
                }
                <Cartdropdown>
                  <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                </Cartdropdown>
              </li>
            </ul>
          </div>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomNavLink to="/" tabIndex={2} aria-label='Go to homepage'>Home</CustomNavLink>
            </li>
            <li className="nav-item">
              <CustomNavLink to="/products" tabIndex={3} aria-label='Go to product page'>Products</CustomNavLink>
            </li>
            <li className="nav-item">
              <CustomNavLink to="/contact" tabIndex={4} aria-label="Go to contact page">Contact</CustomNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar