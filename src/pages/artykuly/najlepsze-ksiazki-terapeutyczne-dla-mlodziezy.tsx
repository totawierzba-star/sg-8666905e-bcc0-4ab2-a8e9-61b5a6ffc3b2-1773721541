import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function NajlepszeKsiazkiTerapeutyczneDlaMlodziezyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Najlepsze książki terapeutyczne dla młodzieży — zestawienie",
    description:
      "Zestawienie najlepszych książek terapeutycznych dla nastolatków 13+. Tytuły YA na depresję, tożsamość, żałobę, relacje i zdrowie psychiczne — sprawdzone w pracy biblioterapeutycznej.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/najlepsze-ksiazki-terapeutyczne-dla-mlodziezy-miniatura.jpg",
  };

  const books = [
    {
      kategoria: "Depresja i zdrowie psychiczne",
      kolor: "bg-slate-600",
      tytuly: [
        { tytul: "Wszystkie jasne miejsca", autor: "Jennifer Niven", opis: "Historia Violet i Fincha — depresja i myśli samobójcze pokazane z niezwykłą wrażliwością. Jedna z najważniejszych książek YA o zdrowiu psychicznym. Uwaga: silne treści, zalecana rozmowa po lekturze.", ocena: 5 },
        { tytul: "Potworny glos", autor: "Patrick Ness", opis: "Chlopiec, ktory nie moze sie pogodzic z umierającą mamą — o zaprzeczeniu, winie i przyznaniu sie do bolu. Metaforyczny i poruszajacy.", ocena: 5 },
        { tytul: "Nieznajomy w lustrze", autor: "Ned Vizzini", opis: "Autobiograficzna powiesc o hospitalizacji psychiatrycznej 15-latka. Normalizuje szukanie pomocy i pobyt w szpitalu psychiatrycznym.", ocena: 5 },
        { tytul: "Perks of Being a Wallflower", autor: "Stephen Chbosky", opis: "Listy Charliego do anonimowego czytelnika — trauma, dorastanie, przyjazn. Jeden z kultowych tytulow YA o zdrowiu psychicznym.", ocena: 4 },
      ],
    },
    {
      kategoria: "Tożsamość i akceptacja siebie",
      kolor: "bg-purple-600",
      tytuly: [
        { tytul: "Simon vs. The Homo Sapiens Agenda", autor: "Becky Albertalli", opis: "Coming out w cyfrowym swiecie — ciepla, humorystyczna i empatyczna. Jedna z najlepszych ksiazek YA o odkrywaniu tozsamosci seksualnej.", ocena: 5 },
        { tytul: "Ciekawy przypadek psa nocna pora", autor: "Mark Haddon", opis: "Narracja z perspektywy Christophera — chlopca z ASD. Jeden z najslynniejszych literackich portretow spektrum autyzmu. Dla starszej mlodziezy.", ocena: 5 },
        { tytul: "Outsiderzy", autor: "S.E. Hinton", opis: "Pisany przez 16-latke klasyk o tozsamosci, przynaleznosci i wartosci poza klasyfikacjami spolecznymi. Ponadczasowy.", ocena: 5 },
        { tytul: "Brzydkie Kaczatko (interpretacja wspolczesna)", autor: "H.C. Andersen / rozne adaptacje", opis: "Klasyk o odmiennosci i odkryciu prawdziwej tozsamosci — szczegolnie istotny dla mlodziezy odrzuconej przez grupy.", ocena: 4 },
      ],
    },
    {
      kategoria: "Żałoba, strata i sens życia",
      kolor: "bg-gray-600",
      tytuly: [
        { tytul: "Gwiazd naszych wina", autor: "John Green", opis: "Hazel i Augustus — milosc, choroba i szukanie sensu mimo nieodwracalnosci. Jedna z najwazniejszych ksiazek YA o stracie.", ocena: 5 },
        { tytul: "Czekajac na Alaske", autor: "John Green", opis: "Smierc przyjaciolki i pytanie jak sie z tym nauczyc zyc. Filozofia egzystencjalna dla mlodziezy — dostepna i autentyczna.", ocena: 5 },
        { tytul: "Rok magicznego myslenia", autor: "Joan Didion", opis: "Dla starszej mlodziezy i doroslych — gleboka autobiograficzna analiza zaloby po naglej smierci meza.", ocena: 4 },
      ],
    },
    {
      kategoria: "Presja rówieśnicza i relacje",
      kolor: "bg-blue-600",
      tytuly: [
        { tytul: "Trzynascie powodow", autor: "Jay Asher", opis: "Kontrowersyjny, ale otwierajacy rozmowe. Uwaga: wymaga aktywnego prowadzenia rozmowy po lekturze ze wzgledu na ryzyko gloryfikacji. Dla starszej mlodziezy pod opieka dorosłego.", ocena: 4 },
        { tytul: "Wybierz prawde albo wyzwanie", autor: "Nora Zelevansky", opis: "Cyberbullying i konsekwencje decyzji w mediach spolecznosciowych. Aktualne i realistyczne.", ocena: 4 },
        { tytul: "Ktos taki jak ja", autor: "Sarah Dessen", opis: "O toksycznych relacjach i odbudowywaniu granic — dla dziewczat przechodzacych przez trudne zwiazki.", ocena: 4 },
      ],
    },
    {
      kategoria: "Trauma i resilience",
      kolor: "bg-rose-600",
      tytuly: [
        { tytul: "Speak", autor: "Laurie Halse Anderson", opis: "Klasyk YA o milczeniu po gwalt i odzyskiwaniu glosu. Wymagajacy, ale dla wielu ofiar traum — przelomowy. Tylko z towarzyszeniem dorosłego.", ocena: 5 },
        { tytul: "Wszystko jest iluminacja", autor: "Jonathan Safran Foer", opis: "O dziedziczeniu traumy i szukaniu prawdy o rodzinie. Trudny formalnie, ale rewelacyjny dla mlodych czytelnikow zainteresowanych historia i psychologia.", ocena: 4 },
        { tytul: "Moc odpornosci", autor: "Martin Seligman (adaptacja dla mlodziezy)", opis: "Non-fiction o budowaniu odpornosci psychicznej — naukowe i przystepne.", ocena: 4 },
      ],
    },
    {
      kategoria: "Niestandardowe formy — komiksy i graficzne",
      kolor: "bg-amber-500",
      tytuly: [
        { tytul: "Fun Home", autor: "Alison Bechdel", opis: "Graficzna autobiografia o relacji z ojcem, coming out i tozsamosci. Dla starszej mlodziezy 16+.", ocena: 5 },
        { tytul: "Marzi", autor: "Marzena Sowa", opis: "Autobiograficzny komiks o dorastaniu w PRL-u — o tozsamosci, pamiec i relacjach rodzinnych.", ocena: 4 },
        { tytul: "Daytripper", autor: "Fabio Moon, Gabriel Ba", opis: "Graficzna opowiesc o sensie zycia i smierci — filozoficzna i piekna wizualnie. Dla starszej mlodziezy.", ocena: 5 },
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title="Najlepsze książki terapeutyczne dla młodzieży — zestawienie"
        description="Zestawienie najlepszych książek terapeutycznych dla nastolatków 13+. Tytuły YA na depresję, tożsamość, żałobę, relacje i zdrowie psychiczne — sprawdzone w pracy biblioterapeutycznej."
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
          <span className="text-gray-700 dark:text-gray-300">Najlepsze książki terapeutyczne dla młodzieży</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Przewodnik
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Najlepsze książki terapeutyczne dla młodzieży
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Literatura young adult (YA) to jeden z najważniejszych nurtów biblioterapeutycznych.
            Te tytuły są sprawdzone w pracy z nastolatkami — dobrane według kryteriów terapeutycznych,
            nie tylko literackich.
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
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Ważna informacja o trudnych treściach</h3>
            <p className="text-amber-700 dark:text-amber-400 text-sm">
              Część tytułów w tym zestawieniu zawiera trudne treści — śmierć, trauma, zaburzenia psychiczne,
              przemoc seksualna. Są one zamieszczone, ponieważ mają udowodnioną wartość terapeutyczną,
              ale wymagają prowadzenia rozmowy przez dorosłego po lekturze.
              Sprawdź opisy i oznaczenia przy każdym tytule.
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

        {/* Wskazowki pracy z nastolatkiem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak pracować biblioterapeutycznie z nastolatkiem?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { zasada: "Nie narzucaj lektury", opis: "Zaproponuj — nie nakazuj. Nastolatek musi mieć poczucie wyboru." },
              { zasada: "Czytaj też sam/a", opis: "Wspólna lektura lub znajomość treści przez rodzica tworzy wspólny język." },
              { zasada: "Pytaj o bohatera", opis: "Nie pytaj: jak ty się czujesz? — pytaj: co czuł bohater w tej scenie?" },
              { zasada: "Akceptuj niekonwencjonalne formy", opis: "Komiks, manga, audiobook — każdy format jest wartościowy biblioterapeutycznie." },
            ].map((item) => (
              <div key={item.zasada} className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-100 dark:border-purple-800">
                <div className="font-bold text-purple-800 dark:text-purple-300 text-sm mb-1">{item.zasada}</div>
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
            <Link href="/artykuly/najlepsze-ksiazki-terapeutyczne-3-6-lat" className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-100 dark:border-green-800 hover:shadow-md transition-shadow">
              <div className="font-bold text-green-700 dark:text-green-400 mb-1">Dzieci 3–6 lat</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Najlepsze książki terapeutyczne dla przedszkolaków</p>
            </Link>
            <Link href="/artykuly/najlepsze-ksiazki-terapeutyczne-7-12-lat" className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow">
              <div className="font-bold text-blue-700 dark:text-blue-400 mb-1">Dzieci 7–12 lat</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Najlepsze książki terapeutyczne dla dzieci szkolnych</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Gotowe scenariusze do pracy z dziećmi</h2>
          <p className="text-white/80 mb-6">
            W naszym narzędziowniku znajdziesz gotowe scenariusze zajęć biblioterapeutycznych — sprawdzone materiały do druku dla nauczycieli, pedagogów i rodziców.
          </p>
          <Link
            href="/biblioterapia/narzedziownik"
            className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors"
          >
            Zobacz scenariusze i materiały
          </Link>
        </section>
      </article>
    </Layout>
  );
}
