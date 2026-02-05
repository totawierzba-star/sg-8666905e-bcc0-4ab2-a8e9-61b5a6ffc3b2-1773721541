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

            <div className="my-12">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center">
                Zobacz książkę Żaba
              </h3>
              <div className="max-w-3xl mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/qoA2F9dtxYY"
                    title="Żaba. Mała opowieść o żałobie"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>

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
                <li>Tłumienie emocji – "Muszę być silna, nie mogę płakać"</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Pierwsze czytanie: Spotkanie z Żabą
            </h2>
            <p className="mb-6 leading-relaxed">
              Mama Zosi kupiła książkę "Żaba. Mała opowieść o żałobie" i
              pewnego wieczora zaproponowała wspólne czytanie. Zosia początkowo
              nie chciała – "Nie chcę o tym rozmawiać!" – ale mama nie
              naciskała. Powiedziała tylko: "To jest książka o dziewczynce,
              której też zmarła babcia. Może po prostu posłuchasz?".
            </p>

            <div className="bg-accent/10 rounded-lg p-6 my-8">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-accent" />
                Kluczowy moment – pierwsze przełamanie
              </h3>
              <p className="mb-4 leading-relaxed">
                Przytulone na kanapie, mama zaczęła czytać o dziewczynce, do której
                przyszła Żaba. Żaba, która mówiła: "Jestem. Będę teraz z tobą."
                Zosia słuchała cicho, gdy mama czytała fragment:
              </p>
              <p className="italic border-l-4 border-accent pl-4 mb-4">
                "Byłam smutna. Tęskniłam za babcią. Myślałam, że muszę być silna.
                Że nie powinnam płakać. Żaba popatrzyła na mnie i stwierdziła:
                – Widzę, że jesteś smutna. Dlaczego nie płaczesz?"
              </p>
              <p className="mb-4 leading-relaxed">
                W tym momencie Zosia nagle powiedziała cicho: "Ja też tak myślę.
                Muszę być silna. Nie powinnam płakać."
              </p>
              <p className="text-sm text-muted-foreground">
                – relacja mamy Zosi, 6 miesięcy po stracie babci
              </p>
            </div>

            <p className="mb-6 leading-relaxed">
              To było przełomowe. Po raz pierwszy od śmierci babci Zosia
              otworzyła się na temat swoich uczuć. Mama kontynuowała czytanie
              o tym, jak Żaba pozwala dziewczynce płakać, zbiera jej łzy
              i mówi: "Twoje łzy są pięknym skarbem. Dziękuję ci."
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Trzy lekcje od Żaby: Płacz, Krzyk i Mowa
            </h2>
            <p className="mb-6 leading-relaxed">
              W kolejnych tygodniach Zosia prosiła o ponowne czytanie książki.
              Za każdym razem odkrywała nowe warstwy znaczeń. Książka pokazywała
              trzy kluczowe lekcje, które pomagały Zosi przepracować żałobę:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Lekcja 1: Łzy są pięknym skarbem
                </h3>
                <p className="italic mb-3 text-muted-foreground">
                  "Nie chciałam płakać. Połknęłam swoje łzy. Czułam ból w brzuchu.
                  Żaba stwierdziła: – Łzy w brzuchu zamieniają się w kamienie.
                  To boli."
                </p>
                <p className="leading-relaxed">
                  <strong>Co zrobiła mama:</strong> Gdy Zosia mówiła "Muszę być silna",
                  mama nie przekonywała jej siłą. Zamiast tego przeczytała dalej,
                  jak Żaba zbiera łzy dziewczynki i mówi, że są pięknym skarbem.
                  Zosia zaczęła płakać – pierwszy raz od śmierci babci. Mama
                  przytulała ją i powtarzała słowa Żaby: "Twoje łzy są piękne.
                  Dziękuję ci."
                </p>
              </div>

              <div className="bg-secondary/10 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Lekcja 2: Krzyk może smakować
                </h3>
                <p className="italic mb-3 text-muted-foreground">
                  "Złościłam się. Nie miałam już babci. Myślałam, że muszę być
                  grzeczna. Że nie powinnam się złościć. Żaba powiedziała:
                  – Kiedy jesteśmy źli, to najlepiej jest krzyczeć."
                </p>
                <p className="leading-relaxed">
                  <strong>Co zrobiła mama:</strong> Kilka dni później Zosia była
                  wściekła – rzucała zabawkami, krzyczała na mamę. Zamiast karać,
                  mama przypomniała fragment o Żabie, która zjada krzyk ze smakiem
                  i mówi: "To był pyszny krzyk. Dziękuję." Zosia zrozumiała, że
                  może być zła, i że złość nie jest czymś złym.
                </p>
              </div>

              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Lekcja 3: Mówienie uzdrawia serce
                </h3>
                <p className="italic mb-3 text-muted-foreground">
                  "Bałam się. Nie wiedziałam, co się stało z babcią. Myślałam,
                  że powinnam być dzielna. Żaba powiedziała: – Kiedy się boimy,
                  to najlepiej jest mówić. Przez milczenie nasze serce może pęknąć."
                </p>
                <p className="leading-relaxed">
                  <strong>Co zrobiła mama:</strong> Po przeczytaniu tej części Zosia
                  po raz pierwszy powiedziała, czego się boi: "Mama jest smutna,
                  ale udaje, że jest wesoła. Tata jest zły, ale udaje, że wszystko
                  jest w porządku. A ja nie wiem, gdzie jest babcia." To otworzyło
                  drzwi do głębokiej, uzdrawiającej rozmowy całej rodziny.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Transformacja Żaby: Od przeszkody do przyjaciółki
            </h2>
            <p className="mb-6 leading-relaxed">
              W książce Żaba przechodzi transformację – z grubej, przeszkadzającej
              istoty, która zasłania widok, staje się coraz bardziej przezroczysta
              i przyjazna. To była kluczowa metafora dla Zosi.
            </p>

            <div className="bg-background-alt rounded-lg p-6 my-8 border-l-4 border-primary">
              <h3 className="font-semibold text-lg mb-3">
                Proces transformacji żałoby Zosi
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>Tydzień 1:</strong> Żałoba przeszkadza – Zosia widzi tylko smutek,
                  nie potrafi cieszyć się niczym
                </li>
                <li>
                  <strong>Tydzień 2-3:</strong> Poznawanie żałoby – Zosia uczy się,
                  że może płakać, krzyczeć, mówić o stracie
                </li>
                <li>
                  <strong>Miesiąc 1-2:</strong> Oswajanie żałoby – Zosia rozumie,
                  że żałoba to część jej życia, nie wróg
                </li>
                <li>
                  <strong>Miesiąc 3:</strong> Żałoba staje się przezroczysta –
                  Zosia funkcjonuje normalnie, ale wie, że może zawołać żałobę,
                  gdy potrzebuje
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Wspomnienia w bąbelkach
            </h2>
            <p className="mb-6 leading-relaxed">
              Pod koniec książki dzieje się coś pięknego – z brzucha Żaby
              wylatują bąbelki, w każdym wspomnienie babci. Dla Zosi to był
              przełomowy moment.
            </p>

            <div className="bg-secondary-light rounded-lg p-6 my-8">
              <p className="italic mb-4 leading-relaxed">
                "W brzuchu żaby głośno zaburczało. Otworzyła pyszczek. Wyleciały
                z niego bąbelki. W każdym było wspomnienie babci: Razem z babcią
                oglądamy wiewiórki w parku, Razem z babcią bawimy się na plaży..."
              </p>
              <p className="leading-relaxed">
                <strong>Co zrobiła mama:</strong> Po przeczytaniu tej sceny mama
                zaproponowała Zosi stworzenie własnych "bąbelków wspomnień".
                Razem narysowały kółka i w każdym Zosia rysowała wspomnienie
                z babcią – pieczenie ciastek, czytanie bajek, spacery po parku.
                Zosia płakała, ale mówiła też: "To jest piękne. Babcia jest
                w moim sercu."
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Najważniejsze przesłanie: Żałoba zawsze jest z nami
            </h2>
            <p className="mb-6 leading-relaxed">
              Książka kończy się słowami, które stały się mantrą Zosi:
            </p>

            <div className="bg-accent/10 rounded-lg p-6 my-8">
              <p className="text-lg italic text-center mb-4">
                "Dzisiaj moja żaba jest przezroczysta I inni już jej nie widzą.
                Ale ja wiem, że ona jest I że zawsze mogę na nią liczyć."
              </p>
            </div>

            <p className="mb-6 leading-relaxed">
              To nauczyło Zosię (i jej rodziców), że celem nie jest "wyjście"
              z żałoby czy "zapomnienie" o babci. Żałoba staje się częścią nas –
              przezroczystą, ale obecną. Możemy normalnie funkcjonować, ale
              wiemy, że w trudnych chwilach możemy zawołać swoją "żabę" i
              pozwolić sobie na smutek, złość czy tęsknotę.
            </p>

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
                <strong>Zaakceptowała swoje emocje</strong> – mówiła "Teraz wołam
                moją żabę", gdy była smutna lub zła
              </li>
              <li>
                <strong>Powróciła do normalnych aktywności</strong> – zabawy z
                koleżankami, rysowanie, czytanie innych książek
              </li>
              <li>
                <strong>Zbudowała nowy sposób pamiętania</strong> – album ze
                wspomnieniami, rysunki "bąbelków", ulubione przepisy babci
              </li>
              <li>
                <strong>Pomogła innym</strong> – gdy koleżanka straciła psa,
                Zosia powiedziała: "Możesz płakać. Twoje łzy są pięknym skarbem"
              </li>
            </ul>

            <div className="bg-background-alt rounded-lg p-6 my-8 border-l-4 border-accent">
              <p className="text-lg italic mb-4">
                "Książka 'Żaba' nauczyła nas, że żałoba to nie wróg, tylko
                część miłości do babci. Zosia wie teraz, że jej 'żaba' jest
                przezroczysta, ale zawsze przy niej. To daje jej ogromną siłę."
              </p>
              <p className="text-sm text-muted-foreground">– mama Zosi</p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Wskazówki dla rodziców i terapeutów
            </h2>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Jak czytać "Żabę" z dzieckiem?
            </h3>

            <div className="bg-primary/10 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-3">Przed czytaniem:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stwórz bezpieczną przestrzeń – przytulcie się, wyłączcie telefony</li>
                <li>Zapowiedz temat: "To książka o dziewczynce, której też zmarła babcia"</li>
                <li>Nie wymuszaj – jeśli dziecko nie chce, zaproponuj ponownie za kilka dni. Można też na początku ograniczyć się do wspólnego oglądania ilustracji</li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-3">Podczas czytania:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Czytaj powoli, daj dziecku czas na przetworzenie</li>
                <li>Zatrzymuj się przy kluczowych fragmentach (łzy, krzyk, mowa)</li>
                <li>Obserwuj reakcje dziecka – jeśli płacze, przytul je</li>
                <li>Możesz zadawać pytania: "Czy ty też czasami tak się czujesz?"</li>
                <li>Pamiętaj: książka używa metafory Żaby jako żałoby – wytłumacz to dziecku</li>
              </ul>
            </div>

            <div className="bg-accent/10 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-3">Po przeczytaniu:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Daj dziecku czas na przemyślenie – nie wymagaj natychmiastowej rozmowy</li>
                <li>Zaproponuj narysowanie własnej "żaby" lub "bąbelków wspomnień"</li>
                <li>Wróćcie do książki wielokrotnie – dzieci potrzebują powtórzeń</li>
                <li>Użyj języka książki: "Czy chcesz zawołać swoją żabę?" zamiast "Czy jesteś smutna?"</li>
                <li>Bądź dostępny – dziecko może wrócić do tematu po tygodniach</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Pytania do rozmowy inspirowane książką
            </h3>
            <div className="bg-primary/10 rounded-lg p-6 my-6">
              <ul className="space-y-3">
                <li>
                  <strong>"Jak wygląda twoja żaba?"</strong><br />
                  <span className="text-sm text-muted-foreground">
                    (Pozwala dziecku spersonalizować metaforę żałoby)
                  </span>
                </li>
                <li>
                  <strong>"Czy twoja żaba jest duża i gruba, czy już mniejsza?"</strong><br />
                  <span className="text-sm text-muted-foreground">
                    (Pomaga ocenić etap przepracowania żałoby)
                  </span>
                </li>
                <li>
                  <strong>"Czy chcesz pokazać mi swoje łzy-skarb?"</strong><br />
                  <span className="text-sm text-muted-foreground">
                    (Zachęca do płaczu bez wstydu)
                  </span>
                </li>
                <li>
                  <strong>"Jakie wspomnienia są w twoich bąbelkach?"</strong><br />
                  <span className="text-sm text-muted-foreground">
                    (Pomaga dziecku przypominać sobie piękne chwile z osobą, która odeszła)
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Czego unikać?
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Nie mów dziecku "Przestań płakać"</strong> – książka uczy,
                że łzy są skarbem
              </li>
              <li>
                <strong>Nie tłum złości</strong> – krzyk może "smakować", złość
                jest naturalna
              </li>
              <li>
                <strong>Nie używaj eufemizmów</strong> – książka mówi wprost o
                śmierci, nie o "zaśnięciu"
              </li>
              <li>
                <strong>Nie próbuj "naprawić" żałoby</strong> – celem nie jest
                pozbycie się żaby, tylko nauczenie się z nią żyć
              </li>
              <li>
                <strong>Nie czytaj tylko raz</strong> – dzieci potrzebują wielokrotnych
                powrotów do książki
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Podsumowanie
            </h2>
            <p className="mb-6 leading-relaxed">
              Historia Zosi pokazuje, jak potężnym narzędziem może być książka
              "Żaba. Mała opowieść o żałobie". Metafora Żaby-żałoby pozwoliła
              7-letniej dziewczynce zrozumieć, że:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Łzy są pięknym skarbem, nie oznaką słabości</li>
              <li>Złość i krzyk są naturalne i mogą "smakować"</li>
              <li>Mówienie o stracie uzdrawia serce</li>
              <li>Żałoba nie znika, ale zmienia się i staje przezroczysta</li>
              <li>Wspomnienia są jak bąbelki – zawsze można do nich wrócić</li>
              <li>Można być smutnym i szczęśliwym jednocześnie</li>
            </ul>

            <p className="mb-6 leading-relaxed">
              Książka nie "wyleczyła" Zosi z żałoby – dała jej język, narzędzia
              i przestrzeń do przepracowania straty. Nauczyła ją, że żałoba to
              część miłości do babci, i że zawsze może zawołać swoją "żabę",
              gdy potrzebuje.
            </p>

            <p className="leading-relaxed">
              Jeśli Twoje dziecko przechodzi przez podobne doświadczenie,
              pamiętaj: nie musisz mieć wszystkich odpowiedzi. Czasami wystarczy
              przytulić się razem, otworzyć książkę i pozwolić Żabie opowiedzieć
              swoją mądrą historię.
            </p>

            <div className="bg-secondary-light rounded-lg p-6 my-8 text-center">
              <h3 className="font-serif text-2xl font-semibold mb-3">
                Poznaj książkę "Żaba. Mała opowieść o żałobie"
              </h3>
              <p className="text-muted-foreground mb-4">
                Delikatna metafora żałoby, która pomaga dzieciom i dorosłym
                zaakceptować smutek jako część życia
              </p>
              <Button asChild size="lg">
                <Link href="https://albus.poznan.pl/sklep/1252_zaba-mala-opowiesc-o-zalobie" target="_blank" rel="noopener noreferrer">
                  Zamów książkę
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