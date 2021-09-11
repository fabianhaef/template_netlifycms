import Link from 'next/link'
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
            loader={<h4>Loading...</h4>}
          >
          {bilder.map((bild, index) => (
              <img className="image" src={bild.coverImage} alt={bild.title}></img>
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