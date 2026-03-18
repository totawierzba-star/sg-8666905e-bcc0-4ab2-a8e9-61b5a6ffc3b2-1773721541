import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { BookOpen, Clock, Users, Target, Lightbulb, CheckCircle, Download } from "lucide-react";

export default function MrowkiUtrataPracy() {
  return (
    <Layout>
      <SEO
        title="Mrówki: Gdy rodzic traci pracę - Scenariusz warsztatów biblioterapeutycznych"
        description="Kompleksowy scenariusz warsztatów biblioterapeutycznych do książki 'Mrówki'. Pomaga dzieciom 6-10 lat zrozumieć sytuację utraty pracy przez rodzica i radzić sobie z kryzysami rodzinnymi."
        image="/uploads/okłdkamrowki.jpg"
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
            <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-medium">
              KRYZYS RODZINNY
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Mrówki: Gdy rodzic traci pracę
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
              <p className="text-sm text-muted-foreground">Utrata pracy rodzica, kryzysy życiowe dorosłych, wsparcie rodzinne</p>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2 mb-6 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            <Download className="h-4 w-4" />
            Pobierz scenariusz PDF
          </button>

          <img
            src="/uploads/okłdkamrowki.jpg"
            alt="Okładka książki Mrówki"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Wprowadzenie */}
          <section className="mb-12 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-600">
            <div className="flex items-start gap-3">
              <BookOpen className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4 mt-0">O książce i warsztatach</h2>
                <p className="mb-4">
                  „Mrówki" Anny Augustyniak to wzruszająca historia o rodzinie, która musi zmierzyć się z utratą pracy przez jednego z rodziców. Bohaterką jest Gaja, dziewczynka, która z fascynacją obserwuje świat dorosłych i zapisuje swoje spostrzeżenia w tajnym notesie.
                </p>
                <p className="mb-4">
                  Gdy do domu Gai wkraczają mrówki, tata zaczyna z nimi walczyć – zastawia pułapki, szuka informacji, spędza coraz więcej czasu w kuchni. Dziewczynka stopniowo odkrywa prawdę: mrówki nie są prawdziwym problemem. Tata stracił pracę, a walka z owadami stała się dla niego sposobem na radzenie sobie ze stresem i trudnymi emocjami.
                </p>
                <p className="mb-0">
                  <strong>Kluczowe przesłanie:</strong> Trudności jednego członka rodziny wpływają na wszystkich, ale dzięki rozmowie, wzajemnemu wsparciu i szczerości można je pokonać. Dorośli też się boją i nie zawsze wiedzą, jak rozwiązać swoje problemy – i to jest w porządku.
                </p>
              </div>
            </div>
          </section>

          {/* Cel warsztatów */}
          <section className="mb-12">
            <div className="flex items-start gap-3 mb-6">
              <Target className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold mt-0">Cele warsztatów</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <span>Zrozumienie, że utrata pracy to normalny kryzys życiowy, który może spotkać każdego</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <span>Rozpoznanie, że dorośli również przeżywają strach, niepewność i trudne emocje</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <span>Nauka, że problemy w rodzinie można rozwiązać poprzez rozmowę i wsparcie</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <span>Identyfikacja własnych „mrówek" – małych i dużych problemów, które nas niepokoją</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <span>Budowanie poczucia, że dziecko też może wspierać rodzinę – nie musi być tylko obserwatorem</span>
              </li>
            </ul>
          </section>

          {/* Materiały */}
          <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <div className="flex items-start gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold mt-0">Potrzebne materiały</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Materiały plastyczne:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Kartony A3 (po 1 na dziecko)</li>
                  <li>• Kolorowe kartki (różne kolory)</li>
                  <li>• Kredki, flamastry, ołówki</li>
                  <li>• Klej, nożyczki</li>
                  <li>• Naklejki w kształcie mrówek (opcjonalnie)</li>
                  <li>• Biała kreda lub marker do tablicy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Inne:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Książka „Mrówki" Anna Augustyniak</li>
                  <li>• Tablica lub flipchart</li>
                  <li>• Karteczki samoprzylepne (post-it)</li>
                  <li>• Pudełko lub woreczek (na „mrówki-problemy")</li>
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
                <h4 className="font-semibold mb-2">Aktywność: Krąg obserwacji</h4>
                <p className="mb-3">
                  Dzieci siadają w kręgu. Prowadzący pokazuje książkę i pyta:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• „Co widzicie na okładce? Kto to jest?"</li>
                  <li>• „Czy ktoś z Was widział kiedyś mrówki w domu? Co one robiły?"</li>
                  <li>• „Czy uważacie, że mrówki to problem? Dlaczego tak/nie?"</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Wprowadzenie do tematu:</h4>
                <p className="italic bg-white dark:bg-gray-800 p-4 rounded">
                  „Dzisiaj poznacie historię Gai, która jest świetną obserwatorką. Pewnego dnia do jej domu przychodzą mrówki i nagle tata zaczyna spędzać mnóstwo czasu w kuchni, walcząc z nimi... Ale czy naprawdę chodzi o mrówki? Czy może o coś zupełnie innego?"
                </p>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  Zachęć dzieci do dzielenia się doświadczeniami z „inwazją" owadów w domu. To łagodny sposób wprowadzenia do tematu bez natychmiastowego poruszania trudnego tematu utraty pracy.
                </p>
              </div>
            </div>

            {/* Etap 2 */}
            <div className="mb-10 p-6 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-4">ETAP 2: Czytanie książki (15 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Czytanie z przerwami</h4>
                <p className="mb-3">
                  Prowadzący czyta całą książkę lub kluczowe fragmenty, robiąc przerwy w momentach:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Gdy pojawiają się pierwsze mrówki – „Co myślicie, dlaczego Gaja je obserwuje?"</li>
                  <li>• Gdy tata zaczyna walczyć z mrówkami – „Dlaczego tata tyle czasu spędza w kuchni?"</li>
                  <li>• Gdy Gaja odkrywa prawdę o utracie pracy – „Jak myślicie, co teraz czuje tata? A Gaja?"</li>
                  <li>• Gdy rodzina rozmawia o problemie – „Co pomogło rodzinie?"</li>
                </ul>
              </div>

              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  Dzieci mogą identyfikować się z Gają – ona też nie od razu wie, co się dzieje. Pozwól im razem z bohaterką „odkrywać" problem. To normalizuje uczucie bycia zdezorientowanym, gdy dorośli coś ukrywają.
                </p>
              </div>
            </div>

            {/* Etap 3 */}
            <div className="mb-10 p-6 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold mb-4">ETAP 3: Moje mrówki – identyfikacja problemów (15 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Burza mózgów – Czym są „mrówki"?</h4>
                <p className="mb-3">
                  Prowadzący rysuje dużą mrówkę na tablicy i pyta:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• „W książce mrówki były symbolem problemu. Jakie problemy mogą mieć dorośli?"</li>
                  <li>• „Jakie małe lub duże problemy możecie mieć Wy?"</li>
                  <li>• „Co sprawia, że czasem dorośli zachowują się dziwnie lub są smutni?"</li>
                </ul>
                <p className="mt-3">
                  Dzieci wrzucają pomysły, a prowadzący zapisuje je na tablicy wokół mrówki:
                  <br/><em>Przykłady: „stracił pracę", „boli go głowa", „pokłócił się z kimś", „stresuje się", „nie ma pieniędzy", „martwi się o kogoś"</em>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Moje własne mrówki</h4>
                <p className="mb-3">
                  Każde dziecko dostaje kilka małych karteczek (post-it) w kształcie mrówek (lub po prostu żółte karteczki). 
                  Rysuje lub zapisuje swoje „mrówki" – problemy, które je niepokoją:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Małe mrówki:</strong> „Zapomniałem zeszytu", „Pokłóciłem się z kolegą"</li>
                  <li>• <strong>Duże mrówki:</strong> „Tata się martwi", „Mama jest smutna", „Rodzice się kłócą"</li>
                </ul>
                <p className="mt-3">
                  Dzieci mogą (ale nie muszą) podzielić się swoimi „mrówkami" z grupą i wrzucić je do wspólnego pudełka.
                </p>
              </div>

              <div className="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  Niektóre dzieci mogą ujawnić poważne problemy domowe. Bądź uważny i empatyczny. Jeśli pojawi się sygnał krzywdzenia lub zaniedbania, skontaktuj się z odpowiednimi służbami (psycholog szkolny, pedagog).
                </p>
              </div>
            </div>

            {/* Etap 4 */}
            <div className="mb-10 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-bold mb-4">ETAP 4: Co pomaga? Tworzenie mapy wsparcia (15 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność 1: Co pomogło rodzinie Gai? (5 min)</h4>
                <p className="mb-3">
                  Prowadzący pyta dzieci:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• „Jak rodzina Gai poradziła sobie z problemem?"</li>
                  <li>• „Co zrobiła Gaja, co pomogło tacie?"</li>
                  <li>• „Dlaczego rozmowa była ważna?"</li>
                </ul>
                <p className="mt-3">
                  Prowadzący zapisuje odpowiedzi na tablicy:
                  <br/><em>Przykłady: rozmowa, szczerość, wspólne szukanie rozwiązania, wsparcie rodziny, okazanie uczuć</em>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność 2: Moja mapa wsparcia (10 min)</h4>
                <p className="mb-3">
                  Każde dziecko rysuje swoją „mapę wsparcia" na kartonie A3:
                </p>
                <ul className="space-y-3 ml-4">
                  <li>
                    <strong>W środku:</strong> Rysuję siebie
                  </li>
                  <li>
                    <strong>Wokół siebie:</strong> Osoby, które mi pomagają, gdy mam problem (mama, tata, babcia, nauczyciel, przyjaciel, psycholog)
                  </li>
                  <li>
                    <strong>Pod każdą osobą:</strong> Jak ta osoba mi pomaga? (np. „Mama mnie przytula", „Tata ze mną rozmawia", „Kolega bawi się ze mną")
                  </li>
                  <li>
                    <strong>Na dole:</strong> Co mogę zrobić SAM/A, gdy jestem smutny/a lub zły/a? (rysować, biegać, czytać, płakać, przytulić maskotkę)
                  </li>
                </ul>
              </div>

              <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  To kluczowy moment – dzieci tworzą konkretne narzędzie wsparcia. Jeśli dziecko nie wie, kto mu pomaga, delikatnie zasugeruj osoby (nauczyciel, kolega, sąsiad). Każde dziecko powinno mieć przynajmniej 2-3 osoby na mapie.
                </p>
              </div>
            </div>

            {/* Etap 5 */}
            <div className="mb-10 p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4">ETAP 5: Jak mogę pomóc dorosłym? (10 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Rozmowa w kręgu</h4>
                <p className="mb-3">
                  Dzieci siadają w kręgu. Prowadzący pyta:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• „Co Gaja zrobiła dla taty w książce?"</li>
                  <li>• „Czy dziecko może pomóc dorosłemu, który ma problem?"</li>
                  <li>• „Jak możecie pomóc, gdy mama/tata jest smutny/a lub zdenerwowany/a?"</li>
                </ul>
                <p className="mt-3">
                  Prowadzący normalizuje rolę dziecka jako osoby wspierającej (ale nie odpowiedzialnej za rozwiązanie problemu):
                </p>
                <ul className="space-y-2 ml-4 mt-2">
                  <li>✓ „Możesz zapytać: Czy wszystko w porządku? Mogę ci pomóc?"</li>
                  <li>✓ „Możesz przytulić mamę/tatę, gdy są smutni"</li>
                  <li>✓ „Możesz powiedzieć: Kocham cię, będzie dobrze"</li>
                  <li>✓ „Możesz pomóc w domu (posprzątać, zrobić kolację)"</li>
                  <li>✗ „Ale NIE jesteś odpowiedzialny/a za rozwiązanie problemu dorosłych"</li>
                  <li>✗ „NIE musisz ukrywać swoich uczuć, żeby nie martwić rodziców"</li>
                </ul>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  To bardzo delikatny moment. Upewnij się, że dzieci rozumieją: mogą wspierać, ale nie są odpowiedzialne za szczęście dorosłych. Jeśli czujesz, że dziecko bierze na siebie zbyt dużą odpowiedzialność, porozmawiaj z nim indywidualnie po warsztatach.
                </p>
              </div>
            </div>

            {/* Etap 6 */}
            <div className="mb-10 p-6 bg-pink-50 dark:bg-pink-950/20 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-xl font-bold mb-4">ETAP 6: Podsumowanie i refleksja (10 minut)</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Aktywność: Krąg zamknięcia</h4>
                <p className="mb-3">
                  Dzieci siadają w kręgu z własnymi mapami wsparcia. Każde dziecko może podzielić się (jeśli chce) jednym odkryciem:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• „Dziś dowiedziałem/am się, że..."</li>
                  <li>• „Najbardziej podobało mi się..."</li>
                  <li>• „Kiedy będę mieć problem, zrobię..."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Przesłanie na zakończenie:</h4>
                <p className="italic bg-white dark:bg-gray-800 p-4 rounded">
                  „Pamiętajcie – tak jak w książce o Gai, w życiu czasem pojawiają się małe lub większe „mrówki" – problemy, które wydają się nie do opanowania. To normalne. Dorośli też czasem nie wiedzą, co robić. Ale najważniejsze jest wsparcie bliskich, szczera rozmowa i wspólne szukanie rozwiązania. I pamiętajcie – to NIE wasz obowiązek rozwiązywać problemy dorosłych, ale MOŻECIE ich wspierać swoją obecnością i miłością."
                </p>
              </div>

              <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded">
                <p className="font-semibold mb-2">💡 Wskazówka dla prowadzącego:</p>
                <p className="text-sm">
                  Zachęć dzieci, by zabrały swoje mapy wsparcia do domu i pokazały rodzicom. Możesz dać im małą kartkę z przypomnieniem: „Gdy mam problem, mogę porozmawiać z..." + lista osób.
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
                  <strong>Normalizuj kryzysy:</strong> Powtarzaj, że utrata pracy, trudności finansowe czy inne problemy to normalne życiowe sytuacje, które mogą spotkać każdego.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">2.</span>
                <span>
                  <strong>Bądź uważny na dzieci z doświadczeniem kryzysu:</strong> Niektóre dzieci mogą przechodzić przez utratę pracy rodzica w tym momencie. Obserwuj reakcje i oferuj indywidualne wsparcie po warsztatach.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">3.</span>
                <span>
                  <strong>Używaj języka metafor:</strong> Dzieci lepiej rozumieją problemy przez obrazy (mrówki = małe/duże problemy) niż przez abstrakcyjne definicje typu „kryzys ekonomiczny".
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">4.</span>
                <span>
                  <strong>Balans odpowiedzialności:</strong> Pomóż dzieciom zrozumieć, że mogą wspierać, ale nie są odpowiedzialne za szczęście dorosłych. To kluczowe dla ich zdrowia psychicznego.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">5.</span>
                <span>
                  <strong>Współpraca z rodzicami:</strong> Po warsztatach prześlij rodzicom krótką informację o tym, czego dzieci się nauczyły, i zachęć ich do rozmów o trudnościach w sposób dostosowany do wieku dziecka.
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
                  <li>• Skróć czytanie do 10 minut, czytaj fragmentami z obrazkami</li>
                  <li>• Więcej prostych aktywności ruchowych (udawanie mrówek, chowanie się)</li>
                  <li>• Prostsze pytania: „Jak się czujesz, gdy mama/tata jest smutny/a?"</li>
                  <li>• Zamiast mapy wsparcia – rysowanie „kto mi pomaga" z prostymi obrazkami</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dla starszych dzieci (10-12 lat):</h3>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Dodaj etap pisania – każde dziecko pisze krótki list do kogoś, kto przeżywa kryzys</li>
                  <li>• Wprowadź dyskusję o strategiach radzenia sobie z kryzysami finansowymi (oszczędzanie, zmiana stylu życia)</li>
                  <li>• Zachęć do głębszej refleksji: „Jak myślisz, co czuł tata, gdy stracił pracę?"</li>
                  <li>• Omów różne rodzaje kryzysów (choroba, przeprowadzka, zmiana szkoły)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dla dzieci aktualnie przeżywających kryzys rodzinny:</h3>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Współpracuj z psychologiem/pedagogiem szkolnym dziecka</li>
                  <li>• Daj możliwość wycofania się z aktywności bez presji</li>
                  <li>• Przygotuj „hasło bezpieczeństwa" – gdy dziecko je wypowie, może zrobić przerwę</li>
                  <li>• Miej przygotowany kontakt do specjalisty na wypadek silnych reakcji emocjonalnych</li>
                  <li>• Oferuj indywidualne wsparcie po warsztatach</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Efekty warsztatów */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oczekiwane efekty warsztatów</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                <h3 className="font-semibold mb-3">Krótkoterminowe:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Dzieci rozumieją, że utrata pracy to normalny życiowy kryzys</li>
                  <li>✓ Potrafią nazwać swoje „mrówki" – problemy, które je niepokoją</li>
                  <li>✓ Znają przynajmniej 2-3 osoby, które mogą im pomóc</li>
                  <li>✓ Czują się bezpieczniej mówiąc o trudnościach rodzinnych</li>
                  <li>✓ Mają konkretne narzędzie (mapę wsparcia) do użycia w domu</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                <h3 className="font-semibold mb-3">Długoterminowe:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Rozwinięta empatia wobec trudności dorosłych</li>
                  <li>✓ Lepsza komunikacja z rodzicami o trudnych tematach</li>
                  <li>✓ Większe poczucie sprawczości – „Mogę wspierać, ale nie jestem odpowiedzialny/a"</li>
                  <li>✓ Budowanie resilience (odporności psychicznej) na kryzysy</li>
                  <li>✓ Otwartość na szukanie pomocy u innych osób (nie tylko rodziców)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Chcesz przeprowadzić te warsztaty?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kup książkę „Mrówki" i odkryj pełną historię o radzeniu sobie z kryzysami rodzinnymi.
                Wzruszająca opowieść, która pomaga dzieciom zrozumieć, że trudności można pokonać wspólnie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://tusieczyta.pl/pl/ksiazki-dla-dzieci/1259-mrowki-9788367085229.html?utm_source=ksiazki-do-zadan&utm_medium=workshop&utm_campaign=mrowki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Kup książkę „Mrówki"
                </a>
                <Link
                  href="/ksiazki/mrowki"
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
              Chcesz pogłębić temat utraty pracy rodzica i kryzysów życiowych? Przeczytaj nasz artykuł:
            </p>
            <Link
              href="/artykuly/jak-rozmawiac-o-utracie-pracy-mrowki"
              className="inline-flex items-center gap-2 text-[hsl(var(--brand-primary))] hover:underline font-medium"
            >
              Jak rozmawiać z dzieckiem o utracie pracy rodzica? →
            </Link>
          </section>
        </div>
      </article>
    </Layout>
  );
}