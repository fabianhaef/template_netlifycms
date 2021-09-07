import React from 'react'
import Link from 'next/link'

import Tiles from '../components/Tiles'
import Fest from '../components/Fest'
import ButtonPrimary from '../components/ButtonPrimary'

export default function Hero() {
  return (
  <div>
    <section className="hero section-layout container hero-mobile">
      <h1 className="title hero-title">Herzlich Willkommen beim Schwingclub Zug und Umgebung</h1>
      <div className="hero-text">
        <Link href="/kontakt">
          <ButtonPrimary text={"Kontaktieren Sie uns"}/>
        </Link>
      </div>
      <img src="./static/images/hero2.jpg" className="image is-hidden-mobile"/>
    </section>
    <Tiles />
    <Fest />
  </div>
  )
}