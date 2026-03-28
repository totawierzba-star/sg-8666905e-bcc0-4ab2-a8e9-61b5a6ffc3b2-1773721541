import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaALekSzkolnyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia a lęk szkolny — jak książki pomagają dzieciom?",
    description:
      "Lęk szkolny dotyka co piąte dziecko. Sprawdź, jak biblioterapia pomaga przepracować strach przed szkołą, sprawdzianami i odrzuceniem rówieśniczym.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-a-lek-szkolny-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czym różni się lęk szkolny od zwykłej niechęci do szkoły?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lęk szkolny to intensywny, utrzymujący się strach przed szkołą lub sytuacjami szkolnymi, często z objawami fizycznymi (ból brzucha, bóle głowy). Niechęć do szkoły to przemijający brak motywacji bez tak silnej reakcji emocjonalnej.",
        },
      },
      {
        "@type": "Question",
        name: "Czy biblioterapia może wyleczyć lęk szkolny?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biblioterapia nie zastępuje psychoterapii ani diagnozy. Może jednak skutecznie wspierać dziecko — normalizować jego doświadczenie, uczyć strategii radzenia sobie i tworzyć przestrzeń do rozmowy o lęku.",
        },
      },
      {
        "@type": "Question",
        name: "Od jakiego wieku można stosować biblioterapię przy lęku szkolnym?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Już od wieku przedszkolnego — używając prostych obrazkowych historii o bohaterach, którzy boją się nowego miejsca lub nowych dzieci. W praktyce najczęściej pracuje się z dziećmi od 5. roku życia.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia a lęk szkolny — jak książki pomagają dzieciom?"
        description="Lęk szkolny dotyka co piąte dziecko. Sprawdź, jak biblioterapia pomaga przepracować strach przed szkołą, sprawdzianami i odrzuceniem rówieśniczym."
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
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia a lęk szkolny</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Terapia
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia a lęk szkolny — jak książki pomagają dzieciom?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Ból brzucha w niedzielny wieczór, płacz przy wejściu do klasy, odmawianie wyjścia z domu.
            Lęk szkolny to realne cierpienie — i biblioterapia może być jednym z pierwszych kroków do pomocy.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>9 min czytania</span>
          </div>
        </header>

        {/* Skala problemu */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { liczba: "20%", opis: "dzieci doświadcza objawów lęku szkolnego w ciągu roku szkolnego" },
              { liczba: "5–10%", opis: "dzieci ma fobię szkolną wymagającą interwencji specjalistycznej" },
              { liczba: "1. klasa", opis: "i przejście do szkoły średniej to szczytowe momenty nasilenia lęku" },
            ].map((item) => (
              <div key={item.liczba} className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 text-center border border-blue-100 dark:border-blue-800">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">{item.liczba}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rodzaje lęku */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Rodzaje lęku szkolnego — co może niepokoić?
          </h2>
          <div className="space-y-3">
            {[
              {
                typ: "Lęk przed oceną",
                opis: "Strach przed złą oceną, sprawdzianem, odpytywaniem przy tablicy. Dziecko odczuwa paraliż przy każdej sytuacji, gdzie jest oceniane.",
                kolor: "border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-800",
              },
              {
                typ: "Lęk społeczny (rówieśniczy)",
                opis: "Strach przed odrzuceniem, ośmieszeniem, byciem innym. Unikanie stołówki, przerw, wspólnych zajęć.",
                kolor: "border-purple-300 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800",
              },
              {
                typ: "Lęk separacyjny",
                opis: "Niemożność rozstania z rodzicem. Częsty u dzieci 5–8 lat, szczególnie przy nowej szkole lub po dłuższej nieobecności.",
                kolor: "border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800",
              },
              {
                typ: "Lęk przed nauczycielem",
                opis: "Strach przed konkretną osobą — krytyczną, nieprzewidywalną lub stosującą kary emocjonalne.",
                kolor: "border-orange-300 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800",
              },
              {
                typ: "Lęk przed nowym środowiskiem",
                opis: "Przejście do nowej szkoły, klasy lub po dłuższej nieobecności (choroba, pandemia). Nieznane miejsce i nowi ludzie wywołują intensywny niepokój.",
                kolor: "border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800",
              },
            ].map((item) => (
              <div key={item.typ} className={`flex items-start gap-4 p-4 rounded-xl border ${item.kolor}`}>
                <div className="font-bold text-gray-900 dark:text-white w-48 shrink-0 text-sm">{item.typ}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Jak biblioterapia pomaga */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak biblioterapia pomaga przy lęku szkolnym?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Kluczowy mechanizm to identyfikacja — dziecko rozpoznaje siebie w bohaterze, który boi się
            tego samego. Ten moment jest nieoceniony: po raz pierwszy dziecko widzi, że jego strach
            ma nazwę i formę, że nie jest jedyne i że istnieje z niego wyjście.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mechanizm: "Normalizacja lęku",
                opis: "Bohater też się boi — to sprawia, że strach przestaje być powodem wstydu. Biblioterapia przekonuje: banie się jest ludzkie.",
                ikona: "🫂",
              },
              {
                mechanizm: "Modelowanie zachowań",
                opis: "Dziecko obserwuje, jak bohater radzi sobie z trudną sytuacją. To uczy konkretnych strategii: oddychania, proszenia o pomoc, rozmowy.",
                ikona: "👣",
              },
              {
                mechanizm: "Bezpieczna eksploracja",
                opis: "Fikcja pozwala przeżyć trudną sytuację bez ryzyka. Dziecko może bezpiecznie wyobrażać sobie wejście do klasy razem z bohaterem.",
                ikona: "🛡️",
              },
              {
                mechanizm: "Otwarcie rozmowy",
                opis: "Książka staje się pomostem. Zamiast pytać, czy dziecko boi się szkoły, pytamy: Czy Ola z książki miała rację, że to takie straszne?",
                ikona: "🗝️",
              },
            ].map((item) => (
              <div key={item.mechanizm} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="text-2xl mb-3">{item.ikona}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.mechanizm}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Polecane książki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki przy lęku szkolnym
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Przedszkole i klasy 1–2 (4–8 lat)",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Zaczarowany ołówek", autor: "Maria Kann", opis: "Klasyka — kreatywność jako sposób na radzenie sobie z nowym miejscem" },
                  { tytul: "Bardzo głodna gąsienica idzie do szkoły", autor: "Eric Carle (adaptacja)", opis: "Strach przed nowym jako naturalna część zmiany" },
                  { tytul: "Lew, który nie umiał ryczec", autor: "Joanna Krzyżanek", opis: "O nieśmiałości i odkrywaniu własnych mocnych stron w grupie" },
                ],
              },
              {
                wiek: "Klasy 3–5 (9–11 lat)",
                kolor: "bg-blue-500",
                ksiazki: [
                  { tytul: "Cudowny chłopak", autor: "R.J. Palacio", opis: "O wejściu do nowej szkoły z twarzą inną od wszystkich — o odwadze i akceptacji" },
                  { tytul: "Dziennik Cwaniaczka", autor: "Jeff Kinney", opis: "Humor jako strategia radzenia sobie ze szkolnymi stresami" },
                  { tytul: "Tylko nie mow nikomu", autor: "Natalie Standiford", opis: "O przyjaźni jako kotwicy przy lęku przed zmianą środowiska" },
                ],
              },
              {
                wiek: "Klasy 6–8 i starsze (12+ lat)",
                kolor: "bg-purple-500",
                ksiazki: [
                  { tytul: "Serce i mózg", autor: "Nick Toon", opis: "Komiks o lęku uogólnionym i depresji — z humorem i empatią" },
                  { tytul: "Wszystkie odcienie smutku", autor: "Jennifer Niven", opis: "O lęku, izolacji i szukaniu sensu w relacji z drugą osobą" },
                  { tytul: "Jak przezyc szkolny rok", autor: "Ewa Nowak", opis: "Realistyczny obraz szkolnych hierarchii i strategii przetrwania" },
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

        {/* Sesja krok po kroku */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak poprowadzić rozmowę po lekturze?
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-4">Pytania otwierające rozmowę (dla dzieci 6–12 lat)</h3>
            <div className="space-y-3">
              {[
                { faza: "Rozgrzewka", pytanie: "Co zapamiętałeś/aś z tej historii? Która scena najbardziej zapadła ci w pamięć?" },
                { faza: "Identyfikacja", pytanie: "Który bohater był do ciebie najbardziej podobny? Dlaczego?" },
                { faza: "Eksploracja emocji", pytanie: "Co czuł ten bohater, gdy wszedł do klasy? Czy rozumiesz ten strach?" },
                { faza: "Przeniesienie", pytanie: "Czy zdarzyło ci się kiedyś czuć podobnie? (Bez nacisku — zaakceptuj odmowę)" },
                { faza: "Strategie", pytanie: "Co pomogło bohaterowi? Czy myślisz, że to mogłoby pomóc tobie?" },
                { faza: "Domknięcie", pytanie: "Gdybyś mógł/mogła powiedzieć coś bohaterowi, co byś powiedział/a?" },
              ].map((item) => (
                <div key={item.faza} className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs w-28 shrink-0 pt-0.5">{item.faza}</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm italic">{item.pytanie}</p>
                </div>
              ))}
            </div>
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
                q: "Czym różni się lęk szkolny od zwykłej niechęci do szkoły?",
                a: "Lęk szkolny to intensywny, utrzymujący się strach przed szkołą lub sytuacjami szkolnymi, często z objawami fizycznymi (ból brzucha, bóle głowy). Niechęć do szkoły to przemijający brak motywacji bez tak silnej reakcji emocjonalnej.",
              },
              {
                q: "Czy biblioterapia może wyleczyć lęk szkolny?",
                a: "Biblioterapia nie zastępuje psychoterapii ani diagnozy. Może jednak skutecznie wspierać dziecko — normalizować jego doświadczenie, uczyć strategii radzenia sobie i tworzyć przestrzeń do rozmowy o lęku.",
              },
              {
                q: "Od jakiego wieku można stosować biblioterapię przy lęku szkolnym?",
                a: "Już od wieku przedszkolnego — używając prostych obrazkowych historii o bohaterach, którzy boją się nowego miejsca lub nowych dzieci. W praktyce najczęściej pracuje się z dziećmi od 5. roku życia.",
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
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Twoje dziecko boi się szkoły?</h2>
          <p className="text-blue-100 mb-6">
            Skontaktuj się z nami — pomożemy dobrać odpowiednie podejście i wsparcie
            dla Twojego dziecka.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Umów konsultację
          </Link>
        </section>
      </article>
    </Layout>
  );
}
