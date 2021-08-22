import React from 'react'
import Link from 'next/link'

import Tiles from '../components/Tiles'
import Fest from '../components/Fest'

export default function Hero() {
  return (
  <div>
    <section className="hero is-fullheight section-layout">
      <img src="./static/images/Schwinger.png" className="hero-image" />
        <div className="hero-text">
          <p className="title">
            Herzlich Willkommen!
          </p>
          <p className="subtitle">
            Euer Schwingclub Zug und Umgebung
          </p>
        </div>
      </section>
      <Tiles />
      <Fest />
    </div>
  )
}