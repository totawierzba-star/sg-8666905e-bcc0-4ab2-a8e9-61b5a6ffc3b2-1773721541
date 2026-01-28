import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/BookCard";
import { BookHeart, Users, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const books = [
  {
    title: "Żaba",
    subtitle: "Mała opowieść o żałobie",
    description:
      "Delikatna opowieść dla dzieci przeżywających stratę. Pomaga zrozumieć emocje i oswaja temat śmierci w ciepły, bezpieczny sposób.",
    image: "/uploads/image_9a5da92d-e36d-4411-aeb7-1acf5de6b236.png",
    slug: "zaba",
    color: "secondary" as const,
  },
  {
    title: "30 znikających trampolin",
    subtitle: "Twórcze pisanie i gra perspektywami",
    description:
      "Innowacyjne ćwiczenia rozwijające kreatywność językową i wyobraźnię. Idealne dla szkół, warsztatów i pracy z dziećmi.",
    image: "/uploads/30-znikajacych-trampolin_okładka.jpg",
    slug: "30-znikajacych-trampolin",
    color: "accent" as const,
  },
  {
    title: "Skąd jestem?",
    subtitle: "O narodzinach i początku życia",
    description:
      "Delikatnie odpowiada na pytania dzieci o to, skąd się biorą. Wspiera rodziców w prowadzeniu otwartych rozmów o ciele i seksualności.",
    image: "/uploads/image_ce6de15f-ac4a-48cd-9f4f-79051de42a21.png",
    slug: "skad-jestem",
    color: "tertiary" as const,
  },
  {
    title: "Czasami szczęśliwi rodzice mieszkają oddzielnie",
    subtitle: "O rozwodzie i nowej rzeczywistości",
    description:
      "Wspiera dzieci przeżywające rozwód rodziców. Pokazuje, że miłość do dziecka pozostaje niezmieniona, nawet gdy rodzina się zmienia.",
    image: "/uploads/image_ab14ee1e-1fad-4e6a-aec8-e181e17c2849.png",
    slug: "czasami-szczesliwi-rodzice",
    color: "primary" as const,
  },
];

const features = [
  {
    icon: BookHeart,
    title: "Z empatią",
    description:
      "Każda książka tworzona jest z głębokim zrozumieniem emocji dzieci i potrzeb rodziców.",
  },
  {
    icon: Users,
    title: "Profesjonalnie",
    description:
      "Oparte na wiedzy psychologicznej i doświadczeniu terapeutycznym, zatwierdzone przez ekspertów.",
  },
  {
    icon: Sparkles,
    title: "Twórczo",
    description:
      "Piękne ilustracje imagiczne historie, które angażują wyobraźnię i otwierają na rozmowę.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Książki do zadań specjalnych - Wspieramy dzieci w trudnych momentach"
        description="Seria terapeutycznych książek dla dzieci o trudnych tematach: żałobie, rozwodzie, seksualności i kreatywności. Z empatią i profesjonalizmem."
        url="https://ksiazki-do-zadan-specjalnych.pl"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Książki do zadań specjalnych
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Seria publikacji wspierających dzieci i rodziców w trudnych
              momentach życia. Rozmawiamy o śmierci, rozwodzie, seksualności i
              emocjach – z ciepłem, empatią i profesjonalizmem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-dark">
                <Link href="/ksiazki">
                  Poznaj książki
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/artykuly">Przeczytaj artykuły</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-lg bg-background hover:bg-background-subtle transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Nasze książki
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Każda książka to starannie przemyślana podróż przez trudny temat,
              z poszanowaniem dziecięcej wrażliwości i rodzicielskich wątpliwości.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <BookCard key={book.slug} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Poznaj nasze artykuły
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Praktyczne porady, ekspercka wiedza i inspiracje dla rodziców,
              nauczycieli i terapeutów. Jak rozmawiać z dziećmi o trudnych
              tematach? Zapraszamy do lektury.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent-dark">
              <Link href="/artykuly">
                Przejdź do artykułów
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}