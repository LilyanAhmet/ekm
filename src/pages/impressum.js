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
                        Datenschutzerkl√§rung
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
                              <p>Gesch√§ftsf√ľhrer: Dennis Klose</p>
                              <p>Umsatzsteuer-Identifikationsnummer gem√§√ü ¬ß 27 a Umsatzsteuergesetz: DE345093433 </p>
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
                            <h4>Datenschutzerkl√§rung</h4>
                            
                            <h6> 1) Information √ľber die Erhebung personenbezogener Daten und Kontaktdaten
                              des Verantwortlichen </h6> 
                              <p>
                              <span className="subpoint">1.1</span> Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns f√ľr Ihr
                              Interesse. Im Folgenden informieren wir Sie √ľber den Umgang mit Ihren
                              personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten
                              sind hierbei alle Daten, mit denen Sie pers√∂nlich identifiziert werden k√∂nnen.
                              </p>
                              <p>
                              <span className="subpoint">1.2</span> Verantwortlicher f√ľr die Datenverarbeitung auf dieser Website im Sinne der
                              Datenschutz-Grundverordnung (DSGVO) ist EKM GmbH, Dragonerstr. 37, 30163
                              Hannover, Deutschland, Tel.: 01723922407, E-Mail: info@ekm-erfolg.de. Der f√ľr die
                              Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige nat√ľrliche
                              oder juristische Person, die allein oder gemeinsam mit anderen √ľber die Zwecke und
                              Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                              </p>
                              <p>
                              <span className="subpoint">1.3</span> Diese Website nutzt aus Sicherheitsgr√ľnden und zum Schutz der √úbertragung
                              personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder
                              Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschl√ľsselung. Sie k√∂nnen eine
                              verschl√ľsselte Verbindung an der Zeichenfolge ‚Äěhttps://‚Äú und dem Schloss-Symbol in
                              Ihrer Browserzeile erkennen.
                              </p>
                              <h6>2) Datenerfassung beim Besuch unserer Website</h6>
                              <p>Bei der blo√ü informatorischen Nutzung unserer Website, also wenn Sie sich nicht
                              registrieren oder uns anderweitig Informationen √ľbermitteln, erheben wir nur solche
                              Daten, die Ihr Browser an unseren Server √ľbermittelt (sog. ‚ÄěServer-Logfiles‚Äú). Wenn Sie
                              unsere Website aufrufen, erheben wir die folgenden Daten, die f√ľr uns technisch
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
                              Die Verarbeitung erfolgt gem√§√ü Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
                              Interesses an der Verbesserung der Stabilit√§t und Funktionalit√§t unserer Website. Eine
                              Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten
                              uns allerdings vor, die Server-Logfiles nachtr√§glich zu √ľberpr√ľfen, sollten konkrete
                              Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                              </p>
                              <h6>3) Cookies</h6>
                              <p>Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter
                              Funktionen zu erm√∂glichen, verwenden wir auf verschiedenen Seiten sogenannte
                              Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endger√§t abgelegt
                              werden. Einige der von uns verwendeten Cookies werden nach dem Ende der
                              Browser-Sitzung, also nach Schlie√üen Ihres Browsers, wieder gel√∂scht (sog.
                              Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endger√§t und erm√∂glichen uns
                              oder unseren Partnerunternehmen (Cookies von Drittanbietern), Ihren Browser beim
                              n√§chsten Besuch wiederzuerkennen (persistente Cookies). Werden Cookies gesetzt,
                              erheben und verarbeiten diese im individuellen Umfang bestimmte Nutzerinformationen
                              wie Browser- und Standortdaten sowie IP-Adresswerte. Persistente Cookies werden
                              automatisiert nach einer vorgegebenen Dauer gel√∂scht, die sich je nach Cookie
                              unterscheiden kann.
                              </p>
                              <p>
                              Sofern durch einzelne von uns implementierte Cookies auch personenbezogene Daten
                              verarbeitet werden, erfolgt die Verarbeitung gem√§√ü Art. 6 Abs. 1 lit. b DSGVO entweder
                              zur Durchf√ľhrung des Vertrages oder gem√§√ü Art. 6 Abs. 1 lit. f DSGVO zur Wahrung
                              unserer berechtigten Interessen an der bestm√∂glichen Funktionalit√§t der Website sowie
                              einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
                              </p>
                              <p>
                              Wir arbeiten unter Umst√§nden mit Werbepartnern zusammen, die uns helfen, unser
                              Internetangebot f√ľr Sie interessanter zu gestalten. Zu diesem Zweck werden f√ľr diesen
                              Fall bei Ihrem Besuch unserer Website auch Cookies von Partnerunternehmen auf Ihrer
                              Festplatte gespeichert (Cookies von Drittanbietern). Wenn wir mit vorbenannten
                              Werbepartnern zusammenarbeiten, werden Sie √ľber den Einsatz derartiger Cookies und
                              den Umfang der jeweils erhobenen Informationen innerhalb der nachstehenden Abs√§tze
                              individuell und gesondert informiert.
                              </p>
                              <p>
                              Bitte beachten Sie, dass Sie Ihren Browser so einstellen k√∂nnen, dass Sie √ľber das
                              Setzen von Cookies informiert werden und einzeln √ľber deren Annahme entscheiden
                              oder die Annahme von Cookies f√ľr bestimmte F√§lle oder generell ausschlie√üen k√∂nnen.
                              Jeder Browser unterscheidet sich in der Art, wie er die Cookie-Einstellungen verwaltet.
                              Diese ist in dem Hilfemen√ľ jedes Browsers beschrieben, welches Ihnen erl√§utert, wie Sie
                              Ihre Cookie-Einstellungen √§ndern k√∂nnen. Diese finden Sie f√ľr die jeweiligen Browser
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
                              Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalit√§t unserer
                              Website eingeschr√§nkt sein kann.
                              </p>
                              <h6>4) Kontaktaufnahme</h6>
                              <p>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden
                              personenbezogene Daten erhoben. Welche Daten im Falle der Nutzung eines
                              Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich.
                              Diese Daten werden ausschlie√ülich zum Zweck der Beantwortung Ihres Anliegens bzw.
                              f√ľr die Kontaktaufnahme und die damit verbundene technische Administration
                              gespeichert und verwendet. Rechtsgrundlage f√ľr die Verarbeitung dieser Daten ist unser
                              berechtigtes Interesse an der Beantwortung Ihres Anliegens gem√§√ü Art. 6 Abs. 1 lit. f
                              DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zus√§tzliche
                              Rechtsgrundlage f√ľr die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach
                              abschlie√üender Bearbeitung Ihrer Anfrage gel√∂scht. Dies ist der Fall, wenn sich aus den
                              Umst√§nden entnehmen l√§sst, dass der betroffene Sachverhalt abschlie√üend gekl√§rt ist
                              und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                              </p>
                              <h6>5) Rechte des Betroffenen</h6>
                              <p><span className="subpoint">5.1</span> Das geltende Datenschutzrecht gew√§hrt Ihnen gegen√ľber dem Verantwortlichen
                              hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten umfassende
                              Betroffenenrechte (Auskunfts- und Interventionsrechte), √ľber die wir Sie nachstehend
                              informieren: 
                              </p>
                              <p>
                              - Auskunftsrecht gem√§√ü Art. 15 DSGVO: Sie haben insbesondere ein Recht auf Auskunft
                              √ľber Ihre von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke,
                              die Kategorien der verarbeiteten personenbezogenen Daten, die Empf√§nger oder
                              Kategorien von Empf√§ngern, gegen√ľber denen Ihre Daten offengelegt wurden oder
                              werden, die geplante Speicherdauer bzw. die Kriterien f√ľr die Festlegung der
                              Speicherdauer, das Bestehen eines Rechts auf Berichtigung, L√∂schung, Einschr√§nkung
                              der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei einer
                              Aufsichtsbeh√∂rde, die Herkunft Ihrer Daten, wenn diese nicht durch uns bei Ihnen
                              erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung
                              einschlie√ülich Profiling und ggf. aussagekr√§ftige Informationen √ľber die involvierte Logik
                              und die Sie betreffende Tragweite und die angestrebten Auswirkungen einer solchen
                              Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche Garantien gem√§√ü Art. 46
                              DSGVO bei Weiterleitung Ihrer Daten in Drittl√§nder bestehen; <br />
                              - Recht auf Berichtigung gem√§√ü Art. 16 DSGVO: Sie haben ein Recht auf unverz√ľgliche
                              Berichtigung Sie betreffender unrichtiger Daten und/oder Vervollst√§ndigung Ihrer bei
                              uns gespeicherten unvollst√§ndigen Daten; <br />
                              - Recht auf L√∂schung gem√§√ü Art. 17 DSGVO: Sie haben das Recht, die L√∂schung Ihrer
                              personenbezogenen Daten bei Vorliegen der Voraussetzungen des Art. 17 Abs. 1 DSGVO
                              zu verlangen. Dieses Recht besteht jedoch insbesondere dann nicht, wenn die
                              Verarbeitung zur Aus√ľbung des Rechts auf freie Meinungs√§u√üerung und Information, zur
                              Erf√ľllung einer rechtlichen Verpflichtung, aus Gr√ľnden des √∂ffentlichen Interesses oder
                              zur Geltendmachung, Aus√ľbung oder Verteidigung von Rechtsanspr√ľchen erforderlich
                              ist; <br />
                              - Recht auf Einschr√§nkung der Verarbeitung gem√§√ü Art. 18 DSGVO: Sie haben das Recht,
                              die Einschr√§nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,
                              solange die von Ihnen bestrittene Richtigkeit Ihrer Daten √ľberpr√ľft wird, wenn Sie eine
                              L√∂schung Ihrer Daten wegen unzul√§ssiger Datenverarbeitung ablehnen und stattdessen
                              die Einschr√§nkung der Verarbeitung Ihrer Daten verlangen, wenn Sie Ihre Daten zur
                              Geltendmachung, Aus√ľbung oder Verteidigung von Rechtsanspr√ľchen ben√∂tigen,
                              nachdem wir diese Daten nach Zweckerreichung nicht mehr ben√∂tigen oder wenn Sie
                              Widerspruch aus Gr√ľnden Ihrer besonderen Situation eingelegt haben, solange noch
                              nicht feststeht, ob unsere berechtigten Gr√ľnde √ľberwiegen; <br />
                              - Recht auf Unterrichtung gem√§√ü Art. 19 DSGVO: Haben Sie das Recht auf Berichtigung,
                              L√∂schung oder Einschr√§nkung der Verarbeitung gegen√ľber dem Verantwortlichen
                              geltend gemacht, ist dieser verpflichtet, allen Empf√§ngern, denen die Sie betreffenden
                              personenbezogenen Daten offengelegt wurden, diese Berichtigung oder L√∂schung der
                              Daten oder Einschr√§nkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich
                              als unm√∂glich oder ist mit einem unverh√§ltnism√§√üigen Aufwand verbunden. Ihnen steht
                              das Recht zu, √ľber diese Empf√§nger unterrichtet zu werden. <br />
                              - Recht auf Daten√ľbertragbarkeit gem√§√ü Art. 20 DSGVO: Sie haben das Recht, Ihre
                              personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten,
                              g√§ngigen und maschinenlesebaren Format zu erhalten oder die √úbermittlung an einen
                              anderen Verantwortlichen zu verlangen, soweit dies technisch machbar ist; <br />
                              - Recht auf Widerruf erteilter Einwilligungen gem√§√ü Art. 7 Abs. 3 DSGVO: Sie haben das
                              Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit
                              Wirkung f√ľr die Zukunft zu widerrufen. Im Falle des Widerrufs werden wir die
                              betroffenen Daten unverz√ľglich l√∂schen, sofern eine weitere Verarbeitung nicht auf eine
                              Rechtsgrundlage zur einwilligungslosen Verarbeitung gest√ľtzt werden kann. Durch den
                              Widerruf der Einwilligung wird die Rechtm√§√üigkeit der aufgrund der Einwilligung bis zum
                              Widerruf erfolgten Verarbeitung nicht ber√ľhrt; <br />
                              - Recht auf Beschwerde gem√§√ü Art. 77 DSGVO: Wenn Sie der Ansicht sind, dass die
                              Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO
                              verst√∂√üt, haben Sie - unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                              gerichtlichen Rechtsbehelfs - das Recht auf Beschwerde bei einer Aufsichtsbeh√∂rde,
                              insbesondere in dem Mitgliedstaat Ihres Aufenthaltsortes, Ihres Arbeitsplatzes oder des
                              Ortes des mutma√ülichen Versto√ües.
                              </p>
                              <p>
                              <span className="subpoint">5.2</span> WIDERSPRUCHSRECHT
                              </p>
                              <p>
                              WENN WIR IM RAHMEN EINER INTERESSENABW√ĄGUNG IHRE PERSONENBEZOGENEN
                              DATEN AUFGRUND UNSERES √úBERWIEGENDEN BERECHTIGTEN INTERESSES
                              VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GR√úNDEN, DIE SICH AUS
                              IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH
                              MIT WIRKUNG F√úR DIE ZUKUNFT EINZULEGEN.
                              MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
                              VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER
                              VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZW√úRDIGE GR√úNDE F√úR DIE
                              VERARBEITUNG NACHWEISEN K√ĖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND
                              GRUNDFREIHEITEN √úBERWIEGEN, ODER WENN DIE VERARBEITUNG DER
                              GELTENDMACHUNG, AUS√úBUNG ODER VERTEIDIGUNG VON RECHTSANSPR√úCHEN
                              DIENT. 
                              </p>
                              <p>
                              WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
                              DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH
                              GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
                              ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE K√ĖNNEN DEN WIDERSPRUCH WIE
                              OBEN BESCHRIEBEN AUS√úBEN.
                              </p>
                              <p>
                              MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
                              VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
                              </p>
                              <h6>6) Dauer der Speicherung personenbezogener Daten</h6>
                              <p>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der
                              jeweiligen Rechtsgrundlage, am Verarbeitungszweck und ‚Äď sofern einschl√§gig ‚Äď
                              zus√§tzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und
                              steuerrechtliche Aufbewahrungsfristen).
                              </p>
                              <p>
                              Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdr√ľcklichen
                              Einwilligung gem√§√ü Art. 6 Abs. 1 lit. a DSGVO werden diese Daten so lange gespeichert,
                              bis der Betroffene seine Einwilligung widerruft.
                              </p>
                              <p>
                              Existieren gesetzliche Aufbewahrungsfristen f√ľr Daten, die im Rahmen
                              rechtsgesch√§ftlicher bzw. rechtsgesch√§fts√§hnlicher Verpflichtungen auf der Grundlage
                              von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der
                              Aufbewahrungsfristen routinem√§√üig gel√∂scht, sofern sie nicht mehr zur
                              Vertragserf√ľllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein
                              berechtigtes Interesse an der Weiterspeicherung fortbesteht.
                              </p>
                              <p>
                              Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
                              f DSGVO werden diese Daten so lange gespeichert, bis der Betroffene sein
                              Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO aus√ľbt, es sei denn, wir k√∂nnen
                              zwingende schutzw√ľrdige Gr√ľnde f√ľr die Verarbeitung nachweisen, die die Interessen,
                              Rechte und Freiheiten der betroffenen Person √ľberwiegen, oder die Verarbeitung dient
                              der Geltendmachung, Aus√ľbung oder Verteidigung von Rechtsanspr√ľchen.
                              </p>
                              <p>
                              Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf
                              Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis
                              der Betroffene sein Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO aus√ľbt.
                              </p>
                              <p>
                              Sofern sich aus den sonstigen Informationen dieser Erkl√§rung √ľber spezifische
                              Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene
                              Daten im √úbrigen dann gel√∂scht, wenn sie f√ľr die Zwecke, f√ľr die sie erhoben oder auf
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
