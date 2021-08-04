import Link from 'next/link'
import news from '../../public/data/news.json'

export default function Hero() {
  const fiveNewsArticles = news.slice(0,5)
  console.log(fiveNewsArticles)

  return (
    <section className="hero is-fullheight">
      
      <img src="./static/images/Schwinger.png" className="hero-image" />
    
      
      <div className="hero-text">
          <p className="title">
            Herzlich Willkommen!
          </p>
          <p className="subtitle">
            Euer Schwingclub Zug und Umgebung
          </p>
          <div>
            <button className="button is-link mr-4 main-button">
              Agenda
            </button>
            <button className="button is-ghost">Kontaktieren Sie uns</button>
          </div>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  return {
    props: {
      news
    }
  }
}