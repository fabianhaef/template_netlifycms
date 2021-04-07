import Layout from '../components/Layout'

export default function Projects({ repos = [] }) {
  return (
    <Layout title="Projects">
      <h1>🛠 Projects</h1>
      <section>
        {repos.map(repo => (
          <div key={repo.id}>
            <article>
              <div >
                <div >
                  <p>
                    <strong>{repo.name}</strong> <small>{repo.language}</small>
                    <br />
                    {repo.description || <em>No Description</em>}
                  </p>
                  <p>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on Github</a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </section>
    </Layout>
  )
}

// runs at build time only
export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/users/chadwithuhc/repos`)
  const result = await response.json()

  result.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

  return {
    props: {
      // will be passed to the page component as props
      repos: result.filter(repo => !repo.fork).slice(0, 10)
    },
  }
}