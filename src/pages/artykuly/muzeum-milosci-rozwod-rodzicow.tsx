import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, BookOpen, Heart, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MuzeumMilosciRozwodRodzicowArticle() {
  return (
    <Layout>
      <SEO
        title="Muzeum Miłości – jak pomóc dziecku zrozumieć rozwód rodziców"
        description="Książka 'Czasami szczęśliwi rodzice mieszkają oddzielnie' prowadzi dzieci przez symboliczne Muzeum Miłości, gdzie uczą się, że rozstanie rodziców nie jest ich winą."
        url="https://biblioterapia.org/artykuly/muzeum-milosci-rozwod-rodzicow"
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
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
              Terapia
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Muzeum Miłości – jak pomóc dziecku zrozumieć rozwód rodziców
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Redakcja</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>5 lutego 2026</span>
              </div>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/uploads/Albus_Czasami_szcze_s_liwi.jpg"
                alt="Czasami szczęśliwi rodzice mieszkają oddzielnie"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              „Czasami szczęśliwi rodzice mieszkają oddzielnie" to książka, która
              w magiczny sposób pomaga dzieciom zrozumieć jeden z najtrudniejszych
              momentów w ich życiu – rozstanie rodziców. Poprzez symboliczną
              podróż do Muzeum Miłości dzieci uczą się, że rozwód nie jest ich
              winą, że miłość rodziców nie znika i że można odnaleźć szczęście
              nawet po życiowej burzy.
            </p>

            <div className="bg-accent/10 rounded-lg p-6 my-8 border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-lg">O książce</h3>
              </div>
              <p className="mb-3 leading-relaxed">
                Ten artykuł omawia praktyczne wykorzystanie książki{" "}
                <Link
                  href="/ksiazki/czasami-szczesliwi-rodzice"
                  className="text-accent font-semibold hover:underline"
                >
                  „Czasami szczęśliwi rodzice mieszkają oddzielnie"
                </Link>{" "}
                w rozmowie z dzieckiem o rozwodzie rodziców.
              </p>
              <p className="text-sm text-muted-foreground">
                Zobacz także:{" "}
                <Link
                  href="/biblioterapia/scenariusze/muzeum-milosci-rozwod"
                  className="text-accent hover:underline"
                >
                  Gotowy scenariusz zajęć biblioterapeutycznych
                </Link>
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Helena i Hektor: dwie historie, wspólna podróż
            </h2>
            <p className="mb-6 leading-relaxed">
              Helena dowiaduje się przy niedzielnym śniadaniu, że jej rodzice
              postanowili się rozstać. Informacja pada spokojnie, niemal
              mimochodem. Dziewczynka początkowo reaguje obojętnością, ale po
              wyjściu z domu wybucha płaczem, zadając sobie pytania, które nurtują
              większość dzieci w podobnej sytuacji:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Czy rodzice przestali się kochać?</li>
              <li>Czy to moja wina?</li>
              <li>Czy przestaną kochać również mnie?</li>
            </ul>

            <p className="mb-6 leading-relaxed">
              Na osiedlu Helena spotyka Hektora – swojego najlepszego przyjaciela,
              który od dawna mieszka tylko z mamą. Rozmowa prowadzi do wspólnego
              wniosku: dorośli są trudni do zrozumienia, a miłość nie powinna tak
              po prostu znikać. Wtedy pojawia się tajemnicza staruszka, która
              proponuje dzieciom, że pokaże im sposób na zrozumienie świata
              dorosłych – prowadzi ich do niezwykłego <strong>Muzeum Miłości</strong>.
            </p>

            <div className="bg-background-alt rounded-lg p-6 my-8 border-l-4 border-accent">
              <p className="text-lg italic">
                "Dorośli często zapominają, że dzieci potrzebują nie tylko
                wyjaśnień, ale także przestrzeni do przeżycia własnych emocji.
                Muzeum Miłości daje im tę przestrzeń."
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Muzeum Miłości: symboliczna podróż przez emocje
            </h2>
            <p className="mb-6 leading-relaxed">
              Muzeum Miłości to nie zwykłe muzeum – to terapeutyczna przestrzeń,
              w której dzieci przechodzą przez kolejne etapy zrozumienia i
              przepracowania sytuacji rozwodu rodziców. Każda sala ma swoje
              znaczenie i pomaga dzieciom uporać się z konkretnymi emocjami.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3 flex items-center gap-2">
              <Heart className="h-6 w-6 text-accent" />
              Sala pamiątek: Miłość naprawdę istniała
            </h3>
            <p className="mb-6 leading-relaxed">
              Pierwsza przestrzeń w muzeum to sala pełna pamiątek z dzieciństwa
              dorosłych. Inne dzieci odnajdują tam przedmioty i wspomnienia swoich
              rodziców. Hektor odkrywa obraz i album przedstawiające jego rodziców
              jako zakochanych młodych ludzi i szczęśliwą rodzinę. Helena ogląda
              nagranie z własnych wakacji, uświadadamiając sobie, że jej rodzice
              naprawdę byli szczęśliwi i że ich miłość istniała.
            </p>

            <div className="bg-primary/10 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-3">💡 Wskazówka dla rodziców:</h4>
              <p className="leading-relaxed">
                Pokażcie dziecku zdjęcia, nagrania z czasów, gdy byliście szczęśliwi.
                To pomoże mu zrozumieć, że wasze uczucie było prawdziwe, a rozstanie
                nie przekreśla pięknych wspomnień. Możecie powiedzieć: "Patrz, to
                my na wakacjach. Wtedy naprawdę byliśmy szczęśliwi razem. Ta miłość
                istniała i dzięki niej jesteś ty."
              </p>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden my-8">
              <Image
                src="/uploads/szcze_s_liwi_rodzice_1.jpg"
                alt="Ilustracja z książki - dzieci w Muzeum Miłości"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Gra „Zwyczajne życie": Zrozumieć świat dorosłych
            </h3>
            <p className="mb-6 leading-relaxed">
              Kolejnym etapem jest gra, w której dzieci wcielają się w dorosłych.
              Helena zostaje lekarką, Hektor kierowcą ciężarówki. Gra pokazuje,
              jak trudno pogodzić pracę, rodzinę, obowiązki i własne potrzeby.
            </p>

            <p className="mb-6 leading-relaxed">
              Oboje „przegrywają" – Helena traci poczucie szczęścia, bo zapomina
              o sobie, a Hektor nie potrafi być jednocześnie dobrym pracownikiem,
              mężem i ojcem. Dzięki temu zaczynają rozumieć, że dorośli często są
              zmęczeni, zagubieni i nie radzą sobie z własnymi emocjami.
            </p>

            <div className="bg-secondary-light rounded-lg p-6 my-8">
              <h4 className="font-serif text-xl font-semibold mb-3">
                Czego uczą się dzieci w tej grze?
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dorośli też mają trudności i popełniają błędy</li>
                <li>Czasami miłość nie wystarcza, by wszystko było dobrze</li>
                <li>Rodzice nie rozwodzą się, bo przestali kochać dziecko</li>
                <li>Życie dorosłych jest skomplikowane</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Ambulans emocjonalny: Można płakać i złościć się
            </h3>
            <p className="mb-6 leading-relaxed">
              Po grze dzieci trafiają do „ambulansu emocjonalnego" – miejsca,
              gdzie mogą bezpiecznie wyrazić swoje uczucia:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Helena wybiera oddział żalu</strong>, gdzie może wypłakać
                stratę dotychczasowego obrazu domu
              </li>
              <li>
                <strong>Hektor trafia na oddział złości</strong>, gdzie wyraża
                gniew wobec nieobecnego ojca
              </li>
            </ul>

            <p className="mb-6 leading-relaxed">
              Oboje uczą się fundamentalnej prawdy: <strong>smutek i złość są
              naturalne i potrzebne</strong>. Nie trzeba być dzielnym za wszelką
              cenę. Można płakać. Można się złościć. To zdrowe reakcje na trudną
              sytuację.
            </p>

            <div className="bg-primary/10 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-3">💡 Wskazówka dla rodziców:</h4>
              <p className="leading-relaxed mb-3">
                Stwórzcie dziecku bezpieczną przestrzeń do wyrażania emocji.
                Możecie powiedzieć:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>"Możesz płakać, kiedy jest ci smutno"</li>
                <li>"Możesz powiedzieć, że jesteś zły na tatę/mamę"</li>
                <li>"Wszystkie twoje uczucia są w porządku"</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Pamiętajcie: dziecko, które nie dostaje pozwolenia na złość czy
                smutek, może skierować te emocje do wewnątrz lub winić siebie.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Najważniejszy komunikat: To nie twoja wina
            </h3>
            <p className="mb-6 leading-relaxed">
              Podczas spotkania w muzeum dzieci słyszą wyraźny komunikat:
              <strong> rozstanie rodziców nigdy nie jest winą dzieci</strong>.
              Uczestnicy piszą listy do rodziców, wyrażając żal, pretensje i lęki.
            </p>

            <p className="mb-6 leading-relaxed">
              Helena nie potrafi jeszcze nazwać swoich uczuć – puszcza papierowy
              samolot z prostym zdaniem: <em>„Bądźcie szczęśliwi"</em>. Ten moment
              pokazuje, że dzieci często bardziej martwią się o szczęście rodziców
              niż o własne, i że potrzebują czasu, by zrozumieć własne emocje.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Podlewanie miłością: Miłość nie znika
            </h3>
            <p className="mb-6 leading-relaxed">
              W końcowej części muzealnej wędrówki dzieci doświadczają
              symbolicznego „podlewania miłością" i seansu filmowego, który
              pokazuje kluczową prawdę: <strong>każdy człowiek nosi w sobie miłość
              zasianą przez rodziców już przed narodzinami</strong>.
            </p>

            <p className="mb-6 leading-relaxed">
              Miłość może być pielęgnowana przez różne osoby – babcie, dziadków,
              ciocie, wujków, nauczycieli, przyjaciół – i nie znika nawet wtedy,
              gdy rodzice się rozstają. To jedna z najważniejszych lekcji książki.
            </p>

            <div className="bg-background-alt rounded-lg p-6 my-8 border-l-4 border-accent">
              <p className="text-lg italic">
                "Miłość nie znika, gdy rodzice się rozstają. Po prostu zmienia
                formę. Jak woda, która może być lodem, ciekłą lub parą – to wciąż
                ta sama substancja, tylko w innej postaci."
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Po powrocie z muzeum: szczęście w nieszczęściu
            </h2>
            <p className="mb-6 leading-relaxed">
              Po powrocie do domu Helena rozmawia z tatą, który opowiada jej
              historię ze swojego dzieciństwa o „szczęściu w nieszczęściu".
              Dziewczynka zaczyna rozumieć, że rozstanie rodziców nie musi
              oznaczać końca szczęścia.
            </p>

            <p className="mb-6 leading-relaxed">
              Z czasem jej mama i tata układają sobie życie na nowo. Helena
              dostaje wymarzonego psa – Czekoladę – który staje się symbolem
              gojenia się ran, a Hektor zyskuje „przyszywanego" starszego brata.
              Życie toczy się dalej, a dzieci uczą się odnajdywać szczęście w
              nowej rzeczywistości.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Jak wykorzystać książkę w rozmowie z dzieckiem?
            </h2>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Przed przeczytaniem książki
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Wybierz odpowiedni moment</strong> – nie podczas kłótni,
                nie tuż po ogłoszeniu decyzji o rozwodzie
              </li>
              <li>
                <strong>Przeczytaj książkę najpierw sam</strong> – upewnij się,
                że jesteś gotowy emocjonalnie
              </li>
              <li>
                <strong>Zapowiedzmy lekturę</strong> – "Przeczytamy razem książkę
                o dziewczynce, której rodzice się rozstali, tak jak my"
              </li>
              <li>
                <strong>Stwórz bezpieczną przestrzeń</strong> – cichy pokój, bez
                rozpraszaczy, przytulcie się razem
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Podczas czytania
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Czytaj powoli</strong> – daj dziecku czas na przetworzenie
              </li>
              <li>
                <strong>Obserwuj reakcje</strong> – czy dziecko się wycofuje, czy
                chce rozmawiać?
              </li>
              <li>
                <strong>Pytaj delikatnie</strong> – "Co teraz czuje Helena?", "Czy
                ty też czasami tak się czujesz?"
              </li>
              <li>
                <strong>Waliduj emocje</strong> – "Widzę, że ta część jest dla
                ciebie trudna. To normalne"
              </li>
              <li>
                <strong>Nie wymuszaj</strong> – jeśli dziecko nie chce, przeczytaj
                ponownie za kilka dni. Można też na początku ograniczyć się do
                wspólnego oglądania ilustracji
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Po przeczytaniu książki
            </h3>

            <div className="bg-secondary-light rounded-lg p-6 my-6">
              <h4 className="font-serif text-xl font-semibold mb-3">
                Aktywności inspirowane książką
              </h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">
                    1. Napisz list do rodziców (jak Helena)
                  </h5>
                  <p className="text-sm leading-relaxed">
                    Zachęć dziecko do napisania listu wyrażającego jego uczucia.
                    Może to być list z pretensji, ze strachu, z miłości. Dziecko
                    może go pokazać rodzicom lub zatrzymać dla siebie – to jego
                    wybór.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">
                    2. Stwórzcie album wspomnień (jak w Sali Pamiątek)
                  </h5>
                  <p className="text-sm leading-relaxed">
                    Zbierzcie razem zdjęcia z czasów, gdy byliście szczęśliwi jako
                    rodzina. To pomoże dziecku zrozumieć, że ta miłość istniała i
                    dzięki niej jest na świecie.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">
                    3. Podlewajcie miłością (symboliczny rytuał)
                  </h5>
                  <p className="text-sm leading-relaxed">
                    Zasadźcie razem roślinę lub kwiatek. Niech będzie symbolem
                    miłości, która rośnie i nie znika, nawet gdy rodzice mieszkają
                    oddzielnie. Codzienne podlewanie może być rytuałem przypominającym,
                    że miłość trwa.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">
                    4. Ambulans emocjonalny w domu
                  </h5>
                  <p className="text-sm leading-relaxed">
                    Stwórzcie bezpieczne miejsce, gdzie dziecko może wyrażać emocje
                    – kącik z poduszkami do płaczu, worek treningowy do wyładowania
                    złości, zeszyt do pisania lub rysowania uczuć.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Pytania do rozmowy po przeczytaniu
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Co najbardziej podobało ci się w Muzeum Miłości?</li>
              <li>Czy ty też czasami czujesz się jak Helena?</li>
              <li>Co pomogło Helenie poczuć się lepiej?</li>
              <li>Czy chciałbyś/chciałabyś napisać swój list, jak Helena?</li>
              <li>Jakie wspomnienia z naszej rodziny są dla ciebie najważniejsze?</li>
              <li>Jak myślisz, dlaczego miłość nie znika, nawet gdy rodzice się rozstają?</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Kiedy sięgnąć po tę książkę?
            </h2>

            <div className="bg-primary/10 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-3">Książka jest idealna, gdy:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Planujesz powiedzieć dziecku o decyzji o rozstaniu</li>
                <li>Dziecko zadaje trudne pytania o rozwód</li>
                <li>Dziecko obwinia siebie za rozstanie rodziców</li>
                <li>Dziecko wyraża lęk, że rodzice przestaną je kochać</li>
                <li>Dziecko ma trudności z wyrażaniem emocji związanych z rozwodem</li>
                <li>Chcesz pokazać dziecku, że jego uczucia są normalne</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Czego unika ta książka?
            </h2>
            <p className="mb-6 leading-relaxed">
              „Czasami szczęśliwi rodzice mieszkają oddzielnie" nie obiecuje, że
              wszystko będzie jak dawniej. Nie sugeruje, że rodzice się pogodzą.
              Zamiast tego pokazuje, że:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Życie po rozwodzie może być inne, ale wciąż dobre</li>
              <li>Miłość rodziców do dziecka nie znika</li>
              <li>Emocje dziecka są ważne i zasługują na uwagę</li>
              <li>Można znaleźć szczęście w nowej rzeczywistości</li>
            </ul>

            <p className="mb-6 leading-relaxed">
              To uczciwe, realistyczne podejście, które nie bagatelizuje cierpienia
              dzieci, ale jednocześnie daje nadzieję na lepsze jutro.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Podsumowanie: podróż przez Muzeum Miłości
            </h2>
            <p className="mb-6 leading-relaxed">
              „Czasami szczęśliwi rodzice mieszkają oddzielnie" to wyjątkowa
              książka, która poprzez magiczną metaforę Muzeum Miłości prowadzi
              dzieci przez najtrudniejsze emocje związane z rozstaniem rodziców.
            </p>

            <p className="mb-6 leading-relaxed">
              Książka nie obiecuje cudownych rozwiązań, ale daje dzieciom coś
              znacznie cenniejszego – zrozumienie, walidację uczuć i nadzieję, że
              życie może być dobre nawet po wielkiej zmianie. Helena i Hektor
              uczą się, że miłość nie znika, że ich emocje są ważne i że nie są
              winne rozstania rodziców.
            </p>

            <p className="leading-relaxed">
              Jeśli ty lub ktoś z twoich bliskich przechodzi przez rozwód,{" "}
              <a
                href="https://albus.poznan.pl/sklep/1179_czasami-szczesliwi-rodzice-mieszkaja-oddzielnie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                książka „Czasami szczęśliwi rodzice mieszkają oddzielnie"
              </a>{" "}
              może stać się mostkiem do trudnej, ale uzdrawiającej rozmowy z
              dzieckiem.
            </p>

            <div className="bg-accent/10 rounded-lg p-6 my-8 text-center">
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold mb-3">
                Chcesz pomóc swojemu dziecku?
              </h3>
              <p className="mb-4 leading-relaxed">
                Książka dostępna jest w wydawnictwie Albus
              </p>
              <Button asChild size="lg">
                <a
                  href="https://albus.poznan.pl/sklep/1179_czasami-szczesliwi-rodzice-mieszkaja-oddzielnie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zamów książkę
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Przeczytaj również
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background-alt rounded-lg p-6">
                <h4 className="font-semibold mb-2">
                  <Link
                    href="/artykuly/ksiazki-w-terapii"
                    className="hover:text-accent transition-colors"
                  >
                    Książki w terapii – jak wykorzystać literaturę w pracy z
                    dziećmi i dorosłymi
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Dowiedz się, jak biblioterapia może wspierać proces
                  terapeutyczny i pomagać w przepracowywaniu trudnych emocji.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/artykuly/ksiazki-w-terapii">Czytaj więcej</Link>
                </Button>
              </div>

              <div className="bg-background-alt rounded-lg p-6">
                <h4 className="font-semibold mb-2">
                  <Link
                    href="/artykuly/historia-zosi-i-ksiazki-zaba"
                    className="hover:text-accent transition-colors"
                  >
                    Jak rozmawiać z dzieckiem o stracie? Historia Zosi i książki
                    Żaba
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Praktyczny przykład wykorzystania książki o żałobie w pracy z
                  dzieckiem po stracie bliskiej osoby.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/artykuly/historia-zosi-i-ksiazki-zaba">
                    Czytaj więcej
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}