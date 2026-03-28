import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaPrzyRozstaniuRodzicowPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia przy rozstaniu rodziców — jak wspierać dziecko książką?",
    description:
      "Jak biblioterapia pomaga dzieciom przeżyć rozstanie rodziców? Polecane książki, pytania do rozmowy i wskazówki dla rodziców w trakcie i po rozstaniu.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-przy-rozstaniu-rodzicow-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kiedy zacząć biblioterapię przy rozstaniu rodziców?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Najlepiej jak najwcześniej — nawet zanim dziecko zacznie wyrażać trudności. Książka może być pierwszym krokiem do rozmowy, zanim emocje staną się nieprzepracowane.",
        },
      },
      {
        "@type": "Question",
        name: "Czy dziecko powinno czytać samo, czy razem z rodzicem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dla dzieci do ok. 9 lat zdecydowanie razem. Wspólne czytanie daje przestrzeń do rozmowy i pozwala rodzicowi reagować na emocje dziecka na bieżąco.",
        },
      },
      {
        "@type": "Question",
        name: "Czy można czytać te same książki z obojgiem rodziców?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak i jest to wskazane. Daje dziecku spójność oraz przekaz, że oboje rodziców troszczy się o jego emocje — nawet jeśli żyją osobno.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia przy rozstaniu rodziców — jak wspierać dziecko książką?"
        description="Jak biblioterapia pomaga dzieciom przeżyć rozstanie rodziców? Polecane książki, pytania do rozmowy i wskazówki dla rodziców w trakcie i po rozstaniu."
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
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia przy rozstaniu rodziców</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Terapia
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia przy rozstaniu rodziców — jak wspierać dziecko książką?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Rozstanie rodziców to jedno z najtrudniejszych doświadczeń w życiu dziecka.
            Biblioterapia daje mu coś cennego: słowa na to, co czuje, i bohatera, który przeżył to samo.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>10 min czytania</span>
          </div>
        </header>

        {/* Skala i kontekst */}
        <section className="mb-12">
          <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-6 rounded-r-xl mb-8">
            <p className="text-rose-800 dark:text-rose-200 text-lg">
              W Polsce rocznie rozpatrywanych jest ok. <strong>65 000 spraw rozwodowych</strong>.
              W większości z nich dotknięte są dzieci. To sprawia, że rozstanie rodziców jest jednym
              z najczęstszych kryzysów, z którymi mierzą się dzieci w polskich szkołach.
            </p>
          </div>
        </section>

        {/* Co przeżywa dziecko */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Co przeżywa dziecko przy rozstaniu rodziców?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                emocja: "Poczucie winy",
                opis: "Dzieci często wierzą, że to ich wina — że były niegrzeczne, że nie modliły się wystarczająco. Ten mit musi być rozbity wprost.",
                ikona: "💔",
              },
              {
                emocja: "Lęk o przyszłość",
                opis: "Kto będzie mnie kochał? Czy muszę wybrać? Gdzie będę mieszkać? Niepewność jest intensywna i paraliżująca.",
                ikona: "😰",
              },
              {
                emocja: "Gniew",
                opis: "Na oboje rodziców, na siebie, na świat. Złość często maskuje głębszy smutek i poczucie bezsilności.",
                ikona: "😡",
              },
              {
                emocja: "Smutek i żałoba",
                opis: "Dziecko traci model rodziny, który znało. To realna strata — i powinno mieć prawo ją opłakać.",
                ikona: "😢",
              },
              {
                emocja: "Lojalność konfliktowa",
                opis: "Kochanie jednego rodzica może wydawać się zdradą drugiego. To jeden z najtrudniejszych stanów dla dziecka.",
                ikona: "⚖️",
              },
              {
                emocja: "Nadzieja na powrót",
                opis: "Nawet po latach dziecko może wierzyć, że rodzice wrócą do siebie. Fałszywa nadzieja utrudnia adaptację.",
                ikona: "🌈",
              },
            ].map((item) => (
              <div key={item.emocja} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4">
                <span className="text-2xl">{item.ikona}</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.emocja}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dlaczego książka pomaga */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dlaczego właśnie książka pomaga przy rozstaniu?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Rozstanie rodziców jest tematem, o którym dziecko często nie chce rozmawiać wprost —
            bo rozmowa boli, bo nie ma słów, bo boi się zranić rodzica. Książka daje pośrednika:
            można rozmawiać o bohaterze, nie o sobie. Ten bezpieczny dystans to nie ucieczka — to brama.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { tytul: "Daje słowa", opis: "Dziecko uczy się nazywać to, co czuje, przez doświadczenie bohatera" },
              { tytul: "Normalizuje", opis: "Skoro bohater książki to przeżył i dał radę — ja też mogę" },
              { tytul: "Otwiera dialog", opis: "Pytanie o książkę jest łatwiejsze niż pytanie o to, jak się czujesz" },
            ].map((item) => (
              <div key={item.tytul} className="text-center bg-rose-50 dark:bg-rose-900/20 rounded-xl p-5 border border-rose-100 dark:border-rose-800">
                <div className="font-bold text-rose-700 dark:text-rose-400 mb-2">{item.tytul}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fazy i dopasowanie */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Książki dla różnych faz rozstania
          </h2>
          <div className="space-y-4">
            {[
              {
                faza: "Przed / w trakcie rozstania",
                opis: "Dziecko potrzebuje zrozumieć, co się dzieje, i usłyszeć, że jest kochane przez oboje rodziców niezależnie od decyzji.",
                kolor: "bg-amber-50 border-amber-300 dark:bg-amber-900/20 dark:border-amber-700",
                kolor_txt: "text-amber-700 dark:text-amber-400",
              },
              {
                faza: "Krótko po rozstaniu (0–6 miesięcy)",
                opis: "Czas adaptacji — dziecko potrzebuje stabilności i pewności, że rodzina nadal istnieje, tylko w innej formie.",
                kolor: "bg-blue-50 border-blue-300 dark:bg-blue-900/20 dark:border-blue-700",
                kolor_txt: "text-blue-700 dark:text-blue-400",
              },
              {
                faza: "Po adaptacji (6+ miesięcy)",
                opis: "Czas przetwarzania — dziecko może potrzebować historii o nowym początku, nowej rodzinie, nowym domu.",
                kolor: "bg-green-50 border-green-300 dark:bg-green-900/20 dark:border-green-700",
                kolor_txt: "text-green-700 dark:text-green-400",
              },
            ].map((item) => (
              <div key={item.faza} className={`p-5 rounded-xl border ${item.kolor}`}>
                <div className={`font-bold mb-1 ${item.kolor_txt}`}>{item.faza}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Polecane książki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki przy rozstaniu rodziców
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Dzieci 3–6 lat",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Dwa domy", autor: "Claire Masurel", opis: "Klasyka — Alex ma dwa domy i w każdym jest kochany. Prosta i ciepła historia" },
                  { tytul: "Tata mieszka w innym miejscu", autor: "Doris Brett", opis: "Bezpośrednia, ale czuła historia o adaptacji do nowej rzeczywistości rodzinnej" },
                  { tytul: "Rodzina Oli", autor: "Gunilla Bergstrom", opis: "O tym, że rodziny są różne — i każda z nich jest prawdziwa" },
                ],
              },
              {
                wiek: "Dzieci 7–10 lat",
                kolor: "bg-blue-500",
                ksiazki: [
                  { tytul: "Muzeum milosci", autor: "Wydawnictwo Wytwórnia", opis: "O rozstaniu rodziców widzianym oczami dziecka — z ilustracjami i pytaniami do dyskusji" },
                  { tytul: "Tata, mama i ja", autor: "Ulf Stark", opis: "Humorystyczna, ale empatyczna historia o życiu z dwoma domami" },
                  { tytul: "Kiedy rodzice sie rozstaja", autor: "Eric Masini", opis: "Poradnik w formie bajki — odpowiada na pytania, które dzieci boją się zadać" },
                ],
              },
              {
                wiek: "Dzieci 11–14 lat",
                kolor: "bg-purple-500",
                ksiazki: [
                  { tytul: "Gwiezdne wojny moich rodzicow", autor: "Agnieszka Odorowicz", opis: "Realistyczna historia nastolatka zmagającego się z wojną rodziców" },
                  { tytul: "Dom na koncu swiata", autor: "Michael Cunningham", opis: "Dla starszej mlodziezy — o niekonwencjonalnych rodzinach i milosci" },
                  { tytul: "Wina gwiazd", autor: "John Green", opis: "O stracie i adaptacji do nowej rzeczywistosci — nie bezposrednio o rozwodzie, ale rezonuje" },
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

        {/* Jak rozmawiać */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak rozmawiać z dzieckiem po lekturze?
          </h2>
          <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6 border border-rose-200 dark:border-rose-800">
            <p className="text-rose-800 dark:text-rose-200 font-semibold mb-4">
              Ważne zasady rozmowy po przeczytaniu książki o rozstaniu:
            </p>
            <div className="space-y-3">
              {[
                "Nie wchodzisz w szczegóły swojego rozstania — rozmawiasz o książce, nie o sobie",
                "Pytasz o bohaterów, nie o dziecko (przynajmniej na początku)",
                "Akceptujesz milczenie — nie każda rozmowa musi zakończyć się wyznaniem",
                "Nie mówisz źle o drugim rodzicu — nawet jeśli bohater negatywny przypomina kogoś z Twojego życia",
                "Dajesz dziecku prawo do wszystkich emocji — w tym do złości na Ciebie",
                "Kończysz rozmowę zapewnieniem: jesteś kochany przez oboje rodziców",
              ].map((zasada, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0">{i + 1}.</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{zasada}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dla rodziców w konflikcie */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Biblioterapia gdy rodzice są w konflikcie
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
            <p className="text-amber-800 dark:text-amber-200 mb-4">
              Nawet jeśli rozstanie jest pełne napięcia i konfliktu, dziecko potrzebuje neutralnej przestrzeni
              do przetwarzania emocji. Biblioterapia jest narzędziem, które może funkcjonować niezależnie
              od relacji między rodzicami — każde z nich może pracować z dzieckiem osobno.
            </p>
            <p className="text-amber-700 dark:text-amber-300 text-sm font-semibold">
              Jeśli konflikt jest intensywny: rozważ biblioterapię prowadzoną przez psychologa lub pedagoga szkolnego
              — osobę neutralną, która nie jest uwikłana emocjonalnie w sytuację rodziny.
            </p>
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
                q: "Kiedy zacząć biblioterapię przy rozstaniu rodziców?",
                a: "Najlepiej jak najwcześniej — nawet zanim dziecko zacznie wyrażać trudności. Książka może być pierwszym krokiem do rozmowy, zanim emocje staną się nieprzepracowane.",
              },
              {
                q: "Czy dziecko powinno czytać samo, czy razem z rodzicem?",
                a: "Dla dzieci do ok. 9 lat zdecydowanie razem. Wspólne czytanie daje przestrzeń do rozmowy i pozwala rodzicowi reagować na emocje dziecka na bieżąco.",
              },
              {
                q: "Czy można czytać te same książki z obojgiem rodziców?",
                a: "Tak i jest to wskazane. Daje dziecku spójność oraz przekaz, że oboje rodziców troszczy się o jego emocje — nawet jeśli żyją osobno.",
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
        <section className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Gotowe scenariusze do pracy z dziećmi</h2>
          <p className="text-white/80 mb-6">
            W naszym narzędziowniku znajdziesz gotowe scenariusze zajęć biblioterapeutycznych — sprawdzone materiały do druku dla nauczycieli, pedagogów i rodziców.
          </p>
          <Link
            href="/biblioterapia/narzedziownik"
            className="inline-block bg-white text-rose-600 font-bold px-8 py-3 rounded-full hover:bg-rose-50 transition-colors"
          >
            Zobacz scenariusze
          </Link>
        </section>
      </article>
    </Layout>
  );
}
