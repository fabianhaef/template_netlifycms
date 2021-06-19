import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero is-fullheight">
      <div>
        <img src="./static/images/Schwinger.png" className="hero-image" />
      </div> 
      
      <div className="hero-text">
          <p className="title">
            Herzlich Willkommen!
          </p>
          <p className="subtitle">
            Euer Schwingclub Zug und Umgebung
          </p>
          <div>
            <button className="button is-link mr-4">
              Agenda
            </button>
            <button className="button is-ghost">Kontaktieren Sie uns</button>
          </div>
      </div>
    </section>
  )
}