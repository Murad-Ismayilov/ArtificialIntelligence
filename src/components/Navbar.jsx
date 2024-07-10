import React from 'react'
import '../components/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
<div className="container">
  <Link className="navbar-brand" to="/">
      <img src="/logo.svg" alt="" />
  </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="artificial" aria-current="page" id="artificial" to="/">Artificial Intelligence</Link>
      </li>
    </ul>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/"> Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/About"> About </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/Services"> Services </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/Blog"> Blog </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/Contact"> Contact </Link>
      </li>
    </ul>
    <form className="d-flex" role="search">
      <button className="btn">Search</button>
    </form>
  </div>
</div>
</nav>
    </>
  )
}

export default Navbar