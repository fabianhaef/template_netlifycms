import Layout from '../components/Layout'
import Link from 'next/link'


export default function Agenda() {
  return (
    <Layout title="Agenda">
      <section className="section">
        <div className="container">
          <h1 className="title mb-6">Agenda</h1>
          <h2 className="subtitle is-4 mb-4" id="title-bar-no-margin">Schwingfeste</h2>

          <div className="box">
            <h3 className="subtitle is-5">50. Buebeschwinget Baar</h3>
            <div>
              <p>16. Juni 2022, Dorfmattwiese, Baar</p >
              <p>Anschwingen ab 09:30 Uhr</p>
            </div>
          </div>

          <hr />

          <div className="box">
            <h3 className="subtitle is-5">47. Abendschwinget Baar</h3>

            <div >
              <p>24. Juni 2022, Dorfmattwiese, Baar</p >
              <Link href="https://abendschwingen-baar.ch/"><a>Abendschwinget Baar</a></Link>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  )
}