import Link from 'next/link'
import Layout from '../../components/Layout'
import schwingers from '../../../public/data/schwingers.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'

export default function SchwingerPost({ schwinger }) {
  return (
    <Layout title={`${schwinger.title} | Blog`}>
      <Link href="/blog"><a className="button mb-4">◀️ All Entries</a></Link>

      <div className="cover-image" style={{ backgroundImage: `url(${schwinger.coverImage || defaultCoverImage})` }}>
        <div className="title-block">
          <h1 className="title">{schwinger.title}</h1>
          <em className="subtitle is-6 is-block">{schwinger.dateFormatted}</em>
        </div>
      </div>

      <div className="content section" dangerouslySetInnerHTML={{ __html: schwinger.bodyHtml }} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      schwinger: schwingers.find(schwinger => schwinger.slug === context.params.slug)
    }
  }
}

// generates all available blog post URLs
export async function getStaticPaths() {
  return {
    paths: schwingers.map(schwinger => ({ params: { slug: schwinger.slug } })),
    fallback: false
  }
}
