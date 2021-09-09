import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

export default MyApp
