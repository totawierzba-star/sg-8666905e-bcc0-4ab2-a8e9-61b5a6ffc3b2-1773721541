import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Heart, Lightbulb, Users, History, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CoToJestBiblioterapiaPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Co to jest biblioterapia? Definicja, historia i zastosowanie",
    "description": "Czym jest biblioterapia? Poznaj definicję, historię i zastosowania tej metody terapeutycznej, która wykorzystuje literaturę do wspierania zdrowia psychicznego dzieci i dorosłych.",
    "author": { "@type": "Organization", "name": "Biblioterapia.org" },
    "publisher": { "@type": "Organization", "name": "Biblioterapia.org", "url": "https://biblioterapia.org" },
    "url": "https://biblioterapia.org/artykuly/co-to-jest-biblioterapia",
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "inLanguage": "pl",
    "mainEntityOfPage": "https://biblioterapia.org/artykuly/co-to-jest-biblioterapia",
    "image": "https://biblioterapia.org/uploads/co-to-jest-biblioterapia-miniatura.jpg"
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Co to jest biblioterapia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biblioterapia to metoda terapeutyczna wykorzystująca celowo dobrane teksty literackie — książki, opowiadania, poezję — do wspierania zdrowia emocjonalnego, psychicznego i społecznego. Przez kontakt z literaturą czytelnik identyfikuje się z bohaterami, przepracowuje własne emocje i zyskuje nowe perspektywy."
        }
      },
      {
        "@type": "Question",
        "name": "Czy biblioterapia jest skuteczna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, biblioterapia ma udokumentowaną skuteczność w badaniach naukowych, szczególnie w pracy z dziećmi przeżywającymi żałobę, lęk, niskie poczucie własnej wartości oraz trudności w relacjach rówieśniczych. Działa poprzez cztery mechanizmy: identyfikację, projekcję, katharsis i wgląd."
        }
      },
      {
        "@type": "Question",
        "name": "Dla kogo jest biblioterapia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biblioterapia jest dostępna dla dzieci, młodzieży i dorosłych. Sprawdza się zarówno w profilaktyce emocjonalnej (biblioterapia rozwojowa), jak i w pracy klinicznej z osobami przeżywającymi kryzys psychiczny lub chorobę (biblioterapia kliniczna)."
        }
      },
      {
        "@type": "Question",
        "name": "Kto prowadzi biblioterapię?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biblioterapię prowadzą wykwalifikowani biblioterapeuci — specjaliści z wykształceniem pedagogicznym, psychologicznym lub bibliotekarskim, po ukończeniu dodatkowego szkolenia z biblioterapii. W Polsce coraz więcej bibliotekarzy, pedagogów i psychologów zdobywa te kompetencje."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Co to jest biblioterapia? Definicja, historia i zastosowanie"
        description="Czym jest biblioterapia? Poznaj definicję, historię i zastosowania tej metody, która wykorzystuje literaturę do wspierania zdrowia psychicznego dzieci i dorosłych."
        url="https://biblioterapia.org/artykuly/co-to-jest-biblioterapia"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <article className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/artykuly"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do artykułów
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Podstawy biblioterapii
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Co to jest biblioterapia? Definicja, historia i zastosowanie
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Biblioterapia to jedna z najstarszych i wciąż niedocenianych metod wspierania zdrowia
              psychicznego. Dowiedz się, czym jest, skąd pochodzi i jak konkretnie działa —
              w przypadku dzieci, młodzieży i dorosłych.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~9 minut</span>
              <span>🎯 Poziom: Dla każdego</span>
              <span>🗓️ Zaktualizowano: marzec 2026</span>
            </div>
          </header>

          {/* Spis treści */}
          <nav className="bg-muted/30 border rounded-xl p-6 mb-12" aria-label="Spis treści">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Spis treści
            </h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#definicja" className="text-primary hover:underline">1. Definicja biblioterapii</a></li>
              <li><a href="#historia" className="text-primary hover:underline">2. Historia biblioterapii — od starożytności do dziś</a></li>
              <li><a href="#jak-dziala" className="text-primary hover:underline">3. Jak działa biblioterapia?</a></li>
              <li><a href="#rodzaje" className="text-primary hover:underline">4. Rodzaje biblioterapii</a></li>
              <li><a href="#zastosowanie" className="text-primary hover:underline">5. Zastosowania — kiedy pomaga?</a></li>
              <li><a href="#kto-prowadzi" className="text-primary hover:underline">6. Kto prowadzi biblioterapię?</a></li>
              <li><a href="#faq" className="text-primary hover:underline">7. Najczęstsze pytania (FAQ)</a></li>
            </ol>
          </nav>

          {/* Treść artykułu */}
          <div className="prose prose-lg max-w-none space-y-12">

            {/* Sekcja 1 — Definicja */}
            <section id="definicja" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Definicja biblioterapii
              </h2>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <p className="text-blue-900 dark:text-blue-100 font-medium mb-2">
                  <strong>Definicja:</strong>
                </p>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Biblioterapia</strong> (z gr. <em>biblion</em> — książka + <em>therapeia</em> — leczenie)
                  to metoda terapeutyczna polegająca na celowym doborze i wykorzystaniu tekstów literackich
                  w celu wspierania zdrowia emocjonalnego, psychicznego i społecznego. Czytelnik przez kontakt
                  z literaturą identyfikuje się z bohaterami, przepracowuje własne emocje i zyskuje nowe
                  perspektywy na swoje doświadczenia.
                </p>
              </div>

              <p>
                Biblioterapia nie jest zwykłym czytaniem dla przyjemności. To <strong>celowy, prowadzony przez specjalistę
                proces terapeutyczny</strong>, w którym odpowiednio dobrana książka pełni rolę narzędzia wspierającego
                rozwój emocjonalny, przepracowywanie trudnych doświadczeń lub leczenie zaburzeń psychicznych.
              </p>

              <p>
                Kluczowe słowo to <em>celowość</em>. W biblioterapii nie chodzi o to, żeby dziecko przeczytało
                jakąkolwiek książkę — chodzi o to, by konkretna historia spotkała się z konkretnym przeżyciem
                czytelnika w odpowiednim momencie.
              </p>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  💡 Krótko mówiąc:
                </p>
                <p className="text-amber-800 dark:text-amber-200">
                  Biblioterapia to spotkanie właściwej książki z właściwą osobą we właściwym czasie —
                  z intencją uzdrowienia lub wzmocnienia.
                </p>
              </div>
            </section>

            {/* Sekcja 2 — Historia */}
            <section id="historia" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <History className="h-6 w-6 text-primary" />
                </div>
                Historia biblioterapii — od starożytności do dziś
              </h2>

              <p>
                Idea leczenia słowem i opowieścią jest stara jak sama literatura. Już w starożytnej
                Grecji biblioteki określano napisem: <em>„Lekarstwo dla duszy"</em>. Pierwsze znane
                celowe zastosowanie tekstów w celach terapeutycznych pochodzi z Egiptu faraońskiego —
                kapłani czytali chorym teksty religijne w celu poprawy stanu psychicznego.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-8">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                  <p className="font-bold text-purple-900 dark:text-purple-100 mb-1">Starożytność</p>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Biblioteki greckie opisywane jako „lekarstwo dla duszy". Egipskie rytuały
                    lecznicze z użyciem tekstów sakralnych.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                  <p className="font-bold text-blue-900 dark:text-blue-100 mb-1">XIX wiek</p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Szpitale psychiatryczne w Europie i USA wprowadzają biblioteki dla pacjentów
                    jako element leczenia. Dr Benjamin Rush opisuje pozytywne efekty czytania.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
                  <p className="font-bold text-green-900 dark:text-green-100 mb-1">XX wiek</p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Samuel Crothers wprowadza termin <em>bibliotherapy</em> (1916).
                    Metoda zyskuje podstawy naukowe i wchodzi do pracy psychologicznej.
                  </p>
                </div>
              </div>

              <p>
                Przełom nastąpił w 1916 roku, gdy amerykański pastor i eseista <strong>Samuel McChord Crothers</strong>
                użył po raz pierwszy słowa <em>bibliotherapy</em> w artykule dla magazynu „Atlantic Monthly".
                Opisał w nim, jak lekarze mogliby „przepisywać" chorym odpowiednie książki tak jak lekarstwa.
              </p>

              <p>
                W Polsce biblioterapia jako zorganizowana dyscyplina zaczęła się rozwijać w latach 70. XX wieku,
                głównie w środowiskach bibliotekarskich. Dziś prowadzona jest przez wykwalifikowanych specjalistów
                w szkołach, bibliotekach, szpitalach i gabinetach terapeutycznych. Więcej o polskich
                doświadczeniach piszemy w artykule{" "}
                <Link href="/artykuly/bibliotekarze-jako-biblioterapeuci" className="text-primary hover:underline font-medium">
                  Bibliotekarze jako biblioterapeuci
                </Link>.
              </p>
            </section>

            {/* Sekcja 3 — Jak działa */}
            <section id="jak-dziala" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                Jak działa biblioterapia?
              </h2>

              <p>
                Biblioterapia opiera się na czterech psychologicznych mechanizmach, które aktywują się
                podczas kontaktu z odpowiednio dobraną literaturą:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex gap-4 p-5 bg-muted/30 rounded-xl border">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Identyfikacja</h3>
                    <p className="text-muted-foreground text-sm">
                      Czytelnik rozpoznaje siebie w bohaterze książki — jego sytuacji, emocjach, dylematach.
                      Dzięki temu czuje się mniej sam ze swoim problemem.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-muted/30 rounded-xl border">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Projekcja</h3>
                    <p className="text-muted-foreground text-sm">
                      Czytelnik „przenosi" swoje emocje i konflikty na postać z książki, co pozwala
                      omówić je bez bezpośredniego mówienia o sobie — bezpieczny dystans.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-muted/30 rounded-xl border">
                  <div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Katharsis</h3>
                    <p className="text-muted-foreground text-sm">
                      Przez emocje wzbudzone podczas czytania dochodzi do oczyszczenia — uwolnienia
                      tłumionych uczuć, napięcia i lęku. Czytelnik „przeżywa" coś trudnego w bezpiecznych warunkach.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-muted/30 rounded-xl border">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Wgląd</h3>
                    <p className="text-muted-foreground text-sm">
                      Po przepracowaniu emocji czytelnik zyskuje nowe rozumienie swojej sytuacji,
                      relacji lub zachowania. To moment, gdy zmiana staje się możliwa.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Szczegółowy opis każdego z tych mechanizmów znajdziesz w artykule{" "}
                <Link href="/artykuly/jak-dziala-biblioterapia" className="text-primary hover:underline font-medium">
                  Jak działa biblioterapia? Mechanizmy terapeutycznego działania książek
                </Link>.
              </p>
            </section>

            {/* Sekcja 4 — Rodzaje */}
            <section id="rodzaje" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Rodzaje biblioterapii
              </h2>

              <p>
                Biblioterapia nie jest jednorodna — wyróżniamy trzy główne jej rodzaje, które różnią
                się celem, grupą odbiorców i sposobem prowadzenia:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-primary">Kliniczna</h3>
                  <p className="text-sm text-muted-foreground">
                    Prowadzona przez terapeutę lub psychiatrę. Skierowana do osób z zaburzeniami
                    psychicznymi, w trakcie leczenia. Jest częścią procesu terapeutycznego.
                  </p>
                </div>
                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-primary">Rozwojowa</h3>
                  <p className="text-sm text-muted-foreground">
                    Profilaktyczna i edukacyjna. Skierowana do zdrowych dzieci i dorosłych
                    w celu wzmacniania kompetencji emocjonalnych i społecznych.
                  </p>
                </div>
                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-primary">Instytucjonalna</h3>
                  <p className="text-sm text-muted-foreground">
                    Prowadzona w bibliotekach, szkołach, domach pomocy społecznej.
                    Łączy pracę bibliotekarza z elementami wsparcia emocjonalnego.
                  </p>
                </div>
              </div>

              <p>
                Pełne porównanie każdego rodzaju wraz z przykładami znajdziesz w artykule{" "}
                <Link href="/artykuly/rodzaje-biblioterapii" className="text-primary hover:underline font-medium">
                  Rodzaje biblioterapii — kliniczna, rozwojowa i instytucjonalna
                </Link>.
              </p>
            </section>

            {/* Sekcja 5 — Zastosowania */}
            <section id="zastosowanie" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                Zastosowania — kiedy biblioterapia pomaga?
              </h2>

              <p>
                Biblioterapia jest stosowana w szerokim spektrum sytuacji — od codziennej profilaktyki
                emocjonalnej, przez wsparcie w kryzysie, aż po terapię zaburzeń klinicznych.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">U dzieci i młodzieży:</h3>
                  <ul className="space-y-2">
                    {[
                      "Żałoba i strata (śmierć bliskiej osoby, zwierzęcia)",
                      "Rozwód i rozstanie rodziców",
                      "Lęk szkolny i problemy rówieśnicze",
                      "Niska samoocena i trudności emocjonalne",
                      "Choroba (własna lub bliskiej osoby)",
                      "ADHD, spektrum autyzmu — budowanie empatii",
                      "Trudne tematy: seksualność, ciało, różnorodność",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">U dorosłych:</h3>
                  <ul className="space-y-2">
                    {[
                      "Depresja i stany lękowe",
                      "Kryzys życiowy (utrata pracy, rozwód, choroba)",
                      "Żałoba",
                      "Trudności w relacjach",
                      "Praca nad tożsamością i poczuciem sensu",
                      "Wsparcie w chorobie przewlekłej",
                      "Samotność i izolacja (np. seniorzy)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p>
                Na biblioterapia.org skupiamy się przede wszystkim na pracy z dziećmi. Nasze{" "}
                <Link href="/ksiazki" className="text-primary hover:underline font-medium">
                  książki do zadań specjalnych
                </Link>{" "}
                zostały dobrane tak, by pomagać dzieciom i rodzicom w najtrudniejszych momentach
                życia — od żałoby, przez rozwód, po chorobę i różnorodność.
              </p>
            </section>

            {/* Sekcja 6 — Kto prowadzi */}
            <section id="kto-prowadzi" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Kto prowadzi biblioterapię?
              </h2>

              <p>
                Biblioterapia wymaga specjalistycznego przygotowania. W Polsce prowadzą ją:
              </p>

              <ul className="space-y-3 my-4">
                {[
                  { kto: "Bibliotekarze z kwalifikacjami biblioterapeutycznymi", gdzie: "biblioteki publiczne, szkolne" },
                  { kto: "Pedagodzy szkolni po kursach biblioterapii", gdzie: "szkoły, świetlice terapeutyczne" },
                  { kto: "Psycholodzy i psychoterapeuci", gdzie: "gabinety terapeutyczne, szpitale" },
                  { kto: "Logopedzi i terapeuci zajęciowi", gdzie: "centra rehabilitacyjne, domy opieki" },
                ].map((item) => (
                  <li key={item.kto} className="flex gap-3 p-4 bg-muted/30 rounded-xl border">
                    <span className="text-primary mt-0.5 font-bold">→</span>
                    <div>
                      <p className="font-medium">{item.kto}</p>
                      <p className="text-sm text-muted-foreground">{item.gdzie}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p>
                Kwestię kompetencji i roli bibliotekarzy jako biblioterapeutów omawiamy szczegółowo
                w artykule{" "}
                <Link href="/artykuly/bibliotekarze-jako-biblioterapeuci" className="text-primary hover:underline font-medium">
                  Bibliotekarze jako biblioterapeuci — rola i kompetencje
                </Link>.
              </p>

              <div className="bg-muted/30 border rounded-xl p-6 mt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Biblioterapia a psychoterapia:</strong> Biblioterapia nie zastępuje psychoterapii.
                  To narzędzie wspomagające i profilaktyczne. W przypadku poważnych zaburzeń psychicznych
                  konieczna jest konsultacja z psychiatrą lub psychologiem klinicznym. Więcej o różnicach
                  czytasz w artykule{" "}
                  <Link href="/artykuly/biblioterapia-vs-psychoterapia" className="text-primary hover:underline font-medium">
                    Biblioterapia a psychoterapia — czym się różnią?
                  </Link>
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-8">
                Najczęstsze pytania o biblioterapię
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Czy biblioterapia działa bez terapeuty?",
                    a: "Czytanie wartościowych książek z dzieckiem zawsze przynosi korzyści. Jednak pełna biblioterapia — z celowym doborem tekstu i prowadzeniem rozmowy po lekturze — wymaga udziału przeszkolonego specjalisty lub przynajmniej świadomego rodzica korzystającego z opracowanych scenariuszy zajęć."
                  },
                  {
                    q: "Od jakiego wieku działa biblioterapia?",
                    a: "Już od niemowlęctwa — rytm, dźwięk i obraz w książkach obrazkowych mają działanie uspokajające i stymulujące. Biblioterapia jako metoda pracy z emocjami jest najskuteczniejsza u dzieci od 3–4 roku życia wzwyż, gdy dziecko rozumie narrację i może się identyfikować z bohaterem."
                  },
                  {
                    q: "Ile trwa biblioterapia?",
                    a: "To zależy od celu i rodzaju biblioterapii. Pojedyncza sesja trwa zazwyczaj 45–90 minut. Cykl terapeutyczny — od kilku tygodni do kilku miesięcy. Biblioterapia rozwojowa (w szkole lub bibliotece) może być prowadzona przez cały rok szkolny."
                  },
                  {
                    q: "Czy biblioterapia jest refundowana przez NFZ?",
                    a: "W Polsce biblioterapia nie jest odrębną pozycją w koszyku świadczeń NFZ. Może być jednak elementem terapii prowadzonej przez psychologa lub psychiatrę, częściowo refundowanej. Wiele bibliotek i szkół oferuje zajęcia biblioterapeutyczne bezpłatnie."
                  },
                ].map((item) => (
                  <div key={item.q} className="border rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-3">{item.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Linki zewnętrzne */}
            <section className="mt-12 p-6 bg-muted/30 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Źródła i literatura</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.who.int/health-topics/mental-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    WHO — Mental Health <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4244866/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    PubMed: Bibliotherapy for Children — przegląd badań <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">
                    Borecka I., <em>Biblioterapia. Teoria i praktyka</em>, Warszawa 2004
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground">
                    Szulc W., <em>Kulturoterapia. Wykorzystanie sztuki i działalności kulturalno-oświatowej w lecznictwie</em>, Poznań 1994
                  </span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl border-2 border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Chcesz zacząć przygodę z biblioterapią?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Sprawdź nasze książki dobrane do trudnych tematów: żałoby, rozwodu, emocji i choroby.
                  Każda ma opracowany scenariusz zajęć biblioterapeutycznych.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/ksiazki"
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
                  >
                    Zobacz nasze książki
                  </Link>
                  <Link
                    href="/biblioterapia"
                    className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg"
                  >
                    Scenariusze zajęć →
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
