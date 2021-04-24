import Link from 'next/link'

export default function Navbar() {
  return (
    <footer className="footer grid-3-columns">
      <div className="one">
        &copy; {(new Date()).getFullYear()}
        <Link href="/impressum">
          <a>
            Impressum
          </a>
        </Link>
      </div>

      <div className="two">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
        <Link href="/kontakt">
          <a>Kontakt</a>
        </Link>
        <Link href="/agenda">
          <a>Agenda</a>
        </Link>
        <Link href="/bilder">
          <a>Gallerie</a>
        </Link>
      </div>

      <div className="three">
        <a>
          <img src="./static/logo.jpg" width="128" height="128" />
        </a>

        <Link href="https://github.com/fabianhaef">
          <a>made with &#x2764; by fh</a>
        </Link>

      </div>

    </footer>
  )
}