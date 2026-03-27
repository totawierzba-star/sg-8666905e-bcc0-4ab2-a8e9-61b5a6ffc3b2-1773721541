import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, History, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function HistoriaBiblioterapiiPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Historia biblioterapii — od starożytności do współczesności",
    "description": "Poznaj fascynującą historię biblioterapii — od egipskich kapłanów przez starożytną Grecję, średniowiecze, XIX-wieczne szpitale psychiatryczne aż do współczesnych badań naukowych i polskiej praktyki.",
    "author": { "@type": "Organization", "name": "Biblioterapia.org" },
    "publisher": { "@type": "Organization", "name": "Biblioterapia.org", "url": "https://biblioterapia.org" },
    "url": "https://biblioterapia.org/artykuly/historia-biblioterapii",
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "inLanguage": "pl",
    "mainEntityOfPage": "https://biblioterapia.org/artykuly/historia-biblioterapii"
  };

  return (
    <Layout>
      <SEO
        title="Historia biblioterapii — od starożytności do współczesności"
        description="Od egipskich świątyń po współczesne gabinety terapeutyczne — poznaj pełną historię biblioterapii. Jak leczenie słowem ewoluowało przez wieki i kto nadał mu naukowe podstawy?"
        url="https://biblioterapia.org/artykuly/historia-biblioterapii"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <article className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/artykuly"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do artykułów
            </Link>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <History className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Historia i tradycja
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Historia biblioterapii — od starożytności do współczesności
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Idea leczenia słowem i opowieścią jest stara jak sama literatura. Śledź fascynującą drogę
              biblioterapii — od egipskich kapłanów i greckich filozofów, przez XIX-wieczne szpitale
              psychiatryczne, aż do współczesnych badań naukowych i polskiej praktyki terapeutycznej.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~10 minut</span>
              <span>🎯 Poziom: Dla każdego</span>
              <span>🗓️ Zaktualizowano: marzec 2026</span>
            </div>
          </header>

          <nav className="bg-muted/30 border rounded-xl p-6 mb-12" aria-label="Spis treści">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Spis treści
            </h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#starozytnosc" className="text-primary hover:underline">1. Starożytność — pierwsze „lekarstwa dla duszy"</a></li>
              <li><a href="#sredniowiecze" className="text-primary hover:underline">2. Średniowiecze i renesans — słowo jako dar boży i ochrona</a></li>
              <li><a href="#xix-wiek" className="text-primary hover:underline">3. XIX wiek — biblioteki w szpitalach psychiatrycznych</a></li>
              <li><a href="#narodziny-terminu" className="text-primary hover:underline">4. 1916 — narodziny terminu „bibliotherapy"</a></li>
              <li><a href="#xx-wiek" className="text-primary hover:underline">5. XX wiek — biblioterapia jako dyscyplina naukowa</a></li>
              <li><a href="#polska" className="text-primary hover:underline">6. Biblioterapia w Polsce</a></li>
              <li><a href="#wspolczesnosc" className="text-primary hover:underline">7. XXI wiek — nowe kierunki</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none space-y-12">

            {/* 1 */}
            <section id="starozytnosc" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                Starożytność — pierwsze „lekarstwa dla duszy"
              </h2>

              <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                <p className="text-amber-900 dark:text-amber-100 font-medium">
                  Nad wejściem do biblioteki w Tebach Egipskich widniał napis: <em>„Lekarstwo dla duszy"</em>.
                  Był to prawdopodobnie pierwszy pisemny wyraz przekonania, że słowo pisane leczy.
                </p>
              </div>

              <p>
                Najwcześniejsze udokumentowane zastosowanie tekstów w celach terapeutycznych pochodzi
                ze starożytnego Egiptu. Kapłani w świątyniach Ramzesa II (ok. 1250 p.n.e.) czytali
                chorym teksty religijne i magiczne, wierząc w ich uzdrawiającą moc. Biblioteka przy świątyni
                nosiła grecką nazwę <em>Psyches Iatreion</em> — dosłownie „lecznica duszy".
              </p>

              <p>
                W starożytnej Grecji lecznicze właściwości literatury dostrzegali filozofowie i lekarze.
                <strong> Arystoteles</strong> w <em>Poetyce</em> wprowadził pojęcie <em>katharsis</em> —
                oczyszczenia emocjonalnego przez doświadczenie tragedii. To koncepcja, która do dziś
                stanowi jeden z fundamentów biblioterapii.{" "}
                <strong>Soranos z Efezu</strong>, grecki lekarz z I w. n.e., przepisywał swoim pacjentom
                czytanie komedii lub tragedii zależnie od ich stanu psychicznego.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                  <p className="font-bold text-amber-900 dark:text-amber-100 mb-2">Egipt (~1250 p.n.e.)</p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Biblioteka Ramzesa II — „Lecznica duszy". Rytualne czytanie tekstów sakralnych chorym.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                  <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">Grecja (IV w. p.n.e.)</p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Arystoteles opisuje katharsis. Soranos z Efezu przepisuje lektury jako lekarstwo dla umysłu.
                  </p>
                </div>
              </div>

              <p>
                <strong>Rzym</strong> przejął greckie koncepcje. Marek Aureliusz i Seneka traktowali
                filozofię i literaturę jako narzędzie samoleczenia psychicznego. Cyceron pisał:
                <em>„Książki są moim lekarstwem, gdy choroba mnie nawiedza"</em>.
              </p>
            </section>

            {/* 2 */}
            <section id="sredniowiecze" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <History className="h-6 w-6 text-primary" />
                </div>
                Średniowiecze i renesans — słowo jako dar boży i ochrona
              </h2>

              <p>
                W chrześcijańskiej Europie słowo literackie nabrało wymiaru sakralnego. Klasztory
                przechowywały i kopiowały manuskrypty traktując tę pracę jako modlitwę. Czytanie
                Biblii, żywotów świętych i psalmów było zalecane chorym jako środek uzdrowienia duszy.
              </p>

              <p>
                <strong>Ibn Sina (Awicenna)</strong> — arabski lekarz i filozof (980–1037) — w swoim
                monumentalnym <em>Kanonie medycyny</em> opisywał emocje jako czynnik zdrowia fizycznego.
                Zalecał czytanie, muzykę i rozmowy z mądrymi ludźmi jako terapię dla umysłu — co
                traktujemy dziś jako protobiblioterapię.
              </p>

              <p>
                W renesansie biblioteki przybrały nowe znaczenie — stały się symbolem mądrości i ocalenia.
                Humanizm wyniósł literaturę do rangi narzędzia kształtowania człowieczeństwa. <strong>Erazm
                z Rotterdamu</strong> i <strong>Tomasz Morus</strong> pisali o literaturze jako o szkole cnót
                i empatii.
              </p>
            </section>

            {/* 3 */}
            <section id="xix-wiek" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                XIX wiek — biblioteki w szpitalach psychiatrycznych
              </h2>

              <p>
                Przełomem w formalizowaniu biblioterapii był wiek XIX. W tym okresie w Europie i Stanach
                Zjednoczonych zaczęto systematycznie wprowadzać biblioteki do szpitali psychiatrycznych.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <p className="text-blue-900 dark:text-blue-100 font-medium mb-2">
                  <strong>Dr Benjamin Rush</strong> (ojciec amerykańskiej psychiatrii):
                </p>
                <p className="text-blue-800 dark:text-blue-200 italic">
                  „Czytanie jest jednym z najbardziej skutecznych środków łagodzenia niepokoju psychicznego
                  i skracania czasu rekonwalescencji u pacjentów szpitalnych."
                </p>
                <p className="text-blue-700 dark:text-blue-300 text-sm mt-2">
                  — <em>Medical Inquiries and Observations upon the Diseases of the Mind</em>, 1812
                </p>
              </div>

              <p>
                W 1802 roku szpital psychiatryczny w Filadelfii jako jeden z pierwszych na świecie
                zorganizował bibliotekę dla pacjentów. W Europie podobne inicjatywy podejmowały
                szpitale w Anglii (York Retreat, 1796) i Francji. Lektura była przepisywana jako
                element reżimu terapeutycznego obok spacerów, pracy i muzyki.
              </p>

              <p>
                W Wielkiej Brytanii <strong>John Minson Galt II</strong> opublikował w 1853 roku artykuł
                <em>„On the Reading, Recreation and Amusements of the Insane"</em> — pierwszą naukową
                pracę poświęconą terapeutycznej funkcji lektury w psychiatrii.
              </p>
            </section>

            {/* 4 */}
            <section id="narodziny-terminu" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <History className="h-6 w-6 text-primary" />
                </div>
                1916 — narodziny terminu „bibliotherapy"
              </h2>

              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <p className="text-green-900 dark:text-green-100 font-semibold mb-2">
                  Samuel McChord Crothers, „Atlantic Monthly", 1916:
                </p>
                <p className="text-green-800 dark:text-green-200 italic">
                  „Lekarze mogliby przepisywać chorym odpowiednie książki, tak jak przepisują lekarstwa —
                  dobierając lekturę do diagnozy i potrzeb pacjenta."
                </p>
              </div>

              <p>
                W 1916 roku amerykański pastor, eseista i felietonista <strong>Samuel McChord Crothers</strong>
                opublikował w magazynie „Atlantic Monthly" artykuł, w którym po raz pierwszy użył słowa
                <em>bibliotherapy</em>. Opisał w nim humorystyczną, lecz trafną wizję „Biblioteki Stosowanej" —
                miejsca, gdzie specjalista przepisywałby pacjentom konkretne książki jak leki.
              </p>

              <p>
                Crothers był przede wszystkim pisarzem i kaznodzieją, nie psychologiem — ale jego tekst
                otworzył dyskusję, która zaowocowała dziesiątkami lat badań naukowych i instytucjonalizacją
                biblioterapii jako zawodu i metody.
              </p>
            </section>

            {/* 5 */}
            <section id="xx-wiek" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                XX wiek — biblioterapia jako dyscyplina naukowa
              </h2>

              <p>
                Po roku 1916 biblioterapia stopniowo zyskiwała naukowe podstawy. Kluczowe momenty:
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    rok: "1939",
                    opis: "Biblioterapia pojawia się po raz pierwszy w Słowniku Webstera jako oficjalne hasło: Stosowanie wybranych materiałów do czytania jako środków terapeutycznych w medycynie i psychiatrii."
                  },
                  {
                    rok: "1944",
                    opis: "Menninger Clinic w Kansas — pionierskie centrum psychiatryczne — systematycznie włącza biblioterapię do programów leczenia pacjentów."
                  },
                  {
                    rok: "1966",
                    opis: "American Library Association zakłada Sekcję Biblioterapii (dziś: Round Table on Bibliotherapy), formalizując zawód biblioterapeuty."
                  },
                  {
                    rok: "1969",
                    opis: "Arleen McCarty Hynes — pionierka biblioterapii poetyckiej — zakłada w USA pierwszy formalny program kształcenia biblioterapeutów."
                  },
                  {
                    rok: "1986",
                    opis: "Hynes i Hynes-Berry publikują fundamentalne dzieło Bibliotherapy — The Interactive Process: A Handbook, które staje się kanonem dziedziny."
                  },
                ].map((item) => (
                  <div key={item.rok} className="flex gap-4 p-5 bg-muted/30 rounded-xl border">
                    <div className="shrink-0 bg-primary text-primary-foreground rounded-lg px-3 py-1 font-bold text-sm h-fit">
                      {item.rok}
                    </div>
                    <p className="text-sm leading-relaxed">{item.opis}</p>
                  </div>
                ))}
              </div>

              <p>
                Równolegle w Europie — szczególnie w Wielkiej Brytanii, Niemczech i Skandynawii —
                biblioterapia rozwijała się jako część szerszego ruchu arteterapii i muzykoterapii.
                Pojawiły się pierwsze prace teoretyczne definiujące biblioterapię kliniczną
                (skierowaną do pacjentów) i rozwojową (profilaktyczną).
              </p>
            </section>

            {/* 6 */}
            <section id="polska" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Biblioterapia w Polsce
              </h2>

              <p>
                W Polsce biblioterapia jako zorganizowana dyscyplina zaczęła się rozwijać w latach
                70. XX wieku, głównie w środowisku bibliotekarskim.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    rok: "lata 70.",
                    opis: "Pierwsze polskie prace teoretyczne — Irena Borecka i Wanda Szulc opisują biblioterapię jako metodę pracy z chorymi i niepełnosprawnymi w bibliotekach szpitalnych."
                  },
                  {
                    rok: "1983",
                    opis: "Powstaje Sekcja Biblioterapii przy Stowarzyszeniu Bibliotekarzy Polskich. Pierwsze szkolenia i warsztaty dla bibliotekarzy."
                  },
                  {
                    rok: "lata 90.",
                    opis: "Biblioterapia wchodzi do programów kształcenia bibliotekarzy i pedagogów. Pojawiają się pierwsze studia podyplomowe z biblioterapii."
                  },
                  {
                    rok: "2000–2020",
                    opis: "Rozkwit biblioterapii w szkołach i bibliotekach publicznych. Publikacje Ireny Boreckiej i Wandy Szulc stają się podstawą naukową polskiej praktyki. Pierwsze scenariusze zajęć dla dzieci."
                  },
                  {
                    rok: "dziś",
                    opis: "Biblioterapia prowadzona przez bibliotekarzy, pedagogów i psychologów w całej Polsce. Rosnąca liczba wydawnictw tworzących książki z myślą o zastosowaniu biblioterapeutycznym."
                  },
                ].map((item) => (
                  <div key={item.rok} className="flex gap-4 p-5 bg-muted/30 rounded-xl border">
                    <div className="shrink-0 bg-accent text-accent-foreground rounded-lg px-3 py-1 font-bold text-sm h-fit whitespace-nowrap">
                      {item.rok}
                    </div>
                    <p className="text-sm leading-relaxed">{item.opis}</p>
                  </div>
                ))}
              </div>

              <p>
                Więcej o roli bibliotekarzy i ich kompetencjach w Polsce czytasz w artykule{" "}
                <Link href="/artykuly/bibliotekarze-jako-biblioterapeuci" className="text-primary hover:underline font-medium">
                  Bibliotekarze jako biblioterapeuci — rola i kompetencje
                </Link>.
              </p>
            </section>

            {/* 7 */}
            <section id="wspolczesnosc" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                XXI wiek — nowe kierunki biblioterapii
              </h2>

              <p>
                Współczesna biblioterapia znacząco się rozwinęła i zróżnicowała. Nowe kierunki badań i praktyki:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  {
                    tytul: "Biblioterapia cyfrowa",
                    opis: "E-booki, audiobooki i aplikacje mobilne otwierają biblioterapię dla osób z dysleksją, słabowzrocznością i ograniczonym dostępem do bibliotek."
                  },
                  {
                    tytul: "Biblioterapia online",
                    opis: "Sesje prowadzone zdalnie — szczególnie ważne podczas pandemii COVID-19, kiedy dostęp do terapii tradycyjnej był ograniczony."
                  },
                  {
                    tytul: "Poeterapia",
                    opis: "Wyodrębniony nurt biblioterapii skupiony na poezji — zarówno czytaniu, jak i pisaniu wierszy jako metodzie terapeutycznej."
                  },
                  {
                    tytul: "Narracyjna biblioterapia",
                    opis: "Połączenie biblioterapii z terapią narracyjną — przepisywanie własnej historii przez pryzmat literackich opowieści."
                  },
                  {
                    tytul: "Biblioterapia rodzinna",
                    opis: "Wspólne czytanie i omawianie książek przez całą rodzinę — budowanie komunikacji i przepracowywanie trudnych tematów."
                  },
                  {
                    tytul: "Dowody naukowe",
                    opis: "Rosnąca liczba randomizowanych badań klinicznych potwierdza skuteczność biblioterapii w depresji, lęku i zaburzeniach adaptacyjnych."
                  },
                ].map((item) => (
                  <div key={item.tytul} className="border rounded-xl p-5">
                    <h3 className="font-semibold mb-2">{item.tytul}</h3>
                    <p className="text-sm text-muted-foreground">{item.opis}</p>
                  </div>
                ))}
              </div>

              <p>
                Biblioterapia wchodzi również do nurtu <em>prescriptive reading</em> —
                przepisywania książek przez lekarzy pierwszego kontaktu. W Wielkiej Brytanii
                program{" "}
                <a
                  href="https://reading-well.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Reading Well <ExternalLink className="h-3 w-3" />
                </a>{" "}
                dostarcza listy rekomendowanych książek terapeutycznych do bibliotek publicznych
                i gabinetów lekarskich. To jeden z największych na świecie programów biblioterapii
                populacyjnej.
              </p>
            </section>

            {/* Źródła */}
            <section className="mt-12 p-6 bg-muted/30 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Źródła i literatura</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4244866/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    PubMed: History of Bibliotherapy <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://reading-well.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Reading Well — Books on Prescription (UK) <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li className="text-muted-foreground">Borecka I., <em>Biblioterapia. Teoria i praktyka</em>, Warszawa 2004</li>
                <li className="text-muted-foreground">Hynes A.M., Hynes-Berry M., <em>Bibliotherapy — The Interactive Process: A Handbook</em>, 1986</li>
                <li className="text-muted-foreground">Crothers S.M., <em>A Literary Clinic</em>, Atlantic Monthly, 1916</li>
              </ul>
            </section>

            {/* Internal links */}
            <section className="mt-8 p-6 bg-muted/20 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Czytaj dalej</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/artykuly/co-to-jest-biblioterapia", label: "Co to jest biblioterapia?" },
                  { href: "/artykuly/jak-dziala-biblioterapia", label: "Jak działa biblioterapia?" },
                  { href: "/artykuly/rodzaje-biblioterapii", label: "Rodzaje biblioterapii" },
                  { href: "/artykuly/bibliotekarze-jako-biblioterapeuci", label: "Bibliotekarze jako biblioterapeuci" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                  >
                    <BookOpen className="h-4 w-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl border-2 border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Odkryj biblioterapię w praktyce</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nasze książki i scenariusze zajęć to nowoczesna biblioterapia dostępna dla każdego —
                  rodzica, nauczyciela i terapeuty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/biblioterapia"
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
                  >
                    Scenariusze zajęć
                  </Link>
                  <Link
                    href="/ksiazki"
                    className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg"
                  >
                    Nasze książki →
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>
    </Layout>
  );
}
