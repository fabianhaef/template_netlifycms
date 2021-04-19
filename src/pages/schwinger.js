
import Link from 'next/link'
import Layout from '../components/Layout'
import schwingers from '../../public/data/schwingers.json'

export default function Schwinger({ schwingers = [] }) {
  return (
    <Layout title="Schwinger">
      <h1 className="title">📓 Blog</h1>
      {schwingers.map(schwinger => (
        <div key={schwinger.slug} className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h2 className="title">{schwinger.title}</h2>
                <em className="subtitle is-6 is-block">{schwinger.dateFormatted}</em>
              </div>
            </div>
          </article>
        </div>
      ))}
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