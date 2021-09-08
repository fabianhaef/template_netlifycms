import Layout from '../components/Layout'

export default function Schwinger() {
  return (
    <Layout title="athlethen">
      <section className="section">
        <div className="container">
          <h1 className="title">Unsere Athlethen</h1>
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Aktivschwinger</p>
                <p class="title">+20</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Jungschwinger</p>
                <p class="title">+25</p>
              </div>
            </div>
          </nav>
        </div>
      </section>      
    </Layout>
  )
}

