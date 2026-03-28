import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function BiblioterapiaPoPStracieBliskiejOsobyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Biblioterapia po stracie bliskiej osoby — jak książki pomagają w żałobie?",
    description:
      "Jak biblioterapia wspiera dzieci i dorosłych po śmierci bliskiej osoby? Mechanizmy, polecane książki i wskazówki jak rozmawiać o żałobie przez pryzmat literatury.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/biblioterapia-po-stracie-bliskiej-osoby-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy biblioterapia przy żałobie dzieci jest bezpieczna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, pod warunkiem dobrania odpowiednich tytułów i prowadzenia rozmowy w sposób wspierający. Unikaj jednak nadmiernie brutalistycznych opisów śmierci dla małych dzieci — szukaj historii, które pokazują smutek i pamięć, nie przerażenie.",
        },
      },
      {
        "@type": "Question",
        name: "Kiedy zacząć biblioterapię po śmierci bliskiej osoby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie ma jednoznacznej odpowiedzi. Można sięgnąć po książkę już w pierwszych dniach jako towarzyszenie w ciszy, lub po kilku tygodniach, gdy dziecko zaczyna przetwarzać stratę. Ważne jest, by nie wymuszać gotowości.",
        },
      },
      {
        "@type": "Question",
        name: "Jak mówić dziecku o śmierci przez pryzmat książki?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Używaj konkretnych słów — umarł, śmierć — zamiast eufemizmów (odszedł, zasnął). Książka może stać się trampoliną do bezpiecznej rozmowy o tym, co czuje dziecko i co stało się z osobą, która odeszła.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia po stracie bliskiej osoby — jak książki pomagają w żałobie?"
        description="Jak biblioterapia wspiera dzieci i dorosłych po śmierci bliskiej osoby? Mechanizmy, polecane książki i wskazówki jak rozmawiać o żałobie przez pryzmat literatury."
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
          <span className="text-gray-700 dark:text-gray-300">Biblioterapia po stracie bliskiej osoby</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Terapia
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Biblioterapia po stracie bliskiej osoby — jak książki pomagają w żałobie?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Śmierć bliskiej osoby to doświadczenie, które przewraca świat do góry nogami.
            Literatura nie cofnie straty, ale może towarzyszyć w żałobie — i dać słowa na to,
            czego powiedzieć nie umiemy.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>11 min czytania</span>
          </div>
        </header>

        {/* Jak dzieci rozumieją śmierć */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak dzieci rozumieją śmierć w różnym wieku?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-600 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Wiek</th>
                  <th className="text-left p-3">Rozumienie śmierci</th>
                  <th className="text-left p-3 rounded-tr-lg">Co pomaga</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { wiek: "2–4 lata", rozumienie: "Tymczasowa nieobecność. Myśli, że osoba wróci", pomaga: "Krótkie, konkretne wyjaśnienia; rytuały pożegnania; obecność dorosłego" },
                  { wiek: "5–7 lat", rozumienie: "Zaczyna rozumieć nieodwracalność, ale może personifikować śmierć (duch, zło)", pomaga: "Proste historyjki o przemijaniu, rozmowa o emocjach, rysunek" },
                  { wiek: "8–11 lat", rozumienie: "Rozumie biologiczną nieodwracalność. Może mieć filozoficzne pytania i lęk o własną śmierć", pomaga: "Realistyczne książki z bohaterem w żałobie, odpowiedzi na pytania" },
                  { wiek: "12–18 lat", rozumienie: "Pełne rozumienie. Intensywne emocje, poszukiwanie sensu", pomaga: "YA o stracie, poezja, dziennik, rozmowa rówieśnicza" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/50" : "bg-white dark:bg-gray-800"}>
                    <td className="p-3 font-semibold text-gray-900 dark:text-white">{row.wiek}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{row.rozumienie}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{row.pomaga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Jak biblioterapia pomaga */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak biblioterapia pomaga w żałobie?
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                ikona: "🪞",
                tytul: "Daje lustro dla emocji",
                opis: "Czytanie o smutku bohatera pozwala dziecku zobaczyć i nazwać swój własny smutek. To pierwszy krok do przetworzenia żałoby.",
              },
              {
                ikona: "🤝",
                tytul: "Daje poczucie towarzyszenia",
                opis: "Dziecko dowiaduje się, że nie jest jedyne. Inni też przeżyli śmierć kogoś bliskiego i przez to przeszli.",
              },
              {
                ikona: "💬",
                tytul: "Otwiera rozmowę",
                opis: "Pytanie o bohatera jest łatwiejsze niż pytanie o Ciebie. Książka staje się punktem wejścia do rozmowy, której inaczej by nie było.",
              },
              {
                ikona: "🌱",
                tytul: "Pokazuje możliwość dalszego życia",
                opis: "Bohaterowie po stracie nie przestają żyć. Biblioterapia modeluje, że żałoba jest procesem — a nie końcem.",
              },
              {
                ikona: "🧠",
                tytul: "Normalizuje fizyczne objawy",
                opis: "Ból brzucha, bezsenność, rozproszenie — to normalne w żałobie. Dzieci często boją się tych objawów, bo nie wiedzą, że są naturalną reakcją.",
              },
              {
                ikona: "🕯️",
                tytul: "Pielęgnuje pamięć",
                opis: "Książki o żałobie uczą, że pamiętać osobę, która odeszła to coś pięknego — nie dowód na to, że nie możemy iść dalej.",
              },
            ].map((item) => (
              <div key={item.tytul} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-4">
                <span className="text-2xl">{item.ikona}</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.tytul}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Polecane książki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki w żałobie
          </h2>
          <div className="space-y-6">
            {[
              {
                wiek: "Dzieci 3–7 lat",
                kolor: "bg-green-500",
                ksiazki: [
                  { tytul: "Dziadek odszedl", autor: "Rolf Myller", opis: "Prosta, ciepla historia o smierci dziadka i tym, co po nim pozostaje" },
                  { tytul: "Lew Krol", autor: "Walt Disney / adaptacja", opis: "Smierc ojca i wina — klasyk, ktory otwiera rozmowe o stracie i poczuciu winy" },
                  { tytul: "Kiedy umieraja ci, ktorych kochamy", autor: "Fred Rogers", opis: "Bezposrednia odpowiedz na pytania dzieci o smierc — jasna i cieply" },
                ],
              },
              {
                wiek: "Dzieci 8–11 lat",
                kolor: "bg-blue-500",
                ksiazki: [
                  { tytul: "Most do Terabithii", autor: "Katherine Paterson", opis: "Niespodziewana smierc przyjaciolki — jedna z najlepszych ksiazek o dzieciecej zalobei" },
                  { tytul: "Potworny gos", autor: "Patrick Ness", opis: "Chlopiec ktory nie moze sie pogodzic ze smiercia mamy — metafora zalob i poczucia winy" },
                  { tytul: "Charlotte siec", autor: "E.B. White", opis: "Klasyk o smierci i pamieci — delikatny, ale przenikliwy" },
                ],
              },
              {
                wiek: "Mlodzicz 12+",
                kolor: "bg-purple-500",
                ksiazki: [
                  { tytul: "Gwiazd naszych wina", autor: "John Green", opis: "Milosc w cieniu smierci — o znalezieniu sensu mimo nieuleczalnej choroby" },
                  { tytul: "Czekajac na Alaske", autor: "John Green", opis: "Smierc przyjaciolki i pytanie, jak sie z tym nauczyc zyc" },
                  { tytul: "Wigilia Bozonarodzeniowa", autor: "Charles Dickens", opis: "O tym, ze smierc moze byc mementum do zmiany sposobu zycia" },
                ],
              },
              {
                wiek: "Doroslych",
                kolor: "bg-slate-500",
                ksiazki: [
                  { tytul: "Rok magicznego myslenia", autor: "Joan Didion", opis: "Autobiograficzne studium zalob po nagiej smierci meza — jedno z najglebszych swiadectw" },
                  { tytul: "Gdy Nietzsche plakał", autor: "Irvin Yalom", opis: "O sensie smierci i zycia — powiest psychologiczno-filozoficzna" },
                  { tytul: "Mala ksiazka o zalob", autor: "Lucy Hone", opis: "Naukowe i osobiste podejscie do przejscia przez strate" },
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

        {/* Pytania po lekturze */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak rozmawiać po lekturze o żałobie?
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4">Pytania otwierające — dla dzieci 6–12 lat</h3>
            <div className="space-y-3">
              {[
                "Co się stało z bohaterem? Jak się wtedy czuł?",
                "Czy rozumiesz, dlaczego płakał? Czy Ty też kiedyś czułeś coś podobnego?",
                "Co pomogło mu poczuć się choć trochę lepiej?",
                "Czy myślisz, że pamiętanie kogoś kto odszedł to dobra rzecz?",
                "Gdybyś mógł/mogła coś powiedzieć bohaterowi — co by to było?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-slate-400 font-bold shrink-0">{i + 1}.</span>
                  <p className="text-gray-700 dark:text-gray-300 italic">{q}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600 text-sm text-slate-600 dark:text-slate-400">
              <strong>Ważne:</strong> Nie zmuszaj do rozmowy. Jeśli dziecko nie chce mówić — uszanuj to.
              Samo czytanie razem jest formą towarzyszenia.
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
                q: "Czy biblioterapia przy żałobie dzieci jest bezpieczna?",
                a: "Tak, pod warunkiem dobrania odpowiednich tytułów i prowadzenia rozmowy w sposób wspierający. Unikaj jednak nadmiernie brutalistycznych opisów śmierci dla małych dzieci — szukaj historii, które pokazują smutek i pamięć, nie przerażenie.",
              },
              {
                q: "Kiedy zacząć biblioterapię po śmierci bliskiej osoby?",
                a: "Nie ma jednoznacznej odpowiedzi. Można sięgnąć po książkę już w pierwszych dniach jako towarzyszenie w ciszy, lub po kilku tygodniach, gdy dziecko zaczyna przetwarzać stratę. Ważne jest, by nie wymuszać gotowości.",
              },
              {
                q: "Jak mówić dziecku o śmierci przez pryzmat książki?",
                a: "Używaj konkretnych słów — umarł, śmierć — zamiast eufemizmów (odszedł, zasnął). Książka może stać się trampoliną do bezpiecznej rozmowy o tym, co czuje dziecko i co stało się z osobą, która odeszła.",
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
        <section className="bg-gradient-to-r from-slate-600 to-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Gotowe scenariusze do pracy z dziećmi</h2>
          <p className="text-white/80 mb-6">
            W naszym narzędziowniku znajdziesz gotowe scenariusze zajęć biblioterapeutycznych — sprawdzone materiały do druku dla nauczycieli, pedagogów i rodziców.
          </p>
          <Link
            href="/biblioterapia/narzedziownik"
            className="inline-block bg-white text-slate-700 font-bold px-8 py-3 rounded-full hover:bg-slate-50 transition-colors"
          >
            Zobacz scenariusze
          </Link>
        </section>
      </article>
    </Layout>
  );
}
