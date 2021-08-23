import React from 'react'
import Link from 'next/link'

function Fest() {
  return (
    <section className="container section-layout">
      <div className="title-bar mb-4">
        <h1 className="title mb-0">Unsere Schwingfeste</h1>
        <Link href="/feste">
          <a className="title-bar-link">
            Besuche unserem Festbereich
          </a>
        </Link>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-6 is-vertical is-parent">        
          <Link href="/feste">
            <div className="tile is-child box make-it-slow">
              <p className="title is-5">Abendschwingen Baar</p>
              <p>Das traditionsreiche Schwingfest im Herzen von Baar. Das Schwingfest bei Flutlicht ist längst ein Publikumsmagnet und 
                beim Fachpublikum und bei Freunden des Schwingsports äusserst beliebt. Wer Rang und Namen hat, sitzt jeweils in der Arena 
                und geniesst die sportlichen Begegnungen in den Sägemehlringen, wie auch das Rahmenprogramm mit Festwirtschaft und urchigen 
                Brauchtumsdarbietungen.</p>
                <br/>
              <img src="./static/images/abigschwinge1.jpg" className="image"/>
            </div>
          </Link>
            
         
        </div>
        <div className="tile is-parent">
        <Link href="/feste">
          <div className="tile is-child box make-it-slow">
            <p className="title is-5">Buebeschwingen Baar</p>
            <p>Wie das Abendschwingen gehört auch das Buebeschwingen zum Baarer Veranstaltungskalender. Früher wurde es noch auf dem Schmidhof ausgetragen, heute jedoch auf der Dorfmattwiese wie das Abendschwingen.</p>
            <br/>
            <img src="./static/images/buebeschwinge1.jpg" className="image"/>
          </div>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Fest
