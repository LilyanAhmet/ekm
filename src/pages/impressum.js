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
                              <p>
                                EKM GmbH <br />
                                Dragonerstr. 37<br />
                                30163 Hannover<br />
                                Deutschland
                              </p>
                              <p>
                                Tel.: 01723922407 <br />
                                E-Mail: info@ekm-erfolg.de
                              </p>
                              <p>
                                Registergericht: Amtsgericht Hannover <br />
                                Registernummer: HRB 222268
                              </p>
                              <p>Geschäftsführer: Dennis Klose</p>
                              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE345093433 </p>
                              <p>Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a></p>
                              <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>

                              <p>
                                Berufsbezeichnung: Unternehmensberater </p>
                            </p>

                            <p>Quelle: <a href="https://www.it-recht-kanzlei.de/"> https://www.it-recht-kanzlei.de/</a></p>

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
                            <h4>Datenschutzerklärung</h4>
                            
                            <h6> 1) Information über die Erhebung personenbezogener Daten und Kontaktdaten
                              des Verantwortlichen </h6> 
                              <p>
                              <span className="subpoint">1.1</span> Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr
                              Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren
                              personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten
                              sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
                              </p>
                              <p>
                              <span className="subpoint">1.2</span> Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
                              Datenschutz-Grundverordnung (DSGVO) ist EKM GmbH, Dragonerstr. 37, 30163
                              Hannover, Deutschland, Tel.: 01723922407, E-Mail: info@ekm-erfolg.de. Der für die
                              Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche
                              oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und
                              Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                              </p>
                              <p>
                              <span className="subpoint">1.3</span> Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                              personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder
                              Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine
                              verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in
                              Ihrer Browserzeile erkennen.
                              </p>
                              <h6>2) Datenerfassung beim Besuch unserer Website</h6>
                              <p>Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht
                              registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche
                              Daten, die Ihr Browser an unseren Server übermittelt (sog. „Server-Logfiles“). Wenn Sie
                              unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch
                              erforderlich sind, um Ihnen die Website anzuzeigen: 
                              </p>
                              <p>
                              - Unsere besuchte Website<br />
                              - Datum und Uhrzeit zum Zeitpunkt des Zugriffes<br />
                              - Menge der gesendeten Daten in Byte<br />
                              - Quelle/Verweis, von welchem Sie auf die Seite gelangten<br />
                              - Verwendeter Browser<br />
                              - Verwendetes Betriebssystem<br />
                              - Verwendete IP-Adresse (ggf.: in anonymisierter Form)
                              </p>
                              <p>
                              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
                              Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine
                              Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten
                              uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete
                              Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                              </p>
                              <h6>3) Cookies</h6>
                              <p>Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter
                              Funktionen zu ermöglichen, verwenden wir auf verschiedenen Seiten sogenannte
                              Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt
                              werden. Einige der von uns verwendeten Cookies werden nach dem Ende der
                              Browser-Sitzung, also nach Schließen Ihres Browsers, wieder gelöscht (sog.
                              Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endgerät und ermöglichen uns
                              oder unseren Partnerunternehmen (Cookies von Drittanbietern), Ihren Browser beim
                              nächsten Besuch wiederzuerkennen (persistente Cookies). Werden Cookies gesetzt,
                              erheben und verarbeiten diese im individuellen Umfang bestimmte Nutzerinformationen
                              wie Browser- und Standortdaten sowie IP-Adresswerte. Persistente Cookies werden
                              automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach Cookie
                              unterscheiden kann.
                              </p>
                              <p>
                              Sofern durch einzelne von uns implementierte Cookies auch personenbezogene Daten
                              verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder
                              zur Durchführung des Vertrages oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung
                              unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie
                              einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
                              </p>
                              <p>
                              Wir arbeiten unter Umständen mit Werbepartnern zusammen, die uns helfen, unser
                              Internetangebot für Sie interessanter zu gestalten. Zu diesem Zweck werden für diesen
                              Fall bei Ihrem Besuch unserer Website auch Cookies von Partnerunternehmen auf Ihrer
                              Festplatte gespeichert (Cookies von Drittanbietern). Wenn wir mit vorbenannten
                              Werbepartnern zusammenarbeiten, werden Sie über den Einsatz derartiger Cookies und
                              den Umfang der jeweils erhobenen Informationen innerhalb der nachstehenden Absätze
                              individuell und gesondert informiert.
                              </p>
                              <p>
                              Bitte beachten Sie, dass Sie Ihren Browser so einstellen können, dass Sie über das
                              Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden
                              oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
                              Jeder Browser unterscheidet sich in der Art, wie er die Cookie-Einstellungen verwaltet.
                              Diese ist in dem Hilfemenü jedes Browsers beschrieben, welches Ihnen erläutert, wie Sie
                              Ihre Cookie-Einstellungen ändern können. Diese finden Sie für die jeweiligen Browser
                              unter den folgenden Links:
                              </p>
                              <p>
                              Internet Explorer: 
                              <a href="http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies"> http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies</a> <br />
                              Firefox: <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"> https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen</a> <br />
                              Chrome:
                              <a href="http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647"> http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647</a> <br />
                              Safari: <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"> https://support.apple.com/de-de/guide/safari/sfri11471/mac</a> <br />
                              Opera: <a href="http://help.opera.com/Windows/10.20/de/cookies.html"> http://help.opera.com/Windows/10.20/de/cookies.html</a>
                              </p>
                              <p>
                              Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer
                              Website eingeschränkt sein kann.
                              </p>
                              <h6>4) Kontaktaufnahme</h6>
                              <p>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden
                              personenbezogene Daten erhoben. Welche Daten im Falle der Nutzung eines
                              Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich.
                              Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw.
                              für die Kontaktaufnahme und die damit verbundene technische Administration
                              gespeichert und verwendet. Rechtsgrundlage für die Verarbeitung dieser Daten ist unser
                              berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f
                              DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche
                              Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach
                              abschließender Bearbeitung Ihrer Anfrage gelöscht. Dies ist der Fall, wenn sich aus den
                              Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist
                              und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                              </p>
                              <h6>5) Rechte des Betroffenen</h6>
                              <p><span className="subpoint">5.1</span> Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen
                              hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten umfassende
                              Betroffenenrechte (Auskunfts- und Interventionsrechte), über die wir Sie nachstehend
                              informieren: 
                              </p>
                              <p>
                              - Auskunftsrecht gemäß Art. 15 DSGVO: Sie haben insbesondere ein Recht auf Auskunft
                              über Ihre von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke,
                              die Kategorien der verarbeiteten personenbezogenen Daten, die Empfänger oder
                              Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder
                              werden, die geplante Speicherdauer bzw. die Kriterien für die Festlegung der
                              Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung
                              der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei einer
                              Aufsichtsbehörde, die Herkunft Ihrer Daten, wenn diese nicht durch uns bei Ihnen
                              erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung
                              einschließlich Profiling und ggf. aussagekräftige Informationen über die involvierte Logik
                              und die Sie betreffende Tragweite und die angestrebten Auswirkungen einer solchen
                              Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche Garantien gemäß Art. 46
                              DSGVO bei Weiterleitung Ihrer Daten in Drittländer bestehen; <br />
                              - Recht auf Berichtigung gemäß Art. 16 DSGVO: Sie haben ein Recht auf unverzügliche
                              Berichtigung Sie betreffender unrichtiger Daten und/oder Vervollständigung Ihrer bei
                              uns gespeicherten unvollständigen Daten; <br />
                              - Recht auf Löschung gemäß Art. 17 DSGVO: Sie haben das Recht, die Löschung Ihrer
                              personenbezogenen Daten bei Vorliegen der Voraussetzungen des Art. 17 Abs. 1 DSGVO
                              zu verlangen. Dieses Recht besteht jedoch insbesondere dann nicht, wenn die
                              Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur
                              Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder
                              zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich
                              ist; <br />
                              - Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO: Sie haben das Recht,
                              die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,
                              solange die von Ihnen bestrittene Richtigkeit Ihrer Daten überprüft wird, wenn Sie eine
                              Löschung Ihrer Daten wegen unzulässiger Datenverarbeitung ablehnen und stattdessen
                              die Einschränkung der Verarbeitung Ihrer Daten verlangen, wenn Sie Ihre Daten zur
                              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen,
                              nachdem wir diese Daten nach Zweckerreichung nicht mehr benötigen oder wenn Sie
                              Widerspruch aus Gründen Ihrer besonderen Situation eingelegt haben, solange noch
                              nicht feststeht, ob unsere berechtigten Gründe überwiegen; <br />
                              - Recht auf Unterrichtung gemäß Art. 19 DSGVO: Haben Sie das Recht auf Berichtigung,
                              Löschung oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen
                              geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen die Sie betreffenden
                              personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der
                              Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich
                              als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden. Ihnen steht
                              das Recht zu, über diese Empfänger unterrichtet zu werden. <br />
                              - Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO: Sie haben das Recht, Ihre
                              personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten,
                              gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen
                              anderen Verantwortlichen zu verlangen, soweit dies technisch machbar ist; <br />
                              - Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO: Sie haben das
                              Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit
                              Wirkung für die Zukunft zu widerrufen. Im Falle des Widerrufs werden wir die
                              betroffenen Daten unverzüglich löschen, sofern eine weitere Verarbeitung nicht auf eine
                              Rechtsgrundlage zur einwilligungslosen Verarbeitung gestützt werden kann. Durch den
                              Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum
                              Widerruf erfolgten Verarbeitung nicht berührt; <br />
                              - Recht auf Beschwerde gemäß Art. 77 DSGVO: Wenn Sie der Ansicht sind, dass die
                              Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO
                              verstößt, haben Sie - unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                              gerichtlichen Rechtsbehelfs - das Recht auf Beschwerde bei einer Aufsichtsbehörde,
                              insbesondere in dem Mitgliedstaat Ihres Aufenthaltsortes, Ihres Arbeitsplatzes oder des
                              Ortes des mutmaßlichen Verstoßes.
                              </p>
                              <p>
                              <span className="subpoint">5.2</span> WIDERSPRUCHSRECHT
                              </p>
                              <p>
                              WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN
                              DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES
                              VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS
                              IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH
                              MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
                              MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
                              VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER
                              VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
                              VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND
                              GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER
                              GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN
                              DIENT. 
                              </p>
                              <p>
                              WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
                              DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH
                              GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
                              ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE
                              OBEN BESCHRIEBEN AUSÜBEN.
                              </p>
                              <p>
                              MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
                              VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
                              </p>
                              <h6>6) Dauer der Speicherung personenbezogener Daten</h6>
                              <p>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der
                              jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig –
                              zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und
                              steuerrechtliche Aufbewahrungsfristen).
                              </p>
                              <p>
                              Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen
                              Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden diese Daten so lange gespeichert,
                              bis der Betroffene seine Einwilligung widerruft.
                              </p>
                              <p>
                              Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen
                              rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage
                              von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der
                              Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur
                              Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein
                              berechtigtes Interesse an der Weiterspeicherung fortbesteht.
                              </p>
                              <p>
                              Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
                              f DSGVO werden diese Daten so lange gespeichert, bis der Betroffene sein
                              Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausübt, es sei denn, wir können
                              zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen,
                              Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient
                              der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                              </p>
                              <p>
                              Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf
                              Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis
                              der Betroffene sein Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausübt.
                              </p>
                              <p>
                              Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische
                              Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene
                              Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf
                              sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
                            </p>

                            <p>Quelle: <a href="https://www.it-recht-kanzlei.de/"> https://www.it-recht-kanzlei.de/</a></p>

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
