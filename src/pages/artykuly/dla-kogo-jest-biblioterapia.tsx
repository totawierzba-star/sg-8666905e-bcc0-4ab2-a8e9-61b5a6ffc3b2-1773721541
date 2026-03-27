import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Users, Heart, AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function DlaKogoJestBiblioterapiaPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dla kogo jest biblioterapia? Wskazania i przeciwwskazania",
    "description": "Dla kogo biblioterapia przynosi najlepsze efekty? Poznaj wskazania i przeciwwskazania — od małych dzieci po seniorów, od profilaktyki po wspieranie leczenia klinicznego.",
    "author": { "@type": "Organization", "name": "Biblioterapia.org" },
    "publisher": { "@type": "Organization", "name": "Biblioterapia.org", "url": "https://biblioterapia.org" },
    "url": "https://biblioterapia.org/artykuly/dla-kogo-jest-biblioterapia",
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "inLanguage": "pl",
    "mainEntityOfPage": "https://biblioterapia.org/artykuly/dla-kogo-jest-biblioterapia"
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy biblioterapia jest dla dzieci?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, biblioterapia jest szczególnie skuteczna u dzieci. Już od 3–4 roku życia dzieci mogą identyfikować się z bohaterami i przepracowywać trudne emocje przez opowieść. Biblioterapia pomaga dzieciom w żałobie, przy lęku szkolnym, po rozwodzie rodziców, w chorobie i w trudnościach emocjonalnych."
        }
      },
      {
        "@type": "Question",
        "name": "Czy biblioterapia jest dla dorosłych?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oczywiście. Biblioterapia dla dorosłych jest stosowana przy depresji, lęku, żałobie, kryzysie życiowym i samotności. Szczególnie dobrze zbadana jest biblioterapia CBT — korzystanie z poradników opartych na terapii poznawczo-behawioralnej."
        }
      },
      {
        "@type": "Question",
        "name": "Kto nie powinien korzystać z biblioterapii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biblioterapia nie jest odpowiednia jako jedyna metoda przy ciężkich zaburzeniach psychicznych (schizofrenia, ciężka depresja z myślami samobójczymi, ciężki PTSD). W tych przypadkach wymagana jest pomoc psychiatryczna i psychoterapia specjalistyczna. Biblioterapia może być elementem wsparcia, ale nie może zastępować leczenia."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Dla kogo jest biblioterapia? Wskazania i przeciwwskazania"
        description="Dla kogo biblioterapia przynosi najlepsze efekty? Dzieci, młodzież, dorośli, seniorzy — wskazania według grup wiekowych i sytuacji życiowych oraz kiedy biblioterapia nie wystarczy."
        url="https://biblioterapia.org/artykuly/dla-kogo-jest-biblioterapia"
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

          <nav aria-label="Breadcrumb" className="mb-8">
            <Link href="/artykuly" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do artykułów
            </Link>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Przewodnik
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Dla kogo jest biblioterapia? Wskazania i przeciwwskazania
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Biblioterapia nie jest tylko dla dzieci ani tylko dla dorosłych w terapii.
              To metoda dostępna dla każdego — od 3-latka po seniora, od profilaktyki
              emocjonalnej po wsparcie w poważnym kryzysie. Sprawdź, komu konkretnie
              biblioterapia przynosi największe korzyści i kiedy potrzebna jest pomoc specjalisty.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~9 minut</span>
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
              <li><a href="#dzieci" className="text-primary hover:underline">1. Dzieci (3–12 lat) — najlepsza grupa wiekowa</a></li>
              <li><a href="#nastolatki" className="text-primary hover:underline">2. Młodzież (13–18 lat)</a></li>
              <li><a href="#dorosli" className="text-primary hover:underline">3. Dorośli — kiedy warto sięgnąć po biblioterapię?</a></li>
              <li><a href="#seniorzy" className="text-primary hover:underline">4. Seniorzy</a></li>
              <li><a href="#sytuacje" className="text-primary hover:underline">5. Wskazania według sytuacji życiowej</a></li>
              <li><a href="#przeciwwskazania" className="text-primary hover:underline">6. Przeciwwskazania — kiedy biblioterapia nie wystarczy</a></li>
              <li><a href="#faq" className="text-primary hover:underline">7. FAQ</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none space-y-12">

            {/* 1 */}
            <section id="dzieci" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                Dzieci (3–12 lat) — najlepsza grupa wiekowa
              </h2>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <p className="text-blue-800 dark:text-blue-200">
                  Badania naukowe jednoznacznie wskazują, że <strong>dzieci w wieku 3–12 lat
                  reagują na biblioterapię wyjątkowo dobrze</strong>. Myślenie przez historię,
                  metaforę i bohatera to naturalny sposób poznawania świata przez dziecko.
                </p>
              </div>

              <p>
                Dzieci łatwo się identyfikują z postaciami z książek. Gdy bohater przeżywa to samo
                co dziecko — stres szkolny, śmierć dziadka, przeprowadzkę, chorobę — dziecko
                czuje się mniej osamotnione i uczy się, że da się przez to przejść.
              </p>

              <h3 className="font-semibold text-xl mt-6 mb-3">Biblioterapia jest szczególnie skuteczna u dzieci:</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Przeżywających żałobę po stracie bliskiej osoby lub zwierzęcia",
                  "Doświadczających rozwodu lub separacji rodziców",
                  "Z lękiem szkolnym, fobią przed szkołą lub trudnościami w nauce",
                  "Z niską samooceną i problemami w relacjach rówieśniczych",
                  "Z chorobą własną lub bliskiej osoby (rak, demencja, niepełnosprawność)",
                  "Z ADHD lub spektrum autyzmu — budowanie empatii i rozumienia emocji",
                  "Doświadczających przemocy lub zaniedbania — z udziałem specjalisty",
                  "Przechodzących duże zmiany życiowe (przeprowadzka, nowe rodzeństwo)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p>
                Nasze{" "}
                <Link href="/ksiazki" className="text-primary hover:underline font-medium">
                  książki do zadań specjalnych
                </Link>{" "}
                zostały stworzone z myślą właśnie o tej grupie — każda adresuje inny trudny
                temat i jest wyposażona w{" "}
                <Link href="/biblioterapia/scenariusze" className="text-primary hover:underline font-medium">
                  gotowy scenariusz zajęć biblioterapeutycznych
                </Link>.
              </p>
            </section>

            {/* 2 */}
            <section id="nastolatki" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Młodzież (13–18 lat)
              </h2>

              <p>
                Adolescencja to czas intensywnych poszukiwań tożsamości, silnych emocji
                i nowych wyzwań. Biblioterapia wspiera młodych ludzi przez:
              </p>

              <ul className="space-y-3 my-4">
                {[
                  { temat: "Tożsamość i poczucie sensu", opis: "Literatura YA (young adult) porusza pytania, które nastolatkowie zadają sobie sami — o miejsce w świecie, wartości, przynależność." },
                  { temat: "Relacje rówieśnicze i miłość", opis: "Książki normalizują trudności w relacjach, pomagają rozumieć granice i przeżywać emocjonalne kryzysy." },
                  { temat: "Zdrowie psychiczne", opis: "Beletrystyka o depresji, lęku czy zaburzeniach odżywiania (np. literatura faktu) zmniejsza stygmatyzację i skłania do szukania pomocy." },
                  { temat: "Trudne doświadczenia", opis: "Nastolatki często nie chcą rozmawiać wprost. Rozmowa przez pryzmat postaci z książki jest łatwiejsza." },
                ].map((item) => (
                  <li key={item.temat} className="flex gap-3 p-4 border rounded-xl">
                    <span className="text-primary font-bold mt-0.5">→</span>
                    <div>
                      <p className="font-semibold text-sm">{item.temat}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.opis}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Wskazówka:</strong> Z nastolatkami biblioterapia działa najlepiej,
                  gdy młody człowiek sam wybrał lub zaakceptował lekturę. Narzucona „lecznicza" książka
                  często spotka się z oporem. Biblioterapeuta proponuje, nie narzuca.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section id="dorosli" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Dorośli — kiedy warto sięgnąć po biblioterapię?
              </h2>

              <p>
                Biblioterapia dla dorosłych ma udokumentowaną skuteczność szczególnie w:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  { sytuacja: "Depresja łagodna i umiarkowana", opis: "Biblioterapia CBT (self-help books) redukuje objawy skutecznie — potwierdza to wiele metaanaliz. W UK przepisywana przez lekarzy pierwszego kontaktu." },
                  { sytuacja: "Zaburzenia lękowe", opis: "Poradniki oparte na CBT i ekspozycji pomagają w lęku ogólnym, fobii społecznej i OCD jako uzupełnienie terapii." },
                  { sytuacja: "Żałoba i strata", opis: "Literatura o stracie normalizuje ból i dostarcza języka do przepracowania emocji. Szczególnie skuteczna w żałobie skomplikowanej." },
                  { sytuacja: "Kryzys życiowy", opis: "Utrata pracy, rozwód, choroba, zmiana — biblioterapia pomaga odnaleźć nowe perspektywy i sposoby radzenia sobie." },
                  { sytuacja: "Samotność i izolacja", opis: "Zwłaszcza u osób w izolacji społecznej — literatura daje poczucie wspólnoty i kontaktu z innymi doświadczeniami." },
                  { sytuacja: "Praca nad sobą i rozwojem", opis: "Biblioterapia rozwojowa dla dorosłych — literatura jako narzędzie refleksji nad własnym życiem i wartościami." },
                ].map((item) => (
                  <div key={item.sytuacja} className="border rounded-xl p-5">
                    <h3 className="font-semibold mb-2 text-sm">{item.sytuacja}</h3>
                    <p className="text-sm text-muted-foreground">{item.opis}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 */}
            <section id="seniorzy" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                Seniorzy
              </h2>

              <p>
                Biblioterapia w pracy z osobami starszymi to rosnący obszar praktyki, szczególnie
                w domach opieki i centrach dziennej opieki. Przynosi korzyści w zakresie:
              </p>

              <ul className="space-y-2 my-4">
                {[
                  "Stymulacji poznawczej i opóźniania spadku funkcji umysłowych",
                  "Zwalczania samotności i izolacji społecznej",
                  "Przetwarzania doświadczeń życiowych przez narrację (reminiscencja)",
                  "Wsparcia przy chorobach degeneracyjnych (demencja, Alzheimer — dla opiekunów)",
                  "Leczenia łagodnej depresji geriatrycznej",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Dla rodzin seniorów chorujących na Alzheimera przygotowaliśmy artykuł i książkę:{" "}
                <Link href="/artykuly/jak-oswoic-zapominanie-zielona-dziewczynka" className="text-primary hover:underline font-medium">
                  Jak oswoić zapominanie? Przewodnik do pracy z „Zieloną dziewczynką"
                </Link>.
              </p>
            </section>

            {/* 5 */}
            <section id="sytuacje" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Wskazania według sytuacji życiowej
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 border font-semibold">Sytuacja</th>
                      <th className="text-left p-3 border font-semibold">Wiek</th>
                      <th className="text-left p-3 border font-semibold">Rodzaj biblioterapii</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Żałoba po stracie bliskiej osoby", "Każdy", "Kliniczna + rozwojowa"],
                      ["Rozwód rodziców", "Dzieci 3–14 lat", "Rozwojowa (z rodzicem)"],
                      ["Lęk szkolny", "Dzieci 6–14 lat", "Rozwojowa (szkolna)"],
                      ["Depresja łagodna", "Młodzież, dorośli", "Kliniczna (CBT self-help)"],
                      ["Choroba przewlekła (własna)", "Każdy", "Kliniczna lub instytucjonalna"],
                      ["Trudności w relacjach", "Młodzież, dorośli", "Rozwojowa"],
                      ["Niska samoocena u dziecka", "6–12 lat", "Rozwojowa (szkolna)"],
                      ["ADHD — budowanie empatii", "Dzieci 5–12 lat", "Rozwojowa"],
                      ["Samotność seniora", "60+", "Instytucjonalna (biblioteka, DPS)"],
                    ].map(([sytuacja, wiek, rodzaj]) => (
                      <tr key={sytuacja} className="border-b hover:bg-muted/20">
                        <td className="p-3 border">{sytuacja}</td>
                        <td className="p-3 border text-muted-foreground">{wiek}</td>
                        <td className="p-3 border text-muted-foreground">{rodzaj}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6 */}
            <section id="przeciwwskazania" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                Przeciwwskazania — kiedy biblioterapia nie wystarczy
              </h2>

              <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <p className="text-red-900 dark:text-red-100 font-medium mb-2">
                  Ważne — zadzwoń do specjalisty, gdy:
                </p>
                <ul className="space-y-1 text-red-800 dark:text-red-200 text-sm">
                  <li>• Pojawią się myśli samobójcze lub autoagresja</li>
                  <li>• Dziecko lub dorosły odmawia jedzenia, snu, kontaktu z otoczeniem</li>
                  <li>• Objawy trwają ponad 2–4 tygodnie i nasilają się</li>
                  <li>• Osoba nie funkcjonuje w codziennym życiu</li>
                </ul>
                <p className="text-red-700 dark:text-red-300 text-sm mt-3">
                  W nagłych przypadkach: Telefon Zaufania dla Dorosłych — <strong>116 123</strong>,
                  dla Dzieci i Młodzieży — <strong>116 111</strong>
                </p>
              </div>

              <p>
                Biblioterapia jako samodzielna metoda nie jest zalecana przy:
              </p>

              <div className="space-y-3 my-4">
                {[
                  { contra: "Schizofrenia i psychozy", opis: "Wymagają leczenia farmakologicznego pod opieką psychiatry. Biblioterapia może być elementem rehabilitacji, ale nie główną metodą." },
                  { contra: "Ciężka depresja z myślami samobójczymi", opis: "Konieczna natychmiastowa pomoc psychiatryczna. Biblioterapia może wspierać po ustabilizowaniu stanu." },
                  { contra: "Ciężki PTSD z flashbackami", opis: "Nieodpowiednio dobrana literatura może nasilać objawy. Wymagana terapia specjalistyczna (EMDR, trauma-focused CBT)." },
                  { contra: "Zaburzenia osobowości", opis: "Wymagają długoterminowej psychoterapii. Biblioterapia może być narzędziem pomocniczym pod nadzorem terapeuty." },
                  { contra: "Dysleksja lub analfabetyzm", opis: "W tych przypadkach biblioterapia przez audiobooki lub opowiadanie jest możliwa — ale wymaga dostosowania formy." },
                ].map((item) => (
                  <div key={item.contra} className="flex gap-3 p-4 bg-muted/30 rounded-xl border">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{item.contra}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.opis}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Wątpliwości co do wyboru między biblioterapią a psychoterapią? Przeczytaj:{" "}
                <Link href="/artykuly/biblioterapia-vs-psychoterapia" className="text-primary hover:underline font-medium">
                  Biblioterapia a psychoterapia — czym się różnią i kiedy wybrać którą?
                </Link>
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-8">Najczęstsze pytania</h2>
              <div className="space-y-4">
                {[
                  { q: "Czy moje dziecko musi lubić czytać, żeby skorzystać z biblioterapii?", a: "Nie. Biblioterapia nie wymaga, by dziecko czytało samodzielnie. Rodzic lub terapeuta może czytać na głos, a praca z emocjami odbywa się przez rozmowę po lekturze. Nawet słuchanie książki przynosi efekty terapeutyczne." },
                  { q: "Czy mogę prowadzić biblioterapię z dzieckiem w domu?", a: "Tak, w ograniczonym zakresie. Świadome czytanie z dzieckiem i rozmowa o emocjach bohaterów to forma biblioterapii domowej. Korzystaj z gotowych scenariuszy zajęć, które znajdziesz na naszej stronie. Przy poważniejszych trudnościach warto zwrócić się do specjalisty." },
                  { q: "Jak długo trwa biblioterapia?", a: "To zależy od celu. Jednorazowe zajęcia profilaktyczne (np. w szkole) trwają 45–90 minut. Cykl terapeutyczny przy konkretnym problemie — od kilku tygodni do kilku miesięcy. Biblioterapia w gabinecie terapeuty może trwać tyle co klasyczna terapia." },
                ].map((item) => (
                  <div key={item.q} className="border rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-3">{item.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Źródła */}
            <section className="mt-12 p-6 bg-muted/30 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Źródła</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4244866/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    PubMed: Bibliotherapy for Children — przegląd badań <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://reading-well.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Reading Well — Books on Prescription <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li className="text-muted-foreground">Heath M.A. i in. (2005). Bibliotherapy. <em>School Psychology International</em>.</li>
              </ul>
            </section>

            {/* Internal links */}
            <section className="mt-8 p-6 bg-muted/20 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Czytaj dalej</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/artykuly/co-to-jest-biblioterapia", label: "Co to jest biblioterapia?" },
                  { href: "/artykuly/czy-biblioterapia-jest-skuteczna", label: "Czy biblioterapia jest skuteczna?" },
                  { href: "/artykuly/biblioterapia-vs-psychoterapia", label: "Biblioterapia a psychoterapia" },
                  { href: "/biblioterapia/scenariusze", label: "Scenariusze zajęć" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                    <BookOpen className="h-4 w-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl border-2 border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Zacznij od dobrej książki</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Każda z naszych książek jest dobrana do konkretnej trudnej sytuacji i wyposażona
                  w scenariusz zajęć — gotowy do użycia przez rodzica, nauczyciela lub terapeutę.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/ksiazki" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg">
                    Nasze książki
                  </Link>
                  <Link href="/biblioterapia" className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg">
                    O biblioterapii →
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
