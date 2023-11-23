import React from 'react'

const Navbar = ({setcategory,category}) => {
  const searchCategory = (value)=>{
    setcategory(value);
  }
  return (
    <div>
     <header className=" text-bg-dark" style={{top:"3rem",position:"relative"}}>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-light " value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="Search category" aria-label="Search"/>
        </form>
        <button className='btn bg-warning text-dark' style={{height:"40px",width:"70px"}} onClick={searchCategory(category)}>Search</button>
        <div className="text-end " style={{margin:"15px"}}>
          <button type="button" className="btn btn-outline-light me-2" style={{height:"45px"}}>Login</button>
          <button type="button" className="btn btn-warning" style={{height:"45px"}}>Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar
