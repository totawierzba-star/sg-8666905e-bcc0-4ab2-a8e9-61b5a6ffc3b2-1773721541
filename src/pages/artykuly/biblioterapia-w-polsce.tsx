import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArrowLeft, BookOpen, Globe, Users, TrendingUp, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function BiblioterapiaWPolscePage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Biblioterapia w Polsce — stan obecny i perspektywy rozwoju",
    "description": "Jak wygląda biblioterapia w Polsce? Historia, aktualne instytucje, szkolenia, wydawnictwa i perspektywy rozwoju tej metody w polskim kontekście edukacyjnym i terapeutycznym.",
    "author": { "@type": "Organization", "name": "Biblioterapia.org" },
    "publisher": { "@type": "Organization", "name": "Biblioterapia.org", "url": "https://biblioterapia.org" },
    "url": "https://biblioterapia.org/artykuly/biblioterapia-w-polsce",
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "inLanguage": "pl",
    "mainEntityOfPage": "https://biblioterapia.org/artykuly/biblioterapia-w-polsce"
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia w Polsce — stan obecny i perspektywy rozwoju"
        description="Jak wygląda biblioterapia w Polsce? Kto ją prowadzi, gdzie szukać szkoleń, jakie wydawnictwa tworzą książki terapeutyczne i jakie są perspektywy rozwoju tej metody."
        url="https://biblioterapia.org/artykuly/biblioterapia-w-polsce"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      <article className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <nav aria-label="Breadcrumb" className="mb-8">
            <Link href="/artykuly" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do artykułów
            </Link>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Polska perspektywa
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Biblioterapia w Polsce — stan obecny i perspektywy rozwoju
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Polska ma bogatą tradycję biblioterapeutyczną — ale jej potencjał jest wciąż
              niedostatecznie wykorzystany. Sprawdzamy, co się zmieniło, kto dziś prowadzi
              biblioterapię i dokąd zmierza ta dziedzina.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span>📚 Czas czytania: ~9 minut</span>
              <span>🎯 Poziom: Dla profesjonalistów i zainteresowanych</span>
              <span>🗓️ Zaktualizowano: marzec 2026</span>
            </div>
          </header>

          <nav className="bg-muted/30 border rounded-xl p-6 mb-12" aria-label="Spis treści">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Spis treści
            </h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#historia" className="text-primary hover:underline">1. Historia biblioterapii w Polsce</a></li>
              <li><a href="#kto-prowadzi" className="text-primary hover:underline">2. Kto dziś prowadzi biblioterapię?</a></li>
              <li><a href="#instytucje" className="text-primary hover:underline">3. Instytucje i organizacje</a></li>
              <li><a href="#szkolenia" className="text-primary hover:underline">4. Szkolenia i kształcenie</a></li>
              <li><a href="#wydawnictwa" className="text-primary hover:underline">5. Polskie wydawnictwa i książki terapeutyczne</a></li>
              <li><a href="#wyzwania" className="text-primary hover:underline">6. Wyzwania i bariery</a></li>
              <li><a href="#perspektywy" className="text-primary hover:underline">7. Perspektywy i kierunki rozwoju</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none space-y-12">

            {/* 1 */}
            <section id="historia" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                Historia biblioterapii w Polsce
              </h2>

              <div className="space-y-4 my-6">
                {[
                  { rok: "lata 60.–70.", opis: "Pierwsze polskie prace teoretyczne o terapeutycznej funkcji lektury — głównie w środowisku bibliotekarskim i pedagogicznym. Biblioteki szpitalne jako pionierzy." },
                  { rok: "1983", opis: "Powstanie Sekcji Biblioterapii przy Stowarzyszeniu Bibliotekarzy Polskich — pierwsza formalna organizacja środowiskowa." },
                  { rok: "lata 90.", opis: "Biblioterapia wchodzi do programów kształcenia bibliotekarzy i pedagogów. Pierwsze studia podyplomowe z biblioterapii na uczelniach wrocławskich i warszawskich." },
                  { rok: "2000–2010", opis: "Rozkwit publicystyki naukowej. Irena Borecka (Wrocław) publikuje fundamentalne prace metodyczne. Biblioterapia w szkołach jako element profilaktyki." },
                  { rok: "2010–2020", opis: "Wzrost zainteresowania biblioterapią w psychologii i pedagogice terapeutycznej. Pierwsze polskie badania empiryczne skuteczności." },
                  { rok: "od 2020", opis: "Pandemia COVID-19 przyspiesza cyfryzację i zainteresowanie zdrowiem psychicznym. Gwałtowny wzrost popytu na biblioterapię w szkołach i poradniach psychologicznych." },
                ].map((item) => (
                  <div key={item.rok} className="flex gap-4 p-5 bg-muted/30 rounded-xl border">
                    <div className="shrink-0 bg-primary text-primary-foreground rounded-lg px-3 py-1 font-bold text-sm h-fit whitespace-nowrap">{item.rok}</div>
                    <p className="text-sm leading-relaxed">{item.opis}</p>
                  </div>
                ))}
              </div>

              <p>
                Kluczowe postaci polskiej biblioterapii to <strong>Irena Borecka</strong>
                (Dolnośląska Szkoła Wyższa we Wrocławiu — teoria i metodyka) oraz
                <strong> Wanda Szulc</strong> (kulturoterapia i arteterapia). Ich prace stanowią
                do dziś podstawę akademicką w Polsce.
              </p>
            </section>

            {/* 2 */}
            <section id="kto-prowadzi" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Kto dziś prowadzi biblioterapię w Polsce?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  { kto: "Bibliotekarze z kwalifikacjami", gdzie: "Biblioteki publiczne i szkolne", opis: "Najliczniejsza grupa. Wiele bibliotek publicznych ma bibliotekarzy po kursach biblioterapii. Prowadzą zajęcia dla dzieci, seniorów i osób z niepełnosprawnościami." },
                  { kto: "Pedagodzy i wychowawcy", gdzie: "Szkoły, świetlice, internaty", opis: "Biblioterapia jako element godzin wychowawczych, zajęć profilaktycznych i programów wsparcia emocjonalnego uczniów." },
                  { kto: "Psycholodzy i psychoterapeuci", gdzie: "Poradnie, gabinety prywatne", opis: "Stosują biblioterapię jako uzupełnienie terapii poznawczo-behawioralnej i narracyjnej. Rosnąca grupa specjalistów." },
                  { kto: "Terapeuci zajęciowi", gdzie: "Domy pomocy społecznej, szpitale", opis: "Biblioterapia jako element rehabilitacji społecznej i terapii zajęciowej, szczególnie z seniorami i osobami z niepełnosprawnościami." },
                ].map((item) => (
                  <div key={item.kto} className="border rounded-xl p-5">
                    <h3 className="font-semibold mb-1">{item.kto}</h3>
                    <p className="text-xs text-primary mb-2">{item.gdzie}</p>
                    <p className="text-sm text-muted-foreground">{item.opis}</p>
                  </div>
                ))}
              </div>

              <p>
                Więcej o kompetencjach i roli bibliotekarzy jako biblioterapeutów czytasz w artykule{" "}
                <Link href="/artykuly/bibliotekarze-jako-biblioterapeuci" className="text-primary hover:underline font-medium">
                  Bibliotekarze jako biblioterapeuci — rola i kompetencje
                </Link>.
              </p>
            </section>

            {/* 3 */}
            <section id="instytucje" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                Instytucje i organizacje
              </h2>

              <ul className="space-y-4 my-4">
                {[
                  { nazwa: "Stowarzyszenie Bibliotekarzy Polskich — Sekcja Biblioterapii", opis: "Najstarsza organizacja środowiskowa. Organizuje konferencje, warsztaty i wymianę doświadczeń między biblioterapeutami." },
                  { nazwa: "Dolnośląska Szkoła Wyższa (Wrocław)", opis: "Centrum akademickie polskiej biblioterapii. Oferuje studia podyplomowe z biblioterapii i arteterapii. Baza wydawnicza." },
                  { nazwa: "Polskie Towarzystwo Biblioterapeutyczne", opis: "Organizacja skupiająca praktykujących biblioterapeutów. Certyfikacja kompetencji, wymiana metodyczna." },
                  { nazwa: "Biblioteki Narodowa i Publiczne", opis: "BN koordynuje projekty ogólnopolskie. Wiele bibliotek publicznych prowadzi własne programy biblioterapeutyczne dla różnych grup." },
                ].map((item) => (
                  <li key={item.nazwa} className="flex gap-3 p-4 border rounded-xl list-none">
                    <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
                    <div>
                      <p className="font-semibold">{item.nazwa}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.opis}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4 */}
            <section id="szkolenia" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                Szkolenia i kształcenie biblioterapeutów w Polsce
              </h2>

              <p>
                W Polsce nie istnieje jednolity, prawnie uregulowany zawód bibliotekarza.
                Kształcenie odbywa się na kilku poziomach:
              </p>

              <div className="space-y-4 my-6">
                {[
                  { poziom: "Studia podyplomowe", info: "Dolnośląska Szkoła Wyższa, Akademia Pedagogiki Specjalnej, wybrane PWSZ. Program obejmuje 200–350 godzin dydaktycznych, teorię i praktykę." },
                  { poziom: "Kursy kwalifikacyjne", info: "Organizowane przez SBP, ośrodki doskonalenia nauczycieli i prywatne organizacje. Czas trwania: 60–150 godzin." },
                  { poziom: "Warsztaty i szkolenia", info: "Jednorazowe lub cykliczne szkolenia metodyczne. Dla bibliotekarzy, pedagogów i rodziców. Często bezpłatne (dofinansowane ze środków unijnych lub MKiDN)." },
                  { poziom: "Kursy online", info: "Rosnąca oferta kształcenia zdalnego, szczególnie po 2020 roku. Dostępne dla osób z całej Polski bez konieczności dojazdów." },
                ].map((item) => (
                  <div key={item.poziom} className="flex gap-4 p-4 border rounded-xl">
                    <div className="bg-accent text-accent-foreground rounded-lg px-3 py-1 font-bold text-sm h-fit shrink-0 whitespace-nowrap">{item.poziom}</div>
                    <p className="text-sm leading-relaxed">{item.info}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Brak regulacji zawodu:</strong> W Polsce nie ma ustawowego wymogu
                  posiadania certyfikatu biblioterapeuty. Każda instytucja samodzielnie
                  decyduje o wymaganiach. To zarówno zaleta (elastyczność), jak i ryzyko
                  (brak kontroli jakości).
                </p>
              </div>
            </section>

            {/* 5 */}
            <section id="wydawnictwa" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                Polskie wydawnictwa i książki terapeutyczne dla dzieci
              </h2>

              <p>
                W ostatnich latach znacząco wzrosła liczba polskich wydawnictw specjalizujących
                się w literaturze terapeutycznej dla dzieci. To odpowiedź na rosnące
                zapotrzebowanie ze strony rodziców, nauczycieli i terapeutów.
              </p>

              <p>
                <strong>Wydawnictwo Albus</strong> (Poznań) — twórca serii <em>Książki do zadań
                specjalnych</em>, którą prezentujemy na tej stronie — to jeden z polskich pionierów
                świadomego tworzenia literatury biblioterapeutycznej dla dzieci. Każda książka
                z serii powstaje we współpracy z psychologami i pedagogami i jest wyposażona
                w materiały metodyczne.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  { tematyka: "Żałoba i strata", ksiazka: "Żaba. Mała opowieść o żałobie", href: "/ksiazki/zaba" },
                  { tematyka: "Rozwód rodziców", ksiazka: "Czasami szczęśliwi rodzice mieszkają oddzielnie", href: "/ksiazki/czasami-szczesliwi-rodzice" },
                  { tematyka: "Depresja dziecięca", ksiazka: "Kałużysko", href: "/ksiazki/kaluzysko" },
                  { tematyka: "Autyzm i komunikacja", ksiazka: "Guzikożerca na tropie słów", href: "/ksiazki/guzikozerca" },
                  { tematyka: "ADHD i nadpobudliwość", ksiazka: "Skok", href: "/ksiazki/skok" },
                  { tematyka: "Niepełnosprawność", ksiazka: "Nie znajdziesz mnie po śladach stóp", href: "/ksiazki/nie-znajdziesz-mnie" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex gap-3 p-4 border rounded-xl hover:border-primary transition-colors group">
                    <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{item.tematyka}</p>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">{item.ksiazka}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* 6 */}
            <section id="wyzwania" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                Wyzwania i bariery w Polsce
              </h2>

              <div className="space-y-3 my-4">
                {[
                  { wyzwanie: "Brak regulacji prawnych zawodu", opis: "Nie ma ustawowej definicji bibliotekarza ani certyfikacji. To utrudnia standaryzację jakości i uznanie zawodu przez instytucje publiczne." },
                  { wyzwanie: "Niedostateczne finansowanie", opis: "Biblioteki publiczne są słabo finansowane. Zatrudnienie bibliotekarza z kompetencjami terapeutycznymi często przekracza możliwości budżetu." },
                  { wyzwanie: "Stereotypy i niskie zaufanie społeczne", opis: "Część rodziców i instytucji nie traktuje biblioterapii poważnie — postrzega ją jako \"zwykłe czytanie\", nie metodę terapeutyczną." },
                  { wyzwanie: "Słaba współpraca międzysektorowa", opis: "Bibliotekarze, psycholodzy i pedagodzy rzadko współpracują systemowo. Biblioterapia działa w silosach instytucjonalnych." },
                  { wyzwanie: "Brak polskich badań empirycznych", opis: "Polska literatura biblioterapeutyczna jest silna metodycznie, ale słaba empirycznie. Brakuje rodzimych randomizowanych badań skuteczności." },
                ].map((item) => (
                  <div key={item.wyzwanie} className="flex gap-3 p-4 bg-muted/30 rounded-xl border">
                    <span className="text-amber-500 font-bold shrink-0">⚠</span>
                    <div>
                      <p className="font-semibold text-sm">{item.wyzwanie}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.opis}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7 */}
            <section id="perspektywy" className="scroll-mt-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                Perspektywy i kierunki rozwoju
              </h2>

              <p>
                Pomimo wyzwań, biblioterapia w Polsce ma bardzo dobre perspektywy. Kluczowe trendy:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  { trend: "Zdrowie psychiczne dzieci w centrum uwagi", opis: "Po pandemii gwałtownie wzrosło zapotrzebowanie na wsparcie emocjonalne w szkołach. Biblioterapia jest odpowiedzią dostępną i niedrogą." },
                  { trend: "Digitalizacja i zasięg", opis: "E-booki, audiobooki i platformy edukacyjne online otwierają biblioterapię na obszary wiejskie i małe miejscowości bez bibliotek." },
                  { trend: "Włączenie do podstawy programowej", opis: "Rosnące naciski środowiskowe na włączenie elementów biblioterapeutycznych do edukacji zdrowotnej w szkołach." },
                  { trend: "Profesjonalizacja zawodu", opis: "Dyskusje o standardach kształcenia i certyfikacji biblioterapeutów. Wzorce z Wielkiej Brytanii (BAPT) i USA jako inspiracja." },
                  { trend: "Współpraca z NFZ i psychiatrią", opis: "Pilotażowe programy „biblioterapii na receptę\" wzorowane na brytyjskim Reading Well — pierwsze próby w Polsce." },
                  { trend: "Polskie badania naukowe", opis: "Rosnąca liczba prac doktorskich i grantów badawczych dotyczących skuteczności biblioterapii w polskim kontekście." },
                ].map((item) => (
                  <div key={item.trend} className="border rounded-xl p-5">
                    <h3 className="font-semibold mb-2 text-sm text-primary">{item.trend}</h3>
                    <p className="text-sm text-muted-foreground">{item.opis}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Źródła */}
            <section className="mt-12 p-6 bg-muted/30 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Źródła</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.sbp.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Stowarzyszenie Bibliotekarzy Polskich <ExternalLink className="h-3 w-3" /></a></li>
                <li><a href="https://reading-well.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Reading Well — wzorzec brytyjski <ExternalLink className="h-3 w-3" /></a></li>
                <li className="text-muted-foreground">Borecka I., <em>Biblioterapia. Teoria i praktyka</em>, Warszawa 2004</li>
                <li className="text-muted-foreground">Szulc W., <em>Kulturoterapia</em>, Poznań 1994</li>
              </ul>
            </section>

            {/* Internal links */}
            <section className="mt-8 p-6 bg-muted/20 rounded-xl border">
              <h2 className="font-semibold text-lg mb-4">Czytaj dalej</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/artykuly/historia-biblioterapii", label: "Historia biblioterapii" },
                  { href: "/artykuly/bibliotekarze-jako-biblioterapeuci", label: "Bibliotekarze jako biblioterapeuci" },
                  { href: "/artykuly/co-to-jest-biblioterapia", label: "Co to jest biblioterapia?" },
                  { href: "/ksiazki", label: "Polskie książki terapeutyczne" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                    <BookOpen className="h-4 w-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl border-2 border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Polska biblioterapia w praktyce</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Biblioterapia.org to polskie źródło wiedzy, książek i gotowych scenariuszy
                  zajęć dla rodziców, nauczycieli i terapeutów.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/biblioterapia" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg">
                    O biblioterapii
                  </Link>
                  <Link href="/ksiazki" className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg">
                    Nasze książki →
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>
    </Layout>
  );
}
