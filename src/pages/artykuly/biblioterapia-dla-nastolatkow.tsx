import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaDlaNastolatkowPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia dla nastolatków — jak książki wspierają młodzież?",
    description:
      "Jak biblioterapia pomaga nastolatkom radzić sobie z kryzysami tożsamości, presją rówieśniczą, depresją i lękiem? Praktyczny przewodnik dla rodziców, nauczycieli i terapeutów.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-dla-nastolatkow-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy nastolatek musi chcieć czytać, żeby biblioterapia działała?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chęć jest pomocna, ale nie jest konieczna na starcie. Często wystarczy jeden dobrze dobrany tytuł, który trafi w aktualne przeżycia nastolatka — wtedy opór znika samoistnie.",
        },
      },
      {
        "@type": "Question",
        name: "Jakie są najlepsze gatunki literackie dla nastolatków w biblioterapii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Young adult (YA) z autentycznymi bohaterami, literatura faktu o zdrowiu psychicznym, autobiografie i pamiętniki, a także poezja jako forma ekspresji emocji.",
        },
      },
      {
        "@type": "Question",
        name: "Czy biblioterapia może zastąpić psychoterapię u nastolatka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie. Biblioterapia jest narzędziem wspierającym, nie zastępuje profesjonalnej pomocy psychologicznej. W przypadku poważnych zaburzeń zawsze potrzebny jest specjalista.",
        },
      },
      {
        "@type": "Question",
        name: "Jak zachęcić nastolatka do udziału w biblioterapii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zaproponuj tytuł odpowiadający jego zainteresowaniom (fantasy, sci-fi, komiks, manga). Nie mów o terapii — zacznij od zwykłej rozmowy o przeczytanej książce.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia dla nastolatków — jak książki wspierają młodzież?"
        description="Jak biblioterapia pomaga nastolatkom radzić sobie z kryzysami tożsamości, presją rówieśniczą, depresją i lękiem? Praktyczny przewodnik dla rodziców, nauczycieli i terapeutów."
        canonical="/artykuly/biblioterapia-dla-nastolatkow"
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
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link href="/artykuly" className="hover:text-accent">Artykuły</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia dla nastolatków</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Młodzież
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia dla nastolatków — jak książki wspierają młodzież?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Nastolatki żyją w świecie intensywnych emocji, kryzysów tożsamości i ogromnej presji społecznej.
            Biblioterapia oferuje im coś wyjątkowego: bohatera, który przeżywa dokładnie to samo.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>12 min czytania</span>
          </div>
        </header>

        {/* Intro */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-10">
          <p>
            Adolescencja to jeden z najtrudniejszych etapów życia. Nastolatek buduje swoją tożsamość,
            zrywa z dzieciństwem i jednocześnie nie jest jeszcze dorosły. Do tego dochodzi presja rówieśnicza,
            wymagania szkolne, pierwsze zawody miłosne i — coraz częściej — problemy ze zdrowiem psychicznym.
          </p>
          <p>
            Badania CBOS i WHO wskazują, że co czwarty nastolatek w Polsce doświadcza objawów depresji lub lęku.
            Jednocześnie sięganie po pomoc psychologiczną wciąż bywa postrzegane jako slabość.
            Biblioterapia daje wyjście z tego pata: nie wymaga wizyt w gabinecie, nie etykietuje,
            a oferuje to, czego nastolatek szuka — poczucie, że nie jest sam ze swoimi przeżyciami.
          </p>
        </section>

        {/* Dlaczego adolescencja jest wyjątkowa */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dlaczego adolescencja jest szczególnym wyzwaniem?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: "🧠",
                title: "Rozwijający się mózg",
                desc: "Kora przedczołowa odpowiedzialna za regulację emocji i podejmowanie decyzji dojrzewa do ok. 25. roku życia. Nastolatek biologicznie nie potrafi zarządzać emocjami tak jak dorosły.",
              },
              {
                icon: "👥",
                title: "Presja rówieśnicza",
                desc: "Akceptacja grupy staje się ważniejsza niż opinia rodziców. Wykluczenie społeczne aktywuje te same obszary mózgu co ból fizyczny.",
              },
              {
                icon: "🪞",
                title: "Kryzys tożsamości",
                desc: "Kim jestem? Dokąd zmierzam? Pytania egzystencjalne, które nastolatek musi rozwiązać, nie mając jeszcze życiowego doświadczenia.",
              },
              {
                icon: "📱",
                title: "Cyfrowy świat",
                desc: "Social media kreują nierealistyczne standardy i nasilają mechanizm porównań społecznych. FOMO i cyberbullying to nowe wyzwania tej generacji.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border border-purple-100 dark:border-purple-800">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dlaczego książki trafiają do nastolatków */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dlaczego książki trafiają do nastolatków?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Literatura young adult (YA) to jeden z najdynamiczniej rozwijających się segmentów wydawniczych
            nie bez powodu. Autorzy piszą o tym, co naprawdę dzieje się w głowach i sercach młodych ludzi:
            o nienawiści do siebie, o strachu przed odrzuceniem, o coming out, o cięciu, o utracie sensu życia.
            To nie jest literatura unikająca trudnych tematów — to literatura, która im patrzy prosto w oczy.
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-6">
            <p className="text-indigo-800 dark:text-indigo-200 font-medium italic">
              Kiedy nastolatek czyta o bohaterze, który nienawidzi swojego ciała tak samo jak on,
              który boi się wejść do klasy, bo wszyscy będą się śmiać — dzieje się coś fundamentalnego.
              Pojawia się myśl: ktoś to napisał, znaczy ktoś to przeżył. Nie jestem jedyny.
            </p>
            <p className="text-indigo-600 dark:text-indigo-400 text-sm mt-2">— mechanizm identyfikacji w biblioterapii</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Identyfikacja", desc: "Bohater przeżywa to samo — nastolatek czuje się rozumiany bez słów" },
              { label: "Dystans", desc: "Przeżywanie przez postać daje bezpieczny bufor emocjonalny" },
              { label: "Autonomia", desc: "Czytanie to prywatny, intymny akt — nikt nie nadzoruje, nie ocenia" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="font-bold text-purple-600 dark:text-purple-400 mb-2">{item.label}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tematy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Kluczowe tematy w biblioterapii nastolatków
          </h2>
          <div className="space-y-3">
            {[
              {
                tema: "Depresja i lęk",
                opis: "Normalizacja trudnych stanów emocjonalnych, rozróżnianie smutku od depresji, strategie radzenia sobie",
                kolor: "bg-rose-50 border-rose-200 dark:bg-rose-900/20 dark:border-rose-800",
              },
              {
                tema: "Poczucie własnej wartości",
                opis: "Praca z wewnętrznym krytykiem, budowanie zasobów, konfrontacja z perfekcjonizmem",
                kolor: "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800",
              },
              {
                tema: "Presja rówieśnicza i mobbing",
                opis: "Strategie asertywności, mechanizmy wykluczenia, budowanie odporności",
                kolor: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
              },
              {
                tema: "Tożsamość i orientacja seksualna",
                opis: "Coming out, akceptacja własnej odmienności, znalezienie swojego miejsca",
                kolor: "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800",
              },
              {
                tema: "Rodzina w kryzysie",
                opis: "Rozwód rodziców, uzależnienia w rodzinie, przemoc domowa, rola parentyfikacji",
                kolor: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800",
              },
              {
                tema: "Żałoba i strata",
                opis: "Śmierć bliskiej osoby lub zwierzęcia, utrata relacji, pożegnanie z dzieciństwem",
                kolor: "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700",
              },
              {
                tema: "Uzależnienia i ryzykowne zachowania",
                opis: "Alkohol, narkotyki, hazard online, samookaleczanie — książka jako przestrzeń do rozmowy",
                kolor: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
              },
            ].map((item) => (
              <div key={item.tema} className={`flex items-start gap-4 p-4 rounded-xl border ${item.kolor}`}>
                <div className="font-bold text-gray-900 dark:text-white w-48 shrink-0">{item.tema}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Formy pracy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Formy pracy biblioterapeutycznej z nastolatkami
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tytul: "Czytanie i rozmowa",
                opis: "Wspólne lub indywidualne czytanie fragmentu, po którym prowadzona jest swobodna rozmowa. Kluczowe pytania: Co czuł bohater? Czy rozumiesz jego decyzję? Co byś zrobił na jego miejscu?",
                ikona: "📖",
              },
              {
                tytul: "Pisanie kreatywne",
                opis: "Pisanie alternatywnego zakończenia, listu do bohatera lub dziennika. Eksternalizacja emocji przez pisanie zmniejsza ich intensywność i daje poczucie sprawczości.",
                ikona: "✍️",
              },
              {
                tytul: "Bibliodrama",
                opis: "Wcielenie się w postać i odegranie sceny z książki. Szczególnie skuteczne w pracy z konfliktami interpersonalnymi i rozwijaniem empatii.",
                ikona: "🎭",
              },
              {
                tytul: "Mapa emocji",
                opis: "Nastolatek zaznacza na zarysie ciała, gdzie fizycznie odczuwa emocje towarzyszące lekturze. Pomaga połączyć świadomość emocjonalną z doświadczeniem cielesnym.",
                ikona: "🗺️",
              },
              {
                tytul: "Booktalking",
                opis: "Nastolatek sam poleca książki rówieśnikom. Bycie ekspertem buduje poczucie wartości i naturalne zaangażowanie w lekturę.",
                ikona: "🗣️",
              },
              {
                tytul: "Dyskusja grupowa",
                opis: "W grupie rówieśniczej nastolatki odkrywają, że inni mają podobne odczucia. Normalizacja i poczucie wspólnoty to kluczowe czynniki terapeutyczne.",
                ikona: "💬",
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

        {/* Rekomendacje książkowe */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki dla nastolatków
          </h2>
          <div className="space-y-8">
            {[
              {
                temat: "Depresja i zdrowie psychiczne",
                kolor: "bg-rose-500",
                ksiazki: [
                  { tytul: "Rak. Milosc. Rock and roll", autor: "Jenny Downham", opis: "Bevor I Die — o życiu z ciężką chorobą i szukaniu sensu" },
                  { tytul: "Trzynaście powodow", autor: "Jay Asher", opis: "Kontrowersyjna, ale otwierająca rozmowę o samobójstwie i konsekwencjach słów" },
                  { tytul: "Nieznajomy w lustrze", autor: "Ned Vizzini", opis: "Autobiograficzna opowieść o hospitalizacji psychiatrycznej nastolatka" },
                ],
              },
              {
                temat: "Tożsamość i akceptacja siebie",
                kolor: "bg-purple-500",
                ksiazki: [
                  { tytul: "Wonder", autor: "R.J. Palacio", opis: "Chłopiec z wadą twarzy idzie po raz pierwszy do szkoły — o inności i odwadze" },
                  { tytul: "Simon vs. The Homo Sapiens Agenda", autor: "Becky Albertalli", opis: "Coming out i szukanie miłości w cyfrowym świecie" },
                  { tytul: "Duma i radosc", autor: "Matthew Burgess (il.)", opis: "Dla starszych nastolatków — o artystycznym wyrazie i odmienności" },
                ],
              },
              {
                temat: "Presja i relacje rówieśnicze",
                kolor: "bg-blue-500",
                ksiazki: [
                  { tytul: "Piec metrów ponad niebem", autor: "Federico Moccia", opis: "Choć kontrowersyjna literacko, otwiera rozmowę o toksycznych relacjach" },
                  { tytul: "Wybierz prawde albo wyzwanie", autor: "Nora Zelevansky", opis: "Cyberbullying i konsekwencje decyzji w mediach społecznościowych" },
                  { tytul: "Krol szachownicy", autor: "Elizabeth Wein", opis: "O lojalności, presji i cenie bycia sobą" },
                ],
              },
              {
                temat: "Żałoba i strata",
                kolor: "bg-gray-500",
                ksiazki: [
                  { tytul: "Gwiazd naszych wina", autor: "John Green", opis: "Klasyk o miłości, stracie i znalezieniu sensu mimo wszystko" },
                  { tytul: "Most do Terabithii", autor: "Katherine Paterson", opis: "Niespodziewana strata przyjaciela — przetwarzanie żałoby" },
                  { tytul: "Czekajac na alaske", autor: "John Green", opis: "Pytania egzystencjalne i próba zrozumienia sensu tragedii" },
                ],
              },
            ].map((sekcja) => (
              <div key={sekcja.temat}>
                <div className={`${sekcja.kolor} text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3`}>
                  {sekcja.temat}
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

        {/* Dla rodziców */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak rodzic może wspierać biblioterapię?
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800 mb-6">
            <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4">Zasady rozmowy o przeczytanej książce</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { tak: "Pytaj o emocje bohaterów", nie: "Nie pytaj o fabułę jak na sprawdzianie" },
                { tak: "Dziel się własnym skojarzeniem z lektury", nie: "Nie mów, co nastolatek powinien wyciągnąć z książki" },
                { tak: "Słuchaj i zadawaj pytania otwarte", nie: "Nie oceniaj wyborów bohatera ani nastolatka" },
                { tak: "Zaakceptuj, że nie chce rozmawiać", nie: "Nie wymuszaj zwierzeń przez pryzmat lektury" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{item.tak}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-gray-500 dark:text-gray-400">{item.nie}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Najważniejsze: nie zamieniaj rozmowy o książce w ukrytą interwencję wychowawczą.
            Nastolatek szybko wyczuje manipulację i zamknie się. Celem jest wspólna przestrzeń,
            w której można mówić o trudnych rzeczach przez pryzmat fikcji — bez natychmiastowego
            przeskakiwania do rzeczywistości.
          </p>
        </section>

        {/* Dla nauczycieli */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Biblioterapia w pracy z młodzieżą — wskazówki dla nauczycieli
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Co działa</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Bookclub jako dobrowolna forma spotkań</li>
                <li>• Czytanie fragmentów na godzinie wychowawczej</li>
                <li>• Pisanie recenzji z perspektywy emocjonalnej, nie formalnej</li>
                <li>• Zaproszenie uczniów do polecania sobie książek</li>
                <li>• Praca z komiksem i mangą — nie tylko proza</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Na co uważać</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Niektóre treści (samookaleczanie, uzależnienia) wymagają ostrożności</li>
                <li>• Zawsze miej gotowy kontakt do pedagoga/psychologa szkolnego</li>
                <li>• Nie wymuszaj dzielenia się emocjami publicznie</li>
                <li>• Szanuj, że nie każdy chce rozmawiać o lekturze</li>
                <li>• Unikaj kanonicznej interpretacji — każde odczytanie jest dobre</li>
              </ul>
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
                q: "Czy nastolatek musi chcieć czytać, żeby biblioterapia działała?",
                a: "Chęć jest pomocna, ale nie jest konieczna na starcie. Często wystarczy jeden dobrze dobrany tytuł, który trafi w aktualne przeżycia nastolatka — wtedy opór znika samoistnie.",
              },
              {
                q: "Jakie są najlepsze gatunki literackie dla nastolatków w biblioterapii?",
                a: "Young adult (YA) z autentycznymi bohaterami, literatura faktu o zdrowiu psychicznym, autobiografie i pamiętniki, a także poezja jako forma ekspresji emocji.",
              },
              {
                q: "Czy biblioterapia może zastąpić psychoterapię u nastolatka?",
                a: "Nie. Biblioterapia jest narzędziem wspierającym, nie zastępuje profesjonalnej pomocy psychologicznej. W przypadku poważnych zaburzeń zawsze potrzebny jest specjalista.",
              },
              {
                q: "Jak zachęcić nastolatka do udziału w biblioterapii?",
                a: "Zaproponuj tytuł odpowiadający jego zainteresowaniom (fantasy, sci-fi, komiks, manga). Nie mów o terapii — zacznij od zwykłej rozmowy o przeczytanej książce.",
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
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Szukasz wsparcia dla swojego nastolatka?</h2>
          <p className="text-purple-100 mb-6">
            Skontaktuj się z nami — pomożemy dobrać odpowiednie podejście i materiały
            dopasowane do potrzeb Twojego dziecka.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors"
          >
            Umów konsultację
          </Link>
        </section>
      </article>
    </Layout>
  );
}
