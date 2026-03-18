import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Book, Heart, Sparkles, Users, Brain, CheckCircle } from "lucide-react";

export default function BajkoterapiaArticle() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czym jest bajkoterapia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bajkoterapia (biblioterapia) to metoda terapeutyczna wykorzystująca literaturę dziecięcą do wspierania rozwoju emocjonalnego i społecznego dzieci. Polega na czytaniu specjalnie dobranych książek, które pomagają dzieciom zrozumieć i przepracować trudne emocje oraz sytuacje życiowe."
        }
      },
      {
        "@type": "Question",
        "name": "Dla kogo jest bajkoterapia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bajkoterapia jest skuteczna dla dzieci w wieku od 3 do 12 lat. Pomaga dzieciom przeżywającym trudne sytuacje takie jak: rozwód rodziców, żałoba, lęki, problemy z wyrażaniem emocji, adaptacja w przedszkolu/szkole, niepełnosprawność w rodzinie, czy budowanie pewności siebie."
        }
      },
      {
        "@type": "Question",
        "name": "Jak prowadzić bajkoterapię w domu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aby prowadzić bajkoterapię w domu: 1) Dobierz książkę odpowiednią do sytuacji dziecka, 2) Stwórz spokojną atmosferę bez rozpraszaczy, 3) Czytaj z zaangażowaniem i empatią, 4) Po lekturze porozmawiaj o historii, 5) Pozwól dziecku wyrazić emocje przez rysowanie lub zabawę, 6) Wracaj do książki wielokrotnie, jeśli dziecko tego potrzebuje."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie książki wybrać do bajkoterapii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wybieraj książki adekwatne do wieku dziecka i jego sytuacji życiowej. Szukaj pozycji poruszających konkretne tematy: żałobę, rozwód, chorobę, niepełnosprawność, relacje rówieśnicze. Ważne, aby książki były empatyczne, realistyczne, ale dawały nadzieję. Seria 'Książki do zadań specjalnych' Olgi Ptak została stworzona właśnie z myślą o bajkoterapii."
        }
      },
      {
        "@type": "Question",
        "name": "Czy bajkoterapia naprawdę działa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, badania naukowe potwierdzają skuteczność bajkoterapii. Biblioterapia rozwojowa wspiera rozwój emocjonalny dzieci, pomaga w rozpoznawaniu i nazywaniu emocji, buduje empatię oraz umiejętności radzenia sobie z trudnościami. Metoda jest uznawana przez psychologów i pedagogów jako wartościowe narzędzie wspierające rozwój dziecka."
        }
      },
      {
        "@type": "Question",
        "name": "Kiedy warto skonsultować się ze specjalistą?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Skonsultuj się z psychologiem lub pedagogiem gdy: dziecko przeżywa traumatyczne doświadczenie, objawy utrzymują się długo mimo bajkoterapii, dziecko ma poważne trudności emocjonalne lub behawioralne, potrzebujesz pomocy w doborze odpowiednich książek, chcesz połączyć bajkoterapię z profesjonalną terapią."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bajkoterapia dla Dzieci: Kompletny Przewodnik dla Rodziców 2026",
    "description": "Dowiedz się, jak bajkoterapia pomaga dzieciom radzić sobie z trudnymi emocjami. Praktyczny przewodnik z FAQ, przykładami i wskazówkami dla rodziców.",
    "author": {
      "@type": "Person",
      "name": "Olga Ptak"
    },
    "datePublished": "2026-02-26",
    "dateModified": "2026-02-26",
    "publisher": {
      "@type": "Organization",
      "name": "Książki do zadań specjalnych"
    },
    "image": "/og-image.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ksiazkidozadanspecjalnych.pl/artykuly/bajkoterapia"
    }
  };

  return (
    <Layout>
      <SEO
        title="Bajkoterapia dla Dzieci: Kompletny Przewodnik [2026] | 6 Kroków"
        description="✓ Czym jest bajkoterapia? ✓ Jak pomaga dzieciom? ✓ Jak prowadzić w domu? Praktyczny przewodnik z FAQ, przykładami książek i wskazówkami ekspertów."
        url="https://ksiazkidozadanspecjalnych.pl/artykuly/bajkoterapia"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Strona główna
          </Link>
          {" / "}
          <Link href="/artykuly" className="hover:text-foreground transition-colors">
            Artykuły
          </Link>
          {" / "}
          <span className="text-foreground">Bajkoterapia dla dzieci</span>
        </nav>

        {/* Header */}
        <header className="mb-12 space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <Book className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Przewodnik dla rodziców
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bajkoterapia dla Dzieci: Kompletny Przewodnik dla Rodziców w 2026 roku
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Odkryj, jak bajkoterapia (biblioterapia) pomaga dzieciom radzić sobie z trudnymi emocjami, 
            przeżyciami i sytuacjami życiowymi. Praktyczny przewodnik z przykładami, wskazówkami ekspertów i odpowiedziami na najczęstsze pytania.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Dla rodziców dzieci 3-12 lat</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>Wsparcie emocjonalne</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>Metoda potwierdzona naukowo</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-background-subtle border rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Spis treści
          </h2>
          <nav className="space-y-2">
            <a href="#czym-jest" className="block text-primary hover:underline">
              1. Czym jest bajkoterapia?
            </a>
            <a href="#jak-dziala" className="block text-primary hover:underline">
              2. Jak działa bajkoterapia?
            </a>
            <a href="#kto-moze" className="block text-primary hover:underline">
              3. Dla kogo jest bajkoterapia?
            </a>
            <a href="#korzysc" className="block text-primary hover:underline">
              4. Korzyści z bajkoterapii
            </a>
            <a href="#jak-prowadzic" className="block text-primary hover:underline">
              5. Jak prowadzić bajkoterapię w domu?
            </a>
            <a href="#ksiazki" className="block text-primary hover:underline">
              6. Jakie książki wybrać?
            </a>
            <a href="#faq" className="block text-primary hover:underline">
              7. Najczęstsze pytania (FAQ)
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1 */}
          <section id="czym-jest" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Czym jest bajkoterapia?</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Bajkoterapia</strong> (nazywana również <strong>biblioterapią rozwojową</strong>) to metoda 
              terapeutyczna wykorzystująca literaturę dziecięcą do wspierania rozwoju emocjonalnego i społecznego dzieci. 
              Polega na świadomym, celowym czytaniu dzieciom specjalnie dobranych książek, które pomagają im 
              zrozumieć i przepracować trudne emocje oraz sytuacje życiowe.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="font-semibold mb-2">💡 Kluczowa zasada bajkoterapii:</p>
              <p className="text-muted-foreground">
                "Dziecko, które widzi swoje problemy w historii bohatera książki, czuje się zrozumiane 
                i mniej samotne w swoich przeżyciach. To otwiera drzwi do rozmowy o emocjach."
              </p>
            </div>

            <p className="leading-relaxed">
              Termin "bajkoterapia" pochodzi od słowa "bajka" i "terapia", co doskonale oddaje istotę metody - 
              leczenie przez opowieści. W literaturze naukowej częściej spotykamy się z terminem{" "}
              <strong>biblioterapia</strong>, który obejmuje szersze spektrum zastosowań literatury w terapii, 
              również u dorosłych.
            </p>
          </section>

          {/* Section 2 */}
          <section id="jak-dziala" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Jak działa bajkoterapia? Mechanizmy psychologiczne</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Bajkoterapia opiera się na kilku sprawdzonych mechanizmach psychologicznych, które sprawiają, 
              że czytanie odpowiednich książek może realnie wspierać dziecko w trudnych momentach:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">1. Identyfikacja z bohaterem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dziecko odnajduje w bohaterze książki siebie i swoje przeżycia. Widząc, że bohater 
                  zmaga się z podobnymi problemami, czuje się mniej osamotnione i zrozumiane. 
                  To zjawisko nazywane jest <em>projekcją psychologiczną</em>.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">2. Katharsis emocjonalne</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Poprzez przeżywanie emocji razem z bohaterem książki, dziecko bezpiecznie doświadcza 
                  i przepracowuje trudne uczucia. Płacz nad losem postaci to forma uwolnienia własnych emocji.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">3. Modelowanie strategii radzenia sobie</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Obserwując, jak bohater radzi sobie z trudnościami, dziecko uczy się nowych strategii 
                  i zachowań. Książki pokazują różne możliwe rozwiązania problemów.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">4. Bezpieczny dystans</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rozmowa o emocjach bohatera jest mniej stresująca niż bezpośrednia rozmowa o własnych uczuciach. 
                  Dziecko może stopniowo przechodzić od dyskusji o postaci do własnych przeżyć.
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed">
              Badania przeprowadzone przez <a href="https://www.apa.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">American Psychological Association</a> potwierdzają skuteczność biblioterapii w redukcji lęków, 
              poprawie samooceny i rozwijaniu kompetencji emocjonalnych u dzieci.
            </p>
          </section>

          {/* Section 3 */}
          <section id="kto-moze" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Dla kogo jest bajkoterapia?</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Bajkoterapia jest skuteczną metodą wsparcia dla dzieci w różnym wieku i w różnych sytuacjach życiowych. 
              Najlepsze rezultaty osiąga się u <strong>dzieci w wieku od 3 do 12 lat</strong>, choć metoda może być 
              dostosowana również dla starszych dzieci i młodzieży.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Sytuacje, w których pomaga bajkoterapia:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-background-subtle p-5 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Rozwód lub separacja rodziców</h4>
                    <p className="text-sm text-muted-foreground">
                      Pomaga dziecku zrozumieć zmiany w rodzinie i przepracować towarzyszące emocje
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle p-5 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Żałoba i strata</h4>
                    <p className="text-sm text-muted-foreground">
                      Wspiera w przeżywaniu żałoby po śmierci bliskiej osoby lub zwierzęcia
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle p-5 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Lęki i fobie</h4>
                    <p className="text-sm text-muted-foreground">
                      Pomaga dzieciom radzić sobie z lękiem separacyjnym, ciemności, czy wizytami u lekarza
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle p-5 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Trudności w wyrażaniu emocji</h4>
                    <p className="text-sm text-muted-foreground">
                      Uczy rozpoznawania, nazywania i wyrażania uczuć w konstruktywny sposób
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle p-5 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Adaptacja w przedszkolu/szkole</h4>
                    <p className="text-sm text-muted-foreground">
                      Wspiera w przystosowaniu się do nowego środowiska i budowaniu relacji
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle p-5 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Niepełnosprawność w rodzinie</h4>
                    <p className="text-sm text-muted-foreground">
                      Pomaga zrozumieć różnice i budować empatię wobec osób z niepełnosprawnością
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle p-5 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Budowanie pewności siebie</h4>
                    <p className="text-sm text-muted-foreground">
                      Wzmacnia wiarę we własne możliwości i akceptację siebie
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle p-5 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Relacje z rodzeństwem</h4>
                    <p className="text-sm text-muted-foreground">
                      Pomaga w radzeniu sobie z zazdrością i konfliktami między dziećmi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="font-semibold mb-2">⚠️ Ważne:</p>
              <p className="text-muted-foreground">
                Bajkoterapia jest metodą wspomagającą, ale nie zastępuje profesjonalnej pomocy psychologicznej 
                w przypadku poważnych problemów emocjonalnych czy traumy. W takich sytuacjach skonsultuj się ze specjalistą.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="korzysc" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">7 Kluczowych Korzyści z Bajkoterapii</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rozwój inteligencji emocjonalnej</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dziecko uczy się rozpoznawać, nazywać i rozumieć własne emocje oraz emocje innych ludzi. 
                    Rozwija empatię i umiejętność stawiania się w sytuacji innych osób.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Redukcja lęków i stresu</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Przez identyfikację z bohaterem i przeżywanie jego problemów, dziecko oswaja własne lęki 
                    i uczy się, że trudne emocje są normalne i można sobie z nimi radzić.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nauka strategii radzenia sobie</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Książki prezentują różne sposoby rozwiązywania problemów, co poszerza repertuar zachowań dziecka 
                    i daje mu konkretne narzędzia do radzenia sobie w trudnych sytuacjach.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Wzmocnienie więzi rodzic-dziecko</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wspólne czytanie i rozmowy o książkach budują relację opartą na zaufaniu i otwartości. 
                    Dziecko czuje się wysłuchane i zrozumiane przez rodzica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rozwój kompetencji językowych</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Czytanie wzbogaca słownictwo dziecka, w tym słownictwo emocjonalne, co ułatwia mu 
                    wyrażanie własnych uczuć i potrzeb.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Budowanie odporności psychicznej</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dziecko uczy się, że trudności są częścią życia i można je pokonywać. 
                    Widzi, że inni też mają problemy i że można z nich wyjść obronną ręką.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  7
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Profilaktyka problemów emocjonalnych</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Regularne czytanie terapeutycznych książek może zapobiec narastaniu problemów emocjonalnych 
                    i pomóc dziecku lepiej radzić sobie z wyzwaniami rozwojowymi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="jak-prowadzic" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Jak prowadzić bajkoterapię w domu? 6 Kroków</h2>
            
            <p className="text-lg leading-relaxed mb-8">
              Bajkoterapię możesz skutecznie prowadzić w domu, bez specjalistycznego przygotowania. 
              Oto sprawdzony, 6-krokowy proces, który pomoże Ci maksymalnie wykorzystać potencjał terapeutyczny książek:
            </p>

            <div className="space-y-8">
              <div className="border rounded-lg p-6 bg-background-subtle">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold">Dobierz odpowiednią książkę</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-15">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Wybierz książkę adekwatną do wieku dziecka i jego sytuacji życiowej</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Upewnij się, że temat książki odpowiada aktualnemu problemowi lub emocji dziecka</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Przeczytaj książkę najpierw sam, aby ocenić czy jest odpowiednia</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Zwróć uwagę na język, ilustracje i przesłanie książki</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold">Stwórz odpowiednią atmosferę</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-15">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Wybierz spokojne miejsce bez rozpraszaczy (wyłącz telewizor, telefony)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Zadbaj o komfort fizyczny - wygodne siedzenie, odpowiednie światło</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Ustal stały rytuał czytania (np. wieczorem przed snem)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Nie śpiesz się - zaplanuj wystarczająco dużo czasu</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold">Czytaj z zaangażowaniem</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-15">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Moduluj głos, aby odzwierciedlić emocje bohaterów</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Rób pauzy, aby dziecko mogło przyjrzeć się ilustracjom</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Obserwuj reakcje dziecka - jeśli coś je poruszyło, zatrzymaj się</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Czytaj w tempie dostosowanym do dziecka, nie śpiesz się</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold">Porozmawiaj o historii</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-15">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Po lekturze zadawaj otwarte pytania: "Co sądzisz o...?", "Jak się czuł...?"</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Nie oceniaj odpowiedzi dziecka, słuchaj z empatią</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Pozwól dziecku prowadzić rozmowę, nie narzucaj własnej interpretacji</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Stopniowo przechodź od rozmowy o bohaterze do sytuacji dziecka</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <h3 className="text-2xl font-semibold">Pozwól na wyrażenie emocji</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-15">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Zaproponuj dziecku narysowanie sceny z książki lub swojego bohatera</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Zachęć do odegrania fragmentu książki (zabawa w teatrzyk)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Akceptuj wszystkie emocje dziecka - płacz, złość, radość</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Nie bagatelizuj uczuć dziecka, nie mów "to tylko bajka"</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    6
                  </div>
                  <h3 className="text-2xl font-semibold">Wracaj do książki</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-15">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Czytaj tę samą książkę wielokrotnie, jeśli dziecko tego potrzebuje</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Przy każdym czytaniu dziecko może dostrzec nowe aspekty historii</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Odnośniki do książki w codziennych sytuacjach ("Pamiętasz jak bohater...?")</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Trzymaj książkę w widocznym miejscu, aby dziecko mogło do niej wracać</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="font-semibold mb-2">✅ Pamiętaj:</p>
              <p className="text-muted-foreground">
                Każde dziecko reaguje inaczej na bajkoterapię. Bądź cierpliwy i elastyczny. 
                Czasami efekty są widoczne od razu, czasem potrzeba kilku tygodni regularnego czytania.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="ksiazki" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Jakie książki wybrać do bajkoterapii?</h2>
            
            <p className="text-lg leading-relaxed mb-8">
              Wybór odpowiedniej książki jest kluczowy dla skuteczności bajkoterapii. 
              Oto najważniejsze kryteria doboru książek oraz przykłady z serii <strong>"Książki do zadań specjalnych"</strong>:
            </p>

            <h3 className="text-2xl font-semibold mb-4">Kryteria doboru książek:</h3>
            
            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Adekwatność tematyczna:</strong> Książka powinna poruszać konkretny problem dziecka</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Odpowiedni wiek:</strong> Język, długość i złożoność fabularną dostosowana do wieku</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Empatyczne podejście:</strong> Bohater jest zrozumiały i autentyczny w swoich emocjach</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Realistyczne rozwiązania:</strong> Książka pokazuje prawdziwe strategie radzenia sobie</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Nadzieja i optymizm:</strong> Historia daje nadzieję, ale nie banalizuje problemu</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Wartościowe ilustracje:</strong> Obrazki wspierają przekaz i pomagają w zrozumieniu emocji</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-6">Przykładowe książki do bajkoterapii:</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold mb-3">
                  <Link href="/ksiazki/zaba" className="text-primary hover:underline">
                    Żaba - mała opowieść o żałobie
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Temat:</strong> Żałoba, strata bliskiej osoby
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Dla kogo:</strong> Dzieci 4-9 lat przeżywające stratę
                </p>
                <p className="text-sm leading-relaxed">
                  Delikatna historia pomagająca dzieciom zrozumieć i przepracować żałobę. 
                  Pokazuje, że smutek po stracie jest normalny i że można o nim rozmawiać.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold mb-3">
                  <Link href="/ksiazki/czasami-szczesliwi-rodzice" className="text-primary hover:underline">
                    Czasami szczęśliwi rodzice mieszkają oddzielnie
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Temat:</strong> Rozwód, separacja rodziców
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Dla kogo:</strong> Dzieci 5-10 lat w sytuacji rozwodu
                </p>
                <p className="text-sm leading-relaxed">
                  Wrażliwa opowieść pomagająca dzieciom zrozumieć, że rozwód to decyzja rodziców, 
                  a nie wina dziecka. Pokazuje różne modele rodziny.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold mb-3">
                  <Link href="/ksiazki/nie-znajdziesz-mnie" className="text-primary hover:underline">
                    Nie znajdziesz mnie po śladach. Stop
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Temat:</strong> Bezpieczeństwo, prewencja wykorzystywania
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Dla kogo:</strong> Dzieci 6-12 lat
                </p>
                <p className="text-sm leading-relaxed">
                  Edukacyjna książka ucząca dzieci asertywności i rozpoznawania sytuacji zagrożenia. 
                  Wzmacnia poczucie sprawczości i umiejętność mówienia "nie".
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold mb-3">
                  <Link href="/ksiazki/guzikozerca" className="text-primary hover:underline">
                    Guzikożerca na tropie słów
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Temat:</strong> Autyzm, inność, akceptacja
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Dla kogo:</strong> Dzieci 7-12 lat, rodzeństwo dzieci z autyzmem
                </p>
                <p className="text-sm leading-relaxed">
                  Dziesięć opowieści prowadzących do świata dziecka w spektrum autyzmu. 
                  Pomaga zrozumieć inność i budować empatię.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/ksiazki" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Zobacz wszystkie książki
                <Book className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8">Najczęstsze pytania o bajkoterapię (FAQ)</h2>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Czym jest bajkoterapia?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bajkoterapia (biblioterapia) to metoda terapeutyczna wykorzystująca literaturę dziecięcą 
                  do wspierania rozwoju emocjonalnego i społecznego dzieci. Polega na czytaniu specjalnie 
                  dobranych książek, które pomagają dzieciom zrozumieć i przepracować trudne emocje oraz 
                  sytuacje życiowe.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Dla kogo jest bajkoterapia?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bajkoterapia jest skuteczna dla dzieci w wieku od 3 do 12 lat. Pomaga dziecku przeżywającym 
                  trudne sytuacje takie jak: rozwód rodziców, żałoba, lęki, problemy z wyrażaniem emocji, 
                  adaptacja w przedszkolu/szkole, niepełnosprawność w rodzinie, czy budowanie pewności siebie.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Jak prowadzić bajkoterapię w domu?</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Aby prowadzić bajkoterapię w domu:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Dobierz książkę odpowiednią do sytuacji dziecka</li>
                  <li>Stwórz spokojną atmosferę bez rozpraszaczy</li>
                  <li>Czytaj z zaangażowaniem i empatią</li>
                  <li>Po lekturze porozmawiaj o historii</li>
                  <li>Pozwól dziecku wyrazić emocje przez rysowanie lub zabawę</li>
                  <li>Wracaj do książki wielokrotnie, jeśli dziecko tego potrzebuje</li>
                </ol>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Jakie książki wybrać do bajkoterapii?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wybieraj książki adekwatne do wieku dziecka i jego sytuacji życiowej. Szukaj pozycji poruszających 
                  konkretne tematy: żałobę, rozwód, chorobę, niepełnosprawność, relacje rówieśnicze. Ważne, aby książki 
                  były empatyczne, realistyczne, ale dawały nadzieję. Seria "Książki do zadań specjalnych" Olgi Ptak 
                  została stworzona właśnie z myślą o bajkoterapii.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Czy bajkoterapia naprawdę działa?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tak, badania naukowe potwierdzają skuteczność bajkoterapii. Biblioterapia rozwojowa wspiera 
                  rozwój emocjonalny dzieci, pomaga w rozpoznawaniu i nazywaniu emocji, buduje empatię oraz 
                  umiejętności radzenia sobie z trudnościami. Metoda jest uznawana przez psychologów i pedagogów 
                  jako wartościowe narzędzie wspierające rozwój dziecka.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Jak długo trwa bajkoterapia?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Długość bajkoterapii zależy od indywidualnych potrzeb dziecka. Niektóre dzieci czerpią korzyści 
                  już po kilku sesjach czytania, inne potrzebują kilku tygodni lub miesięcy regularnego czytania. 
                  Ważne jest systematyczne podejście - lepiej czytać krótko, ale regularnie (np. 15 minut codziennie), 
                  niż długo, ale rzadko.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Czy mogę łączyć bajkoterapię z terapią psychologiczną?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tak, bajkoterapia doskonale uzupełnia profesjonalną terapię psychologiczną. Wiele psychologów 
                  dziecięcych włącza bajkoterapię do swojej pracy z dzieckiem. Jeśli Twoje dziecko jest pod opieką 
                  psychologa, warto skonsultować dobór książek ze specjalistą, aby były one spójne z prowadzoną terapią.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Co zrobić, gdy dziecko nie chce rozmawiać po lekturze?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To normalne! Nie każde dziecko jest gotowe do natychmiastowej rozmowy. Nie naciskaj. Zaproponuj 
                  alternatywne formy wyrażenia emocji: rysowanie, zabawę lalkami, lepienie z plasteliny. Czasem dziecko 
                  wraca do tematu książki spontanicznie po kilku dniach. Ważne, aby dać mu przestrzeń i czas.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">❓ Kiedy warto skonsultować się ze specjalistą?</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Skonsultuj się z psychologiem lub pedagogiem gdy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Dziecko przeżywa traumatyczne doświadczenie</li>
                  <li>Objawy utrzymują się długo mimo bajkoterapii</li>
                  <li>Dziecko ma poważne trudności emocjonalne lub behawioralne</li>
                  <li>Potrzebujesz pomocy w doborze odpowiednich książek</li>
                  <li>Chcesz połączyć bajkoterapię z profesjonalną terapią</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Podsumowanie</h2>
              <p className="leading-relaxed mb-6">
                Bajkoterapia to potężne narzędzie wspierające rozwój emocjonalny dzieci. Poprzez odpowiednio 
                dobrane książki możesz pomóc swojemu dziecku zrozumieć trudne emocje, nauczyć się radzenia sobie 
                z wyzwaniami i budować odporność psychiczną. Pamiętaj, że kluczem do sukcesu jest:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Dobór odpowiednich książek</strong> - adekwatnych do wieku i sytuacji dziecka</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Regularność</strong> - lepiej czytać krótko, ale często</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Empatia i cierpliwość</strong> - daj dziecku czas i przestrzeń</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Otwartość na emocje</strong> - wszystkie uczucia są ok</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Jeśli masz wątpliwości lub sytuacja dziecka jest szczególnie trudna, nie wahaj się skonsultować 
                z psychologiem dziecięcym. Profesjonalista pomoże Ci dobrać odpowiednie metody wsparcia i książki.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 border-t">
            <h2 className="text-3xl font-bold mb-4">Gotowy rozpocząć bajkoterapię?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Odkryj serię "Książki do zadań specjalnych" - książki stworzone specjalnie z myślą 
              o wspieraniu dzieci i rodziców w trudnych sytuacjach życiowych.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/ksiazki"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                <Book className="w-6 h-6" />
                Zobacz wszystkie książki
              </Link>
              <Link 
                href="/biblioterapia"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background border-2 rounded-lg font-semibold text-lg hover:bg-background-subtle transition-colors"
              >
                <Heart className="w-6 h-6" />
                Dowiedz się więcej o biblioterapii
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-6">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/artykuly/ksiazki-w-terapii"
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  Jak wybrać książkę wspomagającą terapię dziecka
                </h3>
                <p className="text-sm text-muted-foreground">
                  Praktyczny przewodnik po doborze książek dla dzieci w różnych sytuacjach życiowych.
                </p>
              </Link>
              
              <Link 
                href="/artykuly/historia-zosi-i-ksiazki-zaba"
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  Historia Zosi i książki Żaba
                </h3>
                <p className="text-sm text-muted-foreground">
                  Prawdziwa historia o tym, jak książka pomogła dziecku przepracować żałobę.
                </p>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}