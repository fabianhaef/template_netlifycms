import Layout from '../components/Layout'
import bilder from '../../public/data/bilder.json'


export default function Galerie({ bilder = [] }) {
  return (
    <Layout>
      <section className="section">
        <h1 className="title is-1">Gallerie</h1>
        <h2 className="subtitle is-4">Schau dir unsere letzten Fotos an!</h2>

        {bilder.map(bild => (
          <div className="box">
            <img src={bild.coverImage} width="256" height="256"></img>
          </div>
        ))}
      </section>
    </Layout>
  )
}
