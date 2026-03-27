import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { 
  ArrowLeft, 
  Download, 
  Users, 
  Clock, 
  BookOpen,
  Sparkles,
  FileQuestion,
  MessageCircle,
  IceCream,
  Bird,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function MojePtakiIPosypkiPage() {
  return (
    <Layout>
      <SEO
        title="Moje ptaki i moje posypki - scenariusz o różnorodności"
        description="Scenariusz zajęć biblioterapeutycznych uczący dzieci empatii i mądrego pomagania osobom z niepełnosprawnością. Inspirowany książką 'Nie znajdziesz mnie po śladach stóp'."
        url="https://biblioterapia.org/biblioterapia/scenariusze/moje-ptaki-i-posypki"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <article className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link 
                href="/biblioterapia/narzedziownik"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Powrót do Narzędziownika
              </Link>
            </div>

            {/* Header */}
            <div className="bg-card border rounded-2xl p-8 mb-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                  Różnorodność i Empatia
                </span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Moje ptaki i moje posypki, czyli lekcja o różnorodności
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Scenariusz zajęć inspirowanych książką „Nie znajdziesz mnie po śladach stóp" (Sylwia Błach). Dzieci uczą się, że niepełnosprawność to tylko jedna z wielu cech człowieka – jak posypka na lodach – i poznają Złotą Zasadę mądrego pomagania.
              </p>

              <div className="flex flex-wrap gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span><strong>Czas:</strong> 45-60 minut</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span><strong>Wiek:</strong> 6-10 lat</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span><strong>Forma:</strong> Indywidualna lub grupa</span>
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Download className="h-4 w-4" />
                Pobierz scenariusz PDF
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-bold text-blue-900 mb-2">
                    📖 Książka do tego scenariusza
                  </h2>
                  <p className="text-blue-800 mb-3">
                    Ten scenariusz oparty jest na książce:
                  </p>
                  <Link 
                    href="/ksiazki/nie-znajdziesz-mnie"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    „Nie znajdziesz mnie po śladach stóp" →
                  </Link>
                  <p className="text-sm text-blue-700 mt-3">
                    Przeczytaj książkę przed przeprowadzeniem zajęć, aby lepiej zrozumieć metafory i symbolikę.
                  </p>
                </div>
              </div>
            </div>

            {/* Cele */}
            <div className="bg-card border rounded-xl p-6 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">Cele spotkania</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span><strong>Demistyfikacja niepełnosprawności:</strong> Pokazanie, że wózek inwalidzki to po prostu narzędzie (jak okulary), a osoba z niepełnosprawnością prowadzi wielowymiarowe życie</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span><strong>Nauka asertywnej pomocy:</strong> Wpojenie dzieciom kluczowej zasady mądrego pomagania: „Zawsze najpierw zapytaj, potem pomagaj"</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span><strong>Odkrywanie własnej tożsamości:</strong> Zrozumienie przez dzieci, że każdy człowiek składa się z wielu cech i żadna z nich nie definiuje go w 100% (metafora posypki na lodach)</span>
                </li>
              </ul>
            </div>

            {/* Materiały */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4 text-purple-900">Potrzebne materiały</h2>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">📖</span>
                  <span>Książka „Nie znajdziesz mnie po śladach stóp"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✉️</span>
                  <span>Szablony papierowych kopert (kilka dla każdego dziecka)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">🦜</span>
                  <span>Sylwetki ptaków do wycięcia/pokolorowania</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">🍦</span>
                  <span>Duży brystol z narysowanym pucharkiem lodów</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">🎨</span>
                  <span>Kolorowe, małe karteczki samoprzylepne (posypka)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">🖍️</span>
                  <span>Kredki, flamastry</span>
                </li>
              </ul>
            </div>

            {/* Przebieg */}
            <div className="space-y-6 mb-8">
              <h2 className="font-serif text-3xl font-bold">Przebieg spotkania</h2>

              {/* Etap 1 */}
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Wstęp – Pytanie, od którego pęka głowa (10 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Co robisz:</strong> Zacznij od przeczytania fragmentu książki, w którym mała Dobrawa zadaje pytanie: „Jak to jest jeździć na wózku?", a z głowy narratorki wylatują ptaki z kopertami.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-purple-900">
                      <strong>💬 Co mówisz dzieciom:</strong><br/>
                      „Wyobraźcie sobie, że ktoś zadaje wam pytanie: <em>Jak to jest być tobą?</em> Da się odpowiedzieć jednym słowem? Nie! Wasze życie składa się z mnóstwa różnych historii, zabaw, smutków i radości. Tak samo jest z autorką książki. Życie na wózku to nie jest jedna, nudna opowieść. To mnóstwo kolorowych kopert z różnymi historiami."
                    </p>
                  </div>
                </div>
              </div>

              {/* Etap 2 */}
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Otwieranie kopert – Głośne czytanie (15 minut)</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Prowadzący „otwiera" z dziećmi (czyta) trzy wybrane „koperty" z książki, które niosą najważniejsze lekcje:
                  </p>

                  <div className="space-y-4">
                    {/* Koperta 1 */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <FileQuestion className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-amber-900 mb-2">Koperta Złotej Zasady (Pomoc bez pytania)</h4>
                          <p className="text-sm text-amber-800 mb-3">
                            Przeczytaj fragment o niebezpiecznej sytuacji, gdy ktoś pomagał bez pytania.
                          </p>
                          <div className="bg-white border border-amber-300 rounded p-3">
                            <p className="text-sm text-amber-900">
                              <strong>💬 Rozmowa:</strong> „Dlaczego nie wolno pchać czyjegoś wózka bez pytania? Wyobraźcie sobie, że ktoś nagle łapie was za rękę i ciągnie w inną stronę, bo uważa, że tak wam pomoże. Co robimy najpierw? Pytamy: <em>Przepraszam, czy mogę jakoś pomóc?</em>"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Koperta 2 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-blue-900 mb-2">Koperta Barier Architektonicznych</h4>
                          <p className="text-sm text-blue-800 mb-3">
                            Przeczytaj o braku podjazdów i wąskich drzwiach.
                          </p>
                          <div className="bg-white border border-blue-300 rounded p-3">
                            <p className="text-sm text-blue-900">
                              <strong>💬 Rozmowa:</strong> „Czy w naszej szkole/okolicy są takie miejsca, gdzie osoba na wózku by nie wjechała? Jak myślicie, jak ona się wtedy czuje?"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Koperta 3 */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-green-900 mb-2">Koperta Zabawy i Codzienności</h4>
                          <p className="text-sm text-green-800 mb-3">
                            Przeczytaj o zwykłym życiu (randkach, śmiechu, zabawie).
                          </p>
                          <div className="bg-white border border-green-300 rounded p-3">
                            <p className="text-sm text-green-900">
                              <strong>💬 Rozmowa:</strong> „Osoby na wózkach grają w gry, chodzą do kina i jedzą lody. Wózek to tylko coś, co pomaga im się poruszać, tak jak niektóre okulary pomagają widzieć."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Etap 3 */}
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Aktywność twórcza: Lody z posypką (15 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Wprowadzenie:</strong> Przeczytaj metaforę z książki: „Niepełnosprawność to tylko posypka na lodach. Wpływa na smak, ale lody to coś więcej."
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <IceCream className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <p className="text-purple-900">
                          <strong>Co robisz:</strong> Powieś na tablicy brystol z narysowanym pucharkiem lodów. Rozdaj dzieciom „posypkę" (małe, kolorowe karteczki).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-sm">
                      <strong>💬 Co mówisz:</strong><br/>
                      „Napiszcie lub narysujcie na swoich posypkach rzeczy, które lubicie, które potraficie, albo to, jak wyglądacie (np. <em>noszę okulary, lubię klocki LEGO, umiem szybko biegać, jestem nieśmiały/a</em>). Przyklejcie je na lody. Zobaczcie – te wszystkie cechy to nasza posypka. Każdy z nas jest inną, wyjątkową porcją lodów!"
                    </p>
                  </div>
                </div>
              </div>

              {/* Etap 4 */}
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Aktywność końcowa: Własne ptaki z kopertami (10 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Co robisz:</strong> Rozdaj dzieciom szablony ptaków i kopert.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Bird className="h-5 w-5 text-purple-600 mt-1" />
                      <p className="text-purple-900">
                        <strong>💬 Instrukcja dla dzieci:</strong><br/>
                        „Każdy z was ma w głowie swoje ptaki z kopertami. Narysujcie na nich jedną, bardzo ważną historię ze swojego życia. Coś, o czym chcielibyście opowiedzieć, gdyby ktoś zapytał: <em>Jak to jest być tobą?</em>"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Etap 5 */}
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-primary">5</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Zakończenie (5 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-purple-900">
                      <strong>💬 Podsumowanie:</strong><br/>
                      „Pamiętajcie, osoba na wózku to przede wszystkim OSOBA. Ma swoje marzenia, ulubione smaki lodów i swoje ptaki w głowie, dokładnie tak jak wy."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apteczka */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-8 print:break-before-page">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-purple-700" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-purple-900">
                  Apteczka Pierwszej Pomocy Empatycznej dla Rodziców
                </h2>
              </div>

              <p className="text-purple-800 mb-6">
                Dzieci bywają do bólu szczere i ciekawe świata. Zobaczenie na ulicy osoby z niepełnosprawnością często skutkuje głośnymi pytaniami, które wprawiają rodziców w zakłopotanie. Poniższe wskazówki pomogą Ci mądrze reagować w takich sytuacjach.
              </p>

              <div className="space-y-6">
                {/* Sekcja 1 */}
                <div>
                  <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
                    <span className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                    Gdy dziecko głośno pyta na ulicy
                  </h3>
                  <div className="bg-white border border-purple-200 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-purple-800">
                      <strong>❌ Najgorsze:</strong> Uciszać dziecko („Ciii, nie patrz tam!") lub odciągać je na bok. To buduje przekonanie, że niepełnosprawność to temat tabu.
                    </p>
                    <p className="text-sm text-purple-800">
                      <strong>✅ Lepsze:</strong> Powiedz naturalnie: „Ten wózek pomaga temu panu się poruszać. Tak jak tobie pomagają nogi, jemu pomaga wózek."
                    </p>
                    <p className="text-sm text-purple-800">
                      <strong>💡 Klucz:</strong> Potraktuj to jako normę. Używaj neutralnego tonu głosu, aby dziecko zrozumiało, że to część zwykłego świata.
                    </p>
                  </div>
                </div>

                {/* Sekcja 2 */}
                <div>
                  <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
                    <span className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                    Gdy dziecko rwie się do pomagania (Złota Zasada)
                  </h3>
                  <div className="bg-white border border-purple-200 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-purple-800">
                      Dzieci, chcąc być uczynne, mogą podbiec i zacząć np. otwierać drzwi lub pchać wózek, co dla osoby z niepełnosprawnością bywa niebezpieczne i narusza jej granice.
                    </p>
                    <p className="text-sm text-purple-800">
                      <strong>✅ Zatrzymaj i poinstruuj:</strong> „To wspaniale, że chcesz pomóc. Ale wiesz, co jest najważniejszą zasadą? Zawsze najpierw pytamy. Podejdźmy i zapytajmy: »Dzień dobry, czy potrzebuje pan/pani pomocy?« Jeśli usłyszymy »nie, dziękuję«, uśmiechamy się i idziemy dalej."
                    </p>
                  </div>
                </div>

                {/* Sekcja 3 */}
                <div>
                  <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
                    <span className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    Gdy dziecko traktuje osobę z niepełnosprawnością jak „bohatera"
                  </h3>
                  <div className="bg-white border border-purple-200 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-purple-800">
                      Dzieci (i dorośli!) często reagują zachwytem na zwykłe czynności: „Wow, zobacz, jak ona świetnie sama pije z kubka!". To tzw. <strong>ableizm</strong>. Nikt nie chce być traktowany jak inspiracja za to, że żyje swoim życiem.
                    </p>
                    <p className="text-sm text-purple-800">
                      <strong>✅ Skoryguj perspektywę:</strong> „Picie z kubka to normalna rzecz, prawda? Ta pani po prostu pije herbatę, tak jak my przed chwilą. Nie ma w tym nic dziwnego."
                    </p>
                  </div>
                </div>

                {/* Sekcja 4 */}
                <div>
                  <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
                    <span className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                    Gdy dziecko boi się osoby z widoczną niepełnosprawnością
                  </h3>
                  <div className="bg-white border border-purple-200 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-purple-800">
                      Czasami widok osoby poruszającej się inaczej lub wydającej inne dźwięki budzi w dziecku lęk.
                    </p>
                    <p className="text-sm text-purple-800">
                      <strong>✅ Zwaliduj strach i zracjonalizuj:</strong> „Widzę, że trochę się wystraszyłeś/aś, bo ten pan porusza się inaczej niż my. Jego mięśnie działają trochę inaczej, dlatego robi takie ruchy. Ale w środku ma dokładnie takie same uczucia jak my – może teraz myśli o tym, co zje na obiad?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-purple-100 border border-purple-300 rounded-lg p-4">
                <p className="text-sm text-purple-900 font-medium">
                  <strong>💡 Najważniejsza lekcja dla rodzica:</strong> Twoje dziecko uczy się reakcji na inność, patrząc na Ciebie. Bądź otwarty, traktuj niepełnosprawność jako jedną z wielu cech ludzkich (posypkę na lodach!) i nie bój się odpowiadać na dziecięce pytania.
                </p>
              </div>
            </div>

          </div>
        </article>
      </div>
    </Layout>
  );
}