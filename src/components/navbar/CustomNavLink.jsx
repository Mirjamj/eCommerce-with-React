import React from 'react'
import { NavLink } from 'react-router'

// CustomNavLink component: A wrapper around NavLink with additional styles for active links
const CustomNavLink = ({ to, children, tabIndex }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? 'nav-link text-uppercase fw-bold' : 'nav-link text-uppercase'
      }
      to={to} // 'to' prop defines the route the link should navigate to
      tabIndex={tabIndex} // 'tabIndex' prop makes the link focusable for accessibility
    >
      {children}
    </NavLink>
  )
}

export default CustomNavLink

