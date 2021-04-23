import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Link from 'next/link'

export default function Layout({ title = 'Schwingclub Zug und Umgebung', children = [] }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
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