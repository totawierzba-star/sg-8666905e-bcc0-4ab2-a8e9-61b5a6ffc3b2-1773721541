import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { BookOpen, Users, Calendar, Heart, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NadpobudliwoscADHDSkok() {
  return (
    <Layout>
      <SEO
        title="Jak pomóc dziecku z ADHD i nadpobudliwością? Przewodnik dla rodziców | Książka Skok"
        description="Praktyczny przewodnik dla rodziców dzieci z ADHD i nadpobudliwością. Dowiedz się, jak rozmawiać o emocjach, wspierać rozwój i budować harmonię rodzinną z książką 'Skok'."
        image="/uploads/skokokładka.jpg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Jak pomóc dziecku z ADHD i nadpobudliwością? Przewodnik dla rodziców",
            description: "Praktyczny przewodnik dla rodziców dzieci z ADHD i nadpobudliwością oparty na książce 'Skok' - metafora skaczącego domu jako narzędzie do rozmowy o emocjach.",
            image: "/uploads/skokokładka.jpg",
            author: {
              "@type": "Organization",
              name: "Książki do zadań specjalnych"
            },
            publisher: {
              "@type": "Organization",
              name: "Książki do zadań specjalnych",
              logo: {
                "@type": "ImageObject",
                url: "/og-image.png"
              }
            },
            datePublished: "2026-03-07",
            dateModified: "2026-03-07",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://biblioterapia.org/artykuly/nadpobudliwosc-adhd-skok"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Jak rozpoznać nadpobudliwość u dziecka?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nadpobudliwość objawia się trudnością w siedzeniu w miejscu, problemami z koncentracją, impulsywnością oraz nadmierną aktywnością ruchową. Dzieci z ADHD często mają problemy z dokończeniem zadań, łatwo się rozpraszają i reagują bardzo emocjonalnie."
                }
              },
              {
                "@type": "Question",
                name: "Jak pomóc dziecku z ADHD w codziennym funkcjonowaniu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kluczowe jest stworzenie przewidywalnej struktury dnia, dawanie prostych, konkretnych poleceń, pozwalanie na przerwy ruchowe oraz docenianie wysiłku, nie tylko efektów. Ważna jest też empatia i zrozumienie, że dziecko nie robi tego 'na złość'."
                }
              },
              {
                "@type": "Question",
                name: "Czy książka 'Skok' pomaga w rozmowie o ADHD?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, książka używa metafory 'skaczącego domu', która pozwala dzieciom i rodzicom porozmawiać o nadpobudliwości w sposób niestygmatyzujący. Dom, który skacze, staje się bezpiecznym symbolem energii i ruchu, który można wspólnie oswajać."
                }
              },
              {
                "@type": "Question",
                name: "Co to jest 'przeradowanie' u rodziców?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Przeradowanie to stan emocjonalnego przeciążenia - gdy rodzic stara się sprostać zbyt wielu obowiązkom, jest zmęczony, zestresowany i przytłoczony. W książce 'Skok' babcia używa tego określenia, zwracając uwagę na potrzebę dbania o siebie."
                }
              },
              {
                "@type": "Question",
                name: "Jak radzić sobie z chaosem w domu z dzieckiem z ADHD?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zamiast dążyć do ideału, warto zaakceptować pewien poziom chaosu jako część życia rodzinnego. Kluczowa jest komunikacja o potrzebach wszystkich domowników, elastyczność i wspólne ustalanie 'nowych zasad', które uwzględniają specyfikę dziecka."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">
              Strona główna
            </Link>
            {" / "}
            <Link href="/artykuly" className="hover:text-foreground transition-colors">
              Artykuły
            </Link>
            {" / "}
            <span className="text-foreground">Nadpobudliwość i ADHD</span>
          </nav>

          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
            <BookOpen className="inline-block w-4 h-4 mr-1" />
            PRZEWODNIK DLA RODZICÓW
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Jak pomóc dziecku z ADHD i nadpobudliwością? Przewodnik dla rodziców
          </h1>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Odkryj, jak metafora "skaczącego domu" z książki "Skok" pomaga rodzinom z dziećmi z ADHD 
            i nadpobudliwością zrozumieć emocje, wspierać rozwój i budować harmonię w codziennym życiu.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Dla rodziców dzieci 5-10 lat</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Wsparcie emocjonalne</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>ADHD i nadpobudliwość</span>
            </div>
          </div>

          <img
            src="/uploads/skokokładka.jpg"
            alt="Okładka książki Skok - historia o nadpobudliwości i harmonii rodzinnej"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Kiedy dom zaczyna skakać: Metafora codzienności z dzieckiem z ADHD</h2>
          
          <p>
            Wyobraź sobie, że twój dom nagle zaczyna podskakiwać. Przedmioty się przesuwają, 
            z kanapy wyjeżdżają zagubione zabawki, w łazience dochodzi do zalania, a każde codzienne 
            zadanie wymyka się spod kontroli. Brzmi znajomo?
          </p>

          <p>
            Dla wielu rodziców dzieci z ADHD i nadpobudliwością taka "skacząca rzeczywistość" 
            to codzienność. Energia dziecka, jego ruchliwość, impulsywność i trudności z koncentracją 
            przypominają właśnie taki dom z książki <Link href="/ksiazki/skok" className="text-blue-600 dark:text-blue-400 hover:underline">"Skok"</Link> 
            {" "}— pełen życia, ale nieustannie w ruchu, nieprzewidywalny i wymagający.
          </p>

          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 p-6 my-8">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Czy to ADHD? Kluczowe sygnały
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <span>Trudności z siedzeniem w miejscu, nieustanny ruch</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <span>Problemy z koncentracją i dokończeniem zadań</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <span>Impulsywne reakcje i działania bez zastanowienia</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <span>Nadmierna aktywność ruchowa nieproporcjonalna do sytuacji</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <span>Silne, trudne do kontrolowania emocje</span>
              </li>
            </ul>
          </Card>

          <h2>Filip, Luśka i Dom, który potrzebuje "hopsasania"</h2>

          <p>
            W książce "Skok" poznajemy rodzeństwo — Filipa i Luśkę, nazywanych przez rodziców Ośmiornicami. 
            Mieszkają w domu, który dosłownie podskakuje. Dzieci widzą te skoki od razu, ale dorośli 
            początkowo dostrzegają tylko skutki: bałagan, chaos i codzienne "katastrofy".
          </p>

          <p>
            Ta metafora genialnie oddaje codzienność rodzin z dziećmi z ADHD. <strong>Dom w "Skoku" 
            to symbol dziecka pełnego energii, które nie potrafi usiedzieć w miejscu</strong> — potrzebuje 
            ruchu, zabawy, swobody. Ale jednocześnie jego skoki powodują, że wszystko wokół wymyka się 
            spod kontroli: odrabianie lekcji staje się wyzwaniem, przygotowania do szkoły trwają wieki, 
            a proste zadania kończą się frustracją.
          </p>

          <h2>Syndrom "przeradowania": Gdy rodzic jest na granicy wytrzymałości</h2>

          <p>
            W książce pojawia się świetne słowo, które wprowadza babcia — <strong>"przeradowanie"</strong>. 
            To moment, gdy mama jest przeciążona emocjami, obowiązkami, radami i oczekiwaniami. Stara się 
            być idealna, utrzymać porządek, dopilnować lekcji, zaplanować wszystko... ale napięcie rośnie 
            jak ciśnienie w wulkanie.
          </p>

          <p>
            Wielu rodziców dzieci z ADHD przeżywa dokładnie to samo. Ciągła walka z chaosem, zmęczenie, 
            poczucie winy ("Dlaczego u wszystkich jest łatwiej?"), presja otoczenia i brak czasu dla siebie 
            prowadzą do wypalenia emocjonalnego.
          </p>

          <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 p-6 my-8">
            <h3 className="text-xl font-semibold mb-3">Jak rozpoznać "przeradowanie"?</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Ciągłe zmęczenie mimo wystarczającej ilości snu</li>
              <li>Drażliwość i szybkie reagowanie na drobne problemy</li>
              <li>Poczucie, że wszystko wymyka się spod kontroli</li>
              <li>Trudności z cieszeniem się drobnymi chwilami</li>
              <li>Poczucie winy i myśl "powinienem/powinnam więcej"</li>
            </ul>
          </Card>

          <h2>Wspólny rytm zamiast idealnego planu</h2>

          <p>
            Przełomowy moment w "Skoku" następuje, gdy rodzice w końcu zobaczyli skoki Domu własnymi oczami. 
            Mama rozumie, że walka z tym, co nieuniknione, nie ma sensu. <strong>Zamiast próbować zatrzymać 
            Dom i wcisnąć go w sztywne ramy, rodzina uczy się z nim żyć</strong>.
          </p>

          <p>
            Rozpoczyna się szczera rozmowa przy kolacji: dzieci bronią Domu ("On musi hopsasać!"), 
            rodzice tłumaczą swoje obawy ("O dom trzeba dbać"). Filip, młodszy brat, zauważa coś kluczowego: 
            <em>"Nie tylko z pustym brzuchem źle się skacze, ale też z ciężką głową"</em>.
          </p>

          <p>
            Ta scena to esencja tego, czego potrzebują rodziny z dziećmi z ADHD — <strong>rozmowy o potrzebach 
            każdego domownika</strong>. Nie chodzi o to, by dziecko "przestało skakać" (czyli przestało być sobą), 
            ale o znalezienie wspólnego rytmu życia, który uwzględnia jego energię, ale też potrzeby rodziców 
            i pozostałych członków rodziny.
          </p>

          <h2>Praktyczne wskazówki dla rodziców dzieci z ADHD</h2>

          <h3>1. Zaakceptuj "skoki" jako część rzeczywistości</h3>
          <p>
            Twoje dziecko nie "robi tego na złość". Nadpobudliwość to neurologiczna różnica w funkcjonowaniu 
            mózgu. Zamiast walczyć z naturą dziecka, pomóż mu nauczyć się kanałować energię w bezpieczny sposób.
          </p>

          <h3>2. Stwórz strukturę, ale bądź elastyczny</h3>
          <p>
            Dzieci z ADHD potrzebują przewidywalności, ale sztywne plany prowadzą do frustracji. Ustal podstawowe 
            punkty dnia (posiłki, sen, nauka), ale zostaw przestrzeń na spontaniczność i przerwy ruchowe.
          </p>

          <h3>3. Dziel zadania na małe kroki</h3>
          <p>
            Zamiast "Posprzątaj pokój", powiedz: "Zbierz klocki do pudełka". Proste, konkretne polecenia 
            działają lepiej niż ogólne instrukcje.
          </p>

          <h3>4. Dawaj czas na ruch</h3>
          <p>
            Tak jak Dom w książce potrzebuje "hopsasania", twoje dziecko potrzebuje ruchu. Zamiast wymagać 
            godziny siedzenia przy lekcjach, planuj krótsze sesje z przerwami na bieganie, skakanie, taniec.
          </p>

          <h3>5. Rozmawiaj o emocjach</h3>
          <p>
            Używaj metafor (jak skaczący dom), które pomogą dziecku nazwać i zrozumieć swoje uczucia. 
            Pytaj: "Jak dziś czuje się twój wewnętrzny dom? Czy dużo skacze?"
          </p>

          <h3>6. Dbaj o siebie</h3>
          <p>
            Jeśli jesteś "przeradowany", nie pomożesz dziecku. Szukaj wsparcia u rodziny (jak dziadkowie 
            w książce), terapeuty, grup wsparcia. Pozwól sobie na niedoskonałość.
          </p>

          <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 p-6 my-8">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
              Książka "Skok" jako narzędzie terapeutyczne
            </h3>
            <p className="mb-4">
              "Skok" to świetne narzędzie do rozmowy z dzieckiem o ADHD, nadpobudliwości i rodzinnych 
              wyzwaniach. Metafora skaczącego domu pozwala w niestygmatyzujący sposób mówić o trudnościach 
              i wspólnie szukać rozwiązań.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ksiazki/skok">
                <Button variant="outline" className="w-full sm:w-auto">
                  Zobacz kartę książki
                </Button>
              </Link>
              <a 
                href="https://tusieczyta.pl/pl/albus/958-skok-9788367085021.html?utm_source=ksiazkidozadanspecjalnych&utm_medium=article&utm_campaign=skok_adhd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Kup książkę
                </Button>
              </a>
            </div>
          </Card>

          <h2>Co mówią eksperci o ADHD u dzieci?</h2>

          <p>
            ADHD (zespół nadpobudliwości psychoruchowej z deficytem uwagi) dotyka około 5-7% dzieci 
            w wieku szkolnym. To zaburzenie neurorozwojowe, które wpływa na zdolność do kontrolowania 
            impulsów, utrzymywania uwagi i regulowania poziomu aktywności.
          </p>

          <p>
            <strong>Ważne:</strong> ADHD nie oznacza braku inteligencji czy złej woli. Dzieci z ADHD 
            często są bardzo kreatywne, empatyczne i pełne energii. Potrzebują jednak odpowiedniego 
            wsparcia, zrozumienia i czasem specjalistycznej pomocy (terapia behawioralna, psychoedukacja, 
            w niektórych przypadkach farmakoterapia).
          </p>

          <h2>Zakończenie: Nowe zasady dla całej rodziny</h2>

          <p>
            Pod koniec książki "Skok" rodzina dochodzi do mądrego wniosku: nie da się żyć według 
            idealnego planu, bo życie (i dom) zawsze będzie skakać. <strong>Zamiast walczyć z chaosem, 
            tworzą "nowe zasady"</strong> — takie, które uwzględniają potrzeby wszystkich.
          </p>

          <p>
            To właśnie jest klucz do życia z dzieckiem z ADHD: akceptacja, komunikacja i elastyczność. 
            Dom może dalej skakać — ale teraz całą rodzina wie, dlaczego to robi, i wspólnie znajduje 
            sposób, by z tym żyć.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg p-8 my-12 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4">Gotowy na rozmowę z dzieckiem o emocjach i ADHD?</h2>
            <p className="mb-6 text-lg">
              Poznaj książkę "Skok" i odkryj, jak metafora skaczącego domu pomaga rodzinom budować 
              więź, zrozumienie i harmonię. Idealna dla dzieci 5-10 lat i ich rodziców.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ksiazki/skok">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Sprawdź kartę książki
                </Button>
              </Link>
              <a 
                href="https://tusieczyta.pl/pl/albus/958-skok-9788367085021.html?utm_source=ksiazkidozadanspecjalnych&utm_medium=article&utm_campaign=skok_adhd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Zamów "Skok" teraz
                </Button>
              </a>
            </div>
          </div>

          <section className="mt-12 border-t pt-8">
            <h2 className="text-3xl font-bold mb-6">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Jak rozpoznać nadpobudliwość u dziecka?</h3>
                <p>
                  Nadpobudliwość objawia się trudnością w siedzeniu w miejscu, problemami z koncentracją, 
                  impulsywnością oraz nadmierną aktywnością ruchową. Dzieci z ADHD często mają problemy 
                  z dokończeniem zadań, łatwo się rozpraszają i reagują bardzo emocjonalnie. Jeśli te 
                  objawy utrzymują się przez ponad 6 miesięcy i występują w różnych sytuacjach (dom, 
                  szkoła, zabawa), warto skonsultować się ze specjalistą.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Jak pomóc dziecku z ADHD w codziennym funkcjonowaniu?</h3>
                <p>
                  Kluczowe jest stworzenie przewidywalnej struktury dnia, dawanie prostych, konkretnych 
                  poleceń, pozwalanie na przerwy ruchowe oraz docenianie wysiłku, nie tylko efektów. 
                  Ważna jest też empatia i zrozumienie, że dziecko nie robi tego "na złość". Regularne 
                  przerwy na ruch, jasne zasady i ciepła, wspierająca komunikacja robią ogromną różnicę.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Czy książka "Skok" pomaga w rozmowie o ADHD?</h3>
                <p>
                  Tak, książka używa metafory "skaczącego domu", która pozwala dzieciom i rodzicom 
                  porozmawiać o nadpobudliwości w sposób niestygmatyzujący. Dom, który skacze, staje 
                  się bezpiecznym symbolem energii i ruchu, który można wspólnie oswajać. Dzieci łatwiej 
                  identyfikują się z bohaterami i rozumieją, że ich "skoki" są naturalne i można się 
                  nauczyć z nimi żyć.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Co to jest "przeradowanie" u rodziców?</h3>
                <p>
                  Przeradowanie to stan emocjonalnego przeciążenia — gdy rodzic stara się sprostać zbyt 
                  wielu obowiązkom, jest zmęczony, zestresowany i przytłoczony. W książce "Skok" babcia 
                  używa tego określenia, zwracając uwagę na potrzebę dbania o siebie. Przeradowanie 
                  może prowadzić do wypalenia rodzicielskiego, dlatego tak ważne jest szukanie wsparcia 
                  i pozwalanie sobie na niedoskonałość.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Jak radzić sobie z chaosem w domu z dzieckiem z ADHD?</h3>
                <p>
                  Zamiast dążyć do ideału, warto zaakceptować pewien poziom chaosu jako część życia 
                  rodzinnego. Kluczowa jest komunikacja o potrzebach wszystkich domowników, elastyczność 
                  i wspólne ustalanie "nowych zasad", które uwzględniają specyfikę dziecka. Czasem 
                  oznacza to rezygnację z perfekcjonizmu na rzecz spokoju i lepszych relacji.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}