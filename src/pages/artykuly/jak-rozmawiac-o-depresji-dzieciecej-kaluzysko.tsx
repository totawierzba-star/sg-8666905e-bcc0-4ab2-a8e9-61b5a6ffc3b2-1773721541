import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Book, Heart, Info, Brain, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

export default function KaluzyskoArticle() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "Jak objawia się depresja u małego dziecka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depresja u małych dzieci rzadko przypomina tę u dorosłych. Często objawia się dolegliwościami somatycznymi (bóle brzucha, głowy), drażliwością, trudnościami w skupieniu uwagi, niepokojem ruchowym lub całkowitym wycofaniem się i utratą zainteresowania ulubionymi zabawami, co w książce 'Kałużysko' symbolizuje 'rozlanie się' Emila.",
        },
      },
      {
        "@type": "Question",
        "name": "Jak wytłumaczyć dziecku chorobę psychiczną brata lub siostry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Najlepiej używać prostych, obrazowych metafor. Należy podkreślać, że choroba nie jest winą żadnego z dzieci (chore dziecko 'nie robi tego specjalnie'), a umysł, podobnie jak ciało, może czasem chorować i potrzebować odpoczynku. Książka 'Kałużysko' jest doskonałym narzędziem, by przeprowadzić taką rozmowę.",
        },
      },
      {
        "@type": "Question",
        "name": "Czym jest książka Kałużysko?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To terapeutyczna opowieść o sześcioletnim Kubie i jego starszym bracie Emilu, który z powodu przebodźcowania, problemów w szkole i depresji dosłownie 'rozlewa się' w kałużę. Książka uczy empatii, cierpliwości w procesie leczenia oraz pokazuje perspektywę rodzeństwa dziecka w kryzysie.",
        },
      },
      {
        "@type": "Question",
        "name": "Jak wspierać dziecko w kryzysie psychicznym?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Podstawą jest cierpliwa obecność, zdjęcie presji i wymagań, zapewnienie bezpiecznego, spokojnego środowiska oraz poszukanie profesjonalnej pomocy (psychologa lub psychiatry). Ważne jest, by nie zmuszać dziecka do natychmiastowego powrotu do 'normy', lecz towarzyszyć mu w jego własnym tempie wracania do zdrowia.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gdy dziecko rozlewa się z bezsilności. Jak rozmawiać o dziecięcej depresji z książką Kałużysko",
    description: "Praktyczny przewodnik o tym, jak rozpoznać kryzys emocjonalny u dziecka, jak wspierać je w depresji i jak wytłumaczyć rodzeństwu, czym jest choroba psychiczna przy pomocy metafory z książki 'Kałużysko'.",
    author: {
      "@type": "Organization",
      name: "Książki do zadań specjalnych",
    },
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
    publisher: {
      "@type": "Organization",
      name: "Książki do zadań specjalnych",
    },
    image: "/uploads/kaluzyskoOkładka.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://biblioterapia.org/artykuly/jak-rozmawiac-o-depresji-dzieciecej-kaluzysko",
    },
  };

  return (
    <Layout>
      <SEO
        title="Gdy Dziecko Traci Siły: Depresja i Wyczerpanie | Książka Kałużysko"
        description="Jak mądrze rozmawiać z dzieckiem o depresji i kryzysie psychicznym rodzeństwa? Poznaj niezwykłą metaforę z książki 'Kałużysko'. Przeczytaj artykuł!"
        url="https://biblioterapia.org/artykuly/jak-rozmawiac-o-depresji-dzieciecej-kaluzysko"
        image="/uploads/kaluzyskoOkładka.jpg"
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
          <span className="text-foreground">Depresja dziecięca a "Kałużysko"</span>
        </nav>

        {/* Header */}
        <header className="mb-12 space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Terapia i Praktyka
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Gdy dziecko "rozlewa się" z bezsilności. Jak rozmawiać o dziecięcej depresji z książką "Kałużysko"
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Depresja u dzieci nie zawsze wygląda jak smutek z filmów. Czasem to bóle brzucha, niemożność usiedzenia w miejscu, aż w końcu całkowite wyczerpanie. Zobacz, jak mądrze rozmawiać o kryzysie psychicznym z wykorzystaniem metaforycznej opowieści o Emilu.
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden border bg-background-subtle flex justify-center py-8">
          <img 
            src="/uploads/kaluzyskoOkładka.jpg" 
            alt="Okładka książki Kałużysko" 
            className="max-h-96 object-contain rounded shadow-lg"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-background-subtle border rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            Spis treści
          </h2>
          <nav className="space-y-2">
            <a href="#nieoczywiste-objawy" className="block text-primary hover:underline">
              1. Nieoczywiste objawy kryzysu w szkole
            </a>
            <a href="#metafora-rozlania" className="block text-primary hover:underline">
              2. Dosłowne rozlanie się – potęga literackiej metafory
            </a>
            <a href="#perspektywa-rodzenstwa" className="block text-primary hover:underline">
              3. Złość i tęsknota – perspektywa rodzeństwa
            </a>
            <a href="#rola-doroslych" className="block text-primary hover:underline">
              4. Cierpliwość i natura – jak dorośli mogą pomóc?
            </a>
            <a href="#podsumowanie-i-ksiazka" className="block text-primary hover:underline">
              5. Dlaczego warto sięgnąć po "Kałużysko"?
            </a>
            <a href="#faq" className="block text-primary hover:underline">
              6. Najczęstsze pytania (FAQ)
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          <section id="nieoczywiste-objawy" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Nieoczywiste objawy dziecięcego kryzysu</h2>
            <p className="text-lg leading-relaxed mb-6">
              Kiedy myślimy o depresji, często wyobrażamy sobie osobę dorosłą leżącą w łóżku. U dzieci kryzys psychiczny wygląda inaczej, co doskonale obrazuje postać starszego brata z <Link href="/ksiazki/kaluzysko" className="text-primary hover:underline font-medium">książki "Kałużysko"</Link>. Emil na początku nie jest "tylko smutny". 
            </p>
            <p className="leading-relaxed mb-6">
              Jego problemy zaczynają się w szkole: <strong>nie potrafi usiedzieć w miejscu, ma trudności ze skupieniem, źle znosi codzienne wymagania</strong>. Szybko dołączają do tego objawy somatyczne – bóle brzucha i głowy. 
              Dokuczanie ze strony rówieśników, narastająca samotność, lęk i przytłoczenie obowiązkami tworzą mieszankę, której układ nerwowy dziecka w pewnym momencie nie jest w stanie unieść.
            </p>
            
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-amber-600" />
                Dla rodzica i terapeuty:
              </p>
              <p className="text-muted-foreground m-0">
                Problemy z zachowaniem, niepokój ruchowy czy nieuzasadnione bóle brzucha to często u dzieci sygnał alarmowy wołający: <em>"Jestem przebodźcowany, nie radzę sobie, moje emocje są zbyt silne"</em>.
              </p>
            </div>
          </section>

          <section id="metafora-rozlania" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Dosłowne "rozlanie się" – potęga metafory</h2>
            <p className="text-lg leading-relaxed mb-6">
              Kluczowym momentem opowieści jest zwyczajny poranek, podczas którego Emil... <strong>dosłownie rozlewa się w przedpokoju, zamieniając w kałużę</strong>. Z psychologicznego punktu widzenia to jedna z najtrafniejszych metafor depresji i wypalenia (burnoutu) dostępna w literaturze dziecięcej.
            </p>
            <p className="leading-relaxed mb-6">
              Rozlanie symbolizuje:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Utratę dotychczasowej formy, sprawczości i energii życiowej.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Niemożność dostosowania się do oczekiwań (wody nie da się łatwo chwycić ani zmusić do konkretnego kształtu).</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Izolację i zamknięcie w sobie.</span>
              </li>
            </ul>
          </section>

          <section id="perspektywa-rodzenstwa" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Złość i tęsknota: Jak pomóc rodzeństwu zrozumieć?</h2>
            <p className="text-lg leading-relaxed mb-6">
              Wielką wartością "Kałużyska" jest pokazanie kryzysu z perspektywy sześcioletniego Kuby. Zdrowe dziecko, które obserwuje załamanie starszego brata, przeżywa huśtawkę emocji. Kuba jest sfrustrowany. Złości się, że Emil <em>"już się z nim nie bawi"</em> i nie chce wrócić do dawnej postaci. Jednocześnie potwornie za nim tęskni.
            </p>
            
            <div className="bg-primary/5 p-6 rounded-lg mb-6 border border-primary/20">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Psychoedukacja w książce
              </h3>
              <p className="text-muted-foreground m-0">
                Ważnym punktem zwrotnym jest rozmowa mamy oraz cioci Su (psycholożki). Dorośli tłumaczą Kubie fundament zrozumienia chorób psychicznych: <strong>Emil "nie robi tego specjalnie".</strong> On cierpi. Zrozumienie, że zachowanie brata nie jest wymierzone przeciwko niemu, pozwala Kubie zmienić złość na chęć cichego towarzyszenia.
              </p>
            </div>
          </section>

          <section id="rola-doroslych" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Natura, cierpliwość i brak presji – droga powrotu</h2>
            <p className="text-lg leading-relaxed mb-6">
              Co robią rodzice, gdy Emil zamienia się w wodę? Zamiast zmuszać go do powrotu do szkoły, ostrożnie przenoszą go w wiaderku i wywożą na wieś, do Baby Jagi. Otaczają go naturą, spokojnym rytmem dnia, zapachem deszczu, zabawą kuzynostwa. 
            </p>
            <p className="leading-relaxed mb-6">
              <strong>To nie jest proces, który dzieje się w jedną noc.</strong> Emil powoli daje znaki życia – reaguje na słońce, śmiech dzieci, zapach śniadania z niespodzianką przygotowanego dla mam, budowę bazy pod wierzbą. Choć nie wraca natychmiast do swojej postaci chłopca, w jego wodnym ciele budzi się nadzieja. 
            </p>
            <p className="leading-relaxed">
              To najpiękniejsza lekcja dla dorosłych: leczenie kryzysu psychicznego u dziecka wymaga zdjęcia presji. Wymaga obecności, bycia obok (nawet w ciszy) i ogromnej, bezwarunkowej cierpliwości. Czekania, aż dziecko poczuje się na tyle bezpiecznie, by zechciało znowu zmierzyć się ze światem.
            </p>
          </section>

          {/* CTA Section */}
          <section id="podsumowanie-i-ksiazka" className="mb-12 scroll-mt-20 mt-12">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-10 shadow-sm text-center">
              <h2 className="text-3xl font-bold mb-4">Potrzebujesz mądrego narzędzia do rozmowy o emocjach?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                "Kałużysko" to nie tylko książka o smutku. To opowieść o nadziei, wsparciu rodziny i akceptacji inności. Idealna dla rodziców, psychologów szkolnych i terapeutów pracujących z dziećmi.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/ksiazki/kaluzysko"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-background border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-colors"
                >
                  <Book className="w-5 h-5" />
                  Zobacz opis książki
                </Link>
                
                <a 
                  href="https://tusieczyta.pl/pl/albus/960-kaluzysko-9788367085045.html?utm_source=ksiazkidozadanspecjalnych&utm_medium=article&utm_campaign=kaluzysko_depresja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                >
                  Kup książkę w sklepie
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section For AI Overviews */}
          <section id="faq" className="mb-12 scroll-mt-20 border-t pt-10">
            <h2 className="text-3xl font-bold mb-8">Pytania i odpowiedzi (FAQ)</h2>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">Jak objawia się depresja u małego dziecka?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Depresja u małych dzieci bardzo często maskowana jest przez inne objawy. Zamiast widocznego smutku, dziecko może zgłaszać bóle brzucha i głowy (objawy psychosomatyczne). Często staje się bardzo drażliwe, ma trudności ze skupieniem uwagi, przejawia niepokój ruchowy lub przeciwnie – całkowicie wycofuje się z relacji i traci zainteresowanie ulubionymi zabawami. W literaturze, tak jak w książce "Kałużysko", taki stan bywa obrazowo przedstawiany jako utrata energii życiowej ("rozlanie się").
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">Jak wytłumaczyć dziecku chorobę psychiczną brata lub siostry?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kluczowe jest zdjęcie poczucia winy z chorego dziecka w oczach rodzeństwa. Wykorzystaj proste metafory. Wyjaśnij, że umysł czasami "choruje" i potrzebuje odpoczynku, dokładnie tak samo jak złamana noga. Użyj zwrotu: <em>"Twój brat/siostra nie robi tego specjalnie. On/ona bardzo teraz cierpi"</em>. Pomaga to zamienić złość zdrowego dziecka na zrozumienie i empatię.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">Jak wspierać dziecko w kryzysie psychicznym?</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li><strong>Zdejmij presję:</strong> Zmniejsz oczekiwania dotyczące obowiązków domowych czy szkolnych.</li>
                  <li><strong>Zapewnij bezpieczną przestrzeń:</strong> Pozwól na spokojny rytm dnia, wyciszenie i kontakt z naturą.</li>
                  <li><strong>Bądź obecny:</strong> Nawet milcząca obecność obok dziecka daje mu poczucie bezpieczeństwa.</li>
                  <li><strong>Szukaj pomocy profesjonalisty:</strong> Skonsultuj się z psychologiem dziecięcym, terapeutą lub psychiatrą (jak książkowa "ciocia Su").</li>
                  <li><strong>Zachowaj cierpliwość:</strong> Nie zmuszaj dziecka do natychmiastowego "wzięcia się w garść". Proces zdrowienia zajmuje czas.</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}