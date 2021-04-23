import Link from 'next/link'
import Layout from '../../components/Layout'
import bilder from '../../../public/data/bilder.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'

export default function VorstandPerson({ bild }) {
  return (
    <Layout title={`${bild.title} | Blog`}>
      <div className="cover-image" style={{ backgroundImage: `url(${bild.coverImage || defaultCoverImage})` }}>
        <div className="title-block">
          <h1 className="title">{bild.title}</h1>
          <em className="subtitle is-6 is-block">{bild.dateFormatted}</em>
        </div>
      </div>
      <div className="content section" dangerouslySetInnerHTML={{ __html: bild.bodyHtml }} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      mitglied: bilder.find(bild => bild.slug === context.params.slug)
    }
  }
}
// generates all available news post URLs
export async function getStaticPaths() {
  return {
    paths: bilder.map(bild => ({ params: { slug: bild.slug } })),
    fallback: false
  }
}

