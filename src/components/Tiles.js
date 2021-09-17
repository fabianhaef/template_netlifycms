import React from 'react'
import Link from 'next/link'


import news from '../../public/data/news.json'


export default function Tiles({ news = [] }) {
  
  const filteredNews = news.sort((a, b) => a.date - b.date)

  console.log(filteredNews)

  const firstArticle = filteredNews[0]
  const secondArticle = filteredNews[1]
  const thirdArticle = filteredNews[2]
  const fourthArticle = filteredNews[3]
  const fifthArticle = filteredNews[4]

  return (
    <section className="section section-layout">
     
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