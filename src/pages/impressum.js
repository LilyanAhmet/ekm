import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Nav, Tab, Col, Row, Container } from "react-bootstrap"
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact"
export default class Impressum extends Component {
  state = {
    activeItem: "1",
  }
  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      })
    }
  }
  render() {
    const graphData = this.props.data
    return (
      <Layout contactData={graphData.contactInfo}>
        <SEO title="berater" />
        <div className="ekm impressum">
          <MDBContainer size="lg">
            <MDBRow>
              <MDBCol>
                <h1 className="borderimg">Rechtliche Angaben</h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Container className="tab-section">
            <Tab.Container defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{ minWidth: "300px" }}>
                        Impressum
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{ minWidth: "300px" }}>
                        Datenschutzerklärung
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="box">
                      <Row>
                        <Col sm={12}>
                          <div className="imp">
                            <p>
                              Informationspflicht laut § 5 TMG.
                              <br /><br />
                              <p>EKM - Existenzgründungs- und Karrieremanagement GmbH</p>
                              
                              <p>Geschäftsführer: Dennis Klose</p>
                             
                              <p>Geschäftssitz:<br />
                              EKM GmbH
                              <br />
                              Dragonenstr. 37
                              <br />
                              30163 Hannover,
                              <br />
                              Deutschland
                              </p>
                              <p>Prokurist: Lennart Giesler</p>

                              <p>
                              <b>Ust-Id-Nr.:</b> DE345093433
                              <br />
                              <b>Tel.</b>: 0152 575 322 73
                              <br />
                              <b>E-Mail:</b> info@ekm-erfolg.de
                              <br />
                              <b>Berufsbezeichnung:</b> Unternehmensberater
                              <br />
                              Quelle: Erstellt mit dem Impressum Generator von
                              AdSimple in Kooperation mit justmed.de
                              </p>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="box">
                      <Row>
                        <Col sm={12}>
                          <div className="imp">
                            <h4>EU-Streitschlichtung</h4>
                            <p>
                              Gemäß Verordnung über Online-Streitbeilegung in
                              Verbraucherangelegenheiten (ODR-Verordnung)
                              möchten wir Sie über die
                              Online-Streitbeilegungsplattform (OS-Plattform)
                              informieren. Verbraucher haben die Möglichkeit,
                              Beschwerden an die Online
                              Streitbeilegungsplattform der Europäischen
                              Kommission unter
                              http://ec.europa.eu/odr?tid=321196563 zu richten.
                              Die dafür notwendigen Kontaktdaten finden Sie
                              oberhalb in unserem Impressum. Wir möchten Sie
                              jedoch darauf hinweisen, dass wir nicht bereit
                              oder verpflichtet sind, an
                              Streitbeilegungsverfahren vor einer
                              Verbraucherschlichtungsstelle teilzunehmen.
                              Haftung für Inhalte dieser Website Wir entwickeln
                              die Inhalte dieser Webseite ständig weiter und
                              bemühen uns korrekte und aktuelle Informationen
                              bereitzustellen. Laut Telemediengesetz (TMG) §7
                              (1) sind wir als Diensteanbieter für eigene
                              Informationen, die wir zur Nutzung bereitstellen,
                              nach den allgemeinen Gesetzen verantwortlich.
                              Leider können wir keine Haftung für die
                              Korrektheit aller Inhalte auf dieser Webseite
                              übernehmen, speziell für jene die seitens Dritter
                              bereitgestellt wurden. Als Diensteanbieter im
                              Sinne der §§ 8 bis 10 sind wir nicht verpflichtet,
                              die von ihnen übermittelten oder gespeicherten
                              Informationen zu überwachen oder nach Umständen zu
                              forschen, die auf eine rechtswidrige Tätigkeit
                              hinweisen. Unsere Verpflichtungen zur Entfernung
                              von Informationen oder zur Sperrung der Nutzung
                              von Informationen nach den allgemeinen Gesetzen
                              aufgrund von gerichtlichen oder behördlichen
                              Anordnungen bleiben auch im Falle unserer
                              Nichtverantwortlichkeit nach den §§ 8 bis 10
                              unberührt. Sollten Ihnen problematische oder
                              rechtswidrige Inhalte auffallen, bitte wir Sie uns
                              umgehend zu kontaktieren, damit wir die
                              rechtswidrigen Inhalte entfernen können. Sie
                              finden die Kontaktdaten im Impressum.
                            </p>
                            <h4>Haftung für Links auf dieser Website</h4>
                            <p>
                              Unsere Webseite enthält Links zu anderen Webseiten
                              für deren Inhalt wir nicht verantwortlich sind.
                              Haftung für verlinkte Websites besteht für uns
                              nicht, da wir keine Kenntnis rechtswidriger
                              Tätigkeiten hatten und haben, uns solche
                              Rechtswidrigkeiten auch bisher nicht aufgefallen
                              sind und wir Links sofort entfernen würden, wenn
                              uns Rechtswidrigkeiten bekannt werden. Wenn Ihnen
                              rechtswidrige Links auf unserer Website auffallen,
                              bitte wir Sie uns zu kontaktieren. Sie finden die
                              Kontaktdaten im Impressum. Urheberrechtshinweis
                              Alle Inhalte dieser Webseite (Bilder, Fotos,
                              Texte, Videos) unterliegen dem Urheberrecht der
                              Bundesrepublik Deutschland. Bitte fragen Sie uns
                              bevor Sie die Inhalte dieser Website verbreiten,
                              vervielfältigen oder verwerten wie zum Beispiel
                              auf anderen Websites erneut veröffentlichen. Falls
                              notwendig, werden wir die unerlaubte Nutzung von
                              Teilen der Inhalte unserer Seite rechtlich
                              verfolgen. Sollten Sie auf dieser Webseite Inhalte
                              finden, die das Urheberrecht verletzen, bitten wir
                              Sie uns zu kontaktieren. Bildernachweis Die
                              Bilder, Fotos und Grafiken auf dieser Webseite
                              sind urheberrechtlich geschützt. Die Bilderrechte
                              liegen bei den folgenden Fotografen und
                              Unternehmen: • Fotograf Mustermann
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="box">
                      <Row>
                        <Col sm={12}>
                          <div className="imp">
                            <h4>EU-Streitschlichtung</h4>
                            <p>
                              Datenschutz Wir haben diese Datenschutzerklärung
                              (Fassung 21.07.2020-321196563) verfasst, um Ihnen
                              gemäß der Vorgaben der Datenschutz-Grundverordnung
                              (EU) 2016/679 zu erklären, welche Informationen
                              wir sammeln, wie wir Daten verwenden und welche
                              Entscheidungsmöglichkeiten Sie als Besucher dieser
                              Webseite haben. Leider liegt es in der Natur der
                              Sache, dass diese Erklärungen sehr technisch
                              klingen, wir haben uns bei der Erstellung jedoch
                              bemüht die wichtigsten Dinge so einfach und klar
                              wie möglich zu beschreiben. Automatische
                              Datenspeicherung Wenn Sie heutzutage Webseiten
                              besuchen, werden gewisse Informationen automatisch
                              erstellt und gespeichert, so auch auf dieser
                              Webseite. Wenn Sie unsere Webseite so wie jetzt
                              gerade besuchen, speichert unser Webserver
                              (Computer auf dem diese Webseite gespeichert ist)
                              automatisch Daten wie • die Adresse (URL) der
                              aufgerufenen Webseite • Browser und Browserversion
                              • das verwendete Betriebssystem • die Adresse
                              (URL) der zuvor besuchten Seite (Referrer URL) •
                              den Hostname und die IP-Adresse des Geräts von
                              welchem aus zugegriffen wird • Datum und Uhrzeit
                              in Dateien (Webserver-Logfiles). In der Regel
                              werden Webserver-Logfiles zwei Wochen gespeichert
                              und danach automatisch gelöscht. Wir geben diese
                              Daten nicht weiter, können jedoch nicht
                              ausschließen, dass diese Daten beim Vorliegen von
                              rechtswidrigem Verhalten eingesehen werden.
                              Speicherung persönlicher Daten Persönliche Daten,
                              die Sie uns auf dieser Website elektronisch
                              übermitteln, wie zum Beispiel Name,
                              E-Mail-Adresse, Adresse oder andere persönlichen
                              Angaben im Rahmen der Übermittlung eines Formulars
                              oder Kommentaren im Blog, werden von uns gemeinsam
                              mit dem Zeitpunkt und der IP-Adresse nur zum
                              jeweils angegebenen Zweck verwendet, sicher
                              verwahrt und nicht an Dritte weitergegeben. Wir
                              nutzen Ihre persönlichen Daten somit nur für die
                              Kommunikation mit jenen Besuchern, die Kontakt
                              ausdrücklich wünschen und für die Abwicklung der
                              auf dieser Webseite angebotenen Dienstleistungen
                              und Produkte. Wir geben Ihre persönlichen Daten
                              ohne Zustimmung nicht weiter, können jedoch nicht
                              ausschließen, dass diese Daten beim Vorliegen von
                              rechtswidrigem Verhalten eingesehen werden. Wenn
                              Sie uns persönliche Daten per E-Mail schicken –
                              somit abseits dieser Webseite – können wir keine
                              sichere Übertragung und den Schutz Ihrer Daten
                              garantieren. Wir empfehlen Ihnen, vertrauliche
                              Daten niemals unverschlüsselt per E-Mail zu
                              übermitteln. Die Rechtsgrundlage besteht nach
                              Artikel 6 Absatz 1 a DSGVO (Rechtmäßigkeit der
                              Verarbeitung) darin, dass Sie uns die Einwilligung
                              zur Verarbeitung der von Ihnen eingegebenen Daten
                              geben. Sie können diesen Einwilligung jederzeit
                              widerrufen – eine formlose E-Mail reicht aus, Sie
                              finden unsere Kontaktdaten im Impressum. Rechte
                              laut Datenschutzgrundverordnung Ihnen stehen laut
                              den Bestimmungen der DSGVO grundsätzlich die
                              folgende Rechte zu: • Recht auf Berichtigung
                              (Artikel 16 DSGVO) • Recht auf Löschung („Recht
                              auf Vergessenwerden“) (Artikel 17 DSGVO) • Recht
                              auf Einschränkung der Verarbeitung (Artikel 18
                              DSGVO) • Recht auf Benachrichtigung –
                              Mitteilungspflicht im Zusammenhang mit der
                              Berichtigung oder Löschung personenbezogener Daten
                              oder der Einschränkung der Verarbeitung (Artikel
                              19 DSGVO) • Recht auf Datenübertragbarkeit
                              (Artikel 20 DSGVO) • Widerspruchsrecht (Artikel 21
                              DSGVO) • Recht, nicht einer ausschließlich auf
                              einer automatisierten Verarbeitung —
                              einschließlich Profiling — beruhenden Entscheidung
                              unterworfen zu werden (Artikel 22 DSGVO) Wenn Sie
                              glauben, dass die Verarbeitung Ihrer Daten gegen
                              das Datenschutzrecht verstößt oder Ihre
                              datenschutzrechtlichen Ansprüche sonst in einer
                              Weise verletzt worden sind, können Sie sich an die
                              Bundesbeauftragte für den Datenschutz und die
                              Informationsfreiheit (BfDI) wenden. Auswertung des
                              Besucherverhaltens In der folgenden
                              Datenschutzerklärung informieren wir Sie darüber,
                              ob und wie wir Daten Ihres Besuchs dieser Website
                              auswerten. Die Auswertung der gesammelten Daten
                              erfolgt in der Regel anonym und wir können von
                              Ihrem Verhalten auf dieser Website nicht auf Ihre
                              Person schließen. Mehr über Möglichkeiten dieser
                              Auswertung der Besuchsdaten zu widersprechen
                              erfahren Sie in der folgenden
                              Datenschutzerklärung. TLS-Verschlüsselung mit
                              https Wir verwenden https um Daten abhörsicher im
                              Internet zu übertragen (Datenschutz durch
                              Technikgestaltung Artikel 25 Absatz 1 DSGVO).
                              Durch den Einsatz von TLS (Transport Layer
                              Security), einem Verschlüsselungsprotokoll zur
                              sicheren Datenübertragung im Internet können wir
                              den Schutz vertraulicher Daten sicherstellen. Sie
                              erkennen die Benutzung dieser Absicherung der
                              Datenübertragung am kleinen Schloßsymbol links
                              oben im Browser und der Verwendung des Schemas
                              https (anstatt http) als Teil unserer
                              Internetadresse. Google Maps Datenschutzerklärung
                              Wir benützen auf unserer Website Google Maps der
                              Firma Google Inc. Für den europäischen Raum ist
                              das Unternehmen Google Ireland Limited (Gordon
                              House, Barrow Street Dublin 4, Irland) für alle
                              Google-Dienste verantwortlich. Mit Google Maps
                              können wir Ihnen Standorte besser zeigen und damit
                              unser Service an Ihre Bedürfnisse anpassen. Durch
                              die Verwendung von Google Maps werden Daten an
                              Google übertragen und auf den Google-Servern
                              gespeichert. Hier wollen wir nun genauer darauf
                              eingehen, was Google Maps ist, warum wir diesen
                              Google-Dienst in Anspruch nehmen, welche Daten
                              gespeichert werden und wie Sie dies unterbinden
                              können. Was ist Google Maps? Google Maps ist ein
                              Internet-Kartendienst der Firma Google. Mit Google
                              Maps können Sie online über einen PC, ein Tablet
                              oder eine App genaue Standorte von Städten,
                              Sehenswürdigkeiten, Unterkünften oder Unternehmen
                              suchen. Wenn Unternehmen auf Google My Business
                              vertreten sind, werden neben dem Standort noch
                              weitere Informationen über die Firma angezeigt. Um
                              die Anfahrtsmöglichkeit anzuzeigen, können
                              Kartenausschnitte eines Standorts mittels
                              HTML-Code in eine Website eingebunden werden.
                              Google Maps zeigt die Erdoberfläche als
                              Straßenkarte oder als Luft- bzw. Satellitenbild.
                              Dank der Street View Bilder und den hochwertigen
                              Satellitenbildern sind sehr genaue Darstellungen
                              möglich. Warum verwenden wir Google Maps auf
                              unserer Webseite? All unsere Bemühungen auf dieser
                              Seite verfolgen das Ziel, Ihnen eine nützliche und
                              sinnvolle Zeit auf unserer Webseite zu bieten.
                              Durch die Einbindung von Google Maps können wir
                              Ihnen die wichtigsten Informationen zu diversen
                              Standorten liefern. Sie sehen auf einen Blick wo
                              wir unseren Firmensitz haben. Die Wegbeschreibung
                              zeigt Ihnen immer den besten bzw. schnellsten Weg
                              zu uns. Sie können den Anfahrtsweg für Routen mit
                              dem Auto, mit öffentlichen Verkehrsmitteln, zu Fuß
                              oder mit dem Fahrrad abrufen. Für uns ist die
                              Bereitstellung von Google Maps Teil unseres
                              Kundenservice. Welche Daten werden von Google Maps
                              gespeichert? Damit Google Maps ihren Dienst
                              vollständig anbieten kann, muss das Unternehmen
                              Daten von Ihnen aufnehmen und speichern. Dazu
                              zählen unter anderem die eingegebenen
                              Suchbegriffe, Ihre IP-Adresse und auch die
                              Breiten- bzw. Längenkoordinaten. Benutzen Sie die
                              Routenplaner-Funktion wird auch die eingegebene
                              Startadresse gespeichert. Diese Datenspeicherung
                              passiert allerdings auf den Webseiten von Google
                              Maps. Wir können Sie darüber nur informieren, aber
                              keinen Einfluss nehmen. Da wir Google Maps in
                              unsere Webseite eingebunden haben, setzt Google
                              mindestens ein Cookie (Name: NID) in Ihrem
                              Browser. Dieses Cookie speichert Daten über Ihr
                              Userverhalten. Google nutzt diese Daten in erster
                              Linie, um eigene Dienste zu optimieren und
                              individuelle, personalisierte Werbung für Sie
                              bereitzustellen. Folgendes Cookie wird aufgrund
                              der Einbindung von Google Maps in Ihrem Browser
                              gesetzt: Name: NID Wert:
                              188=h26c1Ktha7fCQTx8rXgLyATyITJ321196563-5
                              Verwendungszweck: NID wird von Google verwendet,
                              um Werbeanzeigen an Ihre Google-Suche anzupassen.
                              Mit Hilfe des Cookies „erinnert“ sich Google an
                              Ihre am häufigsten eingegebenen Suchanfragen oder
                              Ihre frühere Interaktion mit Anzeigen. So bekommen
                              Sie immer maßgeschneiderte Werbeanzeigen. Das
                              Cookie enthält eine einzigartige ID, die Google
                              benutzt, um Ihre persönlichen Einstellungen für
                              Werbezwecke zu sammeln. Ablaufdatum: nach 6
                              Monaten Anmerkung: Wir können bei den Angaben der
                              gespeicherten Daten keine Vollständigkeit
                              gewährleisten. Speziell bei der Verwendung von
                              Cookies sind Veränderungen nie auszuschließen. Um
                              das Cookie NID zu identifizieren, wurde eine
                              eigene Testseite angelegt, wo ausschließlich
                              Google Maps eingebunden war. Wie lange und wo
                              werden die Daten gespeichert? Die Google-Server
                              stehen in Rechenzentren auf der ganzen Welt. Die
                              meisten Server befinden sich allerdings in
                              Amerika. Aus diesem Grund werden Ihre Daten auch
                              vermehrt in den USA gespeichert. Hier können Sie
                              genau nachlesen wo sich die Google-Rechenzentren
                              befinden:
                              https://www.google.com/about/datacenters/inside/locations/?hl=de
                              Die Daten verteilt Google auf verschiedenen
                              Datenträgern. Dadurch sind die Daten schneller
                              abrufbar und werden vor etwaigen
                              Manipulationsversuchen besser geschützt. Jedes
                              Rechenzentrum hat auch spezielle Notfallprogramme.
                              Wenn es zum Beispiel Probleme bei der
                              Google-Hardware gibt oder eine Naturkatastrophe
                              die Server lahm legt, bleiben die Daten ziemlich
                              sicher trotzdem geschützt. Manche Daten speichert
                              Google für einen festgelegten Zeitraum. Bei
                              anderen Daten bietet Google lediglich die
                              Möglichkeit, diese manuell zu löschen. Weiters
                              anonymisiert das Unternehmen auch Informationen
                              (wie zum Beispiel Werbedaten) in
                              Serverprotokollen, indem es einen Teil der
                              IP-Adresse und Cookie-Informationen nach 9 bzw.18
                              Monaten löscht. Wie kann ich meine Daten löschen
                              bzw. die Datenspeicherung verhindern? Mit der 2019
                              eingeführten automatischen Löschfunktion von
                              Standort- und Aktivitätsdaten werden Informationen
                              zur Standortbestimmung und Web-/App-Aktivität –
                              abhängig von Ihrer Entscheidung – entweder 3 oder
                              18 Monate gespeichert und dann gelöscht. Zudem
                              kann man diese Daten über das Google-Konto auch
                              jederzeit manuell aus dem Verlauf löschen. Wenn
                              Sie Ihre Standorterfassung vollständig verhindern
                              wollen, müssen Sie im Google-Konto die Rubrik
                              „Web- und App-Aktivität“ pausieren. Klicken Sie
                              „Daten und Personalisierung“ und dann auf die
                              Option „Aktivitätseinstellung“. Hier können Sie
                              die Aktivitäten ein- oder ausschalten. In Ihrem
                              Browser können Sie weiters auch einzelne Cookies
                              deaktivieren, löschen oder verwalten. Je nach dem
                              welchen Browser Sie verwenden, funktioniert dies
                              immer etwas anders. Die folgenden Anleitungen
                              zeigen, wie Sie Cookies in Ihrem Browser
                              verwalten: Chrome: Cookies in Chrome löschen,
                              aktivieren und verwalten Safari: Verwalten von
                              Cookies und Websitedaten mit Safari Firefox:
                              Cookies löschen, um Daten zu entfernen, die
                              Websites auf Ihrem Computer abgelegt haben
                              Internet Explorer: Löschen und Verwalten von
                              Cookies Microsoft Edge: Löschen und Verwalten von
                              Cookies Falls Sie grundsätzlich keine Cookies
                              haben wollen, können Sie Ihren Browser so
                              einrichten, dass er Sie immer informiert, wenn ein
                              Cookie gesetzt werden soll. So können Sie bei
                              jedem einzelnen Cookie entscheiden, ob Sie es
                              erlauben oder nicht. Google ist aktiver Teilnehmer
                              beim EU-U.S. Privacy Shield Framework, wodurch der
                              korrekte und sichere Datentransfer persönlicher
                              Daten geregelt wird. Mehr Informationen dazu
                              finden Sie auf
                              https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI.
                              Wenn Sie mehr über die Datenverarbeitung von
                              Google erfahren wollen, empfehlen wir Ihnen die
                              hauseigene Datenschutzerklärung des Unternehmens
                              unter https://policies.google.com/privacy?hl=de.
                              Quelle: Erstellt mit dem Datenschutz Generator von
                              AdSimple in Kooperation mit justmed.de
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </Container>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    contactInfo: contentfulCompanyInfo {
      phoneNumber1
      phoneNumber2
      eMailAddresse
    }
  }
`
