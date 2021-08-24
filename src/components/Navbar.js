import { useEffect } from 'react'
import Link from 'next/link'


export default function Navbar() {
  

  return (
    <div className="container">
      <nav className="navbar navbar-bg" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="./static/logo.jpg" width="32" height="32" />
            </a>
          </Link>

          <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" className="navbar-menu">
          <div className="navbar-end">
            <Link href="/news">
              <a className="navbar-item">
                News
              </a>
            </Link>
            <Link href="/athlethen">
              <a className="navbar-item">
                Athlethen
              </a>
            </Link>
            <Link href="/ueberuns">
              <a className="navbar-item">
                Über uns
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}