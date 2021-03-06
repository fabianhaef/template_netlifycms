import Layout from '../../components/Layout'
import news from '../../../public/data/news.json'

export default function NewsPost({ post }) {

  return (
    <Layout title={`${post.title}`} >
      <section className="section">
        <div className="container">
          <div className="news-article box">
            <div className="news-content">
              <div className="news-title">
                <h2 className="subtitle is-4 mb-4 mr-4">{post.title}</h2>
                <p>{post.dateFormatted}</p>
              </div>
              <div className="content" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
            </div>
            <div className="image-wrapper">
              <img src={post.coverImage} alt={post.title} className="news-content-image" />
            </div>
          </div>
        </div>
      </section>
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