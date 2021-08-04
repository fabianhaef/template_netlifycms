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
                  <p class="title is-4">{firstArticle.title}</p>
                  <p class="subtitle is-5">Top tile</p>
                </article>
                <article class="tile is-child notification bg-primary-50">
                  <p class="title is-4">{firstArticle.title}</p>
                  <p class="subtitle is-5">Bottom tile</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification bg-primary-10">
                  <p class="title is-4">Middle tile</p>
                  <p class="subtitle is-5">With an image</p>
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification bg-primary-70">
                <p class="title">Wide tile</p>
                <p class="subtitle">Aligned with the right tile</p>
                <div class="content">
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification bg-primary-30">
              <div class="content">
                <p class="title">Tall tile</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                </div>
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