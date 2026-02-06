import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Heart, Users, Lightbulb, ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NieZnajdzieszMniePage() {
  return (
    <Layout>
      <SEO
        title="Nie znajdziesz mnie po śladach stóp - Książka o niepełnosprawności dla dzieci"
        description="Szczera opowieść o życiu z niepełnosprawnością ruchową. Sylwia Błach dzieli się swoimi doświadczeniami, ucząc dzieci akceptacji i zrozumienia różnorodności."
        url="https://ksiazki-do-zadan-specjalnych.pl/ksiazki/nie-znajdziesz-mnie"
        image="/uploads/nie-znajdziesz-mnie-po-sladach-stop.jpg"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-secondary/5 to-background py-12 md:py-20">
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
                  src="/uploads/nie-znajdziesz-mnie-po-sladach-stop.jpg"
                  alt="Nie znajdziesz mnie po śladach stóp - okładka"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-6">
                <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  Wiek: 5+
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Nie znajdziesz mnie po śladach stóp
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Autentyczna historia o życiu na wózku inwalidzkim, opowiedziana z ciepłem, humorem i dystansem przez Sylwię Błach. Książka, która uczy dzieci, że niepełnosprawność to tylko jedna z wielu cech każdego z nas.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href="https://albus.poznan.pl/sklep/1463_nie-znajdziesz-mnie-po-sladach-stop"
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
                      <div className="text-2xl font-bold text-secondary mb-1">64</div>
                      <div className="text-sm text-muted-foreground">strony</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold text-secondary mb-1">5+</div>
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
                Szczera rozmowa o niepełnosprawności oczami osoby, która całe życie spędziła na wózku
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Ta wyjątkowa książka powstała z potrzeby serca - by odpowiedzieć na pytania, które dzieci najczęściej zadają, gdy spotykają osobę na wózku inwalidzkim. Sylwia Błach, autorka, która od urodzenia porusza się na wózku, dzieli się swoimi wspomnieniami z dzieciństwa i doświadczeniami z dorosłego życia w sposób przystępny, ciepły i pełen dystansu do własnej sytuacji.
              </p>

              <p className="text-lg leading-relaxed">
                Napisana prostym, zrozumiałym językiem historia kierowana jest do wszystkich dzieci od 5. roku życia - zarówno tych sprawnych ruchowo, jak i tych z różnymi niepełnosprawnościami. To również cenne wsparcie dla rodziców, nauczycieli, pedagogów i psychologów, którzy szukają sposobu na rozmowę o różnorodności i akceptacji.
              </p>

              <div className="bg-secondary-light/30 rounded-lg p-6 my-8">
                <p className="text-lg font-medium italic">
                  "Niepełnosprawność ruchowa nie jest wadą ani atutem – jest po prostu jedną z wielu cech danej osoby, tak jak kolor włosów czy wzrost."
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Sylwia Błach, autorka</p>
              </div>

              <p className="text-lg leading-relaxed">
                Autorka nie ucieka od trudnych tematów. Opowiada o barierach architektonicznych i społecznych, z którymi mierzy się każdego dnia. Jednocześnie pokazuje, że każdy człowiek - bez względu na swoje ograniczenia - ma prawo do samodzielnych decyzji i wpływ na to, jak postrzegają go inni. To ważna lekcja podmiotowości i samostanowienia.
              </p>

              <h3 className="font-serif text-2xl font-semibold mt-8 mb-4">
                Dla kogo jest ta książka?
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <Card className="border-secondary/20">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-secondary mb-3" />
                    <h4 className="font-semibold mb-2">Dzieci sprawne ruchowo</h4>
                    <p className="text-sm text-muted-foreground">
                      Pomaga zrozumieć i zaakceptować różnorodność, uczy empatii i właściwych zachowań wobec osób z niepełnosprawnością.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20">
                  <CardContent className="pt-6">
                    <Heart className="h-8 w-8 text-secondary mb-3" />
                    <h4 className="font-semibold mb-2">Dzieci z niepełnosprawnością</h4>
                    <p className="text-sm text-muted-foreground">
                      Pokazuje, że nie są same, że można żyć pełnią życia i mieć wpływ na swoją przyszłość.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-secondary mb-3" />
                    <h4 className="font-semibold mb-2">Rodzice i opiekunowie</h4>
                    <p className="text-sm text-muted-foreground">
                      Odpowiada na trudne pytania dzieci: "Dlaczego ta pani jeździ na wózku?" i pomaga przeprowadzić tę rozmowę.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20">
                  <CardContent className="pt-6">
                    <BookOpen className="h-8 w-8 text-secondary mb-3" />
                    <h4 className="font-semibold mb-2">Nauczyciele i pedagodzy</h4>
                    <p className="text-sm text-muted-foreground">
                      Wspiera integrację w przedszkolu i szkole, gdy pojawia się dziecko na wózku.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="font-serif text-2xl font-semibold mt-8 mb-4">
                Ćwiczenia dla dzieci
              </h3>

              <p className="text-lg leading-relaxed">
                Ogromnym atutem książki są specjalnie przygotowane ćwiczenia dla najmłodszych czytelników. Ich celem jest pobudzenie kreatywności i zachęta do poszukiwania rozwiązań w sytuacjach, które na pierwszy rzut oka wydają się nie do pokonania. Dzieci uczą się, że każdy problem można rozwiązać, gdy podchodzi się do niego z wyobraźnią i otwartością.
              </p>

              <div className="bg-primary/5 rounded-lg p-6 my-8 border-l-4 border-secondary">
                <Lightbulb className="h-8 w-8 text-secondary mb-3" />
                <h4 className="font-semibold mb-3">Co zyskuje dziecko czytając tę książkę?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Zrozumienie, że niepełnosprawność to tylko jedna z cech człowieka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Naukę empatii i akceptacji różnorodności</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Wiedzę, jak zachować się wobec osoby na wózku</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Świadomość barier, z którymi mierzą się osoby z niepełnosprawnością</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Inspirację do kreatywnego rozwiązywania problemów</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-serif text-2xl font-semibold mt-8 mb-4">
                Ilustracje pełne metafor
              </h3>

              <p className="text-lg leading-relaxed">
                Subtelne, metaforyczne ilustracje Karoliny Jeske stanowią integralną część tej niezwykłej historii. Grafiki nie tylko uzupełniają tekst, ale same opowiadają swoją własną, wielowarstwową narrację, która przemawia do wyobraźni młodych czytelników.
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
                Subtelne ilustracje Karoliny Jeske
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/nie-znajdziesz-mnie-po-sladach-stop_1_.jpg"
                  alt="Ilustracja z książki - strona 1"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/nie-znajdziesz-mnie-po-sladach-stop_2_.jpg"
                  alt="Ilustracja z książki - strona 2"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/nie-znajdziesz-mnie-po-sladach-stop_3_.jpg"
                  alt="Ilustracja z książki - strona 3"
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
                    <BookOpen className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Autorka</div>
                      <div className="text-muted-foreground">Sylwia Błach</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Ilustracje</div>
                      <div className="text-muted-foreground">Karolina Jeske</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Liczba stron</div>
                      <div className="text-muted-foreground">64</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Format</div>
                      <div className="text-muted-foreground">17 x 20 cm</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">ISBN</div>
                      <div className="text-muted-foreground">978-83-67085-30-4</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Wiek</div>
                      <div className="text-muted-foreground">5+</div>
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
              Rozpocznij rozmowę o różnorodności
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ta książka to nie tylko opowieść - to klucz do szczerych rozmów o akceptacji, empatii i prawdziwej integracji.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <a
                  href="https://albus.poznan.pl/sklep/1463_nie-znajdziesz-mnie-po-sladach-stop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5" />
                  Zamów teraz w sklepie Albus
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/artykuly/jak-rozmawiac-o-niepelnosprawnosci">
                  <BookOpen className="mr-2 h-5 w-5" />
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