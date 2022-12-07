import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap" /></svg> */}
              <i className='bi bi-bootstrap'/>
            </Link>
            <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><Link className="text-muted" href="#">
              {/* <svg className="bi" width="24" height="24"><use xlink:href="#twitter" /></svg> */}
<i className='bi bi-twitter'/>
              </Link></li>
            <li className="ms-3"><Link className="text-muted" href="#">
              {/* <svg className="bi" width="24" height="24"><use xlink:href="#instagram" /></svg> */}
              <i className='bi bi-instagram'/>
              </Link></li>
            <li className="ms-3"><Link className="text-muted" href="#">
              {/* <svg className="bi" width="24" height="24"><use xlink:href="#facebook" /></svg> */}
              <i className='bi bi-facebook'/>
              </Link></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer