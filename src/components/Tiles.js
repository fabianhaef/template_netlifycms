import React from 'react'
import Link from 'next/link'

import news from '../../public/data/news.json'


export default function Tiles() {
  const firstArticle = news[0]
  const secondArticle = news[1]
  const thirdArticle = news[2]
  const fourthArticle = news[3]
  const fifthArticle = news[4]

  return (
    <section className="container section-layout">
      <div className="title-bar mb-4">
        <h1 className="title mb-0">Unsere letzten News</h1>
        <Link href="/news">
          <a className="title-bar-link">
            Besuche unserem Newsbereich
          </a>
        </Link>
      </div>

    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification bg-primary-100 box">
              <p className="title is-5">{firstArticle.title}</p>
              <p className="subtitle is-6">{firstArticle.datum}</p>
              <div className="content">
                {firstArticle.body.substring(0, 100)}...
              </div>
              <Link href="/news/[slug]" as={`/news/${fifthArticle.slug}`}>
                <button className="button button-secondary">
                  <a id="anchor-tag" className="anchor-tag">Zum Artikel</a>
                </button>
              </Link>
            </article>
            <article className="tile is-child notification bg-primary-50 box">
              <p className="title is-5">{secondArticle.title}</p>
              <p className="subtitle is-6">{secondArticle.datum}</p>
              <div className="content">
                {secondArticle.body.substring(0, 100)}...
              </div>
              <Link href="/news/[slug]" as={`/news/${fifthArticle.slug}`}>
                <button className="button button-secondary">
                  <a id="anchor-tag" className="anchor-tag">Zum Artikel</a>
                </button>
              </Link>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification bg-primary-10 box">
              <p className="title is-5">{thirdArticle.title}</p>
              <p className="subtitle is-6">{thirdArticle.datum}</p>
              <div className="content">
                {thirdArticle.body.substring(0, 100)}...
              </div>
              <figure className="image is-4by3 mb-4">
                <img src={thirdArticle.coverImage} />
              </figure>
              <Link href="/news/[slug]" as={`/news/${fifthArticle.slug}`}>
                <button className="button button-secondary">
                  <a id="anchor-tag" className="anchor-tag">Zum Artikel</a>
                </button>
              </Link>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article class="tile is-child notification bg-primary-70 box">
            <p className="title is-5">{fourthArticle.title}</p>
            <p className="subtitle is-6">{fourthArticle.datum}</p>
            <div className="content">
              {fourthArticle.body.substring(0, 100)}...
            </div>
            <Link href="/news/[slug]" as={`/news/${fifthArticle.slug}`}>
                <button className="button button-secondary">
                  <a id="anchor-tag" className="anchor-tag">Zum Artikel</a>
                </button>
              </Link>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification bg-primary-30 box">
          <div className="content">
            <p className="title is-5">{fifthArticle.title}</p>
            <p className="subtitle is-6">{fifthArticle.datum}</p>
            <div className="content">
              {fifthArticle.body.substring(0, 100)}...
            </div>
              <Link href="/news/[slug]" as={`/news/${fifthArticle.slug}`}>
                <button className="button button-secondary">
                  <a id="anchor-tag" className="anchor-tag">Zum Artikel</a>
                </button>
              </Link>
          </div>
        </article>
      </div>
    </div>
  </section>
  )
}


export async function getStaticProps() {
  return {
    props: {
      news
    }
  }
}