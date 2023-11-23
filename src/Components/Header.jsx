import React from 'react'
import NewsIcon from './NewsIcon.png'
const Header = () => {
  return (
    <div>
      <header className="d-flex justify-content-center navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark" style={{position:"fixed",width:"100%"}}>
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white " style={{display:"contents"}} href="#"><img style={{height:"42px"}} src={NewsIcon}/><h1>NewsSphere</h1></a>
  <div id="navbarSearch" className="navbar-search w-100 collapse">
    <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search Category" aria-label="Search Category"/>
  </div>
</header>
    </div>
  )
}

export default Header
