import Link from 'next/link'
import Layout from '../components/Layout'
import bilder from '../../public/data/bilder.json'

export default function Bilder({ bilder = [] }) {
  return (
    <Layout title="Gallerie">
      <section className="section">
        <div className="container">
          <h1 className="title">Gallerie</h1>
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