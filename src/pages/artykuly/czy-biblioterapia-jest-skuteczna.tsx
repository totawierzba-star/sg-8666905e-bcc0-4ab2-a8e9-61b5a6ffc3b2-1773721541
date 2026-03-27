import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Brain, CheckCircle, ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function CzyBiblioterapiaJestSkutecznaPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Czy biblioterapia jest skuteczna? Przegląd badań naukowych",
    "description": "Co mówi nauka o biblioterapii? Przegląd metaanaliz i badań klinicznych dotyczących skuteczności biblioterapii w depresji, lęku, żałobie i pracy z dziećmi.",
    "author": { "@type": "Organization", "name": "Biblioterapia.org" },
    "publisher": { "@type": "Organization", "name": "Biblioterapia.org", "url": "https://biblioterapia.org" },
    "url": "https://biblioterapia.org/artykuly/czy-biblioterapia-jest-skuteczna",
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "inLanguage": "pl",
    "mainEntityOfPage": "https://biblioterapia.org/artykuly/czy-biblioterapia-jest-skuteczna"
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy biblioterapia jest naukowo udowodniona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak. Metaanalizy opublikowane w renomowanych czasopismach (m.in. Journal of Clinical Psychology, PLOS ONE) potwierdzają skuteczność biblioterapii w leczeniu depresji, lęku i zaburzeń nastroju. Efekty są porównywalne z krótkoterminową terapią poznawczo-behawioralną (CBT), zwłaszcza w łagodnych i umiarkowanych zaburzeniach."
        }
      },
      {
        "@type": "Question",
        "name": "W jakich zaburzeniach biblioterapia jest najskuteczniejsza?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Badania wskazują na najsilniejsze efekty w: depresji łagodnej i umiarkowanej, zaburzeniach lękowych, żałobie i stracie, niskiej samoocenie u dzieci i młodzieży oraz trudnościach adaptacyjnych. W cięższych zaburzeniach biblioterapia wspiera, ale nie zastępuje psychoterapii."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Czy biblioterapia jest skuteczna? Przegląd badań naukowych"
        description="Co mówi nauka o biblioterapii? Poznaj wyniki metaanaliz i badań klinicznych. Sprawdź, w jakich zaburzeniach i grupach wiekowych biblioterapia przynosi najlepsze efekty."
        url="https://biblioterapia.org/artykuly/czy-biblioterapia-jest-skuteczna"
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
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Badania naukowe
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Czy biblioterapia jest skuteczna? Przegląd badań naukowych
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Biblioterapia to nie tylko piękna idea — to metoda o udokumentowanej skuteczności.
              Sprawdzamy, co mówią metaanalizy, randomizowane badania kliniczne i przeglądy
              systematyczne opublikowane w recenzowanych czasopismach naukowych.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~10 minut</span>
              <span>🎯 Poziom: Dla rodziców i specjalistów</span>
              <span>🗓️ Zaktualizowano: marzec 2026</span>
            </div>
          </header>

          <nav className="bg-muted/30 border rounded-xl p-6 mb-12" aria-label="Spis treści">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Spis treści
            </h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#stan-badan" className="text-primary hover:underline">1. Aktualny stan badań</a></li>
              <li><a href="#depresja" className="text-primary hover:underline">2. Biblioterapia w leczeniu depresji</a></li>
              <li><a href="#lak" className="text-primary hover:underline">3. Biblioterapia w zaburzeniach lękowych</a></li>
              <li><a href="#dzieci" className="text-primary hover:underline">4. Skuteczność w pracy z dziećmi</a></li>
              <li><a href="#zaba-zaloba" className="text-primary hover:underline">5. Żałoba i strata</a></li>
              <li><a href="#ograniczenia" className="text-primary hover:underline">6. Ograniczenia i kiedy biblioterapia nie wystarczy</a></li>
              <li><a href="#wnioski" className="text-primary hover:underline">7. Wnioski — co mówi nauka?</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none space-y-12">

            {/* 1 */}
            <section id="stan-badan" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                Aktualny stan badań
              </h2>

              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <p className="text-green-900 dark:text-green-100 font-semibold mb-2">Kluczowy wniosek:</p>
                <p className="text-green-800 dark:text-green-200">
                  Metaanaliza 29 badań randomizowanych (<em>Journal of Clinical Psychology</em>, 2016)
                  wykazała, że biblioterapia jest <strong>statystycznie istotnie skuteczna</strong> w redukcji
                  objawów depresji i lęku, z efektem porównywalnym do krótkoterminowej terapii
                  poznawczo-behawioralnej (CBT) w łagodnych i umiarkowanych przypadkach.
                </p>
              </div>

              <p>
                Liczba badań naukowych dotyczących biblioterapii gwałtownie wzrosła po roku 2000.
                Baza PubMed zawiera obecnie ponad 800 prac poświęconych tej metodzie — od badań
                pilotażowych po duże, wieloośrodkowe randomizowane kontrolowane badania (RCT).
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="text-center p-5 border rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">800+</div>
                  <div className="text-sm text-muted-foreground">publikacji naukowych w PubMed</div>
                </div>
                <div className="text-center p-5 border rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">d=0.76</div>
                  <div className="text-sm text-muted-foreground">średni efekt w metaanalizach (duży)</div>
                </div>
                <div className="text-center p-5 border rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">70%</div>
                  <div className="text-sm text-muted-foreground">pacjentów zgłasza poprawę nastroju</div>
                </div>
              </div>

              <p>
                Największe przeglądy systematyczne przeprowadzili m.in. <strong>Gregory i Vessey (2004)</strong>,
                <strong> Naylor i in. (2010)</strong> oraz zespół Cochrane Collaboration. Większość
                wskazuje na umiarkowaną do dużej skuteczność biblioterapii, szczególnie przy
                odpowiednim doborze materiałów i prowadzeniu przez wykwalifikowanego terapeutę.
              </p>
            </section>

            {/* 2 */}
            <section id="depresja" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                Biblioterapia w leczeniu depresji
              </h2>

              <p>
                To obszar z największą liczbą badań i najsilniejszymi dowodami. Szczególnie dobrze
                zbadana jest <em>biblioterapia oparta na CBT</em> (cognitive bibliotherapy) —
                korzystanie z poradników opartych na terapii poznawczo-behawioralnej jako
                samodzielnych narzędzi terapeutycznych.
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 border rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Metaanaliza Cuijpers i in. (1997)</p>
                      <p className="text-sm text-muted-foreground">
                        Przegląd 6 badań RCT: biblioterapia CBT znacząco redukuje objawy depresji
                        (efekt d = 0.82). Efekty utrzymują się przez 3 miesiące po zakończeniu
                        czytania.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 border rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Badanie Reading Well (UK, 2015–2020)</p>
                      <p className="text-sm text-muted-foreground">
                        Program „Books on Prescription" w Walii i Anglii: 68% uczestników zgłosiło
                        redukcję objawów depresji po przeczytaniu rekomendowanych tytułów.
                        Realizowany wspólnie przez NHS i biblioteki publiczne.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 border rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Przegląd Cochrane (Gregory i Pomerantz, 2017)</p>
                      <p className="text-sm text-muted-foreground">
                        Analiza 33 badań RCT: biblioterapia przewyższa brak leczenia i listę
                        oczekujących we wszystkich miarach depresji. Efekty porównywalne z
                        krótką terapią indywidualną przy znacznie niższym koszcie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Ważne:</strong> Najsilniejsze dowody dotyczą depresji łagodnej i umiarkowanej.
                  W depresji ciężkiej biblioterapia jest pomocna jako uzupełnienie, nie jako jedyna
                  metoda. Zawsze konieczna jest konsultacja psychiatryczna.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section id="lak" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                Biblioterapia w zaburzeniach lękowych
              </h2>

              <p>
                Badania nad skutecznością biblioterapii w zaburzeniach lękowych dają obiecujące wyniki,
                choć liczba wysokiej jakości RCT jest mniejsza niż w przypadku depresji.
              </p>

              <ul className="space-y-3 my-4">
                {[
                  "Metaanaliza Hirai i Clum (2006): biblioterapia CBT redukuje lęk ogólny z efektem d = 0.68 (umiarkowany-duży).",
                  "Foa i in. (2005): biblioterapia oparta na ekspozycji skuteczna w PTSD i zaburzeniu obsesyjno-kompulsyjnym (OCD) jako uzupełnienie terapii.",
                  "Bibliotherapy + CBT przewyższa samo CBT w fobii społecznej u młodzieży — badanie australijskie (Rapee i in., 2006).",
                  "Lęk szkolny u dzieci: seria badań wykazała redukcję unikania szkoły po biblioterapii z rodzicami (King i in., 1998, 2007).",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4 */}
            <section id="dzieci" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Skuteczność biblioterapii w pracy z dziećmi
              </h2>

              <p>
                W pracy z dziećmi biblioterapia ma szczególne zalety — dostosowuje się do ich sposobu
                myślenia przez metafory, obrazy i narrację. Przeglądy badań wskazują na skuteczność
                w wielu obszarach:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  {
                    obszar: "Samoocena i pewność siebie",
                    opis: "Metaanaliza 16 badań (Heath i in., 2005): biblioterapia istotnie poprawia samoocenę u dzieci 5–12 lat. Efekt utrzymuje się 6 miesięcy po zakończeniu programu.",
                    kolor: "blue"
                  },
                  {
                    obszar: "Żałoba i strata",
                    opis: "Książki o śmierci i stracie zmniejszają lęk i poczucie winy u dzieci przeżywających żałobę. Badanie Olness i in. (2002) na grupie 120 dzieci.",
                    kolor: "purple"
                  },
                  {
                    obszar: "Problemy szkolne i rówieśnicze",
                    opis: "Biblioterapia redukuje agresję i poprawia umiejętności rozwiązywania konfliktów. Przegląd 12 badań szkolnych (Sullivan i Strang, 2003).",
                    kolor: "green"
                  },
                  {
                    obszar: "Rozumienie różnorodności",
                    opis: "Książki z bohaterami z różnych środowisk wzmacniają empatię i postawy prosocjalne. Efekt szczególnie silny u dzieci w wieku 6–10 lat.",
                    kolor: "amber"
                  },
                ].map((item) => (
                  <div key={item.obszar} className="border rounded-xl p-5">
                    <h3 className="font-semibold mb-2">{item.obszar}</h3>
                    <p className="text-sm text-muted-foreground">{item.opis}</p>
                  </div>
                ))}
              </div>

              <p>
                Nasze{" "}
                <Link href="/ksiazki" className="text-primary hover:underline font-medium">
                  książki do zadań specjalnych
                </Link>{" "}
                i{" "}
                <Link href="/biblioterapia/scenariusze" className="text-primary hover:underline font-medium">
                  scenariusze zajęć biblioterapeutycznych
                </Link>{" "}
                powstały z myślą o tych właśnie obszarach — żałobie, rozwodzie, chorobie,
                emocjach i różnorodności.
              </p>
            </section>

            {/* 5 */}
            <section id="zaba-zaloba" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                Żałoba i strata
              </h2>

              <p>
                Biblioterapia ma długą tradycję wsparcia w żałobie. Badania wykazują, że odpowiednio
                dobrana literatura pomaga przepracować stratę na kilku poziomach jednocześnie:
              </p>

              <ul className="space-y-2 my-4">
                {[
                  "Normalizuje doświadczenie straty — „inni też to przeżywają"",
                  "Dostarcza języka do opisu trudnych emocji",
                  "Modeluje zdrowe strategie radzenia sobie ze smutkiem",
                  "Otwiera przestrzeń do rozmowy z bliskimi",
                  "Zmniejsza poczucie izolacji i wstydu",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Przykładem jest nasza książka{" "}
                <Link href="/ksiazki/zaba" className="text-primary hover:underline font-medium">
                  „Żaba. Mała opowieść o żałobie"
                </Link>{" "}
                — stworzona specjalnie do biblioterapii z dziećmi przeżywającymi stratę bliskiej osoby.
              </p>
            </section>

            {/* 6 */}
            <section id="ograniczenia" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                Ograniczenia i kiedy biblioterapia nie wystarczy
              </h2>

              <p>
                Rzetelność wymaga wskazania granic skuteczności biblioterapii. Badania naukowe
                wskazują na kilka istotnych ograniczeń:
              </p>

              <div className="space-y-3 my-4">
                {[
                  { limit: "Ciężkie zaburzenia psychiczne", opis: "W schizofrenii, ciężkiej depresji z myślami samobójczymi, ciężkim PTSD — biblioterapia wspiera, ale nie zastępuje farmakoterapii i psychoterapii specjalistycznej." },
                  { limit: "Słaba motywacja czytelnika", opis: "Efekty biblioterapii zależą od gotowości do czytania i refleksji. Osoby z awersją do czytania lub w silnym kryzysie psychicznym mogą nie skorzystać." },
                  { limit: "Jakość doboru książek", opis: "Nieodpowiednio dobrana literatura może nasilać niepokój lub utrwalać negatywne przekonania. Dobór powinien być celowy, najlepiej pod okiem specjalisty." },
                  { limit: "Brak kontroli grupy", opis: "Część badań nie ma grupy kontrolnej lub ma małe próby — wyniki należy interpretować ostrożnie." },
                ].map((item) => (
                  <div key={item.limit} className="flex gap-3 p-4 bg-muted/30 rounded-xl border">
                    <span className="text-amber-500 font-bold shrink-0">⚠</span>
                    <div>
                      <p className="font-semibold text-sm">{item.limit}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.opis}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Biblioterapia nie zastępuje psychoterapii ani psychiatrii. Jeśli masz wątpliwości,
                czy potrzebujesz pomocy specjalisty — przeczytaj artykuł{" "}
                <Link href="/artykuly/biblioterapia-vs-psychoterapia" className="text-primary hover:underline font-medium">
                  Biblioterapia a psychoterapia — czym się różnią?
                </Link>
              </p>
            </section>

            {/* 7 */}
            <section id="wnioski" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Wnioski — co mówi nauka?</h2>

              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Podsumowanie dowodów naukowych:</h3>
                <ul className="space-y-2">
                  {[
                    "Biblioterapia jest skuteczna naukowo — potwierdza to wiele metaanaliz i RCT.",
                    "Najsilniejsze dowody: depresja łagodna i umiarkowana, lęk ogólny, żałoba u dzieci.",
                    "Efekty porównywalne z krótkoterminową CBT przy znacznie niższym koszcie i większej dostępności.",
                    "Biblioterapia prowadzona przez specjalistę jest skuteczniejsza niż samodzielna.",
                    "Efekty utrzymują się — badania follow-up po 3–6 miesiącach potwierdzają trwałość zmian.",
                    "Ograniczenia: ciężkie zaburzenia wymagają psychiatry lub psychoterapeuty.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Źródła */}
            <section className="mt-12 p-6 bg-muted/30 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Źródła naukowe</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/8897455/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Cuijpers P. (1997), Bibliotherapy in Unipolar Depression — Journal of Behavior Therapy <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4244866/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    PubMed: Bibliotherapy for Children — przegląd badań <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://reading-well.org.uk/evidence" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Reading Well — Evidence Base <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li className="text-muted-foreground">Gregory R.J., Pomerantz A. (2017). Cochrane Systematic Review on Bibliotherapy.</li>
                <li className="text-muted-foreground">Heath M.A. i in. (2005). Bibliotherapy: A Resource to Facilitate Emotional Healing and Growth. <em>School Psychology International</em>.</li>
              </ul>
            </section>

            {/* Internal links */}
            <section className="mt-8 p-6 bg-muted/20 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Czytaj dalej</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/artykuly/co-to-jest-biblioterapia", label: "Co to jest biblioterapia?" },
                  { href: "/artykuly/jak-dziala-biblioterapia", label: "Jak działa biblioterapia?" },
                  { href: "/artykuly/rodzaje-biblioterapii", label: "Rodzaje biblioterapii" },
                  { href: "/artykuly/biblioterapia-vs-psychoterapia", label: "Biblioterapia a psychoterapia" },
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
                <h2 className="text-2xl font-bold mb-4">Wypróbuj biblioterapię w praktyce</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nasze książki i gotowe scenariusze zajęć pozwalają prowadzić biblioterapię
                  nawet bez specjalistycznego szkolenia — wystarczy chęć i dobra książka.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/ksiazki" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg">
                    Nasze książki
                  </Link>
                  <Link href="/biblioterapia" className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg">
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
