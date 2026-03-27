import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Clock, Users, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function JakWygladaSesjaPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ile trwa biblioterapia i jak wygląda sesja?",
    "description": "Jak wygląda sesja biblioterapeutyczna krok po kroku? Ile trwa, co się na niej dzieje i czego można się spodziewać — przewodnik dla rodziców, nauczycieli i terapeutów.",
    "author": { "@type": "Organization", "name": "Biblioterapia.org" },
    "publisher": { "@type": "Organization", "name": "Biblioterapia.org", "url": "https://biblioterapia.org" },
    "url": "https://biblioterapia.org/artykuly/jak-wyglada-sesja-biblioterapii",
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "inLanguage": "pl",
    "mainEntityOfPage": "https://biblioterapia.org/artykuly/jak-wyglada-sesja-biblioterapii"
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile trwa sesja biblioterapeutyczna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standardowa sesja biblioterapeutyczna trwa 45–90 minut, w zależności od grupy wiekowej i kontekstu. Sesja z dziećmi w wieku przedszkolnym: 30–45 minut. Sesja szkolna: 45–60 minut. Sesja grupowa dla dorosłych: 60–90 minut. Sesja indywidualna w gabinecie terapeutycznym: 50 minut."
        }
      },
      {
        "@type": "Question",
        "name": "Ile sesji biblioterapii jest potrzebnych?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zależy od celu. Jednorazowe zajęcia profilaktyczne (np. w klasie) już przynoszą efekty. Cykl terapeutyczny przy konkretnym problemie trwa zazwyczaj 6–12 sesji. Przy poważniejszych trudnościach biblioterapia może trwać tyle co regularna terapia — kilka miesięcy do roku."
        }
      },
      {
        "@type": "Question",
        "name": "Jak wygląda pierwsza sesja biblioterapii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pierwsza sesja zazwyczaj zaczyna się od poznania potrzeb i sytuacji uczestnika (wywiad lub rozmowa wstępna), a następnie biblioterapeuta proponuje tekst lub czyta go razem z uczestnikiem. Po lekturze następuje rozmowa o emocjach i refleksjach. Na pierwszej sesji terapeuta często nie proponuje od razu najtrudniejszych tematów — stopniuje intensywność."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Ile trwa biblioterapia i jak wygląda sesja? Przewodnik krok po kroku"
        description="Jak wygląda sesja biblioterapeutyczna? Ile trwa, co się dzieje przed, w trakcie i po lekturze — praktyczny przewodnik dla rodziców, nauczycieli i terapeutów."
        url="https://biblioterapia.org/artykuly/jak-wyglada-sesja-biblioterapii"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

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
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Praktyka
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ile trwa biblioterapia i jak wygląda sesja?
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Wiesz już czym jest biblioterapia — ale jak wygląda w praktyce? Co się dokładnie
              dzieje na sesji, jak długo trwa, ile spotkań jest potrzebnych i czego możesz się
              spodziewać jako rodzic, uczestnik lub terapeuta?
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
              <li><a href="#ile-trwa" className="text-primary hover:underline">1. Ile trwa jedna sesja?</a></li>
              <li><a href="#ile-spotkan" className="text-primary hover:underline">2. Ile sesji jest potrzebnych?</a></li>
              <li><a href="#etapy" className="text-primary hover:underline">3. Jak wygląda sesja krok po kroku?</a></li>
              <li><a href="#przed-lektura" className="text-primary hover:underline">4. Przed lekturą — przygotowanie</a></li>
              <li><a href="#podczas" className="text-primary hover:underline">5. Podczas lekturą — co się dzieje?</a></li>
              <li><a href="#po-lekturze" className="text-primary hover:underline">6. Po lekturze — rozmowa i działanie</a></li>
              <li><a href="#domowa" className="text-primary hover:underline">7. Biblioterapia domowa — jak zacząć samodzielnie?</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none space-y-12">

            {/* 1 */}
            <section id="ile-trwa" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                Ile trwa jedna sesja biblioterapeutyczna?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  { kontekst: "Dzieci przedszkolne (3–6 lat)", czas: "30–45 minut", opis: "Krótka uwaga i szybkie tempo — sesja skupia się na lekturze i jednej krótkiej aktywności twórczej." },
                  { kontekst: "Dzieci szkolne (6–12 lat)", czas: "45–60 minut", opis: "Lektura + rozmowa + aktywność (rysunek, odgrywanie ról, pisanie). Tempo zależy od grupy." },
                  { kontekst: "Młodzież i dorośli (grupowe)", czas: "60–90 minut", opis: "Więcej miejsca na dyskusję grupową, wymianę perspektyw i głębszą refleksję." },
                  { kontekst: "Sesja indywidualna (gabinet)", czas: "50 minut", opis: "Standard godziny terapeutycznej. Intensywniejsza praca z emocjami uczestnika." },
                ].map((item) => (
                  <div key={item.kontekst} className="border rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-sm">{item.kontekst}</h3>
                      <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">{item.czas}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.opis}</p>
                  </div>
                ))}
              </div>

              <p>
                Czas trwania sesji dostosowuje się do uczestnika, nie odwrotnie. Dobre zasady to:
                zakończyć zanim dziecko się znudzi i zawsze zostawić przestrzeń na pytania.
              </p>
            </section>

            {/* 2 */}
            <section id="ile-spotkan" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Ile sesji jest potrzebnych?
              </h2>

              <div className="space-y-4 my-6">
                {[
                  {
                    typ: "Jednorazowe zajęcia profilaktyczne",
                    ilosc: "1 sesja",
                    opis: "Np. lekcja wychowawcza lub zajęcia biblioteczne o konkretnym temacie (emocje, różnorodność, żałoba). Już jedna dobrze poprowadzona sesja przynosi efekty edukacyjne.",
                    kolor: "green"
                  },
                  {
                    typ: "Krótki cykl terapeutyczny",
                    ilosc: "4–8 sesji",
                    opis: "Np. praca z dzieckiem po stracie lub przy lęku szkolnym. Sesje raz w tygodniu przez 4–8 tygodni. Dobry punkt startowy dla większości problemów.",
                    kolor: "blue"
                  },
                  {
                    typ: "Pełny cykl biblioterapii",
                    ilosc: "10–20 sesji",
                    opis: "Przy głębszych trudnościach emocjonalnych, traumach lub w pracy klinicznej. Często element szerszego planu terapeutycznego.",
                    kolor: "purple"
                  },
                  {
                    typ: "Biblioterapia ciągła",
                    ilosc: "Rok szkolny lub dłużej",
                    opis: "Np. stały klub biblioterapeutyczny w szkole lub bibliotece. Regularne spotkania budują nawyk refleksji i długoterminową odporność emocjonalną.",
                    kolor: "amber"
                  },
                ].map((item) => (
                  <div key={item.typ} className="flex gap-4 p-5 bg-muted/30 rounded-xl border">
                    <div className="shrink-0 text-center">
                      <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 font-bold text-sm whitespace-nowrap">
                        {item.ilosc}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{item.typ}</p>
                      <p className="text-sm text-muted-foreground">{item.opis}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3 */}
            <section id="etapy" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Jak wygląda sesja biblioterapeutyczna krok po kroku?
              </h2>

              <p>
                Każda sesja biblioterapeutyczna ma podobną strukturę, choć terapeuta dostosowuje
                ją do grupy i sytuacji. Klasyczny model składa się z czterech etapów:
              </p>

              <div className="my-8 space-y-4">
                {[
                  {
                    krok: "1",
                    nazwa: "Rozgrzewka i wejście w kontakt",
                    czas: "5–10 min",
                    opis: "Krótkie ćwiczenie lub rozmowa pozwalająca uczestnikom wejść w przestrzeń terapeutyczną. Pytanie otwierające, ruch, oddechy lub gra integracyjna. Cel: obniżenie napięcia i budowanie zaufania.",
                    kolor: "blue"
                  },
                  {
                    krok: "2",
                    nazwa: "Praca z tekstem (lektura)",
                    czas: "10–20 min",
                    opis: "Terapeuta czyta tekst na głos lub uczestnicy czytają samodzielnie/wspólnie. W przypadku małych dzieci — czytanie z pokazywaniem ilustracji i pauzami na pytania. Ważne: terapeuta czyta wyrażyście, nie analizuje w trakcie.",
                    kolor: "green"
                  },
                  {
                    krok: "3",
                    nazwa: "Rozmowa i refleksja",
                    czas: "15–30 min",
                    opis: "Pytania otwarte o emocje bohaterów, sytuacje z tekstu i osobiste skojarzenia. Terapeuta nie interpretuje — pyta, słucha, odzwierciedla. Przestrzeń na ciszę i swobodną odpowiedź.",
                    kolor: "purple"
                  },
                  {
                    krok: "4",
                    nazwa: "Działanie twórcze i zamknięcie",
                    czas: "10–20 min",
                    opis: "Rysunek, pisanie, odgrywanie sceny, praca z metaforą — przeniesienie refleksji w działanie. Na końcu: zamknięcie sesji, zdanie podsumowujące każdego uczestnika (jedno słowo/zdanie o tym, co zabramy).",
                    kolor: "amber"
                  },
                ].map((item) => (
                  <div key={item.krok} className="flex gap-5 p-6 border rounded-xl">
                    <div className="shrink-0 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                      {item.krok}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">{item.nazwa}</h3>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{item.czas}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.opis}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 */}
            <section id="przed-lektura" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Przed lekturą — jak terapeuta dobiera tekst?
              </h2>

              <p>
                Dobór tekstu to kluczowy element biblioterapii. Terapeuta przed sesją analizuje:
              </p>

              <ul className="space-y-3 my-4">
                {[
                  { pyt: "Jaka jest sytuacja uczestnika?", opis: "Żałoba, lęk, niskie poczucie wartości, trudności w relacjach — każda sytuacja wymaga innej lektury." },
                  { pyt: "Jaki jest wiek i poziom czytelniczy?", opis: "Książka musi być dostosowana do możliwości poznawczych. Za trudna frustruje, za łatwa nudzi." },
                  { pyt: "Jaki efekt chcemy osiągnąć?", opis: "Identyfikację, oczyszczenie emocjonalne, nową perspektywę, konkretne strategie radzenia sobie?" },
                  { pyt: "Czy tekst nie jest zbyt bezpośredni?", opis: "Metafora i fikcja działają lepiej niż poradnikowy przekaz. Dobra książka terapeutyczna nie moralizuje." },
                ].map((item) => (
                  <li key={item.pyt} className="flex gap-3 p-4 bg-muted/30 rounded-xl border">
                    <span className="text-primary font-bold mt-0.5 shrink-0">?</span>
                    <div>
                      <p className="font-semibold text-sm">{item.pyt}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.opis}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p>
                Nasze{" "}
                <Link href="/biblioterapia/scenariusze" className="text-primary hover:underline font-medium">
                  scenariusze zajęć biblioterapeutycznych
                </Link>{" "}
                mają już opracowany dobór tekstu, cele i przebieg sesji — możesz je zastosować
                bezpośrednio bez przygotowania metodycznego.
              </p>
            </section>

            {/* 5 */}
            <section id="podczas" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Podczas lektury — co robi terapeuta?
              </h2>

              <p>
                Czytanie w biblioterapii to nie byle czytanie. Terapeuta:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 my-4">
                {[
                  "Czyta wyrażyście, modulując głos i tempo do emocji tekstu",
                  "Zatrzymuje się w kluczowych momentach i pyta: Co myślisz, że teraz czuje bohater?",
                  "Obserwuje reakcje uczestników — napięcie, łzy, śmiech, wycofanie",
                  "Nie narzuca interpretacji — pozostawia przestrzeń na własne odczucia",
                  "Dostosowuje tempo do grupy — nie spieszy się",
                  "W razie silnych emocji — zatrzymuje lekturę i reaguje na uczestnika",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6 */}
            <section id="po-lekturze" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Po lekturze — pytania, które otwierają rozmowę
              </h2>

              <p>
                Rozmowa po lekturze to serce biblioterapii. Terapeuta korzysta z pytań otwartych,
                które nie sugerują „właściwej" odpowiedzi:
              </p>

              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Przykładowe pytania po lekturze:</h3>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  {[
                    "Co czuł/a bohater w tym momencie? Skąd to wiesz?",
                    "Które zdanie lub scena najbardziej do Ciebie trafiły? Dlaczego?",
                    "Czy zdarzyło Ci się coś podobnego do tego, co przeżył bohater?",
                    "Co byś zrobił/a na miejscu bohatera?",
                    "Czego bohater się nauczył? A Ty — czego możesz się nauczyć z tej historii?",
                    "Jedno słowo opisujące to, co teraz czujesz po przeczytaniu.",
                  ].map((pyt) => (
                    <li key={pyt} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold shrink-0">→</span>
                      <span className="italic">{pyt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Gotowe pytania do rozmowy po lekturze znajdziesz w każdym z naszych{" "}
                <Link href="/biblioterapia/scenariusze" className="text-primary hover:underline font-medium">
                  scenariuszy zajęć biblioterapeutycznych
                </Link>.
              </p>
            </section>

            {/* 7 */}
            <section id="domowa" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Biblioterapia domowa — jak zacząć samodzielnie?
              </h2>

              <p>
                Nie musisz być terapeutą, żeby prowadzić biblioterapię z własnym dzieckiem.
                Wystarczy odpowiednia książka, czas i kilka zasad:
              </p>

              <div className="space-y-3 my-4">
                {[
                  { krok: "1", opis: "Wybierz książkę dopasowaną do aktualnej sytuacji dziecka. Skorzystaj z naszej listy lub scenariuszy." },
                  { krok: "2", opis: "Przygotuj się — przeczytaj książkę wcześniej sam/a. Wiedz, jakie emocje może wzbudzić." },
                  { krok: "3", opis: "Czytaj razem z dzieckiem, bez pośpiechu. Zatrzymuj się przy ilustracjach i ważnych momentach." },
                  { krok: "4", opis: "Po lekturze zapytaj otwartymi pytaniami o emocje bohaterów. Nie interpretuj — słuchaj." },
                  { krok: "5", opis: "Zaproponuj prostą aktywność: rysunek, wycinankę, list do bohatera lub wspólne wymyślenie dalszego ciągu historii." },
                  { krok: "6", opis: "Nie naciskaj na konkretne odpowiedzi. Celem jest rozmowa, nie właściwa interpretacja." },
                ].map((item) => (
                  <div key={item.krok} className="flex gap-3 p-4 bg-muted/30 rounded-xl border">
                    <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm shrink-0">
                      {item.krok}
                    </div>
                    <p className="text-sm leading-relaxed">{item.opis}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mt-6">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Kiedy szukać specjalisty?</strong> Gdy temat jest szczególnie trudny
                  (śmierć, trauma, choroba psychiczna), gdy dziecko reaguje silnym lękiem lub
                  wycofaniem — skonsultuj się z psychologiem lub pedagogiem szkolnym.
                  Biblioterapia domowa nie zastępuje specjalistycznej pomocy.
                </p>
              </div>
            </section>

            {/* Źródła */}
            <section className="mt-12 p-6 bg-muted/30 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Źródła</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4244866/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    PubMed: Bibliotherapy — przegląd metod i struktury sesji <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li className="text-muted-foreground">Hynes A.M., Hynes-Berry M., <em>Bibliotherapy — The Interactive Process</em>, 1986</li>
                <li className="text-muted-foreground">Borecka I., <em>Biblioterapia. Teoria i praktyka</em>, Warszawa 2004</li>
              </ul>
            </section>

            {/* Internal links */}
            <section className="mt-8 p-6 bg-muted/20 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Czytaj dalej</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/artykuly/co-to-jest-biblioterapia", label: "Co to jest biblioterapia?" },
                  { href: "/artykuly/dla-kogo-jest-biblioterapia", label: "Dla kogo jest biblioterapia?" },
                  { href: "/artykuly/rodzaje-biblioterapii", label: "Rodzaje biblioterapii" },
                  { href: "/biblioterapia/scenariusze", label: "Gotowe scenariusze zajęć" },
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
                <h2 className="text-2xl font-bold mb-4">Gotowe scenariusze do Twojej sesji</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nie musisz planować od zera. Nasze scenariusze zawierają dobór tekstu,
                  pytania do rozmowy i pomysły na aktywności twórcze.
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
