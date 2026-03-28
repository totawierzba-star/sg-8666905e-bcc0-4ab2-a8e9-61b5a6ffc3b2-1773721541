import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function BiblioterapiaDlaDzieci() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Biblioterapia dla dzieci — jak książki pomagają najmłodszym?",
        description:
          "Jak książki wpływają na emocje i rozwój dzieci? Kompletny przewodnik o biblioterapii dziecięcej — mechanizmy działania, korzyści, wiek, przykłady i wskazówki dla rodziców.",
        author: { "@type": "Organization", name: "Redakcja biblioterapia.org" },
        publisher: { "@type": "Organization", name: "biblioterapia.org", url: "https://biblioterapia.org" },
        datePublished: "2026-03-28",
        dateModified: "2026-03-28",
        image: "https://biblioterapia.org/uploads/biblioterapia-dla-dzieci-miniatura.jpg",
        url: "https://biblioterapia.org/artykuly/biblioterapia-dla-dzieci",
        mainEntityOfPage: "https://biblioterapia.org/artykuly/biblioterapia-dla-dzieci",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Od jakiego wieku można stosować biblioterapię z dzieckiem?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Biblioterapię można stosować już od 2–3 roku życia — w formie wspólnego czytania książek z obrazkami i rozmowy o emocjach bohaterów. Z dziećmi poniżej 2 lat stosuje się czytanie jako stymulację językową i budowanie więzi, nie jako interwencję terapeutyczną.",
            },
          },
          {
            "@type": "Question",
            name: "Jak biblioterapia pomaga dzieciom?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Biblioterapia pomaga dzieciom przez kilka mechanizmów: identyfikację z bohaterem (normalizacja emocji), fikcyjny dystans (bezpieczne przeżycie trudnych tematów), katharsis (rozładowanie napięcia emocjonalnego), wgląd (rozumienie własnych reakcji) i modelowanie (nauka strategii radzenia sobie z problemami).",
            },
          },
          {
            "@type": "Question",
            name: "Czy rodzic może sam prowadzić biblioterapię z dzieckiem?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tak — biblioterapię rozwojową (profilaktyczną, w normie psychologicznej) może prowadzić każdy zaangażowany rodzic. Wystarczy odpowiednio dobrać książkę i po lekturze przeprowadzić otwartą rozmowę o emocjach bohaterów. Biblioterapia kliniczna przy poważnych zaburzeniach wymaga wykwalifikowanego specjalisty.",
            },
          },
          {
            "@type": "Question",
            name: "Ile trwa sesja biblioterapeutyczna z dzieckiem?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sesja biblioterapeutyczna z dzieckiem trwa zwykle 20–45 minut (w zależności od wieku). Dla dzieci 3–5 lat: 15–20 minut. Dla dzieci 6–10 lat: 20–35 minut. Dla dzieci powyżej 10 lat: 30–45 minut. Kluczowe jest tempo dziecka — nie należy go poganiać.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia dla dzieci — jak książki pomagają najmłodszym?"
        description="Jak książki wpływają na emocje i rozwój dzieci? Kompletny przewodnik o biblioterapii dziecięcej — mechanizmy działania, korzyści, wiek, przykłady i wskazówki dla rodziców."
        url="https://biblioterapia.org/artykuly/biblioterapia-dla-dzieci"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-accent">Strona główna</Link>
        <span className="mx-2">/</span>
        <Link href="/artykuly" className="hover:text-accent">Artykuły</Link>
        <span className="mx-2">/</span>
        <span>Biblioterapia dla dzieci</span>
      </nav>

      <div className="bg-gradient-hero py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              <BookOpen className="h-3 w-3" /> Przewodnik
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Biblioterapia dla dzieci — jak książki pomagają najmłodszym?
          </h1>
          <p className="text-lg text-muted-foreground">
            Dlaczego bajka o smutnym misiu może pomóc dziecku przeżyć przeprowadzkę? Jak wspólne
            czytanie buduje odporność emocjonalną? Kompletny przewodnik dla rodziców i opiekunów.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Redakcja · 28 marca 2026 · 13 min czytania</p>
        </div>
      </div>

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12">

        <p className="text-lg leading-relaxed mb-6">
          Dzieci przeżywają te same trudne emocje co dorośli — strach, smutek, złość, wstyd, niepewność.
          Różnica polega na tym, że nie mają jeszcze języka ani narzędzi, by je nazwać i przepracować.
          Tu wkraczają książki. Biblioterapia dziecięca to jeden z najlepiej udokumentowanych sposobów
          wspierania zdrowia emocjonalnego dzieci — dostępny każdemu rodzicowi, opiekunowi i nauczycielowi.
        </p>

        <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
          <p className="font-semibold text-sm uppercase tracking-wide mb-3 text-muted-foreground">Spis treści</p>
          <ol className="space-y-1 text-sm">
            <li><a href="#jak-dziala" className="hover:text-accent">1. Jak biblioterapia działa na dziecko — mechanizmy</a></li>
            <li><a href="#korzysci" className="hover:text-accent">2. Korzyści biblioterapii dla dzieci</a></li>
            <li><a href="#wiek" className="hover:text-accent">3. Biblioterapia według wieku dziecka</a></li>
            <li><a href="#jak-prowadzic" className="hover:text-accent">4. Jak prowadzić sesję biblioterapeutyczną z dzieckiem?</a></li>
            <li><a href="#ksiazki" className="hover:text-accent">5. Jakie książki wybrać?</a></li>
            <li><a href="#sygnaly" className="hover:text-accent">6. Kiedy biblioterapia, a kiedy specjalista?</a></li>
            <li><a href="#faq" className="hover:text-accent">7. Często zadawane pytania</a></li>
          </ol>
        </div>

        <section id="jak-dziala" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">1. Jak biblioterapia działa na dziecko?</h2>
          <p className="mb-6">
            Dziecko nie potrafi powiedzieć: mam lęk separacyjny. Ale może powiedzieć:
            miś też się bał, gdy mama wychodziła. Ten jeden krok — od abstrakcji do konkretu —
            to serce biblioterapii dziecięcej. Działa przez pięć wzajemnie powiązanych mechanizmów:
          </p>
          <div className="space-y-4">
            {[
              { kolor: "accent", nazwa: "Identyfikacja", opis: "Dziecko rozpoznaje siebie w bohaterze. Poczucie, że ktoś inny też tak ma, przełamuje izolację i wstyd. Dzieci bardzo silnie identyfikują się z bohaterami, którzy mają podobny wiek, płeć i problem." },
              { kolor: "blue-400", nazwa: "Fikcyjny dystans", opis: "Fikcja tworzy bezpieczną przestrzeń: dziecko może zbliżyć się do trudnego tematu (śmierć, rozwód, przemoc) bez bezpośredniej konfrontacji z własnym bólem. Metafora bajkowa chroni wrażliwe ego dziecka." },
              { kolor: "green-400", nazwa: "Katharsis", opis: "Przeżycie silnych emocji razem z bohaterem prowadzi do emocjonalnego rozładowania. Łzy przy bajce o żałobie, śmiech przy historii o wstydzie — to nie eskapizm, to przepracowywanie." },
              { kolor: "yellow-400", nazwa: "Wgląd", opis: "Po zakończeniu lektury dziecko może zobaczyć swoje własne zachowanie z zewnątrz: teraz rozumie, że złość mogła wynikać ze strachu, a nie złośliwości. To punkt wyjścia do zmiany." },
              { kolor: "purple-400", nazwa: "Modelowanie", opis: "Bohater demonstruje sposoby radzenia sobie z trudnością. Dziecko uczy się przez obserwację: jeśli miś znalazł sposób na strach przed ciemnością, może ja też znajdę." },
            ].map(({ kolor, nazwa, opis }) => (
              <div key={nazwa} className={`border-l-4 border-${kolor} pl-5 py-2`}>
                <p className="font-bold mb-1">{nazwa}</p>
                <p className="text-muted-foreground text-sm">{opis}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            → Szczegółowo: <Link href="/artykuly/identyfikacja-katharsis-wglad-biblioterapia" className="text-accent hover:underline">Identyfikacja, katharsis i wgląd w biblioterapii</Link>
          </p>
        </section>

        <section id="korzysci" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">2. Korzyści biblioterapii dla dzieci</h2>
          <p className="mb-6">
            Metaanaliza Gregorego i in. (2004, 29 badań, 554 uczestników) potwierdziła skuteczność
            biblioterapii w redukcji problemów emocjonalnych i behawioralnych u dzieci. Badania
            wskazują na następujące korzyści:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { tytul: "Regulacja emocji", opis: "Dzieci uczą się rozpoznawać, nazywać i modulować trudne emocje — gniew, strach, smutek, zazdrość." },
              { tytul: "Rozwój empatii", opis: "Wchodzenie w perspektywę bohaterów buduje zdolność rozumienia cudzych uczuć i potrzeb (teoria umysłu)." },
              { tytul: "Normalizacja trudnych doświadczeń", opis: "Dziecko dowiaduje się, że nie jest jedyne z danym problemem. Zmniejsza się wstyd i poczucie izolacji." },
              { tytul: "Wzbogacenie słownika emocji", opis: "Literatura dostarcza języka do opisania stanów wewnętrznych, które dziecko przeżywa, ale nie umie nazwać." },
              { tytul: "Budowanie zasobów radzenia sobie", opis: "Bohaterowie modelują strategie: proszenie o pomoc, oddychanie, rozmowa, twórcze rozwiązywanie problemów." },
              { tytul: "Wzmacnianie więzi z rodzicem", opis: "Wspólne czytanie i rozmowa o emocjach budują bezpieczne przywiązanie i zaufanie." },
            ].map(({ tytul, opis }) => (
              <div key={tytul} className="border border-border rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{tytul}</p>
                <p className="text-xs text-muted-foreground">{opis}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="wiek" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">3. Biblioterapia według wieku dziecka</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border border-border">Wiek</th>
                  <th className="text-left p-3 border border-border">Forma</th>
                  <th className="text-left p-3 border border-border">Materiał</th>
                  <th className="text-left p-3 border border-border">Czas sesji</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-medium">2–4 lata</td>
                  <td className="p-3 border border-border">Czytanie na głos przez dorosłego</td>
                  <td className="p-3 border border-border">Książki obrazkowe, prosta fabuła</td>
                  <td className="p-3 border border-border">10–15 min</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-medium">5–7 lat</td>
                  <td className="p-3 border border-border">Czytanie razem, rozmowa z pytaniami</td>
                  <td className="p-3 border border-border">Bajki terapeutyczne, krótkie opowiadania</td>
                  <td className="p-3 border border-border">20–25 min</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">8–10 lat</td>
                  <td className="p-3 border border-border">Czytanie samodzielne lub wspólne, omawianie</td>
                  <td className="p-3 border border-border">Powieści dla dzieci, opowiadania tematyczne</td>
                  <td className="p-3 border border-border">30–35 min</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-medium">11–12 lat</td>
                  <td className="p-3 border border-border">Czytanie własne + sesja omówienia</td>
                  <td className="p-3 border border-border">Powieści, autobiografie, komiksy</td>
                  <td className="p-3 border border-border">35–45 min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            → Biblioterapia dla nastolatków (13+): <Link href="/artykuly/biblioterapia-dla-nastolatkow" className="text-accent hover:underline">osobny artykuł</Link>
          </p>
        </section>

        <section id="jak-prowadzic" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">4. Jak prowadzić sesję z dzieckiem?</h2>
          <p className="mb-6">
            Biblioterapia w domu nie wymaga specjalistycznego przygotowania — wymaga czasu, uwagi
            i dobrej książki. Oto pięć kroków skutecznej sesji:
          </p>
          <div className="space-y-4">
            {[
              { n: "1", t: "Wybierz odpowiednią książkę", o: "Bohater podobny do dziecka (wiek, płeć, problem). Konstruktywne zakończenie. Dostosowany poziom językowy. Skorzystaj z naszych rekomendacji poniżej." },
              { n: "2", t: "Stwórz rytuał", o: "Stała pora, wygodne miejsce, cisza. Rytuał sygnalizuje dziecku, że to czas specjalny — bezpieczny i tylko dla niego." },
              { n: "3", t: "Czytaj z ekspresją", o: "Moduluj głos. Zatrzymuj się przy ważnych momentach. Daj chwilę ciszy po trudnych fragmentach." },
              { n: "4", t: "Zadawaj otwarte pytania", o: "Co czuł bohater? Co byś zrobił/a na jego miejscu? Czy zdarzyło ci się coś podobnego? Nie oceniaj odpowiedzi — słuchaj aktywnie." },
              { n: "5", t: "Zaproponuj aktywność", o: "Rysunek sceny z książki, list do bohatera, wymyślenie innego zakończenia. Ekspresja twórcza utrwala emocjonalne przeżycie lektury." },
            ].map(({ n, t, o }) => (
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">{n}</div>
                <div>
                  <p className="font-semibold mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground">{o}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            → Więcej: <Link href="/artykuly/jak-wyglada-sesja-biblioterapii" className="text-accent hover:underline">Jak wygląda sesja biblioterapii krok po kroku?</Link>
          </p>
        </section>

        <section id="ksiazki" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">5. Jakie książki wybrać?</h2>
          <p className="mb-4">
            Wydawnictwo Albus specjalizuje się w książkach terapeutycznych dla dzieci tworzonych
            z myślą o biblioterapii. Każda z nich porusza konkretny temat emocjonalny i zawiera
            wskazówki dla dorosłych:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { href: "/ksiazki/zaba", tytul: "Żaba", temat: "Żałoba i strata bliskiej osoby", wiek: "4–8 lat" },
              { href: "/ksiazki/tkaczka-chmur", tytul: "Tkaczka Chmur", temat: "Trudne emocje: smutek, gniew, rozpacz", wiek: "5–9 lat" },
              { href: "/ksiazki/skok", tytul: "Skok", temat: "Nadpobudliwość, ADHD, energia", wiek: "6–10 lat" },
              { href: "/ksiazki/kaluzysko", tytul: "Kałużysko", temat: "Depresja dziecięca, bezsilność", wiek: "7–12 lat" },
            ].map(({ href, tytul, temat, wiek }) => (
              <Link key={href} href={href} className="border border-border rounded-lg p-4 hover:border-accent transition-colors">
                <p className="font-semibold text-sm mb-1">{tytul}</p>
                <p className="text-xs text-muted-foreground mb-1">{temat}</p>
                <p className="text-xs text-accent font-medium">{wiek}</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            → Kryteria wyboru: <Link href="/artykuly/jak-wybrac-ksiazke-terapeutyczna" className="text-accent hover:underline">Jak wybrać książkę terapeutyczną dla dziecka?</Link>
          </p>
        </section>

        <section id="sygnaly" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">6. Kiedy biblioterapia, a kiedy specjalista?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-800 mb-3">Biblioterapia w domu wystarczy, gdy:</p>
              <ul className="space-y-2 text-sm text-green-700">
                <li>→ Dziecko przechodzi przez normalne wyzwania życiowe (przeprowadzka, nowe przedszkole, narodziny rodzeństwa)</li>
                <li>→ Emocje są silne, ale krótkotrwałe i nie zaburzają codziennego funkcjonowania</li>
                <li>→ Dziecko chętnie rozmawia o emocjach bohaterów</li>
                <li>→ Rodzic czuje się pewnie w rozmowie z dzieckiem</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-800 mb-3">Skonsultuj się ze specjalistą, gdy:</p>
              <ul className="space-y-2 text-sm text-red-700">
                <li>→ Trudności trwają dłużej niż 4–6 tygodni i nasilają się</li>
                <li>→ Dziecko odmawia jedzenia, snu, kontaktu z rówieśnikami</li>
                <li>→ Pojawiają się moczenie nocne, tiki, lęki uniemożliwiające funkcjonowanie</li>
                <li>→ Dziecko przeżyło traumę lub poważną stratę</li>
                <li>→ Biblioterapia nie przynosi poprawy po 6–8 sesjach</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">7. Często zadawane pytania</h2>
          <div className="space-y-4">
            {[
              { q: "Od jakiego wieku można stosować biblioterapię?", a: "Już od 2–3 roku życia — w formie wspólnego czytania obrazkowych książek z prostą fabułą i rozmowy o tym, co czuł bohater. Dzieci poniżej 2 lat korzystają na czytaniu jako stymulacji językowej i budowaniu więzi, choć trudno mówić tu o terapeutycznym działaniu." },
              { q: "Czy można stosować biblioterapię samodzielnie jako rodzic?", a: "Tak — biblioterapię rozwojową (profilaktyczną, z dziećmi w normie psychologicznej) może prowadzić każdy zaangażowany rodzic. Wystarczy dobrze dobrać książkę i przeprowadzić otwartą rozmowę po lekturze. Biblioterapia kliniczna wymaga wykwalifikowanego specjalisty." },
              { q: "Ile czasu potrzeba, żeby zobaczyć efekty?", a: "Pierwsze efekty (normalizacja emocji, otwarcie na rozmowę) można zaobserwować już po 2–3 sesjach. Głębsze zmiany (regulacja emocji, zmiana wzorców zachowania) pojawiają się po 6–12 sesjach prowadzonych regularnie." },
              { q: "Czy biblioterapia działa lepiej indywidualnie czy w grupie?", a: "Zależy od dziecka i celu. Dzieci nieśmiałe lub z poważnymi trudnościami emocjonalnymi lepiej reagują na sesje indywidualne. Dzieci z problemami społecznymi (samotność, konflikty z rówieśnikami) czerpią więcej z grupy. Szczegóły: biblioterapia indywidualna vs grupowa." },
            ].map(({ q, a }) => (
              <details key={q} className="border border-border rounded-lg">
                <summary className="font-semibold cursor-pointer p-4 hover:text-accent">{q}</summary>
                <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-10">
          <h3 className="font-bold text-lg mb-2">Podsumowanie</h3>
          <p className="text-muted-foreground leading-relaxed">
            Biblioterapia dziecięca to jeden z najbardziej dostępnych i skutecznych sposobów
            wspierania zdrowia emocjonalnego dzieci. Nie wymaga drogiego sprzętu ani specjalistycznego
            wykształcenia — wymaga dobrej książki, cierpliwości i obecności. Dziecko, które czuje
            się słyszane przez bohatera, czuje się słyszane przez cały świat.
          </p>
        </div>

        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-muted-foreground">Źródła</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Gregory, R. J., Canning, S. S., Lee, T. W., &amp; Wise, J. C. (2004). Cognitive bibliotherapy for depression: a meta-analysis. <em>Professional Psychology: Research and Practice</em>, 35(3), 275.</li>
            <li>Shrodes, C. (1949). <em>Bibliotherapy: A Theoretical and Clinical-Experimental Study</em>. University of California.</li>
            <li>Mar, R. A., &amp; Oatley, K. (2008). The function of fiction. <em>Perspectives on Psychological Science</em>, 3(3), 173–192.</li>
            <li>Borecka, I. (2001). <em>Biblioterapia. Teoria i praktyka</em>. Stowarzyszenie Bibliotekarzy Polskich.</li>
          </ul>
        </div>

        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-serif text-2xl font-bold mb-6">Czytaj dalej</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/artykuly/bajkoterapia", title: "Bajkoterapia", desc: "Kompletny przewodnik dla dzieci do 10 lat" },
              { href: "/artykuly/jak-wybrac-ksiazke-terapeutyczna", title: "Jak wybrać książkę terapeutyczną?", desc: "Kryteria doboru krok po kroku" },
              { href: "/artykuly/biblioterapia-w-przedszkolu", title: "Biblioterapia w przedszkolu", desc: "Jak prowadzić zajęcia z najmłodszymi?" },
              { href: "/artykuly/jak-rozmawiac-z-dzieckiem-o-trudnych-emocjach", title: "Jak rozmawiać z dzieckiem o emocjach?", desc: "Praktyczny przewodnik dla rodziców" },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="border border-border rounded-lg p-4 hover:border-accent transition-colors">
                <p className="font-semibold text-sm mb-1">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-3">Gotowe scenariusze do pracy z dziećmi</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Przeglądaj nasze scenariusze biblioterapeutyczne — gotowe do użycia materiały
            oparte na sprawdzonych książkach terapeutycznych.
          </p>
          <Link
            href="/biblioterapia/narzedziownik"
            className="inline-block bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors shadow-md"
          >
            Zobacz scenariusze
          </Link>
        </div>

      </article>
    </Layout>
  );
}
