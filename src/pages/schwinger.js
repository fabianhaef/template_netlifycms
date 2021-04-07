import Link from 'next/link'
import Layout from '../components/Layout'
import schwinger from '../../public/data/schwinger.json'

export default function Schwinger({ schwinger = [] }) {
  return (
    <Layout title="Schwinger">
      <h1 className="">📓 Blog</h1>
      {schwinger.map(sw => (
        <div key={sw.slug}>
          <article >
            <div >
              <div >
                <Link href="/schwinger/[slug]" as={`/schwinger/${sw.slug}`}>
                  <a>
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