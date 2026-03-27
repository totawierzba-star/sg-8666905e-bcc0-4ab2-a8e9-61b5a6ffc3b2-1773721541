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

export default function LinkaWMysimMiesciePage() {
  const scenarioSlug = "linka-w-mysim-miescie";

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
    name: "Scenariusz warsztatów biblioterapeutycznych: Linka w Mysim Mieście",
    description:
      "Scenariusz warsztatów biblioterapeutycznych dla dzieci 7-11 lat o smutku, samotności i budowaniu zasobów poprzez relacje oraz wyobraźnię.",
    totalTime: "PT75M",
    educationalLevel: "Szkoła podstawowa (7-11 lat)",
    supply: [
      { "@type": "HowToSupply", name: "Książka 'Linka w Mysim Mieście'" },
      { "@type": "HowToSupply", name: "Kartki A4" },
      { "@type": "HowToSupply", name: "Kredki, pastele, flamastry" },
      { "@type": "HowToSupply", name: "Kartki samoprzylepne" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Wprowadzenie: Czy każdy czasem czuje się samotny?",
        text: "Rozmowa o samotności i smutku, również wtedy, gdy obok są inni ludzie.",
      },
      {
        "@type": "HowToStep",
        name: "Czytanie fragmentów i rozmowa kierowana",
        text: "Omówienie kluczowych momentów: niewidzialność Linki, choroba mamy, Mysie Miasto.",
      },
      {
        "@type": "HowToStep",
        name: "Ćwiczenie: Moja Pani De",
        text: "Externalizacja smutku przez rysunek: jak wygląda, kiedy przychodzi i jak działa.",
      },
      {
        "@type": "HowToStep",
        name: "Ćwiczenie: Moje Mysie Miasto",
        text: "Tworzenie bezpiecznej przestrzeni regulacji emocji i budowania zasobów.",
      },
      {
        "@type": "HowToStep",
        name: "Relacje: Kto mi pomaga?",
        text: "Rozpoznawanie sieci wsparcia i konkretnych osób, do których można się zwrócić.",
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Scenariusz warsztatów biblioterapeutycznych: Linka w Mysim Mieście"
        description="Scenariusz warsztatów biblioterapeutycznych dla dzieci 7-11 lat. Praca z emocjami dzieci, samotnością dziecka i zasobami wsparcia na podstawie książki Linka w Mysim Mieście."
        image="/uploads/linka-w-mysim-miescie.jpg"
        url="https://biblioterapia.org/biblioterapia/scenariusze/linka-w-mysim-miescie"
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
            Linka w Mysim Mieście - jak radzić sobie ze smutkiem i samotnością
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Warsztat biblioterapeutyczny dla dzieci 7-11 lat o emocjach, stracie i szukaniu wsparcia.
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
              <span className="font-medium">7-11 lat</span>
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
              <span className="font-medium">Emocje i samotność</span>
            </div>
          </div>

          <section className="bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-xl p-6">
            <p className="text-sm text-indigo-800 mb-3 font-medium">Zobacz książkę Linka w Mysim Mieście</p>
            <a
              href="https://tusieczyta.pl/pl/glowna/1050-linka-w-mysim-miescie-9788367085106.html"
              target="_blank"
              rel="noopener noreferrer"
              data-track-local="true"
              onClick={() =>
                trackCtaClick({
                  scenario_slug: scenarioSlug,
                  location: "hero_cta",
                  link_text: "Zobacz książkę",
                  link_url:
                    "https://tusieczyta.pl/pl/glowna/1050-linka-w-mysim-miescie-9788367085106.html",
                })
              }
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              📘 Zobacz książkę
            </a>
          </section>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-3">Wstęp</h2>
            <p className="text-muted-foreground mb-3">
              Ten <strong>scenariusz warsztatów biblioterapeutycznych</strong> pomaga dzieciom nazwać smutek i oswoić samotność.
              Książka o Lince pokazuje, że trudne emocje często mają ukryte przyczyny i nie znikają po prostym "weź się w garść".
            </p>
            <p className="text-muted-foreground">
              Podczas zajęć dzieci ćwiczą rozpoznawanie własnych stanów, budowanie bezpiecznych wyobrażeń oraz szukanie wsparcia
              w relacjach. To praktyczna praca z tematem <strong>emocje dzieci</strong> i <strong>samotność dziecka</strong>.
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
              <li>• <strong>Temat:</strong> smutek, samotność, strata i zasoby dziecka.</li>
              <li>• <strong>Format:</strong> zajęcia grupowe 60-75 minut, 8-15 osób.</li>
              <li>• <strong>Efekt:</strong> dziecko rozumie, że smutek jest naturalny i można go regulować.</li>
              <li>• <strong>SEO:</strong> scenariusz warsztatów biblioterapeutycznych, biblioterapia dzieci, emocje dzieci, samotność dziecka.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Dlaczego książka działa</h2>
            <p className="text-muted-foreground mb-3">
              Historia Linki oddaje doświadczenie dziecka, które czuje się niewidzialne i niesłyszane. Dzięki metaforze "Pani De"
              łatwiej mówić o ciężkim nastroju bez etykietowania i bez straszenia diagnozami.
            </p>
            <p className="text-muted-foreground">
              Mysie Miasto pokazuje wyobraźnię jako realny zasób regulacji emocji. Z kolei relacje z Myszeliną i Marcjanną
              przypominają, że wsparcie może przyjść z różnych stron, nie tylko od dorosłych.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cele</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Rozpoznawanie smutku i innych trudnych emocji.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Zrozumienie, że emocje mogą mieć ukryte przyczyny.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Poznanie sposobów radzenia sobie: wyobraźnia, relacje, rozmowa.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <span>Wzmocnienie poczucia, że z emocjami nie trzeba zostawać samemu.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Scenariusz (etapy)</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">1. Wprowadzenie - „Czy każdy czasem czuje się samotny?” (10 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Rozmowa o samotności, także tej przeżywanej wśród innych ludzi.
                </p>
                <p className="text-sm font-medium">Punktem odniesienia jest doświadczenie Linki: „nieważna i niesłuchana”.</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">2. Czytanie fragmentów i rozmowa kierowana (15 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Czytanie scen o niewidzialności Linki, chorobie mamy, zagubieniu i odkryciu Mysiego Miasta.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Co czuje Linka?</li>
                  <li>Dlaczego nie mówi dorosłym wszystkiego?</li>
                  <li>Co może oznaczać "Pani De"?</li>
                </ul>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">3. Ćwiczenie - „Moja Pani De” (15 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Dzieci rysują, jak wygląda ich smutek, jak się zachowuje i kiedy się pojawia.
                </p>
                <p className="text-sm font-medium">Cel: externalizacja emocji i zmniejszenie lęku.</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">4. Świat bezpieczny - „Moje Mysie Miasto” (15 min)</h3>
                <p className="text-muted-foreground">
                  Dzieci tworzą miejsce, w którym czują się dobrze: kto tam jest, co je wspiera i co pomaga wracać do równowagi.
                </p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">5. Relacje - „Kto mi pomaga?” (10 min)</h3>
                <p className="text-muted-foreground mb-2">
                  Rozmowa o osobach wspierających: kto pomaga Lince i kto pomaga mnie.
                </p>
                <p className="text-sm font-medium">Wniosek: pomoc nie zawsze przychodzi tylko od dorosłych.</p>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-2">6. Podsumowanie (10 min)</h3>
                <p className="text-muted-foreground">
                  Zdanie kończące: <strong>„Smutek można oswoić - nie trzeba być z nim samemu.”</strong>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Ćwiczenia</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Moja Pani De</h3>
                <p className="text-sm text-muted-foreground">
                  Rysunkowa metafora smutku. Dziecko oswaja emocję, zamiast ją wypierać.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Moje Mysie Miasto</h3>
                <p className="text-sm text-muted-foreground">
                  Projekt bezpiecznej przestrzeni, która pomaga się regulować i odzyskiwać spokój.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Kto mi pomaga?</h3>
                <p className="text-sm text-muted-foreground">
                  Mapa relacji i osób wspierających na trudniejsze dni.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Pytania o emocje</h3>
                <p className="text-sm text-muted-foreground">
                  Krótkie pytania, które pomagają dziecku rozpoznać i nazwać to, co czuje.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Wnioski dla prowadzącego</h2>
            <ul className="space-y-2 text-green-900">
              <li>• Nie diagnozuj dzieci ani rodziców. Pracuj językiem metafor i doświadczeń.</li>
              <li>• Nie zmuszaj do dzielenia się. Dobrowolność buduje bezpieczeństwo.</li>
              <li>• Reaguj spokojnie, bez oceniania, normalizuj emocje.</li>
              <li>• Powtarzaj zasadę: „Twoje uczucia są OK”.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Co zrobić, gdy dziecko nie chce opowiadać o swoim smutku?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Zaproponuj formę pośrednią: rysunek, wybór koloru, krótkie zdanie na kartce. Rozmowa może przyjść później.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Jak rozmawiać o „Pani De”, żeby nie straszyć dzieci?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Mów prostym językiem o smutku, ciężkim nastroju i potrzebie wsparcia. Bez etykiet, bez medycznych wyjaśnień.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Czy zajęcia nadają się do klasy o dużej różnorodności emocjonalnej?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tak. Warto skrócić rundy wypowiedzi i zwiększyć udział ćwiczeń plastycznych, by każdy mógł pracować we własnym tempie.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/40 border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Podsumowanie</h2>
            <p className="text-muted-foreground mb-3">
              Ten <strong>scenariusz warsztatów biblioterapeutycznych</strong> wspiera dzieci w rozumieniu, że smutek jest naturalny,
              a samotność można zmniejszać przez relacje i bezpieczną wyobraźnię.
            </p>
            <p className="text-muted-foreground">
              To konkretne narzędzie do pracy w obszarze <strong>biblioterapia dzieci</strong>, szczególnie tam, gdzie pojawia się
              temat wycofania, lęku i poczucia niewidzialności.
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Materiały i publikacja</h2>
            <p className="text-muted-foreground mb-4">
              Zapisz stronę jako PDF i korzystaj ze scenariusza podczas przygotowania zajęć.
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
                href="https://tusieczyta.pl/pl/glowna/1050-linka-w-mysim-miescie-9788367085106.html"
                target="_blank"
                rel="noopener noreferrer"
                data-track-local="true"
                onClick={() =>
                  trackContextLinkClick({
                    scenario_slug: scenarioSlug,
                    location: "bottom_context_link",
                    link_text: "Zobacz książkę Linka w Mysim Mieście",
                    link_url:
                      "https://tusieczyta.pl/pl/glowna/1050-linka-w-mysim-miescie-9788367085106.html",
                  })
                }
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                Zobacz książkę Linka w Mysim Mieście →
              </a>
            </div>
          </section>

          <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-slate-700" />
              Warianty nagłówka
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Linka w Mysim Mieście - scenariusz warsztatów biblioterapeutycznych dla klas 1-5</li>
              <li>Jak rozmawiać z dziećmi o smutku i samotności? Scenariusz do książki „Linka w Mysim Mieście”</li>
              <li>Emocje dzieci i samotność dziecka - gotowy scenariusz biblioterapii na podstawie „Linki”</li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}
