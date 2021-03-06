import Layout from '../components/Layout'
import VorstandsMitglied from '../components/VorstandsMitglied'
import vorstand from '../../public/data/vorstand.json'


export default function About({ vorstand }) {
  return (
    <Layout title="Über uns">
      <section className="section section-layout">
        <div className="container">
          <h1 className="title mb-6">Über uns</h1>
          <h2 className="subtitle is-4 mb-4">Entstehungsgeschichte</h2>
          <p className="content">
          Schwingclub Zug und Umgebung - ein Baarer Verein? <strong>Ja schon.</strong>
          <br></br>
          Die Organisation zeichnet für die Durchführung des Abendschwingens und des Bubenschwingens verantwortlich und ihre Mitgliederliste 
          trägt viele Namen bekannter Schwingergrössen aus Baar.<br />
          Gegründet wurde der Schwingclub Zug im Jahre 1933. Im Jahr 1973 ist der Schwingclub Zug und Umgebung aus dem Schwingclub Zug hervorgegangen. Die Generalversammlung hat sich damals für die Namensänderung ausgesprochen. An dieser GV legte der Baarer Dominik Weber die präsidialen Aufgaben nieder. Zum Nachfolger ernannt wurde Karl Bürgler.
          Aktuell wird der Verein von Pascal Matter präsidiert. <br />
          Mit der Umbenennung in Schwingclub Zug und Umgebung wurden die Voraussetzungen geschaffen, um in Baar ein Trainingslokal beantragen zu können. Dazu ist zu sagen, dass bereits 1970 den Baarer Schwingern ein Trainingslokal zur Verfügung gestellt worden ist.
          </p>
        </div>
      </section>
      <section className="section section-layout">
        <div className="container">
          <nav className="level is-mobile legende">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Gegründet</p>
                <p className="title">1933</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Trainingslokal</p>
                <p className="title">Schwinghalle Schützenmatt</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Mitglieder</p>
                <p className="title">circa 200</p>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section title="Vorstand" className="section">
        <div className="container">
          <h2 className="subtitle is-4 mb-4">Vorstand</h2>        
          <div className="vorstand-column mb-6">
            {vorstand.map(mitglied => (
              <VorstandsMitglied mitglied={mitglied}/>
            ))}
          </div>
          <img className="image" src="./static/images/vorstand.jpg" alt="Ganzer vorstand"></img>
        </div>
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