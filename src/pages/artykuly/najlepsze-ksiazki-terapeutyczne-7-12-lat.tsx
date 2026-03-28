import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function NajlepszeKsiazkiTerapeutyczne712LatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Najlepsze książki terapeutyczne dla dzieci 7–12 lat — zestawienie",
    description:
      "Zestawienie najlepszych książek terapeutycznych dla dzieci w wieku szkolnym 7–12 lat. Tytuły na emocje, relacje rówieśnicze, żałobę, lęk szkolny i zmiany rodzinne.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/najlepsze-ksiazki-terapeutyczne-7-12-lat-miniatura.jpg",
  };

  const books = [
    {
      kategoria: "Poczucie własnej wartości i odmienność",
      kolor: "bg-violet-500",
      tytuly: [
        { tytul: "Cudowny chlopak", autor: "R.J. Palacio", opis: "Jeden z najwazniejszych tytulow biblioterapeutycznych dla dzieci szkolnych. August wchodzi do nowej szkoly z twarzą, ktora sprawia, ze wszyscy patrza. O sile, akceptacji i empatii.", ocena: 5 },
        { tytul: "Matylda", autor: "Roald Dahl", opis: "Dziecko genialne w rodzinie ktora go nie widzi. O sile, ktora jest w nas niezaleznie od tego, co mowia inni. Klasyk, ktory dziala terapeutycznie od dekad.", ocena: 5 },
        { tytul: "Tom Gates — Wszystko Mega", autor: "Liz Pichon", opis: "Bohater z chaosem w glowie, ale ogromna kreatywnoscią. Format komiksowo-dziennikowy. Swietny dla dzieci z ADHD, dysleksja lub niskim poczuciem wartosci w szkole.", ocena: 4 },
        { tytul: "Dziennik cwaniaczka", autor: "Jeff Kinney", opis: "Humor jako strategia radzenia sobie. Greg nie jest idealny — i to jest clue. Normalizuje bycie imperfect.", ocena: 4 },
      ],
    },
    {
      kategoria: "Relacje rówieśnicze i wykluczenie",
      kolor: "bg-blue-500",
      tytuly: [
        { tytul: "Most do Terabithii", autor: "Katherine Paterson", opis: "Przyjaznl, ktora zmienia wszystko, i nagla strata. Jedna z najtrudniejszych i najglebszych ksiazek dla tej grupy wiekowej.", ocena: 5 },
        { tytul: "Charlotte i jej pajak", autor: "E.B. White", opis: "O przyjaznie, poswieceniu i uczeniu sie, ze relacje trwaja przez pamiec. Oswaja smierc przez pryzmat milosci.", ocena: 5 },
        { tytul: "Nie dam sie!", autor: "Sylvie de Mathuisieulx", opis: "O mobbingu i asertywnosci — polecana przez pedagogow szkolnych dla dzieci przechodzacych przez sytuacje wykluczenia.", ocena: 4 },
      ],
    },
    {
      kategoria: "Żałoba i strata",
      kolor: "bg-gray-600",
      tytuly: [
        { tytul: "Potworny glos", autor: "Patrick Ness", opis: "13-letni Conor, smierc mamy i potwor ktory mowi prawe — jedna z najbardziej poruszajacych ksiazek o dzieciecej zalobie. Dla odwaznych.", ocena: 5 },
        { tytul: "Charlotte siec", autor: "E.B. White", opis: "Smierc przyjaciola i pamiec jako forma trwania. Klasyk dla mlodszych z tej grupy (7-9 lat).", ocena: 5 },
        { tytul: "Kiedy umarl tata", autor: "Dorota Gellner", opis: "Polskie wydanie o stracie ojca — prosta narracja, ktora pomaga zrozumiec I przezyc zalobe.", ocena: 4 },
      ],
    },
    {
      kategoria: "Lęk i stres szkolny",
      kolor: "bg-amber-500",
      tytuly: [
        { tytul: "Kiedy martwię sie za duzo", autor: "Dawn Huebner", opis: "Poradnik w formie cwiczen i historyjek — CBT dla dzieci o zarzadzaniu niepokojem. Sprawdzony klinicznie.", ocena: 5 },
        { tytul: "Burek i krecik", autor: "Ulf Nilsson", opis: "Mala opowiesc o przyjaznie i odnalezieniu sie w nowym miejscu — dla dzieci wchodzacych do nowej szkoly.", ocena: 4 },
        { tytul: "Jestem inny", autor: "Sabine Reyr", opis: "O trudnosci z dopasowaniem sie i sile bycia soba — dla dzieci, ktore czuja sie nie na miejscu w klasie.", ocena: 4 },
      ],
    },
    {
      kategoria: "Zmiany rodzinne",
      kolor: "bg-rose-500",
      tytuly: [
        { tytul: "Gwiezdne wojny moich rodzicow", autor: "Grzegorz Gortat", opis: "Polskie wydanie o wojnie rodzicow widzianej oczami dziecka — realistyczne i empatyczne.", ocena: 5 },
        { tytul: "Zima w Dol Amroth", autor: "Agnieszka Tyszka", opis: "O radzeniu sobie ze zmiana — smiercią, przeprowadzka i odnalezieniu nowej rownowagi.", ocena: 4 },
        { tytul: "Rodzenstwo", autor: "Jens Ahlbom", opis: "O nowej roli w rodzinie po urodzeniu sie rodzenstwa — dla dzieci 8-10 lat.", ocena: 4 },
      ],
    },
    {
      kategoria: "Zdrowie emocjonalne i terapia emocji",
      kolor: "bg-green-500",
      tytuly: [
        { tytul: "Jak byc spokojnym gdy wszystko sie wokol krecai", autor: "James Lehman", opis: "Cwiczenia regulacji emocjonalnej opakowane w historyjke — dla dzieci z trudnosciami w samoregulacji.", ocena: 4 },
        { tytul: "Moc oddechu", autor: "Mary NurrieStearns", opis: "Mindfulness dla dzieci w formacie opowiesci — cwiczenia oddechowe jako strategie radzenia sobie ze stresem.", ocena: 4 },
        { tytul: "Percy Jackson i bogowie olimpijscy", autor: "Rick Riordan", opis: "Seria z bohaterem z ADHD i dysleksja. Nie terapeutyczna wprost, ale budujaca poczucie kompetencji i sprawczosci.", ocena: 5 },
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title="Najlepsze książki terapeutyczne dla dzieci 7–12 lat — zestawienie"
        description="Zestawienie najlepszych książek terapeutycznych dla dzieci w wieku szkolnym 7–12 lat. Tytuły na emocje, relacje rówieśnicze, żałobę, lęk szkolny i zmiany rodzinne."
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
          <span className="text-gray-700 dark:text-gray-300">Najlepsze książki terapeutyczne 7–12 lat</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Przewodnik
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Najlepsze książki terapeutyczne dla dzieci 7–12 lat
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Wiek szkolny to czas, gdy relacje rówieśnicze stają się kluczowe, a emocje — bardziej złożone.
            Te książki są sprawdzonymi narzędziami terapeutycznymi dla tej grupy wiekowej.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>9 min czytania</span>
          </div>
        </header>

        <section className="mb-10">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Jak korzystać z tego zestawienia?</h3>
            <p className="text-blue-700 dark:text-blue-400 text-sm">
              Ocena gwiazdkowa (1–5) odzwierciedla skuteczność jako narzędzia biblioterapeutycznego
              dla tej grupy wiekowej i danego problemu — nie ocenę literacką.
              Dla dzieci 7–9 lat wybieraj pozycje z dolnego przedziału grupy, dla 11–12-latków — z górnego.
            </p>
          </div>
        </section>

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

        {/* Powiązane zestawienia */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Inne zestawienia książek
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/artykuly/najlepsze-ksiazki-terapeutyczne-3-6-lat" className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-100 dark:border-green-800 hover:shadow-md transition-shadow">
              <div className="font-bold text-green-700 dark:text-green-400 mb-1">Dzieci 3–6 lat</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Najlepsze książki terapeutyczne dla przedszkolaków</p>
            </Link>
            <Link href="/artykuly/najlepsze-ksiazki-terapeutyczne-dla-mlodziezy" className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-100 dark:border-purple-800 hover:shadow-md transition-shadow">
              <div className="font-bold text-purple-700 dark:text-purple-400 mb-1">Młodzież 13+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Najlepsze książki terapeutyczne dla nastolatków</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Gotowe scenariusze do pracy z dziećmi</h2>
          <p className="text-white/80 mb-6">
            W naszym narzędziowniku znajdziesz gotowe scenariusze zajęć biblioterapeutycznych — sprawdzone materiały do druku dla nauczycieli, pedagogów i rodziców.
          </p>
          <Link
            href="/biblioterapia/narzedziownik"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Zobacz scenariusze i materiały
          </Link>
        </section>
      </article>
    </Layout>
  );
}
