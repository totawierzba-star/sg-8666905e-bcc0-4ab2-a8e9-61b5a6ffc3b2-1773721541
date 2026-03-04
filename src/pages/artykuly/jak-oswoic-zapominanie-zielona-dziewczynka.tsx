import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, Brain, ArrowRight } from "lucide-react";

export default function JakOswoicZapominanie() {
  return (
    <>
      <SEO
        title="Jak oswoić zapominanie? Poradnik do pracy z książką 'Zielona dziewczynka' w biblioterapii"
        description="Praktyczny poradnik dla rodziców i terapeutów: jak rozmawiać z dzieckiem o chorobie Alzheimera i demencji przy pomocy książki 'Zielona dziewczynka'. Metody biblioterapii, pytania do rozmowy i wskazówki terapeutyczne."
        image="/uploads/zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bylo.jpg"
      />
      <Layout>
        <article className="container max-w-4xl mx-auto px-4 py-16">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-6">
              <Link
                href="/artykuly"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                ← Powrót do artykułów
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Jak oswoić zapominanie? Poradnik do pracy z książką „Zielona dziewczynka" w biblioterapii
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <span>📚 Biblioterapia</span>
              <span>🧠 Choroba Alzheimera</span>
              <span>👨‍👩‍👧 Dla rodziców i terapeutów</span>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-lg leading-relaxed">
                Rozmowa z dzieckiem o starzeniu się, demencji i chorobie Alzheimera to jedno z najtrudniejszych wyzwań dla rodziców i terapeutów. Z pomocą przychodzi literatura, która potrafi ubrać trudne emocje w bezpieczne metafory.
              </p>
            </div>
          </header>

          {/* Featured Book Link */}
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 rounded-xl border-2 border-primary/20 mb-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-6 items-center">
              <div className="relative aspect-[3/4] w-full max-w-[200px] mx-auto">
                <Image
                  src="/uploads/zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bylo.jpg"
                  alt="Okładka książki Zielona dziewczynka"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">O tej książce</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>„Zielona dziewczynka. Czyli popołudnie, którego nie było"</strong> (tekst: Anna Augustyniak, ilustracje: Kasia Augustyniak) to niezwykle wrażliwe narzędzie do pracy z dziećmi, które mierzą się z kryzysem w rodzinie, utratą dawnego porządku i poczuciem przedwczesnego obarczenia dorosłymi problemami.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/ksiazki/zielona-dziewczynka">
                    <Button variant="default" className="w-full sm:w-auto">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Zobacz książkę
                    </Button>
                  </Link>
                  <Link href="https://tusieczyta.pl/pl/albus/1479-zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bylo-978836708532.html" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Kup książkę
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-lg">
              Poniższy poradnik podpowiada, jak wykorzystać tę lekturę w procesie biblioterapeutycznym i w domowych rozmowach.
            </p>
          </section>

          {/* Main Therapeutic Themes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Brain className="h-8 w-8 text-primary" />
              Główne motywy terapeutyczne w książce
            </h2>
            
            <p className="text-lg mb-8 text-muted-foreground">
              Książka działa na kilku płaszczyznach, co pozwala na dostosowanie pracy do aktualnych potrzeb dziecka. Najważniejsze obszary, które można eksplorować podczas lektury to:
            </p>

            <div className="grid gap-6">
              <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-primary">1. Zrozumienie choroby Alzheimera</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ukazanie demencji nie tylko jako medycznego problemu, ale jako zapadania się w „pokój własnych wspomnień".
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-primary">2. Prawo do dziecięcego gniewu i frustracji</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jedenastoletnia Nutka czuje, że traci swoje dzieciństwo (odwołane plany, konieczność pomocy babci, zajmowanie się młodszą siostrą). Książka waliduje te trudne emocje.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-primary">3. Syndrom popękanej doniczki (wypalenie opiekuna)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Piękna metafora mamy, która stara się funkcjonować normalnie, ale „przecieka" z niej siła do życia – idealny punkt wyjścia do rozmowy o emocjach dorosłych.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-primary">4. Proces żegnania się</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Opowieść uczy, że żegnamy się w życiu nie tylko ze zmarłymi (jak z ciocią Lulą czy liskiem), ale też z czasem dla siebie, z dawnymi rolami, czy z babcią, jaka była kiedyś.
                </p>
              </div>
            </div>
          </section>

          {/* Illustration Gallery */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.42.40.png"
                  alt="Ilustracja z książki Zielona dziewczynka - fragment 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.42.49.png"
                  alt="Ilustracja z książki Zielona dziewczynka - fragment 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.42.56.png"
                  alt="Ilustracja z książki Zielona dziewczynka - fragment 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* How to Work with the Text */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              Jak pracować z tekstem w gabinecie i w domu?
            </h2>
            
            <p className="text-lg mb-8 text-muted-foreground">
              Aby praca z „Zieloną dziewczynką" była skuteczna, warto podzielić lekturę na fragmenty i pracować z poszczególnymi obrazami za pomocą metafory.
            </p>

            <div className="space-y-8">
              {/* Method 1 */}
              <div className="bg-muted/30 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">
                  1. Eksploracja podziemnego korytarza
                  <span className="block text-lg font-normal text-muted-foreground mt-2">
                    Praca z metaforą pamięci
                  </span>
                </h3>
                <p className="mb-4 leading-relaxed">
                  Zejście pod korzenie Wierzby i spotkanie z Zieloną Dziewczynką to podróż do umysłu osoby chorej na Alzheimera.
                </p>
                <div className="bg-card p-4 rounded-lg">
                  <strong className="text-primary">Jak z tym pracować:</strong>
                  <p className="mt-2 leading-relaxed">
                    Zwróć uwagę dziecka na to, że babcia Anna czuje się pewniej w przeszłości niż w teraźniejszości (nie pamięta, jak zrobić kawę, ale pamięta zapach jesieni sprzed lat). Pomaga to dziecku zrozumieć, że dziwne zachowania bliskiej osoby (np. wchodzenie na dach) wynikają z zagubienia, a nie ze złej woli.
                  </p>
                </div>
              </div>

              {/* Method 2 */}
              <div className="bg-muted/30 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">
                  2. Metafora „popękanej doniczki"
                  <span className="block text-lg font-normal text-muted-foreground mt-2">
                    Rozmowa o stresie dorosłych
                  </span>
                </h3>
                <p className="mb-4 leading-relaxed">
                  Dzieci często biorą winę za nerwową atmosferę w domu na siebie. Nutka widzi awanturujące się ciotki i płaczącą mamę.
                </p>
                <div className="bg-card p-4 rounded-lg">
                  <strong className="text-primary">Jak z tym pracować:</strong>
                  <p className="mt-2 leading-relaxed">
                    Opowiedzcie o mamie jako o popękanej doniczce. Zapytaj dziecko, co się dzieje, gdy woda (siła, cierpliwość) wycieka z dorosłych. To zdejmuje z dziecka ciężar odpowiedzialności za nastroje rodziców i tłumaczy dynamikę zmęczonej rodziny.
                  </p>
                </div>
              </div>

              {/* Method 3 */}
              <div className="bg-muted/30 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold mb-4">
                  3. Prawo do bycia dzieckiem
                  <span className="block text-lg font-normal text-muted-foreground mt-2">
                    Praca z granicami
                  </span>
                </h3>
                <p className="mb-4 leading-relaxed">
                  Nutka jest rozdarta między oczekiwaniami dorosłych („babci trzeba pomóc", „miałaś pilnować siostry"), a swoimi potrzebami (chęć spędzenia czasu z koleżanką).
                </p>
                <div className="bg-card p-4 rounded-lg">
                  <strong className="text-primary">Jak z tym pracować:</strong>
                  <p className="mt-2 leading-relaxed">
                    Daj dziecku przestrzeń na wyrażenie złości. Zaznacz, że frustracja Nutki była całkowicie naturalna. Warto omówić zakończenie książki, w którym Nutka z ulgą „wtula się w mamę, smakując to, że jest jeszcze mimo wszystko dzieckiem".
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Discussion Questions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Pytania do rozmowy kierowanej z dzieckiem
            </h2>
            
            <p className="text-lg mb-8 text-muted-foreground">
              Zamiast pytać wprost o chorobę, użyj pytań opartych na świecie przedstawionym:
            </p>

            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border-l-4 border-primary/50">
                <p className="font-medium leading-relaxed">
                  Dlaczego babcia Anna weszła na dach w poszukiwaniu Zielonej Dziewczynki? Co próbowała zobaczyć?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-primary/50">
                <p className="font-medium leading-relaxed">
                  Jak myślisz, co czuła Nutka, kiedy zepsuły się jej plany na wieczór filmowy z Gają? Czy miała prawo być zła?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-primary/50">
                <p className="font-medium leading-relaxed">
                  Zielona Dziewczynka mówi, że traci się kogoś "tysiące razy w ciągu każdego dnia". Z czym musieli pożegnać się bohaterowie książki?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-primary/50">
                <p className="font-medium leading-relaxed">
                  Gdybyś miał/miała swoje własne drzewo wspomnień (jak Wierzba babci), co by się pod nim kryło?
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section - Schema.org optimized */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Najczęściej zadawane pytania</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  Dla dzieci w jakim wieku przeznaczona jest ta książka w kontekście terapeutycznym?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Najwięcej korzyści z samodzielnej lektury i dyskusji wyciągną dzieci w wieku wczesnoszkolnym i starsze (około 9–13 lat), które są w stanie zrozumieć abstrakcyjne metafory i utożsamić się z dylematami Nutki. Z młodszymi dziećmi (w wieku Debory) można czytać wybrane, mniej skomplikowane fragmenty, oswajając je z samym pojęciem zapominania.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  Czy książka nie przestraszy dziecka wizją choroby?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nie. Autorka bardzo umiejętnie ubrała chorobę w szaty baśniowej metafory (Zielona Dziewczynka, magiczna Wierzba). Książka nie epatuje fizycznym wymiarem starzenia się, lecz skupia się na aspekcie pamięci i emocjach, zapewniając bezpieczny dystans psychologiczny.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  Czy to pozycja wyłącznie dla rodzin zmagających się z demencją?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choć Alzheimer jest osią fabularną, książka porusza bardzo uniwersalne tematy: stratę, brak czasu w dorosłym życiu, poczucie bycia pomijanym przez zapracowanych rodziców oraz nagłe zmiany życiowe. Sprawdzi się w terapii każdego dziecka mierzącego się z trudną zmianą w dynamice rodziny.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 md:p-12 rounded-xl text-primary-foreground text-center">
            <h2 className="text-3xl font-bold mb-4">
              Gotowy na terapeutyczną podróż z „Zieloną dziewczynką"?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Książka „Zielona dziewczynka. Czyli popołudnie, którego nie było" to niezastąpione narzędzie w rozmowach o chorobie Alzheimera, zmianach w rodzinie i prawie do bycia dzieckiem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ksiazki/zielona-dziewczynka">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Więcej o książce
                </Button>
              </Link>
              <Link href="https://tusieczyta.pl/pl/albus/1479-zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bylo-978836708532.html" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                  Kup teraz na TuSięCzyta.pl
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-16 pt-12 border-t">
            <h2 className="text-2xl font-bold mb-6">Może Cię również zainteresować</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/ksiazki" className="group">
                <div className="bg-card p-6 rounded-lg border hover:border-primary transition-colors h-full">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Pełna kolekcja książek
                  </h3>
                  <p className="text-muted-foreground">
                    Zobacz wszystkie 12 tytułów pomagających dzieciom w trudnych momentach życia
                  </p>
                </div>
              </Link>
              
              <Link href="/artykuly" className="group">
                <div className="bg-card p-6 rounded-lg border hover:border-primary transition-colors h-full">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Więcej artykułów o biblioterapii
                  </h3>
                  <p className="text-muted-foreground">
                    Praktyczne poradniki i wskazówki dla rodziców i terapeutów
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
}