import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Heart, Brain, Users, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function BiblioterapiaVsPsychoterapiaPage() {
  return (
    <Layout>
      <SEO
        title="Biblioterapia a psychoterapia — czym się różnią i kiedy wybrać którą?"
        description="Poznaj kluczowe różnice między biblioterapią a psychoterapią. Dowiedz się, kiedy wystarczy biblioterapia rozwojowa, a kiedy dziecko potrzebuje profesjonalnej pomocy psychoterapeuty."
        url="https://ksiazki-do-zadan-specjalnych.pl/artykuly/biblioterapia-vs-psychoterapia"
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
                Przewodnik dla rodziców
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Biblioterapia a psychoterapia — czym się różnią i kiedy wybrać którą?
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Jako rodzic możesz się zastanawiać: czy wspólne czytanie książki wystarczy, 
              czy może dziecko potrzebuje wizyty u psychoterapeuty? Poznaj kluczowe różnice 
              i dowiedz się, kiedy biblioterapia jest skuteczna, a kiedy konieczna jest pomoc specjalisty.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~10 minut</span>
              <span>🎯 Poziom: Dla rodziców</span>
            </div>
          </header>

          {/* Spis treści */}
          <nav className="bg-muted/30 border rounded-xl p-6 mb-12">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Spis treści
            </h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#kluczowe-roznice" className="text-primary hover:underline">1. Kluczowe różnice między biblioterapią a psychoterapią</a></li>
              <li><a href="#kiedy-biblioterapia" className="text-primary hover:underline">2. Kiedy wystarczy biblioterapia?</a></li>
              <li><a href="#kiedy-psychoterapia" className="text-primary hover:underline">3. Kiedy dziecko potrzebuje psychoterapeuty?</a></li>
              <li><a href="#wspolpraca" className="text-primary hover:underline">4. Czy biblioterapia i psychoterapia mogą współistnieć?</a></li>
              <li><a href="#sygnaly-alarmowe" className="text-primary hover:underline">5. Sygnały alarmowe — kiedy natychmiast szukać pomocy</a></li>
              <li><a href="#podsumowanie" className="text-primary hover:underline">6. Podsumowanie — jak podjąć decyzję?</a></li>
            </ol>
          </nav>

          {/* Treść artykułu */}
          <div className="prose prose-lg max-w-none">

            {/* Sekcja 1 */}
            <section id="kluczowe-roznice" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Kluczowe różnice między biblioterapią a psychoterapią</h2>

              <p>
                Biblioterapia i psychoterapia to <strong>dwie różne metody</strong> wspierania zdrowia psychicznego. 
                Choć obie mają wspólny cel — pomóc dziecku w radzeniu sobie z trudnościami — 
                różnią się zakresem, intensywnością i wymaganymi kwalifikacjami prowadzącego.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-4 text-left font-bold border-b">Aspekt</th>
                      <th className="p-4 text-left font-bold border-b">Biblioterapia</th>
                      <th className="p-4 text-left font-bold border-b">Psychoterapia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold">Cel</td>
                      <td className="p-4 text-sm">
                        Prewencja, edukacja emocjonalna, wsparcie w normalnych wyzwaniach życiowych
                      </td>
                      <td className="p-4 text-sm">
                        Leczenie zaburzeń psychicznych, praca z traumą, długotrwałe wsparcie kliniczne
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold">Prowadzący</td>
                      <td className="p-4 text-sm">
                        Rodzice, pedagodzy, psychologowie szkolni, bibliotekarze (biblioterapia rozwojowa)
                      </td>
                      <td className="p-4 text-sm">
                        Psychoterapeuci, psychiatrzy, psychologowie kliniczni
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold">Czas trwania</td>
                      <td className="p-4 text-sm">
                        Kilka sesji do kilku tygodni (elastyczne)
                      </td>
                      <td className="p-4 text-sm">
                        Kilka miesięcy do kilku lat (systematyczne)
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold">Narzędzia</td>
                      <td className="p-4 text-sm">
                        Książki, rozmowy, aktywności twórcze
                      </td>
                      <td className="p-4 text-sm">
                        Rozmowy terapeutyczne, techniki kliniczne (CBT, terapia gry, EMDR itp.)
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold">Intensywność</td>
                      <td className="p-4 text-sm">
                        Niska do umiarkowanej
                      </td>
                      <td className="p-4 text-sm">
                        Wysoka (regularne sesje 1-2x w tygodniu)
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold">Koszt</td>
                      <td className="p-4 text-sm">
                        Niski (koszt książki + czas rodzica)
                      </td>
                      <td className="p-4 text-sm">
                        Wysoki (100-300 zł za sesję, NFZ ma długie kolejki)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
                <p className="text-blue-900 font-medium mb-2">
                  <strong>Kluczowa różnica:</strong>
                </p>
                <p className="text-blue-800">
                  Biblioterapia <strong>rozwojowa</strong> (prowadzona przez rodziców) jest odpowiednia 
                  dla <strong>zdrowych dzieci</strong> przeżywających normalne wyzwania życiowe. 
                  Psychoterapia jest konieczna, gdy dziecko ma <strong>zdiagnozowane zaburzenie</strong> 
                  lub gdy problemy są tak intensywne, że zakłócają codzienne funkcjonowanie.
                </p>
              </div>
            </section>

            {/* Sekcja 2 */}
            <section id="kiedy-biblioterapia" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                Kiedy wystarczy biblioterapia?
              </h2>

              <p>
                Biblioterapia rozwojowa (prowadzona przez rodziców w domu) jest <strong>wystarczająca</strong>, 
                gdy dziecko:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-green-900 mb-3">
                    ✓ Normalne wyzwania życiowe
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Rozwód rodziców (bez oznak traumy)</li>
                    <li>• Narodziny rodzeństwa</li>
                    <li>• Przeprowadzka, zmiana szkoły</li>
                    <li>• Śmierć bliskiej osoby (żałoba bez komplikacji)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-green-900 mb-3">
                    ✓ Trudności emocjonalne
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Trudności z nazywaniem emocji</li>
                    <li>• Chwilowe problemy z samooceną</li>
                    <li>• Drobne konflikty rówieśnicze</li>
                    <li>• Lęk przed nową sytuacją (np. pierwsza klasa)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-green-900 mb-3">
                    ✓ Prewencja i edukacja
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Budowanie odporności psychicznej</li>
                    <li>• Nauka empatii i zrozumienia różnorodności</li>
                    <li>• Przygotowanie do trudnych rozmów</li>
                    <li>• Wzmacnianie więzi rodzic-dziecko</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-green-900 mb-3">
                    ✓ Dziecko funkcjonuje normalnie
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Śpi dobrze (bez koszmarów)</li>
                    <li>• Bawi się, ma przyjaciół</li>
                    <li>• Radzi sobie w szkole</li>
                    <li>• Nie ma problemów somatycznych</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-3">Przykład — kiedy biblioterapia jest wystarczająca:</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Sytuacja:</strong> 7-letnia Zuzia przeżywa rozwód rodziców. Jest smutna, 
                  czasem płacze, zadaje pytania o to, czy rodzice przestaną ją kochać. Ale:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Nadal śpi dobrze i je regularnie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Bawi się z rodzeństwem i przyjaciółmi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Radzi sobie w szkole (nie ma problemów z koncentracją)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Potrafi rozmawiać o swoich uczuciach</span>
                  </li>
                </ul>
                <p className="text-sm text-green-800 font-medium mt-4">
                  ✓ <strong>Rozwiązanie:</strong> Mama zaczyna wspólne czytanie{" "}
                  <Link href="/ksiazki/czasami-szczesliwi-rodzice" className="text-primary underline">
                    „Czasami szczęśliwi rodzice mieszkają oddzielnie"
                  </Link>. 
                  Po kilku tygodniach Zuzia rozumie, że rozwód nie jest jej winą i że rodzice nadal ją kochają. 
                  Biblioterapia rozwojowa okazuje się wystarczająca.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 my-6">
                <p className="text-sm text-amber-900">
                  <strong>💡 Wskazówka:</strong> Jeśli nie jesteś pewien, czy biblioterapia wystarczy, 
                  możesz najpierw spróbować przez 2-3 tygodnie. Jeśli nie zobaczysz poprawy lub 
                  sytuacja się pogorszyła, skonsultuj się z psychologiem.
                </p>
              </div>
            </section>

            {/* Sekcja 3 */}
            <section id="kiedy-psychoterapia" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                Kiedy dziecko potrzebuje psychoterapeuty?
              </h2>

              <p>
                Psychoterapia jest <strong>konieczna</strong>, gdy dziecko:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-900 mb-3">
                    🚨 Ma zdiagnozowane zaburzenie psychiczne
                  </h3>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Zaburzenia lękowe (lęk separacyjny, fobie, PTSD)</li>
                    <li>• Depresja dziecięca</li>
                    <li>• ADHD z problemami funkcjonowania</li>
                    <li>• Zaburzenia ze spektrum autyzmu</li>
                    <li>• Zaburzenia odżywiania (anoreksja, bulimia)</li>
                    <li>• Zaburzenia obsesyjno-kompulsywne (OCD)</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-900 mb-3">
                    🚨 Przeżyło traumę
                  </h3>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Przemoc fizyczna, psychiczna lub seksualna</li>
                    <li>• Poważny wypadek (np. wypadek samochodowy)</li>
                    <li>• Świadectwo przemocy (np. przemoc domowa)</li>
                    <li>• Nagła, traumatyczna śmierć bliskiej osoby</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-900 mb-3">
                    🚨 Problemy zakłócają codzienne funkcjonowanie
                  </h3>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Nie chodzi do szkoły (fobia szkolna, unikanie)</li>
                    <li>• Ma poważne problemy z rówieśnikami (izolacja, agresja)</li>
                    <li>• Nie śpi (bezsenność, koszmary nocne powtarzające się od tygodni)</li>
                    <li>• Ma problemy somatyczne bez przyczyn medycznych (bóle brzucha, głowy)</li>
                    <li>• Wycofuje się z aktywności, które wcześniej lubiło</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg text-red-900 mb-3">
                    🚨 Wykazuje zachowania destrukcyjne
                  </h3>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Samookaleczanie (zadrapywanie, cięcie się)</li>
                    <li>• Myśli samobójcze lub próby samobójcze</li>
                    <li>• Agresja wobec innych (bicie, kopanie, gryzienie)</li>
                    <li>• Niszczenie przedmiotów</li>
                    <li>• Zachowania ryzykowne (ucieczki z domu, niebezpieczne zabawy)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg mb-3">Przykład — kiedy konieczna jest psychoterapia:</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Sytuacja:</strong> 8-letni Jasiek przeżył śmierć dziadka. Od kilku tygodni:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Budzi się w nocy z koszmarami i nie może zasnąć</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Odmawia chodzenia do szkoły, płacze rano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Przestał bawić się z przyjaciółmi, siedzi sam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Ma napady złości i mówi, że "boi się, że mama też umrze"</span>
                  </li>
                </ul>
                <p className="text-sm text-red-800 font-medium mt-4">
                  ❌ <strong>Rozwiązanie:</strong> To są objawy <strong>zespołu stresu pourazowego (PTSD)</strong> 
                  lub <strong>lęku separacyjnego</strong>. Mama powinna skonsultować się z psychologiem dziecięcym, 
                  który może zdiagnozować problem i wdrożyć odpowiednią terapię (np. terapię poznawczo-behawioralną). 
                  Biblioterapia może być <strong>wsparciem</strong>, ale nie zastąpi terapii klinicznej.
                </p>
              </div>

              <div className="bg-red-50 border border-red-300 rounded-lg p-4 my-6">
                <p className="text-sm text-red-900">
                  <strong>⚠️ Ważne:</strong> Jeśli dziecko mówi o samobójstwie lub próbuje się skrzywdzić, 
                  <strong> natychmiast skontaktuj się z psychologiem lub psychiatrą dziecięcym</strong>. 
                  W nagłych przypadkach dzwoń na Telefon Zaufania dla Dzieci i Młodzieży: <strong>116 111</strong>.
                </p>
              </div>
            </section>

            {/* Sekcja 4 */}
            <section id="wspolpraca" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                Czy biblioterapia i psychoterapia mogą współistnieć?
              </h2>

              <p className="mb-6">
                <strong>Tak!</strong> Biblioterapia kliniczna jest często <strong>elementem wspomagającym psychoterapię</strong>. 
                Psychoterapeuta może zalecić konkretne książki, które wzmocnią efekty terapii i pomogą dziecku 
                lepiej zrozumieć swoje emocje.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 mb-8">
                <h3 className="font-serif text-xl font-bold mb-4 text-purple-900">
                  Model współpracy: Psychoterapia + Biblioterapia
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Diagnoza u psychoterapeuty</h4>
                      <p className="text-muted-foreground text-sm">
                        Psychoterapeuta diagnozuje problem (np. lęk separacyjny) i rozpoczyna terapię poznawczo-behawioralną
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Zalecenie książki</h4>
                      <p className="text-muted-foreground text-sm">
                        Terapeuta zaleca rodzicom wspólne czytanie książki (np.{" "}
                        <Link href="/ksiazki/zaba" className="text-primary underline">
                          „Żaba. Mała opowieść o żałobie"
                        </Link>) jako pracę domową
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Wspólne czytanie w domu</h4>
                      <p className="text-muted-foreground text-sm">
                        Rodzice czytają z dzieckiem w domu, rozmawiają o emocjach, wykonują aktywności twórcze
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Omówienie na sesji terapeutycznej</h4>
                      <p className="text-muted-foreground text-sm">
                        Na następnej sesji dziecko i terapeuta rozmawiają o książce, co pomaga w procesie terapeutycznym
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-purple-100 border border-purple-300 rounded-lg p-4">
                  <p className="text-sm text-purple-900 font-medium">
                    <strong>💡 Korzyść:</strong> Biblioterapia wzmacnia efekty psychoterapii, 
                    daje dziecku dodatkowe narzędzia do pracy z emocjami i buduje więź z rodzicem.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 my-6">
                <p className="text-sm text-blue-900">
                  <strong>💡 Wskazówka dla rodziców:</strong> Jeśli dziecko jest w terapii, 
                  <strong> zawsze skonsultuj się z terapeutą</strong> przed wprowadzeniem biblioterapii. 
                  Terapeuta pomoże dobrać odpowiednie książki i określi, jak wykorzystać je w procesie terapeutycznym.
                </p>
              </div>
            </section>

            {/* Sekcja 5 */}
            <section id="sygnaly-alarmowe" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Sygnały alarmowe — kiedy natychmiast szukać pomocy</h2>

              <p className="mb-6">
                Niektóre sytuacje wymagają <strong>natychmiastowej interwencji</strong> specjalisty. 
                Nie czekaj i nie próbuj rozwiązać problemu samodzielnie, jeśli dziecko:
              </p>

              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-xl text-red-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  Sygnały wymagające natychmiastowej pomocy:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      !
                    </div>
                    <span className="text-sm text-red-900">
                      <strong>Mówi o samobójstwie</strong> lub ma plan samobójczy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      !
                    </div>
                    <span className="text-sm text-red-900">
                      <strong>Samookalecza się</strong> (cięcie, drapanie, bicie głową o ścianę)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      !
                    </div>
                    <span className="text-sm text-red-900">
                      <strong>Ma halucynacje</strong> (widzi lub słyszy rzeczy, których inni nie widzą)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      !
                    </div>
                    <span className="text-sm text-red-900">
                      <strong>Jest agresywne wobec innych</strong> w sposób zagrażający bezpieczeństwu
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      !
                    </div>
                    <span className="text-sm text-red-900">
                      <strong>Odmawia jedzenia</strong> przez kilka dni lub wymiotuje po jedzeniu
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      !
                    </div>
                    <span className="text-sm text-red-900">
                      <strong>Przestało mówić</strong> (mutyzm selektywny trwający dłużej niż miesiąc)
                    </span>
                  </li>
                </ul>

                <div className="mt-6 bg-white border-2 border-red-500 rounded-lg p-4">
                  <p className="text-sm text-red-900 font-bold mb-2">
                    📞 Gdzie szukać natychmiastowej pomocy:
                  </p>
                  <ul className="space-y-1 text-sm text-red-800">
                    <li>• <strong>Telefon Zaufania dla Dzieci i Młodzieży:</strong> 116 111 (bezpłatny, całodobowy)</li>
                    <li>• <strong>Pogotowie Ratunkowe:</strong> 999 lub 112</li>
                    <li>• <strong>Poradnia Zdrowia Psychicznego:</strong> Kontakt przez NFZ lub prywatnie</li>
                    <li>• <strong>Izba Przyjęć Psychiatryczna:</strong> W nagłych przypadkach</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sekcja 6 */}
            <section id="podsumowanie" className="mb-12 scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Podsumowanie — jak podjąć decyzję?</h2>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-primary/20 rounded-2xl p-8 mb-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                  Prosty schemat decyzyjny
                </h3>

                <div className="space-y-4">
                  <div className="bg-white border-2 border-green-500 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-8 w-8 text-green-600 flex-shrink-0" />
                      <h4 className="font-bold text-lg text-green-900">
                        Biblioterapia rozwojowa (w domu)
                      </h4>
                    </div>
                    <p className="text-sm text-green-800 mb-3">
                      <strong>Wybierz, jeśli dziecko:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-green-800">
                      <li>✓ Jest zdrowe, ale przeżywa normalną trudność (rozwód, żałoba, zmiana)</li>
                      <li>✓ Funkcjonuje dobrze (śpi, je, bawi się, chodzi do szkoły)</li>
                      <li>✓ Potrafi rozmawiać o uczuciach</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-amber-500 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                      <h4 className="font-bold text-lg text-amber-900">
                        Biblioterapia + konsultacja psychologa
                      </h4>
                    </div>
                    <p className="text-sm text-amber-800 mb-3">
                      <strong>Wybierz, jeśli:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-amber-800">
                      <li>• Biblioterapia nie przynosi poprawy po 2-3 tygodniach</li>
                      <li>• Dziecko ma trudności z funkcjonowaniem, ale nie spełnia kryteriów zaburzenia</li>
                      <li>• Chcesz upewnić się, czy dziecko potrzebuje terapii</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-red-500 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="h-8 w-8 text-red-600 flex-shrink-0" />
                      <h4 className="font-bold text-lg text-red-900">
                        Psychoterapia (konieczna)
                      </h4>
                    </div>
                    <p className="text-sm text-red-800 mb-3">
                      <strong>Wybierz, jeśli dziecko:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-red-800">
                      <li>• Ma zdiagnozowane zaburzenie (lęk, depresja, ADHD, autyzm)</li>
                      <li>• Przeżyło traumę (przemoc, wypadek, śmierć)</li>
                      <li>• Ma myśli samobójcze lub samookalecza się</li>
                      <li>• Nie funkcjonuje w codziennym życiu (szkoła, relacje, sen, jedzenie)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-lg font-medium text-center">
                  <strong>Najważniejsza zasada:</strong> Jeśli masz <strong>jakiekolwiek wątpliwości</strong>, 
                  skonsultuj się z psychologiem dziecięcym. Lepiej dmuchać na zimne niż przegapić moment, 
                  gdy dziecko naprawdę potrzebuje pomocy specjalisty.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 mt-12">
              <h3 className="font-serif text-2xl font-bold mb-4 text-center">
                Chcesz spróbować biblioterapii rozwojowej?
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                Odkryj gotowe scenariusze zajęć biblioterapeutycznych, które możesz prowadzić w domu bez wykształcenia terapeutycznego
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
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}