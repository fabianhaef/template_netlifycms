import Layout from '../../components/Layout'
import vorstand from '../../../public/data/vorstand.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'

export default function VorstandPerson({ mitglied }) {
  return (
    <Layout title={`${mitglied.title} | Blog`}>

    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      mitglied: vorstand.find(md => md.slug === context.params.slug)
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