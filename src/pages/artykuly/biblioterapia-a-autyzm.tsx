import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaAAutyzmPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia a autyzm — jak literatura wspiera dzieci w spektrum?",
    description:
      "Jak dostosować biblioterapię do potrzeb dzieci w spektrum autyzmu? Adaptacje formatu, dobór książek i konkretne techniki pracy z dziećmi z ASD.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-a-autyzm-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy biblioterapia jest skuteczna przy autyzmie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, szczególnie w rozwijaniu kompetencji emocjonalnych i społecznych. Wymaga jednak znacznych adaptacji formatu i metodologii pracy.",
        },
      },
      {
        "@type": "Question",
        name: "Jakie książki są najlepsze dla dzieci z autyzmem w biblioterapii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Książki z przewidywalną strukturą, konkretnymi opisami emocji (nie tylko ich nazwami), bohaterami w spektrum lub z wyraźnymi różnicami neuronalnymi, oraz format graficzny i komiksowy.",
        },
      },
      {
        "@type": "Question",
        name: "Jak długo powinna trwać sesja biblioterapii z dzieckiem z autyzmem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dostosowane indywidualnie — od 10 do 30 minut. Kluczowe jest zakończenie sesji przed punktem przeciążenia sensorycznego lub emocjonalnego.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia a autyzm — jak literatura wspiera dzieci w spektrum?"
        description="Jak dostosować biblioterapię do potrzeb dzieci w spektrum autyzmu? Adaptacje formatu, dobór książek i konkretne techniki pracy z dziećmi z ASD."
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
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia a autyzm</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Praktyka
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia a autyzm — jak literatura wspiera dzieci w spektrum?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Dzieci w spektrum autyzmu często mają niezwykły stosunek do historii i postaci literackich.
            Biblioterapia, odpowiednio dostosowana, może być dla nich wyjątkowo skutecznym narzędziem.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>12 min czytania</span>
          </div>
        </header>

        {/* ASD a literatura */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dlaczego literatura jest szczególna dla dzieci w spektrum?
          </h2>
          <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-6">
            <p className="text-cyan-800 dark:text-cyan-200">
              Wiele dzieci w spektrum autyzmu wykazuje intensywne zainteresowanie konkretnymi tematami,
              strukturami i narracjami. Literatura może trafiać dokładnie w te fascynacje — i jednocześnie
              budować kompetencje, które są wyzwaniem: rozumienie emocji, perspektyw i relacji społecznych.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { aspekt: "Przewidywalność", opis: "Narracja ma strukturę: początek, środek, koniec. Dla dzieci z ASD ta przewidywalność jest uspokajająca." },
              { aspekt: "Dystans emocjonalny", opis: "Emocje bohatera są bezpieczniejsze niż własne. Literatura daje przestrzeń do eksploracji bez przeciążenia." },
              { aspekt: "Fascynacje tematyczne", opis: "Książka o dinozaurach, kosmosie lub pociągach może być punktem wejścia do pracy z emocjami." },
            ].map((item) => (
              <div key={item.aspekt} className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-4 border border-cyan-100 dark:border-cyan-800 text-center">
                <div className="font-bold text-cyan-700 dark:text-cyan-400 mb-2">{item.aspekt}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cele biblioterapii przy ASD */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Cele biblioterapii przy autyzmie
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { cel: "Rozwijanie teorii umysłu", opis: "Śledzenie, co myśli i czuje bohater, ćwiczy zdolność do przypisywania stanów mentalnych innym." },
              { cel: "Nauka nazywania emocji", opis: "Konkretne etykiety emocji przez literaturę pomagają budować słownik emocjonalny." },
              { cel: "Rozumienie kontekstu społecznego", opis: "Sytuacje z życia bohatera uczą niepisanych reguł społecznych w bezpiecznym formacie." },
              { cel: "Budowanie poczucia wartości", opis: "Bohaterowie z ASD lub odmienni pokazują, że inność jest zasobem, nie deficytem." },
              { cel: "Redukcja lęku przed nowym", opis: "Przeczytanie o nowej sytuacji przed jej przeżyciem zmniejsza poziom lęku." },
              { cel: "Komunikacja przez zainteresowania", opis: "Książka na temat fascynacji dziecka tworzy wspólny język z dorosłym." },
            ].map((item) => (
              <div key={item.cel} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.cel}</div>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Adaptacje sesji */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak adaptować sesję biblioterapii dla dzieci z ASD?
          </h2>
          <div className="space-y-4">
            {[
              {
                zasada: "Stały rytuał otwarcia i zamknięcia",
                opis: "Zawsze ta sama sekwencja: np. ułożenie poduszek, wybór miejsca, zapalenie lampki, czytanie, zakończenie piosenką lub hasłem. Przewidywalność redukuje lęk i ułatwia wejście w aktywność.",
                ikona: "🔄",
              },
              {
                zasada: "Wizualne wsparcie narracji",
                opis: "Ilustracje, karty z postaciami, oś czasu wydarzeń — pomoce wizualne ułatwiają śledzenie historii i zapamiętywanie sekwencji.",
                ikona: "🗺️",
              },
              {
                zasada: "Konkretne pytania, nie abstrakcyjne",
                opis: "Co zrobił bohater? — zamiast Co czuł bohater? Zacznij od konkretów. Emocje wprowadzaj stopniowo, przez opis fizyczny: Czy zauważyłeś, że bohater płakał?",
                ikona: "❓",
              },
              {
                zasada: "Sensoryczne dostosowanie otoczenia",
                opis: "Wygodne miejsce bez nadmiaru bodźców: odpowiednie oświetlenie, cisza lub biały szum, preferowana pozycja ciała. Dyskomfort sensoryczny blokuje zaangażowanie.",
                ikona: "🌿",
              },
              {
                zasada: "Nie wymuszaj kontaktu wzrokowego",
                opis: "Dziecko może słuchać patrząc gdzie indziej lub bawiąc się czymś w rękach. To nie znak braku uwagi — wiele dzieci z ASD przetwarza informacje lepiej bez kontaktu wzrokowego.",
                ikona: "👁️",
              },
              {
                zasada: "Elastyczność tematu",
                opis: "Jeśli dziecko chce rozmawiać o swoim ulubionym temacie zamiast o książce — idź za nim. Zbudujesz relację, która jest bazą dla późniejszej pracy.",
                ikona: "🌊",
              },
            ].map((item) => (
              <div key={item.zasada} className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="text-2xl">{item.ikona}</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.zasada}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Polecane książki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki dla dzieci w spektrum autyzmu
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Dzieci 4–8 lat",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Moje uczucia", autor: "Trace Moroney", opis: "Prosta seria o emocjach z przewidywalnym formatem i konkretnymi opisami" },
                  { tytul: "Byc soba", autor: "Marie-Sabine Roger", opis: "O odmiennosci jako czyms wartosciowym — format obrazkowy" },
                  { tytul: "Emilka z zielonego dachu", autor: "L.M. Montgomery (adaptacja dla dzieci)", opis: "Bohaterka o intensywnych zainteresowaniach i trudnosci w relacjach — klasyk" },
                ],
              },
              {
                wiek: "Dzieci 9–13 lat",
                kolor: "bg-cyan-500",
                ksiazki: [
                  { tytul: "Cudowny chlopak", autor: "R.J. Palacio", opis: "Chlopiec ktory jest inny i walczy o swoje miejsce — silna identyfikacja mozliwa" },
                  { tytul: "Hadestown: seria komiksow o emocjach", autor: "rozni autorzy", opis: "Format komiksowy z wyraznymi minami i konkretnymi etykietami emocji" },
                  { tytul: "Sherlock Holmes dla dzieci", autor: "Arthur Conan Doyle (adaptacje)", opis: "Bohater z cechami ASD — intensywne skupienie, logika, trudnosci spoleczne" },
                ],
              },
              {
                wiek: "Mlodzicz 14+",
                kolor: "bg-blue-500",
                ksiazki: [
                  { tytul: "Ciekawy przypadek psa nocna pora", autor: "Mark Haddon", opis: "Narracja z perspektywy chlopca z ASD — jeden z najslynniejszych literackich portretow spektrum" },
                  { tytul: "Wszystkie jasne miejsca", autor: "Jennifer Niven", opis: "O innosci neurobiologicznej i poszukiwaniu sensu — dla starszej mlodziezy" },
                  { tytul: "Elektroniczny moj swiat", autor: "Temple Grandin", opis: "Autobiografia slynnej badaczki z autyzmem — normalizuje i inspiruje" },
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
                q: "Czy biblioterapia jest skuteczna przy autyzmie?",
                a: "Tak, szczególnie w rozwijaniu kompetencji emocjonalnych i społecznych. Wymaga jednak znacznych adaptacji formatu i metodologii pracy.",
              },
              {
                q: "Jakie książki są najlepsze dla dzieci z autyzmem w biblioterapii?",
                a: "Książki z przewidywalną strukturą, konkretnymi opisami emocji (nie tylko ich nazwami), bohaterami w spektrum lub z wyraźnymi różnicami neuronalnymi, oraz format graficzny i komiksowy.",
              },
              {
                q: "Jak długo powinna trwać sesja biblioterapii z dzieckiem z autyzmem?",
                a: "Dostosowane indywidualnie — od 10 do 30 minut. Kluczowe jest zakończenie sesji przed punktem przeciążenia sensorycznego lub emocjonalnego.",
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
        <section className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Szukasz wsparcia dla dziecka w spektrum?</h2>
          <p className="text-cyan-100 mb-6">
            Skontaktuj się z nami — pomożemy dobrać odpowiednie podejście
            biblioterapeutyczne dostosowane do potrzeb Twojego dziecka.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-cyan-700 font-bold px-8 py-3 rounded-full hover:bg-cyan-50 transition-colors"
          >
            Umów konsultację
          </Link>
        </section>
      </article>
    </Layout>
  );
}
