import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function SlownikPojec() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Najważniejsze pojęcia w biblioterapii — słownik dla początkujących",
        description:
          "Identyfikacja, katharsis, wgląd, bajkoterapia, biblioterapeuta — wszystkie kluczowe terminy biblioterapii wyjaśnione prostym językiem. Słownik dla rodziców, nauczycieli i terapeutów.",
        author: { "@type": "Organization", name: "Redakcja biblioterapia.org" },
        publisher: {
          "@type": "Organization",
          name: "biblioterapia.org",
          url: "https://biblioterapia.org",
        },
        datePublished: "2026-03-27",
        dateModified: "2026-03-27",
        image: "https://biblioterapia.org/uploads/slownik-pojec-biblioterapii-miniatura.jpg",
        url: "https://biblioterapia.org/artykuly/slownik-pojec-biblioterapii",
        mainEntityOfPage: "https://biblioterapia.org/artykuly/slownik-pojec-biblioterapii",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Co to jest biblioterapia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Biblioterapia to metoda terapeutyczna i psychoedukacyjna, która wykorzystuje literaturę — książki, bajki, wiersze, opowiadania — do wspomagania zdrowia emocjonalnego, psychicznego i społecznego. Może być stosowana przez terapeutów, pedagogów, bibliotekarzy oraz rodziców.",
            },
          },
          {
            "@type": "Question",
            name: "Kim jest biblioterapeuta?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Biblioterapeuta to osoba prowadząca sesje biblioterapeutyczne. W Polsce nie ma ujednoliconego systemu certyfikacji — biblioterapeutą może być psycholog, pedagog, logopeda, bibliotekarz lub terapeuta zajęciowy po ukończeniu specjalistycznych szkoleń lub studiów podyplomowych z biblioterapii.",
            },
          },
          {
            "@type": "Question",
            name: "Co to jest katharsis w biblioterapii?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Katharsis (gr. oczyszczenie) to mechanizm terapeutyczny, w którym czytelnik doświadcza emocjonalnego ulgi poprzez przeżycie silnych uczuć razem z bohaterem książki. Dzięki bezpiecznemu kontenerowi, jakim jest fikcja, można rozładować nagromadzone napięcie emocjonalne.",
            },
          },
          {
            "@type": "Question",
            name: "Czym różni się bajkoterapia od biblioterapii?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bajkoterapia to forma biblioterapii skierowana specjalnie do dzieci, wykorzystująca bajki terapeutyczne. Biblioterapia jest szerszym pojęciem obejmującym wszystkie grupy wiekowe i różne gatunki literackie: powieści, wiersze, biografie, dramaty i inne.",
            },
          },
          {
            "@type": "Question",
            name: "Co to jest identyfikacja w biblioterapii?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Identyfikacja to mechanizm, w którym czytelnik utożsamia się z bohaterem książki — rozpoznaje w nim siebie, swoje problemy i emocje. To punkt wyjścia procesu terapeutycznego: poczucie, że to jest o mnie, otwiera drogę do przepracowania trudnych doświadczeń.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Najważniejsze pojęcia w biblioterapii — słownik dla początkujących"
        description="Identyfikacja, katharsis, wgląd, bajkoterapia, biblioterapeuta — wszystkie kluczowe terminy biblioterapii wyjaśnione prostym językiem. Słownik dla rodziców, nauczycieli i terapeutów."
        url="https://biblioterapia.org/artykuly/slownik-pojec-biblioterapii"
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
        <span>Słownik pojęć biblioterapii</span>
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
            Najważniejsze pojęcia w biblioterapii — słownik dla początkujących
          </h1>
          <p className="text-lg text-muted-foreground">
            Identyfikacja, katharsis, wgląd, bajkoterapia, biblioterapeuta — wszystkie kluczowe terminy
            wyjaśnione prostym językiem, z przykładami i odniesieniami do polskiej praktyki.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Redakcja · 27 marca 2026 · 12 min czytania</p>
        </div>
      </div>

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12">

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          Wchodząc w świat biblioterapii, można natknąć się na terminy, które brzmią akademicko lub obco.
          Ten słownik zbiera w jednym miejscu wszystkie pojęcia, które warto znać — niezależnie od tego,
          czy jesteś rodzicem szukającym wsparcia dla dziecka, nauczycielem, pedagogiem, czy zaczynasz
          szkolenie biblioterapeutyczne. Hasła ułożone są tematycznie, a nie alfabetycznie, żeby łatwiej
          było zobaczyć, jak do siebie pasują.
        </p>

        {/* TOC */}
        <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
          <p className="font-semibold text-sm uppercase tracking-wide mb-3 text-muted-foreground">Spis treści</p>
          <ol className="space-y-1 text-sm">
            <li><a href="#czym-jest" className="hover:text-accent">1. Czym jest biblioterapia — definicja i zakres</a></li>
            <li><a href="#mechanizmy" className="hover:text-accent">2. Mechanizmy terapeutyczne (identyfikacja, projekcja, katharsis, wgląd)</a></li>
            <li><a href="#rodzaje" className="hover:text-accent">3. Rodzaje biblioterapii</a></li>
            <li><a href="#osoby" className="hover:text-accent">4. Osoby i role w procesie biblioterapeutycznym</a></li>
            <li><a href="#materialy" className="hover:text-accent">5. Materiały biblioterapeutyczne</a></li>
            <li><a href="#sesja" className="hover:text-accent">6. Terminy dotyczące sesji</a></li>
            <li><a href="#kontekst" className="hover:text-accent">7. Pojęcia z kontekstu psychologicznego i pedagogicznego</a></li>
            <li><a href="#faq" className="hover:text-accent">8. Często zadawane pytania</a></li>
          </ol>
        </div>

        {/* 1. Definicja */}
        <section id="czym-jest" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">1. Czym jest biblioterapia — definicja i zakres</h2>

          <div className="space-y-5">
            <div className="border-l-4 border-accent pl-5 py-2">
              <p className="font-bold text-lg mb-1">Biblioterapia</p>
              <p>
                Metoda terapeutyczna i psychoedukacyjna wykorzystująca literaturę do wspomagania zdrowia
                emocjonalnego, psychicznego i społecznego. Pochodzi od greckich słów <em>biblion</em> (książka)
                i <em>therapeia</em> (leczenie, opieka). Może być stosowana klinicznie (przez terapeutów),
                rozwojowo (przez pedagogów i bibliotekarzy) lub instytucjonalnie (w szpitalach, domach opieki).
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                → Szczegółowo: <Link href="/artykuly/co-to-jest-biblioterapia" className="text-accent hover:underline">Co to jest biblioterapia?</Link>
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Bajkoterapia</p>
              <p>
                Forma biblioterapii skierowana do dzieci (zwłaszcza w wieku 3–10 lat), wykorzystująca
                specjalnie napisane bajki terapeutyczne. Bajka terapeutyczna różni się od klasycznej bajki tym,
                że bohater mierzy się z konkretnym problemem emocjonalnym lub sytuacyjnym (np. lęk przed
                ciemnością, śmierć bliskiej osoby, przeprowadzka) i wychodzi z niego z nowym zasobem.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                → Szczegółowo: <Link href="/artykuly/bajkoterapia" className="text-accent hover:underline">Bajkoterapia — kompletny przewodnik</Link>
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Poetoterapia</p>
              <p>
                Poddziedzina biblioterapii, w której głównym materiałem terapeutycznym są wiersze i poezja.
                Stosowana zarówno w formie receptywnej (słuchanie/czytanie wierszy) jak i ekspresywnej
                (pisanie własnej poezji jako forma ekspresji emocjonalnej). Popularna w pracy z dorosłymi
                i seniorami.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Narracyjna terapia (narracyjność w biblioterapii)</p>
              <p>
                Podejście, w którym kluczową rolę gra historia — zarówno ta opowiedziana w książce, jak
                i historia życia klienta. Terapeuta pomaga „przepisać" narrację z deficytowej na zasobową.
                Biblioterapia czerpie z narracyjnej tradycji terapeutycznej jako jeden z mechanizmów pracy.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Mechanizmy */}
        <section id="mechanizmy" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">2. Mechanizmy terapeutyczne</h2>
          <p className="mb-6">
            Cztery podstawowe mechanizmy opisują, <em>jak</em> literatura działa terapeutycznie.
            Zostały opisane przez Carolyn Shrodes w jej pionierskiej dysertacji z 1949 roku i są do dziś
            fundamentem teorii biblioterapii. Każdy z nich można aktywować świadomie dobierając materiał
            czytelniczy.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            → Rozszerzone omówienie z przykładami: <Link href="/artykuly/identyfikacja-katharsis-wglad-biblioterapia" className="text-accent hover:underline">Identyfikacja, katharsis i wgląd w biblioterapii</Link>
          </p>

          <div className="space-y-5">
            <div className="border-l-4 border-accent pl-5 py-2">
              <p className="font-bold text-lg mb-1">Identyfikacja</p>
              <p>
                Mechanizm, w którym czytelnik utożsamia się z bohaterem — rozpoznaje w nim siebie, swoje
                uczucia i problemy. To punkt wyjścia procesu terapeutycznego. Poczucie „to jest o mnie"
                przełamuje izolację i poczucie bycia jedyną osobą z danym problemem. Silna identyfikacja
                jest sygnałem, że materiał czytelniczy jest trafnie dobrany.
              </p>
              <p className="text-sm text-muted-foreground mt-1 italic">Przykład: dziecko po rozwodzie rodziców słucha bajki o zwierzęciu, które mieszka w dwóch domach i rozpoznaje swoje uczucia.</p>
            </div>

            <div className="border-l-4 border-blue-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Projekcja</p>
              <p>
                Mechanizm obronny, w którym czytelnik przypisuje swoje własne uczucia i myśli bohaterowi
                zamiast wyrażać je wprost. Fikcyjny dystans umożliwia bezpieczne przyjrzenie się emocjom,
                które byłyby zbyt trudne do bezpośredniego omówienia. W pracy z dziećmi projekcja jest
                szczególnie cenna — „to nie ja się boję, to miś".
              </p>
              <p className="text-sm text-muted-foreground mt-1 italic">Przykład: dziecko zapytane o to, co czuje bohater, opisuje własne emocje, nie wypowiadając ich jako swoje.</p>
            </div>

            <div className="border-l-4 border-green-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Katharsis</p>
              <p>
                Termin wywodzący się z filozofii Arystotelesa (Poetyka). Oznacza oczyszczenie emocjonalne
                — doświadczenie ulgi poprzez przeżycie intensywnych uczuć razem z bohaterem. W bezpiecznym
                kontenerze fikcji czytelnik może „wypłakać się" przy cudzej historii, „rozładować" gniew
                lub strach, co prowadzi do zmniejszenia napięcia emocjonalnego.
              </p>
              <p className="text-sm text-muted-foreground mt-1 italic">Przykład: czytelnik płacze przy lekturze książki o żałobie, co otwiera go na rozmowę o własnej stracie.</p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Wgląd (insight)</p>
              <p>
                Najgłębszy i najbardziej „terapeutyczny" mechanizm — rozumienie siebie samego, swoich
                wzorców zachowania i emocji zdobyte poprzez lekturę. Wgląd nie jest tylko intelektualnym
                rozumieniem; to emocjonalne rozpoznanie: „teraz rozumiem, dlaczego tak reagowałem". Stanowi
                punkt zwrotny w procesie zmiany.
              </p>
              <p className="text-sm text-muted-foreground mt-1 italic">Przykład: dorosły czytający o dysfunkcjonalnej rodzinie rozpoznaje wzorce ze swojego dzieciństwa i zyskuje nowe rozumienie własnych relacji.</p>
            </div>
          </div>
        </section>

        {/* 3. Rodzaje */}
        <section id="rodzaje" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">3. Rodzaje biblioterapii</h2>
          <p className="text-sm text-muted-foreground mb-6">
            → Szczegółowo: <Link href="/artykuly/rodzaje-biblioterapii" className="text-accent hover:underline">Rodzaje biblioterapii — kliniczna, rozwojowa i instytucjonalna</Link>
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border border-border font-semibold">Rodzaj</th>
                  <th className="text-left p-3 border border-border font-semibold">Kto prowadzi</th>
                  <th className="text-left p-3 border border-border font-semibold">Cel</th>
                  <th className="text-left p-3 border border-border font-semibold">Gdzie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-medium">Kliniczna</td>
                  <td className="p-3 border border-border">Psycholog, psychoterapeuta</td>
                  <td className="p-3 border border-border">Leczenie zaburzeń psychicznych</td>
                  <td className="p-3 border border-border">Gabinet, szpital, klinika</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-medium">Rozwojowa</td>
                  <td className="p-3 border border-border">Pedagog, bibliotekarz, rodzic</td>
                  <td className="p-3 border border-border">Wsparcie w normie, profilaktyka</td>
                  <td className="p-3 border border-border">Dom, szkoła, biblioteka</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Instytucjonalna</td>
                  <td className="p-3 border border-border">Terapeuta zajęciowy, bibliotekarz</td>
                  <td className="p-3 border border-border">Rehabilitacja, socjalizacja</td>
                  <td className="p-3 border border-border">Dom opieki, szpital, zakład</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-5 py-2">
              <p className="font-bold text-lg mb-1">Biblioterapia receptywna</p>
              <p>
                Forma biblioterapii, w której uczestnik <strong>czyta lub słucha</strong> gotowego tekstu
                literackiego wybranego przez biblioterapeutę. Jest to najczęstsza forma — obejmuje czytanie
                książek, słuchanie audiobooków, czytanie wspólne na głos.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Biblioterapia ekspresywna (kreatywna)</p>
              <p>
                Forma, w której uczestnik <strong>sam tworzy</strong> tekst literacki — pisze dziennik,
                bajkę, wiersz, historię. Tworzenie staje się tu narzędziem ekspresji i przepracowania
                emocji. Popularna w terapii traumy i w pracy z nastolatkami.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Osoby i role */}
        <section id="osoby" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">4. Osoby i role w procesie biblioterapeutycznym</h2>

          <div className="space-y-5">
            <div className="border-l-4 border-accent pl-5 py-2">
              <p className="font-bold text-lg mb-1">Biblioterapeuta</p>
              <p>
                Osoba prowadząca sesje biblioterapeutyczne. W Polsce nie ma jednolitego systemu
                certyfikacji — biblioterapeutą może być psycholog, pedagog, logopeda, bibliotekarz
                lub terapeuta zajęciowy po ukończeniu studiów podyplomowych (np. na Dolnośląskiej Szkole
                Wyższej we Wrocławiu) lub akredytowanych kursów. Biblioterapeuta dobiera materiały,
                prowadzi dyskusję i wspiera uczestnika w przepracowywaniu treści.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                → Więcej: <Link href="/artykuly/biblioterapia-w-polsce" className="text-accent hover:underline">Biblioterapia w Polsce — szkolenia i instytucje</Link>
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Uczestnik / klient</p>
              <p>
                Osoba, dla której prowadzona jest biblioterapia. W zależności od kontekstu może to być
                pacjent, podopieczny, uczeń, dziecko lub dorosły. W biblioterapii grupowej używa się
                często terminu <strong>uczestnik</strong>, w indywidualnej — <strong>klient</strong>.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Mediator tekstu</p>
              <p>
                Termin stosowany w biblioterapii dziecięcej — osoba dorosła (rodzic, nauczyciel),
                która pośredniczy między dzieckiem a tekstem: czyta na głos, zadaje pytania, inicjuje
                rozmowę. Mediator tekstu nie musi być wykształconym biblioterapeutą — może nim być
                każdy zaangażowany dorosły.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Materiały */}
        <section id="materialy" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">5. Materiały biblioterapeutyczne</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-5 py-2">
              <p className="font-bold text-lg mb-1">Bajka terapeutyczna</p>
              <p>
                Bajka napisana z myślą o konkretnym problemie emocjonalnym lub trudnej sytuacji życiowej.
                Różni się od klasycznej bajki tym, że bohater mierzy się z problemem podobnym do
                problemu dziecka — i wychodzi z niego z nowym zasobem lub zrozumieniem. Zawiera:
                bohatera o podobnych cechach do czytelnika, konflikt, rozwiązanie i wzmocnienie zasobu.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Bibliobiografia / autobiografia terapeutyczna</p>
              <p>
                Gatunek literatury faktu — biografie, pamiętniki i dzienniki osób, które przeżyły
                trudne doświadczenia (choroba, trauma, strata). Stosowany w biblioterapii z dorosłymi
                jako forma normalizacji i inspiracji. Przykład: pamiętniki ozdrowieńców po depresji.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Biblioteka terapeutyczna</p>
              <p>
                Zbiór starannie wyselekcjonowanych książek do pracy biblioterapeutycznej w danej instytucji
                (szpital, szkoła, biblioteka publiczna). W Polsce programem <em>Reading Well</em>
                (wzorowanym na brytyjskim Books on Prescription) zajmuje się kilka bibliotek publicznych.
                Pełna lista dostępna jest u <a href="https://www.sbp.pl" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Stowarzyszenia Bibliotekarzy Polskich (SBP)</a>.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Tekst wyzwalający / trigger text</p>
              <p>
                Fragment tekstu literackiego wybrany przez biblioterapeutę jako punkt wyjścia do dyskusji
                lub pracy emocjonalnej. Może to być jeden akapit, wiersz lub ilustracja. Dobrze dobrany
                tekst wyzwalający aktywuje identyfikację i otwiera na rozmowę.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Sesja */}
        <section id="sesja" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">6. Terminy dotyczące sesji</h2>
          <p className="text-sm text-muted-foreground mb-6">
            → Szczegółowo: <Link href="/artykuly/jak-wyglada-sesja-biblioterapii" className="text-accent hover:underline">Jak wygląda sesja biblioterapii?</Link>
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-5 py-2">
              <p className="font-bold text-lg mb-1">Sesja biblioterapeutyczna</p>
              <p>
                Jednostkowe spotkanie w ramach procesu biblioterapeutycznego. Trwa zwykle 45–90 minut
                i składa się z czterech faz: wstępnej (nawiązanie kontaktu), właściwej (praca z tekstem),
                refleksji (omówienie) oraz zamknięcia.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Kontrakt terapeutyczny</p>
              <p>
                Formalne lub nieformalne ustalenie celów, zasad i granic procesu biblioterapeutycznego
                między biblioterapeutą a uczestnikiem (lub rodzicami, jeśli uczestnikiem jest dziecko).
                Określa częstotliwość spotkań, materiały, zasadę poufności.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Omówienie porefleksyjne / debriefing</p>
              <p>
                Rozmowa po lekturze lub ćwiczeniu, w której biblioterapeuta zadaje otwarte pytania
                o uczucia, myśli i refleksje uczestnika. To kluczowa faza sesji — samo czytanie bez
                omówienia ma ograniczone działanie terapeutyczne.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Zadanie domowe biblioterapeutyczne</p>
              <p>
                Lektura lub ćwiczenie pisarskie zaproponowane przez biblioterapeutę do wykonania między
                sesjami. Może obejmować czytanie wyznaczonego rozdziału, prowadzenie dziennika emocji
                lub napisanie listu do bohatera książki.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Pojęcia psychologiczne */}
        <section id="kontekst" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">7. Pojęcia z kontekstu psychologicznego i pedagogicznego</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-5 py-2">
              <p className="font-bold text-lg mb-1">Fikcyjny dystans (fictional distance)</p>
              <p>
                Psychologiczny mechanizm ochronny tworzony przez fikcję: przeżywając historię bohatera,
                czytelnik utrzymuje bezpieczny dystans od własnych bolących doświadczeń. Dystans ten
                umożliwia pracę z tematami, które byłyby zbyt trudne do podjęcia wprost.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Normalizacja</p>
              <p>
                Proces, w którym czytelnik uświadamia sobie, że jego emocje i doświadczenia są normalne
                i przeżywane przez innych ludzi. Literatura wzmacnia poczucie normalności — „nie tylko
                ja tak mam". Normalizacja zmniejsza wstyd i poczucie izolacji.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Reframing (przeformułowanie)</p>
              <p>
                Technika, w której zmienia się sposób postrzegania sytuacji lub zachowania bez zmiany
                samej sytuacji. W biblioterapii bohater (a za nim czytelnik) zyskuje nową perspektywę
                na swój problem — zamiast katastrofy widzi wyzwanie.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Empatia narracyjna</p>
              <p>
                Zdolność do wczucia się w perspektywę bohatera literackiego. Badania (m.in. Mar &amp; Oatley,
                2008, <em>Perspectives on Psychological Science</em>) pokazują, że regularne czytanie fikcji
                wzmacnia empatię — zarówno poznawczą, jak i emocjonalną — w codziennym życiu.
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Mentalizacja</p>
              <p>
                Zdolność do rozumienia własnych i cudzych stanów psychicznych (myśli, uczuć, intencji).
                Biblioterapia — szczególnie bajkoterapia — wspiera rozwój mentalizacji u dzieci poprzez
                rozmowę o tym, co myślał i czuł bohater oraz dlaczego zachował się w określony sposób.
              </p>
            </div>

            <div className="border-l-4 border-pink-400 pl-5 py-2">
              <p className="font-bold text-lg mb-1">Regulacja emocji</p>
              <p>
                Zdolność do zarządzania własnymi emocjami — ich rozpoznawania, wyrażania i modulowania
                intensywności. Biblioterapia wspiera regulację emocji, dając dzieciom (i dorosłym) język
                do nazywania uczuć oraz modele radzenia sobie z trudnymi emocjami na przykładzie bohaterów.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">8. Często zadawane pytania</h2>

          <div className="space-y-5">
            {[
              {
                q: "Czy biblioterapia to to samo co czytanie książek dla przyjemności?",
                a: "Nie. Biblioterapia jest celowym, ustrukturyzowanym procesem, w którym dobór tekstu jest intencjonalny, a czytaniu towarzyszy refleksja i omówienie z prowadzącym. Czytanie dla przyjemności ma wiele korzyści, ale nie jest równoznaczne z procesem terapeutycznym."
              },
              {
                q: "Czy biblioterapia zastępuje psychoterapię?",
                a: "Biblioterapia nie zastępuje psychoterapii przy poważnych zaburzeniach psychicznych. Może być jej uzupełnieniem lub samodzielną metodą wsparcia w sytuacjach trudnych, ale mieszczących się w normie. Przy objawach wymagających diagnozy i leczenia (depresja, PTSD, zaburzenia lękowe) niezbędna jest konsultacja z psychiatrą lub psychoterapeutą."
              },
              {
                q: "Jaka jest różnica między bajką terapeutyczną a bajką psychoedukacyjną?",
                a: "Bajka terapeutyczna skupia się na pracy emocjonalnej — bohater przeżywa trudności i transformuje je dzięki swoim zasobom. Bajka psychoedukacyjna ma bardziej dydaktyczny charakter — dostarcza informacji o danym temacie (np. o tym, czym jest prąd elektryczny). Granica bywa płynna, ale cel jest odmienny."
              },
              {
                q: "Jak długo trwa biblioterapia?",
                a: "Zależy od celu. Interwencja biblioterapeutyczna w konkretnej trudnej sytuacji (np. przeprowadzka, narodziny rodzeństwa) może trwać 3–5 sesji. Dłuższa praca nad wzorcami emocjonalnymi lub budowaniem zasobów trwa zwykle 8–16 sesji. Biblioterapia w ramach psychoterapii może towarzyszyć całemu procesowi terapeutycznemu."
              },
              {
                q: "Czy można prowadzić biblioterapię bez żadnego przygotowania?",
                a: "Biblioterapię rozwojową — wspólne czytanie z dzieckiem i rozmowę o emocjach bohaterów — może stosować każdy zaangażowany rodzic lub nauczyciel. Biblioterapię kliniczną (w pracy z zaburzeniami) powinny prowadzić wyłącznie osoby z odpowiednim wykształceniem terapeutycznym."
              }
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
            Biblioterapia to rozbudowana dziedzina z własnym słownictwem, jednak jej kluczowe mechanizmy
            — identyfikacja, projekcja, katharsis i wgląd — są intuicyjne dla każdego, kto kiedykolwiek
            poczuł ulgę czytając o kimś, kto przeżył to samo co on. Znajomość pojęć pomaga bardziej
            świadomie korzystać z literatury jako narzędzia wsparcia — zarówno dla siebie, jak i dla
            innych.
          </p>
        </div>

        {/* Źródła */}
        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-muted-foreground">Źródła i literatura</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Shrodes, C. (1949). <em>Bibliotherapy: A Theoretical and Clinical-Experimental Study</em>. University of California.</li>
            <li>Rubin, R. J. (1978). <em>Bibliotherapy Sourcebook</em>. Oryx Press.</li>
            <li>Mar, R. A., &amp; Oatley, K. (2008). The function of fiction is the abstraction and simulation of social experience. <em>Perspectives on Psychological Science</em>, 3(3), 173–192.</li>
            <li>Tomasik, E. (1994). <em>Czytelnictwo i biblioterapia w pedagogice specjalnej</em>. Wydawnictwo WSPS, Warszawa.</li>
            <li>Borecka, I. (2001). <em>Biblioterapia. Teoria i praktyka</em>. Stowarzyszenie Bibliotekarzy Polskich.</li>
            <li>Konieczna, E. J. (2006). <em>Arteterapia w teorii i praktyce</em>. Oficyna Wydawnicza Impuls.</li>
          </ul>
        </div>

        {/* Czytaj dalej */}
        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-serif text-2xl font-bold mb-6">Czytaj dalej</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/artykuly/jak-dziala-biblioterapia", title: "Jak działa biblioterapia?", desc: "Mechanizmy terapeutyczne w praktyce" },
              { href: "/artykuly/identyfikacja-katharsis-wglad-biblioterapia", title: "Identyfikacja, katharsis i wgląd", desc: "Szczegółowe omówienie 4 mechanizmów" },
              { href: "/artykuly/rodzaje-biblioterapii", title: "Rodzaje biblioterapii", desc: "Kliniczna, rozwojowa i instytucjonalna" },
              { href: "/artykuly/biblioterapia-w-polsce", title: "Biblioterapia w Polsce", desc: "Historia, instytucje i szkolenia" },
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
            Przeglądaj nasze scenariusze biblioterapeutyczne do pracy z dziećmi — gotowe do użycia,
            oparte na sprawdzonych książkach.
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
