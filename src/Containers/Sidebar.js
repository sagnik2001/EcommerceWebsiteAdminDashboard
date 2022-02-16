import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div className="position-sticky pt-3" style={{marginTop:'4vh'}}>
    <ul class="nav flex-column" style={{fontSize:'20px'}}>
        <li class="nav-item active">
          <NavLink to="/" class="nav-link" aria-current="page" >
            <span data-feather="home"></span>
            Home
          </NavLink>
          
        </li>
        <li class="nav-item active">
        <NavLink to="/products" class="nav-link" aria-current="page" >
            <span data-feather="home"></span>
            Products
          </NavLink>
          
        </li>
        <li class="nav-item active">
        <NavLink to="/orders" class="nav-link" aria-current="page" >
            <span data-feather="home"></span>
            Orders
          </NavLink>
          
        </li>
        <li class="nav-item active">
        <NavLink to="/categories" class="nav-link" aria-current="page" >
            <span data-feather="home"></span>
            Categories
          </NavLink>
          
        </li>
        </ul>
    </div>
    </nav>
  )
}

export default Sidebar

        