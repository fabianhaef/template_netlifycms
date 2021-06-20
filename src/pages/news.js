
import Link from 'next/link'
import Layout from '../components/Layout'
import news from '../../public/data/news.json'

export default function News({ news = [] }) {
  return (
    <Layout title="News">
      <div className="container">
        <h1 className="title">News</h1>
        <h2 className="subtitle is-6">Hier finden Sie alle relevanten News zum Schwingclub Zug und Umgebung</h2>
        <div className="container">
          {news.map(post => (
              <div className="card mb-6">
                <h1 className="title is-6">{post.title}</h1>
                <div className="content section" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
              </div>
          ))}
        </div>
      </div>
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