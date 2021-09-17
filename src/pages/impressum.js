import Layout from '../components/Layout'

export default function Impressum() {
  return (
    <Layout title="Impressum">
      <section className="section">
        <div className="container">
          <div className="block">
            <h1 className="title mb-6">Impressum</h1>
            <h2 className="subtitle is-4 mb-4">Kontakt-Adresse</h2>

            <p className="content mb-5">Schwingclub Zug und Umgebung<br />Friedenstrasse 17<br />6340 Baar<br />Schweiz <br/>E-Mail: <a href="mailto:praesi.sczug@gmail.com" target="_blank" rel="noopener">praesi.sczug@gmail.com</a></p>

            <h2 className="subtitle is-4 mb-4">Vertretungsberechtigte Person(en)</h2>
            <p className="content mb-5">Pascal Matter, Präsident</p>

            <h2 className="subtitle is-4 mb-4">Haftungsausschluss</h2>
            <p className="content mb-2">Der Autor &uuml;bernimmt keinerlei Gew&auml;hr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualit&auml;t, Zuverl&auml;ssigkeit und Vollst&auml;ndigkeit der Informationen.</p>
            <p className="content mb-2">Haftungsanspr&uuml;che gegen den Autor wegen Sch&auml;den materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der ver&ouml;ffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische St&ouml;rungen entstanden sind, werden ausgeschlossen.</p>
            <p className="content mb-5">Alle Angebote sind unverbindlich. Der Autor beh&auml;lt es sich ausdr&uuml;cklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ank&uuml;ndigung zu ver&auml;ndern, zu erg&auml;nzen, zu l&ouml;schen oder die Ver&ouml;ffentlichung zeitweise oder endg&uuml;ltig einzustellen.</p>
            
            <h2 className="subtitle is-4 mb-4">Haftungsausschluss für Links</h2>
            <p className="content mb-5">Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung f&uuml;r solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.</p>

            <h2 className="subtitle is-4 mb-4">Urheberrechte</h2>
            <p className="content mb-5">Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, geh&ouml;ren ausschliesslich <strong>der juristischen Person Schwingclub Zug und Umgebung</strong> oder den speziell genannten Rechteinhabern. F&uuml;r die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtstr&auml;gers im Voraus einzuholen.</p>
            <p className="content mb-5">Das auf der Startseite verwendete Bild "Aus 15 Fotos wird eines" gehört urheberrechtlich an Urs Gehrig, <a href="https://ursgehrig.com/">https://ursgehrig.com/</a>, und ist unter der Creative Commons Lizenz 4.0 International (CC BY-NC-SA 4.0) lizenziert.</p>
            Quelle: <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a>
          </div>
        </div>
       </section >
    </Layout >
  )
}