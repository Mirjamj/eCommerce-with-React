import React from 'react'
import { NavLink } from 'react-router'

const CustomNavLink = ({ to, children, tabIndex }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? 'nav-link text-uppercase fw-bold' : 'nav-link text-uppercase'
      }
      to={to}
      tabIndex={tabIndex}
    >
      {children}
    </NavLink>
  )
}

export default CustomNavLink

