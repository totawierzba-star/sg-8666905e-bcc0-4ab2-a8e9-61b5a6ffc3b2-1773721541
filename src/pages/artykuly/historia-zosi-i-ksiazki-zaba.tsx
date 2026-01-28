import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HistoriaZosiArticle() {
  return (
    <Layout>
      <SEO
        title="Jak rozmawiać z dzieckiem o stracie? Historia Zosi i książki Żaba"
        description="Praktyczny przykład wykorzystania książki 'Żaba. Mała opowieść o żałobie' w pracy z 7-letnią dziewczynką po stracie babci."
        url="https://ksiazki-do-zadan-specjalnych.pl/artykuly/historia-zosi-i-ksiazki-zaba"
      />

      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/artykuly">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do artykułów
            </Link>
          </Button>

          <div className="mb-8">
            <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Praktyka
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Jak rozmawiać z dzieckiem o stracie? Historia Zosi i książki Żaba
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Anna Kowalska</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>20 stycznia 2026</span>
              </div>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/uploads/okładka_z_aba.jpg"
                alt="Okładka książki Żaba"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Zosia miała 7 lat, gdy zmarła jej ukochana babcia. Przez
              pół roku rodzice obserwowali, jak dziewczynka zamyka się w sobie,
              unika rozmów o babci i płacze po nocach. Żadne próby rozmowy nie
              przynosiły efektu. Wtedy mama Zosi sięgnęła po książkę "Żaba.
              Mała opowieść o żałobie". To, co wydarzyło się później, zmieniło
              wszystko.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Sytuacja wyjściowa: Zosia po stracie babci
            </h2>
            <p className="mb-6 leading-relaxed">
              Babcia była dla Zosi kimś wyjątkowym. To z nią spędzała każdy
              weekend, piekła ciastka, czytała bajki przed snem. Gdy babcia
              zachorowała i szybko odeszła, 7-letnia Zosia nie mogła tego
              zrozumieć. Rodzice starali się wyjaśnić, że babcia "zasnęła na
              zawsze", ale to tylko pogorszyło sytuację – dziewczynka bała się
              teraz zasypiania.
            </p>

            <div className="bg-background-alt rounded-lg p-6 my-8 border-l-4 border-secondary">
              <h3 className="font-semibold text-lg mb-3">
                Objawy, które zaniepokoiły rodziców:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Wycofanie się z kontaktów z rówieśnikami</li>
                <li>Spadek zainteresowania ulubionymi zabawami</li>
                <li>Częste płacze, szczególnie wieczorem</li>
                <li>Unikanie rozmów o babci</li>
                <li>Problemy ze snem i koszmary nocne</li>
                <li>
                  Poczucie winy – "To moja wina, że babcia umarła"
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Pierwsze czytanie: Przełamywanie muru milczenia
            </h2>
            <p className="mb-6 leading-relaxed">
              Mama Zosi kupiła książkę "Żaba. Mała opowieść o żałobie" i
              pewnego wieczoru zaproponowała wspólne czytanie. Zosia początkowo
              nie chciała – "Nie chcę o tym rozmawiać!" – ale mama nie
              naciskała. Powiedziała tylko: "To jest książka o żabce, która
              też czuje się smutna. Może po prostu posłuchasz?".
            </p>

            <div className="bg-accent/10 rounded-lg p-6 my-8">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-accent" />
                Kluczowy moment – pierwsze przełamanie
              </h3>
              <p className="mb-4 italic">
                "Przytulone na kanapie, mama zaczęła czytać. Zosia milczała,
                ale słuchała. Gdy mama dotarła do fragmentu, gdzie żabka mówi
                'Czasami myślę, że to moja wina', Zosia nagle powiedziała cicho:
                'Ja też tak myślę. Może gdybym była grzeczniejsza, babcia by
                nie umarła'."
              </p>
              <p className="text-sm text-muted-foreground">
                – relacja mamy Zosi, 6 miesięcy po stracie babci
              </p>
            </div>

            <p className="mb-6 leading-relaxed">
              To było przełomowe. Po raz pierwszy od śmierci babci Zosia
              otworzycie się na temat swoich uczuć. Mama nie próbowała od razu
              przekonywać Zosi, że się myli. Zamiast tego powiedziała: "Żabka
              też tak czuła. Posłuchajmy, co się dalej stało".
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Kolejne czytania: Powroty do książki
            </h2>
            <p className="mb-6 leading-relaxed">
              Przez następne tygodnie Zosia sama prosiła o ponowne czytanie
              książki. Każde czytanie przynosiło nowe pytania i refleksje:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="font-semibold mb-2">Drugie czytanie (tydzień później)</h4>
                <p className="text-muted-foreground">
                  Zosia zapytała: "Czy żabka kiedyś przestanie być smutna?" Mama
                  odpowiedziała zgodnie z książką: "Smutek nie znika całkiem, ale
                  z czasem robi się mniejszy. Możemy być smutni i szczęśliwi
                  jednocześnie".
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h4 className="font-semibold mb-2">Trzecie czytanie (dwa tygodnie później)</h4>
                <p className="text-muted-foreground">
                  Zosia zaczęła opowiadać o babci – o wspólnym pieczeniu ciastek,
                  o ulubionych bajkach. Płakała, ale już nie była to panika –
                  to był zdrowy smutek, który pozwalał jej żegnać się z babcią.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h4 className="font-semibold mb-2">Czwarte czytanie (miesiąc później)</h4>
                <p className="text-muted-foreground">
                  Zosia narysowała obrazek – siebie i babcię jako dwie żabki.
                  Powiedziała: "Babcia jest teraz w moim sercu. Nie widzę jej,
                  ale czuję". To był moment, gdy rodzice wiedzieli, że proces
                  żałoby przebiega prawidłowo.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Techniki, które zastosowali rodzice Zosi
            </h2>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              1. Nie wymuszali rozmowy
            </h3>
            <p className="mb-6 leading-relaxed">
              Książka była "bezpiecznym miejscem". Zosia mogła słuchać o uczuciach
              żabki, nie musiała od razu mówić o swoich. To dało jej czas i przestrzeń.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              2. Walidowali wszystkie emocje
            </h3>
            <p className="mb-6 leading-relaxed">
              Gdy Zosia mówiła o poczuciu winy, mama nie odpowiadała "Nie mów
              tak!", ale: "Wiem, że tak się czujesz. To trudne uczucie. Ale
              prawda jest taka, że to nie twoja wina".
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              3. Pozwalali na powtarzalne czytanie
            </h3>
            <p className="mb-6 leading-relaxed">
              Dzieci potrzebują powtórzeń, żeby przetworzyć trudne emocje. Każde
              czytanie książki "Żaba" przynosiło Zosi nowe zrozumienie i spokój.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              4. Łączyli książkę z działaniami twórczymi
            </h3>
            <p className="mb-6 leading-relaxed">
              Rysowanie, pisanie listów do babci, układanie albumów ze
              wspomnieniami – to wszystko pomagało Zosi wyrazić to, czego nie
              umiała powiedzieć słowami.
            </p>

            <div className="bg-primary/10 rounded-lg p-6 my-8">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Pytania, które mama zadawała podczas czytania
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>"Jak myślisz, co teraz czuje żabka?"</strong><br />
                  <span className="text-sm text-muted-foreground">
                    (Pozwala dziecku nazwać emocje w bezpieczny sposób)
                  </span>
                </li>
                <li>
                  <strong>"Czy ty też czasami tak się czujesz?"</strong><br />
                  <span className="text-sm text-muted-foreground">
                    (Otwiera drzwi do rozmowy o własnych uczuciach)
                  </span>
                </li>
                <li>
                  <strong>"Co pomaga żabce, gdy jest jej smutno?"</strong><br />
                  <span className="text-sm text-muted-foreground">
                    (Pokazuje strategie radzenia sobie)
                  </span>
                </li>
                <li>
                  <strong>"Co tobie pomaga, gdy czujesz się smutna?"</strong><br />
                  <span className="text-sm text-muted-foreground">
                    (Pomaga dziecku znaleźć własne sposoby na trudne emocje)
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Efekty po 3 miesiącach
            </h2>
            <p className="mb-6 leading-relaxed">
              Trzy miesiące po pierwszym przeczytaniu książki "Żaba" rodzice Zosi
              zauważyli znaczącą zmianę:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Zosia zaczęła rozmawiać o babci</strong> – wspominała
                wspólne chwile, czasami ze łzami, ale bez paniki
              </li>
              <li>
                <strong>Powróciła do normalnych aktywności</strong> – zabawy z
                koleżankami, rysowanie, czytanie innych książek
              </li>
              <li>
                <strong>Smutek stał się częścią życia, nie jego centrum</strong> –
                Zosia rozumiała, że może być smutna i szczęśliwa jednocześnie
              </li>
              <li>
                <strong>Poczucie winy ustąpiło</strong> – po wielu rozmowach
                Zosia zrozumiała, że śmierć babci nie była jej winą
              </li>
              <li>
                <strong>Zbudowała nowy sposób pamiętania</strong> – album ze
                wspomnieniami, rysunki, ulubione przepisy babci
              </li>
            </ul>

            <div className="bg-background-alt rounded-lg p-6 my-8 border-l-4 border-accent">
              <p className="text-lg italic mb-4">
                "Książka 'Żaba' nie zabrała nam smutku, ale dała nam sposób, żeby
                o nim rozmawiać. Zosia nauczyła się, że smutek to nie wróg, tylko
                część miłości do babci."
              </p>
              <p className="text-sm text-muted-foreground">– mama Zosi</p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Wskazówki dla rodziców i terapeutów
            </h2>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Kiedy sięgnąć po książkę "Żaba"?
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Gdy dziecko doświadczyło straty (śmierć bliskiej osoby, zwierzaka)</li>
              <li>Gdy dziecko wycofuje się z kontaktów i zamyka w sobie</li>
              <li>Gdy dziecko wyraża poczucie winy związane ze stratą</li>
              <li>Gdy rodzice nie wiedzą, jak rozpocząć rozmowę o śmierci</li>
              <li>Jako wsparcie w procesie terapeutycznym</li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Czego unikać?
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Wymuszania reakcji</strong> – "No powiedz, co czujesz!"
              </li>
              <li>
                <strong>Banalizowania smutku</strong> – "Nie płacz, babcia by tego nie chciała"
              </li>
              <li>
                <strong>Eufemizmów</strong> – "zasnęła", "poszła do nieba" (mogą mylić małe dzieci)
              </li>
              <li>
                <strong>Ukrywania własnych emocji</strong> – dziecko potrzebuje widzieć, że dorośli też są smutni
              </li>
              <li>
                <strong>Jednokrotnego czytania</strong> – dzieci potrzebują powrotów do książki
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Co robić po przeczytaniu?
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Daj dziecku czas na przemyślenie</li>
              <li>Zaproponuj aktywności twórcze (rysowanie, pisanie)</li>
              <li>Bądź dostępny na rozmowę, ale nie wymagaj jej</li>
              <li>Obserwuj znaki, że dziecko jest gotowe na głębszą rozmowę</li>
              <li>W razie potrzeby skonsultuj się z psychologiem dziecięcym</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Podsumowanie
            </h2>
            <p className="mb-6 leading-relaxed">
              Historia Zosi pokazuje, jak potężnym narzędziem może być odpowiednio
              dobrana książka. "Żaba. Mała opowieść o żałobie" nie zastąpiła
              terapii ani nie "wyleczyła" Zosi z żałoby – ale dała jej i jej
              rodzicom przestrzeń, język i narzędzia do przepracowania straty.
            </p>
            <p className="mb-6 leading-relaxed">
              Książka stała się pomostem między niemożnością mówienia o bólu
              a potrzebą jego wyrażenia. Pozwoliła Zosi zobaczyć, że nie jest
              sama, że jej uczucia są normalne, i że smutek nie trwa wiecznie.
            </p>
            <p className="leading-relaxed">
              Jeśli Twoje dziecko przechodzi przez podobne doświadczenie,
              pamiętaj: nie musisz mieć wszystkich odpowiedzi. Czasami wystarczy
              przytulić się razem, otworzyć książkę i dać dziecku czas na
              znalezienie własnej drogi przez żałobę.
            </p>

            <div className="bg-secondary-light rounded-lg p-6 my-8 text-center">
              <h3 className="font-serif text-2xl font-semibold mb-3">
                Poznaj książkę "Żaba. Mała opowieść o żałobie"
              </h3>
              <p className="text-muted-foreground mb-4">
                Delikatna i poruszająca historia o przepracowywaniu straty i żałoby
              </p>
              <Button asChild size="lg">
                <Link href="/ksiazki/zaba">
                  Zobacz książkę
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Przeczytaj również
            </h3>
            <div className="bg-background-alt rounded-lg p-6">
              <Link
                href="/artykuly/ksiazki-w-terapii"
                className="block hover:text-accent transition-colors"
              >
                <h4 className="font-semibold text-lg mb-2">
                  Książki w terapii – jak wykorzystać literaturę w pracy z dziećmi
                  i dorosłymi
                </h4>
                <p className="text-muted-foreground text-sm">
                  Dowiedz się więcej o biblioterapii i jej zastosowaniu w praktyce
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}