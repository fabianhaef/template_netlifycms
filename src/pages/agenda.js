import Layout from '../components/Layout'
import Link from 'next/link'
import schwingfeste from '../../public/static/data/schwingfeste.js'


export default function Agenda() {
  return (
    <Layout>
      <section className="section">
        <h1 className="title">Agenda</h1>
        <h2 className="subtitle">Schwingfeste</h2>
        <h3 className="subtitle is-6">Vom Schwingclub Zug organisiert</h3>

        <div className="card">
          <h3 className="card-header-title">Buebeschwinget Baar</h3>
          <div className="card-content">
            <p>Datum: 3. Juni 2021, Dorfmattwiese, Baar</p >
            <p>OK-Präsident: Merz Christian, Feldbergstrasse 2b, 6319 Allenwinden, 079 452 29 78</p>
          </div>
        </div>

        <hr />

        <div className="card">
          <h3 className="card-header-title">47. Abendschwinget Baar</h3>
          <div className="card-content">
            <p>Datum: 25. Juni 2021, Dorfmattwiese, Baar</p >
            <p>OK-Präsident: Daniel Toggenburger, Birkenmatt 15, 6343 Rotkreuz, 041 790 64 40</p>
            <Link href="https://abendschwingen-baar.ch/"><a>Abendschwinget Baar</a></Link>
          </div>
        </div>
        <hr />


        <div className="card">
          <h3 className="card-header-title">Kantonal-und Verbandsschwingfeste</h3>
          <div className="card-content">
            <p>02.05.2021	Zuger Kantonal Schwingfest	Baar</p>
            <p>09.05.2021	97. Schwyzer Kantonales Schwing- und Älplerfest	Muotathal</p>
            <p>16.05.2021	116. Ob- und Nidw. Kant. Schwingfest	Giswil</p>
            <p>30.05.2021	99. Urner Kant. Schwingfest	Erstfeld</p>
          </div>  
        </div>

        <hr />

        <div className="card">
          <h3 className="card-header-title">Bergfeste</h3>
          <div className="card-content">
            <p>13.06.2021	Stoos-Schwinget	Stoos</p>
            <p>20.06.2021	Fête alpestre Lac Noir / Bergschwinget Schwarzsee	Lac Noir / Schwarzsee</p>
            <p>11.07.2021	Rigi Schwinget	Rigi Stafel</p>
            <p>17.07.2021	69. Weissenstein-Schwinget	Weissenstein ob Solothurn</p>
            <p>25.07.2021	Brünigschwinget	Brünig Passhöhe</p>
            <p>15.08.2021	22. Schwägalp-Schwinget	Schwägalp AR</p>
          </div>
        </div>
        
        <hr />
        
        <div className="card">
          <h3 className="card-header-title">Weitere Schwingfeste</h3>
          <div className="card-content">
            <p>22.05.2021	63. Morgartenschwinget	 	Morgarten</p>
            <p>24.05.2021	Zuger Kant. Nachwuchsschwingertag	 	Morgarten</p>
            <p>20.06.2021   Felsenau, Alosen</p>
            <p>27.06.2021 19. Innerschweizer Nachwuchsschwingertag</p>
            <p>10.04.2021 Buebeschwinget Cham</p>
            <p>17.07.2021 Zugerberg Jungschwingertag</p>
            <p>18.07.2021 Zugerbergschwinget</p>            
          </div>
        </div>

        <hr />

        <h2 className="subtitle">Trainings</h2>
        <div className="card-container">
          <div className="card">
            <h3 className="card-header-title">Jungschwinger 8- bis 15 jährig</h3>
            <div className="card-content">
              <p>Mittwoch 18.00 - 19.30 Uhr</p>
              <p>Jungschwingbetreuer : Peter Merz, 078 765 99 03, Beat Suter, Mike Styger & Leo Bär</p>
              <p>Ort: Schwinghalle Schützenmatt in Zug</p>
            </div>
          </div>  
          <div className="card">
            <h3 className="card-header-title">Aktive ab 16 Jahren</h3>
            <div className="card-content">
                <p>Mittwoch 19.30 - 21.30 Uhr und Freitag 19.30 - 21.00 Uhr</p>
                <p>Technischer Leiter : Stefan Stadelmann und Bruno Müller</p>
                <p>Ort: Schwinghalle Schützenmatt in Zug</p>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  )
}