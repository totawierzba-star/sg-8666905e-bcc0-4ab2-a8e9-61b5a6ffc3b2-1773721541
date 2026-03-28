import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaAPoczucieWlasnejWartosciPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia a poczucie własnej wartości — jak książki wzmacniają dzieci?",
    description:
      "Jak biblioterapia pomaga dzieciom budować poczucie własnej wartości? Mechanizmy, polecane tytuły i ćwiczenia dla rodziców i pedagogów.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-a-poczucie-wlasnej-wartosci-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy biblioterapia może pomóc dziecku z niskim poczuciem własnej wartości?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak. Literatura pomaga dziecku odkryć, że jego przeżycia są normalne, że inni też mają wątpliwości i że wyjście z trudnej sytuacji jest możliwe. To buduje wewnętrzne przekonanie o własnej wartości.",
        },
      },
      {
        "@type": "Question",
        name: "Jakie książki najlepiej budują poczucie własnej wartości u dzieci?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Książki z bohaterem, który pomimo trudności, wad i odmienności odnajduje swoje miejsce i zostaje zaakceptowany. Ważne, by zwycięstwo bohatera nie było zbyt łatwe ani nierealistyczne.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia a poczucie własnej wartości — jak książki wzmacniają dzieci?"
        description="Jak biblioterapia pomaga dzieciom budować poczucie własnej wartości? Mechanizmy, polecane tytuły i ćwiczenia dla rodziców i pedagogów."
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
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link href="/artykuly" className="hover:text-accent">Artykuły</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia a poczucie własnej wartości</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Emocje
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia a poczucie własnej wartości — jak książki wzmacniają dzieci?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Dzieci, które nie wierzą w siebie, często odnajdują w bohaterach literackich to, czego sami
            nie potrafią sobie powiedzieć: jesteś wystarczający. Jesteś wartościowy. Dajesz radę.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>10 min czytania</span>
          </div>
        </header>

        {/* Skąd pochodzi niskie poczucie wartości */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skąd pochodzi niskie poczucie własnej wartości u dzieci?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { zrodlo: "Krytyczne komunikaty od dorosłych", opis: "Jesteś niezdarny, znowu to samo, co z ciebie za dziecko — zakodowane wcześnie, trzymają się latami." },
              { zrodlo: "Porównania z rodzeństwem lub rówieśnikami", opis: "Twoja siostra nigdy tak nie robiła — porównanie podważa wartość własną i niszczy relacje." },
              { zrodlo: "Niepowodzenia szkolne", opis: "System, który premiuje określone zdolności, marginalizuje dzieci o innym profilu inteligencji." },
              { zrodlo: "Wykluczenie społeczne", opis: "Brak przyjaciół, odrzucenie przez grupę, mobbing — to doświadczenia, które zostawiają trwały ślad." },
              { zrodlo: "Perfekcjonizm", opis: "Dziecko, które boi się zrobić cokolwiek, bo i tak to nie będzie dość dobre — pułapka wewnętrznego krytyka." },
              { zrodlo: "Trauma i niestabilne środowisko", opis: "Poczucie wartości buduje się w bezpiecznej relacji. Bez niej — jest to budowanie na ruchomych piaskach." },
            ].map((item) => (
              <div key={item.zrodlo} className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 border border-violet-100 dark:border-violet-800">
                <div className="font-bold text-violet-800 dark:text-violet-300 text-sm mb-1">{item.zrodlo}</div>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jak literatura pomaga */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak literatura wzmacnia poczucie własnej wartości?
          </h2>
          <div className="space-y-4">
            {[
              {
                mechanizm: "Identyfikacja z bohaterem, który sobie radzi",
                opis: "Dziecko, które identyfikuje się z bohaterem przechodzącym przez trudności i wygrywającym, internalizuje przekaz: ja też mogę. To nie jest naiwny optymizm — to modelowanie sprawczości.",
              },
              {
                mechanizm: "Normalizacja niedoskonałości",
                opis: "Bohaterowie z wadami, którzy mimo to są kochani i wartościowi, uczą dziecka że nie trzeba być perfekcyjnym, żeby być akceptowanym. To fundament zdrowego poczucia wartości.",
              },
              {
                mechanizm: "Odkrycie własnych mocnych stron przez bohatera",
                opis: "Gdy postać odkrywa, że jej odmienność jest zasobem, nie wadą — dziecko może zobaczyć siebie inaczej. Wiele dzieci po raz pierwszy myśli dobrze o swoim sposobie bycia właśnie przez literaturę.",
              },
              {
                mechanizm: "Rozmowa inicjowana przez lekturę",
                opis: "Rodzic, który pyta Co myślisz o tym, jak inni traktowali bohatera? i słucha odpowiedzi bez oceniania, daje dziecku doświadczenie bycia słyszanym. To jedno z najsilniejszych narzędzi budujących poczucie wartości.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.mechanizm}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Polecane książki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki wzmacniające poczucie własnej wartości
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Dzieci 3–7 lat",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Ja jestem ja", autor: "Virginia Satir", opis: "Krotki, mocny tekst o akceptacji siebie — klasyk psychoedukacyjny dla najmlodszych" },
                  { tytul: "Lama Lama czerwona pizama", autor: "Anna Dewdney", opis: "O bezpieczenstwo i akceptacji — dla dzieci z lekkiem separacyjnym" },
                  { tytul: "Naprawde wielka ksiazka o mnie", autor: "Me Books", opis: "Interaktywna — dziecko jest bohaterem i odkrywa swoje mocne strony" },
                ],
              },
              {
                wiek: "Dzieci 8–11 lat",
                kolor: "bg-violet-500",
                ksiazki: [
                  { tytul: "Cudowny chlopak", autor: "R.J. Palacio", opis: "Chlopiec z wada twarzy ktory wchodzi do swiata — o sile i akceptacji siebie mimo odmiennosci" },
                  { tytul: "Matylda", autor: "Roald Dahl", opis: "Dziecko niedoceniane przez srodowisko, ktore odkrywa swoja sile i zmienia swiata" },
                  { tytul: "Dziewczynka ktora calowala sie z wezami", autor: "Renata Piater", opis: "Polskie wydanie o dziewczynce odkrywajacej swoje wyjatkowe zdolnosci" },
                ],
              },
              {
                wiek: "Mlodzicz 12+",
                kolor: "bg-purple-500",
                ksiazki: [
                  { tytul: "Brzydkie Kaczatko", autor: "Hans Christian Andersen", opis: "Klasyk o odmiennosci i odkryciu prawdziwej tozsamosci — wazny dla mlodziezy odrzuconej przez grupy" },
                  { tytul: "Outsiderzy", autor: "S.E. Hinton", opis: "O wartosci poza klasyfikacjami spolecznymi — pisane przez nastolatke, dla nastolatk" },
                  { tytul: "Powiedz nie", autor: "Rafal Kosik", opis: "O asertywnosci i budowaniu granic jako fundamencie szacunku do siebie" },
                ],
              },
            ].map((sekcja) => (
              <div key={sekcja.wiek}>
                <div className={`${sekcja.kolor} text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3`}>
                  {sekcja.wiek}
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {sekcja.ksiazki.map((k) => (
                    <div key={k.tytul} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{k.tytul}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{k.autor}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{k.opis}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ćwiczenia */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ćwiczenia po lekturze — wzmacnianie poczucia wartości
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                cwiczenie: "Mapa mocnych stron bohatera",
                opis: "Dziecko wypisuje lub rysuje mocne strony bohatera. Pytanie: Które z tych cech masz ty? To często zaskakujące odkrycie.",
                wiek: "7+",
              },
              {
                cwiczenie: "List od bohatera do dziecka",
                opis: "Co bohater powiedziałby dziecku, gdyby je spotkał? Dziecko dyktuje lub pisze ten list. Projekcja pozytywnych cech na siebie.",
                wiek: "8+",
              },
              {
                cwiczenie: "Ja jestem wyjatkowy bo...",
                opis: "Dziecko kończy zdanie wskazując na unikalne cechy, które odkryło przez pryzmat bohatera lub własnej refleksji po lekturze.",
                wiek: "6+",
              },
              {
                cwiczenie: "Tarcza bohatera",
                opis: "Dziecko rysuje tarczę podzieloną na 4 pola: co umiem, co lubię, kto mnie kocha, czego się nie boję. Wizualizacja zasobów.",
                wiek: "7+",
              },
            ].map((item) => (
              <div key={item.cwiczenie} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.cwiczenie}</h3>
                  <span className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 px-2 py-0.5 rounded-full">{item.wiek}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
              </div>
            ))}
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
                q: "Czy biblioterapia może pomóc dziecku z niskim poczuciem własnej wartości?",
                a: "Tak. Literatura pomaga dziecku odkryć, że jego przeżycia są normalne, że inni też mają wątpliwości i że wyjście z trudnej sytuacji jest możliwe. To buduje wewnętrzne przekonanie o własnej wartości.",
              },
              {
                q: "Jakie książki najlepiej budują poczucie własnej wartości u dzieci?",
                a: "Książki z bohaterem, który pomimo trudności, wad i odmienności odnajduje swoje miejsce i zostaje zaakceptowany. Ważne, by zwycięstwo bohatera nie było zbyt łatwe ani nierealistyczne.",
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
        <section className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Chcesz wzmocnić poczucie wartości swojego dziecka?</h2>
          <p className="text-violet-100 mb-6">
            Skontaktuj się z nami — pomożemy dobrać odpowiednie podejście
            i materiały biblioterapeutyczne.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-violet-700 font-bold px-8 py-3 rounded-full hover:bg-violet-50 transition-colors"
          >
            Umów konsultację
          </Link>
        </section>
      </article>
    </Layout>
  );
}
