import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="./static/logo.jpg" width="32" height="32" />
          </a>
        </Link>


        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link href="/news">
            <a className="navbar-item">
              News
            </a>
          </Link>
          <Link href="/schwinger">
            <a className="navbar-item">
              Athlethen
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">
              Über uns
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}