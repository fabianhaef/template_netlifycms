import Link from 'next/link'
import Layout from '../components/Layout'
import posts from '../../public/data/schwinger.json'

export default function Blog({ posts = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="">📓 Blog</h1>
      {posts.map(post => (
        <div key={post.slug}>
          <article >
            <div >
              <div >
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  <a>
                    <h2>{post.title}</h2>
                    <em>{post.dateFormatted}</em>
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
      posts
    }
  }
}