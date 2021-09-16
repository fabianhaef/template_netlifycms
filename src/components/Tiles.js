import React from 'react'
import Link from 'next/link'

import news from '../../public/data/news.json'


export default function Tiles() {
  const filteredNews = news.sort((a, b) => b.date - b.date)

  const firstArticle = filteredNews[0]
  const secondArticle = filteredNews[1]
  const thirdArticle = filteredNews[2]
  const fourthArticle = filteredNews[3]
  const fifthArticle = filteredNews[4]

  return (
    <section className="section section-layout">
      <div className="container">
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
            <Link href="/news/[slug]" as={`/news/${firstArticle.slug}`}>
              <article className="tile is-child bg-primary-10 box make-it-slow">
                <p className="title is-5">{firstArticle.title}</p>
                <p className="subtitle is-6">{firstArticle.dateFormatted}</p>
                <div className="content">
                  {firstArticle.body.substring(0, 200)}...
                </div>              
              </article>
            </Link>
            <Link href="/news/[slug]" as={`/news/${secondArticle.slug}`}>
              <article className="tile is-child bg-primary-10 box make-it-slow">
                <p className="title is-5">{secondArticle.title}</p>
                <p className="subtitle is-6">{secondArticle.dateFormatted}</p>
                <div className="content">
                  {secondArticle.body.substring(0, 200)}...
                </div>
                </article>
                </Link>
            </div>
            <div className="tile is-parent">
            <Link href="/news/[slug]" as={`/news/${thirdArticle.slug}`}>

              <article className="tile is-child bg-primary-10 box make-it-slow">
                <p className="title is-5">{thirdArticle.title}</p>
                <p className="subtitle is-6">{thirdArticle.dateFormatted}</p>
                <div className="content">
                  {thirdArticle.body.substring(0, 200)}...
                </div>
                <figure className="image is-4by3 mb-4">
                  <img src={thirdArticle.coverImage} />
                </figure>
              </article>
              </Link>
            </div>
          </div>
          <div className="tile is-parent">
            <Link href="/news/[slug]" as={`/news/${fourthArticle.slug}`}>
              <article className="tile is-child  bg-primary-10 box make-it-slow">
                <p className="title is-5">{fourthArticle.title}</p>
                <p className="subtitle is-6">{fourthArticle.dateFormatted}</p>
                <div className="content">
                  {fourthArticle.body.substring(0, 200)}...
                </div>
            </article>
              </Link>
          </div>
        </div>
        <div className="tile is-parent">
          <Link href="/news/[slug]" as={`/news/${fifthArticle.slug}`}>
              <article className="tile is-child  bg-primary-10 box make-it-slow">
                <div className="content">
                  <p className="title is-5">{fifthArticle.title}</p>
                  <p className="subtitle is-6">{fifthArticle.dateFormatted}</p>
                  <div className="content">
                    {fifthArticle.body.substring(0, 2000)}...
                  </div>          </div>
              </article>
            </Link>
        </div>
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