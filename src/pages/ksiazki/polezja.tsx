import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PolezjaPage() {
  return (
    <>
      <SEO
        title="Połezja. O niezwykłej mocy łez - Judyta Nadziejko-Walter | Książki do zadań specjalnych"
        description="Poruszające historie opowiedziane wierszem przez różne łzy. Książka o emocjach, która uczy akceptacji płaczu i zrozumienia mocy łez."
        image="/uploads/polezja-o-niezwyklej-mocy-lezokładka.jpg"
      />
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link
            href="/ksiazki"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            ← Powrót do wszystkich książek
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <Image
                src="/uploads/polezja-o-niezwyklej-mocy-lezokładka.jpg"
                alt="Okładka książki Połezja. O niezwykłej mocy łez"
                width={600}
                height={800}
                className="w-full rounded-lg shadow-2xl"
                priority
              />
            </div>

            <div>
              <div className="mb-6">
                <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-2">
                  Albus
                </p>
                <h1 className="text-4xl font-bold mb-4">
                  Połezja. O niezwykłej mocy łez
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Judyta Nadziejko-Walter
                </p>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed">
                  "Połezja. O niezwykłej mocy łez" to zaczerpnięte z dziecięcego życia poruszające historie opowiedziane wierszem przez różne łzy – między innymi szczęścia, złości, współczucia oraz spełnienia.
                </p>
                <p className="leading-relaxed">
                  Wiersze przeplatają się z wieloma informacjami, ciekawostkami i skojarzeniami dotyczącymi świata łez. Lektura tej książki to wzruszająca dla dziecka i rodzica wędrówka po emocjonalnych sytuacjach, która uzmysławia, jak wiele zawdzięczamy łzom. Nie trzeba się ich wstydzić. Warto je zaakceptować, zrozumieć i… polubić.
                </p>
                <p className="leading-relaxed">
                  Książka uzupełniona jest o informacje dotyczące łez. Czytelnik dowie się z niej, jak łzy wyglądają pod mikroskopem, gdzie mieszkają, jak powstają, z czego się składają i dlaczego nie zawsze wędrują tą samą drogą. A najważniejsze: przekona się, że płaczą wszyscy, nie tylko chłopaki i dziewczyny, lecz także krokodyle i słonie!
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg mb-4">Szczegóły książki</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">ISBN</p>
                    <p className="font-medium">978-83-67085-31-1</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Format</p>
                    <p className="font-medium">21 x 27,5 cm</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Liczba stron</p>
                    <p className="font-medium">56</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Oprawa</p>
                    <p className="font-medium">Twarda</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Wiek</p>
                    <p className="font-medium">5+</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Ilustracje</p>
                    <p className="font-medium">Judyta Nadziejko-Walter</p>
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="https://tusieczyta.pl/pl/zapowiedzi/1478-polezja-o-niezwyklej-mocy-lez-978836708531.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" size="lg">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Kup książkę
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Ilustracje z książki</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.32.31.png"
                  alt="Ilustracja z książki Połezja - strona 1"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                />
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.32.40.png"
                  alt="Ilustracja z książki Połezja - strona 2"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                />
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.32.47.png"
                  alt="Ilustracja z książki Połezja - strona 3"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">O autorce i ilustratorce</h2>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Judyta Nadziejko-Walter</h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="leading-relaxed">
                  Judyta Nadziejko-Walter to autorka i ilustratorka książek dla dzieci, która w swojej twórczości łączy piękno poezji z głębokim zrozumieniem dziecięcych emocji. Jej unikalne podejście polega na personifikacji uczuć i stanów emocjonalnych, dzięki czemu dzieci mogą lepiej rozpoznać i zaakceptować własne emocje.
                </p>
                <p className="leading-relaxed">
                  W "Połezji" autorka nie tylko pisze o łzach, ale również samodzielnie projektuje i ilustruje książkę, tworząc spójną, wzruszającą całość. Jej wrażliwość na dziecięce potrzeby sprawia, że książka jest jednocześnie edukacyjna i terapeutyczna, pomagając najmłodszym zrozumieć, że płacz jest naturalny i potrzebny.
                </p>
                <p className="leading-relaxed">
                  Dzięki połączeniu poezji, ilustracji i wiedzy naukowej, Judyta tworzy książki, które pozostają z czytelnikami na długo, ucząc empatii i akceptacji własnych emocji.
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Dlaczego warto przeczytać?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Poetycka forma</h3>
                  <p className="text-muted-foreground">
                    Wiersze opowiedziane głosem różnych łez sprawiają, że treść jest łatwa do zapamiętania i wzruszająca.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Akceptacja emocji</h3>
                  <p className="text-muted-foreground">
                    Uczy dzieci, że płacz jest naturalny i nie trzeba się go wstydzić – płaczą wszyscy, nawet zwierzęta.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wiedza o łzach</h3>
                  <p className="text-muted-foreground">
                    Zawiera fascynujące informacje naukowe: jak łzy powstają, z czego się składają i jak wyglądają pod mikroskopem.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Piękne ilustracje</h3>
                  <p className="text-muted-foreground">
                    Autorskie ilustracje Judyty Nadziejko-Walter uzupełniają poetyckie historie, tworząc spójną, wzruszającą całość.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Odkryj więcej książek</h2>
            <Button asChild size="lg" variant="outline">
              <Link href="/ksiazki">
                <BookOpen className="mr-2 h-5 w-5" />
                Zobacz wszystkie książki
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
}