import Layout from '../components/Layout'
import vorstand from '../../public/data/vorstand.json'


export default function About({ vorstand }) {
  


  return (
    <Layout>
      <section className="container section-layout">
        <h1 className="title mb-6">Über uns</h1>
        <h2 className="subtitle mb-4">Entstehungsgeschichte</h2>
        <p>
          Schwingclub Zug und Umgebung - ein Baarer Verein? <strong>Ja schon.</strong>
          <br></br>
          Die Organisation zeichnet für die Durchführung des Abendschwingens und des Bubenschwingens verantwortlich und ihre Mitgliederliste trägt viele Namen bekannter Schwingergrössen aus Baar.
          Der Schwingclub Zug und Umgebung ist im Jahr 1973 aus dem Schwingclub Zug, hervorgegangen. Die Generalversammlung hat sich damals für die Namensänderung ausgesprochen. An dieser GV legte der Baarer Dominik Weber die präsidialen Aufgaben nieder. Zum Nachfolger ernannt wurde Karl Bürgler.
          Aktuell wird der Verein von Christoph Blattmann präsidiert. Mit der Umbenennung in Schwingclub Zug und Umgebung wurden die Voraussetzungen geschaffen, um in Baar ein Trainingslokal beantragen zu können. Dazu ist zu sagen, dass bereits 1970 den Baarer Schwingern ein Trainingslokal zur Verfügung gestellt worden ist.
        </p>
      </section>
      <section className="container section-layout">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Gegründet</p>
              <p className="title">1973</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Mitglieder</p>
              <p className="title">+125</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Mitglieder</p>
              <p className="title">+25</p>
            </div>
          </div>
        </nav>

      </section>
      <section title="Vorstand" className="container">
        <h2 className="subtitle subtitle mb-4">Vorstand</h2>        
        <div className="grid-3-columns">
          {vorstand.map(mitglied => (
            <div key={mitglied.title} className="box border-box">
              <article className="vorstand">
                <div>
                  <h2 className="title is-5 mb-3">{mitglied.title}</h2>
                  <h3 className="title is-6 mb-2">{mitglied.rolle}</h3>
                  <p></p>
                </div>
                <img className="image" src={mitglied.coverImage} alt={mitglied.title} width="128"></img>
              </article>
            </div>
          ))}
        </div>
        <div className="mb-6"></div>
        <img className="image" src="./static/images/vorstand.jpg"></img>
      </section>
    </Layout >
  )
}
export async function getStaticProps() {
  return {
    props: {
      vorstand
    }
  }
}