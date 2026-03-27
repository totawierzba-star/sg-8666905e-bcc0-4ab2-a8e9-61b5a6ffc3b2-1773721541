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

export default function GuzikozercaNaTropieSlowPage() {
  const scenarioSlug = "guzikozerca-na-tropie-slow";

  const handlePdfCtaClick = (location: string) => {
    trackCtaClick({
      scenario_slug: scenarioSlug,
      location,
      link_text: "Pobierz scenariusz warsztatów (PDF)",
      link_url: typeof window !== "undefined" ? window.location.href : undefined,
    });
    window.print();
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Scenariusz warsztatów biblioterapeutycznych: Guzikożerca na tropie słów",
    description:
      "Scenariusz warsztatów biblioterapeutycznych dla dzieci 6-10 lat o komunikacji niewerbalnej, przeciążeniu bodźcami i empatii.",
    totalTime: "PT75M",
    educationalLevel: "Szkoła podstawowa (6-10 lat)",
    supply: [
      { "@type": "HowToSupply", name: "Książka 'Guzikożerca na tropie słów'" },
      { "@type": "HowToSupply", name: "Kartki A4" },
      { "@type": "HowToSupply", name: "Kredki i flamastry" },
      { "@type": "HowToSupply", name: "Materiały sensoryczne o różnych fakturach" },
      { "@type": "HowToSupply", name: "Kartki z nazwami emocji" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Wprowadzenie: Czy zawsze trzeba mówić?",
        text: "Rozmowa o tym, że emocje i potrzeby można komunikować także bez słów.",
      },
      {
        "@type": "HowToStep",
        name: "Czytanie i rozmowa kierowana",
        text: "Czytanie fragmentów książki z zatrzymaniem przy kluczowych momentach Leona.",
      },
      {
        "@type": "HowToStep",
        name: "Doświadczenie przeciążenia bodźcami",
        text: "Ćwiczenie pokazujące, że nadmiar bodźców utrudnia myślenie i komunikację.",
      },
      {
        "@type": "HowToStep",
        name: "Komunikacja bez słów",
        text: "Praca w parach nad rozpoznawaniem emocji na podstawie sygnałów niewerbalnych.",
      },
      {
        "@type": "HowToStep",
        name: "Tworzenie: Mój świat",
        text: "Dzieci rysują, co je wspiera, co je przeciąża i co pomaga się regulować.",
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Scenariusz warsztatów biblioterapeutycznych: Guzikożerca na tropie słów"
        description="Scenariusz warsztatów biblioterapeutycznych dla dzieci 6-10 lat. Komunikacja bez słów, biblioterapia dzieci i rozwój emocjonalny dziecka w praktyce zajęć grupowych."
        image="/uploads/guzikozerca-na-tropie-slow-okladka.jpg"
        url="https://biblioterapia.org/biblioterapia/scenariusze/guzikozerca-na-tropie-slow"
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
            Guzikożerca na tropie słów – jak rozumieć świat bez słów
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Scenariusz warsztatów biblioterapeutycznych dla dzieci 6-10 lat o empatii, komunikacji i regulacji emocji.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-muted/30 p-4 rounded-lg border mb-8">
            <div>
              <div className="flex items-center text-muted-foreground mb-1">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Czas</span>
              </div>
              <span className="font-medium">60–75 min</span>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Wiek</span>
              </div>
              <span className="font-medium">6–10 lat</span>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Grupa</span>
              </div>
              <span className="font-medium">do 15 osób</span>
            </div>
            <div>
              <div className="flex items-center text-muted-foreground mb-1">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-xs uppercase">Obszar</span>
              </div>
              <span className="font-medium">Emocje i komunikacja</span>
            </div>
          </div>

          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
            <p className="text-sm text-blue-800 mb-3 font-medium">Zobacz książkę Guzikożerca na tropie słów</p>
            <a
              href="https://tusieczyta.pl/pl/glowna/1203-guzikozerca-na-tropie-slow-9788367085168.html"
              target="_blank"
              rel="noopener noreferrer"
              data-track-local="true"
              onClick={() =>
                trackCtaClick({
                  scenario_slug: scenarioSlug,
                  location: "hero_cta",
                  link_text: "Zobacz książkę",
                  link_url:
                    "https://tusieczyta.pl/pl/glowna/1203-guzikozerca-na-tropie-slow-9788367085168.html",
                })
              }
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              📘 Zobacz książkę
            </a>
          </section>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-3">Wstęp</h2>
            <p className="text-muted-foreground mb-3">
              Ten scenariusz pokazuje, jak prowadzić <strong>biblioterapię dzieci</strong> wokół tematu komunikacji bez słów.
              Książka „Guzikożerca na tropie słów” pomaga dzieciom zauważyć, że trudne zachowanie bywa sygnałem przeciążenia,
              a nie braku dobrej woli.
            </p>
            <p className="text-muted-foreground">
              Zajęcia zostały zaprojektowane tak, by wspierać <strong>rozwój emocjonalny dziecka</strong>, wzmacniać empatię
              i budować nawyk uważnego reagowania na potrzeby innych.
            </p>
          </section>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              data-track-local="true"
              onClick={() => handlePdfCtaClick("intro_pdf_cta")}
              className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              ⬇️ Pobierz scenariusz warsztatów (PDF)
            </button>
          </div>

          <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Najważniejsze informacje</h2>
            <ul className="space-y-2 text-amber-900">
              <li>• <strong>Temat główny:</strong> komunikacja niewerbalna i przeciążenie bodźcami.</li>
              <li>• <strong>Format:</strong> praca grupowa, do 15 osób, 60–75 minut.</li>
              <li>• <strong>Efekt:</strong> większa empatia i lepsze rozumienie zachowań rówieśników.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Dlaczego książka działa</h2>
            <p className="text-muted-foreground mb-3">
              Historia Leona osadza trudny temat w codziennych sytuacjach. Dzieci widzą, że brak słów nie oznacza braku emocji.
              To obniża napięcie i ułatwia rozmowę o tym, co zwykle bywa pomijane.
            </p>
            <p className="text-muted-foreground">
              Narracja wspiera zmianę perspektywy: zamiast oceniać, dzieci uczą się pytać „co mogło się wydarzyć?” i „czego ta osoba teraz potrzebuje?”.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cele</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Zrozumienie, że nie każdy komunikuje się słowami.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Rozpoznawanie sygnałów przeciążenia i trudnych emocji.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Wzmacnianie empatii i adekwatnej reakcji na zachowanie rówieśnika.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Rozwijanie samoświadomości: co mnie wspiera, co mnie przeciąża.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Scenariusz (etapy)</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">1. Wprowadzenie – „Czy zawsze trzeba mówić?” (10 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Krótka rozmowa w kręgu o tym, czy zawsze umiemy nazwać swoje uczucia i czy można kogoś zrozumieć bez słów.
                </p>
                <p className="text-sm font-medium">Cel: otwarcie tematu komunikacji niewerbalnej.</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">2. Czytanie książki i rozmowa kierowana (15–20 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Czytanie fragmentami, zatrzymanie przy momentach trudności Leona, przeciążenia bodźcami i reakcji obronnych.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Co Leon może czuć w tej chwili?</li>
                  <li>Dlaczego reaguje właśnie tak?</li>
                  <li>Czy to działanie „na złość”, czy próba poradzenia sobie?</li>
                </ul>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">3. Doświadczenie świata Leona – „Za dużo wszystkiego” (15 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Dzieci wykonują proste zadanie przy wielu bodźcach (dźwięki, faktury, tempo poleceń), a potem omawiają odczucia.
                </p>
                <p className="text-sm font-medium">Wniosek: przeciążenie może utrudniać myślenie, mówienie i spokojną reakcję.</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">4. Komunikacja bez słów (10 min)</h3>
                <p className="text-muted-foreground">
                  Praca w parach: jedno dziecko pokazuje emocję mimiką i postawą, drugie odgaduje i uzasadnia, po czym następuje zamiana ról.
                </p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">5. Emocje i zachowania (10–15 min)</h3>
                <p className="text-muted-foreground mb-2">Analiza mini-scenek: ktoś krzyczy, ktoś milczy, ktoś ucieka.</p>
                <p className="text-sm font-medium">Pytanie przewodnie: „Co ta osoba może czuć i jak możemy ją wesprzeć?”</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">6. Tworzenie – „Mój świat” (15 min)</h3>
                <p className="text-muted-foreground">
                  Dzieci rysują trzy obszary: co lubię, co mnie przytłacza, co pomaga mi się uspokoić.
                </p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">7. Podsumowanie (10 min)</h3>
                <p className="text-muted-foreground">
                  Krąg zamknięcia: „Czego dziś się nauczyłem?” i „Co zrobię, gdy ktoś nie potrafi powiedzieć, co czuje?”.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Ćwiczenia</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Ćwiczenie sensoryczne</h3>
                <p className="text-sm text-muted-foreground">
                  Krótki eksperyment z wieloma bodźcami, który pomaga zrozumieć, skąd bierze się napięcie i wycofanie.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Emocje bez słów</h3>
                <p className="text-sm text-muted-foreground">
                  Trening odczytywania sygnałów niewerbalnych: twarz, ruch, ton ciała.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Scenki „Co się dzieje?”</h3>
                <p className="text-sm text-muted-foreground">
                  Zamiast oceny dziecko ćwiczy pytania: „co czuje?”, „czego potrzebuje?”, „jak pomóc?”.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Mapa „Mój świat”</h3>
                <p className="text-sm text-muted-foreground">
                  Budowanie własnych strategii regulacji i planu wsparcia na trudniejsze momenty.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Wnioski dla nauczyciela</h2>
            <ul className="space-y-2 text-green-900">
              <li>• Nie zmuszaj dzieci do wypowiedzi. Dobrowolność zwiększa poczucie bezpieczeństwa.</li>
              <li>• Unikaj etykiet („niegrzeczny”). Tłumacz zachowania językiem potrzeb i przeciążenia.</li>
              <li>• Najpierw nazwij emocję, potem proponuj strategię.</li>
              <li>• Używaj prostego języka bez diagnozowania dzieci.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Co jeśli dziecko nie chce brać udziału w rozmowie?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Uszanuj odmowę i zaproponuj obserwowanie grupy. Dzieci często dołączają, gdy poczują się bezpiecznie.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Co zrobić, gdy podczas ćwiczeń pojawią się silne emocje?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Zwolnij tempo, nazwij emocję i zaproponuj prostą regulację: oddech, chwilę ciszy, wodę, zmianę miejsca.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Czy scenariusz nadaje się do klasy integracyjnej?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tak. Warto jedynie skrócić część bodźcową i wydłużyć etap podsumowania, by dopasować tempo do grupy.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/40 border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Podsumowanie</h2>
            <p className="text-muted-foreground mb-3">
              Ten <strong>scenariusz warsztatów biblioterapeutycznych</strong> pomaga dzieciom zrozumieć, że za zachowaniem
              często stoi emocja lub przeciążenie. To praktyczna lekcja empatii i uważnego kontaktu.
            </p>
            <p className="text-muted-foreground">
              Końcowe przesłanie warsztatu: <strong>„Każdy z nas potrzebuje zrozumienia – czasem bardziej niż słów.”</strong>
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Materiały i publikacja</h2>
            <p className="text-muted-foreground mb-4">
              Zapisz stronę jako PDF i wykorzystaj ją podczas przygotowania zajęć.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <button
                type="button"
                data-track-local="true"
                onClick={() => handlePdfCtaClick("bottom_pdf_cta")}
                className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                ⬇️ Pobierz scenariusz warsztatów (PDF)
              </button>
              <a
                href="https://tusieczyta.pl/pl/glowna/1203-guzikozerca-na-tropie-slow-9788367085168.html"
                target="_blank"
                rel="noopener noreferrer"
                data-track-local="true"
                onClick={() =>
                  trackContextLinkClick({
                    scenario_slug: scenarioSlug,
                    location: "bottom_context_link",
                    link_text: "Zobacz książkę Guzikożerca na tropie słów",
                    link_url:
                      "https://tusieczyta.pl/pl/glowna/1203-guzikozerca-na-tropie-slow-9788367085168.html",
                  })
                }
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                Zobacz książkę Guzikożerca na tropie słów →
              </a>
            </div>
          </section>

          <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-slate-700" />
              Warianty nagłówka
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Guzikożerca na tropie słów – scenariusz warsztatów biblioterapeutycznych dla klas 1–3</li>
              <li>Jak rozumieć świat bez słów? Scenariusz biblioterapii dzieci na podstawie „Guzikożercy”</li>
              <li>Komunikacja, emocje i empatia – gotowy scenariusz do książki „Guzikożerca na tropie słów”</li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}
