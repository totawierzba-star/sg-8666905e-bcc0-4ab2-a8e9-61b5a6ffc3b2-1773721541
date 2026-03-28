import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaAAgresjaUDzieciPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia a agresja u dzieci — jak książki pomagają okiełznać złość?",
    description:
      "Jak biblioterapia pomaga dzieciom radzić sobie z agresją? Mechanizmy, polecane książki i techniki pracy z dzieckiem, które wyraża złość przez agresywne zachowanie.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-a-agresja-u-dzieci-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy biblioterapia pomaga na agresję u dzieci?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, jako element kompleksowego podejścia. Biblioterapia nie zastępuje terapii, ale pomaga dziecku rozpoznać emocje, które stoją za agresją, i uczy konstruktywnych sposobów ich wyrażania.",
        },
      },
      {
        "@type": "Question",
        name: "Od jakiego wieku można stosować biblioterapię przy agresji?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Już od 3. roku życia — przy użyciu prostych historyjek obrazkowych o bohaterach, którzy czują złość i uczą się ją wyrażać bez przemocy.",
        },
      },
      {
        "@type": "Question",
        name: "Co robić, gdy dziecko reaguje agresywnie podczas czytania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zatrzymaj się, nazwij emocję dziecka bez oceniania, daj mu czas na uspokojenie. Nie kontynuuj czytania, gdy dziecko jest w stanie silnego pobudzenia — poczekaj na moment regulacji.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia a agresja u dzieci — jak książki pomagają okiełznać złość?"
        description="Jak biblioterapia pomaga dzieciom radzić sobie z agresją? Mechanizmy, polecane książki i techniki pracy z dzieckiem, które wyraża złość przez agresywne zachowanie."
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
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia a agresja u dzieci</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Terapia
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia a agresja u dzieci — jak książki pomagają okiełznać złość?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Agresja to nie charakter dziecka — to często jedyne narzędzie, jakim dysponuje,
            by wyrazić coś, czego jeszcze nie umie nazwać. Biblioterapia pomaga zbudować nowy słownik emocji.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>10 min czytania</span>
          </div>
        </header>

        {/* Co kryje się za agresją */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Co kryje się za agresją dziecka?
          </h2>
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-xl mb-6">
            <p className="text-orange-800 dark:text-orange-200 font-medium">
              Agresja rzadko jest problemem samym w sobie. Najczęściej jest objawem — sygnałem,
              że dziecko doświadcza czegoś trudnego i nie ma innych narzędzi, by to wyrazić.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { przyczyna: "Frustracja i bezsilność", opis: "Dziecko nie potrafi osiągnąć celu lub czuje, że nie ma wpływu na sytuację" },
              { przyczyna: "Lęk maskowany złością", opis: "Gniew jest socjalnie bezpieczniejszy niż strach — dzieci uczą się go szybko" },
              { przyczyna: "Nieumiejętność nazywania emocji", opis: "Brak słów na to, co czuje — ciało reaguje zanim myśl nadejdzie" },
              { przyczyna: "Modelowanie środowiskowe", opis: "Dziecko naśladuje wzorce agresji z domu, grupy rówieśniczej lub mediów" },
              { przyczyna: "Niezaspokojone potrzeby", opis: "Głód uwagi, bliskości, bezpieczeństwa — agresja jako wołanie o pomoc" },
              { przyczyna: "Dysregulacja sensoryczna", opis: "Szczególnie przy ADHD, SPD, ASD — układ nerwowy reaguje nadmiernie na bodźce" },
            ].map((item) => (
              <div key={item.przyczyna} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.przyczyna}</div>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jak biblioterapia pomaga */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak biblioterapia działa przy agresji?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                ikona: "🔤",
                tytul: "Buduje słownik emocji",
                opis: "Dziecko uczy się nazywać złość, frustrację, rozczarowanie — nie tylko jednym słowem, ale z niuansami. Nazwa emocji to pierwszy krok do jej regulacji.",
              },
              {
                ikona: "👥",
                tytul: "Modeluje alternatywne strategie",
                opis: "Bohater też się złości — ale robi coś zamiast bić. Dziecko obserwuje inne wyjście i może je naśladować.",
              },
              {
                ikona: "🪞",
                tytul: "Daje zdystansowane lustro",
                opis: "Dziecko widzi swoje zachowanie w zachowaniu postaci z bezpiecznego dystansu. To ogranicza obronność i umożliwia wgląd.",
              },
              {
                ikona: "🧘",
                tytul: "Reguluje pobudzenie",
                opis: "Czytanie, szczególnie w stałym miejscu i czasie, staje się rytuałem deeskalacyjnym. Spokojny głos, ciepło, ciałooparta bliskość — to wszystko reguluje układ nerwowy.",
              },
            ].map((item) => (
              <div key={item.tytul} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="text-2xl mb-3">{item.ikona}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.tytul}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Techniki pracy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Techniki biblioterapeutyczne przy agresji
          </h2>
          <div className="space-y-4">
            {[
              {
                technika: "Mapa ciała złości",
                opis: "Po przeczytaniu sceny, w której bohater się złości, dziecko zaznacza na rysunku ciała, gdzie czuje złość fizycznie. To ćwiczenie buduje połączenie między emocją a odczuciem cielesnym.",
                poziom: "3+ lat",
              },
              {
                technika: "Thermometr emocji",
                opis: "Dziecko ocenia intensywność złości bohatera w skali 1–10. Potem porównuje z własnym doświadczeniem. Uczy się gradacji emocji — złość ma wiele odcieni.",
                poziom: "6+ lat",
              },
              {
                technika: "Co bohater mógł zrobić inaczej?",
                opis: "Burza mózgów alternatywnych reakcji bohatera. Dziecko sam proponuje rozwiązania — co buduje poczucie sprawczości i planowanie zachowania.",
                poziom: "7+ lat",
              },
              {
                technika: "List od bohatera",
                opis: "Dziecko pisze lub dyktuje list od złoszczącego się bohatera do osoby, na którą był zły. Eksternalizacja konfliktu przez narrację trzecioosobową.",
                poziom: "9+ lat",
              },
              {
                technika: "Bibliodrama z deeskalacją",
                opis: "Odegranie sceny konfliktu z książki ze stopniowym wprowadzaniem technik deeskalacyjnych (stop, oddech, krok w tył). Ucieleśnianie alternatywnych reakcji.",
                poziom: "8+ lat",
              },
            ].map((item) => (
              <div key={item.technika} className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold px-2 py-1 rounded-full shrink-0 mt-0.5">
                  {item.poziom}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.technika}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Polecane książki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki przy pracy z agresją
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Dzieci 3–6 lat",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Gdzie mieszkaja dzikie stwory", autor: "Maurice Sendak", opis: "Klasyk — zlosc przetworzona przez wyobraznie, powrot do bezpieczenstwa" },
                  { tytul: "Mam zlosc!", autor: "Mireille d'Allance", opis: "Prosty obrazkowy przewodnik po tym, jak wyglada zlosc i jak ja wypuscic" },
                  { tytul: "Potwor kolorow", autor: "Anna Llenas", opis: "Nauka nazywania i rozrozniania emocji przez kolor — wyjatkowo skuteczne narzedzie" },
                ],
              },
              {
                wiek: "Dzieci 7–10 lat",
                kolor: "bg-blue-500",
                ksiazki: [
                  { tytul: "Maks i jego zlosc", autor: "Rolf Merkle", opis: "Pozycja psychoedukacyjna w formie historyjki — nauka samoregulacji" },
                  { tytul: "Dziennik cwaniaczka", autor: "Jeff Kinney", opis: "Humor i ironia jako konstruktywne narzedzie radzenia sobie z frustracjami" },
                  { tytul: "Cudowny chlopak", autor: "R.J. Palacio", opis: "O empatii jako antidotum na agresje i wykluczenie spoleczne" },
                ],
              },
              {
                wiek: "Dzieci 11+",
                kolor: "bg-orange-500",
                ksiazki: [
                  { tytul: "Serce i mozg", autor: "Nick Toon", opis: "Komiks o regulacji emocjonalnej i konflikcie rozumu ze zloscaja — z humorem" },
                  { tytul: "Obcy w miescie", autor: "Rafal Kosik", opis: "O poszukiwaniu tozsamosci i destrukcyjnosci nieprzetworzonej zlosci" },
                  { tytul: "Gniew", autor: "Gary D. Chapman", opis: "Dla starszej mlodziezy i rodzicow — o rozroznieniu pieknej i toksycznej zlosci" },
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
                q: "Czy biblioterapia pomaga na agresję u dzieci?",
                a: "Tak, jako element kompleksowego podejścia. Biblioterapia nie zastępuje terapii, ale pomaga dziecku rozpoznać emocje, które stoją za agresją, i uczy konstruktywnych sposobów ich wyrażania.",
              },
              {
                q: "Od jakiego wieku można stosować biblioterapię przy agresji?",
                a: "Już od 3. roku życia — przy użyciu prostych historyjek obrazkowych o bohaterach, którzy czują złość i uczą się ją wyrażać bez przemocy.",
              },
              {
                q: "Co robić, gdy dziecko reaguje agresywnie podczas czytania?",
                a: "Zatrzymaj się, nazwij emocję dziecka bez oceniania, daj mu czas na uspokojenie. Nie kontynuuj czytania, gdy dziecko jest w stanie silnego pobudzenia — poczekaj na moment regulacji.",
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
        <section className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Twoje dziecko wyraża emocje przez agresję?</h2>
          <p className="text-orange-100 mb-6">
            Skontaktuj się z nami — pomożemy dobrać odpowiednie podejście
            biblioterapeutyczne dla Twojego dziecka.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-orange-700 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors"
          >
            Umów konsultację
          </Link>
        </section>
      </article>
    </Layout>
  );
}
