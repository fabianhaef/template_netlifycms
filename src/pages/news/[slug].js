import Layout from '../../components/Layout'
import news from '../../../public/data/news.json'

export default function NewsPost({ post }) {
  return (
    <Layout title={`${post.title}`} >
      <div className="container">
        <div className="news-title">
          <h2 className="title is-4 mr-4">{post.title}</h2>
          <p>{post.datum}</p>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
        <img src={post.img} />
      </div>
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

// generates all available news post URLs
export async function getStaticPaths() {
  return {
    paths: news.map(post => ({ params: { slug: post.slug } })),
    fallback: false
  }
}