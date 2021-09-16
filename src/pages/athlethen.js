import Layout from '../components/Layout'

export default function Schwinger() {
  return (
    <Layout title="athlethen">
      <section className="section">
        <div className="container">
          <h1 className="title">Unsere Athlethen</h1>
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Aktivschwinger</p>
                <p className="title">+20</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Jungschwinger</p>
                <p className="title">+25</p>
              </div>
            </div>
          </nav>
        </div>
      </section>      
    </Layout>
  )
}

