import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { BookOpen, Heart, Lightbulb, Users, ArrowRight } from "lucide-react";

export default function TrudneEmocjeTkaczkaChmur() {
  return (
    <Layout>
      <SEO
        title="Jak pomóc dziecku radzić sobie z trudnymi emocjami? Przewodnik dla rodziców"
        description="Odkryj, jak baśń 'Tkaczka Chmur' pomaga dzieciom nazywać i przepracowywać trudne emocje: smutek, gniew i rozpacz. Praktyczny przewodnik dla rodziców i pedagogów."
        image="/uploads/tkaczka-chmur-okładka.jpg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Jak pomóc dziecku radzić sobie z trudnymi emocjami? Przewodnik dla rodziców",
            description: "Odkryj, jak baśń 'Tkaczka Chmur' pomaga dzieciom nazywać i przepracowywać trudne emocje: smutek, gniew i rozpacz. Praktyczny przewodnik dla rodziców i pedagogów.",
            image: "/uploads/tkaczka-chmur-okładka.jpg",
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
            dateModified: "2026-03-07"
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
                name: "Jak rozmawiać z dzieckiem o smutku?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Używaj prostych metafor dostosowanych do wieku dziecka. W 'Tkaczce Chmur' smutek jest przedstawiony jako czarna rzeka - obraz, który dzieci mogą sobie wyobrazić. Pozwól dziecku nazywać emocje, zamiast je tłumić. Pokaż, że smutek jest naturalny i że można przez niego przepłynąć, jak bohater przez rzekę."
                }
              },
              {
                "@type": "Question",
                name: "Czy gniew u dzieci jest normalny?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, gniew jest naturalną emocją, która pełni funkcję ochronną. Ważne jest, aby nauczyć dziecko bezpiecznych sposobów jego wyrażania. W książce gniew przedstawiony jest jako płonący las - metafora, która pokazuje jego intensywność, ale też możliwość ugaszenia. Dzieci uczą się, że mogą 'ugasić ogień' poprzez techniki oddechowe i spokojne działanie."
                }
              },
              {
                "@type": "Question",
                name: "Jak wspierać dziecko w kryzysie emocjonalnym?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Najważniejsza jest obecność, akceptacja i towarzyszenie. Nie trzeba od razu szukać rozwiązań - czasem wystarczy być blisko. 'Tkaczka Chmur' pokazuje, jak ważna jest pomoc bliskich osób (siostry tkające dla brata narzędzia pomocy). Używaj prostych technik: głębokie oddychanie, aktywność fizyczna (taniec), twórcze wyrażanie emocji."
                }
              },
              {
                "@type": "Question",
                name: "Od jakiego wieku można czytać 'Tkaczkę Chmur'?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Książka jest odpowiednia dla dzieci od około 6-7 lat. Młodsze dzieci (4-5 lat) mogą słuchać opowieści z pomocą rodzica, który dopasuje język do ich możliwości. Starsze dzieci (8-10 lat) mogą czytać samodzielnie i prowadzić głębszą refleksję nad emocjami bohaterów."
                }
              },
              {
                "@type": "Question",
                name: "Jakie techniki radzenia sobie z emocjami pokazuje książka?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Książka przedstawia trzy główne strategie: 1) Symbolizację i nazywanie emocji (rzeka smutku, płonący las gniewu, otchłań rozpaczy), 2) Techniki oddechowe i uspokajające (uspokojenie oddechu w lesie gniewu), 3) Aktywność fizyczną i twórczą (taniec na krawędzi otchłani). Wszystkie te metody są poparte przez współczesną psychologię dziecięcą."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/artykuly"
            className="text-[hsl(var(--brand-primary))] hover:underline mb-4 inline-block"
          >
            ← Wróć do artykułów
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
              Emocje
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">7 marca 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Jak pomóc dziecku radzić sobie z trudnymi emocjami? Przewodnik dla rodziców i pedagogów
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Smutek, gniew, rozpacz – te emocje są naturalną częścią życia dziecka. Jednak wiele dzieci nie potrafi ich nazwać ani bezpiecznie wyrazić. Odkryj, jak baśń terapeutyczna może stać się mostem między dziecięcym przeżyciem a świadomym radzeniem sobie z trudnościami emocjonalnymi.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <img
            src="/uploads/tkaczka-chmur-okładka.jpg"
            alt="Okładka książki Tkaczka Chmur"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
          />

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-[hsl(var(--brand-primary))]" />
              Dlaczego dzieci potrzebują języka emocji?
            </h2>

            <p className="mb-4">
              Współczesna psychologia dziecięca jednoznacznie potwierdza: <strong>dzieci, które potrafią nazywać swoje emocje, są bardziej odporne psychicznie</strong>. Badania pokazują, że umiejętność identyfikowania i wyrażania uczuć:
            </p>

            <ul className="space-y-2 mb-6">
              <li>Zmniejsza ryzyko problemów behawioralnych</li>
              <li>Poprawia relacje rówieśnicze i rodzinne</li>
              <li>Wspiera rozwój empatii i inteligencji emocjonalnej</li>
              <li>Pomaga w radzeniu sobie ze stresem i trudnościami</li>
              <li>Buduje poczucie sprawczości i kontroli nad własnym życiem</li>
            </ul>

            <p className="mb-4">
              Problem w tym, że <strong>dzieci nie zawsze mają słowa</strong>, aby opisać to, co czują. Złość, smutek, lęk czy frustracja często manifestują się poprzez zachowanie: płacz, agresję, wycofanie, bóle brzucha. Bez odpowiedniego języka dziecko nie potrafi ani komunikować swoich potrzeb, ani prosić o pomoc.
            </p>

            <div className="bg-[hsl(var(--brand-secondary))]/20 border-l-4 border-[hsl(var(--brand-primary))] p-6 my-8 rounded-r-lg">
              <p className="text-lg font-medium mb-2">💡 Kluczowa informacja dla rodziców:</p>
              <p className="mb-0">
                Baśnie terapeutyczne, takie jak <strong>"Tkaczka Chmur"</strong>, dają dzieciom bezpieczne, symboliczne narzędzia do nazywania i przepracowywania trudnych emocji. Poprzez metafory i obrazy możliwe do wyobrażenia, dzieci uczą się rozpoznawać własne stany wewnętrzne i znajdować sposoby radzenia sobie z nimi.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-[hsl(var(--brand-primary))]" />
              "Tkaczka Chmur" - baśń o przeprawie przez emocje
            </h2>

            <p className="mb-4">
              <strong>"Tkaczka Chmur"</strong> to poetycka opowieść o dziewczynce obdarzonej niezwykłym talentem tkania i jej młodszym bracie, który wyrusza w niebezpieczną podróż, aby ją uratować. Ta pozornie prosta fabuła kryje w sobie głęboką wiedzę o naturze trudnych emocji i sposobach ich przepracowywania.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Symbolika trzech prób</h3>

            <p className="mb-6">
              Chłopiec – bohater opowieści – musi pokonać trzy przeszkody, które są metaforami podstawowych, trudnych emocji:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-300">
                  1. Czarna rzeka smutku
                </h4>
                <p className="mb-3">
                  Smutek jest przedstawiony jako głęboka, ciemna rzeka, w której można utonąć. To obraz, który doskonale oddaje doświadczenie dziecka: smutek może być przytłaczający, wydawać się nie mieć końca, pochłaniać wszystkie myśli.
                </p>
                <p className="mb-0">
                  <strong>Jak bohater radzi sobie?</strong> Jego siostra tka dla niego świetliste czółno – metafora wsparcia bliskich i narzędzi, które pomagają przepłynąć przez smutek. Książka uczy, że nie trzeba samemu zmagać się z trudnymi emocjami – można prosić o pomoc.
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-lg mb-2 text-orange-700 dark:text-orange-300">
                  2. Płonący las gniewu
                </h4>
                <p className="mb-3">
                  Gniew to ogień – intensywny, gorący, niszczący. Dzieci, które przeżywają złość, często czują się przytłoczone jej siłą. Nie wiedzą, jak ją bezpiecznie wyrazić ani ugasić.
                </p>
                <p className="mb-0">
                  <strong>Jak bohater radzi sobie?</strong> Uczy się uspokajać oddech i wykorzystuje deszczową chmurę utkaną przez siostrę. To konkretna, praktyczna lekcja: głębokie oddychanie pomaga ugasić płomienie gniewu. Metafora deszczu (coś chłodnego, uspokajającego) doskonale ilustruje proces samoregulacji.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">
                  3. Bezdenna otchłań rozpaczy
                </h4>
                <p className="mb-3">
                  Rozpacz to otchłań, w której nie widać dna – metafora beznadziei i poczucia, że sytuacja nigdy się nie poprawi. To najtrudniejsza emocja dla dziecka, które nie ma jeszcze perspektywy czasowej ani zaufania, że trudności miną.
                </p>
                <p className="mb-0">
                  <strong>Jak bohater radzi sobie?</strong> Zaczyna tańczyć – czyli wprowadza ruch, energię, działanie. Taniec to metafora aktywnego radzenia sobie, zamiast poddawania się. Gdy bohater się porusza, pojawia się most z księżycowego światła – nadzieja i droga wyjścia.
                </p>
              </div>
            </div>

            <div className="bg-[hsl(var(--brand-secondary))]/20 border-l-4 border-[hsl(var(--brand-primary))] p-6 my-8 rounded-r-lg">
              <p className="text-lg font-medium mb-2">🎯 Dla terapeutów i pedagogów:</p>
              <p className="mb-0">
                Te trzy metafory można wykorzystać w pracy z dziećmi jako <strong>narzędzia diagnozy i interwencji</strong>. Pytając dziecko: "Czy teraz czujesz się jak w rzece smutku, czy może w płonącym lesie gniewu?" – dajesz mu konkretny język do opisu stanów wewnętrznych. To ułatwia komunikację i buduje świadomość emocjonalną.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-[hsl(var(--brand-primary))]" />
              Praktyczne zastosowanie książki w wychowaniu
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Jak czytać "Tkaczkę Chmur" z dzieckiem?</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2">1. Stwórz bezpieczną przestrzeń</h4>
                <p className="mb-0">
                  Wybierz spokojny moment, gdy nie jesteś zestresowany/a. Wyłącz telefon, przytul dziecko. Baśnie terapeutyczne działają najlepiej w atmosferze bliskości i zaufania.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2">2. Czytaj powoli, z emocją</h4>
                <p className="mb-0">
                  Nie spiesz się. Pozwól dziecku przeżyć historię. Dostosuj głos do nastroju sceny – mów ciszej przy smutku, mocniej przy gniewie. Obrazy muszą dotrzeć do dziecka nie tylko intelektualnie, ale też emocjonalnie.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2">3. Rozmawiaj po lekturze</h4>
                <p className="mb-2">
                  Zadawaj otwarte pytania, które zachęcają do refleksji:
                </p>
                <ul className="space-y-1 ml-6 mb-0">
                  <li>"Co Twoim zdaniem czuł chłopiec, gdy stał nad czarną rzeką?"</li>
                  <li>"Czy Ty też kiedyś czułeś/aś się jak w płonącym lesie?"</li>
                  <li>"Co pomogło bohaterowi pokonać trudności?"</li>
                  <li>"Kto jest Twoją 'siostrą', która może Ci pomóc?"</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2">4. Używaj metafor w codzienności</h4>
                <p className="mb-0">
                  Gdy dziecko jest smutne, powiedz: "Widzę, że jesteś dziś w czarnej rzece. Co może być Twoim czółnem?" Gdy się złości: "To jest Twój płonący las gniewu. Spróbujmy razem ugasić ogień – oddychajmy głęboko." Te metafory staną się wspólnym językiem emocji.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Dla kogo szczególnie polecana?</h3>

            <ul className="space-y-3 mb-6">
              <li>
                <strong>Dzieci przeżywające straty</strong> – choroba w rodzinie, śmierć bliskiej osoby, przeprowadzka. Baśń pokazuje, że można przejść przez trudne emocje i wyjść z nich silniejszym.
              </li>
              <li>
                <strong>Dzieci z problemami z gniewem</strong> – które mają trudności z kontrolowaniem złości, reagują impulsywnie, krzyczą lub uderzają. Metafora płonącego lasu i technika uspokajającego oddechu to konkretne narzędzia.
              </li>
              <li>
                <strong>Dzieci wrażliwe, introwertyczne</strong> – które tłumią emocje, boją się je wyrażać. "Tkaczka Chmur" pokazuje, że emocje są naturalne, że nie trzeba się ich wstydzić.
              </li>
              <li>
                <strong>Rodziny w kryzysie</strong> – gdy rodzice rozwodzą się, zmieniają się warunki życia, pojawiają się konflikty. Książka może być narzędziem do rozmowy o tym, co dzieje się w rodzinie.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-[hsl(var(--brand-primary))]" />
              Wskazówki dla nauczycieli i terapeutów
            </h2>

            <p className="mb-6">
              "Tkaczka Chmur" doskonale nadaje się do pracy grupowej w przedszkolach, szkołach i świetlicach terapeutycznych. Oto kilka sprawdzonych metod:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[hsl(var(--brand-primary))] pl-6">
                <h4 className="font-bold text-lg mb-2">Warsztaty plastyczne</h4>
                <p className="mb-0">
                  Po przeczytaniu baśni dzieci mogą narysować lub namalować swoją "rzekę smutku", "płonący las gniewu" lub "most nadziei". Twórcze wyrażanie emocji pozwala je przepracować na poziomie niewerbalnym.
                </p>
              </div>

              <div className="border-l-4 border-[hsl(var(--brand-primary))] pl-6">
                <h4 className="font-bold text-lg mb-2">Techniki relaksacyjne</h4>
                <p className="mb-0">
                  Wprowadź ćwiczenia oddechowe inspirowane opowieścią: "Oddychamy jak bohater, gdy stoi w płonącym lesie. Wdech – spokój, wydech – ugaszone płomienie." Dzieci szybko uczą się kojarzyć oddech z kontrolą emocji.
                </p>
              </div>

              <div className="border-l-4 border-[hsl(var(--brand-primary))] pl-6">
                <h4 className="font-bold text-lg mb-2">Zabawy ruchowe</h4>
                <p className="mb-0">
                  Taniec z opowieści można przetłumaczyć na prostą zabawę: "Gdy czujesz się jak w otchłani, zacznij się poruszać – skacz, tańcz, kręć się w kółko. Zobacz, jak Twoje ciało pomaga Ci odzyskać odwagę."
                </p>
              </div>

              <div className="border-l-4 border-[hsl(var(--brand-primary))] pl-6">
                <h4 className="font-bold text-lg mb-2">Rozmowy w kręgu</h4>
                <p className="mb-0">
                  Stwórz bezpieczną przestrzeń, gdzie dzieci mogą dzielić się swoimi doświadczeniami: "Kto z Was był kiedyś w rzece smutku? Co Wam pomogło?" To buduje empatię i społeczność wsparcia.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Jak rozmawiać z dzieckiem o smutku?</h3>
                <p className="mb-0">
                  Używaj prostych metafor dostosowanych do wieku dziecka. W "Tkaczce Chmur" smutek jest przedstawiony jako czarna rzeka - obraz, który dzieci mogą sobie wyobrazić. Pozwól dziecku nazywać emocje, zamiast je tłumić. Pokaż, że smutek jest naturalny i że można przez niego przepłynąć, jak bohater przez rzekę.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Czy gniew u dzieci jest normalny?</h3>
                <p className="mb-0">
                  Tak, gniew jest naturalną emocją, która pełni funkcję ochronną. Ważne jest, aby nauczyć dziecko bezpiecznych sposobów jego wyrażania. W książce gniew przedstawiony jest jako płonący las - metafora, która pokazuje jego intensywność, ale też możliwość ugaszenia. Dzieci uczą się, że mogą "ugasić ogień" poprzez techniki oddechowe i spokojne działanie.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Jak wspierać dziecko w kryzysie emocjonalnym?</h3>
                <p className="mb-0">
                  Najważniejsza jest obecność, akceptacja i towarzyszenie. Nie trzeba od razu szukać rozwiązań - czasem wystarczy być blisko. "Tkaczka Chmur" pokazuje, jak ważna jest pomoc bliskich osób (siostry tkające dla brata narzędzia pomocy). Używaj prostych technik: głębokie oddychanie, aktywność fizyczna (taniec), twórcze wyrażanie emocji.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Od jakiego wieku można czytać "Tkaczkę Chmur"?</h3>
                <p className="mb-0">
                  Książka jest odpowiednia dla dzieci od około 6-7 lat. Młodsze dzieci (4-5 lat) mogą słuchać opowieści z pomocą rodzica, który dopasuje język do ich możliwości. Starsze dzieci (8-10 lat) mogą czytać samodzielnie i prowadzić głębszą refleksję nad emocjami bohaterów.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Jakie techniki radzenia sobie z emocjami pokazuje książka?</h3>
                <p className="mb-0">
                  Książka przedstawia trzy główne strategie: 1) Symbolizację i nazywanie emocji (rzeka smutku, płonący las gniewu, otchłań rozpaczy), 2) Techniki oddechowe i uspokajające (uspokojenie oddechu w lesie gniewu), 3) Aktywność fizyczną i twórczą (taniec na krawędzi otchłani). Wszystkie te metody są poparte przez współczesną psychologię dziecięcą.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-br from-[hsl(var(--brand-secondary))]/30 to-purple-100/30 dark:from-[hsl(var(--brand-secondary))]/20 dark:to-purple-900/20 p-8 rounded-xl border-2 border-[hsl(var(--brand-primary))]/20">
            <h2 className="text-2xl font-bold mb-4 text-center">
              📚 Poznaj "Tkaczkę Chmur"
            </h2>
            <p className="text-center mb-6 text-lg">
              Baśń terapeutyczna, która pomoże Twojemu dziecku zrozumieć i przepracować trudne emocje
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="https://tusieczyta.pl/pl/glowna/1233-tkaczka-chmur-wyd-2-9788367085199.html?utm_source=ksiazki-do-zadan&utm_medium=article&utm_campaign=tkaczka-chmur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(var(--brand-primary))] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Kup książkę
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/ksiazki/tkaczka-chmur"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-medium text-lg border-2 border-gray-900 dark:border-gray-100 shadow-lg hover:shadow-xl"
              >
                Zobacz szczegóły książki
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Podsumowanie</h2>
              <p className="mb-4">
                <strong>"Tkaczka Chmur"</strong> to więcej niż piękna baśń – to narzędzie terapeutyczne, które daje dzieciom konkretny język do mówienia o trudnych emocjach. Poprzez metafory rzeki smutku, płonącego lasu gniewu i otchłani rozpaczy dzieci uczą się:
              </p>
              <ul className="space-y-2 mb-4">
                <li>Rozpoznawać i nazywać swoje stany emocjonalne</li>
                <li>Rozumieć, że trudne emocje są normalne i przemijają</li>
                <li>Stosować proste techniki samoregulacji (oddech, ruch, proszenie o pomoc)</li>
                <li>Budować odporność psychiczną i wiarę w siebie</li>
              </ul>
              <p className="mb-0">
                Niezależnie od tego, czy jesteś rodzicem, nauczycielem czy terapeutą – ta książka może stać się mostem między światem dziecka a jego zdolnością do radzenia sobie z życiowymi wyzwaniami. <strong>Daj dziecku narzędzia, które zostają na całe życie.</strong>
              </p>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}