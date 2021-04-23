import Link from 'next/link'
import Layout from '../../components/Layout'
import bilder from '../../../public/data/bilder.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'

export default function BildPost({ bild }) {
  return (
    <Layout title={`${bild.title} | Blog`}>
      <Link href="/bild"><a className="button mb-4">◀️ All Entries</a></Link>

      <div className="cover-image" style={{ backgroundImage: `url(${bild.coverImage || defaultCoverImage})` }}>
        <div className="title-block">
          <h1 className="title">{bild.title}</h1>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      bilder: bilder.find(bild => bild.slug === context.params.slug)
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
