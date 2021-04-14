import Link from 'next/link'
import Layout from '../../components/Layout'
import news from '../../../public/data/news.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'

export default function NewsPost({ post }) {
  return (
    <Layout title={`${post.title} | Blog`}>
      <Link href="/blog"><a className="button mb-4">◀️ All Entries</a></Link>

      <div className="cover-image" style={{ backgroundImage: `url(${post.coverImage || defaultCoverImage})` }}>
        <div className="title-block">
          <h1 className="title">{post.title}</h1>
          <em className="subtitle is-6 is-block">{post.dateFormatted}</em>
        </div>
      </div>

      <div className="content section" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      post: news.find(post => post.slug === context.params.slug)
    }
  }
}

// generates all available blog post URLs
export async function getStaticPaths() {
  return {
    paths: news.map(post => ({ params: { slug: post.slug } })),
    fallback: false
  }
}