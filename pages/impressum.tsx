import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import { Headline } from '../components/Headline';
import { Hero } from '../components/hero/Hero';
import { TextImageSection } from '../components/text-image/TextImageSection';

const Impressum: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Impressum</title>
        <meta name='description' content='immajung - Impressum' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-white'>
        <Hero />
        <TextImageSection heading='Impressum'>
          <>
            <p>
              Dennis Piotrowski, Karim Ould Mahieddine, Ilias Zales, Martin Kireew GbR
              <br />
              immajung
              <br />
              Am Kalkbruche 1b 30455
              <br />
              Hannover Germany e-mail: hello@immajung.de
              <br />
              Telefon: 01767253740
            </p>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: 26/235/144504
              <br />
              Steuer-ID: 2326023514504
              <br />
              Landgericht: Hannover-Süd
              <br />
              <br />
            </p>
            <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <Headline tag='h4'>RECHTLICHE HINWEISE</Headline>
            <br />
            Foto auf Hompage von{' '}
            <a href='https://unsplash.com/@jasongoodman_youxventures?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Jason Goodman
            </a>{' '}
            auf{' '}
            <a href='https://unsplash.com/de/fotos/vbxyFxlgpjM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            <br />
            Foto von{' '}
            <a href='https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              charlesdeluvio
            </a>{' '}
            auf{' '}
            <a href='https://unsplash.com/de/fotos/Lks7vei-eAg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            <br />
            <p>
              Die Informationen auf diesen Webseiten werden von Immajung (Dennis Piotrwoski, Karim Ould Mahieddine,
              Ilias Zales, Martin Kireew GbR) regelmäßig aktualisiert. Trotz aller Sorgfalt können sich Daten inzwischen
              verändert haben oder Fehler und Ungenauigkeiten enthalten. Eine Haftung oder Garantie für die Aktualität,
              Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen kann daher nicht übernommen
              werden. Dies gilt auch für alle anderen Webseiten, auf die mittels Hyperlink verwiesen wird. Immajung
              (Dennis Piotrwoski, Karim Ould Mahieddine, Ilias Zales, Martin Kireew GbR) ist auch für den Inhalt der
              Webseiten, die aufgrund einer solchen Verbindung erreicht werden, nicht verantwortlich. Immajung (Dennis
              Piotrwoski, Karim Ould Mahieddine, Ilias Zales, Martin Kireew GbR) behält sich außerdem das Recht vor,
              Änderungen an den bereitgestellten Webseiten vorzunehmen. Der Inhalt und die Struktur dieser Seiten sind
              geschützt.
            </p>
            <br />
            <br />
            <Headline tag='h4'>HAFTUNGSAUSSCHLUSS RECHTLICHE HINWEISE</Headline>
            <br />
            <br />
            <p>
              Informationen zur Online-Streitbeilegung: Ab dem ersten Quartal 2016 wird die EU-Kommission eine
              Internetplattform zur Beilegung von für die Beilegung von Online-Streitigkeiten (die sogenannte
              &quot;OS-Plattform&quot;) bereitstellen. Die OS-Plattform wird eine zentrale Anlaufstelle für die
              außergerichtliche Beilegung von Rechtsstreitigkeiten im Zusammenhang mit vertraglichen Verpflichtungen aus
              Online-Kaufverträgen. Die OS-Plattform wird über den folgenden Link erreichbar sein.
            </p>
            <br />
            <br />
            <Headline tag='h4'>HAFTUNG FÜR INHALTE</Headline>
            <br />
            <br />
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7
              Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Gemäß den §§
              8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen. die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. ab dem
              Zeitpunkt der Kenntnisnahme einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <br />
            <br />
            <Headline tag='h4'>HAFTUNG FÜR LINKS</Headline>
            <br />
            <br />
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne ohne konkrete Anhaltspunkte einer Rechtsverletzung. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <br />
            <br />
            <Headline tag='h4'>COPYRIGHTS</Headline>
            <br />
            <br />
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
              für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom
              Betreiber erstellt wurden Seitenbetreiber erstellt wurden, sind die Urheberrechte Dritter beachtet worden.
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. Die Nutzung unserer Webseite ist
              in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten
              (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
              auf freiwilliger Basis, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden
              ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die
              Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der
              Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber
              der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
            <br />
            <br />
          </>
        </TextImageSection>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
