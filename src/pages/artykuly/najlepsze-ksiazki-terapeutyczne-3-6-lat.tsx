import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function NajlepszeKsiazkiTerapeutyczne36LatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Najlepsze książki terapeutyczne dla dzieci 3–6 lat — zestawienie",
    description:
      "Zestawienie najlepszych książek terapeutycznych dla dzieci w wieku 3–6 lat. Tytuły wspierające emocje, żałobę, lęk, zmiany rodzinne i budowanie poczucia wartości.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/najlepsze-ksiazki-terapeutyczne-3-6-lat-miniatura.jpg",
  };

  const books = [
    {
      kategoria: "Emocje i ich nazywanie",
      kolor: "bg-yellow-500",
      tytuly: [
        { tytul: "Potwor kolorow", autor: "Anna Llenas", opis: "Absolutny klasyk — 6 emocji przedstawionych przez kolor. Interaktywna wersja z sloikami. Idealna baza do nauki slow na emocje.", ocena: 5 },
        { tytul: "Wielka ksiazka uczu — Zlosc", autor: "Tom Percival", opis: "Seria krotkich ksiazek (Zlosc, Niewidocznosc, Odwaga, Freddie i Zula). Proste zdania, duze ilustracje, jeden temat na ksiazke.", ocena: 5 },
        { tytul: "Kiedy jestem smutny", autor: "Trace Moroney", opis: "Seria Kiedy jestem... (smutny, zlostliwy, bojazdliwy) — przewidywalny format, prosty jezyk, ciepla ilustracja.", ocena: 4 },
        { tytul: "Moje uczucia", autor: "Marie-Agnes Gaudrat", opis: "Prosta ksiazka dla najmlodszych — 12 emocji z krotkim tekstem i pytaniami do rozmowy.", ocena: 4 },
      ],
    },
    {
      kategoria: "Lek i niepokoj",
      kolor: "bg-blue-500",
      tytuly: [
        { tytul: "Lama Lama czerwona pizama", autor: "Anna Dewdney", opis: "O separacyjnym leku przed snem — bezpieczenstwo, mama wroci. Kultowy tytu dla najmlodszych.", ocena: 5 },
        { tytul: "Mistrz strachu", autor: "Kes Gray", opis: "Bohater, ktory boi sie wszystkiego i odkrywa, ze strach mozna oblespoczyc odwaga.", ocena: 4 },
        { tytul: "Maly potwor", autor: "Suzanne Lang", opis: "O leku przed nowym — nowym miejscem, nowa sytuacja. Dla dzieci wchodzacych do przedszkola.", ocena: 4 },
      ],
    },
    {
      kategoria: "Zmiany rodzinne (rozwod, nowe rodzenstwo)",
      kolor: "bg-rose-500",
      tytuly: [
        { tytul: "Dwa domy", autor: "Claire Masurel", opis: "Klasyk o rozstaniu rodzicow — prosty, cieply, bez dramatyzmu. Alex ma dwa domy i w obu jest kochany.", ocena: 5 },
        { tytul: "Nie dam skarbu", autor: "Susanna Isern", opis: "O zazdrosciach i pojawieniu sie nowego rodzenstwa — realistyczna i empatyczna.", ocena: 4 },
        { tytul: "Kiedy przyszla Marysia", autor: "Eve Bunting", opis: "O rodzinie zastepczej — dla dzieci wychowywanych przez inne rodziny lub majacych kontakt z systemem pieczy.", ocena: 4 },
      ],
    },
    {
      kategoria: "Strata i zaloba",
      kolor: "bg-gray-500",
      tytuly: [
        { tytul: "Pradziadek i ja", autor: "Wilhelm Topsch", opis: "Cieply dialog miedzy dzieckiem a pradziadkiem — oswaja smierc bez dramatyzmu.", ocena: 5 },
        { tytul: "Liscie Ferdynanda", autor: "Leo Lionni", opis: "Metaforyczna opowiesc o przemijaniu przez pory roku — bezpieczny dystans przez nature.", ocena: 4 },
        { tytul: "Pies Pepper", autor: "Elissa Haden Guest", opis: "O smierci pupila — czesto pierwszy kontakt dziecka z utrata. Prosta i cieply.", ocena: 4 },
      ],
    },
    {
      kategoria: "Akceptacja siebie i odmiennosc",
      kolor: "bg-purple-500",
      tytuly: [
        { tytul: "Lew ktory nie umial ryczec", autor: "Joanna Krzyzanek", opis: "O odkrywaniu wlasnych mocnych stron mimo braku tych, ktore maja inni. Polskie wydanie.", ocena: 5 },
        { tytul: "Rybka odwrotnie", autor: "Leo Lionni", opis: "O byciu innym i odkryciu ze odmiennosc moze byc sila — klasyk Leo Lionni.", ocena: 5 },
        { tytul: "Nikt nie jest jak ja", autor: "Lauren Child", opis: "Seria Charlotta i Lola — o tym, ze kazde dziecko jest wyjatkowe na swoj sposob.", ocena: 4 },
      ],
    },
    {
      kategoria: "Przyjazn i relacje",
      kolor: "bg-green-500",
      tytuly: [
        { tytul: "Zaba i Ropucha sa przyjaciolmi", autor: "Arnold Lobel", opis: "Klasyczna seria o przyjazni, wzajemnej akceptacji i rozwiazywaniu konfliktow. Ponadczasowa.", ocena: 5 },
        { tytul: "Chce przyjaciela", autor: "Richa Jain", opis: "Dla dzieci, ktore maja trudnosci z zawieraniem przyjazni — szuka sposobow na kontakt.", ocena: 4 },
        { tytul: "Krolik ktory chcial zasnac", autor: "Carl-Johan Forssen Ehrlin", opis: "Technika relaksacyjna przed snem opakowana w historyjke — dla niespokojnych dzieci.", ocena: 4 },
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title="Najlepsze książki terapeutyczne dla dzieci 3–6 lat — zestawienie"
        description="Zestawienie najlepszych książek terapeutycznych dla dzieci w wieku 3–6 lat. Tytuły wspierające emocje, żałobę, lęk, zmiany rodzinne i budowanie poczucia wartości."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link href="/artykuly" className="hover:text-accent">Artykuły</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 dark:text-gray-300">Najlepsze książki terapeutyczne 3–6 lat</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Przewodnik
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Najlepsze książki terapeutyczne dla dzieci 3–6 lat
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Wiek 3–6 lat to czas, gdy dzieci uczą się nazywać emocje i budują pierwsze relacje.
            Te książki są sprawdzonymi narzędziami terapeutycznymi — dobranymi według kryteriów biblioterapii.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>8 min czytania</span>
          </div>
        </header>

        {/* Intro */}
        <section className="mb-10">
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-xl">
            <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Jak korzystać z tego zestawienia?</h3>
            <p className="text-green-700 dark:text-green-400 text-sm">
              Każda pozycja jest opisana pod kątem wartości terapeutycznej, nie estetycznej.
              Ocena gwiazdkowa (1–5) odzwierciedla skuteczność jako narzędzia biblioterapeutycznego
              dla danej grupy wiekowej i problemu — nie ocenę literacką.
              Zawsze przeczytaj książkę przed sesją z dzieckiem.
            </p>
          </div>
        </section>

        {/* Zestawienie */}
        <section className="mb-12">
          <div className="space-y-10">
            {books.map((kategoria) => (
              <div key={kategoria.kategoria}>
                <div className={`${kategoria.kolor} text-white font-bold px-4 py-2 rounded-lg inline-block mb-4`}>
                  {kategoria.kategoria}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {kategoria.tytuly.map((ksiazka) => (
                    <div key={ksiazka.tytul} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{ksiazka.tytul}</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{ksiazka.autor}</p>
                        </div>
                        <div className="shrink-0 text-yellow-400 text-sm">
                          {"★".repeat(ksiazka.ocena)}{"☆".repeat(5 - ksiazka.ocena)}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{ksiazka.opis}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wskazowki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak czytać terapeutycznie dziecku 3–6 lat?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { zasada: "Czytaj razem, nie dla", opis: "Siedź obok, pokazuj ilustracje, pytaj o to, co dziecko widzi — to wspólne doświadczenie." },
              { zasada: "Pauzuj przy emocjach", opis: "Zatrzymaj się przy momenmtach, gdy bohater przeżywa coś intensywnego. Pytaj: Co czujesz patrząc na to?" },
              { zasada: "Nie wymuszaj morału", opis: "Nie tłumacz, co dziecko powinno z tego wyciągnąć. Pozwól, by samo doszło do wniosków." },
              { zasada: "Wracaj do tych samych tytułów", opis: "Dzieci 3–6 lat uwielbiają te same książki wielokrotnie. Każde czytanie może uruchomić inną rozmowę." },
            ].map((item) => (
              <div key={item.zasada} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.zasada}</div>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Powiązane zestawienia */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Inne zestawienia książek
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/artykuly/najlepsze-ksiazki-terapeutyczne-7-12-lat" className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow">
              <div className="font-bold text-blue-700 dark:text-blue-400 mb-1">Dzieci 7–12 lat</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Najlepsze książki terapeutyczne dla dzieci w wieku szkolnym</p>
            </Link>
            <Link href="/artykuly/najlepsze-ksiazki-terapeutyczne-dla-mlodziezy" className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-100 dark:border-purple-800 hover:shadow-md transition-shadow">
              <div className="font-bold text-purple-700 dark:text-purple-400 mb-1">Młodzież 13+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Najlepsze książki terapeutyczne dla nastolatków</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Potrzebujesz indywidualnej rekomendacji?</h2>
          <p className="text-green-100 mb-6">
            Skontaktuj się z nami — dobierzemy książkę do konkretnej sytuacji Twojego dziecka.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
          >
            Zapytaj o rekomendację
          </Link>
        </section>
      </article>
    </Layout>
  );
}
