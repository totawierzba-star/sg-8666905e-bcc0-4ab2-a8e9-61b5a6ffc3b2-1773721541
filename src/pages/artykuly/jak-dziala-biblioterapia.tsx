import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Heart, Brain, Users, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function JakDzialaBiblioterapiaPage() {
  return (
    <Layout>
      <SEO
        title="Jak działa biblioterapia? Mechanizmy terapeutycznego działania książek"
        description="Poznaj naukowe podstawy biblioterapii: identyfikacja, projekcja, katharsis i wgląd. Dowiedz się, jak książki wspierają zdrowie psychiczne i emocjonalne dzieci i dorosłych."
        url="https://biblioterapia.org/artykuly/jak-dziala-biblioterapia"
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
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Mechanizmy działania
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Jak działa biblioterapia? Mechanizmy terapeutycznego działania książek
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Dlaczego czytanie odpowiednio dobranych książek może wspierać zdrowie psychiczne? 
              Poznaj cztery kluczowe mechanizmy biblioterapii: identyfikację, projekcję, katharsis i wgląd.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~8 minut</span>
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
              <li><a href="#czym-jest" className="text-primary hover:underline">1. Czym jest biblioterapia?</a></li>
              <li><a href="#cztery-mechanizmy" className="text-primary hover:underline">2. Cztery kluczowe mechanizmy biblioterapii</a></li>
              <li><a href="#identyfikacja" className="text-primary hover:underline">3. Identyfikacja — „To ja jestem tym bohaterem"</a></li>
              <li><a href="#projekcja" className="text-primary hover:underline">4. Projekcja — Bezpieczne wyrażanie emocji</a></li>
              <li><a href="#katharsis" className="text-primary hover:underline">5. Katharsis — Oczyszczenie emocjonalne</a></li>
              <li><a href="#wglad" className="text-primary hover:underline">6. Wgląd — Zrozumienie i zmiana perspektywy</a></li>
              <li><a href="#podsumowanie" className="text-primary hover:underline">7. Dlaczego to działa? Podsumowanie</a></li>
            </ol>
          </nav>

          {/* Treść artykułu */}
          <div className="prose prose-lg max-w-none">

            {/* Sekcja 1 */}
            <section id="czym-jest" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Czym jest biblioterapia?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <p className="text-blue-900 font-medium mb-2">
                  <strong>Definicja:</strong>
                </p>
                <p className="text-blue-800">
                  Biblioterapia to metoda terapeutyczna wykorzystująca literaturę (książki, opowiadania, poezję) 
                  do wspierania procesów leczniczych i rozwojowych. Polega na celowym doborze tekstów literackich, 
                  które pomagają czytelnikom zrozumieć własne emocje, przepracować trudne doświadczenia i znaleźć 
                  nowe sposoby radzenia sobie z wyzwaniami życiowymi.
                </p>
              </div>

              <p>
                Biblioterapia nie jest zwykłym czytaniem dla przyjemności. To <strong>proces terapeutyczny</strong>, 
                w którym odpowiednio dobrana książka staje się narzędziem do pracy nad emocjami, relacjami 
                i trudnymi doświadczeniami życiowymi.
              </p>

              <p>
                W przypadku dzieci biblioterapia jest szczególnie skuteczna, ponieważ:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dzieci naturalnie identyfikują się z bohaterami książek</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Metafory i symbole są dla nich bardziej zrozumiałe niż abstrakcyjne wyjaśnienia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Czytanie tworzy bezpieczną przestrzeń do rozmawiania o trudnych tematach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Historia bohatera daje dziecku "pozwolenie" na wyrażanie własnych emocji</span>
                </li>
              </ul>
            </section>

            {/* Sekcja 2 */}
            <section id="cztery-mechanizmy" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                Cztery kluczowe mechanizmy biblioterapii
              </h2>

              <p>
                Biblioterapia działa dzięki czterem psychologicznym mechanizmom, które aktywują się podczas 
                czytania odpowiednio dobranej książki:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="font-bold text-lg text-blue-900">Identyfikacja</h3>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Czytelnik rozpoznaje siebie w bohaterze i jego sytuacji
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="font-bold text-lg text-green-900">Projekcja</h3>
                  </div>
                  <p className="text-green-800 text-sm">
                    Czytelnik przypisuje bohaterowi własne emocje i doświadczenia
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      3
                    </div>
                    <h3 className="font-bold text-lg text-amber-900">Katharsis</h3>
                  </div>
                  <p className="text-amber-800 text-sm">
                    Czytelnik doświadcza oczyszczenia emocjonalnego poprzez przeżycie historii
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      4
                    </div>
                    <h3 className="font-bold text-lg text-purple-900">Wgląd</h3>
                  </div>
                  <p className="text-purple-800 text-sm">
                    Czytelnik zyskuje nowe rozumienie swojej sytuacji i możliwości działania
                  </p>
                </div>
              </div>

              <p>
                Te cztery mechanizmy <strong>współdziałają ze sobą</strong> w procesie terapeutycznym, 
                tworząc kompleksowe doświadczenie, które wspiera zdrowie emocjonalne i psychiczne.
              </p>
            </section>

            {/* Sekcja 3 - Identyfikacja */}
            <section id="identyfikacja" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                Identyfikacja — „To ja jestem tym bohaterem"
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <p className="text-blue-900 font-medium mb-2">
                  <strong>Czym jest identyfikacja?</strong>
                </p>
                <p className="text-blue-800">
                  Identyfikacja to proces psychologiczny, w którym czytelnik <strong>rozpoznaje siebie</strong> 
                  w bohaterze książki. Widzi swoje emocje, sytuacje, problemy odzwierciedlone w literackiej postaci.
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Jak to działa w praktyce?</h3>

              <p>
                Wyobraź sobie dziecko, które przeżywa rozwód rodziców i czyta książkę{" "}
                <Link href="/ksiazki/czasami-szczesliwi-rodzice" className="text-primary hover:underline">
                  „Czasami szczęśliwi rodzice mieszkają oddzielnie"
                </Link>. 
                Helena, bohaterka książki, dowiaduje się przy śniadaniu, że rodzice się rozstają. 
                Dziecko czytające tę historię myśli: <em>„To dokładnie tak, jak u mnie. Ona czuje to samo co ja"</em>.
              </p>

              <div className="bg-white border rounded-xl p-6 my-6">
                <h4 className="font-bold mb-3 text-lg">Przykład identyfikacji:</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-700 mb-1">Sytuacja dziecka:</p>
                    <p className="text-sm text-muted-foreground">
                      7-letnia Zuzia dowiaduje się, że rodzice się rozwodzą. Czuje smutek, złość i myśli, 
                      że to jej wina.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 mb-1">Bohater w książce:</p>
                    <p className="text-sm text-muted-foreground">
                      Helena (bohaterka „Muzeum Miłości") również przeżywa rozwód rodziców. 
                      Zadaje sobie te same pytania: „Czy to moja wina? Czy mama i tata przestaną mnie kochać?"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700 mb-1">Identyfikacja:</p>
                    <p className="text-sm text-muted-foreground">
                      Zuzia widzi, że <strong>nie jest sama</strong> ze swoimi uczuciami. 
                      Inni też tak czują. To normalizuje jej emocje i otwiera przestrzeń do rozmowy.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Dlaczego identyfikacja jest tak ważna?</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Normalizacja emocji:</strong> Dziecko rozumie, że jego uczucia są naturalne i akceptowalne
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Zmniejszenie poczucia izolacji:</strong> „Nie jestem sam/a z tym problemem"
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Otwarcie na dialog:</strong> Łatwiej rozmawiać o bohaterze niż bezpośrednio o sobie
                  </div>
                </li>
              </ul>
            </section>

            {/* Sekcja 4 - Projekcja */}
            <section id="projekcja" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                Projekcja — Bezpieczne wyrażanie emocji
              </h2>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <p className="text-green-900 font-medium mb-2">
                  <strong>Czym jest projekcja?</strong>
                </p>
                <p className="text-green-800">
                  Projekcja to mechanizm, w którym czytelnik <strong>przypisuje bohaterowi</strong> własne, 
                  często nieuświadomione emocje, lęki czy pragnienia. Bohater staje się „bezpiecznym ekranem", 
                  na którym dziecko może wyrazić to, czego nie potrafi powiedzieć bezpośrednio.
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Jak to działa w praktyce?</h3>

              <p>
                Dziecko czytające książkę{" "}
                <Link href="/ksiazki/zaba" className="text-primary hover:underline">
                  „Żaba. Mała opowieść o żałobie"
                </Link>{" "}
                może powiedzieć: <em>„Myślę, że ta Żaba jest bardzo smutna, bo dziewczynka chce być dzielna, 
                ale tak naprawdę boli ją w środku"</em>. W rzeczywistości dziecko mówi o sobie — o swoim bólu, 
                którego nie potrafi nazwać wprost.
              </p>

              <div className="bg-white border rounded-xl p-6 my-6">
                <h4 className="font-bold mb-3 text-lg">Przykład projekcji:</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-700 mb-1">Dziecko czyta o Żabie:</p>
                    <p className="text-sm text-muted-foreground">
                      Dziewczynka w książce ma ogromną Żabę w brzuchu (symbol żałoby). 
                      Próbuje być dzielna i nie płakać.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 mb-1">Dziecko mówi o bohaterze:</p>
                    <p className="text-sm text-muted-foreground italic">
                      „Myślę, że Żaba jest taka duża, bo dziewczynka bardzo tęskni za babcią. 
                      Może gdyby mogła płakać, Żaba by zmniejszyła się."
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700 mb-1">Projekcja:</p>
                    <p className="text-sm text-muted-foreground">
                      W rzeczywistości dziecko opisuje <strong>swoje własne uczucia</strong>. 
                      Mówi o swojej tęsknocie i potrzebie płaczu, ale robi to bezpiecznie — 
                      poprzez bohatera książki.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Dlaczego projekcja jest terapeutyczna?</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Bezpieczeństwo emocjonalne:</strong> Łatwiej mówić o bohaterze niż przyznać „ja się tak czuję"
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Eksploracja emocji:</strong> Dziecko może „przetestować" swoje uczucia bez ryzyka osądzenia
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Budowanie samoświadomości:</strong> Nazywanie emocji bohatera pomaga dziecku zrozumieć własne stany wewnętrzne
                  </div>
                </li>
              </ul>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 my-6">
                <p className="text-sm text-amber-900">
                  <strong>💡 Wskazówka dla rodziców:</strong> Gdy dziecko mówi o uczuciach bohatera, 
                  <strong> nie pytaj od razu „A ty też tak czujesz?"</strong>. To może zamknąć rozmowę. 
                  Zamiast tego kontynuuj rozmowę o bohaterze: „Co myślisz, co by pomogło tej dziewczynce?". 
                  Dziecko samo w odpowiednim momencie przełoży to na siebie.
                </p>
              </div>
            </section>

            {/* Sekcja 5 - Katharsis */}
            <section id="katharsis" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                Katharsis — Oczyszczenie emocjonalne
              </h2>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                <p className="text-amber-900 font-medium mb-2">
                  <strong>Czym jest katharsis?</strong>
                </p>
                <p className="text-amber-800">
                  Katharsis (z gr. <em>katharsis</em> — oczyszczenie) to <strong>uwolnienie nagromadzonych emocji</strong> 
                  poprzez przeżycie historii bohatera. Czytelnik „przepuszcza przez siebie" emocje przedstawione 
                  w książce, co prowadzi do ulgi psychicznej i emocjonalnego odreagowania.
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Jak to działa w praktyce?</h3>

              <p>
                Dziecko czytające o dziewczynce z książki{" "}
                <Link href="/ksiazki/zielona-dziewczynka" className="text-primary hover:underline">
                  „Zielona dziewczynka"
                </Link>, która przeżywa traumę, może podczas czytania <strong>rozpłakać się</strong>. 
                Ten płacz nie jest oznaką, że książka „jest za trudna" — to właśnie <strong>terapeutyczne uwolnienie</strong> 
                emocji, które dziecko dotąd tłumiło.
              </p>

              <div className="bg-white border rounded-xl p-6 my-6">
                <h4 className="font-bold mb-3 text-lg">Przykład katharsis:</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-700 mb-1">Przed czytaniem:</p>
                    <p className="text-sm text-muted-foreground">
                      Dziecko tłumi smutek po stracie bliskiej osoby. Stara się „być dzielne" i nie płakać.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 mb-1">Podczas czytania:</p>
                    <p className="text-sm text-muted-foreground">
                      W scenie, gdzie Żaba mówi dziewczynce, że „łzy to piękny skarb", 
                      dziecko nagle zaczyna płakać. Czuje, że <strong>ma pozwolenie</strong> na wyrażenie smutku.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700 mb-1">Po przeczytaniu:</p>
                    <p className="text-sm text-muted-foreground">
                      Dziecko czuje ulgę. Wypłakało zgromadzone emocje. Może teraz otwarcie mówić o tęsknocie.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Dlaczego katharsis jest terapeutyczny?</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Uwolnienie napięcia:</strong> Tłumione emocje powodują stres psychiczny. Ich uwolnienie przynosi ulgę
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Walidacja uczuć:</strong> Płacz podczas czytania potwierdza, że emocje są ważne i zasługują na wyrażenie
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Budowanie odporności emocjonalnej:</strong> Przepracowanie trudnych emocji poprzez książkę przygotowuje na radzenie sobie z nimi w życiu
                  </div>
                </li>
              </ul>

              <div className="bg-red-50 border border-red-300 rounded-lg p-4 my-6">
                <p className="text-sm text-red-900">
                  <strong>⚠️ Ważne:</strong> Jeśli dziecko płacze podczas czytania, <strong>nie przerywaj</strong> 
                  i nie mów „przestań płakać". Przytul je i powiedz: <em>„Płacz, to w porządku. 
                  Twoje łzy pokazują, jak ważne są dla ciebie te uczucia"</em>. Katharsis jest <strong>pozytywnym</strong> 
                  procesem terapeutycznym.
                </p>
              </div>
            </section>

            {/* Sekcja 6 - Wgląd */}
            <section id="wglad" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                Wgląd — Zrozumienie i zmiana perspektywy
              </h2>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
                <p className="text-purple-900 font-medium mb-2">
                  <strong>Czym jest wgląd?</strong>
                </p>
                <p className="text-purple-800">
                  Wgląd to <strong>moment zrozumienia</strong> — czytelnik uzyskuje nową perspektywę 
                  na swoją sytuację, rozumie relacje przyczynowo-skutkowe i odkrywa możliwe sposoby 
                  radzenia sobie z problemem. To najbardziej świadomy i poznawczy z czterech mechanizmów.
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Jak to działa w praktyce?</h3>

              <p>
                Po przeczytaniu książki{" "}
                <Link href="/ksiazki/nie-znajdziesz-mnie" className="text-primary hover:underline">
                  „Nie znajdziesz mnie po śladach stóp"
                </Link>, dziecko rozumie, że <strong>niepełnosprawność to tylko jedna z wielu cech</strong> 
                osoby — „posypka na lodach". Zyskuje nową perspektywę: osoba na wózku ma marzenia, 
                hobby, uczucia — dokładnie tak jak ono samo.
              </p>

              <div className="bg-white border rounded-xl p-6 my-6">
                <h4 className="font-bold mb-3 text-lg">Przykład wglądu:</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-700 mb-1">Przed czytaniem:</p>
                    <p className="text-sm text-muted-foreground">
                      Dziecko widzi osobę na wózku i myśli: „Ta osoba jest smutna i potrzebuje pomocy". 
                      Czuje lęk i nie wie, jak się zachować.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 mb-1">Podczas czytania:</p>
                    <p className="text-sm text-muted-foreground">
                      Książka pokazuje, że autorka na wózku prowadzi normalne życie: spotyka się z przyjaciółmi, 
                      chodzi do kina, ma ulubione smaki lodów. Wózek to tylko narzędzie, jak okulary.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700 mb-1">Wgląd:</p>
                    <p className="text-sm text-muted-foreground">
                      Dziecko <strong>zmienia perspektywę</strong>: „Osoba na wózku to przede wszystkim OSOBA. 
                      Ma swoje zainteresowania i uczucia. Jeśli chcę pomóc, najpierw zapytam, czy potrzebuje pomocy."
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold mb-4 mt-8">Dlaczego wgląd jest najważniejszym mechanizmem?</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Trwała zmiana perspektywy:</strong> Wgląd to nie chwilowa ulga, ale <strong>długotrwała zmiana</strong> w sposobie myślenia
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Nowe strategie radzenia sobie:</strong> Dziecko uczy się nowych sposobów reagowania na trudne sytuacje
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Empatia i zrozumienie:</strong> Czytelnik rozwija zdolność patrzenia na świat z perspektywy innych
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Poczucie sprawczości:</strong> „Teraz wiem, co mogę zrobić w tej sytuacji"
                  </div>
                </li>
              </ul>

              <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 my-6">
                <p className="text-sm text-blue-900">
                  <strong>💡 Wskazówka dla rodziców:</strong> Po przeczytaniu książki zapytaj: 
                  <em>„Co nowego nauczyłeś/aś się z tej historii? Jak myślisz, co pomogło bohaterowi?"</em>. 
                  Takie pytania wspierają proces wglądu i pomagają dziecku świadomie przenieść lekcję 
                  z książki do własnego życia.
                </p>
              </div>
            </section>

            {/* Sekcja 7 - Podsumowanie */}
            <section id="podsumowanie" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Dlaczego to działa? Podsumowanie</h2>

              <p className="text-lg mb-6">
                Biblioterapia działa, ponieważ <strong>łączy emocje z poznaniem</strong>. Cztery mechanizmy — 
                identyfikacja, projekcja, katharsis i wgląd — tworzą kompleksowy proces terapeutyczny:
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-primary/20 rounded-2xl p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Identyfikacja</h3>
                      <p className="text-muted-foreground text-sm">
                        Dziecko rozpoznaje siebie w bohaterze → <strong>czuje się zrozumiane</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Projekcja</h3>
                      <p className="text-muted-foreground text-sm">
                        Dziecko przypisuje bohaterowi własne emocje → <strong>bezpiecznie je eksploruje</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Katharsis</h3>
                      <p className="text-muted-foreground text-sm">
                        Dziecko przeżywa emocje bohatera → <strong>uwalnia napięcie</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Wgląd</h3>
                      <p className="text-muted-foreground text-sm">
                        Dziecko zyskuje nowe rozumienie → <strong>zmienia perspektywę i znajduje rozwiązania</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                Te mechanizmy sprawiają, że biblioterapia jest <strong>skuteczną metodą</strong> wspierania 
                zdrowia psychicznego dzieci i dorosłych. Odpowiednio dobrana książka może:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Pomóc dziecku zrozumieć trudne doświadczenia (rozwód, żałoba, niepełnosprawność)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Nauczyć rozpoznawania i nazywania emocji</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Zbudować empatię i zrozumienie dla innych</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dostarczyć narzędzi do radzenia sobie ze stresem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Wzmocnić więź między rodzicem a dzieckiem poprzez wspólne czytanie</span>
                </li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-lg font-medium text-center">
                  Biblioterapia to nie magia — to <strong>naukowo udokumentowany proces</strong>, 
                  który wykorzystuje naturalną zdolność człowieka do uczenia się poprzez historie.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 mt-12">
              <h3 className="font-serif text-2xl font-bold mb-4 text-center">
                Chcesz wykorzystać biblioterapię w praktyce?
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                Odkryj gotowe scenariusze zajęć biblioterapeutycznych dla dzieci w różnym wieku
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
                  href="/artykuly/rodzaje-biblioterapii"
                  className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group"
                >
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    Rodzaje biblioterapii
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Poznaj różnice między biblioterapią kliniczną, rozwojową i instytucjonalną
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