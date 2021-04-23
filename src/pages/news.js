
import Link from 'next/link'
import Layout from '../components/Layout'
import news from '../../public/data/news.json'

export default function News({ news = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="title">News</h1>
      <div className="grid-3-columns">
        {news.map(post => (
          <div className="box">
            <h1 className="title">{post.title}</h1>
            <em className="subtitle is-6 is-block">{post.dateFormatted}</em>
            <div className="content section" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
          </div>
        ))}
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