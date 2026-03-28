import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaDlaedzieciZDysleksjaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia dla dzieci z dysleksją — jak literatura wspiera mimo trudności w czytaniu?",
    description:
      "Dysleksja nie wyklucza z biblioterapii. Dowiedz się, jak dostosować pracę z tekstem, jakie formaty wybierać i jak literatura pomaga dzieciom z trudnościami w czytaniu.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-dla-dzieci-z-dysleksja-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy dziecko z dysleksją może korzystać z biblioterapii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak. Biblioterapia nie wymaga samodzielnego czytania przez dziecko. Rodzic, nauczyciel lub terapeuta może czytać na głos — a efekt terapeutyczny pozostaje taki sam.",
        },
      },
      {
        "@type": "Question",
        name: "Jakie formaty książek są najlepsze dla dzieci z dysleksją?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Audiobooki, komiksy, książki z dużą czcionką i dużą interlinią, ilustrowane powieści graficzne. Ważne jest, by forma nie stanowiła bariery dla treści terapeutycznej.",
        },
      },
      {
        "@type": "Question",
        name: "Czy biblioterapia może pomóc dziecku z dysleksją polubić czytanie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak. Pozytywne doświadczenie emocjonalne z literaturą — niezależnie od formatu — buduje skojarzenie: czytanie to przyjemność, nie kara. Może to być punkt zwrotny w relacji dziecka z tekstem.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia dla dzieci z dysleksją — jak literatura wspiera mimo trudności w czytaniu?"
        description="Dysleksja nie wyklucza z biblioterapii. Dowiedz się, jak dostosować pracę z tekstem, jakie formaty wybierać i jak literatura pomaga dzieciom z trudnościami w czytaniu."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link href="/artykuly" className="hover:text-accent">Artykuły</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia dla dzieci z dysleksją</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Praktyka
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia dla dzieci z dysleksją — jak literatura wspiera mimo trudności w czytaniu?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Dysleksja oznacza trudność z czytaniem — nie z rozumieniem historii, empatią ani emocjami.
            Biblioterapia jest dostępna dla każdego, kto może słuchać, oglądać i myśleć.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>10 min czytania</span>
          </div>
        </header>

        {/* Dysleksja a emocje */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dysleksja a samopoczucie emocjonalne dziecka
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-6 rounded-r-xl mb-6">
            <p className="text-teal-800 dark:text-teal-200">
              Dzieci z dysleksją często doświadczają obniżonego poczucia własnej wartości,
              lęku szkolnego i frustracji. Widzą siebie jako gorsze lub głupsze, bo szkoła
              premiuje sprawność czytania. Biblioterapia może tu działać dwutorowo:
              wspierać emocjonalnie i jednocześnie budować pozytywne skojarzenia z literaturą.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { liczba: "10–15%", opis: "populacji ma dysleksję w różnym stopniu nasilenia" },
              { liczba: "60–80%", opis: "dzieci z dysleksją doświadcza problemów z poczuciem własnej wartości" },
              { liczba: "2–3x", opis: "wyższe ryzyko depresji i lęku u dzieci z nierozpoznaną dysleksją" },
            ].map((item) => (
              <div key={item.liczba} className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-5 text-center border border-teal-100 dark:border-teal-800">
                <div className="text-3xl font-black text-teal-600 dark:text-teal-400 mb-2">{item.liczba}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Adaptacje formatu */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak adaptować biblioterapię dla dziecka z dysleksją?
          </h2>
          <div className="space-y-4">
            {[
              {
                metoda: "Czytanie na głos przez dorosłego",
                opis: "Najprostsza i najskuteczniejsza adaptacja. Dziecko słucha — rodzic lub terapeuta czyta. Efekt terapeutyczny identyczny jak przy samodzielnym czytaniu.",
                ikona: "🎙️",
              },
              {
                metoda: "Audiobooki",
                opis: "Doskonała alternatywa. Dziecko może słuchać samodzielnie, w swoim tempie, z powrotem i do przodu. Biblioteki cyfrowe (np. Audioteka, Storytel) mają bogaty wybór.",
                ikona: "🎧",
              },
              {
                metoda: "Komiksy i powieści graficzne",
                opis: "Tekst jest krótszy, obraz niesie dużą część narracji. Komiks to pełnoprawna literatura — nie substytut dla dzieci, które nie radzą sobie z prozą.",
                ikona: "🖼️",
              },
              {
                metoda: "Czcionka dysleksji (OpenDyslexic)",
                opis: "Specjalna czcionka projektowana z myślą o osobach z dysleksją — grubsze podstawy liter pomagają nie mylić podobnych znaków.",
                ikona: "🔤",
              },
              {
                metoda: "Duża czcionka i duża interlinia",
                opis: "Tekst z większym rozmiarem czcionki (min. 14pt), dużą interlinią i krótkimi akapitami jest znacznie łatwiej śledzić.",
                ikona: "📏",
              },
              {
                metoda: "Zakładka lub linijka podczas czytania",
                opis: "Prosta pomoc techniczna: zakładka pod czytaną linią pomaga utrzymać wzrok na właściwym miejscu i nie gubić wiersza.",
                ikona: "📌",
              },
            ].map((item) => (
              <div key={item.metoda} className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="text-2xl">{item.ikona}</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.metoda}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Co biblioterapia daje dziecku z dysleksją */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Co biblioterapia daje dziecku z dysleksją — poza emocjami?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                korzysc: "Buduje tożsamość czytelniczą",
                opis: "Dziecko odkrywa, że może czerpać przyjemność z historii — bez perfekcyjnego czytania. To zmienia samoobraz z nie-czytelnika na czytelnika.",
              },
              {
                korzysc: "Normalizuje dysleksję",
                opis: "Bohaterowie z dysleksją lub innymi trudnościami w nauce (Percy Jackson, Holden Caulfield, Matylda) pokazują, że wyjątkowość to nie słabość.",
              },
              {
                korzysc: "Buduje słownik emocjonalny",
                opis: "Słuchanie bogatego języka literackiego — nawet bez czytania — rozszerza słownictwo i kompetencje komunikacyjne.",
              },
              {
                korzysc: "Daje doświadczenie sukcesu",
                opis: "Pozytywna sesja biblioterapeutyczna to rzadka lekcja, na której dziecko z dysleksją może czuć się kompetentne i spełnione.",
              },
            ].map((item) => (
              <div key={item.korzysc} className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-5 border border-teal-100 dark:border-teal-800">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2">{item.korzysc}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Polecane tytuły */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki dla dzieci z dysleksją
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Dzieci 5–9 lat",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Przeniesiony", autor: "Astrid Lindgren (powesc graficzna)", opis: "Krotki tekst, duze ilustracje, mozliwosc sluchania" },
                  { tytul: "El Deafo", autor: "Cece Bell", opis: "Komiks o zyciu z niedoslyszeniem — o odmiennosci i sile" },
                  { tytul: "Wielka ksiazka uczu", autor: "Tom Percival", opis: "Seria krotkich ksiazek o konkretnych emocjach — krotki tekst, duze ilustracje" },
                ],
              },
              {
                wiek: "Dzieci 10–13 lat",
                kolor: "bg-blue-500",
                ksiazki: [
                  { tytul: "Percy Jackson i bogowie olimpijscy", autor: "Rick Riordan", opis: "Bohater ma dysleksje i ADHD — autor celowo to zaprojektowal. Seria dostepna jako audiobook" },
                  { tytul: "Big Nate", autor: "Lincoln Peirce", opis: "Format komiksowo-prozowy, krotkie rozdzialy, bohater z trudnosciami szkolnymi" },
                  { tytul: "Diary of a Wimpy Kid", autor: "Jeff Kinney", opis: "Dziennikowy format z rysunkami — minimalny dlogi tekst, maksymalny humor" },
                ],
              },
              {
                wiek: "Mlodzicz 14+",
                kolor: "bg-teal-500",
                ksiazki: [
                  { tytul: "Outsiderzy", autor: "S.E. Hinton", opis: "Pisane przez 16-latke — proste zdania, silne emocje, rezonuje z mlodymi z trudnosciami" },
                  { tytul: "Forrest Gump", autor: "Winston Groom", opis: "Bohater z niepelnosprawnoscia intelektualna jako sila i cieplo — nie jako problem" },
                  { tytul: "Audiobook: Maly Ksiaze", autor: "Antoine de Saint-Exupery", opis: "Klasyk dostepny w swietnym wykonaniu audiobookowym — poetycki jezyk przez sluch" },
                ],
              },
            ].map((sekcja) => (
              <div key={sekcja.wiek}>
                <div className={`${sekcja.kolor} text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3`}>
                  {sekcja.wiek}
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {sekcja.ksiazki.map((k) => (
                    <div key={k.tytul} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{k.tytul}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{k.autor}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{k.opis}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Najczęstsze pytania
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Czy dziecko z dysleksją może korzystać z biblioterapii?",
                a: "Tak. Biblioterapia nie wymaga samodzielnego czytania przez dziecko. Rodzic, nauczyciel lub terapeuta może czytać na głos — a efekt terapeutyczny pozostaje taki sam.",
              },
              {
                q: "Jakie formaty książek są najlepsze dla dzieci z dysleksją?",
                a: "Audiobooki, komiksy, książki z dużą czcionką i dużą interlinią, ilustrowane powieści graficzne. Ważne jest, by forma nie stanowiła bariery dla treści terapeutycznej.",
              },
              {
                q: "Czy biblioterapia może pomóc dziecku z dysleksją polubić czytanie?",
                a: "Tak. Pozytywne doświadczenie emocjonalne z literaturą — niezależnie od formatu — buduje skojarzenie: czytanie to przyjemność, nie kara. Może to być punkt zwrotny w relacji dziecka z tekstem.",
              },
            ].map((item, i) => (
              <details key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  {item.q}
                </summary>
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Twoje dziecko ma dysleksję?</h2>
          <p className="text-teal-100 mb-6">
            Skontaktuj się z nami — pomożemy dobrać odpowiednie formy wsparcia biblioterapeutycznego
            dostosowane do potrzeb i możliwości Twojego dziecka.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors"
          >
            Umów konsultację
          </Link>
        </section>
      </article>
    </Layout>
  );
}
