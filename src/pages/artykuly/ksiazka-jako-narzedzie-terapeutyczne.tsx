import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function KsiazkaJakoNarzedzieTerapeutyczne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Książka jako narzędzie terapeutyczne — dlaczego literatura leczy?",
        description:
          "Co sprawia, że słowa na stronie mogą zmieniać nasze emocje, myśli i zachowania? Neurobiologia czytania, mechanizmy psychologiczne i badania naukowe wyjaśniające leczniczą moc literatury.",
        author: { "@type": "Organization", name: "Redakcja biblioterapia.org" },
        publisher: {
          "@type": "Organization",
          name: "biblioterapia.org",
          url: "https://biblioterapia.org",
        },
        datePublished: "2026-03-27",
        dateModified: "2026-03-27",
        image: "https://biblioterapia.org/uploads/ksiazka-jako-narzedzie-terapeutyczne-miniatura.jpg",
        url: "https://biblioterapia.org/artykuly/ksiazka-jako-narzedzie-terapeutyczne",
        mainEntityOfPage: "https://biblioterapia.org/artykuly/ksiazka-jako-narzedzie-terapeutyczne",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Dlaczego literatura może leczyć?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Literatura leczy przez kilka równoległych mechanizmów: aktywuje neurony lustrzane (umożliwiając empatyczne przeżywanie), normalizuje trudne emocje (pokazując, że inni przeżywają to samo), stwarza bezpieczny fikcyjny dystans do konfrontacji z trudnymi tematami, uruchamia katharsis (oczyszczenie emocjonalne) i wgląd (rozumienie siebie). Badania neuroobrazowania pokazują, że mózg przetwarza fikcję podobnie do rzeczywistych doświadczeń.",
            },
          },
          {
            "@type": "Question",
            name: "Jakie cechy musi mieć książka terapeutyczna?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dobra książka terapeutyczna powinna: (1) umożliwiać identyfikację — czytelnik musi rozpoznać siebie lub swoje doświadczenie w bohaterze, (2) dotykać aktualnego problemu czytelnika, (3) zawierać konstruktywne rozwiązanie lub nową perspektywę, (4) być odpowiednia do poziomu rozwojowego i emocjonalnego czytelnika, (5) nie retraumatyzować — nie opisywać szczegółowo traumatycznych treści bez kontekstu terapeutycznego.",
            },
          },
          {
            "@type": "Question",
            name: "Czy audiobooki działają tak samo jak czytanie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Badania pokazują, że słuchanie audiobooków i czytanie angażują podobne obszary mózgu odpowiedzialne za przetwarzanie semantyczne i emocjonalne. Różnica dotyczy głównie tempa i sposobu przetwarzania informacji. W biblioterapii obie formy są akceptowane — wybór zależy od potrzeb i preferencji uczestnika.",
            },
          },
          {
            "@type": "Question",
            name: "Czy czytanie naprawdę zmniejsza stres?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tak. Badanie University of Sussex (2009, dr David Lewis) wykazało, że 6 minut czytania zmniejsza poziom stresu o 68% — skuteczniej niż słuchanie muzyki (61%), spacer (42%) czy gra wideo (21%). Redukcja stresu była mierzona tętnem i napięciem mięśniowym.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Książka jako narzędzie terapeutyczne — dlaczego literatura leczy?"
        description="Co sprawia, że słowa na stronie mogą zmieniać nasze emocje, myśli i zachowania? Neurobiologia czytania, mechanizmy psychologiczne i badania naukowe wyjaśniające leczniczą moc literatury."
        url="https://biblioterapia.org/artykuly/ksiazka-jako-narzedzie-terapeutyczne"
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
        <span>Książka jako narzędzie terapeutyczne</span>
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
            Książka jako narzędzie terapeutyczne — dlaczego literatura leczy?
          </h1>
          <p className="text-lg text-muted-foreground">
            Co sprawia, że słowa na stronie mogą zmieniać nasze emocje, myśli i zachowania?
            Neurobiologia czytania, mechanizmy psychologiczne i dowody naukowe.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Redakcja · 27 marca 2026 · 13 min czytania</p>
        </div>
      </div>

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12">

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          Od tysiącleci ludzie intuicyjnie wiedzieli, że opowieści leczą. Egipskie świątynie-biblioteki
          miały napis „Lekarstwo dla duszy". Arystoteles opisał katharsis — oczyszczenie przez tragedię.
          Dziś neuronauka wyjaśnia, <em>dlaczego</em> tak jest. Mózg czytający fikcję aktywuje te same
          obszary, co mózg przeżywający rzeczywistość. Empatia rośnie. Napięcie opada. Perspektywa
          się zmienia. W tym artykule przyglądamy się temu procesowi od środka.
        </p>

        {/* TOC */}
        <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
          <p className="font-semibold text-sm uppercase tracking-wide mb-3 text-muted-foreground">Spis treści</p>
          <ol className="space-y-1 text-sm">
            <li><a href="#neurobiologia" className="hover:text-accent">1. Co dzieje się w mózgu podczas czytania — neurobiologia</a></li>
            <li><a href="#mechanizmy" className="hover:text-accent">2. Mechanizmy psychologiczne leczniczego działania literatury</a></li>
            <li><a href="#cechy-ksiazki" className="hover:text-accent">3. Jakie cechy musi mieć książka terapeutyczna?</a></li>
            <li><a href="#dowody" className="hover:text-accent">4. Co mówią badania naukowe</a></li>
            <li><a href="#praktyka" className="hover:text-accent">5. Jak stosować książkę jako narzędzie terapeutyczne?</a></li>
            <li><a href="#faq" className="hover:text-accent">6. Często zadawane pytania</a></li>
          </ol>
        </div>

        {/* 1. Neurobiologia */}
        <section id="neurobiologia" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">1. Co dzieje się w mózgu podczas czytania?</h2>

          <p className="mb-6">
            Przez długi czas zakładano, że czytanie fikcji to „tylko" intelektualna zabawa — przetwarzanie
            słów bez realnego znaczenia dla emocji czy zachowań. Neuronauka ostatnich dwóch dekad
            obaliła ten pogląd.
          </p>

          <h3 className="font-semibold text-xl mb-4">Symulacja rzeczywistości w mózgu</h3>
          <p className="mb-4">
            Badania Mara i Oatleya (2008) z Uniwersytetu Toronto wykazały, że czytanie fikcji aktywuje
            te same sieci neuronalne co rzeczywiste doświadczenia społeczne. Kiedy czytamy o bohaterze,
            który biegnie, aktywują się obszary odpowiedzialne za ruch. Kiedy bohater czuje strach —
            aktywuje się ciało migdałowate, centrum emocji. Mózg nie odróżnia dobrze fikcji od
            rzeczywistości na poziomie emocjonalnym.
          </p>

          <div className="border-l-4 border-accent pl-5 py-2 mb-6">
            <p className="font-semibold mb-1">Neurony lustrzane i empatia narracyjna</p>
            <p className="text-muted-foreground">
              Neurony lustrzane — komórki odkryte przez Giacomo Rizzolattiego w latach 90. — aktywują
              się zarówno wtedy, gdy sami wykonujemy czynność, jak i gdy obserwujemy inną osobę.
              Podczas czytania fikcji działają one podobnie: przeżywamy doświadczenia bohatera „od środka",
              co buduje empatię i zdolność przyjmowania cudzej perspektywy.
            </p>
          </div>

          <h3 className="font-semibold text-xl mb-4">Czytanie a redukcja kortyzolu</h3>
          <p className="mb-4">
            Badanie z University of Sussex (Lewis, 2009) mierzyło poziom stresu (tętno, napięcie mięśni,
            kortyzol) u uczestników po różnych metodach relaksacji. Sześć minut czytania zmniejszyło
            stres o <strong>68%</strong> — więcej niż słuchanie muzyki (61%), spacer (42%) czy gra wideo
            (21%). Mechanizm: pełna koncentracja na tekście angażuje korę prefrontalną i wycisza
            układ limbiczny (centrum reakcji stresowej).
          </p>

          <h3 className="font-semibold text-xl mb-4">Teoria umysłu i „transport narracyjny"</h3>
          <p className="mb-6">
            Green i Brock (2000) opisali zjawisko <em>transportation</em> — „wciągnięcia" w narrację,
            podczas którego czytelnik traci poczucie własnej rzeczywistości i całkowicie wchodzi w
            świat historii. Ten stan głębokiego zaangażowania koreluje ze wzrostem empatii, zmianą
            postaw i głębszym przetwarzaniem emocjonalnym — i jest tym skuteczniejszy terapeutycznie,
            im silniejszy.
          </p>
        </section>

        {/* 2. Mechanizmy psychologiczne */}
        <section id="mechanizmy" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">2. Mechanizmy psychologiczne leczniczego działania literatury</h2>

          <p className="mb-4 text-muted-foreground text-sm">
            → Szczegółowe omówienie z przykładami z konkretnych książek: <Link href="/artykuly/identyfikacja-katharsis-wglad-biblioterapia" className="text-accent hover:underline">Identyfikacja, katharsis i wgląd w biblioterapii</Link>
          </p>

          <div className="space-y-5">
            <div className="border-l-4 border-accent pl-5 py-3">
              <p className="font-bold text-lg mb-2">Identyfikacja i normalizacja</p>
              <p className="text-muted-foreground">
                Kiedy czytelnik rozpoznaje siebie w bohaterze, doświadcza potężnego poczucia ulgi:
                „nie jestem jedynym". To normalizacja — jeden z najsilniejszych mechanizmów terapeutycznych.
                Izolacja wzmacnia cierpienie; literatura ją przełamuje, pokazując, że trudne emocje
                są powszechnym ludzkim doświadczeniem.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-5 py-3">
              <p className="font-bold text-lg mb-2">Fikcyjny dystans jako kontener bezpieczeństwa</p>
              <p className="text-muted-foreground">
                Fikcja stwarza bezpieczny dystans: czytelnik może zbliżyć się do bolesnego tematu
                (śmierci, rozwodu, traumy, choroby) bez pełnej konfrontacji z własnym doświadczeniem.
                To umożliwia przepracowanie emocji, które w bezpośrednim kontakcie byłyby zbyt
                przytłaczające. W pracy z dziećmi mechanizm ten jest szczególnie cenny — metafora
                bajkowa chroni wrażliwe ego dziecka.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-5 py-3">
              <p className="font-bold text-lg mb-2">Katharsis — oczyszczenie przez przeżycie</p>
              <p className="text-muted-foreground">
                Arystoteles opisał katharsis jako oczyszczenie przez tragedię w teatrze. W biblioterapii
                mechanizm działa podobnie: przeżycie intensywnych emocji razem z bohaterem (strach,
                smutek, gniew) w bezpiecznym kontenerze fikcji prowadzi do rozładowania nagromadzonego
                napięcia. Łzy przy cudzej historii często otwierają na rozmowę o własnej.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-5 py-3">
              <p className="font-bold text-lg mb-2">Wgląd — rozumienie siebie przez lustro literatury</p>
              <p className="text-muted-foreground">
                Literatura działa jak lustro — pozwala zobaczyć własne wzorce myślenia, uczucia i
                zachowania z zewnątrz. Rozpoznanie własnej dynamiki w postaci fikcyjnej (wgląd) jest
                punktem zwrotnym w procesie zmiany. To nie intelektualne rozumienie, lecz emocjonalne
                rozpoznanie: „teraz widzę, dlaczego tak reaguję".
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-5 py-3">
              <p className="font-bold text-lg mb-2">Modelowanie zachowań i zasoby</p>
              <p className="text-muted-foreground">
                Bohaterowie książek modelują sposoby radzenia sobie z trudnościami. Dziecko czytające
                o miśku, który boi się ciemności i stopniowo pokonuje strach, uczy się strategii
                radzenia sobie. Dorosły czytający biografie osób, które wyszły z depresji, buduje
                nadzieję i widzenie siebie jako zdolnego do zmiany.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Cechy książki terapeutycznej */}
        <section id="cechy-ksiazki" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">3. Jakie cechy musi mieć książka terapeutyczna?</h2>

          <p className="mb-6">
            Nie każda dobra książka jest dobrą książką terapeutyczną. Biblioterapeuta dobiera materiał
            ze względu na konkretny cel terapeutyczny i aktualny stan uczestnika. Oto kryteria
            dobrego materiału biblioterapeutycznego:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border border-border font-semibold">Kryterium</th>
                  <th className="text-left p-3 border border-border font-semibold">Opis</th>
                  <th className="text-left p-3 border border-border font-semibold">Dlaczego ważne?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-medium">Identyfikowalność bohatera</td>
                  <td className="p-3 border border-border">Czytelnik może rozpoznać siebie lub swoje doświadczenie</td>
                  <td className="p-3 border border-border">Uruchamia identyfikację i normalizację</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-medium">Adekwatność tematu</td>
                  <td className="p-3 border border-border">Tekst dotyczy aktualnego problemu uczestnika</td>
                  <td className="p-3 border border-border">Zapewnia relevancję i motywację</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Konstruktywne rozwiązanie</td>
                  <td className="p-3 border border-border">Bohater wychodzi z trudności z nowym zasobem</td>
                  <td className="p-3 border border-border">Modeluje skuteczne radzenie sobie</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-medium">Odpowiedni poziom trudności</td>
                  <td className="p-3 border border-border">Dostosowanie do wieku, etapu rozwoju i aktualnych zasobów</td>
                  <td className="p-3 border border-border">Zapobiega przeciążeniu lub nudzie</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Bezpieczeństwo narracyjne</td>
                  <td className="p-3 border border-border">Brak retraumatyzacji, przemoc i trauma pokazane z dystansem</td>
                  <td className="p-3 border border-border">Zapewnia fikcyjny dystans jako kontener</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-medium">Walory literackie</td>
                  <td className="p-3 border border-border">Tekst angażuje emocjonalnie i estetycznie</td>
                  <td className="p-3 border border-border">Wspiera „transport narracyjny"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <p className="font-semibold mb-2">Uwaga: kiedy książka może zaszkodzić?</p>
            <p className="text-sm text-muted-foreground">
              Źle dobrana książka może zwiększyć napięcie zamiast je łagodzić. Szczególna ostrożność
              jest wskazana przy: (1) tekście zbyt blisko aktualnego kryzysu uczestnika bez odpowiedniego
              wsparcia, (2) materiale z brutalnymi lub szczegółowymi opisami traumy, (3) tekście bez
              konstruktywnego zakończenia podawanym osobie w głębokiej depresji, (4) zbyt zaawansowanym
              tekście dla małego dziecka.
            </p>
          </div>
        </section>

        {/* 4. Dowody naukowe */}
        <section id="dowody" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">4. Co mówią badania naukowe</h2>

          <p className="mb-4 text-muted-foreground text-sm">
            → Pełny przegląd: <Link href="/artykuly/czy-biblioterapia-jest-skuteczna" className="text-accent hover:underline">Czy biblioterapia jest skuteczna? Przegląd badań naukowych</Link>
          </p>

          <div className="space-y-5">
            <div className="border-l-4 border-accent pl-5 py-3">
              <p className="font-bold mb-1">Stres i relaksacja — University of Sussex (2009)</p>
              <p className="text-sm text-muted-foreground">
                Dr David Lewis zbadał wpływ różnych aktywności na poziom stresu. <strong>6 minut czytania
                zmniejszyło stres o 68%</strong> — więcej niż muzyka (61%), spacer (42%) czy gra wideo (21%).
                Uczestnicy mieli mierzone tętno, napięcie mięśni i subiektywny poziom stresu.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-5 py-3">
              <p className="font-bold mb-1">Empatia i teoria umysłu — Mar i Oatley (2008)</p>
              <p className="text-sm text-muted-foreground">
                Badanie opublikowane w <em>Perspectives on Psychological Science</em> wykazało, że osoby
                czytające więcej fikcji osiągają lepsze wyniki w testach teorii umysłu (zdolność
                rozumienia stanów psychicznych innych). Efekt był specyficzny dla fikcji — czytanie
                literatury faktu takiego efektu nie wykazywało.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-5 py-3">
              <p className="font-bold mb-1">Depresja — metaanaliza Cuijpersa (1997)</p>
              <p className="text-sm text-muted-foreground">
                Pierwsza systematyczna metaanaliza biblioterapii (6 RCT, <em>Journal of Behavior Therapy
                and Experimental Psychiatry</em>) wykazała skuteczność self-help bibliotherapy w łagodnej
                i umiarkowanej depresji. Rozmiar efektu (d = 0,82) był porównywalny z psychoterapią
                indywidualną.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-5 py-3">
              <p className="font-bold mb-1">Dzieci i problemy behawioralne — Gregory i in. (2004)</p>
              <p className="text-sm text-muted-foreground">
                Metaanaliza 29 badań (554 uczestników) wykazała skuteczność biblioterapii w redukcji
                problemów behawioralnych i emocjonalnych u dzieci, ze szczególną skutecznością
                w lęku separacyjnym, zaburzeniach uwagi i problemach z radzeniem sobie ze stratą.
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-5 py-3">
              <p className="font-bold mb-1">Starzenie się i demencja — Billington i in. (2013)</p>
              <p className="text-sm text-muted-foreground">
                Badanie prowadzone przez The Reader Organisation (Liverpool) wykazało, że regularne
                sesje czytania na głos w grupach seniorów z demencją poprawiają komunikację, zmniejszają
                agitację i poprawiają jakość życia. Program <em>Read to Lead</em> działał skutecznie
                nawet u osób z zaawansowaną chorobą Alzheimera.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Praktyka */}
        <section id="praktyka" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">5. Jak stosować książkę jako narzędzie terapeutyczne?</h2>

          <p className="mb-6">
            Potencjał terapeutyczny książki ujawnia się w pełni, gdy czytaniu towarzyszy refleksja.
            Oto praktyczny schemat do zastosowania — zarówno przez profesjonalistów, jak i przez
            rodziców w domu.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold mb-1">Dobierz tekst do potrzeb i możliwości</p>
                <p className="text-sm text-muted-foreground">Wybierz materiał adekwatny do aktualnego problemu, wieku i stanu emocjonalnego uczestnika. Unikaj tekstów zbyt bliskich aktualnej traumy lub zbyt odległych od doświadczenia czytelnika.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold mb-1">Stwórz przestrzeń bezpieczeństwa</p>
                <p className="text-sm text-muted-foreground">Czytaj w spokojnym miejscu, bez pośpiechu. W pracy z dziećmi stwórz rytuał — stała pora, ten sam fotel, herbata. Bezpieczna atmosfera wzmacnia „transport narracyjny".</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold mb-1">Czytaj razem i z zaangażowaniem</p>
                <p className="text-sm text-muted-foreground">W pracy z dziećmi czytaj na głos z ekspresją. Zatrzymaj się przy szczególnie ważnych momentach. Daj chwilę ciszy po trudnych fragmentach — niech emocje „osiądą".</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold mb-1">Omów — to najważniejsza część</p>
                <p className="text-sm text-muted-foreground">Zadaj otwarte pytania: <em>Co czuł bohater? Co byś zrobił na jego miejscu? Czy zdarzyło ci się coś podobnego? Co cię zaskoczyło?</em> Nie oceniaj odpowiedzi — słuchaj aktywnie.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <p className="font-semibold mb-1">Zakończ zamknięciem i zadaniem domowym</p>
                <p className="text-sm text-muted-foreground">Podsumuj rozmowę pozytywnie. Możesz zaproponować rysunek, napisanie listu do bohatera lub dokończenie historii jako ćwiczenie między sesjami.</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mt-8">
            <p className="font-semibold mb-2">Przykładowe pytania do omówienia porefleksyjnego:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Co najbardziej zapadło Ci w pamięć z tej historii?</li>
              <li>• Który bohater był Ci najbliższy? Dlaczego?</li>
              <li>• Co czuł bohater w najtrudniejszym momencie?</li>
              <li>• Czy kiedyś czułeś coś podobnego?</li>
              <li>• Co pomogło bohaterowi wyjść z trudnej sytuacji?</li>
              <li>• Czego ta historia Cię uczy?</li>
              <li>• Co zrobiłbyś inaczej, gdybyś był bohaterem?</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">6. Często zadawane pytania</h2>

          <div className="space-y-5">
            {[
              {
                q: "Czy audiobooki działają tak samo jak czytanie?",
                a: "Badania (Rogowsky i in., 2016) pokazują, że słuchanie audiobooków i czytanie angażują podobne obszary mózgu odpowiedzialne za przetwarzanie semantyczne i emocjonalne. Różnice dotyczą głównie tempa przetwarzania. W biblioterapii obie formy są akceptowane — wybór zależy od potrzeb uczestnika. Dla dzieci z dysleksją audiobook może być bardziej dostępną i skuteczną formą."
              },
              {
                q: "Ile trzeba czytać, żeby zauważyć efekty?",
                a: "Redukcja stresu pojawia się już po 6 minutach czytania (Lewis 2009). Głębsze efekty terapeutyczne — normalizacja emocji, wgląd, zmiana perspektywy — wymagają regularności: optymalnie 20–30 minut dziennie przez kilka tygodni. W ramach biblioterapii klinicznej strukturę narzuca terapeuta."
              },
              {
                q: "Czy e-czytniki są tak samo skuteczne jak papierowe książki?",
                a: "Badania są niejednoznaczne. Niektóre wskazują, że czytanie na papierze sprzyja głębszemu przetwarzaniu i lepszemu zapamiętywaniu (Mangen i in., 2013). Inne nie wykazują różnicy emocjonalnej. W biblioterapii ważniejszy jest dobór tekstu niż nośnik — zarówno papier, jak i e-czytnik mogą być skuteczne."
              },
              {
                q: "Jak dobierać książki dla dzieci z konkretnymi trudnościami?",
                a: "Kluczowe zasady: (1) bohater ma mieć podobny wiek i płeć do dziecka, (2) temat musi odpowiadać aktualnemu wyzwaniu, (3) rozwiązanie musi być realistyczne i oparte na zasobach bohatera (nie na magii i przypadku), (4) język i ilustracje muszą być dostosowane do wieku. Nasze scenariusze biblioterapeutyczne zawierają gotowe propozycje do konkretnych sytuacji."
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
            Książka leczy, bo mózg traktuje fikcję poważnie — niemal jak rzeczywistość. Neurony lustrzane
            aktywują empatię. Identyfikacja z bohaterem przełamuje izolację. Fikcyjny dystans pozwala
            zbliżyć się do trudnych tematów bez przytłoczenia. Katharsis rozładowuje napięcie. Wgląd
            zmienia perspektywę. To nie metafora — to neuronauka. Właśnie dlatego literatura leczy
            od tysięcy lat i będzie leczyć nadal.
          </p>
        </div>

        {/* Źródła */}
        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-muted-foreground">Źródła i literatura</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Lewis, D. (2009). <em>Galaxy Stress Research</em>. MindLab International, University of Sussex.</li>
            <li>Mar, R. A., &amp; Oatley, K. (2008). The function of fiction is the abstraction and simulation of social experience. <em>Perspectives on Psychological Science</em>, 3(3), 173–192.</li>
            <li>Green, M. C., &amp; Brock, T. C. (2000). The role of transportation in the persuasiveness of public narratives. <em>Journal of Personality and Social Psychology</em>, 79(5), 701–721.</li>
            <li>Cuijpers, P. (1997). Bibliotherapy in unipolar depression: a meta-analysis. <em>Journal of Behavior Therapy and Experimental Psychiatry</em>, 28(2), 139–147.</li>
            <li>Gregory, R. J., Canning, S. S., Lee, T. W., &amp; Wise, J. C. (2004). Cognitive bibliotherapy for depression: a meta-analysis. <em>Professional Psychology: Research and Practice</em>, 35(3), 275.</li>
            <li>Billington, J., Carroll, J., Davis, P., Healey, C., &amp; Kinderman, P. (2013). A literature-based intervention for older people living with dementia. <em>Perspectives in Public Health</em>, 133(3), 165–173.</li>
            <li>Mangen, A., Walgermo, B. R., &amp; Brønnick, K. (2013). Reading linear texts on paper versus computer screen: Effects on reading comprehension. <em>International Journal of Educational Research</em>, 58, 61–68.</li>
            <li>Rizzolatti, G., &amp; Craighero, L. (2004). The mirror-neuron system. <em>Annual Review of Neuroscience</em>, 27, 169–192.</li>
          </ul>
        </div>

        {/* Czytaj dalej */}
        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-serif text-2xl font-bold mb-6">Czytaj dalej</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/artykuly/jak-dziala-biblioterapia", title: "Jak działa biblioterapia?", desc: "Mechanizmy terapeutyczne w praktyce" },
              { href: "/artykuly/identyfikacja-katharsis-wglad-biblioterapia", title: "Identyfikacja, katharsis i wgląd", desc: "Szczegółowe omówienie 4 mechanizmów z przykładami" },
              { href: "/artykuly/czy-biblioterapia-jest-skuteczna", title: "Czy biblioterapia jest skuteczna?", desc: "Przegląd metaanaliz i badań klinicznych" },
              { href: "/artykuly/mity-i-fakty-o-biblioterapii", title: "Mity i fakty o biblioterapii", desc: "Weryfikacja 10 popularnych przekonań" },
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
          <h3 className="font-serif text-2xl font-bold mb-3">Wypróbuj biblioterapię w praktyce</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Nasze scenariusze biblioterapeutyczne to gotowe narzędzia do pracy z dziećmi —
            oparte na sprawdzonych książkach i metodach terapeutycznych.
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
