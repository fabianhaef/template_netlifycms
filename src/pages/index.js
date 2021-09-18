import Link from 'next/link'

import Layout from '../components/Layout'
import Tiles from '../components/Tiles'
import Fest from '../components/Fest'
import PopOver from '../components/PopOver'


export default function Home() {
  return (
    <Layout title="Home">
      <section className="hero section-layout hero-mobile">
        < PopOver />   
        <div className="container">
          <h1 className="title hero-title">Herzlich Willkommen beim Schwingclub Zug und Umgebung</h1>
          <div className="hero-text">
            <h2 className="subtitle is-4">Lust bei uns aktiv mitzumachen?</h2>
            <Link href="/kontakt">
              <button className="button button-bg">Kontaktiere uns</button>
            </Link>
          </div>   
          
          <img src="./static/images/hero2.jpg" className="image"/>
        </div>
        
      </section>
      < Tiles />
      < Fest />
    </Layout>
  )
}