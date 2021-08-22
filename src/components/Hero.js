import React from 'react'
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
          <div>
            <button className="button is-link mr-4 butn">
              Agenda
            </button>
            <button className="button is-ghost">Kontaktieren Sie uns</button>
          </div>
        </div>
      </section>
      <Tiles />
      <Fest />
    </div>
  )
}