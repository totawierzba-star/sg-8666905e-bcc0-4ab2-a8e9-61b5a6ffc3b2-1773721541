import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaDlaedzieciDoswiadczajacychPrzemocy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia dla dzieci doświadczających przemocy — jak literatura pomaga?",
    description:
      "Jak biblioterapia wspiera dzieci doświadczające przemocy domowej lub rówieśniczej? Zasady bezpiecznej pracy, polecane tytuły i kiedy potrzebna jest interwencja.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-dla-dzieci-doswiadczajacych-przemocy-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy biblioterapia jest bezpieczna dla dzieci po traumie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, jeśli jest prowadzona przez osobę przeszkoloną lub pod jej nadzorem. Kluczowe jest unikanie treści, które mogłyby retriggować traumę, i budowanie poczucia bezpieczeństwa przed każdą sesją.",
        },
      },
      {
        "@type": "Question",
        name: "Kiedy biblioterapia przy przemocy wymaga udziału specjalisty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zawsze, gdy przemoc nadal trwa lub dziecko wykazuje objawy PTSD. Biblioterapia może być elementem wsparcia, ale nie zastępuje interwencji prawnej i terapii traumy.",
        },
      },
      {
        "@type": "Question",
        name: "Jak rozmawiać z dzieckiem o przemocy przez pryzmat książki?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zaczynaj od bohatera, nie od dziecka. Nie zadawaj bezpośrednich pytań o własne doświadczenia. Buduj bezpieczeństwo przez przewidywalność sesji i akceptację milczenia.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia dla dzieci doświadczających przemocy — jak literatura pomaga?"
        description="Jak biblioterapia wspiera dzieci doświadczające przemocy domowej lub rówieśniczej? Zasady bezpiecznej pracy, polecane tytuły i kiedy potrzebna jest interwencja."
        canonical="/artykuly/biblioterapia-dla-dzieci-doswiadczajacych-przemocy"
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
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia dla dzieci doświadczających przemocy</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Terapia
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia dla dzieci doświadczających przemocy — jak literatura pomaga?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Dziecko doświadczające przemocy często milczy — bo się boi, bo myśli, że to jego wina,
            bo nie ma słów. Literatura może dać mu jedno i drugie: głos i słowa.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>12 min czytania</span>
          </div>
        </header>

        {/* Ważna informacja */}
        <section className="mb-10">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded-xl p-6">
            <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
              <span className="text-xl">⚠️</span> Ważna informacja
            </h3>
            <p className="text-red-700 dark:text-red-400 text-sm mb-3">
              Jeśli podejrzewasz, że dziecko doświadcza przemocy, pierwszym krokiem jest interwencja,
              nie biblioterapia. Zgłoś sytuację do:
            </p>
            <ul className="text-red-700 dark:text-red-400 text-sm space-y-1">
              <li>• Pedagoga szkolnego lub psychologa</li>
              <li>• Telefonu zaufania dla dzieci: 116 111 (bezpłatny, całą dobę)</li>
              <li>• Policji (997) lub prokuratury w przypadku przestępstwa</li>
              <li>• Centrum Praw Kobiet lub lokalnego ośrodka pomocy ofiarom przemocy</li>
            </ul>
            <p className="text-red-700 dark:text-red-400 text-sm mt-3 font-semibold">
              Biblioterapia może wspierać dziecko — ale nie może zastąpić interwencji, gdy przemoc trwa.
            </p>
          </div>
        </section>

        {/* Rola biblioterapii */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jaka jest rola biblioterapii przy przemocy?
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                rola: "Nadanie języka doświadczeniu",
                opis: "Dziecko, które nie ma słów na to, co przeżywa, może je odnaleźć przez bohatera. Nazwanie przemocy to pierwszy krok do szukania pomocy.",
                ikona: "💬",
              },
              {
                rola: "Dekonstrukcja winy",
                opis: "Wiele dzieci myśli, że zasłużyły na przemoc. Historia bohatera, który jest skrzywdzony nie z własnej winy, może obalić ten destrukcyjny mit.",
                ikona: "🪞",
              },
              {
                rola: "Modelowanie szukania pomocy",
                opis: "Bohater, który mówi dorosłemu o tym, co mu zrobiono, pokazuje możliwą ścieżkę. Dziecko widzi, że można powiedzieć — i że to jest dobre.",
                ikona: "🤝",
              },
              {
                rola: "Budowanie poczucia bezpieczeństwa",
                opis: "Regularna, przewidywalna sesja biblioterapeutyczna może być jedynym bezpiecznym miejscem w tygodniu dziecka. Rytuał czytania stabilizuje.",
                ikona: "🛡️",
              },
            ].map((item) => (
              <div key={item.rola} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4">
                <span className="text-2xl">{item.ikona}</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.rola}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Zasady bezpiecznej pracy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Zasady bezpiecznej biblioterapii przy przemocy
          </h2>
          <div className="space-y-3">
            {[
              {
                zasada: "Nie dotykaj traumy bezpośrednio",
                opis: "Zacznij od historii metaforycznych — bohater jest w trudnej sytuacji, ale nie dosłownie w sytuacji dziecka. Dystans jest ochroną.",
              },
              {
                zasada: "Buduj bezpieczeństwo przed każdą sesją",
                opis: "Zawsze ten sam rytuał otwarcia, to samo miejsce, ten sam dorosły. Dla dziecka po traumie przewidywalność to bezpieczeństwo.",
              },
              {
                zasada: "Nigdy nie wymuszaj zwierzeń",
                opis: "Jeśli dziecko zaczyna mówić o własnym doświadczeniu — słuchaj. Jeśli nie — nie pytaj. Każde ujawnienie musi być dobrowolne.",
              },
              {
                zasada: "Bądź gotowy na trudne wyznania",
                opis: "Jeśli dziecko ujawni przemoc podczas sesji — podziękuj za zaufanie, powiedz, że mu wierzysz, i powiedz, że powiesz o tym odpowiedniemu dorosłemu. Nie obiecuj milczenia.",
              },
              {
                zasada: "Współpracuj ze specjalistą",
                opis: "Biblioterapia przy przemocy powinna być elementem szerszego planu wsparcia prowadzonego przez psychologa lub terapeutę traumy.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="text-red-500 font-black text-sm w-6 shrink-0 mt-0.5">{i + 1}.</span>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.zasada}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tematy i typy przemocy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Biblioterapia a rodzaje przemocy — czego szukać w literaturze?
          </h2>
          <div className="space-y-3">
            {[
              {
                typ: "Przemoc rówieśnicza (mobbing)",
                opis: "Szukaj książek o wykluczeniu, odmienności i asertywności. Bohater nie musi wygrywać — ważne, by szukał pomocy.",
                kolor: "border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700",
              },
              {
                typ: "Przemoc domowa (świadek lub ofiara)",
                opis: "Metaforyczne opowieści o domu, w którym nie czuć się bezpiecznie. Bohater, który rozumie, że to nie jego wina.",
                kolor: "border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700",
              },
              {
                typ: "Przemoc emocjonalna i zaniedbanie",
                opis: "Historie o dzieciach, które nie czują się kochane, i o tym, że warte są miłości bez względu na swoje zachowanie.",
                kolor: "border-purple-300 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-700",
              },
              {
                typ: "Przemoc seksualna",
                opis: "Tylko w pracy ze specjalistą. Specjalistyczne programy biblioterapeutyczne dla ofiar nadużyć seksualnych istnieją, ale wymagają profesjonalnego prowadzenia.",
                kolor: "border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-600",
              },
            ].map((item) => (
              <div key={item.typ} className={`p-4 rounded-xl border ${item.kolor}`}>
                <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.typ}</div>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Polecane książki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Dzieci 5–8 lat",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Nie moj blad", autor: "Leah Komaiko", opis: "O tym, ze przemoc nie jest wina dziecka — prosty, wyrazny przekaz" },
                  { tytul: "Cialo nalezy do ciebie", autor: "Cornelia Maude Spelman", opis: "O graniach cielesnych i bezpiecznym dotyku — wazne narzedzie profilaktyczne" },
                  { tytul: "Wielka i mala", autor: "Kate Rosoldi", opis: "O relacji dorosly-dziecko w trudnej sytuacji — bezpieczenstwo przez narracje" },
                ],
              },
              {
                wiek: "Dzieci 9–12 lat",
                kolor: "bg-blue-500",
                ksiazki: [
                  { tytul: "Cudowny chlopak", autor: "R.J. Palacio", opis: "Wyklukczenie i przemoc rowiesnicza — o sile i szukaniu pomocy" },
                  { tytul: "Pan Amok", autor: "Rafal Kosik", opis: "O postaci ktora przezywa przemoc i szuka wyjscia — polskie wydanie" },
                  { tytul: "Dziewczynka z zapalkami", autor: "Hans Christian Andersen (z omowieniem)", opis: "Basnowy obraz zaniedbania — wymaga prowadzenia rozmowy przez dorosłego" },
                ],
              },
              {
                wiek: "Mlodzicz 13+",
                kolor: "bg-red-500",
                ksiazki: [
                  { tytul: "Znam ciemne miejsca", autor: "Kathleen Peacock", opis: "O przemocy domowej i szukaniu wolnosci — dla starszej mlodziezy" },
                  { tytul: "Speak", autor: "Laurie Halse Anderson", opis: "Klasyk YA o traumie i milczeniu po gwalt — wymaga ostrożnosci i opieki dorosłego" },
                  { tytul: "Wszystko jest iluminacja", autor: "Jonathan Safran Foer", opis: "O przepracowaniu rodzinnej traumy przez pokolenia" },
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
                q: "Czy biblioterapia jest bezpieczna dla dzieci po traumie?",
                a: "Tak, jeśli jest prowadzona przez osobę przeszkoloną lub pod jej nadzorem. Kluczowe jest unikanie treści, które mogłyby retriggować traumę, i budowanie poczucia bezpieczeństwa przed każdą sesją.",
              },
              {
                q: "Kiedy biblioterapia przy przemocy wymaga udziału specjalisty?",
                a: "Zawsze, gdy przemoc nadal trwa lub dziecko wykazuje objawy PTSD. Biblioterapia może być elementem wsparcia, ale nie zastępuje interwencji prawnej i terapii traumy.",
              },
              {
                q: "Jak rozmawiać z dzieckiem o przemocy przez pryzmat książki?",
                a: "Zaczynaj od bohatera, nie od dziecka. Nie zadawaj bezpośrednich pytań o własne doświadczenia. Buduj bezpieczeństwo przez przewidywalność sesji i akceptację milczenia.",
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
        <section className="bg-gradient-to-r from-slate-700 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Potrzebujesz pomocy lub wsparcia?</h2>
          <p className="text-slate-200 mb-6">
            Jeśli dziecko jest w bezpiecznej sytuacji i szukasz wsparcia biblioterapeutycznego —
            skontaktuj się z nami. Jeśli przemoc trwa — zadzwoń na 116 111 lub 997.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-slate-700 font-bold px-8 py-3 rounded-full hover:bg-slate-50 transition-colors"
          >
            Skontaktuj się
          </Link>
        </section>
      </article>
    </Layout>
  );
}
