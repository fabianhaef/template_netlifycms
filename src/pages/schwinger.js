import Link from 'next/link'
import Layout from '../components/Layout'
import schwinger from '../../public/data/schwinger.json'

export default function Blog({ schwinger = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="">📓 Blog</h1>
      {schwinger.map(sw => (
        <div key={sw.slug}>
          <article >
            <div >
              <div >
                <Link href="/blog/[slug]" as={`/blog/${pswost.slug}`}>
                  <a>
                    <h2>{sw.title}</h2>
                    <em>{sw.dateFormatted}</em>
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
      schwinger
    }
  }
}