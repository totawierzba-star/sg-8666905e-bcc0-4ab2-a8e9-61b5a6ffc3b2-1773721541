import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function KsiazkiWTerapiiArticle() {
  return (
    <Layout>
      <SEO
        title="Książki w terapii – jak wykorzystać literaturę w pracy z dziećmi i dorosłymi"
        description="Biblioterapia to potężne narzędzie w rękach terapeutów, pedagogów i rodziców. Dowiedz się, jak książki mogą wspierać proces terapeutyczny."
        url="https://ksiazki-do-zadan-specjalnych.pl/artykuly/ksiazki-w-terapii"
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
              Książki w terapii – jak wykorzystać literaturę w pracy z dziećmi
              i dorosłymi
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Redakcja</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15 stycznia 2026</span>
              </div>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png"
                alt="Książki w terapii"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Biblioterapia, czyli terapia przez książki, to metoda
              wykorzystująca literaturę jako narzędzie wspierające proces
              psychoterapeutyczny. W rękach doświadczonego terapeuty, pedagoga
              czy świadomego rodzica, odpowiednio dobrana książka może stać się
              kluczem do przepracowania trudnych emocji i doświadczeń.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Czym jest biblioterapia?
            </h2>
            <p className="mb-6 leading-relaxed">
              Biblioterapia to metoda terapeutyczna wykorzystująca literaturę do
              wspierania zdrowia psychicznego i emocjonalnego. Może być
              stosowana zarówno w pracy indywidualnej, jak i grupowej, z dziećmi
              i dorosłymi. Jej siła tkwi w możliwości identyfikacji z bohaterami
              książek i bezpiecznego eksplorowania trudnych tematów poprzez
              narrację literacką.
            </p>

            <div className="bg-background-alt rounded-lg p-6 my-8 border-l-4 border-accent">
              <p className="text-lg italic">
                "Czytanie odpowiedniej książki we właściwym momencie może być
                równie skuteczne jak sesja terapeutyczna. Literatura pozwala nam
                spojrzeć na własne doświadczenia z bezpiecznej odległości."
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Dlaczego książki działają terapeutycznie?
            </h2>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              1. Dystans i bezpieczeństwo
            </h3>
            <p className="mb-6 leading-relaxed">
              Książka pozwala dziecku lub dorosłemu "podejść" do trudnego
              tematu bez bezpośredniej konfrontacji. Kiedy czytamy o bohaterze
              przeżywającym stratę, możemy obserwować jego emocje i reakcje,
              jednocześnie zachowując bezpieczny dystans od własnego bólu.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              2. Normalizacja doświadczeń
            </h3>
            <p className="mb-6 leading-relaxed">
              Zobaczenie, że bohater książki przechodzi przez podobne
              doświadczenia, pomaga zrozumieć, że nasze emocje są normalne i
              naturalne. To szczególnie ważne dla dzieci, które często myślą, że
              są "jedyne" w swoich przeżyciach.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              3. Modelowanie strategii radzenia sobie
            </h3>
            <p className="mb-6 leading-relaxed">
              Obserwując, jak bohaterowie książek radzą sobie z trudnościami,
              dzieci i dorośli uczą się nowych strategii i mechanizmów
              obronnych. Książka może pokazać, że płacz jest w porządku, że
              można prosić o pomoc, że smutek nie trwa wiecznie.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              4. Otwarcie na rozmowę
            </h3>
            <p className="mb-6 leading-relaxed">
              Wspólne czytanie książki tworzy naturalną okazję do rozmowy o
              trudnych tematach. Rodzic czy terapeuta może zadawać pytania:
              "Jak myślisz, co teraz czuje bohater?", "Czy ty też czasami tak
              się czujesz?", "Co byś zrobił na miejscu bohatera?".
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Jak wykorzystać książki w pracy terapeutycznej?
            </h2>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Przed czytaniem
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Dobierz książkę do wieku i etapu rozwoju dziecka</strong> –
                młodsze dzieci potrzebują prostszych narracji z ilustracjami
              </li>
              <li>
                <strong>Upewnij się, że temat jest odpowiedni</strong> – nie
                wszystkie dzieci są gotowe na każdy temat w tym samym momencie
              </li>
              <li>
                <strong>Stwórz bezpieczną przestrzeń</strong> – znajdź spokojne
                miejsce, wyłącz rozpraszacze, przytul się razem
              </li>
              <li>
                <strong>Zapowiedzmy temat</strong> – "Przeczytamy książkę o
                dziewczynce, która straciła babcię, tak jak my straciliśmy dziadka"
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Podczas czytania
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Czytaj powoli i z empatią</strong> – daj dziecku czas na
                przetworzenie emocji
              </li>
              <li>
                <strong>Obserwuj reakcje</strong> – jeśli dziecko jest gotowe,
                zadawaj pytania; jeśli się wycofuje, daj mu przestrzeń
              </li>
              <li>
                <strong>Waliduj emocje</strong> – "Widzę, że ta część jest dla
                ciebie trudna. To normalne, że się tak czujesz"
              </li>
              <li>
                <strong>Pozwól na przerwy</strong> – nie musicie przeczytać całej
                książki za jednym razem
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Po przeczytaniu
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Porozmawiajcie o książce</strong> – "Co najbardziej ci się
                podobało?", "Która część była najtrudniejsza?"
              </li>
              <li>
                <strong>Powiąż z doświadczeniem dziecka</strong> – "Czy ty też
                czasami tak się czujesz?", "Co pomaga tobie, gdy jest ci smutno?"
              </li>
              <li>
                <strong>Zaproponuj aktywność twórczą</strong> – narysowanie
                ulubionej sceny, napisanie listu do bohatera
              </li>
              <li>
                <strong>Bądź dostępny na dalszą rozmowę</strong> – dziecko może
                wrócić do tematu po jakimś czasie
              </li>
            </ul>

            <div className="bg-secondary-light rounded-lg p-6 my-8">
              <h3 className="font-serif text-2xl font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-secondary" />
                Praktyczny przykład
              </h3>
              <p className="mb-4 leading-relaxed">
                7-letnia Zosia straciła babcię pół roku temu. Rodzice zauważyli,
                że dziewczynka stała się wycofana, często płacze bez powodu, ale
                nie chce rozmawiać o babci. Mama postanowiła przeczytać z nią
                książkę "Żaba. Mała opowieść o żałobie".
              </p>
              <p className="mb-4 leading-relaxed">
                Podczas pierwszego czytania Zosia milczała, ale trzymała się
                mocno mamy. Po kilku dniach sama poprosiła o ponowne przeczytanie.
                Tym razem powiedziała: "Ja też tak czuję. Czasami myślę, że to
                moja wina". To otworzyło drzwi do długiej, leczniczej rozmowy.
              </p>
              <p className="leading-relaxed">
                Książka stała się pomostem między niemożnością mówienia o
                stracie a potrzebą przepracowania żałoby. Zosia wróciła do niej
                jeszcze kilka razy, za każdym razem otwierając się trochę bardziej.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Kiedy biblioterapia może nie wystarczyć?
            </h2>
            <p className="mb-6 leading-relaxed">
              Choć książki są potężnym narzędziem, nie zastąpią profesjonalnej
              terapii w przypadku poważniejszych problemów psychicznych.
              Biblioterapia jest wsparciem, nie leczeniem. Jeśli zauważasz u
              dziecka lub u siebie:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Długotrwałe objawy depresji lub lęku</li>
              <li>Myśli samobójcze</li>
              <li>Znaczące trudności w funkcjonowaniu codziennym</li>
              <li>Traumatyczne doświadczenia wymagające specjalistycznej interwencji</li>
            </ul>
            <p className="mb-6 leading-relaxed">
              ...koniecznie skonsultuj się z psychologiem lub psychiatrą.
              Biblioterapia może być wtedy elementem kompleksowego leczenia, ale
              pod nadzorem specjalisty.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Podsumowanie
            </h2>
            <p className="mb-6 leading-relaxed">
              Książki mają niezwykłą moc uzdrawiania, normalizowania i
              otwierania drzwi do trudnych rozmów. W rękach empatycznego
              dorosłego mogą stać się kluczem do przepracowania żałoby, lęku,
              gniewu czy wstydu. Pamiętajmy jednak, że to narzędzie, a nie
              samodzielne rozwiązanie – najważniejsza jest obecność, cierpliwość
              i gotowość do wysłuchania.
            </p>
            <p className="leading-relaxed">
              Jeśli szukasz książek do pracy terapeutycznej, zapraszamy do
              zapoznania się z naszą serią "Książki do zadań specjalnych" –
              stworzoną właśnie z myślą o wspieraniu dzieci i rodziców w
              najtrudniejszych momentach życia.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Przeczytaj również
            </h3>
            <div className="bg-background-alt rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                Więcej artykułów wkrótce...
              </p>
              <Button asChild variant="outline">
                <Link href="/artykuly">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Wróć do wszystkich artykułów
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}