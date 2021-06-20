import Link from 'next/link'
import Layout from '../components/Layout'
import bilder from '../../public/data/bilder.json'

export default function Bilder({ bilder = [] }) {
  return (
    <Layout title="Gallerie">
      <h1 className="title">Gallerie</h1>
      {bilder.map(bild => (
        < div className="box" key={bild.title}>
          <img src={bild.coverImage} alt={bild.title} width="256" height="256"></img>
        </div>
      ))
      }
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