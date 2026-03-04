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
  Info
} from "lucide-react";

export default function ScenariuszGdyDoniczkaPrzecieka() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Scenariusz zajęć biblioterapeutycznych: Gdy doniczka przecieka",
    "description": "Scenariusz zajęć dla dzieci 9-13 lat na podstawie książki 'Zielona dziewczynka'. Temat: radzenie sobie z trudnymi emocjami i budowanie odporności psychicznej.",
    "totalTime": "PT45M",
    "educationalLevel": "Szkoła podstawowa (klasy 3-6)",
    "supply": [
      { "@type": "HowToSupply", "name": "Książka 'Zielona dziewczynka'" },
      { "@type": "HowToSupply", "name": "Szablony doniczek" },
      { "@type": "HowToSupply", "name": "Kolorowe karteczki" },
      { "@type": "HowToSupply", "name": "Przybory do pisania" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Wstęp i kontrakt",
        "text": "Przywitanie, ustalenie zasad i runda otwierająca 'Jakim jesteś kolorem?'."
      },
      {
        "@type": "HowToStep",
        "name": "Głośne czytanie",
        "text": "Lektura fragmentów o złości Nutki i metaforze popękanej doniczki."
      },
      {
        "@type": "HowToStep",
        "name": "Rozmowa kierowana",
        "text": "Dyskusja o prawie do trudnych emocji i rozumieniu dorosłych."
      },
      {
        "@type": "HowToStep",
        "name": "Działanie twórcze",
        "text": "Rysowanie 'Mojej doniczki' i tworzenie 'Drzewa Siły' z liści zasobów."
      },
      {
        "@type": "HowToStep",
        "name": "Zakończenie",
        "text": "Podsumowanie i runda zamykająca."
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Scenariusz zajęć: Gdy doniczka przecieka - Narzędziownik Biblioterapeuty"
        description="Gotowy scenariusz zajęć biblioterapeutycznych dla dzieci 9-13 lat. Temat: radzenie sobie z emocjami, stres dorosłych i budowanie rezyliencji. Pobierz materiały PDF."
        image="/uploads/zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bylo.jpg"
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
            Gdy doniczka przecieka, czyli skąd czerpać siłę w trudnych chwilach
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Na podstawie książki „Zielona dziewczynka. Czyli popołudnie, którego nie było"
          </p>

          {/* Metryczka */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-muted/30 p-4 rounded-lg border">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-muted-foreground mb-1">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Czas trwania</span>
              </div>
              <span className="font-medium">45 minut</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Wiek</span>
              </div>
              <span className="font-medium">9–13 lat</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Grupa</span>
              </div>
              <span className="font-medium">8–12 osób</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-muted-foreground mb-1">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Baza</span>
              </div>
              <Link href="/ksiazki/zielona-dziewczynka" className="font-medium hover:text-primary underline decoration-dotted">
                Zielona dziewczynka
              </Link>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            
            {/* Cele */}
            <section className="bg-card rounded-lg border p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Cele zajęć
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Uświadomienie, że odczuwanie złości i smutku w trudnych chwilach jest naturalne.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Zrozumienie emocji dorosłych i zdjęcie z dziecka poczucia winy.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Budowanie odporności psychicznej poprzez identyfikację własnych zasobów.</span>
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
                <li>Książka „Zielona dziewczynka"</li>
                <li>Szablony doniczek (wydrukowane na sztywnym papierze)</li>
                <li>Kolorowe karteczki w kształcie liści</li>
                <li>Kredki, flamastry</li>
                <li>Duży brystol z konturem drzewa</li>
              </ul>
            </section>

            {/* Przebieg */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold border-b pb-2">Przebieg zajęć</h2>
              
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">1</div>
                <h3 className="text-lg font-bold mb-2">Wstęp i kontrakt (5 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Przywitanie i ustalenie zasad: słuchamy się nawzajem, to co mówimy zostaje w grupie.
                </p>
                <div className="bg-muted p-3 rounded text-sm italic">
                  "Jakim dzisiaj jesteś kolorem i dlaczego?" - runda otwierająca.
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">2</div>
                <h3 className="text-lg font-bold mb-2">Głośne czytanie ukierunkowane (10 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Wprowadzenie w historię Nutki. Odczytanie dwóch kluczowych fragmentów:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground ml-2 space-y-1">
                  <li><strong>O złości (s. 14):</strong> Nutka nie chce pomagać, czuje złość.</li>
                  <li><strong>O doniczce (s. 63):</strong> Mama jako popękana doniczka.</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">3</div>
                <h3 className="text-lg font-bold mb-2">Rozmowa kierowana – praca z metaforą (10 min)</h3>
                <p className="text-muted-foreground mb-3">Zadawanie pytań otwartych:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">?</span>
                    <span>Dlaczego Nutka była zła? Czy miała do tego prawo?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">?</span>
                    <span>Co sprawia, że w dorosłych pojawiają się "pęknięcia"?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">?</span>
                    <span>Czy to wina kwiatka (dziecka), że doniczka przecieka?</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">4</div>
                <h3 className="text-lg font-bold mb-2">Działanie twórcze (15 min)</h3>
                <div className="space-y-3">
                  <div className="bg-secondary/10 p-3 rounded">
                    <strong className="block text-secondary-foreground mb-1">Krok 1: Moja doniczka</strong>
                    <p className="text-sm">Rysowanie/pisanie na szablonie doniczki tego, co zabiera energię i złości (trudności).</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded">
                    <strong className="block text-primary-foreground mb-1">Krok 2: Liście zasobów</strong>
                    <p className="text-sm">Pisanie na liściach tego, co daje siłę i oparcie (osoby, wspomnienia).</p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded">
                    <strong className="block text-accent-foreground mb-1">Krok 3: Wspólne drzewo</strong>
                    <p className="text-sm">Przyklejanie liści na wspólny brystol - tworzenie Drzewa Wspomnień i Siły.</p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">5</div>
                <h3 className="text-lg font-bold mb-2">Zakończenie (5 min)</h3>
                <p className="text-muted-foreground">
                  Podsumowanie siły wspólnego drzewa. Runda zamykająca: "Z jaką jedną myślą wychodzisz?".
                </p>
              </div>
            </section>

            {/* Dla Rodziców - Sekcja do wydruku */}
            <section className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-8 print:break-before-page">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-amber-900">
                  Przewodnik dla rodziców
                </h2>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="hidden md:flex gap-2">
                  <Printer className="h-4 w-4" />
                  Drukuj przewodnik
                </Button>
              </div>
              
              <div className="prose prose-amber max-w-none">
                <p className="lead">
                  <strong>Drodzy Rodzice i Opiekunowie,</strong> podczas dzisiejszych zajęć rozmawialiśmy o emocjach w trudnych chwilach, opierając się na książce "Zielona dziewczynka".
                </p>
                
                <h3>Czego dowiedziały się dziś dzieci?</h3>
                <ul>
                  <li><strong>Mają prawo do trudnych emocji</strong> – złość i frustracja są naturalne.</li>
                  <li><strong>Metafora "popękanej doniczki"</strong> – gorszy nastrój rodzica nie jest winą dziecka, to tylko uciekająca siła.</li>
                  <li><strong>Drzewo Siły</strong> – szukaliśmy zasobów, które dają oparcie.</li>
                </ul>

                <h3>Jak kontynuować rozmowę w domu?</h3>
                <ul>
                  <li><strong>Używajcie metafory:</strong> "Moja doniczka dzisiaj trochę przecieka" – to zdejmuje z dziecka ciężar domysłów.</li>
                  <li><strong>Stwórzcie domowe Drzewo Wspomnień:</strong> Zapytajcie o "liście siły" z zajęć.</li>
                  <li><strong>Akceptujcie regres:</strong> Dziecko w stresie może zachowywać się "dziecinnie" – to naturalne.</li>
                </ul>

                <div className="bg-white p-4 rounded-lg border border-amber-100 not-prose mt-6">
                  <h4 className="font-bold text-amber-800 mb-3">Ściąga komunikacyjna</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-red-500 font-semibold mb-1">Zamiast mówić...</p>
                      <p className="italic text-muted-foreground">"Nie ma o co płakać, trzeba pomóc."</p>
                    </div>
                    <div>
                      <p className="text-green-600 font-semibold mb-1">Spróbuj powiedzieć...</p>
                      <p>"Widzę, że jesteś zły. Rozumiem, to trudne."</p>
                    </div>
                    <div className="border-t pt-2">
                      <p className="text-red-500 font-semibold mb-1">Zamiast...</p>
                      <p className="italic text-muted-foreground">"Musisz być teraz duży i dzielny."</p>
                    </div>
                    <div className="border-t pt-2">
                      <p className="text-green-600 font-semibold mb-1">Spróbuj...</p>
                      <p>"Wiem, że dużo się dzieje, ale nadal masz prawo do zabawy."</p>
                    </div>
                  </div>
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
                Scenariusz przygotowany przez ekspertów biblioterapii. Przeznaczony do pracy grupowej w szkołach, bibliotekach i świetlicach terapeutycznych.
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