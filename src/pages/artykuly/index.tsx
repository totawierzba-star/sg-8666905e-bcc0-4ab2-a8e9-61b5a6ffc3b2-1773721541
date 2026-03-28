import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookOpen, Lightbulb, Brain, Heart, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Biblioterapia przy rozstaniu rodziców — jak wspierać dziecko książką?",
    excerpt: "Jak biblioterapia pomaga dzieciom przeżyć rozstanie rodziców? Polecane książki, pytania do rozmowy i wskazówki dla rodziców w trakcie i po rozstaniu.",
    author: "Redakcja",
    date: "28 marca 2026",
    image: "/uploads/biblioterapia-przy-rozstaniu-rodzicow-miniatura.jpg",
    slug: "biblioterapia-przy-rozstaniu-rodzicow",
    category: "Terapia",
  },
  {
    title: "Biblioterapia a lęk szkolny — jak książki pomagają dzieciom?",
    excerpt: "Lęk szkolny dotyka co piąte dziecko. Sprawdź, jak biblioterapia pomaga przepracować strach przed szkołą, sprawdzianami i odrzuceniem rówieśniczym.",
    author: "Redakcja",
    date: "28 marca 2026",
    image: "/uploads/biblioterapia-a-lek-szkolny-miniatura.jpg",
    slug: "biblioterapia-a-lek-szkolny",
    category: "Terapia",
  },
  {
    title: "Jak wybrać książkę terapeutyczną? Kryteria doboru w biblioterapii",
    excerpt: "Praktyczny przewodnik po kryteriach wyboru książek terapeutycznych dla dzieci, młodzieży i dorosłych. Czym kierować się przy doborze lektury w biblioterapii?",
    author: "Redakcja",
    date: "28 marca 2026",
    image: "/uploads/jak-wybrac-ksiazke-terapeutyczna-miniatura.jpg",
    slug: "jak-wybrac-ksiazke-terapeutyczna",
    category: "Przewodnik",
  },
  {
    title: "Biblioterapia dla nastolatków — jak książki wspierają młodzież?",
    excerpt: "Jak biblioterapia pomaga nastolatkom radzić sobie z kryzysami tożsamości, presją rówieśniczą, depresją i lękiem? Praktyczny przewodnik dla rodziców, nauczycieli i terapeutów.",
    author: "Redakcja",
    date: "28 marca 2026",
    image: "/uploads/biblioterapia-dla-nastolatkow-miniatura.jpg",
    slug: "biblioterapia-dla-nastolatkow",
    category: "Przewodnik",
  },
  {
    title: "Biblioterapia w szkole podstawowej — poradnik dla nauczycieli",
    excerpt: "Jak wdrożyć biblioterapię w szkole podstawowej? Praktyczny poradnik dla nauczycieli, pedagogów i bibliotekarzy — klasy 1–8, metody pracy, scenariusze i polecane książki.",
    author: "Redakcja",
    date: "28 marca 2026",
    image: "/uploads/biblioterapia-w-szkole-podstawowej-miniatura.jpg",
    slug: "biblioterapia-w-szkole-podstawowej",
    category: "Praktyka",
  },
  {
    title: "Biblioterapia w przedszkolu — jak prowadzić zajęcia z najmłodszymi?",
    excerpt: "Praktyczny przewodnik dla nauczycieli i wychowawców: jak prowadzić zajęcia biblioterapeutyczne z dziećmi 3–6 lat. Struktura sesji, pytania, aktywności i polecane książki.",
    author: "Redakcja",
    date: "28 marca 2026",
    image: "/uploads/biblioterapia-w-przedszkolu-miniatura.jpg",
    slug: "biblioterapia-w-przedszkolu",
    category: "Praktyka",
  },
  {
    title: "Biblioterapia dla dzieci — jak książki pomagają najmłodszym?",
    excerpt: "Dlaczego bajka o smutnym misiu może pomóc dziecku przeżyć przeprowadzkę? Kompletny przewodnik o biblioterapii dziecięcej — mechanizmy, korzyści, wiek i wskazówki dla rodziców.",
    author: "Redakcja",
    date: "28 marca 2026",
    image: "/uploads/biblioterapia-dla-dzieci-miniatura.jpg",
    slug: "biblioterapia-dla-dzieci",
    category: "Przewodnik",
  },
  {
    title: "Książka jako narzędzie terapeutyczne — dlaczego literatura leczy?",
    excerpt: "Co sprawia, że słowa na stronie mogą zmieniać nasze emocje i zachowania? Neurobiologia czytania, mechanizmy psychologiczne i dowody naukowe wyjaśniające leczniczą moc literatury.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/ksiazka-jako-narzedzie-terapeutyczne-miniatura.jpg",
    slug: "ksiazka-jako-narzedzie-terapeutyczne",
    category: "Edukacja",
  },
  {
    title: "Mity i fakty o biblioterapii — weryfikacja popularnych przekonań",
    excerpt: "Czy biblioterapia to tylko czytanie bajek? Czy zastępuje psychoterapię? Sprawdzamy 10 popularnych mitów o biblioterapii i konfrontujemy je z badaniami naukowymi.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/mity-i-fakty-o-biblioterapii-miniatura.jpg",
    slug: "mity-i-fakty-o-biblioterapii",
    category: "Edukacja",
  },
  {
    title: "Najważniejsze pojęcia w biblioterapii — słownik dla początkujących",
    excerpt: "Identyfikacja, katharsis, wgląd, bajkoterapia, biblioterapeuta — wszystkie kluczowe terminy biblioterapii wyjaśnione prostym językiem. Słownik dla rodziców, nauczycieli i terapeutów.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/slownik-pojec-biblioterapii-miniatura.jpg",
    slug: "slownik-pojec-biblioterapii",
    category: "Edukacja",
  },
  {
    title: "Biblioterapia w Polsce — stan obecny i perspektywy rozwoju",
    excerpt: "Jak wygląda biblioterapia w Polsce dziś? Historia, instytucje, szkolenia, wydawcy i wyzwania stojące przed tą dziedziną. Kompletny przegląd dla profesjonalistów.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/biblioterapia-w-polsce-miniatura.jpg",
    slug: "biblioterapia-w-polsce",
    category: "Edukacja",
  },
  {
    title: "Czym jest identyfikacja, katharsis i wgląd w biblioterapii?",
    excerpt: "Identyfikacja, projekcja, katharsis i wgląd — cztery mechanizmy psychologiczne przez które literatura leczy. Wyjaśniamy każdy z przykładami z konkretnych książek.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/identyfikacja-katharsis-wglad-miniatura.jpg",
    slug: "identyfikacja-katharsis-wglad-biblioterapia",
    category: "Edukacja",
  },
  {
    title: "Biblioterapia indywidualna vs. grupowa — porównanie",
    excerpt: "Czym różni się biblioterapia indywidualna od grupowej? Zalety, ograniczenia i wskazania każdej formy — która będzie lepsza w Twojej sytuacji?",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/biblioterapia-indywidualna-vs-grupowa-miniatura.jpg",
    slug: "biblioterapia-indywidualna-vs-grupowa",
    category: "Przewodnik",
  },
  {
    title: "Ile trwa biblioterapia i jak wygląda sesja?",
    excerpt: "Jak wygląda sesja biblioterapeutyczna krok po kroku? Ile trwa, co się dzieje przed, w trakcie i po lekturze — przewodnik dla rodziców, nauczycieli i terapeutów.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/jak-wyglada-sesja-miniatura.jpg",
    slug: "jak-wyglada-sesja-biblioterapii",
    category: "Praktyka",
  },
  {
    title: "Dla kogo jest biblioterapia? Wskazania i przeciwwskazania",
    excerpt: "Dzieci, młodzież, dorośli czy seniorzy? Poznaj wskazania biblioterapii według grup wiekowych i sytuacji życiowych oraz kiedy potrzebna jest pomoc specjalisty.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/dla-kogo-jest-biblioterapia-miniatura.jpg",
    slug: "dla-kogo-jest-biblioterapia",
    category: "Przewodnik",
  },
  {
    title: "Czy biblioterapia jest skuteczna? Przegląd badań naukowych",
    excerpt: "Co mówią metaanalizy i badania kliniczne? Sprawdź naukowe dowody skuteczności biblioterapii w depresji, lęku i pracy z dziećmi.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/czy-biblioterapia-jest-skuteczna-miniatura.jpg",
    slug: "czy-biblioterapia-jest-skuteczna",
    category: "Edukacja",
  },
  {
    title: "Historia biblioterapii — od starożytności do współczesności",
    excerpt: "Od egipskich kapłanów i Arystotelesa przez XIX-wieczne szpitale psychiatryczne aż do współczesnych badań naukowych. Poznaj pełną historię biblioterapii.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/historia-biblioterapii-miniatura.jpg",
    slug: "historia-biblioterapii",
    category: "Edukacja",
  },
  {
    title: "Co to jest biblioterapia? Definicja, historia i zastosowanie",
    excerpt: "Czym jest biblioterapia? Poznaj definicję, historię od starożytności do dziś i konkretne zastosowania tej metody, która używa książek do wspierania zdrowia emocjonalnego.",
    author: "Redakcja",
    date: "27 marca 2026",
    image: "/uploads/co-to-jest-biblioterapia-miniatura.jpg",
    slug: "co-to-jest-biblioterapia",
    category: "Edukacja",
  },
  {
    title: "Płacz i łzy - niezwykła moc emocji. Jak rozmawiać z dzieckiem?",
    excerpt: "Odkryj niezwykłą moc łez! Dowiedz się, dlaczego płacz jest zdrowy, jakie są rodzaje łez i jak pomóc dziecku zrozumieć, że wyrażanie emocji to siła, nie słabość.",
    category: "Emocje" as const,
    image: "/uploads/polezja-o-niezwyklej-mocy-lezokładka.jpg",
    date: "7 marca 2026",
    slug: "placz-i-lzy-polezja",
    href: "/artykuly/placz-i-lzy-polezja"
  },
  {
    title: "Jak rozmawiać z dzieckiem o utracie pracy rodzica? Przewodnik z książką Mrówki",
    excerpt: "Praktyczny przewodnik dla rodziców: jak wyjaśnić dziecku kryzys zawodowy rodzica i budować poczucie bezpieczeństwa w trudnym czasie. Metafora mrówek z książki.",
    date: "7 marca 2026",
    category: "Terapia",
    slug: "jak-rozmawiac-o-utracie-pracy-mrowki",
    image: "/uploads/okłdkamrowki.jpg",
  },
  {
    title: "Jak pomóc dziecku radzić sobie z trudnymi emocjami? Przewodnik dla rodziców",
    excerpt: "Odkryj, jak baśń 'Tkaczka Chmur' pomaga dzieciom nazywać i przepracowywać trudne emocje: smutek, gniew i rozpacz.",
    date: "7 marca 2026",
    category: "Emocje",
    slug: "trudne-emocje-tkaczka-chmur",
    image: "/uploads/tkaczka-chmur-okładka.jpg",
  },
  {
    title: "Nadpobudliwość i ADHD u dzieci. Gdy dom zaczyna skakać",
    excerpt: "Praktyczny przewodnik dla rodziców i pedagogów o wspieraniu dzieci z nadpobudliwością psychoruchową. Jak książka 'Skok' pomaga nazwać niewidoczne wyzwania?",
    date: "7 marca 2026",
    category: "Terapia",
    slug: "nadpobudliwosc-adhd-skok",
    image: "/uploads/skokokładka.jpg",
  },
  {
    title: "Gdy dziecko rozlewa się z bezsilności. Jak rozmawiać o depresji dziecięcej?",
    excerpt: "Metafora 'rozlania się' jako sposób na rozmowę o depresji i kryzysie emocjonalnym u dzieci. Praktyczny przewodnik oparty na książce 'Kałużysko'.",
    image: "/uploads/kaluzyskoOkładka.jpg",
    slug: "jak-rozmawiac-o-depresji-dzieciecej-kaluzysko",
    category: "Terapia",
  },
  {
    title: "Jak działa biblioterapia? Mechanizmy terapeutycznego działania książek",
    excerpt: "Poznaj cztery kluczowe mechanizmy biblioterapii: identyfikację, projekcję, katharsis i wgląd. Dowiedz się, dlaczego czytanie leczy.",
    author: "Redakcja",
    date: "4 marca 2026",
    image: "/uploads/jak-dziala-biblioterapia-miniatura.jpg",
    slug: "jak-dziala-biblioterapia",
    category: "Edukacja",
  },
  {
    title: "Rodzaje biblioterapii — kliniczna, rozwojowa i instytucjonalna",
    excerpt: "Poznaj różnice między biblioterapią kliniczną, rozwojową i instytucjonalną. Sprawdź, która forma wsparcia będzie najlepsza dla Twojego dziecka.",
    author: "Redakcja",
    date: "4 marca 2026",
    image: "/uploads/rodzaje-biblioterapii-miniatura.jpg",
    slug: "rodzaje-biblioterapii",
    category: "Edukacja",
  },
  {
    title: "Biblioterapia a psychoterapia — czym się różnią?",
    excerpt: "Kiedy wystarczy wspólne czytanie, a kiedy konieczna jest pomoc specjalisty? Przewodnik dla rodziców pomagający podjąć właściwą decyzję.",
    author: "Redakcja",
    date: "4 marca 2026",
    image: "/uploads/biblioterapia-vs-psychoterapia-miniatura.jpg",
    slug: "biblioterapia-vs-psychoterapia",
    category: "Przewodnik",
  },
  {
    title: "Jak oswoić zapominanie? Poradnik do pracy z książką 'Zielona dziewczynka'",
    excerpt: "Praktyczny poradnik dla rodziców: jak rozmawiać z dzieckiem o chorobie Alzheimera i demencji przy pomocy książki 'Zielona dziewczynka'.",
    author: "Redakcja",
    date: "4 marca 2026",
    image: "/uploads/zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bylo.jpg",
    slug: "jak-oswoic-zapominanie-zielona-dziewczynka",
    category: "Terapia",
  },
  {
    title: "Bajkoterapia dla Dzieci: Kompletny Przewodnik [2026]",
    excerpt: "Dowiedz się, jak bajkoterapia pomaga dzieciom radzić sobie z trudnymi emocjami. Praktyczny przewodnik z FAQ i przykładami.",
    author: "Redakcja",
    date: "26 lutego 2026",
    image: "/uploads/bajkoterapia-miniatura.jpg",
    slug: "bajkoterapia",
    category: "Przewodnik",
  },
  {
    title: "Książki w terapii – jak wykorzystać literaturę w pracy z dziećmi",
    excerpt: "Biblioterapia to potężne narzędzie. Dowiedz się, jak książki mogą wspierać proces terapeutyczny i pomagać w przepracowywaniu emocji.",
    author: "Redakcja",
    date: "15 stycznia 2026",
    image: "/uploads/ksiazki-w-terapii-miniatura.jpg",
    slug: "ksiazki-w-terapii",
    category: "Terapia",
  },
  {
    title: "Jak rozmawiać z dzieckiem o stracie? Historia Zosi",
    excerpt: "Prawdziwa historia 7-letniej dziewczynki, która dzięki książce 'Żaba. Mała opowieść o żałobie' nauczyła się rozmawiać o śmierci babci.",
    author: "Anna Kowalska",
    date: "20 stycznia 2026",
    image: "/zaba_ilustracje.jpg",
    slug: "historia-zosi-i-ksiazki-zaba",
    category: "Praktyka",
  },
  {
    title: "Muzeum Miłości – jak pomóc dziecku zrozumieć rozwód",
    excerpt: "Książka 'Czasami szczęśliwi rodzice mieszkają oddzielnie' prowadzi dzieci przez Muzeum Miłości, ucząc, że rozwód to nie ich wina.",
    author: "Redakcja",
    date: "5 lutego 2026",
    image: "/uploads/Albus_Czasami_szcze_s_liwi.jpg",
    slug: "muzeum-milosci-rozwod-rodzicow",
    category: "Terapia",
  },
  {
    title: "Jak rozmawiać z dzieckiem o niepełnosprawności?",
    excerpt: "Książka 'Nie znajdziesz mnie po śladach stóp' to szczera rozmowa o życiu na wózku. Wielowymiarowa opowieść o różnorodności i empatii.",
    author: "Redakcja",
    date: "5 lutego 2026",
    image: "/uploads/978-83-67085-30-4_Nie_znajdziesz_mnie_po_s_ladach_sto_p_ALBUS.jpg",
    slug: "jak-rozmawiac-o-niepelnosprawnosci",
    category: "Edukacja",
  },
  {
    title: "Nowy artykuł o terapii z dziećmi",
    excerpt: "Praktyczne porady i wskazówki dla rodziców i terapeutów, jak efektywnie prowadzić terapię z dziećmi.",
    author: "Redakcja",
    date: "10 marca 2026",
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
    slug: "nowy-artikel-terapia-z-dziecmi",
    category: "Terapia",
  },
];

