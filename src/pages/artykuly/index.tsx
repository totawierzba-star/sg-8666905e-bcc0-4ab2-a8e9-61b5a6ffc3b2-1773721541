import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { BookOpen, Lightbulb } from "lucide-react";

const articles = [
  {
    title: "Bajkoterapia dla Dzieci: Kompletny Przewodnik [2026]",
    excerpt:
      "Dowiedz się, jak bajkoterapia pomaga dzieciom radzić sobie z trudnymi emocjami. Praktyczny przewodnik z FAQ, przykładami i wskazówkami ekspertów.",
    author: "Redakcja",
    date: "26 lutego 2026",
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
    slug: "bajkoterapia",
    category: "Przewodnik",
  },
  {
    title: "Książki w terapii – jak wykorzystać literaturę w pracy z dziećmi i dorosłymi",
    excerpt:
      "Biblioterapia to potężne narzędzie w rękach terapeutów, pedagogów i rodziców. Dowiedz się, jak książki mogą wspierać proces terapeutyczny i pomagać w przepracowywaniu trudnych emocji.",
    author: "Redakcja",
    date: "15 stycznia 2026",
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
    slug: "ksiazki-w-terapii",
    category: "Terapia",
  },
  {
    title: "Jak rozmawiać z dzieckiem o stracie? Historia Zosi i książki Żaba",
    excerpt:
      "Praktyczny przykład wykorzystania książki 'Żaba. Mała opowieść o żałobie' w pracy z 7-letnią dziewczynką po stracie babci. Dowiedz się, jak książka pomogła rodzinie przepracować żałobę.",
    author: "Anna Kowalska",
    date: "20 stycznia 2026",
    image: "/zaba_ilustracje.jpg",
    slug: "historia-zosi-i-ksiazki-zaba",
    category: "Praktyka",
  },
  {
    title: "Muzeum Miłości – jak pomóc dziecku zrozumieć rozwód rodziców",
    excerpt:
      "Książka 'Czasami szczęśliwi rodzice mieszkają oddzielnie' prowadzi dzieci przez symboliczne Muzeum Miłości, gdzie uczą się, że rozstanie rodziców nie jest ich winą i że miłość nie znika.",
    author: "Redakcja",
    date: "5 lutego 2026",
    image: "/uploads/Albus_Czasami_szcze_s_liwi.jpg",
    slug: "muzeum-milosci-rozwod-rodzicow",
    category: "Terapia",
  },
  {
    title: "Jak rozmawiać z dzieckiem o niepełnosprawności? Ptaki z kopertami",
    excerpt:
      "Książka 'Nie znajdziesz mnie po śladach stóp' Sylwii Błach to szczera rozmowa osoby poruszającej się na wózku z 6-letnią Dobrawą. Wielowymiarowa opowieść o życiu, różnorodności i empatii.",
    author: "Redakcja",
    date: "5 lutego 2026",
    image: "/uploads/978-83-67085-30-4_Nie_znajdziesz_mnie_po_s_ladach_sto_p_ALBUS.jpg",
    slug: "jak-rozmawiac-o-niepelnosprawnosci",
    category: "Edukacja",
  },
];

const categories = [
  { name: "Wszystkie", icon: BookOpen, count: articles.length },
  { name: "Terapia", icon: Lightbulb, count: 2 },
  { name: "Praktyka", icon: BookOpen, count: 1 },
  { name: "Edukacja", icon: BookOpen, count: 1 },
];

export default function ArticlesPage() {
  return (
    <Layout>
      <SEO
        title="Artykuły - Książki do zadań specjalnych"
        description="Praktyczne porady, ekspercka wiedza i inspiracje dla rodziców, nauczycieli i terapeutów. Jak rozmawiać z dziećmi o trudnych tematach?"
        url="https://ksiazki-do-zadan-specjalnych.pl/artykuly"
      />

      <div className="bg-gradient-hero py-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}