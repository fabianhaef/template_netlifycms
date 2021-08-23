import Link from 'next/link'
import Layout from '../components/Layout'
import bilder from '../../public/data/bilder.json'

export default function Bilder({ bilder = [] }) {
  return (
    <Layout title="Gallerie" className="container">

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