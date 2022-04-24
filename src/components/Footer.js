import Link from 'next/link'

import NavItem from './NavItem'

export default function Navbar() {
  return (
    <footer className="footer-bg grid-3-columns container">
      <div className="one">
        &copy; {(new Date()).getFullYear()}
        <Link href="/impressum">
          <a>
            Impressum
          </a>
        </Link>
      </div>

      <div className="two">
        <Link href="/kontakt">
          <a>Kontakt</a>
        </Link>
        <Link href="/agenda">
          <a>Agenda</a>
        </Link>
        <Link href="/bilder">
          <a>Gallerie</a>
        </Link>
        <Link href="/feste">
          <a>Feste</a>
        </Link>
      </div>

      <div className="three">
          <Link href="/">
            <a>
              <img src="../static/logo.jpg" className="navbar-logo" alt="Logo Schwingclub"/>
            </a>
          </Link>
        <Link href="https://github.com/fabianhaef">
          <a className="made-by-fh">made by fh</a>
        </Link>

      </div>

    </footer>
  )
}