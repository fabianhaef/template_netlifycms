import Link from 'next/link'
import Layout from '../../components/Layout'
import bilder from '../../../public/data/bilder.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'

export default function BilderPost({ bild }) {
  return (
    <Layout title={`${bilder.title}`}>
      <div className="cover-image" style={{ backgroundImage: `url(${bilder.coverImage || defaultCoverImage})` }}>
        <div className="title-block">
          <em className="subtitle is-6 is-block">{bilder.dateFormatted}</em>
        </div>
      </div>

      <div className="content section" dangerouslySetInnerHTML={{ __html: bilder.bodyHtml }} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      schwinger: bilder.find(bild => bild.slug === context.params.slug)
    }
  }
}

// generates all available blog post URLs
export async function getStaticPaths() {
  return {
    paths: bilder.map(bild => ({ params: { slug: bild.slug } })),
    fallback: false
  }
}
