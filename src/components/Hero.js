import Link from 'next/link'
import React from 'react'
import news from '../../public/data/news.json'

export default function Hero() {
  const firstArticle = news[0]
  const secondArticle = news[1]
  const thirdArticle = news[2]
  const fourthArticle = news[3]
  const fifthArticle = news[4]

  return (
  <div>
    <section className="hero is-fullheight mb-6">
      <img src="./static/images/Schwinger.png" className="hero-image" />
        <div className="hero-text">
          <p className="title">
            Herzlich Willkommen!
          </p>
          <p className="subtitle">
            Euer Schwingclub Zug und Umgebung
          </p>
          <div>
            <button className="button is-link mr-4 main-button">
              Agenda
            </button>
            <button className="button is-ghost">Kontaktieren Sie uns</button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="title-bar mb-4">
          <h1 className="title mb-0">Unsere letzten News</h1>
          <Link href="/news">
            <a className="title-bar-link">
              Navigiere zu unserem Newsbereich
            </a>
          </Link>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification bg-primary-100">
                  <p class="title is-5">{firstArticle.title}</p>
                  <p class="subtitle is-6">{firstArticle.datum}</p>
                  <div class="content">
                    {firstArticle.body.substring(0, 100)}...
                  </div>
                  <Link href="/news/[slug]" as={`/news/${fifthArticle.slug}`}>
                    <button className="button button-secondary">
                      <a id="anchor-tag" className="anchor-tag">Zum Artikel</a>
                    </button>
                  </Link>
                </article>
                <article class="tile is-child notification bg-primary-50">
                  <p class="title is-5">{secondArticle.title}</p>
                  <p class="subtitle is-6">{secondArticle.datum}</p>
                  <div class="content">
                    {secondArticle.body.substring(0, 100)}...
                  </div>
                  <Link href="/news/[slug]" as={`/news/${fifthArticle.slug}`}>
                    <button className="button button-secondary">
                      <a id="anchor-tag" className="anchor-tag">Zum Artikel</a>
                    </button>
                  </Link>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification bg-primary-10">
                  <p class="title is-5">{thirdArticle.title}</p>
                  <p class="subtitle is-6">{thirdArticle.datum}</p>
                  <div class="content">
                    {thirdArticle.body.substring(0, 100)}...
                  </div>
                  <figure class="image is-4by3 mb-4">
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
            <div class="tile is-parent">
              <article class="tile is-child notification bg-primary-70">
                <p class="title is-5">{fourthArticle.title}</p>
                <p class="subtitle is-6">{fourthArticle.datum}</p>
                <div class="content">
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
          <div class="tile is-parent">
            <article class="tile is-child notification bg-primary-30">
              <div class="content">
                <p class="title is-5">{fifthArticle.title}</p>
                <p class="subtitle is-6">{fifthArticle.datum}</p>
                <div class="content">
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
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      news
    }
  }
}