import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Heart, Users, Home, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CzasamiSzczesliwiRodzicePage() {
  return (
    <Layout>
      <SEO
        title="Czasami szczęśliwi rodzice mieszkają oddzielnie - Książka o rozwodzie dla dzieci"
        description="Delikatna historia dla dzieci o rozstaniu rodziców. Hela i Hektor odkrywają Muzeum Miłości i uczą się, że rodzina może być szczęśliwa w dwóch domach."
        url="https://ksiazki-do-zadan-specjalnych.pl/ksiazki/czasami-szczesliwi-rodzice"
        image="/uploads/okładka_czasami-szczesliwi-rodzice-mieszkaja-oddzielnie_4_.jpg"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/ksiazki">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót do książek
              </Link>
            </Button>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/uploads/okładka_czasami-szczesliwi-rodzice-mieszkaja-oddzielnie_4_.jpg"
                  alt="Czasami szczęśliwi rodzice mieszkają oddzielnie - okładka"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-6">
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  Wiek: 5+
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Czasami szczęśliwi rodzice mieszkają oddzielnie
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Wzruszająca opowieść o Heli i Hektorze, którzy odkrywają, że miłość rodzicielska pozostaje niezmieniona, nawet gdy mama i tata decydują się żyć osobno.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href="https://albus.poznan.pl/sklep/1179_czasami-szczesliwi-rodzice-mieszkaja-oddzielnie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Zamów w sklepie Albus
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#look-inside">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Zajrzyj do środka
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold text-accent mb-1">72</div>
                      <div className="text-sm text-muted-foreground">strony</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold text-accent mb-1">5+</div>
                      <div className="text-sm text-muted-foreground">wiek</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* About Book Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                O książce
              </h2>
              <p className="text-lg text-muted-foreground">
                Przewodnik dla dzieci przez trudne chwile rozstania rodziców
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Gdy Hela i Hektor dowiadują się o decyzji rodziców o rozstaniu, ich świat wywraca się do góry nogami. Jednak los sprawia, że rodzeństwo trafia w niezwykłe miejsce - Muzeum Miłości, gdzie krok po kroku poznają prawdę o miłości dorosłych.
              </p>

              <p className="text-lg leading-relaxed">
                W towarzystwie życzliwej przewodniczki, dzieci przemierzają kolejne komnaty muzeum. Tam odkrywają, że dorośli - mimo całej swojej mądrości - uczą się kochać przez całe życie i nie zawsze im się to udaje. Czasem miłość między partnerami wygasa, ale miłość do dziecka pozostaje na zawsze.
              </p>

              <p className="text-lg leading-relaxed">
                Każda sala muzeum to przestrzeń dla różnych uczuć - zarówno dla ciepłych wspomnień, jak i dla trudnych emocji, których nie da się uniknąć. Młodzi czytelnicy uczą się razem z Helą i Hektorem, że dorosłość bywa skomplikowana, a rodzina - nawet podzielona między dwa domy - zawsze stoi na fundamencie bezwarunkowej miłości rodzicielskiej.
              </p>

              <div className="bg-secondary-light rounded-lg p-6 my-8">
                <p className="text-lg font-medium mb-2">
                  Ta książka pomoże dzieciom:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Zrozumieć, że rozstanie rodziców nie jest ich winą</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Zaakceptować nową sytuację rodzinną</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Otworzyć się na model rodziny w dwóch domach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span>Wyrazić swoje emocje i potrzeby</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Może po przeczytaniu tej historii Twoje dziecko zechce napisać własny list do mamy i taty? To doskonały sposób na rozmowę o uczuciach i rozpoczęcie procesu gojenia.
              </p>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Gallery Section */}
        <section id="look-inside" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-secondary-light/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Zajrzyj do środka
              </h2>
              <p className="text-lg text-muted-foreground">
                Piękne ilustracje Aleksandry Kucharskiej-Cybuch
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/czasami-szczesliwi-rodzice-mieszkaja-oddzielnie_5_.jpg"
                  alt="Ilustracja z książki - strona 1"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/czasami-szczesliwi-rodzice-mieszkaja-oddzielnie_6_.jpg"
                  alt="Ilustracja z książki - strona 2"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Book Details Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
              Szczegóły wydania
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Autorka</div>
                      <div className="text-muted-foreground">Agnieszka Kacprzyk</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Ilustracje</div>
                      <div className="text-muted-foreground">Aleksandra Kucharska-Cybuch</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Oprawa</div>
                      <div className="text-muted-foreground">Twarda</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Format</div>
                      <div className="text-muted-foreground">16,5 x 22,0 cm</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Liczba stron</div>
                      <div className="text-muted-foreground">72</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">ISBN</div>
                      <div className="text-muted-foreground">978-83-67085-11-3</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Pomóż swojemu dziecku zrozumieć trudną sytuację
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ta książka może stać się mostem do szczerych rozmów o uczuciach i nowej rzeczywistości rodzinnej.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <a
                  href="https://albus.poznan.pl/sklep/1179_czasami-szczesliwi-rodzice-mieszkaja-oddzielnie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5" />
                  Zamów teraz w sklepie Albus
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/biblioterapia">
                  <Home className="mr-2 h-5 w-5" />
                  Dowiedz się więcej o biblioterapii
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}