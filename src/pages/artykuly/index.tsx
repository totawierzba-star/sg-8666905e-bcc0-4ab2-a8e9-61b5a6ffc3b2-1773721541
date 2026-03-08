import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { BookOpen, Lightbulb, Brain, Heart, GraduationCap } from "lucide-react";

const articles = [
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
    title: "Gdy dziecko rozlewa się z bezsilności. Jak rozmawiać o nadpobudliwości i ADHD?",
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
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
    slug: "jak-dziala-biblioterapia",
    category: "Edukacja",
  },
  {
    title: "Rodzaje biblioterapii — kliniczna, rozwojowa i instytucjonalna",
    excerpt: "Poznaj różnice między biblioterapią kliniczną, rozwojową i instytucjonalną. Sprawdź, która forma wsparcia będzie najlepsza dla Twojego dziecka.",
    author: "Redakcja",
    date: "4 marca 2026",
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
    slug: "rodzaje-biblioterapii",
    category: "Edukacja",
  },
  {
    title: "Biblioterapia a psychoterapia — czym się różnią?",
    excerpt: "Kiedy wystarczy wspólne czytanie, a kiedy konieczna jest pomoc specjalisty? Przewodnik dla rodziców pomagający podjąć właściwą decyzję.",
    author: "Redakcja",
    date: "4 marca 2026",
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
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
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
    slug: "bajkoterapia",
    category: "Przewodnik",
  },
  {
    title: "Książki w terapii – jak wykorzystać literaturę w pracy z dziećmi",
    excerpt: "Biblioterapia to potężne narzędzie. Dowiedz się, jak książki mogą wspierać proces terapeutyczny i pomagać w przepracowywaniu emocji.",
    author: "Redakcja",
    date: "15 stycznia 2026",
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
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

const categories = [
  { name: "Wszystkie", icon: BookOpen, count: articles.length },
  { name: "Edukacja", icon: GraduationCap, count: articles.filter(a => a.category === "Edukacja").length },
  { name: "Terapia", icon: Heart, count: articles.filter(a => a.category === "Terapia").length },
  { name: "Przewodnik", icon: Lightbulb, count: articles.filter(a => a.category === "Przewodnik").length },
  { name: "Praktyka", icon: Brain, count: articles.filter(a => a.category === "Praktyka").length },
];

export default function ArticlesPage() {
  return (
    <Layout>
      <SEO
        title="Artykuły - Książki do zadań specjalnych"
        description="Praktyczne porady, ekspercka wiedza i inspiracje dla rodziców, nauczycieli i terapeutów. Jak rozmawiać z dziećmi o trudnych tematach?"
        url="https://ksiazki-do-zadan-specjalnych.pl/artykuly"
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
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors bg-background"
              >
                <category.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs text-muted-foreground">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                href={`/artykuly/${article.slug}`}
                category={article.category}
                image={article.image}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}