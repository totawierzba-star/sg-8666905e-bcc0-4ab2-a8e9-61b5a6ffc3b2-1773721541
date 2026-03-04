import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { 
  Sparkles, 
  ArrowRight, 
  PenTool,
  Clock,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function NarzedziownikPage() {
  return (
    <Layout>
      <SEO
        title="Narzędziownik Biblioterapeuty - Scenariusze zajęć"
        description="Gotowe scenariusze zajęć biblioterapeutycznych dla dzieci i młodzieży. Materiały do druku, karty pracy i przewodniki dla rodziców."
        url="https://ksiazki-do-zadan-specjalnych.pl/biblioterapia/narzedziownik"
      />

      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Narzędziownik
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Scenariusze zajęć biblioterapeutycznych
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Gotowe do wykorzystania materiały edukacyjne przygotowane przez ekspertów. Pobieraj, drukuj i prowadź profesjonalne zajęcia.
            </p>
          </div>

          {/* Scenarios Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Scenario 1: Gdy doniczka przecieka */}
            <Link href="/biblioterapia/scenariusze/gdy-doniczka-przecieka" className="group">
              <div className="h-full bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-3 bg-primary" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded">Emocje</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> 45 min</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Gdy doniczka przecieka
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    Scenariusz zajęć o radzeniu sobie z trudnymi emocjami na podstawie książki "Zielona dziewczynka".
                  </p>
                  <div className="border-t pt-3 mt-auto">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span className="flex items-center"><BookOpen className="w-3 h-3 mr-1" /> Wiek: 9-13 lat</span>
                      <span>Grupa: 8-12 osób</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary mt-3">
                    Zobacz scenariusz <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Placeholder Cards */}
            <div className="bg-muted/30 border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="bg-background rounded-full p-4 mb-4">
                <Sparkles className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 text-muted-foreground">Scenariusz o żałobie</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Na podstawie książki "Żaba. Mała opowieść o żałobie" - w przygotowaniu.
              </p>
            </div>

            <div className="bg-muted/30 border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="bg-background rounded-full p-4 mb-4">
                <Sparkles className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 text-muted-foreground">Scenariusz o rozwodzie</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Na podstawie książki "Czasami szczęśliwi rodzice mieszkają oddzielnie" - w przygotowaniu.
              </p>
            </div>

            <div className="bg-muted/30 border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="bg-background rounded-full p-4 mb-4">
                <Sparkles className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 text-muted-foreground">Scenariusz o lęku</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Praca z lękiem separacyjnym i niepewnością - w przygotowaniu.
              </p>
            </div>

            <div className="bg-muted/30 border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="bg-background rounded-full p-4 mb-4">
                <Sparkles className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 text-muted-foreground">Więcej w drodze</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Pracujemy nad kolejnymi scenariuszami dotyczącymi różnych trudnych tematów.
              </p>
            </div>

          </div>

          {/* Info Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <PenTool className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold mb-3 text-amber-900">
                  Jak używać scenariuszy?
                </h2>
                <ul className="space-y-2 text-amber-900">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">1.</span>
                    <span>Pobierz pełny scenariusz w formacie PDF (przycisk na stronie scenariusza)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">2.</span>
                    <span>Przygotuj wymienione materiały (szablony, kolorowe kartki, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">3.</span>
                    <span>Przeprowadź zajęcia zgodnie z planem (wstęp, czytanie, rozmowa, działanie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">4.</span>
                    <span>Wydrukuj przewodnik dla rodziców i przekaż opiekunom dzieci</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-amber-800 font-medium">
                  💡 Wszystkie materiały są darmowe do użytku edukacyjnego i terapeutycznego.
                </p>
              </div>
            </div>
          </div>

        </div>
      </article>
    </Layout>
  );
}