import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function JakRozmawiacZDzieckiem() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jak rozmawiać z dzieckiem o trudnych emocjach? Przewodnik dla rodziców",
    description:
      "Praktyczny przewodnik dla rodziców i wychowawców: jak prowadzić rozmowy z dziećmi o strachu, smutku, złości i wstydzie. Z pomocą książek i konkretnych technik.",
    author: { "@type": "Organization", name: "Redakcja" },
    datePublished: "2026-03-28",
    image: "/uploads/jak-rozmawiac-z-dzieckiem-o-trudnych-emocjach-miniatura.jpg",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Od kiedy rozmawiać z dzieckiem o emocjach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Od urodzenia — poprzez nazywanie emocji przy codziennych sytuacjach. Formalniejsze rozmowy o trudnych emocjach są możliwe już od ok. 3. roku życia.",
        },
      },
      {
        "@type": "Question",
        name: "Co zrobić, gdy dziecko nie chce rozmawiać o emocjach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie wymuszaj. Zaproponuj inne formy wyrazu: rysunek, laleczki, zabawę w udawanie. Przeczytaj razem książkę o bohaterze z podobnym uczuciem i zacznij od pytania o bohatera — nie o dziecko.",
        },
      },
      {
        "@type": "Question",
        name: "Jak książki pomagają w rozmowach o emocjach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Literatura daje bezpieczny dystans — dziecko rozmawia o bohaterze, nie bezpośrednio o sobie. Zmniejsza to opór i wstyd, a jednocześnie umożliwia prawdziwe przetwarzanie emocji.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Jak rozmawiać z dzieckiem o trudnych emocjach? Przewodnik dla rodziców"
        description="Praktyczny przewodnik dla rodziców i wychowawców: jak prowadzić rozmowy z dziećmi o strachu, smutku, złości i wstydzie. Z pomocą książek i konkretnych technik."
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
          <span className="text-gray-700 dark:text-gray-300">Jak rozmawiać z dzieckiem o trudnych emocjach</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Emocje
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Jak rozmawiać z dzieckiem o trudnych emocjach? Przewodnik dla rodziców
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Dzieci nie rodzą się z umiejętnością rozumienia swoich emocji — uczą się jej przez relację z dorosłymi.
            Jak rozmawiać, żeby nie zamykać, ale otwierać?
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Redakcja</span>
            <span>•</span>
            <span>28 marca 2026</span>
            <span>•</span>
            <span>11 min czytania</span>
          </div>
        </header>

        {/* Dlaczego rozmowy o emocjach są trudne */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dlaczego rozmowy o emocjach są takie trudne?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                powod: "Nie mamy wzorców",
                opis: "Wielu z nas dorastało w domach, gdzie emocji się nie omawiało. Brakuje nam modelu takiej rozmowy.",
              },
              {
                powod: "Boimy się rozpaczy dziecka",
                opis: "Widok płaczącego dziecka aktywuje nasz własny lęk. Chcemy to szybko naprawić — zamiast towarzyszyć.",
              },
              {
                powod: "Nie chcemy go martwić",
                opis: "Myślimy, że rozmowa o strachu lub smutku go pogorszy. W rzeczywistości milczenie jest gorsze.",
              },
              {
                powod: "Dzieci nie mają słów",
                opis: "Dziecko przezywa emocje ciałem, nie słowami. Rozmowa wymaga najpierw nauczenia go języka emocji.",
              },
            ].map((item) => (
              <div key={item.powod} className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4 border border-pink-100 dark:border-pink-800">
                <div className="font-bold text-pink-800 dark:text-pink-300 text-sm mb-1">{item.powod}</div>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Zasady rozmowy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            10 zasad skutecznej rozmowy o emocjach
          </h2>
          <div className="space-y-3">
            {[
              { zasada: "Nazwij emocję, nie zachowanie", przyklad: "Widzę, że jesteś zdenerwowany — zamiast: Dlaczego tak krzyczysz?" },
              { zasada: "Waliduj, zanim zaczniesz tłumaczyć", przyklad: "Rozumiem, że to boli — zamiast: Nie ma czego się bać." },
              { zasada: "Bądź na poziomie dziecka", przyklad: "Kucnij, usiądź obok — kontakt wzrokowy na tym samym poziomie buduje bezpieczeństwo." },
              { zasada: "Pytaj otwarcie, nie zamykaj", przyklad: "Co teraz czujesz? — zamiast: Czy jesteś smutny?" },
              { zasada: "Akceptuj milczenie", przyklad: "Nie każda rozmowa musi zakończyć się słowami. Siedź obok i nie uciekaj." },
              { zasada: "Dziel się własnym doświadczeniem", przyklad: "Ja też czasami się boję i to jest ok — modelujesz język emocji sobą." },
              { zasada: "Nie zaprzeczaj emocjom", przyklad: "Unikaj: Nie ma czego płakać, to błahostka, Nie bądź takie dziecko." },
              { zasada: "Odróżniaj emocję od zachowania", przyklad: "Złość jest ok — bicie nie jest ok. Możesz być zły, ale nie możesz uderzać." },
              { zasada: "Nie pytaj dlaczego w momencie kryzysu", przyklad: "Dlaczego to zrobiłeś? — to pytanie defensywne, nie empatyczne. Poczekaj." },
              { zasada: "Zakończ rozmowę zapewnieniem", przyklad: "Jesteś bezpieczny. Jestem tu z tobą. Razem przez to przejdziemy." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="text-pink-500 font-black text-sm w-6 shrink-0">{i + 1}.</span>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.zasada}</div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic">{item.przyklad}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jak książka pomaga */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Jak biblioterapia pomaga w rozmowach o emocjach?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Kiedy dziecko nie może lub nie chce mówić o sobie, może mówić o bohaterze.
            Biblioterapia dostarcza gotowego pomostu — zamiast pytać jak ty się czujesz?,
            pytamy co czuł Piotrek w tej historii? Efekt terapeutyczny jest ten sam,
            ale droga jest bezpieczniejsza.
          </p>
          <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 border border-pink-200 dark:border-pink-800">
            <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-4">Pytania przez pryzmat książki (dla dzieci 4–10 lat)</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { emocja: "Strach", pytanie: "Czy myszka w tej historii miała rację, że się bała? Co jej pomagało?" },
                { emocja: "Smutek", pytanie: "Jak myślisz, dlaczego bohater płakał? Co czujesz, gdy patrysz na niego?" },
                { emocja: "Złość", pytanie: "Czy rozumiesz, dlaczego smok się rozzłościł? Co mógł zrobić zamiast ziać ogniem?" },
                { emocja: "Wstyd", pytanie: "Czy myślisz, że bohater zrobił coś złego? Czy zasługiwał na to, co go spotkało?" },
                { emocja: "Zazdrość", pytanie: "Czy rozumiesz uczucie bohatera, gdy brat dostał więcej? Czy ty też kiedyś tak czułeś?" },
                { emocja: "Samotność", pytanie: "Co czuło zwierzątko, gdy zostało samo? Co mogło mu pomóc?" },
              ].map((item) => (
                <div key={item.emocja} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-pink-100 dark:border-pink-800">
                  <div className="text-pink-600 dark:text-pink-400 font-bold text-xs mb-1">{item.emocja}</div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs italic">{item.pytanie}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Polecane książki */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Polecane książki do rozmów o emocjach
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { tytul: "Potwor kolorow", autor: "Anna Llenas", wiek: "3+", opis: "Nauka nazywania 6 emocji przez kolor — interaktywna i wizualna" },
              { tytul: "Smutne ludziki radosne ludziki", autor: "Michael Grejniec", wiek: "3+", opis: "Minimalistyczna i silna — o zrozumieniu roznicy miedzy emocjami" },
              { tytul: "Emocionariusz", autor: "Cristina Nunez Pereira", wiek: "5+", opis: "Slownik emocji z ilustracjami — 80 emocji z opisami i cwiczeniami" },
              { tytul: "Wielka ksiazka uczu", autor: "Tom Percival (seria)", wiek: "4+", opis: "Seria krotkich ksiazek o konkretnych emocjach (zlosc, strach, smutek)" },
              { tytul: "Nikt nie jest malutki", autor: "Mo Willems", wiek: "4+", opis: "O roznicy wielkosci i sile — duze ilustracje, krotki tekst" },
              { tytul: "Kiedy jestem smutny", autor: "Trace Moroney", wiek: "3+", opis: "Seria Kiedy jestem... — konkretne emocje w dostepnym formacie" },
            ].map((k) => (
              <div key={k.tytul} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{k.tytul}</div>
                  <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 px-2 py-0.5 rounded-full">{k.wiek}</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{k.autor}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{k.opis}</div>
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
                q: "Od kiedy rozmawiać z dzieckiem o emocjach?",
                a: "Od urodzenia — poprzez nazywanie emocji przy codziennych sytuacjach. Formalniejsze rozmowy o trudnych emocjach są możliwe już od ok. 3. roku życia.",
              },
              {
                q: "Co zrobić, gdy dziecko nie chce rozmawiać o emocjach?",
                a: "Nie wymuszaj. Zaproponuj inne formy wyrazu: rysunek, laleczki, zabawę w udawanie. Przeczytaj razem książkę o bohaterze z podobnym uczuciem i zacznij od pytania o bohatera — nie o dziecko.",
              },
              {
                q: "Jak książki pomagają w rozmowach o emocjach?",
                a: "Literatura daje bezpieczny dystans — dziecko rozmawia o bohaterze, nie bezpośrednio o sobie. Zmniejsza to opór i wstyd, a jednocześnie umożliwia prawdziwe przetwarzanie emocji.",
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
        <section className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Chcesz lepiej rozmawiać z dzieckiem o emocjach?</h2>
          <p className="text-pink-100 mb-6">
            Skontaktuj się z nami — pomożemy dobrać odpowiednie narzędzia
            i materiały biblioterapeutyczne dla Twojej rodziny.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-pink-700 font-bold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors"
          >
            Umów konsultację
          </Link>
        </section>
      </article>
    </Layout>
  );
}
