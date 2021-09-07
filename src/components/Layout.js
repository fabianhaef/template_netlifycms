import Head from 'next/head'
import Navbar from './Navbar'
import NavItem from './NavItem'
import Footer from './Footer'
import Hero from './Hero'

export default function Layout({ title = 'Schwingclub Zug und Umgebung', children = [] }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
        <script src="./static/js/myScript.js"></script>
      </Head>
      <Navbar>
        <NavItem href={"/news"} name={"News"}/>
        <NavItem href={"/athlethen"} name={"Athlethen"}/>
        <NavItem href={"/agenda"} name={"Agenda"}/>
        <NavItem href={"/ueberuns"} name={"Über uns"}/>
      </Navbar>
        <main className="main-content">
            {children}
        </main>
      < Footer />
    </div>
  )
}