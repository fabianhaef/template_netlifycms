import Link from 'next/link'
import Layout from '../components/Layout'
import bilder from '../../public/data/bilder.json'

export default function Gallery({ bilder = [] }) {
  return (
    <Layout title="athlethen">
      <h1 className="title">Unsere Athlethen</h1>
      {bilder.map(bild => (
        <div className="box">
          <h1 className="title">{bild.title}</h1>
          <em className="subtitle is-6 is-block">{bild.dateFormatted}</em>
          <div className="content section" dangerouslySetInnerHTML={{ __html: bild.bodyHtml }} />
          <img src={bild.coverImage} alt={bild.title} width="256" height="256"></img>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      bilder
    }
  }
}