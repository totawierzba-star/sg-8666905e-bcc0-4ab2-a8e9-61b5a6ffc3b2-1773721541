import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Book, Heart, Info, Brain, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

export default function MrowkiArticle() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "Jak powiedzieć dziecku o utracie pracy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Najlepiej powiedzieć wprost, używając prostych słów dostosowanych do wieku dziecka. Ważne jest uspokojenie: 'Tata/mama stracił(a) pracę, ale będziemy razem szukać rozwiązania. To nie jest twoja wina.' Unikaj ukrywania stresu - dzieci wyczuwają napięcie i mogą wyobrażać sobie gorsze scenariusze niż rzeczywistość.",
        },
      },
      {
        "@type": "Question",
        "name": "Jak wspierać rodzica w kryzysie zawodowym?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Podstawą jest empatia bez oceniania. Pozwól rodzicowi przeżyć emocje (smutek, złość, bezsilność), ale jednocześnie wspieraj go w małych krokach powrotu do aktywności. Nie zmuszaj do natychmiastowego działania - każdy potrzebuje czasu na przepracowanie straty. Książka 'Mrówki' pokazuje, że obserwowanie owadów stało się dla taty sposobem radzenia sobie ze stresem.",
        },
      },
      {
        "@type": "Question",
        "name": "Czy dzieci rozumieją problemy finansowe rodziny?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dzieci w różnym wieku rozumieją finanse różnie, ale wszystkie wyczuwają napięcie i lęk rodziców. Ważne jest dostosowanie informacji do wieku dziecka i unikanie przerzucania na nie odpowiedzialności za sytuację rodziny. Możesz wytłumaczyć, że 'teraz musimy bardziej uważać na wydatki', nie obwiniając dziecka za potrzeby.",
        },
      },
      {
        "@type": "Question",
        "name": "Jak książka Mrówki pomaga rozmawiać o kryzysie rodzinnym?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Książka używa metafory mrówek jako symbolu problemów, które wydają się nie do pokonania. Gaja obserwuje, jak tata próbuje walczyć z 'inwazją' owadów, co jest zewnętrznym wyrazem jego wewnętrznej walki z utratą pracy. Opowieść uczy dzieci, że dorośli też się boją i nie zawsze wiedzą, jak rozwiązać swoje problemy - ale wspólnie można je przezwyciężyć.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jak rozmawiać z dzieckiem o utracie pracy rodzica? Przewodnik z książką Mrówki",
    description: "Praktyczny przewodnik dla rodziców: jak wyjaśnić dziecku utratę pracy, wspierać rodzica w kryzysie zawodowym i budować poczucie bezpieczeństwa w trudnym czasie. Metafora mrówek z książki pomoże w rozmowie.",
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
    image: "/uploads/okłdkamrowki.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://ksiazkidozadanspecjalnych.pl/artykuly/jak-rozmawiac-o-utracie-pracy-mrowki",
    },
  };

  return (
    <Layout>
      <SEO
        title="Jak Rozmawiać z Dzieckiem o Utracie Pracy? | Książka Mrówki"
        description="Praktyczny przewodnik dla rodziców: jak wyjaśnić dziecku kryzys zawodowy rodzica przy pomocy metafory mrówek z książki. Wsparcie w trudnym czasie."
        url="https://ksiazkidozadanspecjalnych.pl/artykuly/jak-rozmawiac-o-utracie-pracy-mrowki"
        image="/uploads/okłdkamrowki.jpg"
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
          <span className="text-foreground">Utrata pracy rodzica - "Mrówki"</span>
        </nav>

        {/* Header */}
        <header className="mb-12 space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Terapia i Rodzina
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Jak rozmawiać z dzieckiem o utracie pracy rodzica? Przewodnik z książką "Mrówki"
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Utrata pracy to jeden z największych stresów w życiu dorosłego. Ale jak wytłumaczyć to dziecku? Zobacz, jak metafora mrówek pomaga rodzinom przejść przez kryzys zawodowy z godnością i wsparciem.
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden border bg-background-subtle flex justify-center py-8">
          <img 
            src="/uploads/okłdkamrowki.jpg" 
            alt="Okładka książki Mrówki" 
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
            <a href="#inwazja-mrowek" className="block text-primary hover:underline">
              1. Inwazja mrówek jako metafora kryzysu
            </a>
            <a href="#obserwacja-taty" className="block text-primary hover:underline">
              2. Gdy dorośli walczą z niewidocznymi problemami
            </a>
            <a href="#odkrycie-prawdy" className="block text-primary hover:underline">
              3. Odkrycie prawdy - tata stracił pracę
            </a>
            <a href="#wspolne-radzenie" className="block text-primary hover:underline">
              4. Wspólne radzenie sobie z kryzysem
            </a>
            <a href="#lekcje-dla-rodzicow" className="block text-primary hover:underline">
              5. Co możemy zrobić jako rodzice?
            </a>
            <a href="#podsumowanie" className="block text-primary hover:underline">
              6. Dlaczego warto sięgnąć po "Mrówki"?
            </a>
            <a href="#faq" className="block text-primary hover:underline">
              7. Najczęstsze pytania (FAQ)
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          <section id="inwazja-mrowek" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Inwazja mrówek jako metafora życiowych trudności</h2>
            <p className="text-lg leading-relaxed mb-6">
              Historia zaczyna się pozornie niewinnie: w kuchni rodziny Gai pojawiają się mrówki. Dziewczynka z fascynacją obserwuje ich zachowanie - zbierają okruszki, przemieszczają się jak dobrze zorganizowana armia, są wszędzie. Gaja prowadzi nawet swoje notatki o <strong>"inwazji"</strong> i wyobraża sobie, że może urosnąć do ogromnych rozmiarów i będzie musiała stoczyć heroiczną walkę o dom.
            </p>
            
            <div className="my-8 rounded-xl overflow-hidden border">
              <img 
                src="/uploads/mro_wki1.png" 
                alt="Ilustracja z książki Mrówki - dziewczynka obserwuje mrówki" 
                className="w-full"
              />
            </div>

            <p className="leading-relaxed mb-6">
              Ta dziecięca wyobraźnia jest piękna - Gaja widzi mrówki jako realne zagrożenie, które da się pokonać. Nie wie jeszcze, że prawdziwy problem jest zupełnie inny i dotyczy nie owadów, a życia dorosłych.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Dlaczego mrówki?
              </p>
              <p className="text-muted-foreground m-0">
                Mrówki to doskonała metafora problemów, które wydają się nam małe i błahe na początku, ale szybko przytłaczają swoją liczebnością. Tak jak stres związany z utratą pracy - na początku to tylko jeden "robaczek" niepokoju, który z czasem mnoży się i wypełnia całą przestrzeń myślową.
              </p>
            </div>
          </section>

          <section id="obserwacja-taty" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Gdy tata walczy z mrówkami zamiast z prawdziwym problemem</h2>
            <p className="text-lg leading-relaxed mb-6">
              Tata zaczyna zajmować się problemem mrówek z niemal obsesyjną dokładnością. Szuka informacji o ich zwyczajach, zastawia pułapki, próbuje różnych sposobów, aby się ich pozbyć. <strong>Spędza coraz więcej czasu w kuchni</strong>, obserwując owady i zastanawiając się, jak rozwiązać problem.
            </p>

            <div className="my-8 rounded-xl overflow-hidden border">
              <img 
                src="/uploads/mro_wki2.png" 
                alt="Ilustracja z książki Mrówki - tata walczy z mrówkami" 
                className="w-full"
              />
            </div>

            <p className="leading-relaxed mb-6">
              Gaja stopniowo zauważa, że z tatą dzieje się coś dziwnego. Coraz częściej siedzi w domu, wygląda na zmartwioneqo i zamyślonego. Walka z mrówkami staje się jego głównym zajęciem. Dla dziewczynki to zagadka - dlaczego tata tak bardzo się przejmuje owadami?
            </p>
            
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-600" />
                Psychologia mechanizmu obronnego
              </p>
              <p className="text-muted-foreground m-0">
                Dla taty mrówki stały się sposobem na radzenie sobie ze stresem i trudnymi emocjami po utracie pracy. Koncentrując się na "małym, kontrolowalnym problemie" (owady), unika konfrontacji z prawdziwym, przytłaczającym wyzwaniem (utrata dochodów, tożsamości zawodowej, poczucia wartości).
              </p>
            </div>
          </section>

          <section id="odkrycie-prawdy" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Odkrycie prawdy - gdy dziecko rozumie kryzys dorosłych</h2>
            <p className="text-lg leading-relaxed mb-6">
              Stopniowo Gaja odkrywa prawdziwy powód zachowania taty. <strong>Okazuje się, że tata stracił pracę</strong>, a obserwowanie mrówek i walka z nimi stały się dla niego sposobem na radzenie sobie ze stresem i poczuciem bezsilności.
            </p>

            <div className="my-8 rounded-xl overflow-hidden border">
              <img 
                src="/uploads/mro_wki3.png" 
                alt="Ilustracja z książki Mrówki - rodzinna rozmowa" 
                className="w-full"
              />
            </div>

            <p className="leading-relaxed mb-6">
              Rodzina zaczyna rozumieć, że problem mrówek nie jest najważniejszy - <strong>są one tylko symbolem trudności, które pojawiły się w życiu rodziny</strong>. To kluczowy moment w książce - dziecko uczy się, że dorośli również się boją, nie zawsze wiedzą, jak rozwiązać swoje problemy, i potrzebują wsparcia.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Gaja dowiaduje się, że problemy dorosłych wpływają na całą rodzinę</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Rozumie, że tata nie jest "słaby" - po prostu zmaga się z trudną sytuacją</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>Uczy się, że szczera rozmowa pomaga więcej niż ukrywanie problemów</span>
              </li>
            </ul>
          </section>

          <section id="wspolne-radzenie" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Wspólne radzenie sobie - siła rodzinnego wsparcia</h2>
            <p className="text-lg leading-relaxed mb-6">
              Wspólne rozmowy i wzajemne wsparcie pomagają rodzinie poradzić sobie z sytuacją. Książka nie oferuje magicznych rozwiązań ani "happy endu" w postaci natychmiastowego znalezienia nowej pracy. Zamiast tego pokazuje, że:
            </p>
            
            <div className="bg-primary/5 p-6 rounded-lg mb-6 border border-primary/20">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Najważniejsze lekcje z książki
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Trudności jednego członka rodziny wpływają na wszystkich, ale można je pokonać razem</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Dzięki rozmowie i wzajemnej pomocy nawet największe "mrówki" można oswoić</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Dorośli też potrzebują czułości i zrozumienia - nie są niezniszczalni</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Problemy nie znikają - ale wspólnie można znaleźć sposób, by z nimi żyć</span>
                </li>
              </ul>
            </div>

            <p className="leading-relaxed">
              Historia kończy się refleksją, że w życiu czasem pojawiają się małe lub większe "mrówki" - <strong>problemy, które wydają się nie do opanowania</strong>. Nie oznacza to jednak końca świata. Najważniejsze jest wsparcie bliskich, szczera rozmowa i wspólne szukanie rozwiązania.
            </p>
          </section>

          <section id="lekcje-dla-rodzicow" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Co możemy zrobić jako rodzice w kryzysie?</h2>
            <p className="text-lg leading-relaxed mb-6">
              Książka "Mrówki" to nie tylko opowieść dla dzieci, ale także przewodnik dla rodziców, którzy przechodzą przez trudny czas. Oto praktyczne wskazówki:
            </p>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">1. Nie ukrywaj prawdy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dzieci wyczuwają napięcie i lęk rodziców. Ukrywanie prawdy powoduje, że wyobrażają sobie gorsze scenariusze niż rzeczywistość. Powiedz wprost, dostosowując język do wieku dziecka: <em>"Tata/mama stracił(a) pracę. To znaczy, że będziemy musieli uważniej wydawać pieniądze, ale razem sobie poradzimy."</em>
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">2. Pozwól sobie na emocje</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nie musisz być silny/silna 24/7. Dziecko może zobaczyć, że rodzic jest smutny lub zdenerwowany - to naturalne. Ważne, żeby podkreślić: <em>"Jestem smutny/smutna z powodu pracy, ale to nie jest twoja wina. Ty jesteś wspaniały/wspaniała i bardzo cię kocham."</em>
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">3. Szukaj wsparcia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tak jak rodzina Gai, potrzebujesz rozmów z partnerem/partnerką, przyjaciółmi, może psychologiem. Nie dźwigaj wszystkiego sam/sama. Dzieci uczą się z Twojego przykładu, że proszenie o pomoc to oznaka mądrości, nie słabości.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">4. Buduj poczucie bezpieczeństwa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Podkreślaj, co się NIE zmienia: <em>"Nadal mieszkamy razem, kochamy się, jesteśmy rodziną. To się nie zmieni."</em> Utrzymuj codzienne rytuały (wspólne posiłki, czytanie przed snem), które dają dziecku stabilność.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="podsumowanie" className="mb-12 scroll-mt-20 mt-12">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-10 shadow-sm text-center">
              <h2 className="text-3xl font-bold mb-4">Potrzebujesz narzędzia do rozmowy o kryzysie rodzinnym?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                "Mrówki" to ciepła, empatyczna opowieść, która pomoże Ci wytłumaczyć dziecku, że problemy dorosłych nie są jego winą. Idealna dla rodzin przechodzących przez trudny czas oraz terapeutów wspierających dzieci w kryzysie.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/ksiazki/mrowki"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-background border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-colors"
                >
                  <Book className="w-5 h-5" />
                  Zobacz opis książki
                </Link>
                
                <a 
                  href="https://tusieczyta.pl/pl/ksiazki-dla-dzieci/1259-mrowki-9788367085229.html?utm_source=ksiazkidozadanspecjalnych&utm_medium=article&utm_campaign=mrowki_utrata_pracy"
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

          {/* FAQ Section */}
          <section id="faq" className="mb-12 scroll-mt-20 border-t pt-10">
            <h2 className="text-3xl font-bold mb-8">Pytania i odpowiedzi (FAQ)</h2>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">Jak powiedzieć dziecku o utracie pracy?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Najlepiej powiedzieć wprost, używając prostych słów dostosowanych do wieku dziecka. Ważne jest uspokojenie: <em>"Tata/mama stracił(a) pracę, ale będziemy razem szukać rozwiązania. To nie jest twoja wina."</em> Unikaj ukrywania stresu - dzieci wyczuwają napięcie i mogą wyobrażać sobie gorsze scenariusze niż rzeczywistość.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">Jak wspierać rodzica w kryzysie zawodowym?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Podstawą jest empatia bez oceniania. Pozwól rodzicowi przeżyć emocje (smutek, złość, bezsilność), ale jednocześnie wspieraj go w małych krokach powrotu do aktywności. Nie zmuszaj do natychmiastowego działania - każdy potrzebuje czasu na przepracowanie straty. Książka "Mrówki" pokazuje, że obserwowanie owadów stało się dla taty sposobem radzenia sobie ze stresem.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">Czy dzieci rozumieją problemy finansowe rodziny?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dzieci w różnym wieku rozumieją finanse różnie, ale wszystkie wyczuwają napięcie i lęk rodziców. Ważne jest dostosowanie informacji do wieku dziecka i unikanie przerzucania na nie odpowiedzialności za sytuację rodziny. Możesz wytłumaczyć, że <em>"teraz musimy bardziej uważać na wydatki"</em>, nie obwiniając dziecka za potrzeby.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-background-subtle">
                <h3 className="text-xl font-semibold mb-3">Jak książka "Mrówki" pomaga rozmawiać o kryzysie rodzinnym?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Książka używa metafory mrówek jako symbolu problemów, które wydają się nie do pokonania. Gaja obserwuje, jak tata próbuje walczyć z "inwazją" owadów, co jest zewnętrznym wyrazem jego wewnętrznej walki z utratą pracy. Opowieść uczy dzieci, że dorośli też się boją i nie zawsze wiedzą, jak rozwiązać swoje problemy - ale wspólnie można je przezwyciężyć.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}