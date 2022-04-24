import Link from 'next/link'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'
const defaultPath = '../static/logo.jpg'

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src={defaultPath || defaultCoverImage} className="navbar-logo" alt="logo schwingclub"/>
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

