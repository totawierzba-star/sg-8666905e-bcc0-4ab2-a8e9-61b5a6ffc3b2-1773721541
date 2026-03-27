import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { trackContextLinkClick, trackCtaClick } from "@/lib/analytics";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Download,
  Lightbulb,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";

export default function SkadJestemScenariuszPage() {
  const scenarioSlug = "skad-jestem-cialo-narodziny-bliskosc";
  const bookUrl = "https://tusieczyta.pl/pl/albus/670-skad-jestem-marianna-sztyma-agnieszka-kacprzyk-9788389284426.html";
  const pdfUrl = "/pdf/scenariusz-skad-jestem.pdf";

  const handlePdfCtaClick = (location: string) => {
    trackCtaClick({
      scenario_slug: scenarioSlug,
      location,
      link_text: "Pobierz scenariusz warsztatów (PDF)",
      link_url: pdfUrl,
    });
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Skąd jestem? – jak rozmawiać z dziećmi o ciele, narodzinach i bliskości",
    description:
      "Scenariusz warsztatów biblioterapeutycznych dla dzieci 6-9 lat wspierający rozmowę o ciele, narodzinach i bezpieczeństwie. Edukacja seksualna dzieci w języku adekwatnym do wieku.",
    totalTime: "PT75M",
    educationalLevel: "Szkoła podstawowa (6-9 lat)",
    supply: [
      { "@type": "HowToSupply", name: "Książka 'Skąd jestem?'" },
      { "@type": "HowToSupply", name: "Kartki A4" },
      { "@type": "HowToSupply", name: "Kredki i flamastry" },
      { "@type": "HowToSupply", name: "Duże arkusze papieru" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Wprowadzenie: Skąd się biorą dzieci?",
        text: "Bezpieczna rozmowa w kręgu o początkach życia i pytaniach dzieci.",
      },
      {
        "@type": "HowToStep",
        name: "Czytanie fragmentów książki",
        text: "Praca z metaforami nasionka i balonika z wodą oraz pytaniami dziecka.",
      },
      {
        "@type": "HowToStep",
        name: "Ćwiczenie: Jak powstaje życie?",
        text: "Rysunkowe uporządkowanie procesu od poczęcia do narodzin.",
      },
      {
        "@type": "HowToStep",
        name: "Ciało i różnice",
        text: "Naturalna rozmowa o nazewnictwie części ciała i zasadach szacunku.",
      },
      {
        "@type": "HowToStep",
        name: "Podsumowanie: każdy z nas jest ważny",
        text: "Domknięcie zajęć z naciskiem na bezpieczeństwo i brak zawstydzania.",
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Scenariusz warsztatów biblioterapeutycznych: Skąd jestem?"
        description="Scenariusz warsztatów biblioterapeutycznych dla dzieci 6-9 lat. Edukacja seksualna dzieci, rozmowa o tym skąd się biorą dzieci, rozwój dziecka i bezpieczeństwo emocjonalne."
        image="/uploads/skad-jestem_okładka.jpg"
        url="https://biblioterapia.org/biblioterapia/scenariusze/skad-jestem-cialo-narodziny-bliskosc"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/biblioterapia/narzedziownik"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do Narzędziownika
          </Link>
        </div>

        <header className="mb-10">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Scenariusz zajęć
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Skąd jestem? – jak rozmawiać z dziećmi o ciele, narodzinach i bliskości
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Gotowy scenariusz do pracy z dziećmi 6-9 lat, który oswaja temat ciała, początków życia i bezpieczeństwa.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-muted/30 p-4 rounded-lg border mb-8">
            <div>
              <div className="flex items-center text-muted-foreground mb-1">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Czas</span>
              </div>
              <span className="font-medium">60-75 min</span>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Wiek</span>
              </div>
              <span className="font-medium">6-9 lat</span>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Grupa</span>
              </div>
              <span className="font-medium">8-15 osób</span>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-1">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Obszar</span>
              </div>
              <span className="font-medium">Ciało, rozwój, relacje</span>
            </div>
          </div>

          <section className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
            <p className="text-sm text-amber-800 mb-3 font-medium">Zobacz książkę Skąd jestem?</p>
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-local="true"
              onClick={() =>
                trackCtaClick({
                  scenario_slug: scenarioSlug,
                  location: "hero_cta",
                  link_text: "Zobacz książkę",
                  link_url: bookUrl,
                })
              }
              className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
            >
              📘 Zobacz książkę
            </a>
          </section>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-3">Wstęp</h2>
            <p className="text-muted-foreground mb-3">
              Ten <strong>scenariusz warsztatów biblioterapeutycznych</strong> pomaga prowadzić spokojną, naturalną rozmowę o ciele,
              narodzinach i bliskości. Dzieci dostają jasne odpowiedzi bez zawstydzania.
            </p>
            <p className="text-muted-foreground">
              Zajęcia wspierają <strong>edukację seksualną dzieci</strong> w wersji adekwatnej do wieku: konkretnie, krótko i z szacunkiem
              dla granic każdego dziecka.
            </p>
          </section>

          <div className="flex flex-wrap gap-3">
            <a
              href={pdfUrl}
              data-track-local="true"
              onClick={() => handlePdfCtaClick("intro_pdf_cta")}
              className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              ⬇️ Pobierz scenariusz warsztatów (PDF)
            </a>
          </div>

          <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Najważniejsze informacje</h2>
            <ul className="space-y-2 text-amber-900">
              <li>• <strong>Temat:</strong> skąd się biorą dzieci, ciało i narodziny bez tabu.</li>
              <li>• <strong>Format:</strong> 60-75 minut, 8-15 dzieci, wiek 6-9 lat.</li>
              <li>• <strong>Efekt:</strong> większe poczucie bezpieczeństwa i mniej wstydu wokół pytań o ciało.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Dlaczego książka działa</h2>
            <p className="text-muted-foreground mb-3">
              Książka odpowiada na pytanie <strong>„skąd się biorą dzieci”</strong> prostym językiem i bez zawstydzania.
              Korzysta z metafor bliskich dziecku: nasionko i balonik z wodą.
            </p>
            <p className="text-muted-foreground">
              Dzięki temu dzieci łatwiej rozumieją proces rozwoju, a dorośli dostają bezpieczny sposób na rozmowę
              o ciele i narodzinach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cele</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Zrozumienie, skąd bierze się życie.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Poznanie podstawowych różnic między ciałem chłopca i dziewczynki.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Oswojenie tematu ciąży i narodzin bez lęku.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Budowanie naturalności i poczucia bezpieczeństwa w rozmowie o ciele.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Scenariusz (etapy)</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">1. Wprowadzenie – „Skąd się biorą dzieci?” (10 min)</h3>
                <p className="text-muted-foreground mb-2">Rozmowa neutralnym językiem: dzieci pojawiają się po okresie rozwoju w ciele mamy.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Czy ktoś zastanawiał się, skąd się wziął?</li>
                  <li>Czy dzieci pojawiają się nagle czy najpierw rosną?</li>
                </ul>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">2. Czytanie fragmentów (15-20 min)</h3>
                <p className="text-muted-foreground mb-2">Praca na kluczowych momentach: siostra w brzuchu mamy, pytania o nasionko i rozwój dziecka.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Co czuł bohater, gdy dowiedział się o siostrze?</li>
                  <li>Co oznacza „nasionko”?</li>
                  <li>Jak może wyglądać życie dziecka w brzuchu mamy?</li>
                </ul>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">3. Ćwiczenie – „Jak powstaje życie?” (15 min)</h3>
                <p className="text-muted-foreground mb-2">Dzieci rysują drogę: nasionko → rozwój → narodziny.</p>
                <p className="text-sm font-medium">Cel: uporządkowanie wiedzy i zrozumienie procesu.</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">4. Ciało i różnice (10-15 min)</h3>
                <p className="text-muted-foreground mb-2">Rozmowa o różnicach w ciele i poprawnym nazewnictwie części ciała.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Mówimy poprawnie.</li>
                  <li>Nie śmiejemy się.</li>
                  <li>Szanujemy innych.</li>
                </ul>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">5. Ćwiczenie – „Mój początek” (10 min)</h3>
                <p className="text-muted-foreground">Dzieci kończą zdanie: „Kiedyś byłem/byłam…”. Budujemy poczucie tożsamości i ciągłości.</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">6. Narodziny (10 min)</h3>
                <p className="text-muted-foreground">Omówienie narodzin spokojnie i rzeczowo: dziecko kończy rozwój i trafia pod opiekę rodziców.</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">7. Podsumowanie (10 min)</h3>
                <p className="text-muted-foreground">
                  Zdanie kończące: <strong>„Każdy z nas miał swój początek i każdy jest ważny.”</strong>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Ćwiczenia</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Jak powstaje życie?</h3>
                <p className="text-sm text-muted-foreground">Rysunek procesu: od nasionka do narodzin.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Mój początek</h3>
                <p className="text-sm text-muted-foreground">Budowanie historii własnego początku i poczucia ciągłości.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Słownik ciała</h3>
                <p className="text-sm text-muted-foreground">Utrwalanie poprawnych nazw części ciała w neutralnym języku.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Pytania bez wstydu</h3>
                <p className="text-sm text-muted-foreground">Dzieci zapisują pytania, na które dorośli odpowiadają adekwatnie do wieku.</p>
              </div>
            </div>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Wnioski dla prowadzącego</h2>
            <ul className="space-y-2 text-green-900">
              <li>• Używaj prostych słów i spokojnego tonu.</li>
              <li>• Nie zmuszaj dzieci do odpowiedzi.</li>
              <li>• Reaguj spokojnie na śmiech lub zawstydzenie.</li>
              <li>• Odpowiadaj krótko, adekwatnie do wieku, bez nadmiaru szczegółów.</li>
              <li>• Powtarzaj zasadę: „Ciało i narodziny są naturalne – nie są powodem do wstydu”.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Co zrobić, gdy dzieci zaczynają się śmiać?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nazwij reakcję spokojnie: „To normalne, że ten temat może wywołać śmiech. Wracamy do rozmowy i szacunku”.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Jak odpowiadać na trudniejsze pytania o ciało?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Krótko i rzeczowo. Tylko tyle, ile potrzebne na tym etapie rozwoju dziecka.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Czy ten scenariusz pasuje do klas mieszanych wiekowo?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tak. Przy młodszych dzieciach skróć część dyskusyjną, a wydłuż ćwiczenia rysunkowe.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/40 border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Podsumowanie</h2>
            <p className="text-muted-foreground mb-3">
              Ten scenariusz porządkuje temat ciała i narodzin w sposób bezpieczny, prosty i adekwatny do wieku.
            </p>
            <p className="text-muted-foreground">
              Dziecko rozumie, skąd bierze się życie, zna podstawowe różnice ciała i czuje, że jego pytania są ważne.
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Materiały i publikacja</h2>
            <p className="text-muted-foreground mb-4">Pobierz scenariusz i wykorzystaj go podczas przygotowania zajęć.</p>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={pdfUrl}
                data-track-local="true"
                onClick={() => handlePdfCtaClick("bottom_pdf_cta")}
                className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                ⬇️ Pobierz scenariusz warsztatów (PDF)
              </a>
              <a
                href={bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track-local="true"
                onClick={() =>
                  trackContextLinkClick({
                    scenario_slug: scenarioSlug,
                    location: "bottom_context_link",
                    link_text: "Zobacz książkę Skąd jestem?",
                    link_url: bookUrl,
                  })
                }
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                Zobacz książkę Skąd jestem? →
              </a>
            </div>
          </section>

          <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-slate-700" />
              Warianty nagłówka
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Scenariusz warsztatów biblioterapeutycznych: Skąd jestem? (6-9 lat)</li>
              <li>Jak rozmawiać z dziećmi o ciele i narodzinach? Gotowy scenariusz</li>
              <li>Edukacja seksualna dzieci bez tabu – scenariusz na bazie książki „Skąd jestem?”</li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}
