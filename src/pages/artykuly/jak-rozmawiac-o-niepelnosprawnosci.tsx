import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, BookOpen, Heart, Users, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NiepelnosprawoscArticle() {
  return (
    <Layout>
      <SEO
        title="Jak rozmawiać z dzieckiem o niepełnosprawności? Ptaki z kopertami"
        description="Książka 'Nie znajdziesz mnie po śladach stóp' Sylwii Błach to szczera rozmowa osoby poruszającej się na wózku z dzieckiem. Jak mówić o różnorodności i empatii?"
        url="https://ksiazki-do-zadan-specjalnych.pl/artykuly/jak-rozmawiac-o-niepelnosprawnosci"
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
              Edukacja
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Jak rozmawiać z dzieckiem o niepełnosprawności? Ptaki z kopertami
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
                src="/uploads/978-83-67085-30-4_Nie_znajdziesz_mnie_po_s_ladach_sto_p_ALBUS.jpg"
                alt="Nie znajdziesz mnie po śladach stóp - okładka książki"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              <strong>"Jak to jest jeździć na wózku?"</strong> – pyta sześcioletnia Dobrawa. To proste, 
              dziecięce pytanie otwiera drzwi do niezwykłej rozmowy w książce{" "}
              <a 
                href="https://albus.poznan.pl/sklep/1463_nie-znajdziesz-mnie-po-sladach-stop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                "Nie znajdziesz mnie po śladach stóp"
              </a>{" "}
              Sylwii Błach. Narratorka – dorosła kobieta poruszająca się na wózku elektrycznym 
              – szybko zdaje sobie sprawę, że nie ma jednej, krótkiej odpowiedzi. Bo życie na 
              wózku to nie tylko jedna historia – to mozaika doświadczeń, emocji, wyzwań i radości.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Kiedy głowa pęka od pytań: ptaki z kopertami
            </h2>
            <p className="mb-6 leading-relaxed">
              Gdy Dobrawa nalega na odpowiedź, narratorce "pęka głowa" – i z niej wylatują 
              <strong> kolorowe ptaki z kopertami</strong>. Każda koperta zawiera jedno wspomnienie, 
              jedno doświadczenie, jeden fragment odpowiedzi na pytanie: "Jak to jest żyć z 
              niepełnosprawnością?"
            </p>
            <p className="mb-6 leading-relaxed">
              To piękna metafora pokazująca, że <strong>niepełnosprawność nie jest jednorodnym 
              doświadczeniem</strong>. To wielowymiarowa rzeczywistość, którą trudno zamknąć w 
              prostym zdaniu. Każdy ptak niesie inną prawdę – o miłości, strachu, wykluczeniu, 
              radości, wstydie, odwadze.
            </p>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden my-8">
              <Image
                src="/uploads/ALBUS_Nie_znajdziesz_mnie_03.jpg"
                alt="Ilustracja z książki - ptaki z kopertami"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Co kryje się w kopertach? Wielowymiarowa opowieść
            </h2>
            <p className="mb-6 leading-relaxed">
              Książka Sylwii Błach nie unika trudnych tematów. Narratorka dzieli się z Dobrawą 
              (i z nami) swoimi doświadczeniami – tymi pięknymi i tymi bolesnymi. Oto niektóre 
              z "kopert", które warto znać przed przeczytaniem książki z dzieckiem:
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              1. Dzieciństwo i miłość rodziców
            </h3>
            <p className="mb-6 leading-relaxed">
              Narratorka wspomina rodziców, którzy uczyli ją odwagi i zaufania do świata. To 
              przypomnienie, że <strong>osoby z niepełnosprawnościami, jak wszyscy ludzie, mają 
              swoją historię, rodzinę i korzenie</strong>. Niepełnosprawność nie definiuje całego 
              życia – jest jego częścią.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              2. Życie z pomocą innych
            </h3>
            <p className="mb-6 leading-relaxed">
              Narratorka potrzebuje wsparcia rodziny, opiekunek, asystentek. To bywa wspierające, 
              ale czasem odbiera poczucie samodzielności. <strong>Kluczowa lekcja: zawsze pytaj, 
              czy ktoś potrzebuje pomocy, zanim zaczniesz pomagać.</strong> Pomaganie bez pytania 
              może być niebezpieczne i naruszać granice.
            </p>

            <div className="bg-background-alt rounded-lg p-6 my-8 border-l-4 border-accent">
              <p className="text-lg italic mb-4">
                "Jak często ci to się zdarza?"
              </p>
              <p className="text-base leading-relaxed">
                Jedna z kopert opowiada o sytuacji, gdy ktoś pomógł bez pytania – i to mogło 
                skończyć się niebezpiecznie. Książka uczy dzieci prostej zasady: <strong>najpierw 
                zapytaj, czy ktoś potrzebuje pomocy. Potem słuchaj odpowiedzi.</strong>
              </p>
            </div>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              3. Wykluczenie i "wybrana rodzina"
            </h3>
            <p className="mb-6 leading-relaxed">
              Przedszkola nie chciały przyjąć małej dziewczynki na wózku. To bolesne wspomnienie 
              o <strong>systemowym wykluczeniu</strong>, które dotyka wiele osób z niepełnosprawnościami. 
              Ale narratorka odkrywa także, że rodzinę można "wybrać" – że nie zawsze bliscy to ci, 
              którzy są z nami od urodzenia.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              4. Uprzedzenia i dyskryminacja
            </h3>
            <p className="mb-6 leading-relaxed">
              Lekarz, który nie traktuje jej potrzeb poważnie. Obcy ludzie, którzy gapią się, 
              komentują, oceniają. <strong>Niepełnosprawność nie oznacza, że ktoś jest mniej 
              ważny, mniej kompetentny, mniej ludzki.</strong> To ważna lekcja dla dzieci – 
              i dla dorosłych.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              5. Wstyd – i decyzja, by się już nie wstydzić
            </h3>
            <p className="mb-6 leading-relaxed">
              W młodości narratorka wstydziła się swojego ciała i wózka. To odebrało jej część 
              doświadczeń. Ale w pewnym momencie podjęła decyzję: <strong>już nie będę się siebie 
              wstydzić</strong>. To potężne przesłanie o akceptacji siebie i prawie do zajmowania 
              przestrzeni.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              6. Radość z zabawy i kreatywność
            </h3>
            <p className="mb-6 leading-relaxed">
              Nie wszystkie wspomnienia są trudne! Narratorka opowiada o wspólnych grach z dziećmi, 
              dostosowywanych do jej możliwości. <strong>Osoby z niepełnosprawnościami bawią się, 
              śmieją, cieszą – tak jak wszyscy.</strong> Czasem potrzeba tylko odrobiny kreatywności, 
              by włączyć wszystkich do zabawy.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              7. Bariery architektoniczne
            </h3>
            <p className="mb-6 leading-relaxed">
              Brak podjazdu, zbyt wąskie drzwi, schodki tam, gdzie mogłaby być rampa. Narratorka 
              opisuje, jak bariery sprawiają, że czuje się <strong>mniej ważna</strong> – choć często 
              wystarczyłby drobny gest lub małe udogodnienie. To lekcja o projektowaniu świata dla 
              wszystkich.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              8. Lęki i ich oswajanie
            </h3>
            <p className="mb-6 leading-relaxed">
              Strach przed szpitalami, przed bólem, przed tym, co nieznane. <strong>Osoby z 
              niepełnosprawnościami mają lęki – tak jak wszyscy.</strong> I uczą się je oswajać, 
              nazywać, przekraczać.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              9. Ableizm: nadmierne zachwycanie się
            </h3>
            <p className="mb-6 leading-relaxed">
              <em>"Wow, a ty sama się ubierasz?! Ale jesteś dzielna!"</em> – to przykład 
              <strong> ableizmu</strong>, czyli podejścia, które traktuje zwykłe czynności osoby 
              z niepełnosprawnością jako heroiczne osiągnięcia. Narratorka delikatnie, ale wyraźnie 
              tłumaczy, że <strong>nie chce być traktowana jak inspiracja za robienie codziennych 
              rzeczy</strong>.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              10. Miłość i relacje
            </h3>
            <p className="mb-6 leading-relaxed">
              Narratorka opowiada o poznaniu partnera, który widzi w niej przede wszystkim człowieka, 
              a nie wózek. <strong>Osoby z niepełnosprawnościami kochają, są kochane, tworzą związki 
              – jak wszyscy ludzie.</strong> Niepełnosprawność nie odbiera tego prawa.
            </p>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden my-8">
              <Image
                src="/uploads/ALBUS_Nie_znajdziesz_mnie_15.jpg"
                alt="Ilustracja z książki - życie na wózku"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Posypka na lodach: niepełnosprawność jako jedna z cech
            </h2>
            <p className="mb-6 leading-relaxed">
              Jednym z najpiękniejszych przesłań książki jest metafora <strong>posypki na lodach</strong>. 
              Narratorka tłumaczy Dobrawie, że niepełnosprawność jest jedną z jej cech – tak jak posypka 
              wpływa na smak lodów, ale nie jest całością. <strong>Niepełnosprawność nie definiuje 
              człowieka.</strong>
            </p>
            <p className="mb-6 leading-relaxed">
              To kluczowe przesłanie dla dzieci: osoba na wózku to przede wszystkim <strong>osoba</strong> 
              – z własnymi pasjami, marzeniami, poczuciem humoru, charakterem. Wózek jest narzędziem, 
              które daje wolność i niezależność, a nie więzieniem.
            </p>

            <div className="bg-secondary-light rounded-lg p-6 my-8">
              <h3 className="font-serif text-2xl font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-6 w-6 text-secondary" />
                Niepełnosprawność ma wiele twarzy
              </h3>
              <p className="mb-4 leading-relaxed">
                Narratorka podkreśla, że <strong>niepełnosprawność ma wiele form i przyczyn</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Jedni jeżdżą na wózku, inni chodzą z balkonikiem</li>
                <li>Ktoś nie widzi, ktoś inaczej myśli</li>
                <li>Jedni rodzą się chorzy, inni stają się niepełnosprawni w wyniku wypadku</li>
                <li>Czasem wózek jest po prostu bezpieczniejszym rozwiązaniem</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                <strong>Osoby z niepełnosprawnościami nie są jednorodne</strong> – różnią się 
                charakterem, nastrojem, statusem materialnym, wyglądem i zachowaniem, tak jak 
                wszyscy ludzie.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Jak wykorzystać książkę w rozmowie z dzieckiem?
            </h2>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Przed przeczytaniem
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Przeczytaj książkę najpierw sam</strong> – poznaj jej przesłanie i zastanów 
                się, które tematy mogą być trudne dla twojego dziecka
              </li>
              <li>
                <strong>Wybierz odpowiedni moment</strong> – najlepiej wtedy, gdy dziecko samo zada 
                pytanie o osobę z niepełnosprawnością lub gdy widzicie kogoś na wózku
              </li>
              <li>
                <strong>Zapowiedzmy lekturę</strong> – "Przeczytamy książkę o kobiecie, która jeździ 
                na wózku i opowiada o swoim życiu"
              </li>
              <li>
                <strong>Stwórz bezpieczną przestrzeń</strong> – znajdź spokojne miejsce, gdzie 
                możecie porozmawiać bez pośpiechu
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Podczas czytania
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Czytaj powoli</strong> – daj dziecku czas na przetworzenie informacji i emocji
              </li>
              <li>
                <strong>Obserwuj reakcje</strong> – jeśli dziecko jest zaciekawione, zadawaj pytania; 
                jeśli się wycofuje, daj mu przestrzeń
              </li>
              <li>
                <strong>Pytaj delikatnie</strong> – "Co myślisz o tej historii?", "Czy coś cię 
                zaskoczyło?", "Czy masz pytania?"
              </li>
              <li>
                <strong>Waliduj emocje</strong> – jeśli dziecko jest smutne, zaskoczone lub 
                ciekawe – powiedz, że to normalne
              </li>
              <li>
                <strong>Nie wymuszaj</strong> – jeśli dziecko nie chce, zaproponuj ponownie za 
                kilka dni. Można też na początku ograniczyć się do wspólnego oglądania ilustracji
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3">
              Po przeczytaniu
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Porozmawiajcie o książce</strong> – "Co najbardziej ci się podobało?", 
                "Która część była najtrudniejsza?"
              </li>
              <li>
                <strong>Powiąż z codziennym życiem</strong> – "Czy widziałeś kiedyś kogoś na 
                wózku?", "Co byś zrobił, gdybyś zobaczył kogoś, kto potrzebuje pomocy?"
              </li>
              <li>
                <strong>Zaproponuj aktywność</strong> – narysowanie własnych "ptaków z kopertami" 
                z różnymi historiami o sobie
              </li>
              <li>
                <strong>Bądź dostępny na dalszą rozmowę</strong> – dziecko może wrócić do tematu 
                po jakimś czasie
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Aktywności inspirowane książką
            </h2>

            <div className="space-y-6 my-8">
              <div className="bg-background-alt rounded-lg p-6">
                <h4 className="font-serif text-xl font-semibold mb-3">
                  1. Stwórzcie własne ptaki z kopertami
                </h4>
                <p className="leading-relaxed">
                  Niech dziecko narysuje ptaki i napisze (lub opowie) swoje własne "koperty" – 
                  wspomnienia, doświadczenia, rzeczy, które je definiują. To pomoże zrozumieć, 
                  że każdy człowiek ma wiele wymiarów.
                </p>
              </div>

              <div className="bg-background-alt rounded-lg p-6">
                <h4 className="font-serif text-xl font-semibold mb-3">
                  2. Gra "Posypka na lodach"
                </h4>
                <p className="leading-relaxed">
                  Zastanówcie się razem: jakie są wasze "posypki"? Co was wyróżnia, ale nie 
                  definiuje całkowicie? Może to być kolor włosów, noszenie okularów, bycie leworzęcznym, 
                  czy ulubiony kolor. Porozmawiajcie o tym, że każdy ma swoje cechy – i wszystkie 
                  są w porządku.
                </p>
              </div>

              <div className="bg-background-alt rounded-lg p-6">
                <h4 className="font-serif text-xl font-semibold mb-3">
                  3. Ćwiczenie empatii: "Jak możemy pomóc?"
                </h4>
                <p className="leading-relaxed">
                  Zastanówcie się razem, jak można uczynić świat bardziej dostępnym. Czy w waszym 
                  przedszkolu/szkole są podjazdy? Czy wszyscy mogą wejść do waszego ulubionego 
                  sklepu? To ćwiczenie uczy dostrzegania barier i myślenia o potrzebach innych.
                </p>
              </div>

              <div className="bg-background-alt rounded-lg p-6">
                <h4 className="font-serif text-xl font-semibold mb-3">
                  4. Napisz list do autorki
                </h4>
                <p className="leading-relaxed">
                  Zachęć dziecko, by napisało list do Sylwii Błach z pytaniami, przemyśleniami 
                  lub podziękowaniem za książkę. To pomoże dziecku przetworzyć emocje i poczuć 
                  połączenie z autorką.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Pytania do rozmowy po przeczytaniu
            </h2>

            <div className="bg-primary/10 rounded-lg p-6 my-6">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Co najbardziej cię zaskoczyło w tej historii?</strong></span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Która "koperta" (wspomnienie) była dla ciebie najważniejsza?</strong></span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Co myślisz o metaforze "posypka na lodach"?</strong></span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Czy zdarzyło ci się kiedyś zobaczyć kogoś na wózku? Co wtedy pomyślałeś?</strong></span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Jak możemy być pomocni dla osób z niepełnosprawnościami? (Pamiętaj: zawsze pytaj!)</strong></span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Czy masz swoje "ptaki z kopertami"? Jakie są twoje ważne wspomnienia?</strong></span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Kiedy sięgnąć po tę książkę?
            </h2>
            <p className="mb-6 leading-relaxed">
              Książka{" "}
              <a 
                href="https://albus.poznan.pl/sklep/1463_nie-znajdziesz-mnie-po-sladach-stop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                "Nie znajdziesz mnie po śladach stóp"
              </a>{" "}
              jest idealna w następujących sytuacjach:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Dziecko zobaczyło osobę na wózku i zadaje pytania</li>
              <li>W przedszkolu/szkole pojawia się uczeń z niepełnosprawnością</li>
              <li>Chcesz edukować dziecko o różnorodności i empatii</li>
              <li>W rodzinie jest osoba z niepełnosprawnością</li>
              <li>Dziecko samo boryka się z chorobą lub niepełnosprawnością</li>
              <li>Chcesz nauczyć dziecko, jak zachować się w obecności osób z niepełnosprawnościami</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Kluczowe przesłanie książki
            </h2>
            <p className="mb-6 leading-relaxed">
              Sylwia Błach kończy swoją opowieść jasnym przesłaniem: <strong>każdy ma prawo zadawać 
              pytania</strong>, ale nie zawsze druga osoba musi na nie odpowiadać. Kluczowe są empatia, 
              rozmowa i gotowość do zrozumienia.
            </p>
            <p className="mb-6 leading-relaxed">
              Książka zachęca dzieci do:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Dostrzegania różnorodności</strong> – ludzie są różni i to piękne</li>
              <li><strong>Skupiania się na mocnych stronach</strong> – swoich i innych</li>
              <li><strong>Traktowania niepełnosprawności jako czegoś zwyczajnego</strong> – co nie odbiera człowieczeństwa ani wartości</li>
              <li><strong>Pytania przed pomaganiem</strong> – to prosty, ale potężny akt szacunku</li>
              <li><strong>Widzenia człowieka, a nie tylko wózka</strong> – osoba na wózku to przede wszystkim osoba</li>
            </ul>

            <div className="bg-gradient-hero rounded-lg p-8 my-12 text-center">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Gotowy na rozmowę z dzieckiem o niepełnosprawności?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Książka "Nie znajdziesz mnie po śladach stóp" to narzędzie, które pomoże ci 
                w szczerym, empatycznym dialogu. To opowieść o życiu, różnorodności i mocy 
                ludzkiego ducha.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a 
                  href="https://albus.poznan.pl/sklep/1463_nie-znajdziesz-mnie-po-sladach-stop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kup książkę w wydawnictwie Albus
                </a>
              </Button>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-4">
              Podsumowanie
            </h2>
            <p className="mb-6 leading-relaxed">
              "Nie znajdziesz mnie po śladach stóp" to książka, która zmienia sposób, w jaki 
              dzieci (i dorośli) myślą o niepełnosprawności. Zamiast lęku, buduje empatię. 
              Zamiast uprzedzeń, pokazuje pełnię człowieczeństwa. Zamiast jednego prostego 
              przesłania, oferuje wielowymiarową opowieść, która oddaje bogactwo ludzkiego 
              doświadczenia.
            </p>
            <p className="mb-6 leading-relaxed">
              Jak pisze sama Sylwia Błach: niepełnosprawność to jak posypka na lodach – wpływa 
              na smak, ale nie jest całością. To jedno z najpiękniejszych przesłań, jakie 
              możemy przekazać dzieciom: <strong>każdy człowiek jest pełen, wartościowy i 
              niepowtarzalny</strong> – niezależnie od tego, czy jeździ na wózku, czy nie.
            </p>
            <p className="leading-relaxed">
              Jeśli szukasz narzędzi do rozmowy z dzieckiem o różnorodności, empatii i 
              akceptacji – ta książka jest dla ciebie. I pamiętaj: zadawaj pytania, słuchaj 
              odpowiedzi, a przede wszystkim – dostrzeż człowieka, a nie tylko jego cechy.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Przeczytaj również
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-background-alt rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-serif text-xl font-semibold mb-2">
                  <Link href="/artykuly/ksiazki-w-terapii" className="hover:text-accent">
                    Książki w terapii – jak wykorzystać literaturę
                  </Link>
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Dowiedz się, jak biblioterapia może wspierać rozwój emocjonalny dzieci
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/artykuly/ksiazki-w-terapii">
                    Czytaj więcej
                  </Link>
                </Button>
              </div>

              <div className="bg-background-alt rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-serif text-xl font-semibold mb-2">
                  <Link href="/artykuly/muzeum-milosci-rozwod-rodzicow" className="hover:text-accent">
                    Muzeum Miłości – rozwód rodziców
                  </Link>
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Jak pomóc dziecku zrozumieć rozstanie rodziców przez symboliczną podróż
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/artykuly/muzeum-milosci-rozwod-rodzicow">
                    Czytaj więcej
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild variant="ghost">
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