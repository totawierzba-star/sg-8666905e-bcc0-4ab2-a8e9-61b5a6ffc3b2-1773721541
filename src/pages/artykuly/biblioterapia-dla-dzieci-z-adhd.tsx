import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaDlaedzieciZADHDPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia dla dzieci z ADHD — jak dostosować pracę z książką?",
    description:
      "Jak prowadzić biblioterapię z dzieckiem z ADHD? Praktyczne wskazówki dotyczące adaptacji sesji, doboru książek i technik pracy z dziećmi z nadpobudliwością.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-dla-dzieci-z-adhd-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy dzieci z ADHD mogą korzystać z biblioterapii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak. Biblioterapia wymaga jednak dostosowania formatu — krótsze sesje, ruchowe elementy, wybór książek z dynamiczną akcją i bohaterem z ADHD lub podobnymi cechami.",
        },
      },
      {
        "@type": "Question",
        name: "Jak długo powinna trwać sesja biblioterapii z dzieckiem z ADHD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zazwyczaj 15–25 minut zamiast standardowych 45–60 minut. Lepiej skrócić i skończyć na sukcesie niż przeciągać do punktu przeciążenia.",
        },
      },
      {
        "@type": "Question",
        name: "Jakie książki są najlepsze dla dzieci z ADHD w biblioterapii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Krótkie rozdziały, dynamiczna akcja, bohater z podobnymi cechami (impulsywność, roztargnienie, energia), obrazkowe lub komiksowe formaty. Unikaj długich monologów wewnętrznych i opisów.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia dla dzieci z ADHD — jak dostosować pracę z książką?"
        description="Jak prowadzić biblioterapię z dzieckiem z ADHD? Praktyczne wskazówki dotyczące adaptacji sesji, doboru książek i technik pracy z dziećmi z nadpobudliwością."
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
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia dla dzieci z ADHD</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Praktyka
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia dla dzieci z ADHD — jak dostosować pracę z książką?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Dziecko z ADHD nie jest złe, leniwe ani nieposłuszne. Ma inaczej działający mózg —
            i potrzebuje inaczej prowadzonej biblioterapii. Oto jak to zrobić skutecznie.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>11 min czytania</span>
          </div>
        </header>

        {/* Co to jest ADHD */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ADHD a czytanie — kluczowe wyzwania
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                wyzwanie: "Trudności z koncentracją",
                opis: "Utrzymanie uwagi na jednym tekście przez dłuższy czas jest prawdziwym wysiłkiem — nie brakiem chęci.",
                ikona: "🎯",
              },
              {
                wyzwanie: "Impulsywność",
                opis: "Dziecko może przerywać czytanie, zadawać pytania zanim skończy się zdanie, chcieć działać zamiast słuchać.",
                ikona: "⚡",
              },
              {
                wyzwanie: "Nadruchliwość",
                opis: "Siedzenie w bezruchu podczas czytania jest fizycznie trudne. Ciało potrzebuje ruchu, nawet podczas aktywności poznawczej.",
                ikona: "🏃",
              },
              {
                wyzwanie: "Dysregulacja emocjonalna",
                opis: "Frustracja narasta szybciej. Dziecko może gwałtownie przerwać aktywność, gdy coś jest zbyt trudne lub niezrozumiałe.",
                ikona: "🌊",
              },
              {
                wyzwanie: "Trudności z pamięcią roboczą",
                opis: "Zapamiętanie wątku, postaci i wydarzeń z dłuższego tekstu może być trudne bez dodatkowych narzędzi.",
                ikona: "🧠",
              },
              {
                wyzwanie: "Hiperfokus",
                opis: "Paradoksalnie, ADHD może też oznaczać intensywne skupienie na wybranym temacie. Dobra książka może uruchomić hiperfokus.",
                ikona: "🔍",
              },
            ].map((item) => (
              <div key={item.wyzwanie} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-3">
                <span className="text-xl">{item.ikona}</span>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.wyzwanie}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Adaptacje sesji */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak adaptować sesję biblioterapii dla dziecka z ADHD?
          </h2>
          <div className="space-y-4">
            {[
              {
                zasada: "Krótsze sesje",
                opis: "15–25 minut zamiast 45–60. Lepiej zakończyć wcześniej na sukcesie niż przeciągać do punktu frustracji. Można podzielić jedno spotkanie na kilka krótkich epizodów.",
                ikona: "⏱️",
              },
              {
                zasada: "Ruch jako narzędzie",
                opis: "Pozwól dziecku słuchać podczas chodzenia, kręcenia piłką antystresową, rysowania. Ruch nie przeszkadza — u dzieci z ADHD często pomaga w koncentracji.",
                ikona: "🏃",
              },
              {
                zasada: "Wizualizacja i notatki",
                opis: "Rysuj razem mapę postaci, oś czasu wydarzeń, schemat emocji bohatera. Wizualizacja wspiera pamięć roboczą i daje przestrzeń na ruch ręki.",
                ikona: "🗺️",
              },
              {
                zasada: "Przewidywalna struktura",
                opis: "Zawsze ta sama kolejność: rytuał otwarcia, czytanie, aktywność, domknięcie. Struktury kalendarzowe redukują lęk przed nieznanym i ułatwiają wejście w aktywność.",
                ikona: "📋",
              },
              {
                zasada: "Akceptacja przerw",
                opis: "Gdy dziecko wstaje lub zaczyna się kręcić — zrób krótką przerwę ruchową (2 min), a potem wróć. Nie walcz z ciałem dziecka.",
                ikona: "🔄",
              },
              {
                zasada: "Wybór i sprawczość",
                opis: "Daj dziecku wybór: tę czy tamtą książkę, tutaj czy tam usiądziemy, ty czytasz czy ja. Poczucie sprawczości zmniejsza opór i zwiększa zaangażowanie.",
                ikona: "🎯",
              },
            ].map((item) => (
              <div key={item.zasada} className="flex items-start gap-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-5 border border-yellow-100 dark:border-yellow-800">
                <span className="text-xl">{item.ikona}</span>
                <div>
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">{item.zasada}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dobór książek */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Czego szukać w książkach dla dzieci z ADHD?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">Szukaj</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Krótkie rozdziały (2–4 strony)</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Bohater z ADHD lub podobnymi cechami</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Dynamiczna, szybka akcja</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Dużo dialogów i humoru</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Format komiksowy lub graficzny</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Pozytywne zakończenie z realizmem</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
              <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">Unikaj</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Długich monologów wewnętrznych</li>
                <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Książek z bohaterem-ofiarą bez wyjścia</li>
                <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Gęstego tekstu bez akapitów</li>
                <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Moralizowania i dydaktyzmu</li>
                <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Bardzo wolnego tempa narracji</li>
                <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Zbyt wielu postaci i wątków</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Polecane tytuły */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane tytuły dla dzieci z ADHD
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Dzieci 5–8 lat",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Jumpy Jack i Googily", autor: "Meg Rosoff", opis: "Bohater z nadpobudliwoscia i lekkiem — prosty obrazkowy format" },
                  { tytul: "Skok", autor: "Renata Piater", opis: "O chlopcu z ADHD i jego super mocach — polskie wydanie" },
                  { tytul: "Potwor kolorow", autor: "Anna Llenas", opis: "Nauka emocji przez kolor — angaz wizualny i krotki tekst" },
                ],
              },
              {
                wiek: "Dzieci 9–12 lat",
                kolor: "bg-yellow-500",
                ksiazki: [
                  { tytul: "Dziennik cwaniaczka", autor: "Jeff Kinney", opis: "Format dziennikowy z rysunkami — idealne krotkie wpisy, bohater z chaosem glow w glowie" },
                  { tytul: "Percy Jackson i bogowie olimpijscy", autor: "Rick Riordan", opis: "Autor napisal serie z mysla o synu z ADHD i dysleksja — bohater ma obie cechy" },
                  { tytul: "Tom Gates", autor: "Liz Pichon", opis: "Rysunki, krotkie rozdzialy, humor i bohater ktory mysli skojarzeniami" },
                ],
              },
              {
                wiek: "Mlodzicz 13+",
                kolor: "bg-orange-500",
                ksiazki: [
                  { tytul: "Byc jak Maks", autor: "Howie Mandel", opis: "Autobiograficzna opowiesc o OCD i ADHD — normalizacja i humor" },
                  { tytul: "Zrozumiec ADHD nastolatka", autor: "Chris Dendy", opis: "Non-fiction dla mlodziezy o tym, jak dziala ich mozg" },
                  { tytul: "Outsiderzy", autor: "S.E. Hinton", opis: "Klasyk o poszukiwaniu tozsamosci i wykluczeniu — rezonuje z mlodymi z ADHD" },
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
                q: "Czy dzieci z ADHD mogą korzystać z biblioterapii?",
                a: "Tak. Biblioterapia wymaga jednak dostosowania formatu — krótsze sesje, ruchowe elementy, wybór książek z dynamiczną akcją i bohaterem z ADHD lub podobnymi cechami.",
              },
              {
                q: "Jak długo powinna trwać sesja biblioterapii z dzieckiem z ADHD?",
                a: "Zazwyczaj 15–25 minut zamiast standardowych 45–60 minut. Lepiej skrócić i skończyć na sukcesie niż przeciągać do punktu przeciążenia.",
              },
              {
                q: "Jakie książki są najlepsze dla dzieci z ADHD w biblioterapii?",
                a: "Krótkie rozdziały, dynamiczna akcja, bohater z podobnymi cechami (impulsywność, roztargnienie, energia), obrazkowe lub komiksowe formaty. Unikaj długich monologów wewnętrznych i opisów.",
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
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Gotowe scenariusze do pracy z dziećmi</h2>
          <p className="text-white/80 mb-6">
            W naszym narzędziowniku znajdziesz gotowe scenariusze zajęć biblioterapeutycznych — sprawdzone materiały do druku dla nauczycieli, pedagogów i rodziców.
          </p>
          <Link
            href="/biblioterapia/narzedziownik"
            className="inline-block bg-white text-yellow-700 font-bold px-8 py-3 rounded-full hover:bg-yellow-50 transition-colors"
          >
            Zobacz scenariusze
          </Link>
        </section>
      </article>
    </Layout>
  );
}
