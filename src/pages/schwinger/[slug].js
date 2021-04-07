import Link from 'next/link'
import Layout from '../../components/Layout'
import schwinger from '../../../public/data/schwinger.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'

export default function SchwingerPost({ sw }) {
  return (
    <Layout title={`${sw.name} | Blog`}>
      <Link href="/blog"><a className="button mb-4">◀️ All Entries</a></Link>

      <div className="cover-image" style={{ backgroundImage: `url(${sw.coverImage || defaultCoverImage})` }}>
        <div>
          <h1>{sw.name}</h1>
          <em className="subtitle is-6 is-block">{sw.dateFormatted}</em>
        </div>
      </div>

      <div className="content section" dangerouslySetInnerHTML={{ __html: sw.bodyHtml }} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      post: schwinger.find(sw => sw.slug === context.params.slug)
    }
  }
}

// generates all available blog post URLs
export async function getStaticPaths() {
  return {
    paths: schwinger.map(sw => ({ params: { slug: sw.slug } })),
    fallback: false
  }
}