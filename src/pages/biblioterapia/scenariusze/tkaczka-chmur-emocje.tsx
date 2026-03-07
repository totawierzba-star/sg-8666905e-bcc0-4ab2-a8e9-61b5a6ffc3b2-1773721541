import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { BookOpen, Clock, Users, Target, Lightbulb, CheckCircle, Download } from "lucide-react";

export default function TkaczkaChmurEmocje() {
  return (
    <Layout>
      <SEO
        title="Tkaczka Chmur: Podróż przez emocje - Scenariusz warsztatów biblioterapeutycznych"
        description="Kompleksowy scenariusz warsztatów biblioterapeutycznych do książki 'Tkaczka Chmur'. Pomaga dzieciom 6-10 lat nazwać i przejść przez trudne emocje: smutek, gniew, rozpacz."
        image="/uploads/tkaczka1.png"
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/biblioterapia/narzedziownik"
            className="text-sm text-[hsl(var(--brand-primary))] hover:underline mb-4 inline-block"
          >
            ← Powrót do narzędziownika
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              EMOCJE
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Tkaczka Chmur: Podróż przez emocje
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>60-75 minut</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>6-10 lat</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <p className="text-sm text-muted-foreground">Trudne emocje, smutek, gniew, rozpacz</p>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="bg-[hsl(var(--brand-primary))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--brand-primary))]/90 transition-colors font-medium flex items-center gap-2 mb-6"
          >
            <Download className="h-4 w-4" />
            Pobierz scenariusz PDF
          </button>

          <img
            src="/uploads/tkaczka-chmur-okładka.jpg"
            alt="Okładka książki Tkaczka Chmur"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Wprowadzenie */}
          <section className="mb-12 p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-start gap-3">
              <BookOpen className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4 mt-0">O książce i warsztatach</h2>
                <p className="mb-4">
                  „Tkaczka Chmur" Zuzanny Orlińskiej to piękna, metaforyczna baśń o dziewczynce obdarzonej darem
                  tkania rzeczywistości i jej młodszym bracie, który wyrusza w niebezpieczną podróż, by zdobyć
                  lekarstwo dla chorej siostry. Podczas wędrówki chłopiec musi zmierzyć się z trzema wcieleniami
                  złego Czarownika: czarną rzeką smutku, płonącym lasem gniewu i otchłanią rozpaczy.
                </p>
                <p className="mb-4">
                  Warsztat wykorzystuje symbolikę baśni do pomocy dzieciom w rozpoznawaniu, nazywaniu i przechodzeniu
                  przez trudne emocje. Poprzez aktywności plastyczne, teatralne i rozmowę dzieci uczą się, że smutek,
                  gniew i rozpacz są naturalnymi częściami życia, a każdą z tych emocji można pokonać.
                </p>
                <p className="mb-0">
                  <strong>Kluczowe przesłanie:</strong> Trudne emocje nie są wrogiem – są próbami, przez które
                  przechodzimy, by stać się silniejszymi i bardziej odważnymi.
                </p>
              </div>
            </div>
          </section>

          {/* Cel warsztatów */}
          <section className="mb-12">
            <div className="flex items-start gap-3 mb-6">
              <Target className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold mt-0">Cele warsztatów</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span>Rozpoznawanie i nazywanie trudnych emocji (smutek, gniew, rozpacz)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span>Zrozumienie, że trudne emocje są naturalne i każdy je przeżywa</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span>Poznanie konstruktywnych sposobów radzenia sobie z każdą emocją</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span>Budowanie poczucia sprawczości – „potrafię przejść przez trudne chwile"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span>Wzmacnianie więzi w grupie poprzez dzielenie się doświadczeniami</span>
              </li>
            </ul>
          </section>

          {/* Materiały */}
          <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <div className="flex items-start gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold mt-0">Potrzebne materiały</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Materiały plastyczne:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Kartony A3 (po 1 na dziecko)</li>
                  <li>• Farby plakatowe (niebieska, czarna, czerwona, pomarańczowa, żółta)</li>
                  <li>• Pędzle różnej grubości</li>
                  <li>• Kolorowe bibuły (niebieska, szara, czerwona, czarna)</li>
                  <li>• Klej, nożyczki</li>
                  <li>• Kredki, flamastry</li>
                  <li>• Srebrny/złoty brokat (opcjonalnie)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Inne:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Książka „Tkaczka Chmur"</li>
                  <li>• Miękka muzyka instrumentalna</li>
                  <li>• Chusty lub kawałki materiału (niebieski, czerwony, ciemny)</li>
                  <li>• Karteczki i długopisy</li>
                  <li>• Mata lub koce do siedzenia w kręgu</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Przebieg warsztatów */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Przebieg warsztatów</h2>

            {/* Etap 1 */}
            <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4">ETAP 1: Powitanie i wprowadzenie (10 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Krąg opowieści</h4>
                <p className="mb-3">
                  Dzieci siadają w kręgu. Prowadzący pokazuje książkę i pyta:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• „Co widzicie na okładce?"</li>
                  <li>• „Jak myślicie, o czym może być ta historia?"</li>
                  <li>• „Czy ktoś z Was tkał kiedyś coś z nici lub malował chmury?"</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Wprowadzenie do tematu:</h4>
                <p className="italic bg-white dark:bg-gray-800 p-4 rounded">
                  „Dzisiaj poznacie historię o niezwykłej dziewczynce, która potrafi tkać chmury, i jej
                  odważnym bracie. Podczas podróży chłopiec spotka trzech przeciwników: czarną rzekę smutku,
                  płonący las gniewu i otchłań rozpaczy. Czy to brzmi znajomo? Czy kiedykolwiek
                  czuliście smutek jak ciemną wodę? Albo gniew jak ogień?"
                </p>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  Pozwól dzieciom swobodnie dzielić się skojarzeniami. To moment budowania bezpiecznej
                  przestrzeni, w której można mówić o emocjach bez oceniania.
                </p>
              </div>
            </div>

            {/* Etap 2 */}
            <div className="mb-10 p-6 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-4">ETAP 2: Czytanie baśni (15 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Czytanie z przerwami</h4>
                <p className="mb-3">
                  Prowadzący czyta całą baśń lub jej kluczowe fragmenty, robiąc przerwy w momentach:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Gdy chłopiec wchodzi do czarnej rzeki smutku</li>
                  <li>• Gdy spotyka płonący las gniewu</li>
                  <li>• Gdy staje przed otchłanią rozpaczy</li>
                </ul>
                <p className="mt-3">
                  W każdej przerwie pytamy: „Jak myślicie, co teraz poczuł chłopiec? Czy ktoś z Was
                  czuł się kiedyś podobnie?"
                </p>
              </div>

              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  Jeśli dzieci mają trudność z nazywaniem emocji, pomóż im: „Gdy pada deszcz i jest
                  ciemno, niektórzy ludzie czują smutek. A gdy coś nas zdenerwuje, czujemy gniew jak ogień."
                </p>
              </div>
            </div>

            {/* Etap 3 */}
            <div className="mb-10 p-6 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold mb-4">ETAP 3: Trzy próby – rozmowa i identyfikacja (10 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Mapowanie emocji</h4>
                <p className="mb-3">
                  Dzieci otrzymują kartki i rysują trzy kształty reprezentujące emocje:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Czarna rzeka</strong> = Smutek (kiedy jest mi smutno, co czuję w ciele?)</li>
                  <li>• <strong>Płonący las</strong> = Gniew (gdzie w moim ciele czuję złość?)</li>
                  <li>• <strong>Otchłań</strong> = Rozpacz/lęk (jak wygląda moment, gdy czuję się przytłoczony?)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Pytania prowadzące:</h4>
                <ul className="space-y-2 ml-4">
                  <li>• „Czy smutek to zła emocja? Dlaczego płaczemy?"</li>
                  <li>• „Czy gniew jest zawsze destruktywny? Kiedy gniew może nam pomóc?"</li>
                  <li>• „Co sprawia, że czujemy się przytłoczeni? Jak możemy sobie wtedy pomóc?"</li>
                </ul>
              </div>

              <div className="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  Normalizuj emocje: „Wszyscy czasem czujemy smutek, gniew czy lęk. To naturalne.
                  Ważne jest, żebyśmy wiedzieli, jak przez to przejść, tak jak bohater baśni."
                </p>
              </div>
            </div>

            {/* Etap 4 */}
            <div className="mb-10 p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4">ETAP 4: Praktyczne strategie – sztuka i ruch (20 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność 1: Tkanie pomocy (10 min)</h4>
                <p className="mb-3">
                  Każde dziecko tworzy „narzędzie pomocy" dla jednej z trzech prób:
                </p>
                <ul className="space-y-3 ml-4">
                  <li>
                    <strong>Czółno smutku:</strong> Malują łódkę z niebieskiej bibuły – symbol tego,
                    co pomaga nam przepłynąć przez smutek (rozmowa, płacz, przytulenie)
                  </li>
                  <li>
                    <strong>Deszczowa chmura gniewu:</strong> Tworzą chmurę z szarej/niebieskiej bibuły –
                    symbol uspokojenia (głęboki oddech, liczenie do 10, spokój)
                  </li>
                  <li>
                    <strong>Most odwagi:</strong> Malują srebrny/złoty most – symbol nadziei i wsparcia
                    (przyjaźń, pomoc innych, muzyka, taniec)
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność 2: Teatr emocji (10 min)</h4>
                <p className="mb-3">
                  Dzieci w małych grupach (2-3 osoby) odgrywają jedną z prób:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Grupa 1: Czarna rzeka – jak wygląda smutek i jak go przejść?</li>
                  <li>• Grupa 2: Płonący las – jak wygląda gniew i jak go ugasić?</li>
                  <li>• Grupa 3: Otchłań – jak pokonać strach i beznadzieję?</li>
                </ul>
                <p className="mt-3">
                  Używają chust (niebieska = rzeka, czerwona = ogień, ciemna = otchłań) jako rekwizytów.
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  To moment, w którym dzieci eksperymentują z emocjami w bezpieczny sposób.
                  Zachęcaj je do wyrażania emocji przez ruch, dźwięk i mimikę.
                </p>
              </div>
            </div>

            {/* Etap 5 */}
            <div className="mb-10 p-6 bg-pink-50 dark:bg-pink-950/20 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-xl font-bold mb-4">ETAP 5: Moje narzędzia – osobista mapa emocji (10 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Tworzenie osobistej mapy</h4>
                <p className="mb-3">
                  Każde dziecko rysuje swoją mapę emocji na kartonie A3:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• W środku siebie (postać lub symbol)</li>
                  <li>• Wokół: trzy emocje (rzeka, las, otchłań)</li>
                  <li>• Nad każdą emocją: narzędzia pomocy (czółno, chmura, most)</li>
                </ul>
                <p className="mt-3">
                  Dzieci mogą dopisać własne słowa lub symbole: „Gdy jestem smutny, rozmawiam z mamą",
                  „Gdy jestem zły, liczę do 10", „Gdy się boję, myślę o czymś dobrym".
                </p>
              </div>

              <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  To kluczowy moment – dzieci tworzą konkretne narzędzie, które mogą zabrać do domu
                  i używać w trudnych chwilach. Pomóż im skonkretyzować strategie.
                </p>
              </div>
            </div>

            {/* Etap 6 */}
            <div className="mb-10 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-bold mb-4">ETAP 6: Podsumowanie i refleksja (10 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Krąg zamknięcia</h4>
                <p className="mb-3">
                  Dzieci siadają w kręgu z własnymi mapami emocji. Każde dziecko może podzielić się
                  (jeśli chce) jednym odkryciem:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• „Dziś dowiedziałem/am się, że..."</li>
                  <li>• „Najbardziej podobało mi się..."</li>
                  <li>• „Kiedy będę smutny/zły/przestraszony, zrobię..."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Przesłanie na zakończenie:</h4>
                <p className="italic bg-white dark:bg-gray-800 p-4 rounded">
                  „Pamiętajcie – tak jak chłopiec z baśni, każdy z Was ma w sobie odwagę, by przejść
                  przez trudne emocje. Smutek nie jest wrogiem – to rzeka, którą można przepłynąć.
                  Gniew nie jest złem – to ogień, który można ugasić. Rozpacz nie jest końcem – to
                  otchłań, nad którą można zbudować most. A wasza siostra-tkaczka (wasza wyobraźnia,
                  kreatywność, nadzieja) zawsze pomoże wam znaleźć drogę."
                </p>
              </div>

              <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  Zachęć dzieci, by zabrały swoje mapy emocji do domu i pokazały rodzicom.
                  Możesz dać im małą kartkę z przypomnieniem: „Gdy czuję trudną emocję, mogę..."
                </p>
              </div>
            </div>
          </section>

          {/* Wskazówki dla prowadzącego */}
          <section className="mb-12 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4">Wskazówki dla prowadzącego</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">1.</span>
                <span>
                  <strong>Normalizuj emocje:</strong> Powtarzaj, że wszystkie emocje są OK. Nie ma złych emocji,
                  są tylko różne sposoby wyrażania ich.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">2.</span>
                <span>
                  <strong>Bądź uważny na sygnały:</strong> Niektóre dzieci mogą przeżywać intensywne emocje
                  podczas warsztatów. Miej przygotowane „miejsce spokoju" – kącik z poduszkami, gdzie dziecko
                  może się wyciszyć.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">3.</span>
                <span>
                  <strong>Używaj języka metafor:</strong> Dzieci lepiej rozumieją emocje przez obrazy
                  (rzeka, ogień, otchłań) niż przez abstrakcyjne definicje.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">4.</span>
                <span>
                  <strong>Daj przestrzeń na ruch:</strong> Emocje są energią w ciele. Pozwól dzieciom się
                  poruszać, tańczyć, gestykulować podczas teatru emocji.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">5.</span>
                <span>
                  <strong>Współpraca z rodzicami:</strong> Po warsztatach prześlij rodzicom krótką informację
                  o tym, czego dzieci się nauczyły, i zachęć ich do rozmów o emocjach w domu.
                </span>
              </li>
            </ul>
          </section>

          {/* Adaptacje */}
          <section className="mb-12 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Adaptacje dla różnych grup</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Dla młodszych dzieci (4-6 lat):</h3>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Skróć czytanie do 10 minut, czytaj fragmentami</li>
                  <li>• Więcej aktywności ruchowych, mniej pracy plastycznej</li>
                  <li>• Prostsze pytania: „Jak się czujesz, gdy jesteś smutny?"</li>
                  <li>• Użyj dużych, prostych rysunków zamiast szczegółowych map</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dla starszych dzieci (10-12 lat):</h3>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Dodaj etap pisania – każde dziecko pisze krótki list do siebie na trudne chwile</li>
                  <li>• Wprowadź dyskusję o strategiach radzenia sobie w różnych sytuacjach (szkoła, dom, rówieśnicy)</li>
                  <li>• Zachęć do głębszej refleksji: „Jak myślisz, dlaczego Zorza przecięła nić życia dziewczynki?"</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dla dzieci z doświadczeniem traumy:</h3>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Współpracuj z psychologiem/terapeutą dziecka</li>
                  <li>• Daj możliwość wycofania się z aktywności bez presji</li>
                  <li>• Przygotuj „hasło bezpieczeństwa" – gdy dziecko je wypowie, może zrobić przerwę</li>
                  <li>• Miej przygotowany kontakt do specjalisty na wypadek silnych reakcji emocjonalnych</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Efekty warsztatów */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oczekiwane efekty warsztatów</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <h3 className="font-semibold mb-3">Krótkoterminowe:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Dzieci potrafią nazwać trzy trudne emocje: smutek, gniew, rozpacz</li>
                  <li>✓ Znają przynajmniej jedną strategię radzenia sobie z każdą emocją</li>
                  <li>✓ Czują się bezpieczniej mówiąc o swoich uczuciach</li>
                  <li>✓ Mają konkretne narzędzie (mapę emocji) do użycia w domu</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <h3 className="font-semibold mb-3">Długoterminowe:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Rozwinięta inteligencja emocjonalna i samoświadomość</li>
                  <li>✓ Lepsza regulacja emocji w trudnych sytuacjach</li>
                  <li>✓ Większe poczucie sprawczości – „Potrafię sobie poradzić"</li>
                  <li>✓ Otwartość na rozmowy o emocjach z rodzicami i nauczycielami</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Chcesz przeprowadzić te warsztaty?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kup książkę „Tkaczka Chmur" i odkryj pełną historię o pokonywaniu trudnych emocji.
                Piękna baśń, która pomaga dzieciom zrozumieć, że każdą emocję można przejść.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://tusieczyta.pl/pl/glowna/1233-tkaczka-chmur-wyd-2-9788367085199.html?utm_source=ksiazki-do-zadan&utm_medium=workshop&utm_campaign=tkaczka-chmur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[hsl(var(--brand-primary))] text-white px-8 py-4 rounded-lg hover:bg-[hsl(var(--brand-primary))]/90 transition-colors font-medium text-lg"
                >
                  Kup książkę „Tkaczka Chmur"
                </Link>
                <Link
                  href="/ksiazki/tkaczka-chmur"
                  className="text-[hsl(var(--brand-primary))] hover:underline font-medium"
                >
                  Zobacz więcej o książce →
                </Link>
              </div>
            </div>
          </section>

          {/* Materiały do pobrania */}
          <section className="mt-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Materiały uzupełniające</h2>
            <p className="mb-4">
              Chcesz pogłębić temat trudnych emocji u dzieci? Przeczytaj nasz artykuł:
            </p>
            <Link
              href="/artykuly/trudne-emocje-tkaczka-chmur"
              className="inline-flex items-center gap-2 text-[hsl(var(--brand-primary))] hover:underline font-medium"
            >
              Jak pomóc dziecku radzić sobie z trudnymi emocjami? →
            </Link>
          </section>
        </div>
      </article>
    </Layout>
  );
}