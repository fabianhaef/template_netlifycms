
import Link from 'next/link'
import Layout from '../components/Layout'
import news from '../../public/data/news.json'


export default function News({ news = [] }) {
  
  return (
    <Layout title="News">
      <div className="container">
        <h1 className="title mb-6">News</h1>
        <h2 className="subtitle is-6 mb-4">Hier finden Sie alle relevanten News zum Schwingclub Zug und Umgebung.</h2>
        <div className="container">
          {news.map(post => (
              <div className="card mb-6 border-box" key={post.title}>
                <div className="columns">
                  <div className="column">
                    <h1 className="title is-6 mr-4">{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
                  </div>
                  <div className="column">
                    <img className="image" src={post.coverImage} alt={post.title} height="256" width="256"></img>
                  </div>
                </div>
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