import React from 'react'
 
const Footer = ({instagram,facebook,twite}) => {
  return (
    <div>
      <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">© 2023 NewsSphere, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <a className="text-body-secondary" href="https://www.instagram.com/arpit_kumar_27/" target='_blank'><img style={{margin:"3px", height:"30px"}} src={instagram}></img></a>
      <a className="text-body-secondary" href="https://twitter.com/home?lang=en" target='_blank'><img style={{margin:"3px",height:"30px"}}  src={twite} ></img></a>
      <a className="text-body-secondary" href="https://www.facebook.com/profile.php?id=100025101455737" target='_blank'><img style={{margin:"3px",height:"30px"}}  src={facebook}></img></a>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Footer
