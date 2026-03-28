import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function BiblioterapiaWPrzedszkolu() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Biblioterapia w przedszkolu — jak prowadzić zajęcia z najmłodszymi?",
        description:
          "Praktyczny przewodnik dla nauczycieli i wychowawców przedszkola: jak prowadzić zajęcia biblioterapeutyczne z dziećmi w wieku 3–6 lat. Scenariusze, metody, przykłady i wskazówki.",
        author: { "@type": "Organization", name: "Redakcja biblioterapia.org" },
        publisher: { "@type": "Organization", name: "biblioterapia.org", url: "https://biblioterapia.org" },
        datePublished: "2026-03-28",
        dateModified: "2026-03-28",
        image: "https://biblioterapia.org/uploads/biblioterapia-w-przedszkolu-miniatura.jpg",
        url: "https://biblioterapia.org/artykuly/biblioterapia-w-przedszkolu",
        mainEntityOfPage: "https://biblioterapia.org/artykuly/biblioterapia-w-przedszkolu",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Czy biblioterapię można prowadzić w przedszkolu bez specjalistycznego wykształcenia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Biblioterapię rozwojową (profilaktyczną) w przedszkolu może prowadzić każdy nauczyciel lub wychowawca — bez specjalistycznego certyfikatu. Wystarczy umiejętność doboru odpowiedniej książki, ekspresyjnego czytania i prowadzenia otwartej rozmowy z dziećmi o emocjach bohaterów.",
            },
          },
          {
            "@type": "Question",
            name: "Jak długo powinna trwać sesja biblioterapeutyczna w przedszkolu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sesja biblioterapeutyczna z dziećmi przedszkolnymi powinna trwać 15–25 minut. Dla dzieci 3-letnich: maksymalnie 15 minut. Dla dzieci 4–5-letnich: 15–20 minut. Dla dzieci 6-letnich: 20–25 minut. Kluczowe jest dostosowanie do koncentracji dzieci — lepiej skończyć wcześniej niż przeciągać.",
            },
          },
          {
            "@type": "Question",
            name: "Ile razy w tygodniu prowadzić zajęcia biblioterapeutyczne w przedszkolu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Optymalnie: 1–2 razy w tygodniu jako stały element planu zajęć. Można też prowadzić biblioterapię interwencyjnie — gdy w grupie pojawia się konkretna trudna sytuacja (odejście kolegi, choroba, kłótnia). Regularność jest ważniejsza niż częstotliwość.",
            },
          },
          {
            "@type": "Question",
            name: "Jakie tematy są najważniejsze w biblioterapii przedszkolnej?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Najważniejsze tematy biblioterapii przedszkolnej: rozpoznawanie i nazywanie emocji, radzenie sobie ze złością i strachem, akceptacja odmienności, przyjaźń i konflikty z rówieśnikami, narodziny rodzeństwa, przeprowadzka, choroba lub śmierć w rodzinie, adaptacja do nowego środowiska.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia w przedszkolu — jak prowadzić zajęcia z najmłodszymi?"
        description="Praktyczny przewodnik dla nauczycieli i wychowawców przedszkola: jak prowadzić zajęcia biblioterapeutyczne z dziećmi w wieku 3–6 lat. Scenariusze, metody, przykłady i wskazówki."
        url="https://biblioterapia.org/artykuly/biblioterapia-w-przedszkolu"
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
        <span>Biblioterapia w przedszkolu</span>
      </nav>

      <div className="bg-gradient-hero py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              <BookOpen className="h-3 w-3" /> Praktyka
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Biblioterapia w przedszkolu — jak prowadzić zajęcia z najmłodszymi?
          </h1>
          <p className="text-lg text-muted-foreground">
            Trzylatki nie rozumują abstrakcyjnie — rozumują obrazami i historiami. Dlatego bajka
            jest w przedszkolu najskuteczniejszym narzędziem pracy z emocjami. Praktyczny przewodnik
            dla nauczycieli i wychowawców.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Redakcja · 28 marca 2026 · 12 min czytania</p>
        </div>
      </div>

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12">

        <p className="text-lg leading-relaxed mb-6">
          Przedszkole to pierwsze środowisko, w którym dziecko uczy się być częścią grupy, regulować
          emocje poza domem i radzić sobie z nowymi sytuacjami. To też czas, gdy kształtują się
          fundamenty zdrowia emocjonalnego na całe życie. Biblioterapia — w formie dostosowanej do
          wieku — jest jednym z najlepszych narzędzi wspierających ten proces.
        </p>

        <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
          <p className="font-semibold text-sm uppercase tracking-wide mb-3 text-muted-foreground">Spis treści</p>
          <ol className="space-y-1 text-sm">
            <li><a href="#specyfika" className="hover:text-accent">1. Specyfika biblioterapii z dziećmi 3–6 lat</a></li>
            <li><a href="#tematy" className="hover:text-accent">2. Najważniejsze tematy w biblioterapii przedszkolnej</a></li>
            <li><a href="#jak-prowadzic" className="hover:text-accent">3. Jak prowadzić zajęcia — struktura i metody</a></li>
            <li><a href="#pytania" className="hover:text-accent">4. Pytania, które warto zadawać dzieciom</a></li>
            <li><a href="#aktywnosci" className="hover:text-accent">5. Aktywności towarzyszące lekturze</a></li>
            <li><a href="#ksiazki" className="hover:text-accent">6. Polecane książki dla przedszkolaków</a></li>
            <li><a href="#faq" className="hover:text-accent">7. Często zadawane pytania</a></li>
          </ol>
        </div>

        <section id="specyfika" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">1. Specyfika biblioterapii z dziećmi 3–6 lat</h2>
          <p className="mb-6">
            Dziecko w wieku przedszkolnym myśli konkretnie i obrazowo. Nie rozumie jeszcze
            abstrakcyjnych pojęć jak lęk, smutek czy zazdrość — ale natychmiast rozumie, że miś
            się boi, że królik jest smutny, a zając nie chce się bawić z innymi. Ten mechanizm
            projekcji na bohatera jest sercem biblioterapii przedszkolnej.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { t: "Myślenie magiczne", o: "Dzieci w tym wieku wierzą, że bohatera można pocieszyć, a zła wiedźma zasługuje na karę. Korzystaj z tego — pytaj, co dzieci chciałyby zrobić dla bohatera." },
              { t: "Krótka koncentracja uwagi", o: "Maksymalnie 15–20 minut aktywności. Wybieraj krótkie teksty lub czytaj rozdziałami. Lepiej skończyć z niedosytem niż przeciągnąć." },
              { t: "Nauka przez ciało", o: "Trzylatki rozumieją emocje przez ciało — dlatego warto prosić o odtworzenie miny bohatera, gestu, pozy. Taniec, ruch, lepienie z plasteliny to naturalne przedłużenie biblioterapii." },
              { t: "Silna identyfikacja z bohaterem", o: "Im bardziej bohater przypomina dziecko (wiek, problem, środowisko), tym silniejsza identyfikacja. Nie trzeba dokładnego odbicia — wystarczy podobny dylemat emocjonalny." },
            ].map(({ t, o }) => (
              <div key={t} className="border border-border rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{t}</p>
                <p className="text-xs text-muted-foreground">{o}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <p className="font-semibold text-yellow-800 mb-2">Ważna zasada: nie tłumacz — pytaj</p>
            <p className="text-sm text-yellow-700">
              Największy błąd podczas biblioterapii przedszkolnej to wyjaśnianie morału. Dziecko
              musi samo odkryć sens — w swoim tempie i na swoim poziomie. Twoja rola to zadawanie
              otwartych pytań i aktywne słuchanie, nie nauczanie.
            </p>
          </div>
        </section>

        <section id="tematy" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3rd font-bold mb-6 font-serif text-3xl">2. Najważniejsze tematy biblioterapii przedszkolnej</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border border-border">Temat</th>
                  <th className="text-left p-3 border border-border">Kiedy szczególnie ważny</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rozpoznawanie i nazywanie emocji", "Cały rok, jako podstawa programu"],
                  ["Złość i jej wyrażanie", "Gdy w grupie są konflikty, bójki, wybuchy złości"],
                  ["Strach i lęk (ciemność, potwory, nowe miejsce)", "Adaptacja, nocne lęki, nowe sytuacje"],
                  ["Przyjaźń i konflikty z rówieśnikami", "Problemy w grupie, izolacja społeczna"],
                  ["Narodziny rodzeństwa", "Gdy dziecko ma zostać starszym bratem/siostrą"],
                  ["Przeprowadzka lub zmiana przedszkola", "Gdy dziecko zmienia środowisko"],
                  ["Choroba lub śmierć w rodzinie", "Gdy dziecko przeżywa stratę"],
                  ["Akceptacja odmienności", "Integracja, budowanie empatii"],
                  ["Samodzielność i separacja od rodziców", "Trudna adaptacja, lęk separacyjny"],
                ].map(([t, k]) => (
                  <tr key={t} className="even:bg-muted/20">
                    <td className="p-3 border border-border font-medium">{t}</td>
                    <td className="p-3 border border-border text-muted-foreground">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="jak-prowadzic" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">3. Jak prowadzić zajęcia — struktura i metody</h2>

          <p className="mb-6">
            Zajęcia biblioterapeutyczne w przedszkolu powinny mieć przewidywalną strukturę —
            dzieci czerpią bezpieczeństwo z rytuału. Oto sprawdzony schemat:
          </p>

          <div className="space-y-4 mb-8">
            {[
              { n: "1", t: "Rytuał wejścia (2–3 min)", o: "Zawsze zaczynaj tak samo: piosenka, okrągłe powitanie, specjalna poduszka do słuchania. Sygnał dla dzieci: teraz czas na bajkę i emocje." },
              { n: "2", t: "Krótka zapowiedź (1 min)", o: "Powiedz, o czym będzie książka — bez spoilerów. Na przykład: Dziś przeczytamy o misiu, który bardzo się złości. Znacie to uczucie?" },
              { n: "3", t: "Lektura z ekspresją (8–12 min)", o: "Czytaj powoli, moduluj głos, pokazuj ilustracje. Zatrzymuj się przy ważnych momentach. Pozwól dzieciom reagować spontanicznie." },
              { n: "4", t: "Rozmowa o emocjach (5–8 min)", o: "Zadawaj otwarte pytania o emocje bohaterów (nie o fabułę). Nie oceniaj odpowiedzi. Akceptuj ciszę." },
              { n: "5", t: "Aktywność twórcza (5–8 min)", o: "Rysunek, odgrywanie scenki, lepienie, ruch. Aktywność powinna nawiązywać do tematu emocjonalnego bajki." },
              { n: "6", t: "Rytuał zamknięcia (1–2 min)", o: "Pożegnanie z bohaterem. Jedno zdanie podsumowujące od każdego dziecka lub wspólne odśpiewanie piosenki końcowej." },
            ].map(({ n, t, o }) => (
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">{n}</div>
                <div>
                  <p className="font-semibold mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground">{o}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-blue-800 mb-2">Wskazówka: rozmiar grupy</p>
            <p className="text-sm text-blue-700">
              Optymalna grupa do biblioterapii w przedszkolu: 6–12 dzieci. W większej grupie trudno
              zapewnić każdemu dziecku czas na wypowiedź. Jeśli prowadzisz zajęcia z całą grupą
              (20+ dzieci), skup się na lekturze i krótkim omówieniu — rezygnując z głębszej pracy
              indywidualnej.
            </p>
          </div>
        </section>

        <section id="pytania" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">4. Pytania, które warto zadawać dzieciom</h2>
          <p className="mb-4 text-muted-foreground text-sm">
            Unikaj pytań zamkniętych (tak/nie) i pytań o fabułę (co się stało?).
            Skup się na emocjach i perspektywie dziecka:
          </p>
          <div className="bg-muted/30 rounded-xl p-6">
            <ul className="space-y-3 text-sm">
              {[
                "Co czuł miś / królik / bohater w tym momencie?",
                "Skąd wiesz, że mu było smutno / wesoło / straszno?",
                "Czy ty też kiedyś tak czułeś/aś?",
                "Co byś powiedział/a bohaterowi, gdybyś mógł/mogła?",
                "Jak myślisz, co pomogło bohaterowi poczuć się lepiej?",
                "Co byś zrobił/a na miejscu bohatera?",
                "Czy znasz kogoś, komu coś takiego się przydarzyło?",
                "Jak wygląda twoja twarz, gdy jesteś smutny/a? Pokaż mi!",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="text-accent font-bold shrink-0">→</span>
                  <span className="italic">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="aktywnosci" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">5. Aktywności towarzyszące lekturze</h2>
          <p className="mb-6">
            Dla przedszkolaków aktywność fizyczna i twórcza jest nieodłączną częścią przetwarzania
            emocji. Oto sprawdzone aktywności do biblioterapii:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: "Narysuj emocję bohatera", o: "Dzieci rysują minę lub scenę z bajki. Rysunek jest oknem do ich własnych przeżyć." },
              { t: "Pantomima emocji", o: "Nauczyciel mówi emocję (złość, strach, radość) — dzieci pokazują ją całym ciałem." },
              { t: "Kolorowy słoik emocji", o: "Każdemu uczuciu przypisany jest kolor. Dzieci wsypują kolorowy piasek do słoika opisując jak się czują." },
              { t: "List do bohatera", o: "Dzieci dyktują nauczycielowi krótki list do bohatera bajki — co chciałyby mu powiedzieć." },
              { t: "Dokończ historię", o: "Nauczyciel czyta bajkę do połowy — dzieci wymyślają, co będzie dalej i jak bohater sobie poradzi." },
              { t: "Lepienie z plasteliny", o: "Ulepienie bohatera lub jego emocji — angażuje dotyk i pozwala na ekspresję niewerbalną." },
            ].map(({ t, o }) => (
              <div key={t} className="border border-border rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{t}</p>
                <p className="text-xs text-muted-foreground">{o}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ksiazki" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">6. Polecane książki dla przedszkolaków</h2>
          <p className="mb-4">
            Dobra książka do biblioterapii przedszkolnej powinna mieć: bohatera bliskiego wiekowi
            dziecka, wyraźne ilustracje dominujące nad tekstem, prostą fabułę z jednym głównym
            konfliktem emocjonalnym i konstruktywnym zakończeniem.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { href: "/ksiazki/zaba", tytul: "Żaba", wiek: "4–7 lat", temat: "Żałoba i strata — mała opowieść o żałobie" },
              { href: "/ksiazki/tkaczka-chmur", tytul: "Tkaczka Chmur", wiek: "5–8 lat", temat: "Smutek, gniew, trudne emocje" },
              { href: "/ksiazki/polezja", tytul: "Polezja", wiek: "4–7 lat", temat: "Płacz i wyrażanie emocji — moc łez" },
              { href: "/ksiazki/mrowki", tytul: "Mrówki", wiek: "4–8 lat", temat: "Bezpieczeństwo rodziny w trudnym czasie" },
            ].map(({ href, tytul, wiek, temat }) => (
              <Link key={href} href={href} className="border border-border rounded-lg p-4 hover:border-accent transition-colors">
                <p className="font-semibold text-sm mb-1">{tytul}</p>
                <p className="text-xs text-accent font-medium mb-1">{wiek}</p>
                <p className="text-xs text-muted-foreground">{temat}</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            → Jak dobierać tytuły: <Link href="/artykuly/jak-wybrac-ksiazke-terapeutyczna" className="text-accent hover:underline">Kryteria doboru książki terapeutycznej</Link>
          </p>
        </section>

        <section id="faq" className="scroll-mt-8 mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">7. Często zadawane pytania</h2>
          <div className="space-y-4">
            {[
              {
                q: "Czy biblioterapię w przedszkolu może prowadzić każdy nauczyciel?",
                a: "Biblioterapię rozwojową (profilaktyczną) może prowadzić każdy nauczyciel lub wychowawca bez specjalistycznego certyfikatu. Wystarczy umiejętność doboru odpowiedniej książki i prowadzenia otwartej rozmowy o emocjach. Przy dzieciach z poważnymi trudnościami emocjonalnymi warto zaangażować psychologa lub pedagoga."
              },
              {
                q: "Co zrobić, gdy dziecko zaczyna płakać podczas biblioterapii?",
                a: "Płacz podczas biblioterapii to często dobry znak — oznacza, że dziecko identyfikuje się z bohaterem i przeżywa emocje. Nie przerywaj zajęć i nie bagatelizuj płaczu. Podejdź spokojnie, przytul (jeśli dziecko chce), powiedz: widzę, że cię to wzruszyło. To ważne uczucie. Pozwól dziecku płakać i powróć do grupy w swoim czasie."
              },
              {
                q: "Jak często prowadzić zajęcia biblioterapeutyczne w przedszkolu?",
                a: "Optymalnie 1–2 razy w tygodniu jako stały element planu. Regularność jest ważniejsza niż częstotliwość — dzieci potrzebują przewidywalności rytuału. Biblioterapię interwencyjną można prowadzić ad hoc, gdy w grupie pojawia się trudna sytuacja."
              },
              {
                q: "Jak informować rodziców o biblioterapii w przedszkolu?",
                a: "Warto poinformować rodziców na początku roku szkolnego podczas zebrania. Wyjaśnij, że zajęcia polegają na wspólnym czytaniu bajek i rozmowie o emocjach — to pomaga dzieciom lepiej rozumieć siebie i innych. Zachęć rodziców do kontynuowania rozmów w domu. Jeśli dziecko przeżyło coś trudnego w trakcie zajęć, przekaż to rodzicom indywidualnie."
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
            Biblioterapia w przedszkolu to nie dodatkowy obowiązek — to naturalne przedłużenie
            pracy wychowawczej, którą i tak prowadzisz każdego dnia. Dobra książka, ekspresyjne
            czytanie i kilka otwartych pytań mogą zdziałać więcej dla emocjonalnego rozwoju dziecka
            niż niejedna formalna lekcja. Zacznij od jednej bajki tygodniowo — i obserwuj, co się zmienia.
          </p>
        </div>

        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-muted-foreground">Źródła</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Borecka, I. (2001). <em>Biblioterapia. Teoria i praktyka</em>. Stowarzyszenie Bibliotekarzy Polskich.</li>
            <li>Konieczna, E. J. (2006). <em>Arteterapia w teorii i praktyce</em>. Oficyna Wydawnicza Impuls.</li>
            <li>Shrodes, C. (1949). <em>Bibliotherapy: A Theoretical and Clinical-Experimental Study</em>. University of California.</li>
            <li>Viorst, J. (1986). <em>Necessary Losses</em>. Simon and Schuster. [o stratach w rozwoju dziecka]</li>
            <li>Tomasik, E. (1994). <em>Czytelnictwo i biblioterapia w pedagogice specjalnej</em>. Wydawnictwo WSPS.</li>
          </ul>
        </div>

        <div className="border-t border-border pt-8 mb-10">
          <h3 className="font-serif text-2xl font-bold mb-6">Czytaj dalej</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/artykuly/biblioterapia-dla-dzieci", title: "Biblioterapia dla dzieci", desc: "Ogólny przewodnik — mechanizmy i korzyści" },
              { href: "/artykuly/bajkoterapia", title: "Bajkoterapia", desc: "Kompletny przewodnik po bajkach terapeutycznych" },
              { href: "/artykuly/biblioterapia-w-szkole-podstawowej", title: "Biblioterapia w szkole podstawowej", desc: "Zajęcia dla dzieci 7–12 lat" },
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
          <h3 className="font-serif text-2xl font-bold mb-3">Gotowe scenariusze do przedszkola</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Skorzystaj z naszych gotowych scenariuszy biblioterapeutycznych — opracowanych
            specjalnie do pracy z dziećmi w różnym wieku.
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
