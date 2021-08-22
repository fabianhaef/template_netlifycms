import React from 'react'

function VorstandsMitglied({mitglied}) {
  console.log(mitglied)
  return (
    <div key={mitglied.title} className="box bg-primary">
    <article className="vorstand">
      <div>
          <h2 className="title is-5 mb-3">{mitglied.title}</h2>
          <h3 className="title is-6 mb-2">{mitglied.rolle}</h3>
          <div dangerouslySetInnerHTML={{ __html: mitglied.bodyHtml }} />
      </div>
      <img className="image" src={mitglied.coverImage} alt={mitglied.title} width="128"></img>
    </article>
  </div>
  )
}

export default VorstandsMitglied

