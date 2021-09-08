import Link from 'next/link'

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="./static/logo.jpg" width="32" height="32" />
            </a>
          </Link>
        </div>
        <ul className="navbar-nav">
          {props.children}
        </ul>    
      </div>
    </nav>
  )
}

