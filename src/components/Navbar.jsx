import { NavLink } from 'react-router'
import { useState} from 'react'

const Navbar = () => {

  const [showSearchBar, setShowSearchBar] = useState(false);

  //Toggle for search bar when magnifier clicked
  const toggleSearchBar = (e) => {
    setShowSearchBar(!showSearchBar);
  }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4">
        <div className="container-fluid navbar-desktop">
          <NavLink className="navbar-brand" to="/"><img src="./src/assets/images/logotype.png" className="logotype" alt="Logotype bmerketo" /></NavLink>

          <ul className='navbar-nav d-flex align-items-center nav-visible'>
            <form className="d-flex">
              <label htmlFor="search-name" className='visually-hidden'>Search</label>
              <button className="btn nav-link" type="button" onClick={toggleSearchBar}><i className="fa-solid fa-magnifying-glass"></i></button>
              {showSearchBar && (
              <input id="search-input" className={`ms-2 search-bar ${showSearchBar ? 'show' : ''}`} type="search" placeholder="Search" aria-label="Search" />
              )}</form>
              <li className="nav-item">
                <NavLink className="nav-link" to="#"><span className='user'>Log in</span> <i className="fa-solid fa-user" aria-hidden="true"></i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></NavLink>
              </li>
          </ul>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" tabIndex={1}>
                <NavLink className="nav-link active text-uppercase" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item" tabIndex={2}>
                <NavLink className="nav-link text-uppercase" to="/products">Products</NavLink>
              </li>
              <li className="nav-item" tabIndex={3}>
                <NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink>
              </li>
              </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar