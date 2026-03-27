import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function MityIFakty() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Mity i fakty o biblioterapii — weryfikacja popularnych przekonań",
        description:
          "Czy biblioterapia to tylko czytanie bajek? Czy zastępuje psychoterapię? Czy działa tylko na dzieci? Sprawdzamy 10 popularnych mitów o biblioterapii i konfrontujemy je z badaniami naukowymi.",
        author: { "@type": "Organization", name: "Redakcja biblioterapia.org" },
        publisher: {
          "@type": "Organization",
          name: "biblioterapia.org",
          url: "https://biblioterapia.org",
        },
        datePublished: "2026-03-27",
        dateModified: "2026-03-27",
        image: "https://biblioterapia.org/uploads/mity-i-fakty-o-biblioterapii-miniatura.jpg",
        url: "https://biblioterapia.org/artykuly/mity-i-fakty-o-biblioterapii",
        mainEntityOfPage: "https://biblioterapia.org/artykuly/mity-i-fakty-o-biblioterapii",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Czy biblioterapia to tylko czytanie bajek dzieciom?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nie. Biblioterapia obejmuje pracę z różnymi gatunkami literackimi (powieści, biografie, poezja, dramaty) i różnymi grupami wiekowymi — dziećmi, młodzieżą, dorosłymi i seniorami. Bajkoterapia to tylko jedna z podform biblioterapii, skierowana specyficznie do dzieci.",
            },
          },
          {
            "@type": "Question",
            name: "Czy biblioterapia zastępuje psychoterapię?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nie. Biblioterapia może być wartościowym uzupełnieniem psychoterapii lub samodzielną metodą wsparcia w sytuacjach trudnych mieszczących się w normie. Przy poważnych zaburzeniach psychicznych (depresja kliniczna, PTSD, zaburzenia osobowości) niezbędna jest psychoterapia lub psychiatria.",
            },
          },
          {
            "@type": "Question",
            name: "Czy samo czytanie książek to już biblioterapia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nie. Biblioterapia to celowy, ustrukturyzowany proces z intencjonalnie dobranym tekstem, prowadzony przez wykwalifikowaną osobę i zakończony refleksją. Czytanie dla przyjemności ma wiele korzyści zdrowotnych, ale nie jest równoważne z procesem biblioterapeutycznym.",
            },
          },
          {
            "@type": "Question",
            name: "Czy biblioterapia działa tylko na dzieci?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nie. Biblioterapia z dorosłymi i seniorami ma mocne podstawy dowodowe. Badania potwierdzają jej skuteczność m.in. w redukcji depresji i lęku u dorosłych (Cuijpers 1997, Gregory i in. 2004), w hospicjach i domach opieki, a self-help bibliotherapy jest jedną z najlepiej przebadanych form wsparcia psychicznego.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Mity i fakty o biblioterapii — weryfikacja popularnych przekonań"
        description="Czy biblioterapia to tylko czytanie bajek? Czy zastępuje psychoterapię? Czy działa tylko na dzieci? Sprawdzamy 10 popularnych mitów o biblioterapii i konfrontujemy je z badaniami naukowymi."
        url="https://biblioterapia.org/artykuly/mity-i-fakty-o-biblioterapii"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-accent">Strona główna</Link>
        <span className="mx-2">/</span>
        <Link href="/artykuly" className="hover:text-accent">Artykuły</Link>
        <span className="mx-2">/</span>
        <span>Mity i fakty o biblioterapii</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-hero py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              <BookOpen className="h-3 w-3" /> Edukacja
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Mity i fakty o biblioterapii — weryfikacja popularnych przekonań
          </h1>
          <p className="text-lg text-muted-foreground">
            „To tylko czytanie bajek", „zastępuje terapię", „działa tylko na dzieci" — sprawdzamy
            10 popularnych mitów o biblioterapii i konfrontujemy je z badaniami naukowymi.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Redakcja · 27 marca 2026 · 11 min czytania</p>
        </div>
      </div>

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12">

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          Biblioterapia budzi wiele nieporozumień — zarówno wśród rodziców i nauczycieli, którzy
          mogliby z niej skorzystać, jak i wśród profesjonalistów, którzy ją odrzucają nie do końca
          rozumiejąc, czym jest. Poniżej zebraliśmy najpowszechniejsze mity i odpowiedzieliśmy na
          każdy z nich, opierając się na dostępnych badaniach naukowych.
        </p>

        {/* TOC */}
        <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
          <p className="font-semibold text-sm uppercase tracking-wide mb-3 text-muted-foreground">Spis treści</p>
          <ol className="space-y-1 text-sm">
            <li><a href="#mit1" className="hover:text-accent">Mit 1: To tylko czytanie bajek dzieciom</a></li>
            <li><a href="#mit2" className="hover:text-accent">Mit 2: Biblioterapia zastępuje psychoterapię</a></li>
            <li><a href="#mit3" className="hover:text-accent">Mit 3: Samo czytanie to już biblioterapia</a></li>
            <li><a href="#mit4" className="hover:text-accent">Mit 4: Działa tylko na dzieci</a></li>
            <li><a href="#mit5" className="hover:text-accent">Mit 5: Nie ma dowodów naukowych</a></li>
            <li><a href="#mit6" className="hover:text-accent">Mit 6: Każda książka może być terapeutyczna</a></li>
            <li><a href="#mit7" className="hover:text-accent">Mit 7: Biblioterapeuta musi być psychologiem</a></li>
            <li><a href="#mit8" className="hover:text-accent">Mit 8: Biblioterapia to metoda dla słabych</a></li>
            <li><a href="#mit9" className="hover:text-accent">Mit 9: Wystarczy przeczytać jedną książkę</a></li>
            <li><a href="#mit10" className="hover:text-accent">Mit 10: Biblioterapia to nowa moda</a></li>
            <li><a href="#faq" className="hover:text-accent">Często zadawane pytania</a></li>
          </ol>
        </div>

        {/* Legenda */}
        <div className="flex flex-wrap gap-4 mb-10 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-sm bg-red-100 border border-red-300"></span>
            <span className="text-muted-foreground">MIT — nieprawdziwe przekonanie</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-sm bg-green-100 border border-green-300"></span>
            <span className="text-muted-foreground">FAKT — co mówią badania</span>
          </div>
        </div>

        {/* Mit 1 */}
        <section id="mit1" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 1</p>
            <p className="font-semibold text-lg">"Biblioterapia to tylko czytanie bajek dzieciom"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              Biblioterapia obejmuje pracę z całym spektrum gatunków literackich — powieściami,
              biografiami, poezją, dramatami, literaturą faktu — i adresowana jest do wszystkich
              grup wiekowych. Bajkoterapia to tylko jedna z podform, skierowana do dzieci.
              W hospicjach, domach opieki, szpitalach psychiatrycznych i gabinetach psychoterapeutycznych
              na całym świecie biblioterapia stosowana jest z dorosłymi i seniorami, często bez
              jednej bajki w programie.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Przykład: program <em>Reading Well for Adults</em> w Wielkiej Brytanii (część NHS)
              obejmuje wyłącznie literaturę dla dorosłych — poradniki psychologiczne oparte na
              terapii poznawczo-behawioralnej (CBT). Rocznie korzysta z niego ponad 500 000 osób.
            </p>
          </div>
        </section>

        {/* Mit 2 */}
        <section id="mit2" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 2</p>
            <p className="font-semibold text-lg">"Biblioterapia zastępuje psychoterapię"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              Biblioterapia i psychoterapia to różne narzędzia o różnym zasięgu. Biblioterapia może
              być cennym uzupełnieniem psychoterapii lub samodzielną metodą wsparcia w sytuacjach
              trudnych mieszczących się w normie psychologicznej. Nie zastępuje jednak specjalistycznej
              pomocy przy poważnych zaburzeniach: depresji klinicznej, PTSD, zaburzeniach osobowości,
              schizofrenii czy uzależnieniach.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Metaanaliza Cuijpersa (1997) pokazała, że self-help bibliotherapy jest skuteczna
              w łagodnej i umiarkowanej depresji, ale badacz wyraźnie wskazał, że przy ciężkiej
              depresji konieczna jest psychoterapia prowadzona przez terapeutę.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              → Więcej: <Link href="/artykuly/biblioterapia-vs-psychoterapia" className="text-accent hover:underline">Biblioterapia a psychoterapia — czym się różnią?</Link>
            </p>
          </div>
        </section>

        {/* Mit 3 */}
        <section id="mit3" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 3</p>
            <p className="font-semibold text-lg">"Samo czytanie książek to już biblioterapia"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              Czytanie dla przyjemności ma wiele udokumentowanych korzyści zdrowotnych (redukcja
              stresu, rozwijanie empatii, poprawa funkcji kognitywnych), ale nie jest równoważne
              z procesem biblioterapeutycznym. Biblioterapia to celowy, ustrukturyzowany proces
              z intencjonalnie dobranym tekstem, refleksją i omówieniem pod kierunkiem wykwalifikowanej
              osoby. Bez tego ostatniego elementu trudno mówić o biblioterapii w ścisłym sensie.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Analogia: tak jak nie każda rozmowa jest psychoterapią, nie każde czytanie jest
              biblioterapią. Kluczowy jest intencjonalny dobór materiału, cel terapeutyczny i
              ustrukturyzowana refleksja po lekturze.
            </p>
          </div>
        </section>

        {/* Mit 4 */}
        <section id="mit4" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 4</p>
            <p className="font-semibold text-lg">"Biblioterapia działa tylko na dzieci"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              Biblioterapia z dorosłymi i seniorami ma mocne i dobrze udokumentowane podstawy naukowe.
              Badania Cuijpersa (1997), Gregorego i in. (2004) oraz metaanaliza Firth i in. (2017)
              potwierdzają skuteczność self-help bibliotherapy w redukcji objawów depresji i lęku
              u dorosłych. Biblioterapia z seniorami wykazuje skuteczność w redukcji samotności,
              stymulacji poznawczej i poprawie jakości życia w domach opieki.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              W Polsce biblioterapia w domach seniora i domach kultury jest regularnie prowadzona
              przez Stowarzyszenie Bibliotekarzy Polskich (SBP) — bez bajek, za to z poezją,
              wspomnieniami i literaturą obyczajową.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              → Więcej: <Link href="/artykuly/dla-kogo-jest-biblioterapia" className="text-accent hover:underline">Dla kogo jest biblioterapia?</Link>
            </p>
          </div>
        </section>

        {/* Mit 5 */}
        <section id="mit5" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 5</p>
            <p className="font-semibold text-lg">"Biblioterapia nie ma żadnych dowodów naukowych"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              Biblioterapia jest jedną z lepiej przebadanych niefarmakologicznych metod wsparcia
              psychicznego. Kluczowe badania i metaanalizy:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>Cuijpers (1997)</strong> — pierwsza systematyczna metaanaliza (6 RCT):
                self-help bibliotherapy skuteczna w depresji, efekt porównywalny do psychoterapii
                indywidualnej przy łagodnej i umiarkowanej depresji.
              </li>
              <li>
                <strong>Gregory i in. (2004)</strong> — metaanaliza 29 badań: skuteczność potwierdzona
                w depresji, lęku i problemach behawioralnych u dzieci i dorosłych.
              </li>
              <li>
                <strong>Firth i in. (2017)</strong> — metaanaliza 13 RCT w <em>PLOS ONE</em>:
                self-help bibliotherapy przewyższa efektem brak leczenia przy depresji i lęku.
              </li>
              <li>
                <strong>NHS Reading Well programme</strong> — ogólnopolski program w Wielkiej Brytanii
                oparty na zasadzie "Books on Prescription", poparty badaniami klinicznymi od 2013 r.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              → Szczegółowo: <Link href="/artykuly/czy-biblioterapia-jest-skuteczna" className="text-accent hover:underline">Czy biblioterapia jest skuteczna? Przegląd badań naukowych</Link>
            </p>
          </div>
        </section>

        {/* Mit 6 */}
        <section id="mit6" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 6</p>
            <p className="font-semibold text-lg">"Każda dobra książka może być terapeutyczna"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt — częściowo</p>
            <p className="leading-relaxed">
              Każda literatura może działać kojąco lub angażująco, ale nie każda książka jest
              odpowiednim materiałem biblioterapeutycznym. Biblioterapeuta dobiera tekst ze względu
              na jego terapeutyczny potencjał — zdolność do wywołania identyfikacji, przepracowania
              konkretnego tematu i budowania zasobów. Źle dobrana książka może nawet zaszkodzić:
              tekst zbyt traumatyczny, zbyt blisko aktualnego kryzysu lub bez konstruktywnego
              rozwiązania może zwiększyć napięcie zamiast je łagodzić.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Przykład: dziecko w trakcie ostrego kryzysu po stracie rodzica nie powinno otrzymać
              książki z brutalnymi opisami śmierci — nawet jeśli jest to „dobra literatura". Materiał
              musi być dobrany do fazy radzenia sobie i aktualnych zasobów uczestnika.
            </p>
          </div>
        </section>

        {/* Mit 7 */}
        <section id="mit7" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 7</p>
            <p className="font-semibold text-lg">"Biblioterapeuta musi być psychologiem lub psychiatrą"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              W Polsce biblioterapeuta to zawód na pograniczu pedagogiki, psychologii i bibliotekoznawstwa.
              Może nim zostać psycholog, pedagog, logopeda, nauczyciel, bibliotekarz lub terapeuta
              zajęciowy — po odpowiednim szkoleniu. Biblioterapię kliniczną (w pracy z zaburzeniami)
              powinny prowadzić osoby z wykształceniem terapeutycznym. Biblioterapię rozwojową
              (profilaktyczną, z dziećmi w normie) może prowadzić pedagog lub wykształcony bibliotekarz.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Studia podyplomowe z biblioterapii oferuje m.in. Dolnośląska Szkoła Wyższa we Wrocławiu.
              Polskie Towarzystwo Biblioterapeutyczne prowadzi rejestr certyfikowanych biblioterapeutów.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              → Więcej: <Link href="/artykuly/biblioterapia-w-polsce" className="text-accent hover:underline">Biblioterapia w Polsce — szkolenia i certyfikacja</Link>
            </p>
          </div>
        </section>

        {/* Mit 8 */}
        <section id="mit8" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 8</p>
            <p className="font-semibold text-lg">"Korzystanie z biblioterapii oznacza, że jestem słaby lub chory"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              Zdecydowana większość biblioterapii prowadzona jest <strong>profilaktycznie i rozwojowo</strong>
              — z dziećmi w normie, z dorosłymi przechodzącymi przez trudne zmiany życiowe, z seniorami
              dbającymi o sprawność umysłową. Biblioterapia to narzędzie budowania zasobów, nie tylko
              leczenia deficytów. Korzystanie z niej jest wyrazem dbałości o zdrowie psychiczne,
              podobnie jak regularna aktywność fizyczna jest wyrazem dbałości o zdrowie fizyczne.
            </p>
          </div>
        </section>

        {/* Mit 9 */}
        <section id="mit9" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 9</p>
            <p className="font-semibold text-lg">"Wystarczy przeczytać jedną odpowiednią książkę, żeby się wyleczyć"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              Chociaż zdarzają się przypadki, gdy jedna książka ma głęboki wpływ na czytelnika,
              biblioterapia jako proces wymaga czasu. Metaanalizy pokazują, że skuteczna interwencja
              obejmuje zazwyczaj 4–16 tygodni pracy, z regularnym czytaniem i refleksją. Jeden tekst
              może być katalizatorem — ale zmiana postaw, rozumienia siebie i wzorców emocjonalnych
              zachodzi przez dłuższy, wieloetapowy proces.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              → Więcej: <Link href="/artykuly/jak-wyglada-sesja-biblioterapii" className="text-accent hover:underline">Ile trwa biblioterapia i jak wygląda sesja?</Link>
            </p>
          </div>
        </section>

        {/* Mit 10 */}
        <section id="mit10" className="scroll-mt-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Mit 10</p>
            <p className="font-semibold text-lg">"Biblioterapia to nowa moda, która szybko przeminie"</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Fakt</p>
            <p className="leading-relaxed">
              Lecznicze właściwości literatury znane są od starożytności — egipskie świątynie-biblioteki
              nosiły napis „Lekarstwo dla duszy". Termin „bibliotherapy" pojawił się po raz pierwszy
              w 1916 roku (Samuel McChord Crothers, <em>The Atlantic Monthly</em>). Pierwsze szpitalne
              programy biblioterapeutyczne w USA działały od lat 20. XX wieku.
            </p>
            <p className="leading-relaxed mt-3">
              Dziś biblioterapia jest integralną częścią systemu ochrony zdrowia psychicznego
              w Wielkiej Brytanii (NHS), Finlandii i Kanadzie. W Polsce działa Polskie Towarzystwo
              Biblioterapeutyczne oraz katedry biblioterapii na uczelniach. To nie moda — to stale
              rozwijająca się dziedzina z ponad 100-letnią historią naukową.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              → Więcej: <Link href="/artykuly/historia-biblioterapii" className="text-accent hover:underline">Historia biblioterapii — od starożytności do współczesności</Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">Często zadawane pytania</h2>

          <div className="space-y-5">
            {[
              {
                q: "Czy biblioterapia jest bezpieczna?",
                a: "W zdecydowanej większości zastosowań — tak. Biblioterapia rozwojowa i profilaktyczna jest bardzo bezpieczną metodą. Wyjątkiem jest praca kliniczna z osobami w ostrym kryzysie psychicznym lub z poważnymi zaburzeniami — tam wymaga nadzoru wykwalifikowanego terapeuty. Źle dobrany tekst może wywołać nadmierną aktywację emocjonalną, dlatego dobór materiałów jest kluczową kompetencją biblioterapeuty."
              },
              {
                q: "Czy biblioterapia działa online?",
                a: "Tak. Sesje biblioterapeutyczne mogą być prowadzone online i badania potwierdzają ich skuteczność w tej formie, szczególnie self-help bibliotherapy (samodzielne czytanie z minimalnym wsparciem terapeutycznym). Ograniczenia dotyczą pracy z małymi dziećmi, które potrzebują fizycznej obecności mediatora tekstu."
              },
              {
                q: "Czy biblioterapia jest odpłatna?",
                a: "Zależy od kontekstu. Biblioterapia w bibliotekach publicznych jest zazwyczaj bezpłatna. W gabinecie psychologa lub psychoterapeuty — odpłatna (podobnie jak psychoterapia). W szkole lub świetlicy — bezpłatna jako element zajęć. Wiele programów biblioterapeutycznych finansowanych jest przez samorządy lub fundacje."
              },
              {
                q: "Jak długo trzeba czekać na efekty biblioterapii?",
                a: "Pierwsze efekty — normalizacja emocji, poczucie bycia rozumianym — mogą pojawić się już po jednej-dwóch sesjach. Głębsze zmiany (przepracowanie trudnych doświadczeń, zmiana wzorców) wymagają dłuższego procesu: 6–16 sesji w zależności od celu i uczestnika."
              },
            ].map(({ q, a }) => (
              <details key={q} className="border border-border rounded-lg">
                <summary className="font-semibold cursor-pointer p-4 hover:text-accent">{q}</summary>
                <div className="px-4 pb-4 text-muted-foreground leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Podsumowanie */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-10">
          <h3 className="font-bold text-lg mb-2">Podsumowanie</h3>
          <p className="leading-relaxed text-muted-foreground">
            Biblioterapia to metoda z wieloletnią tradycją, rosnącą bazą dowodów naukowych i szerokim
            zastosowaniem — od pracy z dziećmi przez wspieranie dorosłych po opiekę nad seniorami.
            Mity, które ją otaczają, wynikają głównie z nieznajomości tej dziedziny. Warto je
            demaskować, bo mylne przekonania blokują dostęp do skutecznej i dostępnej formy wsparcia
            psychicznego.
          </p>
        </div>

        {/* Źródła */}
        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-muted-foreground">Źródła i literatura</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Cuijpers, P. (1997). Bibliotherapy in unipolar depression: a meta-analysis. <em>Journal of Behavior Therapy and Experimental Psychiatry</em>, 28(2), 139–147.</li>
            <li>Gregory, R. J., Canning, S. S., Lee, T. W., &amp; Wise, J. C. (2004). Cognitive bibliotherapy for depression: a meta-analysis. <em>Professional Psychology: Research and Practice</em>, 35(3), 275.</li>
            <li>Firth, N., Thayne, B., &amp; Firth, J. (2017). Self-help interventions for depressive disorders and depressive symptoms: a systematic review. <em>PLOS ONE</em>.</li>
            <li>NHS England (2023). <em>Reading Well Books on Prescription: evaluation report</em>. The Reading Agency.</li>
            <li>Mar, R. A., &amp; Oatley, K. (2008). The function of fiction is the abstraction and simulation of social experience. <em>Perspectives on Psychological Science</em>, 3(3), 173–192.</li>
            <li>Borecka, I. (2001). <em>Biblioterapia. Teoria i praktyka</em>. Stowarzyszenie Bibliotekarzy Polskich.</li>
          </ul>
        </div>

        {/* Czytaj dalej */}
        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-serif text-2xl font-bold mb-6">Czytaj dalej</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/artykuly/czy-biblioterapia-jest-skuteczna", title: "Czy biblioterapia jest skuteczna?", desc: "Przegląd badań i metaanaliz" },
              { href: "/artykuly/biblioterapia-vs-psychoterapia", title: "Biblioterapia a psychoterapia", desc: "Kiedy wystarczy książka, a kiedy terapeuta?" },
              { href: "/artykuly/dla-kogo-jest-biblioterapia", title: "Dla kogo jest biblioterapia?", desc: "Wskazania i grupy wiekowe" },
              { href: "/artykuly/historia-biblioterapii", title: "Historia biblioterapii", desc: "Od starożytności do współczesności" },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="border border-border rounded-lg p-4 hover:border-accent transition-colors">
                <p className="font-semibold text-sm mb-1">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-hero rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-3">Zacznij korzystać z biblioterapii</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Przeglądaj nasze scenariusze biblioterapeutyczne gotowe do pracy z dziećmi — oparte
            na sprawdzonych książkach i metodach.
          </p>
          <Link
            href="/biblioterapia/scenariusze"
            className="inline-block bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors shadow-md"
          >
            Zobacz scenariusze
          </Link>
        </div>

      </article>
    </Layout>
  );
}