const categoryColors: Record<string, string> = {
  "Edukacja": "from-blue-500 to-indigo-500",
  "Terapia": "from-rose-500 to-pink-500",
  "Przewodnik": "from-amber-500 to-orange-500",
  "Praktyka": "from-green-500 to-emerald-500",
  "Emocje": "from-purple-500 to-violet-500",
};

const categoryAccent: Record<string, string> = {
  "Edukacja": "text-blue-600 dark:text-blue-400",
  "Terapia": "text-rose-600 dark:text-rose-400",
  "Przewodnik": "text-amber-600 dark:text-amber-400",
  "Praktyka": "text-green-600 dark:text-green-400",
  "Emocje": "text-purple-600 dark:text-purple-400",
};

const categories = [
  { name: "Wszystkie", icon: BookOpen, count: articles.length },
  { name: "Edukacja", icon: GraduationCap, count: articles.filter(a => a.category === "Edukacja").length },
  { name: "Terapia", icon: Heart, count: articles.filter(a => a.category === "Terapia").length },
  { name: "Przewodnik", icon: Lightbulb, count: articles.filter(a => a.category === "Przewodnik").length },
  { name: "Praktyka", icon: Brain, count: articles.filter(a => a.category === "Praktyka").length },
];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const filteredArticles = activeCategory === "Wszystkie"
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <Layout>
      <SEO
        title="Artykuły - Książki do zadań specjalnych"
        description="Praktyczne porady, ekspercka wiedza i inspiracje dla rodziców, nauczycieli i terapeutów. Jak rozmawiać z dziećmi o trudnych tematach?"
        url="https://biblioterapia.org/artykuly"
      />

      <div className="bg-gradient-hero py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Artykuły
            </h1>
            <p className="text-lg text-muted-foreground">
              Praktyczne porady, ekspercka wiedza i inspiracje dla rodziców,
              nauczycieli i terapeutów
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === category.name
                    ? "border-accent bg-accent text-white"
                    : "border-border hover:border-accent hover:text-accent bg-background"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className={`text-xs ${activeCategory === category.name ? "text-white/80" : "text-muted-foreground"}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const href = (article as { href?: string }).href ?? `/artykuly/${article.slug}`;
              const gradient = categoryColors[article.category] ?? "from-slate-500 to-gray-500";
              const accent = categoryAccent[article.category] ?? "text-slate-600";
              return (
                <Link key={article.slug} href={href} className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                    <div className={`bg-gradient-to-r ${gradient} p-5 text-white`}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">
                        {article.category}
                      </div>
                      <h3 className="text-lg font-bold leading-snug group-hover:scale-[1.02] transition-transform">
                        {article.title}
                      </h3>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 flex-1 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        {article.date && <span>{article.date}</span>}
                        <div className={`flex items-center gap-1 font-medium group-hover:gap-2 transition-all ${accent}`}>
                          <span>Czytaj więcej</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}