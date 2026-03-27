import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Users, User, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function BiblioterapiaIndywidualnaVsGrupowaPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Biblioterapia indywidualna vs. grupowa — porównanie",
    "description": "Czym różni się biblioterapia indywidualna od grupowej? Poznaj zalety, ograniczenia i wskazania każdej formy oraz dowiedz się, która będzie lepsza w Twojej sytuacji.",
    "author": { "@type": "Organization", "name": "Biblioterapia.org" },
    "publisher": { "@type": "Organization", "name": "Biblioterapia.org", "url": "https://biblioterapia.org" },
    "url": "https://biblioterapia.org/artykuly/biblioterapia-indywidualna-vs-grupowa",
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "inLanguage": "pl",
    "mainEntityOfPage": "https://biblioterapia.org/artykuly/biblioterapia-indywidualna-vs-grupowa"
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Co jest lepsze — biblioterapia indywidualna czy grupowa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Żadna forma nie jest uniwersalnie lepsza — każda ma swoje wskazania. Biblioterapia indywidualna jest lepsza przy trudnych tematach wymagających prywatności, traumach i poważnych zaburzeniach. Grupowa sprawdza się przy problemach z relacjami, izolacją, niską samooceną — siłą jest tu dynamika grupy i poczucie wspólnoty."
        }
      },
      {
        "@type": "Question",
        "name": "Ile osób jest w grupie biblioterapeutycznej?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Optymalna grupa biblioterapeutyczna liczy 6–12 osób. Grupy poniżej 5 osób tracą dynamikę grupową, powyżej 15 — trudno zapewnić każdemu przestrzeń do wypowiedzi. W szkołach dopuszcza się grupy do 15–20 uczniów, ale wymaga to większej struktury sesji."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia indywidualna vs. grupowa — porównanie, zalety i wskazania"
        description="Biblioterapia indywidualna czy grupowa? Poznaj różnice, zalety, ograniczenia i wskazania każdej formy. Która będzie lepsza dla Twojego dziecka lub w Twoim kontekście?"
        url="https://biblioterapia.org/artykuly/biblioterapia-indywidualna-vs-grupowa"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

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
                Porównanie form
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Biblioterapia indywidualna vs. grupowa — porównanie
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Biblioterapia może być prowadzona jeden na jeden z terapeutą lub w grupie. Obie formy
              działają — ale inaczej, dla innych osób i w innych sytuacjach. Dowiedz się, która
              będzie lepsza w Twojej sytuacji.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~8 minut</span>
              <span>🎯 Poziom: Dla rodziców i terapeutów</span>
              <span>🗓️ Zaktualizowano: marzec 2026</span>
            </div>
          </header>

          <nav className="bg-muted/30 border rounded-xl p-6 mb-12" aria-label="Spis treści">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Spis treści
            </h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#przeglad" className="text-primary hover:underline">1. Szybkie porównanie</a></li>
              <li><a href="#indywidualna" className="text-primary hover:underline">2. Biblioterapia indywidualna — jak działa?</a></li>
              <li><a href="#grupowa" className="text-primary hover:underline">3. Biblioterapia grupowa — siła wspólnoty</a></li>
              <li><a href="#wskazania" className="text-primary hover:underline">4. Kiedy wybrać którą formę?</a></li>
              <li><a href="#dzieci" className="text-primary hover:underline">5. A co z dziećmi?</a></li>
              <li><a href="#faq" className="text-primary hover:underline">6. FAQ</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none space-y-12">

            {/* 1 */}
            <section id="przeglad" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Szybkie porównanie
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 border font-semibold">Cecha</th>
                      <th className="text-left p-3 border font-semibold">Indywidualna</th>
                      <th className="text-left p-3 border font-semibold">Grupowa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Liczba uczestników", "1", "6–15 osób"],
                      ["Intymność", "Wysoka", "Niska–średnia"],
                      ["Dostosowanie do uczestnika", "Bardzo wysokie", "Ograniczone"],
                      ["Dynamika grupowa", "Brak", "Kluczowy element"],
                      ["Poczucie wspólnoty", "Brak", "Silne"],
                      ["Koszt", "Wyższy", "Niższy na osobę"],
                      ["Dostępność", "Ograniczona", "Szersza (szkoły, biblioteki)"],
                      ["Czas trwania sesji", "50 min", "60–90 min"],
                    ].map(([cecha, ind, grup]) => (
                      <tr key={cecha} className="border-b hover:bg-muted/20">
                        <td className="p-3 border font-medium">{cecha}</td>
                        <td className="p-3 border text-muted-foreground">{ind}</td>
                        <td className="p-3 border text-muted-foreground">{grup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 2 */}
            <section id="indywidualna" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <User className="h-6 w-6 text-primary" />
                </div>
                Biblioterapia indywidualna — jak działa?
              </h2>

              <p>
                W biblioterapii indywidualnej terapeuta pracuje wyłącznie z jednym uczestnikiem.
                Sesja jest całkowicie dostosowana do jego sytuacji, tempa i potrzeb.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="border rounded-xl p-5">
                  <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Zalety
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Pełna prywatność i poufność",
                      "Tekst dobierany pod konkretną osobę",
                      "Tempo sesji dostosowane do uczestnika",
                      "Możliwość pracy z bardzo trudnymi tematami (trauma, nadużycia)",
                      "Głębsza praca z emocjami bez presji grupy",
                      "Elastyczny czas i miejsce",
                    ].map(z => <li key={z} className="flex gap-2"><span className="text-green-500">✓</span>{z}</li>)}
                  </ul>
                </div>
                <div className="border rounded-xl p-5">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
                    <span className="text-amber-500">⚠</span> Ograniczenia
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Brak efektu wspólnoty i poczucia \"nie jestem sam\"",
                      "Wyższy koszt (czas terapeuty)",
                      "Mniejsza dostępność — wymaga specjalisty",
                      "Brak modelowania przez rówieśników",
                      "Ryzyko zbytniego skupienia na problemie bez perspektywy z zewnątrz",
                    ].map(o => <li key={o} className="flex gap-2"><span className="text-amber-500">–</span>{o}</li>)}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Najlepsze wskazania:</strong> trauma, żałoba, zaburzenia kliniczne,
                  sytuacje wymagające pełnej poufności, uczestnicy z silnym lękiem społecznym.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section id="grupowa" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Biblioterapia grupowa — siła wspólnoty
              </h2>

              <p>
                Biblioterapia grupowa to najczęściej stosowana forma — w szkołach, bibliotekach,
                domach kultury i gabinetach terapeutycznych. Jej wyjątkową siłą jest <strong>dynamika grupy</strong>:
                uczestnicy uczą się od siebie nawzajem, zyskują poczucie wspólnoty i odkrywają,
                że nie są sami ze swoimi trudnościami.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="border rounded-xl p-5">
                  <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Zalety
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Poczucie wspólnoty — \"nie jestem jedyny\"",
                      "Różne perspektywy na ten sam tekst",
                      "Modelowanie — uczestnicy uczą się od siebie",
                      "Niższy koszt na osobę",
                      "Dostępność w szkołach i bibliotekach",
                      "Rozwijanie umiejętności społecznych",
                      "Efekt normalizacji problemów",
                    ].map(z => <li key={z} className="flex gap-2"><span className="text-green-500">✓</span>{z}</li>)}
                  </ul>
                </div>
                <div className="border rounded-xl p-5">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
                    <span className="text-amber-500">⚠</span> Ograniczenia
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Mniejsza prywatność",
                      "Tekst musi odpowiadać całej grupie, nie jednej osobie",
                      "Ryzyko presji grupowej lub porównywania się",
                      "Trudniejsze tematy mogą być stygmatyzujące bez właściwego prowadzenia",
                      "Wymaga większych umiejętności moderacyjnych od terapeuty",
                    ].map(o => <li key={o} className="flex gap-2"><span className="text-amber-500">–</span>{o}</li>)}
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500 p-5 rounded-r-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Najlepsze wskazania:</strong> niska samoocena, izolacja społeczna,
                  trudności w relacjach rówieśniczych, profilaktyka emocjonalna w szkołach,
                  wspólne tematy (np. wszyscy przeżywają zmiany w klasie).
                </p>
              </div>
            </section>

            {/* 4 */}
            <section id="wskazania" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Kiedy wybrać którą formę?
              </h2>

              <div className="space-y-3 my-4">
                {[
                  { sytuacja: "Trauma lub nadużycie", forma: "Indywidualna", ikona: "👤", powod: "Wymaga pełnej prywatności i dostosowania tempa do uczestnika." },
                  { sytuacja: "Żałoba dziecka po stracie bliskiej osoby", forma: "Obie", ikona: "⚖️", powod: "Indywidualna gdy trauma jest świeża; grupowa (np. grupa wsparcia dla dzieci w żałobie) po stabilizacji." },
                  { sytuacja: "Lęk szkolny i trudności rówieśnicze", forma: "Grupowa", ikona: "👥", powod: "Efekt normalizacji i modelowania przez grupę jest kluczowy." },
                  { sytuacja: "Depresja kliniczna", forma: "Indywidualna", ikona: "👤", powod: "Wymaga pracy z terapeutą. Grupowa możliwa jako uzupełnienie po stabilizacji." },
                  { sytuacja: "Profilaktyka emocjonalna w klasie", forma: "Grupowa", ikona: "👥", powod: "Naturalne środowisko grupy rówieśniczej, niski koszt, szeroki zasięg." },
                  { sytuacja: "Niska samoocena, brak pewności siebie", forma: "Grupowa", ikona: "👥", powod: "Dynamika grupy i pozytywne informacje zwrotne od rówieśników." },
                  { sytuacja: "Rozwód rodziców", forma: "Obie", ikona: "⚖️", powod: "Indywidualna z psychologiem; grupowa w formie warsztatów szkolnych dla dzieci z rozbitych rodzin." },
                ].map((item) => (
                  <div key={item.sytuacja} className="flex gap-4 p-4 border rounded-xl">
                    <span className="text-2xl shrink-0">{item.ikona}</span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="font-semibold text-sm">{item.sytuacja}</p>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full shrink-0">{item.forma}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.powod}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 */}
            <section id="dzieci" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                A co z dziećmi?
              </h2>

              <p>
                W pracy z dziećmi dominuje biblioterapia grupowa — ze względu na dostępność
                (szkoły, biblioteki) i naturalność (dzieci uczą się przez grupę rówieśniczą).
                Jednak wiek dziecka ma znaczenie:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="border rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">🧒</div>
                  <h3 className="font-semibold mb-2">3–6 lat</h3>
                  <p className="text-sm text-muted-foreground">
                    Najlepiej działa w parze z rodzicem (czytanie z dzieckiem) lub w małych grupach
                    (3–5 dzieci). Sesje krótkie, z dużą ilością obrazów.
                  </p>
                </div>
                <div className="border rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">🧑</div>
                  <h3 className="font-semibold mb-2">6–12 lat</h3>
                  <p className="text-sm text-muted-foreground">
                    Grupy 8–15 uczniów, np. klasa szkolna. Skuteczna zarówno forma grupowa
                    (profilaktyka) jak i indywidualna (interwencja).
                  </p>
                </div>
                <div className="border rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">🧑‍🤝‍🧑</div>
                  <h3 className="font-semibold mb-2">13–18 lat</h3>
                  <p className="text-sm text-muted-foreground">
                    Grupy rówieśnicze działają silnie. Ważna jest dobrowolność uczestnictwa
                    i odpowiedni dobór tekstów (literatura YA).
                  </p>
                </div>
              </div>

              <p>
                Nasze{" "}
                <Link href="/biblioterapia/scenariusze" className="text-primary hover:underline font-medium">
                  scenariusze zajęć
                </Link>{" "}
                są przygotowane do pracy grupowej — z klasą lub grupą w bibliotece.
                Każdy zawiera wskazówki co do liczby uczestników i wieku.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-8">Najczęstsze pytania</h2>
              <div className="space-y-4">
                {[
                  { q: "Czy można łączyć obie formy?", a: "Tak i to często optymalne rozwiązanie. Dziecko może uczestniczyć w grupowych zajęciach biblioterapeutycznych w szkole, a jednocześnie mieć indywidualne sesje z psychologiem. Obie formy wzajemnie się uzupełniają." },
                  { q: "Ile osób powinno być w grupie biblioterapeutycznej?", a: "Optymalna liczba to 6–12 osób. Poniżej 5 osób brakuje dynamiki grupowej, powyżej 15 — trudno zapewnić przestrzeń każdemu. W szkołach dopuszcza się grupy do 20 uczniów, ale wymaga to większej struktury prowadzenia." },
                  { q: "Czy biblioterapia grupowa jest skuteczna przy poważnych problemach?", a: "Przy poważnych zaburzeniach klinicznych (ciężka depresja, trauma, psychoza) biblioterapia grupowa może być użyteczna jako uzupełnienie — po stabilizacji stanu i w połączeniu z terapią indywidualną. Sama w sobie nie zastępuje specjalistycznej pomocy." },
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
                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4244866/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">PubMed: Bibliotherapy — przegląd form <ExternalLink className="h-3 w-3" /></a></li>
                <li className="text-muted-foreground">Hynes A.M., Hynes-Berry M., <em>Bibliotherapy — The Interactive Process</em>, 1986</li>
                <li className="text-muted-foreground">Borecka I., <em>Biblioterapia. Teoria i praktyka</em>, Warszawa 2004</li>
              </ul>
            </section>

            {/* Internal links */}
            <section className="mt-8 p-6 bg-muted/20 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Czytaj dalej</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/artykuly/jak-wyglada-sesja-biblioterapii", label: "Jak wygląda sesja biblioterapii?" },
                  { href: "/artykuly/dla-kogo-jest-biblioterapia", label: "Dla kogo jest biblioterapia?" },
                  { href: "/artykuly/rodzaje-biblioterapii", label: "Rodzaje biblioterapii" },
                  { href: "/biblioterapia/scenariusze", label: "Scenariusze zajęć grupowych" },
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
                <h2 className="text-2xl font-bold mb-4">Gotowe scenariusze do zajęć grupowych</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nasze scenariusze są zaprojektowane do pracy z grupą — klasą, kółkiem czytelniczym
                  lub warsztatem bibliotecznym. Gotowe do użycia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/biblioterapia/scenariusze" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg">
                    Scenariusze zajęć
                  </Link>
                  <Link href="/ksiazki" className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg">
                    Nasze książki →
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
