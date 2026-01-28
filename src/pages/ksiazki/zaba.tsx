import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Heart, Users, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ZabaPage() {
  const bookImages = [
    "/uploads/zaba-mala-opowiesc-o-zalobie.jpg",
    "/uploads/zaba-mala-opowiesc-o-zalobie_1_.jpg",
    "/uploads/zaba-mala-opowiesc-o-zalobie_2_.jpg"
  ];

  return (
    <Layout>
      <SEO
        title="Żaba. Mała opowieść o żałobie - Książka dla dzieci 5+"
        description="Czuła opowieść o przepracowywaniu straty i budowaniu więzi z tymi, za którymi tęsknimy. Książka dla dzieci 5+ z ilustracjami Marianny Sztymy."
        image="/uploads/okładka_z_aba.jpg"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Book Cover */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/uploads/okładka_z_aba.jpg"
                  alt="Okładka książki Żaba. Mała opowieść o żałobie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="space-y-6">
              <div className="space-y-3">
                <Badge variant="secondary" className="text-sm">
                  <Heart className="w-3 h-3 mr-1" />
                  Dla dzieci 5+
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Żaba
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Mała opowieść o żałobie
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Delikatna i mądra opowieść o tym, jak przeżywać stratę bliskiej osoby. 
                Książka, która pomaga dzieciom zrozumieć, że żałoba jest naturalną częścią życia, 
                a wszystkie towarzyszące jej emocje są ważne i potrzebne.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Gdzie kupić?
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Zajrzyj do środka
                </Button>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">48 stron</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Format 24×17 cm</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Oprawa twarda</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Full Description */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">O książce</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ta wyjątkowa książka została stworzona z myślą o dzieciach od 5. roku życia, 
                  ich rodzicach, nauczycielach oraz specjalistach pracujących z dziećmi. 
                  Autorka w empatyczny i przemyślany sposób prowadzi narrację, która wspiera 
                  zarówno dzieci, jak i dorosłych w trudnym procesie radzenia sobie ze stratą.
                </p>
                <p>
                  Za pomocą metafory żaby autorka pokazuje dzieciom, że przeżywanie żałoby 
                  jest naturalną i cenną częścią ludzkiego doświadczenia. Zamiast omijać trudny 
                  temat straty, książka wprost nazywa towarzyszące jej uczucia i przekonuje, 
                  że każde z nich ma swoje miejsce i sens. Dzięki temu dzieci mogą zrozumieć, 
                  że warto przepracować swoją żałobę, by odkryć trwałe połączenie z osobami, 
                  których już nie ma obok.
                </p>
                <p>
                  Historia opowiada o dziewczynce przeżywającej śmierć ukochanej babci. 
                  Po stracie w jej życiu pojawia się żaba, która wypełnia całą jej rzeczywistość. 
                  Dziewczynka przestaje dostrzegać przyjaciół, swoje podwórko czy ulubione zabawki – 
                  widzi tylko żabę, która budzi w niej niepokój i irytację. Z czasem między 
                  bohaterką a żałobą rodzi się subtelna więź, która pozwala jej nauczyć się 
                  rozpoznawać i akceptować różnorodne emocje.
                </p>
                <p>
                  Książkę ilustruje <strong>Marianna Sztyma</strong> – ceniona artystka, 
                  której prace zdobyły uznanie w Polsce i na świecie. Wśród jej osiągnięć 
                  znajduje się prestiżowa nagroda BolognaRagazzi Award oraz liczne inne wyróżnienia. 
                  Jej ilustracje doskonale dopełniają delikatny przekaz książki.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* For Whom Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Dla kogo jest ta książka?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Dla dzieci 5+</h3>
                  <p className="text-muted-foreground">
                    Dzieci przeżywające stratę bliskiej osoby lub uczące się rozumieć trudne emocje
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Dla rodziców</h3>
                  <p className="text-muted-foreground">
                    Opiekunów szukających narzędzi do rozmowy z dzieckiem o stracie i żałobie
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Dla specjalistów</h3>
                  <p className="text-muted-foreground">
                    Pedagogów, psychologów i psychoterapeutów pracujących z dziećmi
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Gallery Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Zajrzyj do środka
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {bookImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                >
                  <img
                    src={image}
                    alt={`Ilustracja ${index + 1} z książki Żaba`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Book Details */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Szczegóły książki</h2>
            <Card>
              <CardContent className="pt-6">
                <dl className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <dt className="text-sm text-muted-foreground">Ilustracje</dt>
                    <dd className="text-lg font-semibold">Marianna Sztyma</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm text-muted-foreground">Wiek</dt>
                    <dd className="text-lg font-semibold">5+</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm text-muted-foreground">Liczba stron</dt>
                    <dd className="text-lg font-semibold">48</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm text-muted-foreground">Format</dt>
                    <dd className="text-lg font-semibold">24×17 cm</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm text-muted-foreground">Oprawa</dt>
                    <dd className="text-lg font-semibold">Twarda</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm text-muted-foreground">ISBN</dt>
                    <dd className="text-lg font-semibold">978-83-67085-21-2</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Gdzie kupić książkę?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Książka dostępna w najlepszych księgarniach internetowych i stacjonarnych
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <ShoppingCart className="w-4 h-4" />
                Kup online
              </Button>
              <Button size="lg" variant="outline">
                Znajdź księgarnię
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}