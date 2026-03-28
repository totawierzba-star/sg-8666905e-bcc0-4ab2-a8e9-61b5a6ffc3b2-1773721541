import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function BiblioterapiaWSzkolePodstawowej() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Biblioterapia w szkole podstawowej — poradnik dla nauczycieli",
        description:
          "Jak wdrożyć biblioterapię w szkole podstawowej? Praktyczny poradnik dla nauczycieli, pedagogów i bibliotekarzy szkolnych. Scenariusze, metody pracy i polecane książki dla klas 1–8.",
        author: { "@type": "Organization", name: "Redakcja biblioterapia.org" },
        publisher: { "@type": "Organization", name: "biblioterapia.org", url: "https://biblioterapia.org" },
        datePublished: "2026-03-28",
        dateModified: "2026-03-28",
        image: "https://biblioterapia.org/uploads/biblioterapia-w-szkole-podstawowej-miniatura.jpg",
        url: "https://biblioterapia.org/artykuly/biblioterapia-w-szkole-podstawowej",
        mainEntityOfPage: "https://biblioterapia.org/artykuly/biblioterapia-w-szkole-podstawowej",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Kto może prowadzić biblioterapię w szkole podstawowej?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Biblioterapię w szkole podstawowej może prowadzić nauczyciel języka polskiego, pedagog szkolny, psycholog szkolny lub bibliotekarz — po ukończeniu podstawowego kursu z biblioterapii. Do biblioterapii rozwojowej (profilaktycznej) nie jest wymagany certyfikat terapeutyczny, choć warto skorzystać z dostępnych szkoleń.",
            },
          },
          {
            "@type": "Question",
            name: "Jak włączyć biblioterapię do lekcji języka polskiego?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Biblioterapię można włączyć do lekcji języka polskiego przez: wybór lektur o tematyce emocjonalnej, zadawanie pytań o emocje bohaterów (nie tylko o fabułę), prowadzenie dzienników lektur z refleksją emocjonalną, organizowanie kół czytelniczych z dyskusją. Nie wymaga to dodatkowych godzin — zmienia perspektywę pracy z tekstem.",
            },
          },
          {
            "@type": "Question",
            name: "Jakie tematy są najważniejsze w biblioterapii szkolnej?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kluczowe tematy biblioterapii w szkole podstawowej: lęk szkolny i stres przed sprawdzianami, relacje rówieśnicze i wykluczenie, przemoc i bullying, rodzina w trudnych sytuacjach (rozwód, choroba, strata), tożsamość i poczucie własnej wartości, odmienność i akceptacja, dorastanie i zmiany ciała (klasy 5–8).",
            },
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia w szkole podstawowej — poradnik dla nauczycieli"
        description="Jak wdrożyć biblioterapię w szkole podstawowej? Praktyczny poradnik dla nauczycieli, pedagogów i bibliotekarzy szkolnych. Scenariusze, metody pracy i polecane książki dla klas 1–8."
        url="https://biblioterapia.org/artykuly/biblioterapia-w-szkole-podstawowej"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-accent">Strona główna</Link>
        <span className="mx-2">/</span>
        <Link href="/artykuly" className="hover:text-accent">Artykuły</Link>
        <span className="mx-2">/</span>
        <span>Biblioterapia w szkole podstawowej</span>
      </nav>

      <div className="bg-gradient-hero py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              <BookOpen className="h-3 w-3" /> Praktyka
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Biblioterapia w szkole podstawowej — poradnik dla nauczycieli
          </h1>
          <p className="text-lg text-muted-foreground">
            Lęk przed sprawdzianem, wykluczenie przez rówieśników, trudna sytuacja w domu — szkoła
            to miejsce, gdzie dzieci przeżywają jedne z najtrudniejszych emocji. Biblioterapia może
            pomóc. Praktyczny przewodnik dla klas 1–8.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Redakcja · 28 marca 2026 · 14 min czytania</p>
        </div>
      </div>

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12">

        <p className="text-lg leading-relaxed mb-6">
          Szkoła podstawowa to osiem lat intensywnego rozwoju emocjonalnego — od nauki pierwszych
          przyjaźni i radzenia sobie z porażką po pierwsze miłości i kryzysy tożsamości. Nauczyciel,
          który umie sięgnąć po odpowiednią książkę w odpowiednim momencie, ma w rękach jedno
          z najpotężniejszych narzędzi profilaktycznych i terapeutycznych, jakie istnieją.
        </p>

        <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
          <p className="font-semibold text-sm uppercase tracking-wide mb-3 text-muted-foreground">Spis treści</p>
          <ol className="space-y-1 text-sm">
            <li><a href="#kto" className="hover:text-accent">1. Kto może prowadzić biblioterapię w szkole?</a></li>
            <li><a href="#klasy" className="hover:text-accent">2. Biblioterapia według etapu szkolnego (klasy 1–3 i 4–8)</a></li>
            <li><a href="#tematy" className="hover:text-accent">3. Kluczowe tematy i sytuacje interwencyjne</a></li>
            <li><a href="#jak-prowadzic" className="hover:text-accent">4. Jak wdrożyć biblioterapię — praktyczne modele</a></li>
            <li><a href="#metody" className="hover:text-accent">5. Metody pracy z tekstem w szkole</a></li>
            <li><a href="#ksiazki" className="hover:text-accent">6. Polecane książki dla klas 1–8</a></li>
            <li><a href="#faq" className="hover:text-accent">7. Często zadawane pytania</a></li>
          </ol>
        </div>

        <section id="kto" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">1. Kto może prowadzić biblioterapię w szkole?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border border-border">Kto</th>
                  <th className="text-left p-3 border border-border">Jaka forma</th>
                  <th className="text-left p-3 border border-border">Gdzie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nauczyciel języka polskiego", "Biblioterapia zintegrowana z lekcją (lektury, analiza emocji bohaterów)", "Sala lekcyjna"],
                  ["Wychowawca klasy", "Godziny wychowawcze, interwencja przy trudnych sytuacjach w klasie", "Sala lekcyjna"],
                  ["Pedagog / psycholog szkolny", "Biblioterapia indywidualna lub grupowa, sesje interwencyjne", "Gabinet"],
                  ["Bibliotekarz szkolny", "Koła czytelnicze, biblioterapia grupowa, rekomendacje tytułów", "Biblioteka szkolna"],
                  ["Terapeuta pedagogiczny", "Biblioterapia z dziećmi z SPE (specjalne potrzeby edukacyjne)", "Sala terapeutyczna"],
                ].map(([kto, forma, gdzie]) => (
                  <tr key={kto} className="even:bg-muted/20">
                    <td className="p-3 border border-border font-medium">{kto}</td>
                    <td className="p-3 border border-border text-muted-foreground">{forma}</td>
                    <td className="p-3 border border-border text-muted-foreground">{gdzie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            → Więcej o roli bibliotekarza: <Link href="/artykuly/bibliotekarze-jako-biblioterapeuci" className="text-accent hover:underline">Biblioterapia w bibliotece szkolnej</Link>
          </p>
        </section>

        <section id="klasy" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">2. Biblioterapia według etapu szkolnego</h2>

          <div className="space-y-6">
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-green-500 text-white p-4">
                <p className="font-bold text-lg">Klasy 1–3 (7–10 lat)</p>
                <p className="text-sm opacity-90">Myślenie konkretne, silna identyfikacja z bohaterem, potrzeba ilustracji</p>
              </div>
              <div className="p-5 space-y-3 text-sm">
                <p><strong>Materiał:</strong> Krótkie powieści, ilustrowane opowiadania, bajki terapeutyczne z konstruktywnym zakończeniem</p>
                <p><strong>Forma:</strong> Czytanie na głos przez nauczyciela, praca z ilustracjami, rozmowa w kole</p>
                <p><strong>Czas sesji:</strong> 25–35 minut</p>
                <p><strong>Kluczowe tematy:</strong> Przyjaźń, kłótnie, strach, złość, różnice między ludźmi, rodzina</p>
                <p><strong>Aktywności:</strong> Rysowanie emocji bohatera, odgrywanie scenek, układanie dalszego ciągu historii</p>
              </div>
            </div>

            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-blue-500 text-white p-4">
                <p className="font-bold text-lg">Klasy 4–6 (10–13 lat)</p>
                <p className="text-sm opacity-90">Rozwijające się myślenie abstrakcyjne, rosnące znaczenie grupy rówieśniczej</p>
              </div>
              <div className="p-5 space-y-3 text-sm">
                <p><strong>Materiał:</strong> Powieści dla dzieci i młodzieży, komiksy, opowiadania z perspektywą pierwszoosobową</p>
                <p><strong>Forma:</strong> Czytanie własne + sesja omówienia, koła czytelnicze, dzienniki lektur</p>
                <p><strong>Czas sesji:</strong> 35–45 minut</p>
                <p><strong>Kluczowe tematy:</strong> Wykluczenie, bullying, presja grupy, tożsamość, relacje rodzinne, pierwsze straty</p>
                <p><strong>Aktywności:</strong> Listy do bohatera, alternatywne zakończenia, mapy emocji postaci</p>
              </div>
            </div>

            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-indigo-500 text-white p-4">
                <p className="font-bold text-lg">Klasy 7–8 (13–15 lat)</p>
                <p className="text-sm opacity-90">Intensywne poszukiwanie tożsamości, duże znaczenie relacji, krytyczne myślenie</p>
              </div>
              <div className="p-5 space-y-3 text-sm">
                <p><strong>Materiał:</strong> Young adult, literatura faktu, autobiografie, poezja</p>
                <p><strong>Forma:</strong> Czytanie własne, dyskusja literacka, pisanie kreatywne jako forma ekspresji</p>
                <p><strong>Czas sesji:</strong> 45 minut</p>
                <p><strong>Kluczowe tematy:</strong> Tożsamość, poczucie własnej wartości, relacje romantyczne, presja, zdrowie psychiczne</p>
                <p><strong>Aktywności:</strong> Esej refleksyjny, tworzenie własnych tekstów, debata o postaciach</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tematy" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">3. Kluczowe tematy i sytuacje interwencyjne</h2>
          <p className="mb-4">
            Biblioterapię w szkole można stosować profilaktycznie (jako stały element pracy
            wychowawczej) lub interwencyjnie (gdy w klasie pojawia się konkretna trudna sytuacja):
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: "Lęk szkolny i stres", o: "Przed sprawdzianami, zmianą szkoły, wystąpieniami publicznymi. Normalizuje lęk jako powszechne doświadczenie.", link: "/artykuly/biblioterapia-a-lek-szkolny" },
              { t: "Wykluczenie i bullying", o: "Gdy w klasie pojawia się przemoc rówieśnicza. Buduje empatię i perspektywę ofiary.", link: null },
              { t: "Trudna sytuacja rodzinna", o: "Rozwód rodziców, choroba, strata. Normalizuje trudne emocje dziecka.", link: "/artykuly/biblioterapia-przy-rozstaniu-rodzicow" },
              { t: "Śmierć i żałoba", o: "Strata bliskiej osoby lub zwierzęcia. Daje język do opisania żalu.", link: "/artykuly/biblioterapia-po-stracie-bliskiej-osoby" },
              { t: "Poczucie własnej wartości", o: "Dziecko z niskim poczuciem własnej wartości, porównujące się negatywnie.", link: "/artykuly/biblioterapia-a-poczucie-wlasnej-wartosci" },
              { t: "Dorastanie i tożsamość", o: "Zmiany ciała, tożsamość płciowa, pierwsze relacje. Kl. 5–8.", link: null },
            ].map(({ t, o, link }) => (
              <div key={t} className="border border-border rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{t}</p>
                <p className="text-xs text-muted-foreground mb-2">{o}</p>
                {link && <Link href={link} className="text-xs text-accent hover:underline">→ Szczegółowy artykuł</Link>}
              </div>
            ))}
          </div>
        </section>

        <section id="jak-prowadzic" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">4. Jak wdrożyć biblioterapię — praktyczne modele</h2>

          <div className="space-y-5">
            <div className="border-l-4 border-accent pl-5 py-2">
              <p className="font-bold mb-1">Model 1: Biblioterapia zintegrowana z lekcją polskiego</p>
              <p className="text-sm text-muted-foreground">
                Nie wymaga dodatkowych godzin. Podczas omawiania lektury zadajesz pytania o emocje
                bohaterów: Co czuł Franek w tej scenie? Dlaczego zareagował właśnie tak? Co byś
                zrobił/a na jego miejscu? Zmiana perspektywy z fabularnej na emocjonalną.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-5 py-2">
              <p className="font-bold mb-1">Model 2: Godziny wychowawcze z elementami biblioterapii</p>
              <p className="text-sm text-muted-foreground">
                Raz w miesiącu godzina wychowawcza poświęcona krótkiemu tekstowi (opowiadanie,
                fragment, wiersz) powiązanemu z aktualnym tematem klasy. Świetny format dla
                tematów trudnych do podjęcia wprost (bullying, wykluczenie, stres).
              </p>
            </div>
            <div className="border-l-4 border-green-400 pl-5 py-2">
              <p className="font-bold mb-1">Model 3: Koło czytelnicze w bibliotece szkolnej</p>
              <p className="text-sm text-muted-foreground">
                Dobrowolne zajęcia raz w tygodniu prowadzone przez bibliotekarza lub pedagoga.
                Dzieci wybierają lub otrzymują książkę, czytają między sesjami i omawiają w grupie.
                Buduje kulturę czytelniczą i kompetencje emocjonalne jednocześnie.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-5 py-2">
              <p className="font-bold mb-1">Model 4: Biblioterapia interwencyjna (pedagog/psycholog)</p>
              <p className="text-sm text-muted-foreground">
                Gdy w klasie lub u konkretnego ucznia pojawia się trudna sytuacja — specjalista
                dobiera tekst i prowadzi sesję indywidualną lub grupową. Wymaga większych kompetencji
                i powinna być częścią szerszego planu wsparcia.
              </p>
            </div>
          </div>
        </section>

        <section id="metody" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">5. Metody pracy z tekstem w szkole</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: "Mapa emocji postaci", o: "Uczniowie rysują mapę emocji głównego bohatera w różnych momentach fabuły — rozwijają mentalizację i perspektywę." },
              { t: "Dziennik lektury emocjonalny", o: "Zamiast streszczenia — zapis emocji własnych podczas czytania. Co czułem/am? Co mnie zaskoczyło? Co przypomniało mi z mojego życia?" },
              { t: "List do bohatera", o: "Uczniowie piszą list do postaci literackiej — doradzają, wyrażają solidarność lub zadają pytania. Angażuje emocjonalnie i rozwija empatię." },
              { t: "Alternatywne zakończenie", o: "Co by się stało, gdyby bohater wybrał inaczej? Uczy myślenia przyczynowo-skutkowego i sprawczości." },
              { t: "Czytanie w rolach", o: "Uczniowie czytają różne role i doświadczają różnych perspektyw tej samej sytuacji — naturalna nauka empatii." },
              { t: "Dyskusja sokratejska", o: "Otwarte pytania bez jednej prawidłowej odpowiedzi, oparte na fragmencie tekstu. Idealna dla klas 5–8." },
            ].map(({ t, o }) => (
              <div key={t} className="border border-border rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{t}</p>
                <p className="text-xs text-muted-foreground">{o}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ksiazki" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">6. Polecane książki dla klas 1–8</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { href: "/ksiazki/skok", tytul: "Skok", klasy: "Kl. 2–5", temat: "Nadpobudliwość, ADHD, energia i impuls" },
              { href: "/ksiazki/kaluzysko", tytul: "Kałużysko", klasy: "Kl. 4–7", temat: "Depresja dziecięca, bezsilność, kryzys emocjonalny" },
              { href: "/ksiazki/zaba", tytul: "Żaba", klasy: "Kl. 1–4", temat: "Żałoba i strata — oswajanie trudnych emocji" },
              { href: "/ksiazki/zielona-dziewczynka", tytul: "Zielona dziewczynka", klasy: "Kl. 4–8", temat: "Alzheimer, strata, zmiana — jak rozmawiać o odchodzeniu" },
            ].map(({ href, tytul, klasy, temat }) => (
              <Link key={href} href={href} className="border border-border rounded-lg p-4 hover:border-accent transition-colors">
                <p className="font-semibold text-sm mb-1">{tytul}</p>
                <p className="text-xs text-accent font-medium mb-1">{klasy}</p>
                <p className="text-xs text-muted-foreground">{temat}</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            → <Link href="/artykuly/najlepsze-ksiazki-terapeutyczne-7-12-lat" className="text-accent hover:underline">Najlepsze książki terapeutyczne dla dzieci 7–12 lat</Link>
          </p>
        </section>

        <section id="faq" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">7. Często zadawane pytania</h2>
          <div className="space-y-4">
            {[
              {
                q: "Czy biblioterapia wymaga zgody rodziców?",
                a: "Biblioterapia rozwojowa zintegrowana z lekcją lub godzinami wychowawczymi nie wymaga osobnej zgody rodziców — jest częścią standardowej pracy wychowawczo-dydaktycznej. Jeśli prowadzisz regularny program biblioterapeutyczny poza lekcjami lub pracę indywidualną z konkretnym dzieckiem w trudnej sytuacji, warto poinformować rodziców i uzyskać ich akceptację."
              },
              {
                q: "Co zrobić, gdy uczeń ujawni podczas zajęć trudną sytuację domową?",
                a: "Wysłuchaj dziecko spokojnie i bez oceniania. Nie obiecuj dziecku, że zachowasz to w tajemnicy — jako nauczyciel możesz mieć obowiązek zgłoszenia. Po zajęciach skonsultuj się z pedagogiem lub psychologiem szkolnym. Jeśli podejrzewasz przemoc lub zaniedbanie — obowiązują procedury ochrony dziecka."
              },
              {
                q: "Jak radzić sobie z uczniami, którzy nie chcą rozmawiać?",
                a: "Nigdy nie zmuszaj do wypowiedzi. Uczeń, który milczy, też uczestniczy — słucha, obserwuje, przetwarza. Zaproponuj alternatywną formę wyrazu: rysunek, pismo, gest. Buduj zaufanie przez czas — niektóre dzieci zaczynają mówić dopiero po kilku sesjach."
              },
              {
                q: "Jak połączyć biblioterapię z podstawą programową?",
                a: "Biblioterapia naturalnie wpisuje się w wymagania podstawy programowej: analiza i interpretacja tekstu, rozumienie emocji bohaterów, rozwijanie empatii, edukacja filozoficzna i społeczna. Wiele treści biblioterapeutycznych można realizować przy okazji omawiania obowiązkowych lektur, zmieniając jedynie sposób stawiania pytań."
              },
            ].map(({ q, a }) => (
              <details key={q} className="border border-border rounded-lg">
                <summary className="font-semibold cursor-pointer p-4 hover:text-accent">{q}</summary>
                <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-10">
          <h3 className="font-bold text-lg mb-2">Podsumowanie</h3>
          <p className="text-muted-foreground leading-relaxed">
            Biblioterapia w szkole podstawowej to nie dodatkowy program — to zmiana sposobu patrzenia
            na literaturę jako narzędzie kształtowania zdrowia emocjonalnego uczniów. Każdy nauczyciel,
            pedagog i bibliotekarz ma zasoby, by zacząć: wystarczy dobra książka, dobre pytanie i
            czas na odpowiedź.
          </p>
        </div>

        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-muted-foreground">Źródła</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Borecka, I. (2001). <em>Biblioterapia. Teoria i praktyka</em>. Stowarzyszenie Bibliotekarzy Polskich.</li>
            <li>Gregory, R. J. i in. (2004). Cognitive bibliotherapy for depression: a meta-analysis. <em>Professional Psychology</em>, 35(3), 275.</li>
            <li>Tomasik, E. (1994). <em>Czytelnictwo i biblioterapia w pedagogice specjalnej</em>. WSPS, Warszawa.</li>
            <li>Ministerstwo Edukacji Narodowej (2017). Podstawa programowa kształcenia ogólnego dla szkoły podstawowej.</li>
          </ul>
        </div>

        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-serif text-2xl font-bold mb-6">Czytaj dalej</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/artykuly/biblioterapia-w-przedszkolu", title: "Biblioterapia w przedszkolu", desc: "Jak prowadzić zajęcia z dziećmi 3–6 lat" },
              { href: "/artykuly/biblioterapia-dla-nastolatkow", title: "Biblioterapia dla nastolatków", desc: "Literatura wspierająca w okresie dorastania" },
              { href: "/artykuly/biblioterapia-a-lek-szkolny", title: "Biblioterapia a lęk szkolny", desc: "Tytuły i ćwiczenia przy stresie szkolnym" },
              { href: "/artykuly/jak-wybrac-ksiazke-terapeutyczna", title: "Jak wybrać książkę terapeutyczną?", desc: "Kryteria doboru krok po kroku" },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="border border-border rounded-lg p-4 hover:border-accent transition-colors">
                <p className="font-semibold text-sm mb-1">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-3">Gotowe scenariusze do szkoły</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Skorzystaj z naszych gotowych scenariuszy biblioterapeutycznych — opracowanych
            z myślą o pracy z dziećmi w różnym wieku szkolnym.
          </p>
          <Link
            href="/biblioterapia/scenariusze"
            className="inline-block bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors shadow-md"
          >
            Zobacz scenariusze
          </Link>
        </div>

      </article>
    </Layout>
  );
}
