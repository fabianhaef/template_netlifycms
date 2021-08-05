import Link from 'next/link'
import Layout from '../components/Layout'
import schwingers from '../../public/data/schwingers.json'

export default function Schwinger({ schwingers = [] }) {
  return (
    <Layout title="athlethen">
      <div className="container">
        <h1 className="title">Unsere Athlethen</h1>
        <nav class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Aktivschwinger</p>
              <p class="title">+20</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Jungschwinger</p>
              <p class="title">+25</p>
            </div>
          </div>
        </nav>
        <div className="grid-3-columns">
        {schwingers.map(schwinger => (
          <div className="card m-0" key={schwinger.title}>
            <h1 className="title">{schwinger.title}</h1>
            <img src={schwinger.coverImage} alt={schwinger.title}></img>
          </div>
        ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      schwingers
    }
  }
}