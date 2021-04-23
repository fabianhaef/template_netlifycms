import Link from 'next/link'
import Layout from '../components/Layout'
import schwingers from '../../public/data/schwingers.json'

export default function Schwinger({ schwingers = [] }) {
  return (
    <Layout title="athlethen">
      <h1 className="title">Unsere Athlethen</h1>
      {schwingers.map(schwinger => (
        <div className="box">
          <h1 className="title">{schwinger.title}</h1>
          <em className="subtitle is-6 is-block">{schwinger.dateFormatted}</em>
          <div className="content section" dangerouslySetInnerHTML={{ __html: schwinger.bodyHtml }} />
          <img src={schwinger.coverImage} alt={schwinger.title} width="256" height="256"></img>
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