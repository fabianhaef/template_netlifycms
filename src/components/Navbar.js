import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar main-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="./static/logo.jpg" className="navbar-logo" />
          </a>
        </Link>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link href="/projects">
            <a className="navbar-item">
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a className="navbar-item">
              Blog
            </a>
          </Link>
          <Link href="/news">
            <a className="navbar-item">
              News
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}