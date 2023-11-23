import React from 'react'
import NewsIcon from "./NewsIcon.png"
const Sidebar = () => {
  return (
    <>
    
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary" style={{backgroundColor:"transparent"}}>
      {/* <div className="offcanvas-md offcanvas-end bg-body-tertiary" id="sidebarMenu" aria-labelledby="sidebarMenuLabel" style={{width:"222px"}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel" style={{margintop:"20vh"}}>Company name</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                Dashboard
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Orders
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Products
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Customers
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Reports
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Integrations
              </button>
            </li>
          </ul>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Current month
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Last quarter
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Social engagement
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Year-end sale
              </button>
            </li>
          </ul>

          <hr className="my-3"/>

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Settings
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex align-items-center gap-2" href="#">
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div> */}
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "210px",height:"100%"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={NewsIcon} alt="NewsIcon" width="32" height="32" class="rounded-circle me-2"/>
        <strong>NewsSphere</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" >
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </div>
    </>
  )
}

export default Sidebar
