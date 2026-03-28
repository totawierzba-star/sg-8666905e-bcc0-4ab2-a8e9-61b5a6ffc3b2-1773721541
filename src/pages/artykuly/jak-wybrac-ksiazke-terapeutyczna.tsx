import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function JakWybracKsiazkeTerapeutycznaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jak wybrać książkę terapeutyczną? Kryteria doboru w biblioterapii",
    description:
      "Praktyczny przewodnik po kryteriach wyboru książek terapeutycznych dla dzieci, młodzieży i dorosłych. Czym kierować się przy doborze lektury w biblioterapii?",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/jak-wybrac-ksiazke-terapeutyczna-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy każda dobra literatura może być terapeutyczna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie każda. Dobra literatura może być estetycznie wartościowa, ale nieskuteczna terapeutycznie. Kluczowe jest dopasowanie treści do aktualnych potrzeb i etapu rozwojowego czytelnika.",
        },
      },
      {
        "@type": "Question",
        name: "Jak dobrać książkę dla dziecka, które nie mówi, co go boli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zacznij od obserwacji: co ogląda, o czym mówi, jakie tematy go przyciągają. Wybierz kilka tytułów i pozwól mu samo sięgnąć po to, co rezonuje — nawet jeśli na pozór nie wiąże się z problemem.",
        },
      },
      {
        "@type": "Question",
        name: "Czy ilustracje mają znaczenie terapeutyczne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, szczególnie dla młodszych dzieci. Ilustracje mogą pokazywać emocje bardziej bezpośrednio niż tekst, pomagają w identyfikacji z bohaterem i tworzą bezpieczną przestrzeń do rozmowy.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Jak wybrać książkę terapeutyczną? Kryteria doboru w biblioterapii"
        description="Praktyczny przewodnik po kryteriach wyboru książek terapeutycznych dla dzieci, młodzieży i dorosłych. Czym kierować się przy doborze lektury w biblioterapii?"
        canonical="/artykuly/jak-wybrac-ksiazke-terapeutyczna"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link href="/artykuly" className="hover:text-accent">Artykuły</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 dark:text-gray-300">Jak wybrać książkę terapeutyczną?</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Przewodnik
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Jak wybrać książkę terapeutyczną? Kryteria doboru w biblioterapii
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Nie każda książka o trudnych emocjach działa terapeutycznie. Oto jak dobierać literaturę,
            która naprawdę pomaga — krok po kroku, dla różnych grup wiekowych.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>10 min czytania</span>
          </div>
        </header>

        {/* Intro */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-10">
          <p>
            Biblioterapia to nie bibliotekarstwo — nie chodzi o to, żeby dać dziecku dobrą książkę,
            tylko o to, żeby dać mu właściwą książkę w odpowiednim momencie. Ta różnica jest fundamentalna.
            Źle dobrana lektura może nie tylko nie pomóc, ale nawet pogłębić trudności lub wywołać
            nieoczekiwane reakcje emocjonalne.
          </p>
          <p>
            W tym artykule przedstawiamy kryteria, którymi posługują się doświadczeni biblioterap
            przy wyborze tekstów — oraz praktyczne wskazówki dla rodziców i nauczycieli,
            którzy chcą samodzielnie dobierać lektury wspierające.
          </p>
        </section>

        {/* Złota zasada */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Złota zasada doboru biblioterapeutycznego</h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                { litera: "P", slowo: "PROBLEM", opis: "Treść odpowiada aktualnemu wyzwaniu czytelnika" },
                { litera: "B", slowo: "BOHATER", opis: "Postać, z którą można się utożsamić" },
                { litera: "R", slowo: "ROZWIĄZANIE", opis: "Konstruktywna ścieżka wyjścia lub poradzenia sobie" },
              ].map((item) => (
                <div key={item.litera} className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-black mb-1">{item.litera}</div>
                  <div className="font-bold text-sm mb-2">{item.slowo}</div>
                  <div className="text-xs opacity-90">{item.opis}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 kryteriów */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            7 kryteriów dobrego doboru terapeutycznego
          </h2>
          <div className="space-y-4">
            {[
              {
                nr: "01",
                tytul: "Trafność tematyczna",
                opis: "Książka powinna dotykać tematu bliskiego aktualnemu doświadczeniu czytelnika — nie idealnie pasować, ale rezonować. Zbyt dosłowne dopasowanie może być odczytane jako atak lub ingerencja w prywatność.",
                przyklad: "Dziecko po rozwodzie rodziców: nie szukaj książki dosłownie o rozwodzie — wystarczy historia o zmianie, adaptacji i nowym początku.",
              },
              {
                nr: "02",
                tytul: "Identyfikowalny bohater",
                opis: "Czytelnik musi mieć z kim się utożsamić. Wiek, płeć i sytuacja bohatera powinny być na tyle podobne, by wywołać identyfikację, ale na tyle różne, by dać bezpieczny dystans.",
                przyklad: "Dla 8-letniego chłopca z lękiem szkolnym — bohater w tym samym wieku, który boi się czegoś nowego.",
              },
              {
                nr: "03",
                tytul: "Autentyczność emocjonalna",
                opis: "Unikaj książek, gdzie emocje są nadmiernie upraszczane lub szybko rozwiązane. Doświadczenie czytelnika powinno być odzwierciedlone uczciwie — bez moralizowania i happy endów na siłę.",
                przyklad: "Unikaj: bohater jest smutny, mama mówi mu, żeby się uśmiechnął i od razu jest ok. To zaprzeczenie, nie wsparcie.",
              },
              {
                nr: "04",
                tytul: "Konstruktywna perspektywa",
                opis: "Nie oznacza to, że wszystko musi się dobrze skończyć. Ale książka powinna pokazywać, że przez trudność można przejść — że istnieje ruch naprzód, nie tylko zamknięcie w bólu.",
                przyklad: "Nawet w historii o żałobie powinien pojawić się element akceptacji lub sensu — nie zaprzeczenie straty.",
              },
              {
                nr: "05",
                tytul: "Dostosowanie do wieku i poziomu",
                opis: "Zbyt trudna język lub zbyt infantylna treść zablokuje identyfikację. Sprawdź, czy ilustracje (jeśli są) wzmacniają przekaz emocjonalny, a nie go upraszczają.",
                przyklad: "Dla 10-latka z dysleksją: szukaj książek z krótkimi rozdziałami, dialogami, mniejszą czcionką i dużą interlinią.",
              },
              {
                nr: "06",
                tytul: "Brak stygmatyzacji",
                opis: "Sprawdź, czy sposób przedstawienia trudności (choroba, niepełnosprawność, ubóstwo) nie utrwala stereotypów lub nie zawiera ukrytego moralizowania.",
                przyklad: "Unikaj książek, gdzie dziecko z ADHD jest po prostu niegrzeczne lub gdzie problemy są karą za złe zachowanie.",
              },
              {
                nr: "07",
                tytul: "Potencjał rozmowy",
                opis: "Dobra książka terapeutyczna powinna zostawiać otwarte pytania — przestrzeń do rozmowy, a nie gotowe odpowiedzi. Pytaj siebie: co możemy o tej książce porozmawiać?",
                przyklad: "Pytania po lekturze: Co czuł bohater? Co byś zrobił inaczej? Czy zdarzyło ci się coś podobnego?",
              },
            ].map((item) => (
              <div key={item.nr} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="flex items-start gap-4 p-5">
                  <div className="text-3xl font-black text-amber-400 shrink-0 w-12">{item.nr}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.tytul}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.opis}</p>
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2 text-xs text-amber-800 dark:text-amber-300">
                      <strong>Przykład:</strong> {item.przyklad}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Według wieku */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dobór według wieku — tabela wskazówek
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-500 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Wiek</th>
                  <th className="text-left p-3">Format</th>
                  <th className="text-left p-3">Długość</th>
                  <th className="text-left p-3 rounded-tr-lg">Na co zwrócić uwagę</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { wiek: "3–5 lat", format: "Obrazkowa, repetytorium", dlugosc: "12–32 strony", uwaga: "Duże ilustracje, prosty tekst, emocje pokazane w mimice bohaterów" },
                  { wiek: "6–8 lat", format: "Ilustrowana z rozdziałami", dlugosc: "50–100 str.", uwaga: "Bohater w podobnym wieku, szkoła, przyjaźń, rodzina" },
                  { wiek: "9–11 lat", format: "Proza, komiks", dlugosc: "100–200 str.", uwaga: "Realistyczna fabuła, bohater z prawdziwymi wadami, brak moralizowania" },
                  { wiek: "12–15 lat", format: "YA, pamiętnik, non-fiction", dlugosc: "200–350 str.", uwaga: "Autentyczność, trudne tematy, brak szczęśliwych zakończeń na siłę" },
                  { wiek: "16+ lat", format: "YA, literatura piękna, eseje", dlugosc: "Dowolna", uwaga: "Złożoność psychologiczna, wieloznaczność, przestrzeń do interpretacji" },
                  { wiek: "Dorośli", format: "Proza, poezja, non-fiction", dlugosc: "Dowolna", uwaga: "Dopasowanie do specyfiki problemu, unikanie dydaktyzmu" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/50" : "bg-white dark:bg-gray-800"}>
                    <td className="p-3 font-semibold text-gray-900 dark:text-white">{row.wiek}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{row.format}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{row.dlugosc}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{row.uwaga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Błędy w doborze */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Najczęstsze błędy w doborze książek terapeutycznych
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                blad: "Zbyt dosłowny dobór",
                opis: "Dziecko po śmierci dziadka dostaje książkę dosłownie o śmierci dziadka. To może być zbyt intensywne — lepiej zacząć od historii o stracie zwierzęcia.",
              },
              {
                blad: "Wybór dla rodzica, nie dla dziecka",
                opis: "Rodzic wybiera książkę, która jego samego wzrusza lub edukuje. Pytanie powinno brzmieć: co dotrze do tego konkretnego dziecka?",
              },
              {
                blad: "Zbyt szybkie rozwiązanie",
                opis: "Unikaj książek, gdzie problem zostaje rozwiązany w 3 stronach. To deprecjonuje realne doświadczenie dziecka.",
              },
              {
                blad: "Ignorowanie ilustracji",
                opis: "Dla młodszych dzieci ilustracje niosą 60-70% przekazu emocjonalnego. Zdjęcia smutnych twarzy działają inaczej niż rysunki.",
              },
              {
                blad: "Brak rozmowy po lekturze",
                opis: "Sama lektura bez omówienia ma ograniczoną wartość terapeutyczną. Kluczowy jest etap refleksji i nadawania znaczeń.",
              },
              {
                blad: "Narzucanie interpretacji",
                opis: "To co TY widzisz w książce nie musi rezonować z doświadczeniem dziecka. Daj mu przestrzeń na własne odczytanie.",
              },
            ].map((item) => (
              <div key={item.blad} className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-100 dark:border-red-800">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <div>
                    <h3 className="font-bold text-red-800 dark:text-red-300 mb-1">{item.blad}</h3>
                    <p className="text-red-700 dark:text-red-400 text-sm">{item.opis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gdzie szukać */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Gdzie szukać dobrych książek terapeutycznych?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                ikona: "📚",
                zrodlo: "Biblioterapeuci i psycholodzy",
                opis: "Specjaliści prowadzą listy rekomendowanych tytułów według problemów i grup wiekowych",
              },
              {
                ikona: "🏫",
                zrodlo: "Pedagodzy szkolni",
                opis: "W każdej szkole pedagog może polecić sprawdzone tytuły używane w pracy z dziećmi",
              },
              {
                ikona: "🔬",
                zrodlo: "Bazy naukowe",
                opis: "PBW (pedagogiczne bazy wiedzy) i biblioteki pedagogiczne oferują zestawienia tematyczne",
              },
              {
                ikona: "🌐",
                zrodlo: "Portale rodzicielskie",
                opis: "Sprawdzone recenzje rodziców i specjalistów — ale weryfikuj pod kątem kryteriów terapeutycznych",
              },
              {
                ikona: "🏢",
                zrodlo: "Wydawnictwa specjalistyczne",
                opis: "Nasza Księgarnia, Mamania, Czarna Owca — mają dedykowane serie wspierające rozwój emocjonalny",
              },
              {
                ikona: "👩‍⚕️",
                zrodlo: "Gabinet terapeutyczny",
                opis: "Wielu terapeutów dziecięcych rekomenduje konkretne tytuły jako wsparcie między sesjami",
              },
            ].map((item) => (
              <div key={item.zrodlo} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-3xl mb-3">{item.ikona}</div>
                <div className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{item.zrodlo}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Checklista */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Checklista przed wybraniem książki terapeutycznej
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Temat odpowiada aktualnemu wyzwaniu dziecka",
                "Bohater jest w podobnym wieku i sytuacji",
                "Emocje bohatera brzmią autentycznie",
                "Brak moralizowania i gotowych odpowiedzi",
                "Pokazane jest przejście przez trudność, nie ucieczka",
                "Język i długość dostosowane do wieku",
                "Ilustracje (jeśli są) wzmacniają emocje, nie trywializują",
                "Brak stygmatyzacji i krzywdzących stereotypów",
                "Widzę co najmniej 3 pytania, które możemy po lekturze omówić",
                "Przeczytałem/am tę książkę i wiem, co się w niej dzieje",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border-2 border-green-500 shrink-0 flex items-center justify-center">
                    <span className="text-green-500 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Najczęstsze pytania
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Czy każda dobra literatura może być terapeutyczna?",
                a: "Nie każda. Dobra literatura może być estetycznie wartościowa, ale nieskuteczna terapeutycznie. Kluczowe jest dopasowanie treści do aktualnych potrzeb i etapu rozwojowego czytelnika.",
              },
              {
                q: "Jak dobrać książkę dla dziecka, które nie mówi, co go boli?",
                a: "Zacznij od obserwacji: co ogląda, o czym mówi, jakie tematy go przyciągają. Wybierz kilka tytułów i pozwól mu samo sięgnąć po to, co rezonuje — nawet jeśli na pozór nie wiąże się z problemem.",
              },
              {
                q: "Czy ilustracje mają znaczenie terapeutyczne?",
                a: "Tak, szczególnie dla młodszych dzieci. Ilustracje mogą pokazywać emocje bardziej bezpośrednio niż tekst, pomagają w identyfikacji z bohaterem i tworzą bezpieczną przestrzeń do rozmowy.",
              },
            ].map((item, i) => (
              <details key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  {item.q}
                </summary>
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Potrzebujesz pomocy w wyborze książki?</h2>
          <p className="text-amber-100 mb-6">
            Nasi biblioterapeuci pomogą dobrać odpowiedni tytuł do Twojej sytuacji.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-amber-700 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors"
          >
            Skontaktuj się z nami
          </Link>
        </section>
      </article>
    </Layout>
  );
}
