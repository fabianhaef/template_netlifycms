
import Link from 'next/link'
import Layout from '../components/Layout'
import news from '../../public/data/news.json'

export default function News({ news = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="title">News</h1>
      {news.map(post => (
        <div key={post.slug} className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                  <a>
                    <h2 className="title">{post.title}</h2>
                    <em className="subtitle is-6 is-block">{post.dateFormatted}</em>
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
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