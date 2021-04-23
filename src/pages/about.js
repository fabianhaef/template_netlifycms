import Layout from '../components/Layout'
import vorstand from '../../public/data/vorstand.json'


export default function About({ vorstand = [] }) {
  return (
    <Layout>
      <section className="section">
        <h1 className="title is-1">Über uns</h1>
        <h2 className="subtitle is-2">Entstehungsgeschichte</h2>
        <p>
          Schwingclub Zug und Umgebung - ein Baarer Verein? Ja schon. Die Organisation zeichnet für die Durchführung des Abendschwingens und des Bubenschwingens verantwortlich und ihre Mitgliederliste trägt viele Namen bekannter Schwingergrössen aus Baar.
          Der Schwingclub Zug und Umgebung ist im Jahr 1973 aus dem Schwingclub Zug, hervorgegangen. Die Generalversammlung hat sich damals für die Namensänderung ausgesprochen. An dieser GV legte der Baarer Dominik Weber die präsidialen Aufgaben nieder. Zum Nachfolger ernannt wurde Karl Bürgler.
          Aktuell wird der Verein von Christoph Blattmann präsidiert. Mit der Umbenennung in Schwingclub Zug und Umgebung wurden die Voraussetzungen geschaffen, um in Baar ein Trainingslokal beantragen zu können. Dazu ist zu sagen, dass bereits 1970 den Baarer Schwingern ein Trainingslokal zur Verfügung gestellt worden ist.
        </p>
      </section>
      <section title="Vorstand" className="section">
        <h1 className="title">Vorstand</h1>
        <div className="grid-3-columns">
          {vorstand.map(mitglied => (
            <div key={mitglied.title} className="box">
              <article>
                <h2 className="title is-3">{mitglied.title}</h2>
                <h2 className="title is-4">{mitglied.rolle}</h2>
                <img className="image" src={mitglied.coverImage} alt={mitglied.title} width="128"></img>
              </article>
            </div>
          ))}
        </div>
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