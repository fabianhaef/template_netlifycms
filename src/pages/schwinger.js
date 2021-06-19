import Link from 'next/link'
import Layout from '../components/Layout'
import schwingers from '../../public/data/schwingers.json'

export default function Schwinger({ schwingers = [] }) {
  return (
    <Layout title="athlethen">
      <div className="container">
        <h1 className="title">Unsere Athlethen</h1>
        <p className="mb-4">Wir sind stolz, über 20 Aktivschwinger und 20 Jungschwinger in unseren Reihen zu haben.</p>
        <div className="grid-3-columns">
        {schwingers.map(schwinger => (
          <div className="card m-0">
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