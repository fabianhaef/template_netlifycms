import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="">
            <p className="title">
              Herzlich Willkommen!
            </p>
            <p className="subtitle">
              Euer Schwingclub Zug und Umgebung
            </p>
            <img src="./static/images/dortmattwiese.jpg" className="image" />
          </div>
        </div>
      </section>

      <section className="section">
        <h1 className="title is-3">Lorem ipsum</h1>
        <h2 className="subtitle is-5">Lorem psum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </section>
    </Layout>
  )
}