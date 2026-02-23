import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, BookOpen, Calendar } from "lucide-react";

export default function KaluzyskoPage() {
  return (
    <>
      <SEO
        title="Kałużysko - Książka o depresji dziecięcej | Anna Augustyniak"
        description="Delikatna opowieść o depresji dziecka widziana oczami młodszego rodzeństwa. Książka pomocna w rozmowach o trudnych emocjach i chorobie psychicznej. Wiek: 5+"
        image="/uploads/kaluzysko-cover.jpg"
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Book Cover */}
              <div className="relative">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:sticky lg:top-8">
                  <Image
                    src="/uploads/kaluzysko-cover.jpg"
                    alt="Okładka książki Kałużysko - Anna Augustyniak"
                    fill
                    className="object-contain rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-primary mb-2">
                    Seria: Albus
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Kałużysko
                  </h1>
                  <p className="text-xl text-muted-foreground mb-2">
                    Anna Augustyniak
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ilustracje: Kasia Augustyniak
                  </p>
                </div>

                <p className="text-lg leading-relaxed">
                  Historia sześcioletniego Kuby, którego starszy brat Emil pewnego
                  dnia „rozlewa się jak kałuża". Delikatna i wzruszająca opowieść
                  o depresji dziecięcej widziana oczami młodszego rodzeństwa,
                  które próbuje zrozumieć chorobę bliskiej osoby.
                </p>

                {/* Book Info Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="flex items-start gap-3 p-4">
                      <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">ISBN</p>
                        <p className="text-sm text-muted-foreground">
                          978-83-67085-04-5
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-3 p-4">
                      <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Wiek</p>
                        <p className="text-sm text-muted-foreground">5+</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Technical Details */}
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Oprawa:</span>
                      <span className="font-medium">Twarda</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Liczba stron:</span>
                      <span className="font-medium">64</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Format:</span>
                      <span className="font-medium">14,8 x 21 cm</span>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Button */}
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href="https://tusieczyta.pl/pl/albus/960-kaluzysko-9788367085045.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Zamów teraz w sklepie Albus
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <Separator className="container mx-auto" />

          {/* About the Book */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                O książce
              </h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg leading-relaxed">
                  Gdy masz sześć lat, znasz już swoje zasady i starasz się, aby
                  każdy dzień był pełen radości. Wiesz, czego nie lubisz – na
                  przykład zieleniny w każdej formie. Za to uwielbiasz złociste
                  naleśniki z wysmażonymi jabłkami. Życie toczy się swoim rytmem,
                  aż pewnego dnia wszystko się zmienia.
                </p>

                <p className="text-lg leading-relaxed">
                  Kiedy Twój starszy brat nagle „rozlewa się w przedpokoju jak
                  kałuża", musisz nauczyć się nowych zasad, aby odnaleźć się w tej
                  sytuacji. Jak pomóc komuś bliskiemu? Jak samemu poradzić sobie z
                  trudnymi emocjami?
                </p>

                <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-lg font-medium mb-4">
                    „Kałużysko" to historia o depresji dziecięcej oraz o tym, jak
                    cała rodzina wspiera ukochaną osobę w chorobie.
                  </p>
                  <p className="text-base leading-relaxed">
                    Kuba, obserwując swojego brata Emila, uczy się rozpoznawać
                    własne uczucia – zarówno te trudne, jak i te przynoszące ulgę.
                    Dzięki prostej, ale sugestywnej metaforze, książka pokazuje,
                    czym jest depresja z perspektywy dziecka, które stara się
                    zrozumieć chorobę bliskiej osoby.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Dla kogo jest ta książka?
                </h3>

                <p className="text-lg leading-relaxed">
                  „Kałużysko" stwarza przestrzeń do szczerych rozmów z młodymi
                  czytelnikami o naturze depresji, sposobach jej leczenia oraz o
                  rozumieniu własnych emocji. Opowieść nie oferuje gotowych
                  odpowiedzi – zamiast tego zachęca do wspólnego zastanowienia się
                  nad tematem i rozmowy o uczuciach.
                </p>

                <p className="text-lg leading-relaxed">
                  To książka zarówno dla dzieci przeżywających depresję, jak i dla
                  ich rodzeństwa, rodziców i opiekunów, którzy chcą lepiej
                  zrozumieć tę chorobę i towarzyszyć dziecku w trudnych chwilach.
                </p>
              </div>
            </div>
          </section>

          <Separator className="container mx-auto" />

          {/* Illustrations Gallery */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Zajrzyj do środka
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={`/uploads/kaluzysko${num}.jpg`}
                    alt={`Ilustracja ${num} z książki Kałużysko`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <Separator className="container mx-auto" />

          {/* CTA Section */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Rozpocznij rozmowę o depresji
              </h2>
              <p className="text-lg text-muted-foreground">
                Ta książka to klucz do szczerych rozmów z dziećmi o trudnych
                emocjach i chorobie psychicznej. Wspieraj, towarzysz, rozumiej.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild size="lg">
                  <a
                    href="https://tusieczyta.pl/pl/albus/960-kaluzysko-9788367085045.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Zamów teraz w sklepie Albus
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/ksiazki">Wszystkie książki</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}