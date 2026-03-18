import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Clock, 
  Users, 
  BookOpen, 
  Target, 
  PenTool, 
  Download, 
  Printer, 
  ArrowLeft,
  Info,
  Heart
} from "lucide-react";

export default function ScenariuszMojaPrzezroczystaZaba() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Scenariusz biblioterapeutyczny: Moja przezroczysta Żaba",
    "description": "Scenariusz pracy indywidualnej dla dzieci 5-9 lat na podstawie książki 'Żaba. Mała opowieść o żałobie'. Temat: oswajanie straty i normalizacja emocji związanych z żałobą.",
    "totalTime": "PT60M",
    "educationalLevel": "Przedszkole i wczesna edukacja (5-9 lat)",
    "supply": [
      { "@type": "HowToSupply", "name": "Książka 'Żaba. Mała opowieść o żałobie'" },
      { "@type": "HowToSupply", "name": "Kredki i flamastry" },
      { "@type": "HowToSupply", "name": "Kartki papieru" },
      { "@type": "HowToSupply", "name": "Kartki w kształcie okręgów (bąbelki)" },
      { "@type": "HowToSupply", "name": "Miękka poduszka" },
      { "@type": "HowToSupply", "name": "Ozdobne pudełeczko (opcjonalnie)" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Wstęp i budowanie bezpieczeństwa",
        "text": "Stworzenie spokojnego otoczenia i delikatne wprowadzenie do tematu książki."
      },
      {
        "@type": "HowToStep",
        "name": "Głośne czytanie: Lekcja 1 - Łzy to piękny skarb",
        "text": "Normalizacja płaczu i uświadomienie, że łzy są naturalną reakcją na stratę."
      },
      {
        "@type": "HowToStep",
        "name": "Głośne czytanie: Lekcja 2 - Krzyk, który smakuje",
        "text": "Oswajanie złości poprzez bezpieczne wyrzucenie emocji (krzyk w poduszkę)."
      },
      {
        "@type": "HowToStep",
        "name": "Głośne czytanie: Lekcja 3 - Mówienie leczy serce",
        "text": "Przełamanie milczenia i rozmowa o lękach dziecka."
      },
      {
        "@type": "HowToStep",
        "name": "Aktywność twórcza: Bąbelki Wspomnień",
        "text": "Rysowanie ulubionych wspomnień ze zmarłą osobą w kształcie bąbelków."
      },
      {
        "@type": "HowToStep",
        "name": "Zakończenie: Przezroczysta Żaba",
        "text": "Wyjaśnienie metafory - żałoba z czasem staje się przezroczysta, ale zawsze jest częścią nas."
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Scenariusz: Moja przezroczysta Żaba - Narzędziownik Biblioterapeuty"
        description="Scenariusz pracy indywidualnej dla dzieci 5-9 lat przeżywających żałobę. Na podstawie książki 'Żaba. Mała opowieść o żałobie'. Pobierz materiały PDF."
        image="/uploads/okładka_z_aba.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/biblioterapia/narzedziownik" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do Narzędziownika
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 text-center md:text-left">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Scenariusz zajęć
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Moja przezroczysta Żaba, czyli jak oswoić stratę
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Na podstawie książki „Żaba. Mała opowieść o żałobie"
          </p>

          {/* Metryczka */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-muted/30 p-4 rounded-lg border">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-muted-foreground mb-1">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Czas trwania</span>
              </div>
              <span className="font-medium">45–60 min</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Wiek</span>
              </div>
              <span className="font-medium">5–9 lat</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Forma</span>
              </div>
              <span className="font-medium">Indywidualna</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-muted-foreground mb-1">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Baza</span>
              </div>
              <Link href="/ksiazki/zaba" className="font-medium hover:text-primary underline decoration-dotted">
                Żaba
              </Link>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            
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
                    href="/ksiazki/zaba"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    „Żaba. Mała opowieść o żałobie" →
                  </Link>
                  <p className="text-sm text-blue-700 mt-3">
                    Przeczytaj książkę przed spotkaniem, aby w pełni zrozumieć metaforę Żaby i Trzech Lekcji.
                  </p>
                </div>
              </div>
            </div>

            {/* Cele */}
            <section className="bg-card rounded-lg border p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Cele spotkania
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span><strong>Normalizacja emocji:</strong> Uświadomienie dziecku, że płacz i złość są naturalnymi i potrzebnymi reakcjami na stratę.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span><strong>Stworzenie przestrzeni do komunikacji:</strong> Przełamanie milczenia i lęku przed rozmową o zmarłej osobie.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span><strong>Wprowadzenie metafory żałoby:</strong> Zrozumienie, że żałoba (Żaba) z czasem zmienia się i staje się „przezroczysta".</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span><strong>Budowanie bezpiecznych wspomnień:</strong> Przekierowanie uwagi z samej straty na zachowanie pięknych chwil.</span>
                </li>
              </ul>
            </section>

            {/* Materiały */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <PenTool className="mr-2 h-5 w-5 text-primary" />
                Potrzebne materiały
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Książka „Żaba. Mała opowieść o żałobie"</li>
                <li>Kredki, flamastry</li>
                <li>Czyste kartki papieru</li>
                <li>Kartki wycięte w kształcie okręgów (bąbelki)</li>
                <li>Miękka poduszka</li>
                <li>Opcjonalnie: małe, ozdobne pudełeczko (na „skarby")</li>
              </ul>
            </section>

            {/* Przebieg */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold border-b pb-2">Przebieg spotkania</h2>
              
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">1</div>
                <h3 className="text-lg font-bold mb-2">Wstęp i budowanie poczucia bezpieczeństwa (5–10 min)</h3>
                <p className="text-muted-foreground mb-3">
                  Zadbaj o spokojne otoczenie (wyciszony telefon, wygodne miejsce, np. na kanapie lub dywanie).
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong className="block mb-1">Wprowadzenie:</strong>
                  <p className="italic">
                    "Mam dzisiaj ze sobą książkę o dziewczynce, którą spotkało coś bardzo smutnego – zmarła jej babcia. Zobacz, na okładce jest też pewna Żaba. Chcesz posłuchać jej historii? Jeśli w którymś momencie będziesz chciał/a przerwać, wystarczy, że mi powiesz."
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">2</div>
                <h3 className="text-lg font-bold mb-2">Głośne czytanie i Trzy Lekcje Żaby (20–25 min)</h3>
                <p className="text-muted-foreground mb-3">
                  Czytaj powoli. Książka opiera się na trzech kluczowych momentach. Zatrzymuj się przy każdym z nich, aby dać dziecku czas na przetworzenie metafory.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                    <h4 className="font-bold text-rose-900 mb-2 flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Lekcja 1: Łzy to piękny skarb
                    </h4>
                    <p className="text-sm text-rose-800 mb-2">
                      <strong>Fragment:</strong> Dziewczynka połyka łzy, by być „silną", a Żaba mówi, że łzy w brzuchu zamieniają się w bolące kamienie, podczas gdy wypuszczone są pięknym skarbem.
                    </p>
                    <p className="text-sm">
                      <strong>Działanie:</strong> Zatrzymaj się. Zapytaj: <em>"Czy zdarza ci się czasem połykać łzy, żeby być bardzo silnym/silną?"</em>. Jeśli dziecko zacznie płakać, nie pocieszaj go słowami „nie płacz". Przytul je i powiedz językiem Żaby: <em>"Płacz, to w porządku. Twoje łzy to piękny skarb. Pokazują, jak bardzo kochałeś/aś [imię osoby]"</em>.
                    </p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-bold text-amber-900 mb-2">Lekcja 2: Krzyk, który smakuje</h4>
                    <p className="text-sm text-amber-800 mb-2">
                      <strong>Fragment:</strong> Dziewczynka chce być grzeczna i ukrywa złość, a Żaba uczy, że czasem trzeba krzyczeć, i „zjada" ten krzyk ze smakiem.
                    </p>
                    <p className="text-sm">
                      <strong>Działanie:</strong> Wyjaśnij dziecku, że złość z powodu tego, co się stało, jest całkowicie normalna. Zaproponuj bezpieczne wyrzucenie złości: weźcie poduszkę i pozwól dziecku krzyknąć w nią z całej siły, po czym powiedz: <em>"Wow, ale to był pyszny krzyk! Żaba na pewno by się nim najadła. Czy chcesz krzyknąć jeszcze raz?"</em>.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">Lekcja 3: Mówienie leczy serce</h4>
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Fragment:</strong> Milczenie sprawia, że serce może pęknąć. Należy mówić o swoich lękach.
                    </p>
                    <p className="text-sm">
                      <strong>Działanie:</strong> Zapytaj łagodnie: <em>"Dziewczynka z książki bała się i nie wiedziała, co się dzieje. Czego ty boisz się najbardziej?"</em>. Daj dziecku przestrzeń na swobodną odpowiedź, nie oceniaj jej i nie próbuj od razu „naprawiać" sytuacji.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">3</div>
                <h3 className="text-lg font-bold mb-2">Aktywność twórcza: Bąbelki Wspomnień (15 min)</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Fragment:</strong> Z brzucha Żaby wylatują bąbelki, a w każdym z nich znajduje się wspomnienie zmarłej babci.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-sm mb-3">
                    <strong>Działanie:</strong> Połóż przed dzieckiem wycięte z papieru kółka (bąbelki) oraz kredki.
                  </p>
                  <p className="text-sm italic mb-2">
                    "Teraz my stworzymy własne bąbelki. Narysuj w nich swoje ulubione wspomnienia z [imię osoby]. Co lubiliście razem robić? Z czego się śmialiście?"
                  </p>
                  <p className="text-sm">
                    Rozmawiajcie o tych rysunkach. Bąbelki można na koniec schować do specjalnego pudełeczka lub przykleić na duży arkusz papieru.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">4</div>
                <h3 className="text-lg font-bold mb-2">Zakończenie: Przezroczysta Żaba (5 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Przejdź do zakończenia książki, gdzie Żaba staje się przezroczysta, ale zawsze jest w pobliżu.
                </p>
                <div className="bg-muted p-3 rounded text-sm italic">
                  "Żałoba – czyli ten smutek i tęsknota – jest właśnie jak taka Żaba. Na początku jest ogromna, gruba i bardzo nam przeszkadza. Ale z czasem robi się przezroczysta. To nie znaczy, że zapominamy o osobie, którą kochaliśmy. To znaczy, że nauczyliśmy się z tą Żabą żyć. Zawsze, gdy będziesz czuć smutek lub złość, powiedz mi o tym. Zawołamy wtedy twoją Żabę."
                </div>
              </div>
            </section>

            {/* Przewodnik dla prowadzącego */}
            <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Przewodnik dla prowadzącego: Czego unikać, a co wspierać?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Aby proces był bezpieczny dla dziecka, warto kierować się poniższymi zasadami.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left p-3 bg-red-50 text-red-900">❌ Zamiast tego (Czego unikać)</th>
                      <th className="text-left p-3 bg-green-50 text-green-900">✅ Rób to (Jak wspierać)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 align-top">Nie mów: "Nie płacz, musisz być dzielny/a".</td>
                      <td className="p-3 align-top">Mów: "Twoje łzy to skarb. Pokaż mi je, możesz płakać."</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 align-top">Nie gaś złości zakazami ("Nie wolno ci tak krzyczeć").</td>
                      <td className="p-3 align-top">Daj upust złości: "Widzę, że jesteś bardzo zły/a. Wykrzycz to w poduszkę, złość jest naturalna."</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 align-top">Nie używaj eufemizmów ("Babcia zasnęła", "Odeszła"). To budzi lęk (np. przed snem).</td>
                      <td className="p-3 align-top">Nazywaj rzeczy po imieniu. Używaj słów "zmarła", "nie żyje", opierając się na szczerości.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 align-top">Nie traktuj żałoby jako choroby do "wyleczenia".</td>
                      <td className="p-3 align-top">Akceptuj: Pomóż dziecku zrozumieć, że Żaba z nim zostanie, ale z czasem zmieni swój kształt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 align-top">Nie naciskaj na rozmowę na siłę.</td>
                      <td className="p-3 align-top">Odpuść i poczekaj: Jeśli dziecko odmawia czytania, obejrzyjcie tylko obrazki lub wróćcie za kilka dni.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Apteczka dla rodziców */}
            <section className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-8 print:break-before-page">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-amber-900">
                  Apteczka Pierwszej Pomocy Emocjonalnej
                </h2>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="hidden md:flex gap-2">
                  <Printer className="h-4 w-4" />
                  Drukuj apteczkę
                </Button>
              </div>
              
              <div className="prose prose-amber max-w-none">
                <p className="lead">
                  <strong>Kieszonkowy przewodnik dla rodziców</strong> inspirowany książką „Żaba. Mała opowieść o żałobie"
                </p>
                
                <p className="text-sm">
                  Dziecięca żałoba rzadko wygląda jak ta dorosła. Często przychodzi falami – dziecko może w jednej chwili spokojnie układać klocki, a w kolejnej wybuchnąć niepohamowanym płaczem lub złością z błahego powodu. W takich momentach najważniejsze to nie zatrzymywać tych emocji, ale dać im bezpieczne ujście.
                </p>

                <h3>1. Gdy pojawia się nagły płacz lub smutek</h3>
                <ul className="text-sm space-y-2">
                  <li>"Płacz, kochanie. Nie musisz być teraz silny/a."</li>
                  <li>"Widzę, że twoja Żaba jest teraz bardzo duża i ciężka. Jestem tu z tobą."</li>
                  <li>"Pamiętasz, co mówiła Żaba? Łzy to piękny skarb. Dziękuję, że mi je pokazujesz."</li>
                  <li>"To normalne, że tak bardzo tęsknisz. Ja też bardzo tęsknię. Możemy popłakać razem."</li>
                </ul>

                <h3>2. Gdy wybucha złość, bunt lub agresja</h3>
                <ul className="text-sm space-y-2">
                  <li>"Jesteś wściekły/a, że to się stało. Masz do tego pełne prawo, złość jest okej."</li>
                  <li>"Widzę, jak bardzo jesteś zły/a. Chodź, weźmiemy poduszkę i wykrzyczymy to z całej siły. Pamiętasz? Taki krzyk potrafi dobrze smakować."</li>
                  <li>"Wow, to był naprawdę głośny krzyk! Myślisz, że twoja Żaba już się nim najadła, czy potrzebujesz krzyknąć jeszcze raz?"</li>
                  <li>"Zatrzymam cię teraz, żebyś nie zrobił/a sobie krzywdy (gdy dziecko uderza), ale rozumiem, że jesteś bardzo, bardzo zły/a. Wyładujmy to inaczej."</li>
                </ul>

                <h3>3. Gdy dziecko milczy, zamyka się w sobie lub się boi</h3>
                <ul className="text-sm space-y-2">
                  <li>"Zauważyłem/am, że od jakiegoś czasu jesteś bardzo cicho. Pamiętasz, co mówiła Żaba o sercu? Że od milczenia może pęknąć. Opowiesz mi, czego się teraz boisz?"</li>
                  <li>"Czasem dorośli są bardzo smutni, ale udają, że wszystko jest w porządku. Ja też tak czasem robię, ale wiedz, że zawsze możesz mi powiedzieć o swoim strachu."</li>
                  <li>"Nie musisz teraz nic mówić. Posiedzę tu obok ciebie. Kiedy będziesz gotowy/a zawołać swoją Żabę, po prostu daj mi znać."</li>
                </ul>

                <h3>4. Gdy budujecie nową codzienność ze wspomnieniami</h3>
                <ul className="text-sm space-y-2">
                  <li>"To było piękne popołudnie. Zróbmy z niego nowy bąbelek wspomnień do naszej kolekcji."</li>
                  <li>"Dzisiaj twoja Żaba wydaje się zupełnie przezroczysta! Widzisz, potrafimy znowu się śmiać, i to jest bardzo dobre."</li>
                  <li>"Zastanawiam się, co [imię zmarłej osoby] powiedziałby/powiedziałaby na ten twój piękny rysunek. Na pewno byłby/byłaby dumny/a."</li>
                </ul>

                <div className="bg-white p-4 rounded-lg border border-amber-100 not-prose mt-6">
                  <p className="text-sm font-bold text-amber-900">
                    ⚠️ Ważna zasada na koniec:
                  </p>
                  <p className="text-sm mt-2">
                    Słowa są ważne, ale najważniejsza jest Twoja obecność. Jeśli w kluczowym momencie zapomnisz wszystkich powyższych zdań, po prostu usiądź obok dziecka, przytul je i powiedz: <strong>"Jestem tu. Widzę cię"</strong>. To komunikat, który leczy najskuteczniej.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / Info */}
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6 sticky top-24">
              <h3 className="font-bold mb-4 flex items-center">
                <Info className="mr-2 h-5 w-5" />
                O scenariuszu
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scenariusz przygotowany na podstawie studium przypadku Zosi. Przeznaczony do pracy indywidualnej z dzieckiem przeżywającym żałobę.
              </p>
              <Button className="w-full mb-3" onClick={() => window.print()}>
                <Download className="mr-2 h-4 w-4" />
                Pobierz PDF
              </Button>
              <div className="text-xs text-center text-muted-foreground">
                Darmowy do użytku edukacyjnego
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}