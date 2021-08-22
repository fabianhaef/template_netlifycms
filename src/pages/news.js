
import Link from 'next/link'
import Layout from '../components/Layout'
import news from '../../public/data/news.json'


export default function News({ news = [] }) {

  return (
    <Layout title="News">
      <div className="container">
        <h1 className="title mb-6">News</h1>
        <h2 className="subtitle mb-4">Hier finden Sie alle relevanten News zum Schwingclub Zug und Umgebung.</h2>
        <div className="container">
          <div className="columns flex-wrap">
            {news.map(post => (
                <div className="column is-half border-box news-article" key={post.title}>
                      <h1 className="title mr-4">{post.title}</h1>
                      <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
                      <img className="image" src={post.coverImage} alt={post.title} ></img>
                </div>
            ))}
          </div>
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