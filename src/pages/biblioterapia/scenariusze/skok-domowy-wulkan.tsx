import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { BookOpen, Clock, Users, Target, Lightbulb, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ScenariuszSkokDomowyWulkan() {
  return (
    <Layout>
      <SEO
        title="Scenariusz warsztatów: Skok - Mój domowy wulkan | Narzędziownik biblioterapeutyczny"
        description="Gotowy scenariusz zajęć biblioterapeutycznych z książką 'Skok' dla dzieci 6-10 lat. Praca z emocjami, ADHD i nadpobudliwością przez zabawę i ruch."
        image="/uploads/skokokładka.jpg"
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">
              Strona główna
            </Link>
            {" / "}
            <Link href="/biblioterapia" className="hover:text-foreground transition-colors">
              Biblioterapia
            </Link>
            {" / "}
            <Link href="/biblioterapia/narzedziownik" className="hover:text-foreground transition-colors">
              Narzędziownik
            </Link>
            {" / "}
            <span className="text-foreground">Skok: Mój domowy wulkan</span>
          </nav>

          <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium mb-4">
            <BookOpen className="inline-block w-4 h-4 mr-1" />
            SCENARIUSZ WARSZTATÓW
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Skok: Mój domowy wulkan
          </h1>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Scenariusz warsztatów biblioterapeutycznych z wykorzystaniem książki "Skok" — 
            dla dzieci 6-10 lat, które potrzebują wsparcia w rozumieniu i wyrażaniu emocji, 
            szczególnie w kontekście nadpobudliwości i ADHD.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold">Czas trwania</span>
              </div>
              <p className="text-sm text-muted-foreground">60-75 minut</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold">Grupa docelowa</span>
              </div>
              <p className="text-sm text-muted-foreground">Dzieci 6-10 lat (max 12 osób)</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold">Temat</span>
              </div>
              <p className="text-sm text-muted-foreground">Emocje, ADHD, harmonia rodzinna</p>
            </Card>
          </div>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium mb-8"
          >
            <Download className="h-4 w-4" />
            Pobierz scenariusz PDF
          </button>

          <img
            src="/uploads/skokokładka.jpg"
            alt="Okładka książki Skok"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4 mt-0 flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              Cele warsztatów
            </h2>
            <ul className="space-y-2 mb-0">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span>Rozpoznawanie i nazywanie własnych emocji oraz potrzeb</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span>Zrozumienie, że nadpobudliwość/energia to część osobowości, nie wada</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span>Oswojenie metafory "skaczącego domu" jako sposobu na mówienie o ADHD</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span>Nauczenie się strategii radzenia sobie z nadmiarem energii</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span>Budowanie empatii wobec siebie i innych członków rodziny</span>
              </li>
            </ul>
          </Card>

          <h2>Materiały i przygotowanie</h2>
          
          <h3>Potrzebne materiały:</h3>
          <ul>
            <li>Książka <Link href="/ksiazki/skok" className="text-purple-600 dark:text-purple-400 hover:underline">"Skok"</Link></li>
            <li>Kolorowe kartki (A4 i A5)</li>
            <li>Kredki, mazaki, flamastry</li>
            <li>Duży arkusz papieru lub tablica flipchart</li>
            <li>Piłka miękka lub worek z grochem (do aktywności ruchowej)</li>
            <li>Balony (opcjonalnie, do wizualizacji emocji)</li>
            <li>Karteczki samoprzylepne (post-it)</li>
          </ul>

          <h3>Przygotowanie sali:</h3>
          <ul>
            <li>Przestrzeń pozwalająca na swobodny ruch (skoki, bieganie)</li>
            <li>Krzesła w kręgu lub poduszki na podłodze</li>
            <li>Wolna przestrzeń do aktywności grupowych</li>
          </ul>

          <h2>Przebieg warsztatów</h2>

          <h3>I. Powitanie i rozgrzewka ruchowa (10 minut)</h3>
          
          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 my-6 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-3">Aktywność: "Jak dziś się czuję?"</h4>
            <p className="mb-3">
              Dzieci siadają w kręgu. Prowadzący tłumaczy, że dziś będziemy rozmawiać o emocjach 
              i energii, która czasem jest w nas taka duża, że chce "skakać".
            </p>
            <p className="mb-3"><strong>Rozgrzewka ruchowa:</strong></p>
            <ul className="space-y-2">
              <li>Każde dziecko pokazuje ruchem, jak się dziś czuje (np. skoki = energia, powolne ruchy = zmęczenie)</li>
              <li>Grupa powtarza za danym dzieckiem jego ruch</li>
              <li>Prowadzący pyta: "Co oznacza twój ruch? Jak się dziś czujesz?"</li>
            </ul>
            <p className="mt-3 text-sm italic">
              Cel: Oswojenie z tematem emocji, pozwolenie na ruch od początku zajęć
            </p>
          </div>

          <h3>II. Czytanie książki "Skok" z przerwami (20 minut)</h3>

          <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 my-6 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold mb-3">Wrażeniowe czytanie z interakcją</h4>
            <p className="mb-3">
              Prowadzący czyta książkę, robiąc przerwy w kluczowych momentach, by zadać pytania 
              lub zachęcić dzieci do krótkiej aktywności.
            </p>
            
            <p className="mb-2"><strong>Punkt przerwania 1:</strong> Gdy dom zaczyna skakać</p>
            <ul className="mb-4 space-y-1">
              <li><strong>Pytanie:</strong> "Czy waszemu domowi zdarza się czasem 'skakać'? Kiedy?"</li>
              <li><strong>Aktywność:</strong> Dzieci robią kilka skoków na miejscu, naśladując Dom</li>
            </ul>

            <p className="mb-2"><strong>Punkt przerwania 2:</strong> Projekt o wulkanach i napięcie podczas odrabiania lekcji</p>
            <ul className="mb-4 space-y-1">
              <li><strong>Pytanie:</strong> "Czy było u was tak, że wszystko szło nie tak, jak powinno? Co wtedy czuliście?"</li>
              <li><strong>Aktywność:</strong> Dzieci rysują szybki szkic "wulkanu emocji" — co sprawia, że emocje wybuchają</li>
            </ul>

            <p className="mb-2"><strong>Punkt przerwania 3:</strong> Babcia mówi, że mama jest "przeradowana"</p>
            <ul className="mb-4 space-y-1">
              <li><strong>Pytanie:</strong> "Co to znaczy być 'przeradowanym'? Czy dorośli w waszym domu też tak się czują?"</li>
              <li><strong>Dyskusja:</strong> Prowadzący tłumaczy, że wszyscy w rodzinie mają swoje potrzeby</li>
            </ul>

            <p className="mb-2"><strong>Punkt przerwania 4:</strong> Kolacja i rozmowa o "ciężkiej głowie"</p>
            <ul className="space-y-1">
              <li><strong>Pytanie:</strong> "Co to znaczy 'ciężka głowa'? Kiedy jest wam ciężko?"</li>
              <li><strong>Aktywność:</strong> Dzieci podają przykłady sytuacji, gdy czują "ciężar"</li>
            </ul>

            <p className="mt-3 text-sm italic">
              Cel: Emocjonalne zaangażowanie w historię, oswojenie z językiem metafor
            </p>
          </div>

          <h3>III. Rozmowa poczytaniowa: "Mój skaczący dom" (15 minut)</h3>

          <div className="bg-amber-50 dark:bg-amber-950 rounded-lg p-6 my-6 border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold mb-3">Pytania do refleksji</h4>
            <p className="mb-3">Dzieci siadają w kręgu. Prowadzący zadaje pytania otwarte:</p>
            
            <ol className="space-y-3">
              <li>
                <strong>1. Dlaczego Dom skacze?</strong>
                <p className="text-sm ml-4">Odpowiedź: Bo potrzebuje ruchu, energii, zabawy — tak jak niektóre dzieci</p>
              </li>
              <li>
                <strong>2. Czy skakanie Domu to coś złego?</strong>
                <p className="text-sm ml-4">Odpowiedź: Nie, to część jego natury. Ale trzeba się nauczyć z nim żyć</p>
              </li>
              <li>
                <strong>3. Co pomogło rodzinie w książce?</strong>
                <p className="text-sm ml-4">Odpowiedź: Rozmowa, zrozumienie potrzeb, nowe zasady</p>
              </li>
              <li>
                <strong>4. Czy znacie kogoś, kto ma "skaczący dom" w sobie?</strong>
                <p className="text-sm ml-4">Prowadzący zachęca do empatii: wszyscy mamy różne potrzeby</p>
              </li>
            </ol>

            <p className="mt-4 text-sm italic">
              Cel: Budowanie rozumienia i akceptacji dla siebie i innych
            </p>
          </div>

          <h3>IV. Aktywność twórcza: "Mój wulkan emocji" (20 minut)</h3>

          <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 my-6 border border-red-200 dark:border-red-800">
            <h4 className="font-semibold mb-3">Warsztat plastyczny</h4>
            <p className="mb-3">
              Każde dziecko dostaje kolorową kartkę i kredki. Zadanie: narysować swój "wulkan emocji".
            </p>
            
            <p className="mb-2"><strong>Instrukcja dla dzieci:</strong></p>
            <ul className="space-y-2 mb-4">
              <li>Narysuj wulkan</li>
              <li>W środku napisz/narysuj, co sprawia, że "wulkan" w tobie narasta (np. zmęczenie, za dużo zadań, kłótnie)</li>
              <li>Na zewnątrz wulkanu napisz, co dzieje się, gdy wybuchnie (np. płacz, krzyk, zamknięcie się w pokoju)</li>
              <li>Przy wulkanie narysuj, co pomaga ci się "ochłodzić" (np. przytulenie, spacer, zabawa z psem)</li>
            </ul>

            <p className="mb-2"><strong>Po zakończeniu rysowania:</strong></p>
            <ul className="space-y-2">
              <li>Dzieci w parach opowiadają sobie o swoich wulkanach</li>
              <li>Prowadzący zaprasza chętne dzieci do pokazania prac całej grupie</li>
            </ul>

            <p className="mt-3 text-sm italic">
              Cel: Rozpoznanie własnych wyzwalaczy emocjonalnych i strategii radzenia sobie
            </p>
          </div>

          <h3>V. Gra ruchowa: "Skok na wulkan" (10 minut)</h3>

          <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-6 my-6 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold mb-3">Aktywność ruchowa z elementami mindfulness</h4>
            
            <p className="mb-3"><strong>Przebieg gry:</strong></p>
            <ol className="space-y-2 mb-4">
              <li>1. Dzieci stoją w kręgu. Prowadzący mówi: "Nasz dom bardzo chce skakać!"</li>
              <li>2. Wszyscy razem wykonują 10 skoków (uwalnianie energii)</li>
              <li>3. Prowadzący mówi: "Ale teraz dom potrzebuje odpoczynku" — dzieci siadają i robią 3 głębokie oddechy</li>
              <li>4. Powtarzamy cykl 3-4 razy, za każdym razem zmieniając rodzaj ruchu (skoki, podskoki, tupanie, machanie rękoma)</li>
            </ol>

            <p className="mb-2"><strong>Wariant z balonami (opcjonalnie):</strong></p>
            <ul className="space-y-2">
              <li>Każde dziecko dostaje balon (symbol emocji)</li>
              <li>Prowadzący: "Co się stanie, gdy balon napompujemy za mocno?" (wybuchnie)</li>
              <li>Dzieci dmuchają balony, ale kontrolują intensywność</li>
              <li>Dyskusja: Tak jak balon, nasze emocje potrzebują miejsca, ale też kontroli</li>
            </ul>

            <p className="mt-3 text-sm italic">
              Cel: Połączenie ruchu z regulacją emocji, nauka kontrolowanego uwalniania energii
            </p>
          </div>

          <h3>VI. Zakończenie: "Nowe zasady dla mojego domu" (5 minut)</h3>

          <div className="bg-teal-50 dark:bg-teal-950 rounded-lg p-6 my-6 border border-teal-200 dark:border-teal-800">
            <h4 className="font-semibold mb-3">Podsumowanie i refleksja</h4>
            <p className="mb-3">
              Dzieci siadają w kręgu. Prowadzący pyta:
            </p>
            
            <ul className="space-y-2 mb-4">
              <li><strong>"Co dziś odkryłeś/odkryłaś o sobie?"</strong></li>
              <li><strong>"Czego chcesz więcej/mniej w swoim 'skaczącym domu'?"</strong></li>
            </ul>

            <p className="mb-2"><strong>Zadanie do domu (opcjonalnie):</strong></p>
            <ul className="space-y-2">
              <li>Zorganizuj z rodziną "nieidealną kolację" — taką, na której każdy może powiedzieć, czego potrzebuje</li>
              <li>Zapytaj rodziców: "Czy nasz dom czasem skacze? Co wtedy czujecie?"</li>
            </ul>

            <p className="mt-3 text-sm italic">
              Cel: Przeniesienie doświadczeń warsztatowych do codziennego życia rodzinnego
            </p>
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-purple-200 dark:border-purple-800 p-6 my-8">
            <h2 className="text-2xl font-semibold mb-4 mt-0">Wskazówki dla prowadzącego</h2>
            <ul className="space-y-3 mb-0">
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Bądź elastyczny:</strong> Dzieci z ADHD potrzebują ruchu — pozwól na krótkie przerwy, jeśli grupa jest niespokoja</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Normalizuj emocje:</strong> Podkreślaj, że "skakanie" to nie wada, tylko część osobowości</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Język bez osądu:</strong> Używaj metafor z książki (skaczący dom, wulkan), unikaj etykiet ("niegrzeczne dziecko")</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Buduj empatię:</strong> Pokaż, że wszyscy w rodzinie mają potrzeby — dzieci, rodzice, rodzeństwo</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Zachęcaj do dialogu z rodzicami:</strong> Warsztaty to otwarcie rozmowy, którą warto kontynuować w domu</span>
              </li>
            </ul>
          </Card>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg p-8 my-12 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4">Poznaj książkę "Skok"</h2>
            <p className="mb-6 text-lg">
              Gotowy scenariusz to tylko początek! Książka "Skok" to wspaniałe narzędzie do pracy 
              z dziećmi nad emocjami, akceptacją siebie i budowaniem harmonii rodzinnej.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ksiazki/skok">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Zobacz kartę książki
                </Button>
              </Link>
              <Link
                href="https://tusieczyta.pl/pl/albus/961-skok-9788367085137.html?utm_source=ksiazkidozadanspecjalnych&utm_medium=workshop&utm_campaign=skok_domowy_wulkan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(var(--brand-primary))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--brand-primary))]/90 transition-colors font-medium"
              >
                Zamów "Skok"
              </Link>
            </div>
          </div>

          <section className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Powiązane scenariusze</h2>
            <div className="grid gap-4">
              <Link href="/biblioterapia/scenariusze/moja-przezroczysta-zaba">
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-2">Moja przezroczysta żaba - Praca z żałobą</h3>
                  <p className="text-sm text-muted-foreground">
                    Scenariusz warsztatów z książką "Żaba" do pracy z dziećmi przeżywającymi stratę
                  </p>
                </Card>
              </Link>

              <Link href="/biblioterapia/scenariusze/muzeum-milosci-rozwod">
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-2">Muzeum Miłości - Wsparcie w rozwodzie rodziców</h3>
                  <p className="text-sm text-muted-foreground">
                    Warsztat pomocny dzieciom, których rodzice się rozstali
                  </p>
                </Card>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}