
import Link from 'next/link'
import Layout from '../components/Layout'
import news from '../../public/data/news.json'

const defaultCoverImage = '/img/34961490322_bb9611120a_k.jpg'


export default function News({ news = [] }) {

  return (
    <Layout title="News">
      <section className="section">
        <div className="container">
          <h1 className="title mb-6">News</h1>
          <h2 className="subtitle is-4 mb-4">Hier finden Sie alle relevanten News zum Schwingclub Zug und Umgebung.</h2>
          <div className="news-layout">
            {news.map(post => (
                <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                  <div className="news-article make-it-slow bg-primary-10 box" key={post.title}>
                    <div className="news-title">
                        <h2 className="title is-4 mr-4">{post.title}</h2>
                        <p>{post.datum}</p>
                      </div>
                    <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
                    <img className="image news-image" src={post.coverImage || defaultCoverImage} alt={post.title}></img>
                  </div>
                </Link>


            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      news
    }
  }
}