import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { BookOpen, Heart, Droplets, Sparkles, Users, ArrowRight } from "lucide-react";

export default function PlaczILzyPolezja() {
  return (
    <Layout>
      <SEO
        title="Płacz i łzy - niezwykła moc emocji. Jak rozmawiać z dzieckiem o płaczu?"
        description="Odkryj niezwykłą moc łez! Dowiedz się, dlaczego płacz jest zdrowy, jakie są rodzaje łez i jak pomóc dziecku zrozumieć, że wyrażanie emocji to siła, nie słabość."
        image="/uploads/polezja-o-niezwyklej-mocy-lezokładka.jpg"
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/artykuly"
          className="inline-flex items-center text-sm text-primary hover:underline mb-6"
        >
          ← Powrót do artykułów
        </Link>

        <div className="mb-8">
          <span className="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs px-3 py-1 rounded-full font-medium mb-4">
            EMOCJE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Płacz i łzy - niezwykła moc emocji
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Jak rozmawiać z dzieckiem o płaczu? Odkryj biologię i piękno łez z książką "Połezja"
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>📅 7 marca 2026</span>
            <span>•</span>
            <span>⏱️ 8 min czytania</span>
          </div>
        </div>

        <img
          src="/uploads/polezja-o-niezwyklej-mocy-lezokładka.jpg"
          alt="Okładka książki Połezja. O niezwykłej mocy łez"
          className="w-full rounded-xl shadow-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-4">
              <strong>"Nie płacz", "Chłopcy nie płaczą", "To nic takiego"</strong> – ile razy słyszeliśmy te zdania jako dzieci? 
              I ile razy powtarzamy je nieświadomie naszym dzieciom? Tymczasem łzy to jeden z najpiękniejszych i 
              najbardziej naturalnych sposobów, w jaki nasze ciało i umysł radzą sobie z emocjami.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Książka <strong>"Połezja. O niezwykłej mocy łez"</strong> to poetycka i jednocześnie naukowa podróż 
              do świata łez – tych radosnych, smutnych, wzruszających i odruchowych. To opowieść, która zmienia 
              perspektywę: płacz nie jest słabością, ale siłą i mądrością naszego ciała.
            </p>
          </section>

          {/* Spis treści */}
          <nav className="mb-12 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              W tym artykule:
            </h2>
            <ul className="space-y-2">
              <li><a href="#mala-kropla" className="text-primary hover:underline">Mała kropla z wielką misją</a></li>
              <li><a href="#rodzaje-lez" className="text-primary hover:underline">Trzy rodzaje łez - nie tylko od smutku</a></li>
              <li><a href="#biologia-lez" className="text-primary hover:underline">Biologia łez - jak działają i dlaczego są ważne</a></li>
              <li><a href="#piekno-lez" className="text-primary hover:underline">Piękno łez pod mikroskopem</a></li>
              <li><a href="#zdrowy-placz" className="text-primary hover:underline">Płacz jako zdrowa reakcja emocjonalna</a></li>
              <li><a href="#jak-rozmawiac" className="text-primary hover:underline">Jak rozmawiać z dzieckiem o płaczu?</a></li>
              <li><a href="#podsumowanie" className="text-primary hover:underline">Podsumowanie</a></li>
            </ul>
          </nav>

          {/* Sekcja 1 */}
          <section id="mala-kropla" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Droplets className="h-8 w-8 text-cyan-600" />
              Mała kropla z wielką misją
            </h2>
            <p className="mb-4">
              Łza to coś więcej niż tylko kropla wody. To towarzyszka człowieka w najbardziej intensywnych 
              momentach życia – w radości, smutku, bólu i tęsknocie. "Połezja" pokazuje łzę jako bohaterkę, 
              która jest obecna podczas:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span><strong>Narodzin dziecka</strong> – pierwszych łez szczęścia rodziców</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span><strong>Wzruszającego filmu</strong> – gdy fikcja dotyka prawdziwych emocji</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span><strong>Krojenia cebuli</strong> – nawet wtedy, gdy łzy są odruchowe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span><strong>Otrzymania wyjątkowego prezentu</strong> – gdy radość jest tak wielka, że słowa nie wystarczają</span>
              </li>
            </ul>

            <div className="bg-cyan-50 dark:bg-cyan-950/20 p-6 rounded-lg border-l-4 border-cyan-500 mb-6">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="h-5 w-5 text-cyan-600" />
                Kluczowe przesłanie:
              </p>
              <p className="text-muted-foreground">
                Łzy są uniwersalnym językiem emocji. Pojawiają się w chwilach, gdy słowa zawodzą – 
                zarówno w smutku, jak i w radości. To naturalny sposób, w jaki ciało "mówi" o tym, 
                co dzieje się w sercu i umyśle.
              </p>
            </div>

            <img
              src="/uploads/Screenshot_2026-03-04_13.32.31.png"
              alt="Ilustracja z książki Połezja - łza jako bohaterka"
              className="w-full rounded-lg shadow-lg mb-4"
            />
          </section>

          {/* Sekcja 2 */}
          <section id="rodzaje-lez" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Droplets className="h-8 w-8 text-blue-600" />
              Trzy rodzaje łez - nie tylko od smutku
            </h2>
            <p className="mb-6">
              Książka w fascynujący sposób wyjaśnia, że nie wszystkie łzy są takie same. 
              Istnieją <strong>trzy rodzaje łez</strong>, każdy z własną funkcją i znaczeniem:
            </p>

            {/* Łzy podstawowe */}
            <div className="mb-6 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">
                1. Łzy podstawowe (bazalne)
              </h3>
              <p className="mb-3">
                To łzy, które są produkowane przez nasze oczy <strong>cały czas</strong>, nawet gdy nie płaczemy. 
                Tworzą cienki film łzowy, który:
              </p>
              <ul className="space-y-2 ml-4">
                <li>✓ Nawilża i chroni rogówkę przed wysychaniem</li>
                <li>✓ Dostarcza tlen i składniki odżywcze do rogówki</li>
                <li>✓ Chroni oko przed bakteriami i zanieczyszczeniami</li>
                <li>✓ Zapewnia gładką powierzchnię dla prawidłowego widzenia</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground italic">
                💧 Ciekawostka: Człowiek produkuje około 1-2 ml łez podstawowych dziennie – to około 1 litra rocznie!
              </p>
            </div>

            {/* Łzy odruchowe */}
            <div className="mb-6 p-6 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">
                2. Łzy odruchowe (refleksyjne)
              </h3>
              <p className="mb-3">
                Te łzy pojawiają się jako <strong>natychmiastowa reakcja obronna</strong> na drażniące bodźce:
              </p>
              <ul className="space-y-2 ml-4">
                <li>✓ Krojenie cebuli (zawierającej drażniące związki siarki)</li>
                <li>✓ Pyłek, kurz lub dym dostawszy się do oka</li>
                <li>✓ Silny wiatr lub zimne powietrze</li>
                <li>✓ Jasne światło czy oślepiające słońce</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground italic">
                🧅 Dlaczego płaczemy przy cebuli? Cebula uwalnia enzymy, które tworzą związki drażniące oczy. 
                Łzy odruchowe wypłukują te substancje!
              </p>
            </div>

            {/* Łzy emocjonalne */}
            <div className="mb-6 p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-400">
                3. Łzy emocjonalne (psychiczne)
              </h3>
              <p className="mb-3">
                To najbardziej tajemnicze i wyjątkowe łzy – <strong>tylko ludzie je mają</strong>. 
                Pojawiają się podczas intensywnych emocji:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li>💙 Smutek i żal</li>
                <li>💚 Radość i szczęście</li>
                <li>💛 Wzruszenie i empatia</li>
                <li>❤️ Miłość i tęsknota</li>
                <li>🧡 Frustracja i bezradność</li>
              </ul>
              <p className="mb-3">
                <strong>Co je wyróżnia?</strong> Łzy emocjonalne mają inny skład chemiczny niż pozostałe dwa rodzaje – 
                zawierają więcej białek, hormonów (jak kortyzol – hormon stresu) i naturalnych środków przeciwbólowych 
                (jak enkefaliny).
              </p>
              <p className="text-sm text-muted-foreground italic">
                💜 Płacz emocjonalny to sposób, w jaki ciało "uwalnia" nadmiar hormonów stresowych i przywraca równowagę.
              </p>
            </div>

            <img
              src="/uploads/Screenshot_2026-03-04_13.32.40.png"
              alt="Ilustracja z książki Połezja - rodzaje łez"
              className="w-full rounded-lg shadow-lg mb-4"
            />
          </section>

          {/* Sekcja 3 */}
          <section id="biologia-lez" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-amber-600" />
              Biologia łez - jak działają i dlaczego są ważne
            </h2>
            <p className="mb-4">
              "Połezja" w przystępny sposób wyjaśnia, <strong>z czego składają się łzy</strong> i jak działają:
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg mb-6">
              <h3 className="font-bold mb-3">Skład łez:</h3>
              <ul className="space-y-2 ml-4">
                <li>💧 <strong>98% wody</strong> – podstawa każdej łzy</li>
                <li>🧂 <strong>Sól (chlorek sodu)</strong> – dlatego łzy są słone!</li>
                <li>🛡️ <strong>Białka</strong> (lizozym, laktoferyna) – naturalny antybiotyk, który zabija bakterie</li>
                <li>🌿 <strong>Tłuszcze</strong> – zmniejszają parowanie i utrzymują wilgoć</li>
                <li>🧪 <strong>Mukopolisacharydy</strong> – pomagają łzom przylegać do oka</li>
                <li>💊 <strong>Hormony i neuroprzekaźniki</strong> (w łzach emocjonalnych)</li>
              </ul>
            </div>

            <p className="mb-4">
              <strong>Film łzowy</strong> pokrywa oko i składa się z trzech warstw:
            </p>
            <ol className="space-y-3 ml-6 mb-6">
              <li>
                <strong>1. Warstwa lipidowa (tłuszczowa)</strong> – na zewnątrz, zapobiega parowaniu
              </li>
              <li>
                <strong>2. Warstwa wodna (aqueous)</strong> – środkowa, nawilża i dostarcza składniki odżywcze
              </li>
              <li>
                <strong>3. Warstwa mucinowa (śluzowa)</strong> – przy rogówce, pomaga łzom przylegać do oka
              </li>
            </ol>

            <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold mb-2">🔬 Fascynujący fakt:</p>
              <p className="text-muted-foreground">
                Gdyby nie łzy, nie moglibyśmy widzieć wyraźnie! Film łzowy wygładza powierzchnię oka, 
                dzięki czemu światło prawidłowo się załamuje. Bez łez rogówka byłaby chropowata, 
                a obraz rozmazany.
              </p>
            </div>

            <img
              src="/uploads/Screenshot_2026-03-04_13.32.47.png"
              alt="Ilustracja z książki Połezja - skład łez"
              className="w-full rounded-lg shadow-lg mt-6"
            />
          </section>

          {/* Sekcja 4 */}
          <section id="piekno-lez" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-pink-600" />
              Piękno łez pod mikroskopem
            </h2>
            <p className="mb-4">
              Jednym z najbardziej poetyckich i zachwycających aspektów książki jest pokazanie, 
              że łzy są nie tylko funkcjonalne – <strong>są też piękne</strong>.
            </p>
            <p className="mb-6">
              Pod mikroskopem każda łza tworzy <strong>unikalne wzory przypominające śnieżynki</strong>. 
              Krystalizujące się sole i białka tworzą skomplikowane, niepowtarzalne struktury – 
              żadne dwie łzy nie wyglądają tak samo. To wizualna metafora unikalności każdej emocji 
              i każdego momentu w życiu.
            </p>

            <div className="bg-pink-50 dark:bg-pink-950/20 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
              <p className="font-semibold mb-2 flex items-center gap-2">
                ✨ Ciekawostka kulturowa:
              </p>
              <p className="text-muted-foreground mb-3">
                Książka przywołuje piękną mitologię nordycką: według legend łzy bogini Freji zamieniały się 
                w <strong>złoto lub bursztyn</strong>. To symboliczne przypomnienie, że łzy mają wartość – 
                pomagają oczyszczać emocje i są oznaką głębokiego przeżywania życia.
              </p>
              <p className="text-sm italic">
                💎 Może warto spojrzeć na łzy nie jako na słabość, ale jako na "złoto emocjonalne" – 
                coś cennego i pięknego?
              </p>
            </div>
          </section>

          {/* Sekcja 5 */}
          <section id="zdrowy-placz" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-red-600" />
              Płacz jako zdrowa reakcja emocjonalna
            </h2>
            <p className="mb-4">
              "Połezja" przekazuje jedno z najważniejszych przesłań dla dzieci (i dorosłych): 
              <strong>płacz jest naturalny, zdrowy i pomocny</strong>.
            </p>

            <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg mb-6">
              <h3 className="font-bold mb-3">Dlaczego płacz jest zdrowy?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">1.</span>
                  <div>
                    <strong>Uwalnia napięcie emocjonalne</strong> – płacz pomaga "rozładować" stres, 
                    smutek czy frustrację. Po płaczu często czujemy się lżej i spokojniej.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">2.</span>
                  <div>
                    <strong>Obniża poziom hormonów stresu</strong> – łzy emocjonalne zawierają kortyzol 
                    (hormon stresu), więc płacz dosłownie "wypłukuje" stres z organizmu.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">3.</span>
                  <div>
                    <strong>Uwalnia endorfiny</strong> – po płaczu organizm produkuje naturalne środki 
                    przeciwbólowe i "hormony szczęścia", które przynoszą ulgę.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">4.</span>
                  <div>
                    <strong>Komunikuje potrzeby</strong> – płacz to sygnał dla innych, że potrzebujemy 
                    wsparcia, pocieszy lub pomocy.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">5.</span>
                  <div>
                    <strong>Przywraca równowagę</strong> – po intensywnym płaczu ciało i umysł "resetują się", 
                    co pomaga odzyskać spokój i jasność myślenia.
                  </div>
                </li>
              </ul>
            </div>

            <p className="mb-4">
              Książka podkreśla, że <strong>nie należy się wstydzić łez</strong>. Płacz to ważny sposób 
              wyrażania uczuć i dbania o zdrowie psychiczne. To nie oznaka słabości, ale odwagi – 
              odwagi, by być autentycznym i pozwolić sobie na przeżywanie emocji.
            </p>
          </section>

          {/* Sekcja 6 */}
          <section id="jak-rozmawiac" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-violet-600" />
              Jak rozmawiać z dzieckiem o płaczu?
            </h2>
            <p className="mb-6">
              "Połezja" to doskonałe narzędzie do rozpoczęcia rozmowy z dzieckiem o łzach i emocjach. 
              Oto kilka wskazówek, jak wykorzystać tę książkę w codziennych sytuacjach:
            </p>

            <div className="space-y-6">
              {/* Wskazówka 1 */}
              <div className="p-6 bg-violet-50 dark:bg-violet-950/20 rounded-lg border-l-4 border-violet-500">
                <h3 className="font-bold mb-3 text-violet-700 dark:text-violet-400">
                  1. Normalizuj wszystkie emocje
                </h3>
                <p className="mb-3">
                  Zamiast mówić <em>"Nie płacz"</em> lub <em>"To nic takiego"</em>, spróbuj:
                </p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>✓ <strong>"Widzę, że jesteś smutny/a. Płacz pomaga uwolnić smutek"</strong></li>
                  <li>✓ <strong>"Łzy pokazują, że coś jest dla ciebie ważne"</strong></li>
                  <li>✓ <strong>"Możesz płakać, jestem przy tobie. Wspólnie poczekamy, aż ci przejdzie"</strong></li>
                </ul>
              </div>

              {/* Wskazówka 2 */}
              <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-400">
                  2. Ucz różnorodności emocji za pomocą "Połezji"
                </h3>
                <p className="mb-3">
                  Po przeczytaniu książki możesz zapytać:
                </p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>• <em>"Czy pamiętasz, kiedy ostatnio płakałeś/aś? Czy to był smutek, radość, czy może frustracja?"</em></li>
                  <li>• <em>"Jak się czułeś/aś po tym, jak popłakałeś/aś?"</em></li>
                  <li>• <em>"Które łzy z książki najbardziej ci się podobają – te radosne, smutne, czy odruchowe od cebuli?"</em></li>
                </ul>
              </div>

              {/* Wskazówka 3 */}
              <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-3 text-green-700 dark:text-green-400">
                  3. Zaakceptuj płacz jako część życia rodzinnego
                </h3>
                <p className="mb-3">
                  Dzieci uczą się głównie przez obserwację dorosłych. Pokaż, że:
                </p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>✓ <strong>Ty też płaczesz</strong> – i to jest w porządku. <em>"Mama też czasem płacze, gdy jest smutna lub wzruszona"</em></li>
                  <li>✓ <strong>Płacz to nie wstyd</strong> – zarówno dla dziewczynek, jak i chłopców</li>
                  <li>✓ <strong>Po płaczu czujemy się lepiej</strong> – dziel się własnym doświadczeniem</li>
                </ul>
              </div>

              {/* Wskazówka 4 */}
              <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold mb-3 text-amber-700 dark:text-amber-400">
                  4. Twórz bezpieczną przestrzeń na emocje
                </h3>
                <p className="mb-3">
                  Dzieci potrzebują wiedzieć, że mogą wyrażać uczucia bez oceny. Spróbuj:
                </p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>✓ <strong>Bądź obecny/a</strong> – czasem wystarczy ciche przytulenie bez słów</li>
                  <li>✓ <strong>Nie naprawiaj od razu</strong> – pozwól dziecku przejść przez emocję</li>
                  <li>✓ <strong>Pytaj o odczucia</strong> – <em>"Gdzie czujesz smutek w ciele? W brzuchu, w sercu?"</em></li>
                </ul>
              </div>

              {/* Wskazówka 5 */}
              <div className="p-6 bg-pink-50 dark:bg-pink-950/20 rounded-lg border-l-4 border-pink-500">
                <h3 className="font-bold mb-3 text-pink-700 dark:text-pink-400">
                  5. Wykorzystaj książkę jako punkt wyjścia do rozmowy
                </h3>
                <p className="mb-3">
                  "Połezja" to świetny sposób, by zacząć rozmowę o trudnych emocjach w bezpieczny, 
                  nieinwazyjny sposób:
                </p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>📖 Przeczytajcie książkę wspólnie przed snem lub w spokojnej chwili</li>
                  <li>🎨 Poproś dziecko, by narysowało swoją łzę – jaka by była? Jakie kolory miałaby?</li>
                  <li>💬 Opowiedz dziecku o swoich własnych łzach – kiedy ostatnio płakałeś/aś i dlaczego</li>
                  <li>🔬 Zachęć do "badania" łez – czy są ciepłe? Słone? Co czujesz, gdy płaczesz?</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sekcja 7 - Podsumowanie */}
          <section id="podsumowanie" className="mb-12">
            <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Podsumowanie: Łzy jako dar
              </h2>
              <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
                "Połezja. O niezwykłej mocy łez" to książka, która zmienia sposób, w jaki patrzymy na płacz – 
                i na emocje w ogóle. To przypomnienie, że <strong>łzy są darem</strong>, a nie przekleństwem.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                  <h3 className="font-bold mb-3 text-cyan-700 dark:text-cyan-400">Co daje ta książka dzieciom?</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Zrozumienie, że płacz jest naturalny i zdrowy</li>
                    <li>✓ Akceptację własnych emocji bez wstydu</li>
                    <li>✓ Wiedzę o tym, jak działa ich ciało</li>
                    <li>✓ Poczucie, że są rozumiane i wspierane</li>
                  </ul>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                  <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-400">Co daje ta książka rodzicom?</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Narzędzie do rozmowy o trudnych emocjach</li>
                    <li>✓ Przypomnienie, by nie tłumić uczuć dziecka</li>
                    <li>✓ Inspirację do tworzenia emocjonalnie bezpiecznego domu</li>
                    <li>✓ Wiedzę naukową podaną w poetycki sposób</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold mb-6">
                  💙 Bo życie to nie tylko śmiech – to też łzy. I jedno, i drugie jest piękne.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/ksiazki/polezja"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    <BookOpen className="h-5 w-5" />
                    Zobacz profil książki
                  </Link>
                  <a
                    href="https://tusieczyta.pl/pl/zapowiedzi/1478-polezja-o-niezwyklej-mocy-lez-978836708531.html?utm_source=ksiazki-do-zadan&utm_medium=article&utm_campaign=polezja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg font-semibold transition-colors"
                  >
                    Kup książkę
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Najczęściej zadawane pytania</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-3">Czy chłopcy mogą płakać?</h3>
                <p className="text-muted-foreground">
                  Absolutnie tak! Płacz nie ma płci. Wszyscy ludzie – bez względu na płeć – mają łzy emocjonalne 
                  i potrzebują ich, by radzić sobie ze stresem i silnymi uczuciami. Stereotyp "chłopcy nie płaczą" 
                  jest szkodliwy i może prowadzić do problemów z wyrażaniem emocji w dorosłym życiu. 
                  "Połezja" pokazuje, że łzy są uniwersalne i naturalne dla każdego człowieka.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-3">Od jakiego wieku mogę czytać dziecku "Połezję"?</h3>
                <p className="text-muted-foreground">
                  Książka jest odpowiednia dla dzieci od około 5-6 lat, gdy zaczynają bardziej świadomie rozumieć 
                  i nazywać swoje emocje. Młodsze dzieci (3-4 lata) również mogą słuchać opowieści o łzach, 
                  choć mogą nie zrozumieć wszystkich naukowych aspektów. Starsze dzieci (8-10 lat) docenią 
                  zarówno poetycką narrację, jak i fascynujące fakty biologiczne.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-3">Co zrobić, gdy dziecko płacze bardzo często?</h3>
                <p className="text-muted-foreground">
                  Częsty płacz może być naturalnym sposobem wyrażania emocji przez dziecko – szczególnie 
                  u małych dzieci, które nie mają jeszcze rozwiniętych umiejętności werbalnych. Ważne jest, 
                  by nie oceniać ani nie karcić za płacz. Zamiast tego: (1) Sprawdź podstawowe potrzeby (głód, 
                  zmęczenie, dyskomfort), (2) Pomóż nazwać emocję ("Widzę, że jesteś smutny"), (3) Bądź obecny/a 
                  bez naciskania na natychmiastowe przerwanie płaczu. Jeśli płacz jest bardzo intensywny, 
                  długotrwały lub wydaje się nieproporcjonalny do sytuacji, warto skonsultować się z psychologiem 
                  dziecięcym – może to być sygnał, że dziecko potrzebuje dodatkowego wsparcia.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-3">Czy dorosły powinien płakać przy dziecku?</h3>
                <p className="text-muted-foreground">
                  Tak, ale w odpowiedni sposób. Dzieci uczą się radzenia sobie z emocjami głównie przez 
                  obserwację dorosłych. Jeśli nigdy nie widzą, że rodzice płaczą, mogą dojść do wniosku, 
                  że płacz to coś złego lub wstydliwego. Ważne jest pokazanie, że: (1) Dorośli też mają trudne 
                  emocje i płaczą, (2) Po płaczu czujemy się lepiej, (3) Płacz to normalny sposób radzenia sobie. 
                  Jednak unikaj obciążania dziecka swoimi problemami dorosłych – płacz przy dziecku powinien być 
                  autentyczny, ale nie przytłaczający. Możesz powiedzieć: "Mama jest teraz smutna i trochę popłacze. 
                  To pomoże mi poczuć się lepiej. Nie musisz się martwić – wszystko będzie dobrze."
                </p>
              </div>
            </div>
          </section>

          {/* Artykuły powiązane */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Może Cię zainteresować:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/artykuly/trudne-emocje-tkaczka-chmur"
                className="p-6 bg-muted hover:bg-muted/80 rounded-lg transition-colors group"
              >
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  Jak pomóc dziecku nazwać i zrozumieć trudne emocje?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Przewodnik po emocjach z książką "Tkaczka Chmur" – praktyczne wskazówki dla rodziców
                </p>
              </Link>

              <Link
                href="/artykuly/bajkoterapia"
                className="p-6 bg-muted hover:bg-muted/80 rounded-lg transition-colors group"
              >
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  Bajkoterapia: jak baśnie pomagają dzieciom?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Odkryj, jak wykorzystać biblioterapię w codziennym życiu rodzinnym
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}