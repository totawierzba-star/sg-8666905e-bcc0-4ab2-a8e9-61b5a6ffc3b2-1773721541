import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Download, Clock, Users, BookOpen, Target, Lightbulb, CheckCircle2, AlertCircle } from "lucide-react";

export default function PolezjaLzyIEmocjePage() {
  return (
    <Layout>
      <SEO
        title="Scenariusz warsztatów: Łzy i emocje - Połezja | Narzędziownik biblioterapeutyczny"
        description="Gotowy scenariusz warsztatów biblioterapeutycznych do książki 'Połezja. O niezwykłej mocy łez'. Normalizacja płaczu, edukacja o łzach, wyrażanie emocji. Dla dzieci 6-10 lat."
        image="/uploads/polezja-o-niezwyklej-mocy-lez-okładka.jpg"
      />

      <article className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/biblioterapia" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Biblioterapia
            </Link>
            <span className="mx-2">/</span>
            <Link href="/biblioterapia/narzedziownik" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Narzędziownik
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">Łzy i emocje - Połezja</span>
          </nav>

          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-block bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              EMOCJE I ZDROWIE PSYCHICZNE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Łzy i emocje
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Warsztat biblioterapeutyczny z książką &quot;Połezja. O niezwykłej mocy łez&quot;
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>60-75 minut</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>6-10 lat</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>Do 15 osób</span>
              </div>
            </div>

            {/* Download Button */}
            <Button 
              size="lg" 
              className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Pobierz scenariusz PDF
            </Button>
          </header>

          {/* Workshop Overview */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-3 mb-6">
              <Target className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Cel warsztatów
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Pomoc dzieciom w zrozumieniu, że płacz jest naturalną i zdrową reakcją emocjonalną. Edukacja o różnych rodzajach łez i ich funkcjach. Normalizacja wyrażania emocji poprzez płacz i redukcja wstydu związanego z okazywaniem uczuć.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Kluczowe przesłania:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Łzy są naturalną częścią życia i pomagają nam radzić sobie z emocjami</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Płaczemy z różnych powodów - ze smutku, radości, wzruszenia, bólu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Zarówno chłopcy, jak i dziewczynki mogą płakać - to nie jest oznaka słabości</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Łzy pełnią ważne funkcje biologiczne i emocjonalne</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Required Materials */}
          <section className="bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              Potrzebne materiały
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Książka i materiały do czytania:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Książka &quot;Połezja. O niezwykłej mocy łez&quot;</li>
                  <li>• Kartki z cytatami o łzach (opcjonalnie)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Materiały plastyczne:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Kartki A4 lub A5 (biała i niebieska)</li>
                  <li>• Kredki, flamastry, pastele</li>
                  <li>• Brokat, cekinki (opcjonalnie)</li>
                  <li>• Klej, nożyczki</li>
                  <li>• Lusterka (małe, plastikowe)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Pomoce dydaktyczne:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Plansza z ilustracjami oka (opcjonalnie)</li>
                  <li>• Zdjęcia łez pod mikroskopem (do wydruku)</li>
                  <li>• Kartki z emocjami (zestaw 10-15 kart)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Organizacja przestrzeni:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Wygodne miejsce do czytania (dywan, poduszki)</li>
                  <li>• Stoły do pracy plastycznej</li>
                  <li>• Tablica lub flipchart</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Workshop Steps */}
          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Przebieg warsztatów
            </h2>

            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-600 dark:bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Powitanie i wprowadzenie w temat łez
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">Czas: 10 minut</p>
                </div>
              </div>
              
              <div className="ml-14 space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Przywitaj dzieci w kręgu. Zapytaj: <strong>&quot;Czy ktoś z Was płakał ostatnio? Co wtedy czuliście?&quot;</strong> Pozwól dzieciom swobodnie opowiedzieć o swoich doświadczeniach (bez zmuszania do wypowiedzi).
                </p>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">Pytania otwierające:</p>
                  <ul className="space-y-1">
                    <li>• Kiedy ostatnio płakaliście?</li>
                    <li>• Czy płacz zawsze oznacza smutek?</li>
                    <li>• Co się dzieje z naszym ciałem, gdy płaczemy?</li>
                    <li>• Czy widzieliście kiedyś dorosłego, który płacze?</li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Przedstaw książkę &quot;Połezja&quot; i powiedz, że dzisiaj dowiedzą się wielu ciekawych rzeczy o łzach - dlaczego płaczemy, z czego składają się łzy i jak piękne mogą być pod mikroskopem.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-600 dark:bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Czytanie książki &quot;Połezja&quot;
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">Czas: 15-20 minut</p>
                </div>
              </div>
              
              <div className="ml-14 space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Czytaj książkę z przerwami, pozwalając dzieciom na komentarze i pytania. Zatrzymuj się przy kluczowych momentach, aby przedyskutować:
                </p>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">Kluczowe punkty do omówienia:</p>
                  <ul className="space-y-2">
                    <li>
                      <strong>Trzy rodzaje łez:</strong> podstawowe (nawilżają oczy), odruchowe (np. przy krojeniu cebuli), emocjonalne (przy silnych uczuciach)
                    </li>
                    <li>
                      <strong>Skład łez:</strong> woda, sól, białka - z czego się składają nasze łzy?
                    </li>
                    <li>
                      <strong>Piękno łez:</strong> pokażcie ilustracje łez pod mikroskopem - każda jest inna!
                    </li>
                    <li>
                      <strong>Różne powody płaczu:</strong> smutek, radość, wzruszenie, ból, tęsknota
                    </li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Po przeczytaniu zapytaj: <strong>&quot;Co Was najbardziej zaskoczyło w tej książce? Co ciekawego dowiedzieliście się o łzach?&quot;</strong>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-600 dark:bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Moje łzy - kiedy płaczę?
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">Czas: 15 minut</p>
                </div>
              </div>
              
              <div className="ml-14 space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Rozdaj dzieciom kartki z sylwetką dużej kropli (łzy). Poproś, aby każde dziecko wypełniło swoją łzę rysunkami lub słowami odpowiadającymi na pytanie: <strong>&quot;Kiedy ja płaczę?&quot;</strong>
                </p>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">Przykładowe sytuacje do zilustrowania:</p>
                  <ul className="space-y-1">
                    <li>• Gdy jestem smutny/smutna</li>
                    <li>• Gdy coś mnie boli</li>
                    <li>• Gdy tęsknię za kimś</li>
                    <li>• Gdy jestem bardzo szczęśliwy/szczęśliwa</li>
                    <li>• Gdy jestem wzruszony/wzruszona</li>
                    <li>• Gdy się boję</li>
                    <li>• Gdy jestem zmęczony/zmęczona</li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Dzieci mogą narysować symbole, sceny lub napisać krótkie opisy. Podkreśl, że <strong>nie ma &quot;złych&quot; powodów do płaczu</strong> - każdy płacze z różnych przyczyn i wszystkie są ważne.
                </p>

                <p className="leading-relaxed">
                  Po zakończeniu tworzenia, poproś chętne dzieci o podzielenie się swoimi &quot;łzami&quot;. Pochwal każdą wypowiedź i podkreśl różnorodność emocji.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-600 dark:bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Łzy pod mikroskopem - artystyczne tworzenie
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">Czas: 20 minut</p>
                </div>
              </div>
              
              <div className="ml-14 space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Przypomnij dzieciom, że w książce widzieliśmy, jak pięknie wyglądają łzy pod mikroskopem - każda jest inna, jak śnieżynka. Teraz dzieci stworzą swoje własne &quot;łzy pod mikroskopem&quot;.
                </p>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">Instrukcja dla dzieci:</p>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Narysuj dużą kroplę łzy (lub użyj szablonu)</li>
                    <li>We wnętrzu kropli stwórz unikalne wzory - kreski, kropki, spirale, kształty geometryczne</li>
                    <li>Użyj różnych kolorów - łzy mogą być niebieskie, srebrne, złote, tęczowe</li>
                    <li>Możesz dodać brokat lub cekinki, aby łza błyszczała</li>
                    <li>Każda łza powinna być wyjątkowa - jak Ty!</li>
                  </ol>
                </div>

                <p className="leading-relaxed">
                  Podczas tworzenia rozmawiaj z dziećmi o tym, że <strong>każda łza jest inna, tak jak każdy człowiek i każda emocja</strong>. Płacząc ze smutku, wytwarzamy inne łzy niż płacząc ze szczęścia - wszystkie są piękne i ważne.
                </p>

                <p className="leading-relaxed">
                  Po zakończeniu stwórzcie wspólną wystawę &quot;Galeria łez&quot; - rozwieście prace na ścianie lub podłodze. Każde dziecko może opowiedzieć o swojej łzie.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-600 dark:bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Rozmowa o stereotypach - &quot;Chłopcy nie płaczą?&quot;
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">Czas: 10 minut</p>
                </div>
              </div>
              
              <div className="ml-14 space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Zapytaj dzieci: <strong>&quot;Czy słyszeliście kiedyś, że 'chłopcy nie płaczą' albo 'dziewczynki są płaczliwe'?&quot;</strong> Pozwól na swobodną dyskusję.
                </p>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">Kluczowe przesłania do przekazania:</p>
                  <ul className="space-y-2">
                    <li>
                      <strong>Wszyscy ludzie płaczą</strong> - zarówno chłopcy, jak i dziewczynki, mężczyźni i kobiety
                    </li>
                    <li>
                      <strong>Płacz to nie słabość</strong> - to naturalny sposób wyrażania emocji i dbania o zdrowie
                    </li>
                    <li>
                      <strong>Płacz pomaga</strong> - po wypłakaniu się często czujemy się lepiej i spokojniejsi
                    </li>
                    <li>
                      <strong>Łzy to nie wstyd</strong> - to odwaga pokazania swoich prawdziwych uczuć
                    </li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Powiedz dzieciom: <strong>&quot;Wasze łzy są ważne. Jeśli potrzebujecie płakać - płaczcie. Jeśli widzicie kogoś, kto płacze - nie wyśmiewajcie się, tylko wspierajcie.&quot;</strong>
                </p>

                <p className="leading-relaxed">
                  Możesz zapytać: <strong>&quot;Co możemy powiedzieć komuś, kto płacze?&quot;</strong> Zbierajcie razem pomysły na wspierające słowa (np. &quot;Jestem przy Tobie&quot;, &quot;Mogę Ci pomóc?&quot;, &quot;To w porządku, że płaczesz&quot;).
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-600 dark:bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Podsumowanie i refleksja
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">Czas: 10 minut</p>
                </div>
              </div>
              
              <div className="ml-14 space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Usiądźcie ponownie w kręgu. Zapytaj dzieci: <strong>&quot;Co dzisiaj odkryliście o łzach? Co Was zaskoczyło?&quot;</strong>
                </p>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">Pytania podsumowujące:</p>
                  <ul className="space-y-1">
                    <li>• Czego nowego dowiedzieliście się o łzach?</li>
                    <li>• Jak teraz czujecie się z myślą o płaczu?</li>
                    <li>• Co zapamiętacie z dzisiejszych warsztatów?</li>
                    <li>• Czy macie jakieś pytania o łzy?</li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Zakończ warsztat pozytywnym przesłaniem: <strong>&quot;Pamiętajcie - Wasze łzy są piękne i ważne. Płaczcie, gdy czujecie taką potrzebę. Wspierajcie innych, gdy płaczą. Łzy to niezwykły dar, który pomaga nam być zdrowymi i szczęśliwymi.&quot;</strong>
                </p>

                <p className="leading-relaxed">
                  Zachęć dzieci, aby zabrały swoje prace do domu i opowiedziały rodzicom o tym, czego się dzisiaj nauczyły.
                </p>
              </div>
            </div>
          </section>

          {/* Tips for Facilitators */}
          <section className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Wskazówki dla prowadzącego
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Bezpieczna atmosfera</h3>
                <p>
                  Stwórz przestrzeń, w której dzieci czują się bezpiecznie mówiąc o emocjach. Podkreśl, że nie ma &quot;złych&quot; odpowiedzi i nikt nie musi mówić o swoich łzach, jeśli nie chce. Szanuj granice każdego dziecka.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Normalizacja płaczu</h3>
                <p>
                  Aktywnie zwalczaj stereotypy (np. &quot;chłopcy nie płaczą&quot;). Jeśli masz własne doświadczenia z płaczem (jako dorosły), możesz się nimi podzielić - to pomoże dzieciom zobaczyć, że płacz to naturalna część życia w każdym wieku.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Reakcja na płacz podczas warsztatów</h3>
                <p>
                  Jeśli dziecko zacznie płakać podczas warsztatów, nie panikuj i nie próbuj natychmiast zatrzymać łez. Zapewnij wsparcie (&quot;Jestem tu, to w porządku&quot;), pozwól na wypłakanie się. To może być terapeutyczny moment. Jeśli płacz jest intensywny, zapewnij intymność.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Edukacja oparta na nauce</h3>
                <p>
                  Wykorzystaj ciekawostki naukowe z książki - dzieci uwielbiają fakty! Opowiedz o składzie łez, o tym, jak działają gruczoły łzowe, pokaż zdjęcia łez pod mikroskopem. Nauka pomaga zobiektywizować emocje i zmniejszyć wstyd.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Różnorodność emocji</h3>
                <p>
                  Podkreślaj, że łzy towarzyszą wielu emocjom - nie tylko smutku. Radość, wzruszenie, ulgę, dumę - wszystkie mogą wywołać łzy. To pomoże dzieciom zrozumieć złożoność emocji.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Kontakt z rodzicami</h3>
                <p>
                  Po warsztatach warto poinformować rodziców o temacie zajęć. Możesz przygotować krótką notatkę wyjaśniającą cel warsztatów i zachęcającą do rozmów o emocjach w domu. Rodzice mogą się zaskoczyć, gdy dziecko nagle zacznie mówić o płaczu!
                </p>
              </div>
            </div>
          </section>

          {/* Age Adaptations */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Adaptacje warsztatów dla różnych grup wiekowych
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-cyan-600 dark:border-cyan-400 pl-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Dla młodszych dzieci (6-7 lat)
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Skróć czas czytania, rób więcej przerw na pytania</li>
                  <li>• Uprość wyjaśnienia naukowe - skup się na prostych faktach</li>
                  <li>• Więcej czasu na tworzenie plastyczne, mniej na dyskusję</li>
                  <li>• Użyj prostych przykładów z życia codziennego (&quot;Kiedy spadłeś z roweru, co się stało?&quot;)</li>
                  <li>• Przygotuj gotowe szablony kropli łez do wypełnienia</li>
                </ul>
              </div>

              <div className="border-l-4 border-cyan-600 dark:border-cyan-400 pl-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Dla starszych dzieci (9-10 lat)
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Pogłęb dyskusję o stereotypach płciowych i społecznych normach</li>
                  <li>• Wprowadź więcej informacji naukowych - skład chemiczny łez, działanie gruczołów</li>
                  <li>• Dodaj ćwiczenie pisania: &quot;List do moich łez&quot; - podziękowanie za pomoc w trudnych chwilach</li>
                  <li>• Rozmawiaj o kulturowych różnicach w wyrażaniu emocji (w niektórych kulturach płacz jest bardziej akceptowany)</li>
                  <li>• Możesz wprowadzić element badawczy - obserwacja własnych reakcji na emocje przez tydzień</li>
                </ul>
              </div>

              <div className="border-l-4 border-cyan-600 dark:border-cyan-400 pl-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Dla grup z trudnościami emocjonalnymi
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Przygotuj się na intensywniejsze reakcje emocjonalne</li>
                  <li>• Zapewnij możliwość indywidualnych rozmów po zajęciach</li>
                  <li>• Wprowadź dodatkowe ćwiczenie relaksacyjne na początku lub końcu (oddech, rozluźnienie mięśni)</li>
                  <li>• Podkreślaj pozytywne aspekty płaczu jako mechanizmu radzenia sobie</li>
                  <li>• Współpracuj z psychologiem/pedagogiem szkolnym przy planowaniu i realizacji</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expected Outcomes */}
          <section className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Oczekiwane efekty warsztatów
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Krótkoterminowe
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Dzieci poznają naukowe podstawy płaczu</li>
                  <li>• Zrozumieją, że płacz to naturalna i zdrowa reakcja</li>
                  <li>• Nauczą się rozpoznawać różne emocje wywołujące łzy</li>
                  <li>• Zmniejszy się wstyd związany z płaczem</li>
                  <li>• Wzrośnie empatia wobec płaczących osób</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Długoterminowe
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Większa akceptacja własnych emocji i łez</li>
                  <li>• Zdrowsze radzenie sobie ze stresem poprzez wyrażanie emocji</li>
                  <li>• Zmniejszenie internalizacji szkodliwych stereotypów (&quot;chłopcy nie płaczą&quot;)</li>
                  <li>• Lepsze zrozumienie własnego ciała i procesów emocjonalnych</li>
                  <li>• Większa otwartość w komunikacji o uczuciach</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Materiały uzupełniające
            </h2>

            <div className="space-y-4">
              <Link 
                href="/ksiazki/polezja"
                className="block p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Profil książki &quot;Połezja. O niezwykłej mocy łez&quot;
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Pełny opis, ilustracje i informacje o autorach
                    </div>
                  </div>
                </div>
              </Link>

              <Link 
                href="/artykuly/placz-i-lzy-polezja"
                className="block p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Artykuł: Płacz i łzy - niezwykła moc emocji
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Jak rozmawiać z dzieckiem o płaczu? Przewodnik dla rodziców
                    </div>
                  </div>
                </div>
              </Link>

              <Link 
                href="/artykuly/bajkoterapia"
                className="block p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Wprowadzenie do bajkoterapii
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Teoretyczne podstawy pracy z książką w kontekście terapeutycznym
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-700 dark:to-blue-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Chcesz przeprowadzić te warsztaty?
            </h2>
            <p className="text-xl mb-8 text-cyan-50">
              Zamów książkę &quot;Połezja. O niezwykłej mocy łez&quot; i zacznij odkrywać z dziećmi piękno i moc łez
            </p>
            <Link
              href="https://tusieczyta.pl/pl/zapowiedzi/1478-polezja-o-niezwyklej-mocy-lez-978836708531.html?utm_source=ksiazki-zadania&utm_medium=scenariusz&utm_campaign=polezja-lzy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="secondary" className="bg-white text-cyan-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6">
                Zamów książkę w TusięCzyta
              </Button>
            </Link>
          </section>
        </div>
      </article>
    </Layout>
  );
}