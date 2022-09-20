import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

 class NavFooter extends Component {
  render() {
    return (
      <div>
         <nav style={navStyle}>
            <Link to="/" >
                <li style={listStyles}>
                Simple Redux cart
                </li>
            </Link>
            <li style={listStyles}>
                <input placeholder="search products" />
            </li>
            <Link to="cart-page" >
                <li style={listStyles}>
                    Cart
                    <button>0</button>
                </li>
            </Link>
         </nav>
         <footer style={footerStyle}>
            <small>&copy;Copyright all right reserved</small>
         </footer>
         <Outlet />
      </div>
    )
  }
}


const footerStyle = {
    background: 'black',
    color: 'white',
    padding: '1rem 2rem',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}

const navStyle = {
   background: 'black',
   color: 'white',
   display: 'flex',
   justifyContent: 'space-between',
   padding: '1rem 2rem'
}

const listStyles = {
    listStyle: 'none'
}

export default NavFooter;
