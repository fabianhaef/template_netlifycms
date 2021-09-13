import Layout from '../components/Layout'
import bilder from '../../public/data/bilder.json'

import InfiniteScroll from 'react-infinite-scroll-component';


export default function Bilder({ bilder = [] }) {
  return (
    <Layout title="Gallerie">
      <section className="section">
        <div className="container">
          <h1 className="title">Gallerie</h1>

          <InfiniteScroll
            dataLength={bilder.length} //This is important field to render the next data
            //next={fetchData}
            hasMore={true}
          >
          {bilder.map((bild, index) => (
              <div key={bild.title} className="mb-4">
                <img className="image" src={bild.coverImage} alt={bild.title}></img>
                <h2 className="subtitle is-5">{bild.title}</h2>
              </div>
          ))}
          </InfiniteScroll>
        </div>
      </section>

    </Layout >
  )
}

export async function getStaticProps() {
  return {
    props: {
      bilder
    }
  }
}