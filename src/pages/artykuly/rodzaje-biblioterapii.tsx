import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Heart, GraduationCap, Building2, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function RodzajeBiblioterapiiPage() {
  return (
    <Layout>
      <SEO
        title="Rodzaje biblioterapii — kliniczna, rozwojowa i instytucjonalna"
        description="Poznaj trzy główne rodzaje biblioterapii: kliniczną (wsparcie w chorobie), rozwojową (prewencja i rozwój) i instytucjonalną (zajęcia w szkołach i bibliotekach)."
        url="https://biblioterapia.org/artykuly/rodzaje-biblioterapii"
      />

      <article className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Breadcrumb */}
          <Link 
            href="/artykuly" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do artykułów
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Klasyfikacja
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Rodzaje biblioterapii — kliniczna, rozwojowa i instytucjonalna
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Biblioterapia nie jest jednorodną metodą. W zależności od celu, odbiorcy i kontekstu wyróżniamy 
              trzy główne rodzaje: kliniczną, rozwojową i instytucjonalną. Poznaj różnice i dowiedz się, 
              który rodzaj jest odpowiedni dla twojego dziecka.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~7 minut</span>
              <span>🎯 Poziom: Dla rodziców i terapeutów</span>
            </div>
          </header>

          {/* Spis treści */}
          <nav className="bg-muted/30 border rounded-xl p-6 mb-12">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Spis treści
            </h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#wprowadzenie" className="text-primary hover:underline">1. Wprowadzenie — trzy nurty biblioterapii</a></li>
              <li><a href="#kliniczna" className="text-primary hover:underline">2. Biblioterapia kliniczna — wsparcie w chorobie</a></li>
              <li><a href="#rozwojowa" className="text-primary hover:underline">3. Biblioterapia rozwojowa — prewencja i rozwój</a></li>
              <li><a href="#instytucjonalna" className="text-primary hover:underline">4. Biblioterapia instytucjonalna — zajęcia grupowe</a></li>
              <li><a href="#porownanie" className="text-primary hover:underline">5. Porównanie — który rodzaj wybrać?</a></li>
              <li><a href="#podsumowanie" className="text-primary hover:underline">6. Podsumowanie</a></li>
            </ol>
          </nav>

          {/* Treść artykułu */}
          <div className="prose prose-lg max-w-none">

            {/* Sekcja 1 */}
            <section id="wprowadzenie" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Wprowadzenie — trzy nurty biblioterapii</h2>

              <p>
                Biblioterapia to <strong>szerokie pole działań terapeutycznych i edukacyjnych</strong>, 
                które wykorzystuje literaturę jako narzędzie wsparcia. W zależności od celu, kontekstu 
                i odbiorcy wyróżniamy trzy główne rodzaje biblioterapii:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="h-6 w-6 text-red-600" />
                    <h3 className="font-bold text-lg text-red-900">Kliniczna</h3>
                  </div>
                  <p className="text-red-800 text-sm">
                    Wsparcie osób z zaburzeniami zdrowia psychicznego lub fizycznego
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                    <h3 className="font-bold text-lg text-green-900">Rozwojowa</h3>
                  </div>
                  <p className="text-green-800 text-sm">
                    Prewencja i wspieranie rozwoju emocjonalnego u zdrowych osób
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="h-6 w-6 text-blue-600" />
                    <h3 className="font-bold text-lg text-blue-900">Instytucjonalna</h3>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Zajęcia grupowe w szkołach, przedszkolach i bibliotekach
                  </p>
                </div>
              </div>

              <p>
                Każdy z tych rodzajów ma <strong>inne cele, metody i odbiorców</strong>. Zrozumienie różnic 
                pomoże ci wybrać odpowiedni rodzaj wsparcia dla twojego dziecka.
              </p>
            </section>

            {/* Sekcja 2 - Kliniczna */}
            <section id="kliniczna" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                Biblioterapia kliniczna — wsparcie w chorobie
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <p className="text-red-900 font-medium mb-2">
                  <strong>Definicja:</strong>
                </p>
                <p className="text-red-800">
                  Biblioterapia kliniczna to <strong>metoda wspomagająca leczenie</strong> osób 
                  z zaburzeniami psychicznymi, neurologicznymi lub przewlekłymi chorobami somatycznymi. 
                  Jest prowadzona przez wykwalifikowanych terapeutów w placówkach medycznych 
                  (szpitale, kliniki, gabinety psychoterapeutyczne).
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Kiedy stosujemy biblioterapię kliniczną?</h3>

              <p>
                Biblioterapia kliniczna jest stosowana jako <strong>element terapii kompleksowej</strong> 
                u dzieci i dorosłych z:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Zaburzeniami lękowych</strong> (lęk separacyjny, fobie, zespół stresu pourazowego)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Depresją</strong> (szczególnie u młodzieży)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Zaburzeniami ze spektrum autyzmu</strong> (wspieranie rozumienia emocji)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>ADHD</strong> (trening koncentracji i empatii)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Traumą</strong> (po przemocy, wypadku, śmierci bliskiej osoby)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Przewlekłymi chorobami somatycznymi</strong> (np. cukrzyca, astma, choroby onkologiczne)</span>
                </li>
              </ul>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Jak wygląda biblioterapia kliniczna?</h3>

              <div className="bg-white border rounded-xl p-6 my-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2 text-red-700">1. Diagnoza</h4>
                    <p className="text-sm text-muted-foreground">
                      Terapeuta ocenia potrzeby pacjenta i dobiera książkę odpowiednią do problemu i wieku
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-red-700">2. Sesje terapeutyczne</h4>
                    <p className="text-sm text-muted-foreground">
                      Czytanie fragmentów książki podczas sesji z terapeutą, omówienie emocji i reakcji pacjenta
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-red-700">3. Praca domowa</h4>
                    <p className="text-sm text-muted-foreground">
                      Pacjent czyta wskazane fragmenty w domu i prowadzi dziennik emocji lub wykonuje zadania twórcze
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-red-700">4. Ewaluacja</h4>
                    <p className="text-sm text-muted-foreground">
                      Terapeuta ocenia postępy i modyfikuje plan terapeutyczny
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Przykład z praktyki</h3>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
                <p className="text-sm text-red-900 mb-3">
                  <strong>Przypadek:</strong> 8-letni Jasiek przeżył traumę po śmierci dziadka. 
                  Ma lęk przed śmiercią, nocne koszmary i trudności z koncentracją w szkole.
                </p>
                <p className="text-sm text-red-800 mb-3">
                  <strong>Interwencja:</strong> Psychoterapeutka wprowadziła do terapii książkę{" "}
                  <Link href="/ksiazki/zaba" className="text-red-600 underline">
                    „Żaba. Mała opowieść o żałobie"
                  </Link>. Podczas sesji czytali fragmenty i rozmawiali o emocjach dziewczynki z książki.
                </p>
                <p className="text-sm text-red-800">
                  <strong>Rezultat:</strong> Jasiek zaczął rozumieć, że smutek i tęsknota są normalne. 
                  Nauczył się nazywać swoje emocje i wyrażać je bezpiecznie (rysowanie „Żaby", rozmowy z rodzicami).
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 my-6">
                <p className="text-sm text-amber-900">
                  <strong>⚠️ Ważne:</strong> Biblioterapia kliniczna <strong>nie zastępuje</strong> psychoterapii 
                  ani farmakoterapii. Jest <strong>metodą wspomagającą</strong>, prowadzoną przez wykwalifikowanego 
                  specjalistę.
                </p>
              </div>
            </section>

            {/* Sekcja 3 - Rozwojowa */}
            <section id="rozwojowa" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                Biblioterapia rozwojowa — prewencja i rozwój
              </h2>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <p className="text-green-900 font-medium mb-2">
                  <strong>Definicja:</strong>
                </p>
                <p className="text-green-800">
                  Biblioterapia rozwojowa to <strong>metoda profilaktyczna</strong>, skierowana do dzieci 
                  i dorosłych <strong>bez zaburzeń psychicznych</strong>. Jej celem jest wspieranie rozwoju 
                  emocjonalnego, budowanie odporności psychicznej i przygotowanie do radzenia sobie 
                  z normalnymi wyzwaniami życiowymi (rozwód, przeprowadzka, zmiana szkoły).
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Kiedy stosujemy biblioterapię rozwojową?</h3>

              <p>
                Biblioterapia rozwojowa jest idealna, gdy dziecko:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Przeżywa <strong>normalne, ale trudne</strong> wydarzenie życiowe (rozwód rodziców, narodziny rodzeństwa, przeprowadzka)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Ma <strong>trudności z nazywaniem emocji</strong> i nie potrafi ich wyrażać</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Potrzebuje <strong>wzmocnienia odporności psychicznej</strong> przed wyzwaniem (np. przed rozpoczęciem szkoły)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Ma <strong>niską samoocenę</strong> lub problemy z budowaniem relacji</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Rodzice chcą <strong>zapobiegawczo wzmocnić</strong> jego rozwój emocjonalny</span>
                </li>
              </ul>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Jak wygląda biblioterapia rozwojowa?</h3>

              <p>
                Biblioterapia rozwojowa może być prowadzona przez:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Rodziców w domu</strong> (wspólne czytanie i rozmowy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Pedagogów i psychologów szkolnych</strong> (indywidualne sesje)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Bibliotekarzy</strong> (w ramach zajęć bibliotecznych)</span>
                </li>
              </ul>

              <div className="bg-white border rounded-xl p-6 my-6">
                <h4 className="font-bold mb-3 text-lg">Przykładowy schemat sesji rozwojowej:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold mb-2 text-green-700">1. Wprowadzenie (5 min)</h5>
                    <p className="text-sm text-muted-foreground">
                      „Dzisiaj przeczytamy historię o dziewczynce, której rodzice się rozwiedli"
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2 text-green-700">2. Czytanie (20 min)</h5>
                    <p className="text-sm text-muted-foreground">
                      Wspólne, powolne czytanie z zatrzymywaniem się przy kluczowych momentach
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2 text-green-700">3. Rozmowa (15 min)</h5>
                    <p className="text-sm text-muted-foreground">
                      „Co czuła Helena? Czy ty też czasem się tak czujesz? Co by jej pomogło?"
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2 text-green-700">4. Aktywność twórcza (20 min)</h5>
                    <p className="text-sm text-muted-foreground">
                      Rysowanie, pisanie listu, tworzenie „bąbelków wspomnień" (jak w scenariuszach z{" "}
                      <Link href="/biblioterapia/narzedziownik" className="text-green-600 underline">
                        Narzędziownika
                      </Link>)
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Przykład z praktyki</h3>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
                <p className="text-sm text-green-900 mb-3">
                  <strong>Przypadek:</strong> 6-letnia Ola ma trudności z rozpoznawaniem i nazywaniem emocji. 
                  Często reaguje złością, gdy coś ją frustruje, bo nie potrafi powiedzieć, co czuje.
                </p>
                <p className="text-sm text-green-800 mb-3">
                  <strong>Interwencja:</strong> Mama zaczęła czytać z Olą książkę{" "}
                  <Link href="/ksiazki/zielona-dziewczynka" className="text-green-600 underline">
                    „Zielona dziewczynka"
                  </Link>. Podczas czytania zatrzymywały się przy scenach, gdzie bohaterka czuje różne emocje.
                </p>
                <p className="text-sm text-green-800">
                  <strong>Rezultat:</strong> Ola nauczyła się nazywać swoje emocje („czuję smutek", „jestem zła"). 
                  Zaczęła wyrażać frustrację słowami zamiast krzykiem.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 my-6">
                <p className="text-sm text-blue-900">
                  <strong>💡 Wskazówka:</strong> Biblioterapia rozwojowa <strong>nie wymaga wykwalifikowanego terapeuty</strong>. 
                  Rodzice mogą prowadzić ją samodzielnie, korzystając z gotowych scenariuszy (np. z{" "}
                  <Link href="/biblioterapia/narzedziownik" className="text-blue-600 underline">
                    Narzędziownika
                  </Link>).
                </p>
              </div>
            </section>

            {/* Sekcja 4 - Instytucjonalna */}
            <section id="instytucjonalna" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                Biblioterapia instytucjonalna — zajęcia grupowe
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <p className="text-blue-900 font-medium mb-2">
                  <strong>Definicja:</strong>
                </p>
                <p className="text-blue-800">
                  Biblioterapia instytucjonalna to <strong>zajęcia grupowe</strong> prowadzone w placówkach 
                  edukacyjnych i kulturalnych (szkoły, przedszkola, biblioteki publiczne). 
                  Ma charakter <strong>profilaktyczno-edukacyjny</strong> i jest skierowana do szerokiej grupy odbiorców.
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Gdzie i przez kogo jest prowadzona?</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Szkoły i przedszkola:</strong> Prowadzona przez nauczycieli, pedagogów lub psychologów szkolnych
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Biblioteki publiczne:</strong> Prowadzona przez bibliotekarzy w ramach zajęć edukacyjnych
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Świetlice i domy kultury:</strong> Prowadzona przez animatorów kultury
                  </div>
                </li>
              </ul>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Cele biblioterapii instytucjonalnej</h3>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Edukacja emocjonalna:</strong> Uczenie rozpoznawania i nazywania emocji</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Budowanie empatii:</strong> Zrozumienie perspektywy innych osób</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Prewencja problemów społecznych:</strong> Przeciwdziałanie przemocy, dyskryminacji, wykluczeniu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Integracja grupy:</strong> Budowanie więzi w klasie lub grupie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Promocja czytelnictwa:</strong> Zachęcanie do czytania jako formy relaksu i rozwoju</span>
                </li>
              </ul>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Przykład zajęć instytucjonalnych</h3>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <p className="text-sm text-blue-900 mb-3">
                  <strong>Temat:</strong> „Różnorodność i empatia" — zajęcia w klasie III szkoły podstawowej
                </p>
                <p className="text-sm text-blue-800 mb-3">
                  <strong>Książka:</strong>{" "}
                  <Link href="/ksiazki/nie-znajdziesz-mnie" className="text-blue-600 underline">
                    „Nie znajdziesz mnie po śladach stóp"
                  </Link>
                </p>
                <p className="text-sm text-blue-800 mb-3">
                  <strong>Przebieg:</strong> Nauczycielka przeczytała fragmenty książki o niepełnosprawności. 
                  Dzieci wykonały zadanie „Lody z posypką" — każde napisało na karteczce swoje cechy 
                  (np. „lubię LEGO", „noszę okulary", „umiem szybko biegać").
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Rezultat:</strong> Klasa zrozumiała, że każdy człowiek ma wiele cech, a niepełnosprawność 
                  to tylko jedna z nich — „posypka na lodach". Dzieci nauczyły się Złotej Zasady: 
                  <em>„Zawsze najpierw zapytaj, potem pomagaj"</em>.
                </p>
              </div>

              <div className="bg-white border rounded-xl p-6 my-6">
                <h4 className="font-bold mb-3 text-lg">Gotowe scenariusze dla instytucji:</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  W{" "}
                  <Link href="/biblioterapia/narzedziownik" className="text-primary underline">
                    Narzędziowniku
                  </Link>{" "}
                  znajdziesz kompletne scenariusze zajęć grupowych, które można wykorzystać 
                  w szkole, przedszkolu lub bibliotece:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <Link href="/biblioterapia/scenariusze/gdy-doniczka-przecieka" className="text-primary hover:underline">
                      Gdy doniczka przecieka (emocje)
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <Link href="/biblioterapia/scenariusze/moja-przezroczysta-zaba" className="text-primary hover:underline">
                      Moja przezroczysta Żaba (żałoba)
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <Link href="/biblioterapia/scenariusze/muzeum-milosci-rozwod" className="text-primary hover:underline">
                      Muzeum Miłości (rozwód)
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <Link href="/biblioterapia/scenariusze/moje-ptaki-i-posypki" className="text-primary hover:underline">
                      Moje ptaki i moje posypki (różnorodność)
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            {/* Sekcja 5 - Porównanie */}
            <section id="porownanie" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Porównanie — który rodzaj wybrać?</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-4 text-left font-bold border-b">Rodzaj</th>
                      <th className="p-4 text-left font-bold border-b">Odbiorcy</th>
                      <th className="p-4 text-left font-bold border-b">Prowadzący</th>
                      <th className="p-4 text-left font-bold border-b">Cel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <strong className="text-red-700">Kliniczna</strong>
                      </td>
                      <td className="p-4 text-sm">
                        Osoby z zaburzeniami psychicznymi lub przewlekłymi chorobami
                      </td>
                      <td className="p-4 text-sm">
                        Psychoterapeuci, psychiatrzy, psychologowie kliniczni
                      </td>
                      <td className="p-4 text-sm">
                        Wsparcie w leczeniu
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <strong className="text-green-700">Rozwojowa</strong>
                      </td>
                      <td className="p-4 text-sm">
                        Zdrowe dzieci i dorośli przeżywający normalne wyzwania życiowe
                      </td>
                      <td className="p-4 text-sm">
                        Rodzice, pedagodzy, psychologowie szkolni, bibliotekarze
                      </td>
                      <td className="p-4 text-sm">
                        Prewencja i rozwój emocjonalny
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <strong className="text-blue-700">Instytucjonalna</strong>
                      </td>
                      <td className="p-4 text-sm">
                        Grupy dzieci w szkołach, przedszkolach, bibliotekach
                      </td>
                      <td className="p-4 text-sm">
                        Nauczyciele, pedagodzy, bibliotekarze, animatorzy kultury
                      </td>
                      <td className="p-4 text-sm">
                        Edukacja emocjonalna, integracja grupy, promocja czytelnictwa
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl p-6 mt-8">
                <h3 className="font-bold text-lg mb-3">Jak wybrać odpowiedni rodzaj dla mojego dziecka?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-0.5">1.</span>
                    <p>
                      <strong>Jeśli dziecko ma zdiagnozowane zaburzenie psychiczne</strong> (lęk, depresja, ADHD, trauma) 
                      → wybierz <strong className="text-red-700">biblioterapię kliniczną</strong> prowadzoną przez terapeutę
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-0.5">2.</span>
                    <p>
                      <strong>Jeśli dziecko jest zdrowe, ale przeżywa trudny moment</strong> (rozwód, żałoba, zmiana szkoły) 
                      → wybierz <strong className="text-green-700">biblioterapię rozwojową</strong> w domu lub u pedagoga
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-0.5">3.</span>
                    <p>
                      <strong>Jeśli chcesz profilaktycznie wzmocnić rozwój emocjonalny dziecka</strong> 
                      → <strong className="text-blue-700">biblioterapia instytucjonalna</strong> (zajęcia w szkole) 
                      lub rozwojowa (wspólne czytanie w domu)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sekcja 6 - Podsumowanie */}
            <section id="podsumowanie" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Podsumowanie</h2>

              <p className="text-lg mb-6">
                Biblioterapia to elastyczna metoda, która <strong>dostosowuje się do potrzeb odbiorcy</strong>:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="font-bold text-lg text-red-900">Kliniczna</h3>
                  </div>
                  <p className="text-red-800 text-sm mb-2">
                    Dla osób z zaburzeniami
                  </p>
                  <p className="text-red-700 text-xs">
                    → Prowadzi terapeuta
                  </p>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="font-bold text-lg text-green-900">Rozwojowa</h3>
                  </div>
                  <p className="text-green-800 text-sm mb-2">
                    Dla zdrowych osób w trudnych momentach
                  </p>
                  <p className="text-green-700 text-xs">
                    → Mogą prowadzić rodzice
                  </p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      3
                    </div>
                    <h3 className="font-bold text-lg text-blue-900">Instytucjonalna</h3>
                  </div>
                  <p className="text-blue-800 text-sm mb-2">
                    Dla grup w szkołach i bibliotekach
                  </p>
                  <p className="text-blue-700 text-xs">
                    → Prowadzą pedagodzy i bibliotekarze
                  </p>
                </div>
              </div>

              <p>
                Niezależnie od rodzaju, wszystkie formy biblioterapii wykorzystują te same 
                <Link href="/artykuly/jak-dziala-biblioterapia" className="text-primary hover:underline mx-1">
                  mechanizmy terapeutyczne
                </Link>: 
                identyfikację, projekcję, katharsis i wgląd.
              </p>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 mt-12">
              <h3 className="font-serif text-2xl font-bold mb-4 text-center">
                Rozpocznij biblioterapię w domu
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                Skorzystaj z gotowych scenariuszy biblioterapii rozwojowej — nie potrzebujesz wykształcenia terapeutycznego!
              </p>
              <div className="flex justify-center">
                <Link
                  href="/biblioterapia/narzedziownik"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <BookOpen className="h-5 w-5" />
                  Zobacz Narzędziownik
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Powiązane artykuły */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="font-serif text-2xl font-bold mb-6">Przeczytaj również:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/artykuly/jak-dziala-biblioterapia"
                  className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group"
                >
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    Jak działa biblioterapia?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Poznaj cztery kluczowe mechanizmy: identyfikację, projekcję, katharsis i wgląd
                  </p>
                </Link>

                <Link 
                  href="/artykuly/biblioterapia-vs-psychoterapia"
                  className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group"
                >
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    Biblioterapia a psychoterapia
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Kiedy wybrać biblioterapię, a kiedy skierować dziecko do psychoterapeuty?
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}