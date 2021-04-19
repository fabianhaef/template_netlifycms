import Link from 'next/link'
import Layout from '../../components/Layout'
import vorstand from '../../../public/data/vorstand.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'

export default function VorstandPerson({ mitglied }) {
  return (
    <Layout title={`${mitglied.title} | Blog`}>
      <Link href="/schwinger"><a className="button mb-4">◀️ All Entries</a></Link>

      <div className="cover-image" style={{ backgroundImage: `url(${mitglied.coverImage || defaultCoverImage})` }}>
        <div className="title-block">
          <h1 className="title">{mitglied.title}</h1>
          <em className="subtitle is-6 is-block">{mitglied.dateFormatted}</em>
        </div>
      </div>

      <div className="content section" dangerouslySetInnerHTML={{ __html: mitglied.bodyHtml }} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      schwinger: vorstand.find(md => md.slug === context.params.slug)
    }
  }
}

// generates all available blog post URLs
export async function getStaticPaths() {
  return {
    paths: vorstand.map(md => ({ params: { slug: md.slug } })),
    fallback: false
  }
}