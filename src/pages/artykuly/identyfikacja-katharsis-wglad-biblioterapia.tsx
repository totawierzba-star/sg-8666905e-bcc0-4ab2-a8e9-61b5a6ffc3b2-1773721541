import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Brain, Heart, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function IdentyfikacjaKatharsisWgladPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Czym jest identyfikacja, katharsis i wgląd w biblioterapii?",
    "description": "Identyfikacja, projekcja, katharsis i wgląd — cztery mechanizmy psychologiczne, przez które literatura działa terapeutycznie. Wyjaśniamy każdy z nich z przykładami z książek.",
    "author": { "@type": "Organization", "name": "Biblioterapia.org" },
    "publisher": { "@type": "Organization", "name": "Biblioterapia.org", "url": "https://biblioterapia.org" },
    "url": "https://biblioterapia.org/artykuly/identyfikacja-katharsis-wglad-biblioterapia",
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "inLanguage": "pl",
    "mainEntityOfPage": "https://biblioterapia.org/artykuly/identyfikacja-katharsis-wglad-biblioterapia"
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czym jest identyfikacja w biblioterapii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Identyfikacja w biblioterapii to mechanizm, w którym czytelnik rozpoznaje siebie w bohaterze książki — jego sytuacji, emocjach i doświadczeniach. Dzięki identyfikacji czytelnik czuje się mniej osamotniony z własnym problemem i uczy się, że da się przez trudną sytuację przejść."
        }
      },
      {
        "@type": "Question",
        "name": "Czym jest katharsis w biblioterapii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Katharsis (z gr. oczyszczenie) to mechanizm emocjonalnego oczyszczenia przez kontakt z literaturą. Czytelnik, przeżywając emocje bohatera, uwalnia własne tłumione uczucia — strach, smutek, gniew — w bezpiecznej przestrzeni fikcji. Termin pochodzi od Arystotelesa, który opisał go w kontekście tragedii greckiej."
        }
      },
      {
        "@type": "Question",
        "name": "Co to jest wgląd w kontekście biblioterapii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wgląd (insight) to moment, gdy czytelnik — po identyfikacji, projekcji i katharsis — zyskuje nowe rozumienie swojej sytuacji, relacji lub zachowania. To chwila, gdy historia bohatera oświetla własne życie czytelnika z nowej perspektywy i staje się możliwa zmiana."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Identyfikacja, katharsis i wgląd w biblioterapii — wyjaśnienie z przykładami"
        description="Jak literatura leczy? Poznaj cztery mechanizmy psychologiczne biblioterapii: identyfikację, projekcję, katharsis i wgląd — wyjaśnione z przykładami z konkretnych książek."
        url="https://biblioterapia.org/artykuly/identyfikacja-katharsis-wglad-biblioterapia"
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
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Mechanizmy działania
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Czym jest identyfikacja, katharsis i wgląd w biblioterapii?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dlaczego dobra książka może uzdrowić? Za działaniem terapeutycznym literatury stoją
              cztery konkretne mechanizmy psychologiczne. Wyjaśniamy każdy z nich — z przykładami
              z prawdziwych książek i sytuacji czytelniczych.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~9 minut</span>
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
              <li><a href="#cztery-mechanizmy" className="text-primary hover:underline">1. Cztery mechanizmy — przegląd</a></li>
              <li><a href="#identyfikacja" className="text-primary hover:underline">2. Identyfikacja — „To ja jestem tym bohaterem"</a></li>
              <li><a href="#projekcja" className="text-primary hover:underline">3. Projekcja — bezpieczny dystans</a></li>
              <li><a href="#katharsis" className="text-primary hover:underline">4. Katharsis — oczyszczenie emocjonalne</a></li>
              <li><a href="#wglad" className="text-primary hover:underline">5. Wgląd — nowe rozumienie</a></li>
              <li><a href="#wspoldzialanie" className="text-primary hover:underline">6. Jak mechanizmy współdziałają?</a></li>
              <li><a href="#praktyka" className="text-primary hover:underline">7. W praktyce — jak je rozpoznać?</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none space-y-12">

            {/* 1 */}
            <section id="cztery-mechanizmy" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                Cztery mechanizmy — przegląd
              </h2>

              <p>
                Biblioterapia działa, bo uruchamia konkretne procesy psychologiczne. Nie jest to
                magia — to mechanizmy opisane przez psychologię i badane naukowo.
                Klasyczna teoria (Shrodes, 1949; Hynes i Hynes-Berry, 1986) wyróżnia cztery:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  { nr: "1", nazwa: "Identyfikacja", opis: "Czytelnik rozpoznaje siebie w bohaterze", kolor: "blue" },
                  { nr: "2", nazwa: "Projekcja", opis: "Czytelnik przenosi swoje emocje na bohatera", kolor: "green" },
                  { nr: "3", nazwa: "Katharsis", opis: "Oczyszczenie emocjonalne przez przeżycie emocji fikcyjnych", kolor: "purple" },
                  { nr: "4", nazwa: "Wgląd", opis: "Nowe rozumienie własnej sytuacji po przepracowaniu emocji", kolor: "amber" },
                ].map((item) => (
                  <div key={item.nr} className="flex gap-4 p-5 border rounded-xl">
                    <div className="bg-primary text-primary-foreground rounded-full w-9 h-9 flex items-center justify-center font-bold shrink-0">
                      {item.nr}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.nazwa}</h3>
                      <p className="text-sm text-muted-foreground">{item.opis}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Mechanizmy te nie działają oddzielnie — tworzą sekwencję, która prowadzi czytelnika
                od pierwszego kontaktu z tekstem do trwałej zmiany emocjonalnej lub poznawczej.
                Więcej o naukowych podstawach znajdziesz w artykule{" "}
                <Link href="/artykuly/jak-dziala-biblioterapia" className="text-primary hover:underline font-medium">
                  Jak działa biblioterapia?
                </Link>
              </p>
            </section>

            {/* 2 */}
            <section id="identyfikacja" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                Identyfikacja — „To ja jestem tym bohaterem"
              </h2>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <p className="text-blue-900 dark:text-blue-100 font-medium mb-1">Definicja:</p>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Identyfikacja</strong> to mechanizm, w którym czytelnik rozpoznaje siebie —
                  swoje emocje, sytuację, dylematy — w postaci literackiej. Czuje: <em>„To o mnie.
                  Ten bohater przeżywa to samo co ja."</em>
                </p>
              </div>

              <p>
                Identyfikacja to punkt wejścia do biblioterapii. Bez niej nie ma terapeutycznego
                działania tekstu. Dlatego tak ważny jest <strong>trafny dobór książki</strong>:
                musi ona odpowiadać sytuacji czytelnika na poziomie emocjonalnym lub życiowym.
              </p>

              <h3 className="font-semibold text-xl mt-6 mb-3">Przykład z praktyki:</h3>
              <div className="bg-muted/30 border rounded-xl p-5 mb-4">
                <p className="text-sm">
                  7-letnia Zosia traci babcię. Rodzice nie wiedzą jak z nią rozmawiać. Czytają
                  razem{" "}
                  <Link href="/ksiazki/zaba" className="text-primary hover:underline font-medium">
                    „Żabę. Małą opowieść o żałobie"
                  </Link>.
                  Zosia patrzy na małą Żabę, która też straciła kogoś ważnego, i mówi: <em>„Ona
                  też płakała. Ja też płaczę."</em> To jest identyfikacja.
                </p>
              </div>

              <h3 className="font-semibold text-xl mt-6 mb-3">Warunki skutecznej identyfikacji:</h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Bohater jest w podobnej sytuacji życiowej co czytelnik",
                  "Emocje bohatera są autentyczne i rozpoznawalne",
                  "Wiek i kontekst kulturowy bohatera są zbliżone do czytelnika",
                  "Tekst nie moralizuje — pokazuje, nie ocenia",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3 */}
            <section id="projekcja" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                Projekcja — bezpieczny dystans
              </h2>

              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <p className="text-green-900 dark:text-green-100 font-medium mb-1">Definicja:</p>
                <p className="text-green-800 dark:text-green-200">
                  <strong>Projekcja</strong> to mechanizm, w którym czytelnik nieświadomie lub świadomie
                  przenosi własne emocje, konflikty i nierozwiązane problemy na postać z książki.
                  Mówi o bohaterze, a tak naprawdę mówi o sobie.
                </p>
              </div>

              <p>
                Projekcja to <em>dar fikcji</em>: czytelnik może mówić o trudnych sprawach
                „przy okazji" bohatera, bez konieczności przyznawania się wprost. To szczególnie
                ważne w pracy z dziećmi, które często nie potrafią lub boją się mówić bezpośrednio
                o własnych lękach.
              </p>

              <h3 className="font-semibold text-xl mt-6 mb-3">Przykład z praktyki:</h3>
              <div className="bg-muted/30 border rounded-xl p-5 mb-4">
                <p className="text-sm">
                  10-letni Marek bardzo się złości, gdy rodzice się kłócą, ale nie potrafi tego
                  nazwać. Po przeczytaniu{" "}
                  <Link href="/ksiazki/czasami-szczesliwi-rodzice" className="text-primary hover:underline font-medium">
                    „Czasami szczęśliwi rodzice mieszkają oddzielnie"
                  </Link>{" "}
                  mówi do mamy: <em>„Alek z tej książki jest zły na rodziców, że się rozstali.
                  Ale on się boi to powiedzieć."</em> Terapeuta pyta: <em>„A jak myślisz,
                  dlaczego się boi?"</em> Marek mówi o Alku — i mówi o sobie.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Wskazówka dla prowadzącego:</strong> Nie przerywaj projekcji pytaniem
                  „A ty co czujesz?". Podążaj za bohaterem. Gdy czytelnik jest gotowy, sam
                  przełączy się z bohatera na siebie.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section id="katharsis" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                Katharsis — oczyszczenie emocjonalne
              </h2>

              <div className="bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
                <p className="text-purple-900 dark:text-purple-100 font-medium mb-1">Definicja:</p>
                <p className="text-purple-800 dark:text-purple-200">
                  <strong>Katharsis</strong> (gr. <em>κάθαρσις</em> — oczyszczenie) to uwolnienie
                  i rozładowanie nagromadzonych emocji przez kontakt z literaturą. Czytelnik
                  „przeżywa" trudne uczucia (smutek, gniew, lęk) bezpiecznie — za pośrednictwem
                  bohatera i w przestrzeni fikcji.
                </p>
              </div>

              <p>
                Termin pochodzi od Arystotelesa, który w <em>Poetyce</em> (IV w. p.n.e.) opisał,
                jak tragedia grecka wywołuje u widzów litość i trwogę, prowadząc do
                <em> oczyszczenia</em> z tych emocji. To najstarszy opisany mechanizm
                terapeutycznego działania literatury.
              </p>

              <p>
                Katharsis objawia się fizycznie i emocjonalnie: płaczem podczas czytania,
                uczuciem ulgi po zakończeniu, chwilą spokoju po wzburzeniu. Nie chodzi
                o to, by było „przyjemnie" — chodzi o uwolnienie.
              </p>

              <h3 className="font-semibold text-xl mt-6 mb-3">Przykład:</h3>
              <div className="bg-muted/30 border rounded-xl p-5 mb-4">
                <p className="text-sm">
                  Dorota (40 lat) straciła matkę. Nie płakała na pogrzebie — „musiała być silna"
                  dla rodziny. Czyta{" "}
                  <Link href="/ksiazki/zaba" className="text-primary hover:underline font-medium">
                    „Żabę"
                  </Link>{" "}
                  z córką wieczorem. W połowie płacze po raz pierwszy od miesiąca.
                  Mówi: <em>„Nie wiem dlaczego, ale poczułam, że mogę."</em> To katharsis.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <p className="text-sm text-purple-900 dark:text-purple-100">
                  <strong>Ważne:</strong> Katharsis nie jest celem samym w sobie. Terapeuta
                  musi zadbać o to, co po niej następuje — rozmowę i poczucie bezpieczeństwa.
                  Uwolniona emocja wymaga opracowania, nie pozostawienia uczestnika samego.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section id="wglad" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                Wgląd — nowe rozumienie siebie i sytuacji
              </h2>

              <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                <p className="text-amber-900 dark:text-amber-100 font-medium mb-1">Definicja:</p>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>Wgląd</strong> (insight) to końcowy etap sekwencji terapeutycznej —
                  moment, gdy czytelnik zyskuje nowe, głębsze rozumienie własnej sytuacji,
                  relacji, zachowania lub emocji. Historia bohatera oświetla własne życie
                  z innej perspektywy.
                </p>
              </div>

              <p>
                Wgląd to nie intelektualna analiza — to nagłe <em>poczucie zrozumienia</em>,
                często opisywane jako „aha moment". Może dotyczyć: przyczyn własnych zachowań,
                perspektywy drugiej osoby, możliwości zmiany, nowego sposobu radzenia sobie.
              </p>

              <h3 className="font-semibold text-xl mt-6 mb-3">Przykład:</h3>
              <div className="bg-muted/30 border rounded-xl p-5 mb-4">
                <p className="text-sm">
                  Kacper (8 lat) bił kolegów w szkole. Po sesjach z{" "}
                  <Link href="/ksiazki/guzikozerca" className="text-primary hover:underline font-medium">
                    „Guzikożercą na tropie słów"
                  </Link>{" "}
                  powiedział: <em>„Leon nie chciał być zły. On po prostu nie umiał
                  powiedzieć, że mu coś przeszkadza."</em> Terapeuta pyta: <em>„A ty — kiedy
                  bijesz, czy też jest coś, czego nie potrafisz powiedzieć?"</em>
                  Kacper milczy chwilę i kiwa głową. To wgląd.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section id="wspoldzialanie" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                Jak mechanizmy współdziałają?
              </h2>

              <p>
                Mechanizmy tworzą naturalną sekwencję — choć nie zawsze wszystkie wystąpią
                w jednej sesji i nie zawsze w tej kolejności:
              </p>

              <div className="flex flex-col sm:flex-row gap-2 my-6 items-center">
                {[
                  { nr: "1", nazwa: "Identyfikacja", kolor: "bg-blue-500" },
                  { sep: "→" },
                  { nr: "2", nazwa: "Projekcja", kolor: "bg-green-500" },
                  { sep: "→" },
                  { nr: "3", nazwa: "Katharsis", kolor: "bg-purple-500" },
                  { sep: "→" },
                  { nr: "4", nazwa: "Wgląd", kolor: "bg-amber-500" },
                ].map((item, i) => "sep" in item ? (
                  <span key={i} className="text-muted-foreground font-bold text-xl hidden sm:block">→</span>
                ) : (
                  <div key={i} className={`${item.kolor} text-white rounded-xl p-4 text-center flex-1`}>
                    <div className="font-bold text-lg">{item.nr}</div>
                    <div className="text-sm">{item.nazwa}</div>
                  </div>
                ))}
              </div>

              <p>
                Nie każda sesja musi przejść przez wszystkie cztery etapy. Czasem biblioterapia
                zatrzymuje się na identyfikacji i projekcji — i to też jest wartościowe.
                Katharsis i wgląd przychodzą wtedy, gdy czytelnik jest gotowy.
              </p>
            </section>

            {/* 7 */}
            <section id="praktyka" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                W praktyce — jak rozpoznać te mechanizmy?
              </h2>

              <div className="space-y-3 my-4">
                {[
                  { mechanizm: "Identyfikacja", sygnaly: ["\"To tak samo jak u mnie\"", "\"Ja też tak mam\"", "Silne zainteresowanie konkretną postacią", "Prośba o przeczytanie fragmentu jeszcze raz"] },
                  { mechanizm: "Projekcja", sygnaly: ["Mówienie wyłącznie o bohaterze, nie o sobie", "Intensywne spekulowanie o motywach bohatera", "Obrona lub atak na bohatera z dużym ładunkiem emocjonalnym", "\"On/ona na pewno czuje...\""] },
                  { mechanizm: "Katharsis", sygnaly: ["Łzy podczas czytania lub po", "Widoczne rozluźnienie napięcia", "Głęboki oddech lub westchnienie", "\"Uff, ulżyło mi\""] },
                  { mechanizm: "Wgląd", sygnaly: ["Nagłe milczenie, po którym pada nowe stwierdzenie", "\"Aha, teraz rozumiem dlaczego...\"", "Zmiana tonu rozmowy — spokojniejszy, bardziej refleksyjny", "Pojawienie się pomysłu na działanie"] },
                ].map((item) => (
                  <div key={item.mechanizm} className="p-5 border rounded-xl">
                    <h3 className="font-bold mb-3">{item.mechanizm} — sygnały u uczestnika:</h3>
                    <ul className="space-y-1">
                      {item.sygnaly.map(s => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">→</span>
                          <span className="italic">"{s}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Źródła */}
            <section className="mt-12 p-6 bg-muted/30 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Źródła</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4244866/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">PubMed: Bibliotherapy mechanisms <ExternalLink className="h-3 w-3" /></a></li>
                <li className="text-muted-foreground">Shrodes C. (1949). <em>Bibliotherapy: A Theoretical and Clinical-Experimental Study</em>. University of California.</li>
                <li className="text-muted-foreground">Hynes A.M., Hynes-Berry M. (1986). <em>Bibliotherapy — The Interactive Process</em>.</li>
                <li className="text-muted-foreground">Arystoteles, <em>Poetyka</em>, tłum. H. Podbielski, Wrocław 1983.</li>
              </ul>
            </section>

            {/* Internal links */}
            <section className="mt-8 p-6 bg-muted/20 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Czytaj dalej</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/artykuly/jak-dziala-biblioterapia", label: "Jak działa biblioterapia?" },
                  { href: "/artykuly/co-to-jest-biblioterapia", label: "Co to jest biblioterapia?" },
                  { href: "/artykuly/czy-biblioterapia-jest-skuteczna", label: "Czy biblioterapia jest skuteczna?" },
                  { href: "/artykuly/jak-wyglada-sesja-biblioterapii", label: "Jak wygląda sesja biblioterapii?" },
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
                <h2 className="text-2xl font-bold mb-4">Sprawdź biblioterapię w praktyce</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nasze scenariusze zajęć są zaprojektowane tak, by aktywować wszystkie cztery
                  mechanizmy — od identyfikacji po wgląd.
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
