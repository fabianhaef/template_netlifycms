
import Link from 'next/link'
import Layout from '../components/Layout'
import schwingers from '../../public/data/schwingers.json'

export default function Schwinger({ schwinger = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="title">📓 Blog</h1>
      {schwingers.map(schwinger => (
        <div key={schwinger.slug} className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <Link href="/blog/[slug]" as={`/schwingers/${schwinger.slug}`}>
                  <a>
                    <h2 className="title">{schwinger.title}</h2>
                    <em className="subtitle is-6 is-block">{schwinger.dateFormatted}</em>
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
      schwingers
    }
  }
}