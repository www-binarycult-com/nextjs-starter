import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import { Headline } from '../components/Headline';
import { Hero } from '../components/hero/Hero';
import { TextImageSection } from '../components/text-image/TextImageSection';

const DSGVO: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Datenschutz</title>
        <meta name='description' content='immajung - Datenschutz' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-white'>
        <Hero />
        <TextImageSection heading='Datenschutz'>
          <>
            <p>
              Dennis Piotrowski, Karim Ould Mahieddine, Ilias Zales, Martin Kireew GbR
              <br />
              immajung
              <br />
              Am Kalkbruche 1b 30455
              <br />
              Hannover Germany e-mail: hello@immajung.com
            </p>
            <p>
              Für externe Links zu fremden Inhalten können wir trotz sorgfältiger inhaltlicher Kontrolle keine Haftung
              übernehmen. Diese Datenschutzrichtlinie beschreibt, wie Ihre persönlichen Daten gesammelt, verwendet und
              weitergegeben werden, wenn Sie Ucon Acrobatics (die "Site") besuchen oder dort einkaufen. Wir behandeln
              Ihre Daten gemäß den gesetzlichen Bestimmungen (DSGVO, TKG 2003). Im Folgenden finden Sie alle wichtigen
              Aspekte, die Ihre persönlichen Daten auf unserer Site betreffen. <br />
              <br />
            </p>
            <Headline tag='h4'>Welche Informationen sammlen wir?</Headline>
            <br />
            <br />
            <p>
              Wenn Sie die Website besuchen, sammeln wir automatisch bestimmte Informationen über Ihr Gerät,
              einschließlich Informationen über Ihren Webbrowser, Ihre IP-Adresse, Ihre Zeitzone und einige der Cookies,
              die auf Ihrem Gerät installiert sind. Wenn Sie auf der Website surfen, erfassen wir außerdem Informationen
              über die einzelnen Webseiten oder Produkte, die Sie sich ansehen, welche Websites oder Suchbegriffe Sie
              auf die Website verwiesen haben, und Informationen darüber, wie Sie mit der Website interagieren. Wir
              bezeichnen diese automatisch gesammelten Informationen als "Geräteinformationen". Wir erfassen
              Geräteinformationen mithilfe der folgenden Technologien: "Cookies" sind Datendateien, die auf Ihrem Gerät
              oder Computer gespeichert werden und häufig eine anonyme eindeutige Kennung enthalten. Weitere
              Informationen über Cookies und wie Sie Cookies deaktivieren können, finden Sie unter Alles über Cookies.
              "Protokolldateien" verfolgen Aktionen auf der Website und erfassen Daten wie Ihre IP-Adresse, den
              Browsertyp, den Internetdienstanbieter, die Verweis- und Ausgangsseiten sowie Datums- und Zeitstempel.
              "Web-Beacons", "Tags" und "Pixel" sind elektronische Dateien, die Informationen darüber aufzeichnen, wie
              Sie auf der Website surfen.
            </p>
            <br />
            <br />
            <Headline tag='h4'>Erhebung und Verarbeitung von Daten</Headline>
            <br />
            <br />
            <p>
              Jeder Besuch unserer Webseite wird erfasst. Dabei werden folgende Daten automatisch gespeichert:
              <br />
              <br />
              - Aufgerufene Webseite
              <br />
              - Unterseite, oder Datei
              <br />
              - Datum und Uhrzeit und Dauer des Abrufs
              <br />
              - IP-Adresse
              <br />
              - Übertragene Datenmenge
              <br />
              - Verwendetes Betriebssystem
              <br />
              - Browser und Browsertyp Die Internetseite, von der weitergeleitet wurde
              <br />
              Keine dieser genannten Daten geben Rückschlüsse zu Ihrer Person wieder. Wir brauchen sie lediglich, um die
              Darstellung und Wirkung unserer Webseite besser nachvollziehen zu können und im Falle eines Hackerangriffs
              strafrechtliche Verfolgungen unterstützen zu können. Sollten andere personenbezogene Daten (wie z.B. Name,
              Anschrift, E-Mail-Adresse etc.) erhoben werden, geschieht dies nur mit Ihrer Einwilligung. Dabei werden
              diese Daten durch uns entlang der Vorschriften des Telemediengesetztes (TMG) und des DSG-EKD erhoben,
              verarbeitet und geschützt. Ein Widerruf Ihrerseits ist jederzeit ohne Angaben von Gründen möglich.
            </p>
            <br />
            <br />
            <Headline tag='h4'>Nutzung und Weitergabe personenbezogener Daten</Headline>
            <br />
            <br />
            <p>
              Sollten Sie bei uns personenbezogene Daten hinterlassen haben, verwenden wir sie entlang der gesetzlichen
              Bestimmungen für den Datenschutz – z.B. um Ihre Fragen zu beantworten, Verträge zu erstellen, abzuwickeln
              oder zu beenden und für unsere technische Administration. Zum Zweck der Vertragserfüllung werden Ihre
              Daten gegebenenfalls an Dritte übermittelt, z.B. Weitergabe von Bestell- oder Abrechnungsdaten bei der
              Einbindung von Dienstleistern und Lieferanten etc. Diese vertragsgebundene Einwilligung können Sie
              jederzeit einsehen und widerrufen.
            </p>
            <br />
            <br />
            <Headline tag='h4'>Betroffenenrechte</Headline>
            <br />
            <br />
            <p>
              Es steht Ihnen gemäß §19 DSG-EKD zu, sich Auskunft über die Verarbeitung Ihrer personenbezogenen Daten
              geben zu lassen. Zusätzlich haben Sie ein Recht auf Berichtigung, Löschung oder eine Einschränkung in der
              Verarbeitung Ihrer Daten gemäß §20, §21, §22 und §24 des DSG-EKD. Wenn Sie von diesem Recht Gebrauch
              machen möchten, nehmen Sie bitte Kontakt zu unserem Datenschutzbeauftragten auf. Außerdem können Sie gemäß
              §25 DSG-EKD jederzeit der Verarbeitung Ihrer personenbezogenen Daten widersprechen. Des Weiteren steht es
              Ihnen zu, sich jederzeit bei der zuständigen Aufsichtsbehörde zu beschweren, falls Sie der Meinung sind,
              Ihre personenbezogenen Daten werden nicht gemäß der Datenschutzgesetze verarbeitet. Wir wären Ihnen
              trotzdem sehr dankbar, wenn Sie sich in diesem Fall zuerst an unseren Datenschutzbeauftragten wenden.
            </p>
            <br />
            <br />
            <Headline tag='h4'>Schutz der gespeicherten Daten</Headline>
            <br />
            <br />
            <p>
              Bei uns werden technische und organisatorische Sicherheitsmaßnahmen ergriffen, um Ihre uns zur Verfügung
              gestellten persönlichen Daten vor Manipulation, Verlust oder dem Zugriff unberechtigter Personen zu
              schützen. Nicht auszuschließen ist jedoch, dass von Ihnen unverschlüsselt übermittelte Daten von Dritten
              während der Übermittlung eingesehen werden können. Wir müssen an dieser Stelle darauf hinweisen, dass bei
              der Datenübertragung durch das Internet (z.B. bei der Kommunikation per E-Mail) keine abschließend sichere
              Übertragung von Daten garantiert werden kann. Empfindliche Daten sollten daher entweder gar nicht oder nur
              über eine sichere Verbindung (SSL) über das Internet übertragen werden.
            </p>

            <br />
            <br />

            <Headline tag='h4'>Örtlich Beauftragter für den Datenschutz</Headline>
            <br />
            <br />
            <p>
              Sollten Sie Fragen zu unserer Datenschutzverordnung haben, wenden Sie sich bitte an unseren örtlichen
              Datenschutzbeauftragten via hello@immajung.com
            </p>
          </>
        </TextImageSection>
      </main>
      <Footer />
    </div>
  );
};

export default DSGVO;
