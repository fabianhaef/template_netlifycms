import React from 'react'
import Link from 'next/link'

import Tiles from '../components/Tiles'
import Fest from '../components/Fest'

export default function Hero() {
  return (
  <div>
    <section className="hero section-layout container">
      <h1 className="title hero">Herzlich Willkommen beim Schwingklub Zug und Umgebung</h1>
      <div className="hero-text">
        <p className="hero-join">Lust bei uns aktiv mitzumachen?</p>
        <Link href="/kontakt">
          <button className="button button-bg">Kontaktieren Sie uns</button>
        </Link>
      </div>
      <img src="./static/images/hero2.jpg" className="image"/>
    </section>
      <Tiles />
      <Fest />
    </div>
  )
}