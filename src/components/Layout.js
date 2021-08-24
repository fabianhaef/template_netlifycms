import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'

export default function Layout({ title = 'Schwingclub Zug und Umgebung', children = [] }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
        <main className="main-content">
            {children}
        </main>
      < Footer />
    </div>
  )
}