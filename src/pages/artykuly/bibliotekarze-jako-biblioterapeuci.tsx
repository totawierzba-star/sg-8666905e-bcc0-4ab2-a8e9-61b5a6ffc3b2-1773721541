import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Users, Heart, Lightbulb, Target, CheckCircle, AlertCircle, GraduationCap, Library } from "lucide-react";
import Link from "next/link";

export default function BibliotekarzeJakoBiblioterapeuciPage() {
  return (
    <Layout>
      <SEO
        title="Bibliotekarze jako biblioterapeuci — rola i kompetencje"
        description="Praktyczny przewodnik po roli bibliotekarza-biblioterapeuty. Kompetencje, umiejętności i przykłady pracy z książką terapeutyczną w bibliotece."
        url="https://biblioterapia.org/artykuly/bibliotekarze-jako-biblioterapeuci"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <article className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            <div className="mb-6">
              <Link 
                href="/artykuly"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót do artykułów
              </Link>
            </div>

            <div className="bg-card border rounded-2xl p-8 mb-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Library className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                  Kompetencje
                </span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Bibliotekarze jako biblioterapeuci — rola i kompetencje
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Biblioteka to nie tylko miejsce przechowywania książek — to przestrzeń, gdzie literatura spotyka się z potrzebami czytelników. Bibliotekarze coraz częściej pełnią rolę biblioterapeutów, wspierając rozwój emocjonalny i społeczny swoich odbiorców. Jakie kompetencje są potrzebne do tej roli?
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>📚 Praktyczny przewodnik</span>
                <span>•</span>
                <span>⏱️ 15 min czytania</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-bold text-blue-900 mb-3">
                      Co to znaczy być bibliotekarzem-biblioterapeutą?
                    </h2>
                    <p className="text-blue-900 leading-relaxed mb-4">
                      Bibliotekarz-biblioterapeuta to specjalista, który świadomie dobiera książki do potrzeb emocjonalnych, rozwojowych i terapeutycznych czytelników. Nie zastępuje psychologa ani terapeuty, ale wspiera proces samopoznania, uzdrawiania i rozwoju poprzez odpowiednio dobraną literaturę.
                    </p>
                    <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-blue-800 mb-2">
                        <strong>Różnica między bibliotekarzem a biblioterapeutą:</strong>
                      </p>
                      <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                        <li><strong>Bibliotekarz:</strong> Pomaga znaleźć książkę na podstawie tematyki, gatunku, autora</li>
                        <li><strong>Biblioterapeuta:</strong> Dobiera książkę do potrzeb emocjonalnych i rozwojowych czytelnika, prowadzi rozmowę po lekturze</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <section className="bg-card border rounded-xl p-6">
                <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Rola bibliotekarza-biblioterapeuty
                </h2>
                <p className="text-muted-foreground mb-6">
                  Biblioterapeuta w bibliotece pełni kilka kluczowych funkcji, które wykraczają poza tradycyjną obsługę czytelniczą:
                </p>

                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                    <h3 className="font-bold text-lg text-amber-900 mb-2 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      1. Doradca czytelniczy
                    </h3>
                    <p className="text-amber-900 text-sm mb-3">
                      Pomaga czytelnikom znaleźć książki odpowiadające ich aktualnym potrzebom emocjonalnym i życiowym sytuacjom.
                    </p>
                    <div className="bg-white/70 rounded p-3 border border-amber-300">
                      <p className="text-xs text-amber-800 font-semibold mb-1">Przykład:</p>
                      <p className="text-xs text-amber-800">
                        Rodzic przychodzi do biblioteki szukając książki dla dziecka, które przeżywa rozwód rodziców. Bibliotekarz-biblioterapeuta poleca „Czasami szczęśliwi rodzice mieszkają oddzielnie" i krótko wyjaśnia, dlaczego ta książka pomoże dziecku zrozumieć sytuację.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                    <h3 className="font-bold text-lg text-green-900 mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      2. Facylitator rozmów o książkach
                    </h3>
                    <p className="text-green-900 text-sm mb-3">
                      Prowadzi spotkania czytelnicze, kluby książki, warsztaty, podczas których czytelnicy mogą podzielić się swoimi refleksjami i emocjami związanymi z lekturą.
                    </p>
                    <div className="bg-white/70 rounded p-3 border border-green-300">
                      <p className="text-xs text-green-800 font-semibold mb-1">Przykład:</p>
                      <p className="text-xs text-green-800">
                        Organizacja spotkania dla dzieci po przeczytaniu „Żaby. Małej opowieści o żałobie", podczas którego dzieci mogą porozmawiać o stracie, smutku i wspomnieniach.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h3 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      3. Twórca bezpiecznej przestrzeni
                    </h3>
                    <p className="text-blue-900 text-sm mb-3">
                      Zapewnia bezpieczne, akceptujące środowisko, w którym czytelnicy mogą wyrażać swoje emocje bez osądu.
                    </p>
                    <div className="bg-white/70 rounded p-3 border border-blue-300">
                      <p className="text-xs text-blue-800 font-semibold mb-1">Przykład:</p>
                      <p className="text-xs text-blue-800">
                        Stworzenie „kącika biblioterapeutycznego" w bibliotece — przytulnego miejsca z poduszkami, kocem i półką z książkami do zadań specjalnych.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                    <h3 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      4. Edukator
                    </h3>
                    <p className="text-purple-900 text-sm mb-3">
                      Uczy rodziców, nauczycieli i opiekunów, jak korzystać z biblioterapii w codziennym życiu.
                    </p>
                    <div className="bg-white/70 rounded p-3 border border-purple-300">
                      <p className="text-xs text-purple-800 font-semibold mb-1">Przykład:</p>
                      <p className="text-xs text-purple-800">
                        Prowadzenie warsztatów dla rodziców na temat „Jak rozmawiać z dzieckiem o trudnych emocjach przez książki".
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-card border rounded-xl p-6">
                <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Kluczowe kompetencje bibliotekarza-biblioterapeuty
                </h2>
                <p className="text-muted-foreground mb-6">
                  Aby skutecznie wspierać czytelników poprzez książki, bibliotekarz-biblioterapeuta powinien rozwijać następujące kompetencje:
                </p>

                <div className="space-y-6">
                  
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-blue-900">
                      1. Kompetencje merytoryczne
                    </h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">Znajomość literatury terapeutycznej</p>
                          <p className="text-blue-800 text-sm">Dogłębna znajomość książek do zadań specjalnych, ich tematyki, metafor, symboliki i potencjału terapeutycznego.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">Wiedza o rozwoju dziecka</p>
                          <p className="text-blue-800 text-sm">Rozumienie etapów rozwoju emocjonalnego, poznawczego i społecznego dzieci w różnych grupach wiekowych.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">Podstawy psychologii i pedagogiki</p>
                          <p className="text-blue-800 text-sm">Zrozumienie mechanizmów emocjonalnych, potrzeb psychicznych i sposobów radzenia sobie z trudnymi sytuacjami.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">Znajomość metod biblioterapii</p>
                          <p className="text-blue-800 text-sm">Umiejętność doboru książek do konkretnych sytuacji życiowych i emocjonalnych potrzeb czytelników.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 text-green-900">
                      2. Kompetencje interpersonalne
                    </h3>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 text-sm">Empatia i wrażliwość</p>
                          <p className="text-green-800 text-sm">Umiejętność słuchania, rozumienia emocji czytelników i reagowania na ich potrzeby z szacunkiem i troską.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 text-sm">Aktywne słuchanie</p>
                          <p className="text-green-800 text-sm">Koncentracja na rozmówcy, zadawanie otwartych pytań, parafrazowanie, by lepiej zrozumieć potrzeby.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 text-sm">Komunikacja bez oceniania</p>
                          <p className="text-green-800 text-sm">Tworzenie przestrzeni akceptacji, w której czytelnicy mogą swobodnie mówić o swoich emocjach.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 text-sm">Budowanie zaufania</p>
                          <p className="text-green-800 text-sm">Konsekwencja, autentyczność, poufność — podstawy relacji terapeutycznej.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 text-amber-900">
                      3. Kompetencje metodyczne
                    </h3>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-amber-900 text-sm">Prowadzenie rozmów biblioterapeutycznych</p>
                          <p className="text-amber-800 text-sm">Umiejętność zadawania pytań otwartych, pogłębiających refleksję i wspierających proces identyfikacji z bohaterem.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-amber-900 text-sm">Projektowanie scenariuszy zajęć</p>
                          <p className="text-amber-800 text-sm">Tworzenie spójnych, bezpiecznych i angażujących spotkań biblioterapeutycznych.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-amber-900 text-sm">Dostosowanie metod do wieku i potrzeb</p>
                          <p className="text-amber-800 text-sm">Elastyczność w doborze form pracy — zabawa, rysunek, rozmowa, dramatyzacja.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-amber-900 text-sm">Ewaluacja i obserwacja</p>
                          <p className="text-amber-800 text-sm">Monitorowanie reakcji czytelników, dostrzeganie sygnałów emocjonalnych, dostosowywanie procesu.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-900">
                      4. Kompetencje etyczne
                    </h3>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-purple-900 text-sm">Poufność i szacunek</p>
                          <p className="text-purple-800 text-sm">Zachowanie tajemnicy informacji przekazanych przez czytelników, poszanowanie ich granic.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-purple-900 text-sm">Świadomość granic</p>
                          <p className="text-purple-800 text-sm">Rozróżnianie, kiedy wsparcie biblioterapeutyczne wystarcza, a kiedy konieczna jest pomoc specjalisty (psychologa, terapeuty).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-purple-900 text-sm">Bezstronność</p>
                          <p className="text-purple-800 text-sm">Nie narzucanie własnych poglądów, wartości czy rozwiązań — wspieranie autonomii czytelnika.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-purple-900 text-sm">Dbałość o własne granice</p>
                          <p className="text-purple-800 text-sm">Unikanie wypalenia zawodowego, korzystanie z superwizji, dbanie o własne zdrowie psychiczne.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <section className="bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-200 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-rose-100 p-3 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-rose-700" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-rose-900 mb-2">
                      Kiedy biblioterapeuta powinien skierować do specjalisty?
                    </h2>
                    <p className="text-rose-800 text-sm">
                      Biblioterapia to wsparcie, nie terapia. Ważne jest rozpoznanie sytuacji, w których konieczna jest pomoc psychologa lub psychiatry.
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl p-6 border border-rose-300">
                  <h3 className="font-bold text-rose-900 mb-4">Sygnały alarmowe:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-rose-200 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                      </div>
                      <span className="text-rose-900 text-sm"><strong>Myśli samobójcze lub autoagresja</strong> — natychmiastowe skierowanie do psychiatry/psychologa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-rose-200 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                      </div>
                      <span className="text-rose-900 text-sm"><strong>Długotrwały, nasilony smutek lub lęk</strong> — mogą wskazywać na depresję lub zaburzenia lękowe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-rose-200 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                      </div>
                      <span className="text-rose-900 text-sm"><strong>Przemoc w domu</strong> — wymagana interwencja służb społecznych</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-rose-200 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                      </div>
                      <span className="text-rose-900 text-sm"><strong>Trauma, PTSD</strong> — konieczna specjalistyczna terapia traumy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-rose-200 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                      </div>
                      <span className="text-rose-900 text-sm"><strong>Zaburzenia zachowania</strong> — agresja, izolacja społeczna, regresja rozwojowa</span>
                    </li>
                  </ul>
                  <div className="bg-rose-100 rounded-lg p-4 mt-4">
                    <p className="text-rose-900 text-sm">
                      <strong>Pamiętaj:</strong> Biblioterapeuta nie diagnozuje i nie leczy — wspiera proces samopoznania i uzdrawiania poprzez literaturę. W razie wątpliwości, zawsze warto skonsultować się z psychologiem lub pedagogiem.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-card border rounded-xl p-6">
                <h2 className="font-serif text-2xl font-bold mb-4">
                  Praktyczne przykłady pracy bibliotekarza-biblioterapeuty
                </h2>
                
                <div className="space-y-6">
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-5">
                    <h3 className="font-bold text-blue-900 mb-3">Przykład 1: Dziecko przeżywające rozwód rodziców</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-blue-900"><strong>Sytuacja:</strong> Mama przychodzi do biblioteki szukając pomocy dla 7-letniego syna, którego rodzice się rozwodzą.</p>
                      <p className="text-blue-900"><strong>Działanie bibliotekarza-biblioterapeuty:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-blue-800 ml-4">
                        <li>Rozmowa z mamą o emocjach dziecka, jego pytaniach i lękach</li>
                        <li>Polecenie książki „Czasami szczęśliwi rodzice mieszkają oddzielnie"</li>
                        <li>Krótkie wprowadzenie do biblioterapii — jak czytać książkę z dzieckiem, na co zwrócić uwagę</li>
                        <li>Zaproszenie na spotkanie biblioterapeutyczne dla dzieci z rozbitych rodzin</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
                    <h3 className="font-bold text-green-900 mb-3">Przykład 2: Dziecko po stracie bliskiej osoby</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-green-900"><strong>Sytuacja:</strong> Nauczycielka prosi o pomoc w wyborze książki dla ucznia, którego babcia niedawno zmarła.</p>
                      <p className="text-green-900"><strong>Działanie bibliotekarza-biblioterapeuty:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-green-800 ml-4">
                        <li>Polecenie „Żaby. Małej opowieści o żałobie" lub „Zielonej dziewczynki"</li>
                        <li>Przygotowanie scenariusza zajęć biblioterapeutycznych dla klasy</li>
                        <li>Wsparcie nauczycielki w prowadzeniu rozmowy o żałobie i wspomnieniach</li>
                        <li>Stworzenie „kącika wspomnień" w bibliotece szkolnej</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-5">
                    <h3 className="font-bold text-amber-900 mb-3">Przykład 3: Dziecko z trudnościami w akceptacji różnorodności</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-amber-900"><strong>Sytuacja:</strong> W klasie pojawiło się dziecko z niepełnosprawnością, a inne dzieci mają problem z akceptacją.</p>
                      <p className="text-amber-900"><strong>Działanie bibliotekarza-biblioterapeuty:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-amber-800 ml-4">
                        <li>Polecenie „Nie znajdziesz mnie po śladach stóp"</li>
                        <li>Zorganizowanie spotkania biblioterapeutycznego na temat różnorodności</li>
                        <li>Rozmowa o tym, czym jest niepełnosprawność, jak wspierać kolegów</li>
                        <li>Stworzenie wystawy książek o różnorodności w bibliotece</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </section>

              <section className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-purple-900 mb-2">
                      Jak rozwijać kompetencje biblioterapeutyczne?
                    </h2>
                    <p className="text-purple-800 text-sm">
                      Zostanie biblioterapeutą to proces. Oto konkretne kroki, które pomogą Ci rozwinąć potrzebne umiejętności:
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/80 rounded-lg p-5 border border-purple-300">
                    <h3 className="font-bold text-purple-900 mb-2">1. Edukacja formalna</h3>
                    <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                      <li>Studia podyplomowe z biblioterapii</li>
                      <li>Kursy i szkolenia z zakresu biblioterapii, psychologii rozwojowej, pedagogiki</li>
                      <li>Warsztaty z prowadzenia rozmów terapeutycznych</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 rounded-lg p-5 border border-purple-300">
                    <h3 className="font-bold text-purple-900 mb-2">2. Samorozwój</h3>
                    <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                      <li>Czytanie literatury fachowej z zakresu biblioterapii, psychologii, pedagogiki</li>
                      <li>Uczestnictwo w konferencjach, webinarach, spotkaniach środowiskowych</li>
                      <li>Analiza studiów przypadku, lektura artykułów naukowych</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 rounded-lg p-5 border border-purple-300">
                    <h3 className="font-bold text-purple-900 mb-2">3. Praktyka</h3>
                    <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                      <li>Prowadzenie spotkań czytelniczych z elementami biblioterapii</li>
                      <li>Tworzenie własnych scenariuszy zajęć biblioterapeutycznych</li>
                      <li>Współpraca z psychologiem, pedagogiem szkolnym</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 rounded-lg p-5 border border-purple-300">
                    <h3 className="font-bold text-purple-900 mb-2">4. Superwizja i wsparcie</h3>
                    <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                      <li>Regularne konsultacje z doświadczonym biblioterapeutą lub psychologiem</li>
                      <li>Udział w grupach wsparcia dla biblioterapeutów</li>
                      <li>Refleksja nad własną praktyką, prowadzenie dziennika</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6">
                <h2 className="font-serif text-2xl font-bold mb-4 text-blue-900">
                  📚 Przydatne zasoby
                </h2>
                <div className="space-y-3">
                  <Link 
                    href="/biblioterapia/narzedziownik"
                    className="block bg-white hover:bg-blue-50 border border-blue-300 rounded-lg p-4 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-blue-900 group-hover:text-blue-700">Narzędziownik biblioterapeuty</h3>
                        <p className="text-sm text-blue-700">Gotowe scenariusze zajęć biblioterapeutycznych</p>
                      </div>
                      <ArrowLeft className="h-5 w-5 text-blue-600 rotate-180" />
                    </div>
                  </Link>

                  <Link 
                    href="/artykuly/jak-dziala-biblioterapia"
                    className="block bg-white hover:bg-blue-50 border border-blue-300 rounded-lg p-4 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-blue-900 group-hover:text-blue-700">Jak działa biblioterapia?</h3>
                        <p className="text-sm text-blue-700">Mechanizmy terapeutyczne biblioterapii</p>
                      </div>
                      <ArrowLeft className="h-5 w-5 text-blue-600 rotate-180" />
                    </div>
                  </Link>

                  <Link 
                    href="/artykuly/rodzaje-biblioterapii"
                    className="block bg-white hover:bg-blue-50 border border-blue-300 rounded-lg p-4 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-blue-900 group-hover:text-blue-700">Rodzaje biblioterapii</h3>
                        <p className="text-sm text-blue-700">Poznaj różne formy pracy biblioterapeutycznej</p>
                      </div>
                      <ArrowLeft className="h-5 w-5 text-blue-600 rotate-180" />
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}