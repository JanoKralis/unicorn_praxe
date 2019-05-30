import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../crownlogo.svg'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light px-sm-5">
        <Link to="/">
          <img src={logo} id="crown" alt="store" className="navbar-brand"/>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5" id="pr">
             <Link to="/" className="nav-link">
              PRODUCTS
             </Link>
          </li>
        </ul>

        <Link className="ml-auto" to="/cart">
          <i className="fas fa-shopping-cart"/>
        </Link>
      </nav>

    )
  }
}


const NavbarWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
`