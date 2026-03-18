import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Book, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/uploads/Screenshot_2026-02-23_17.53.35.png", alt: "Fragment książki Linka w mysim mieście - strona 1" },
  { src: "/uploads/Screenshot_2026-02-23_17.54.13.png", alt: "Fragment książki Linka w mysim mieście - strona 2" },
  { src: "/uploads/Screenshot_2026-02-23_17.54.56.png", alt: "Fragment książki Linka w mysim mieście - strona 3" },
];

export default function LinkaWMysimMiesciePage() {
  const purchaseUrl = "https://tusieczyta.pl/pl/glowna/1050-linka-w-mysim-miescie-9788367085106.html?utm_source=ksiazki-do-zadan-specjalnych&utm_medium=website&utm_campaign=book_page";

  return (
    <Layout>
      <SEO
        title="Linka w mysim mieście - Książki do zadań specjalnych"
        description="Metaforyczna, nostalgiczna opowieść o depresji, sile wyobraźni i odwadze. Historia małej dziewczynki, która w krainie fantazji odnajduje spokój i siłę do walki z trudnymi emocjami."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left Column - Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/uploads/linka-w-mysim-miescie-okładka.jpg"
                  alt="Okładka książki Linka w mysim mieście"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-accent">Wiek: 6+</p>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Linka w mysim mieście
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Metaforyczna opowieść o depresji i sile wyobraźni
                  </p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Nostalgiczna historia o małej dziewczynce, która ucieka do krainy wyobraźni, 
                    by poradzić sobie z trudnymi emocjami. Gdy w życiu Linki pojawia się Pani De 
                    i burzy spokój jej świata, dziewczynka znajduje schronienie w mysim mieście 
                    pod podłogą. Tam, w towarzystwie kotki Marcjanny i mysiej rodziny, odkrywa 
                    siłę, której potrzebuje, by stawić czoła rzeczywistości.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Rzeczywistość miesza się ze światem fantazji, w którym Linka odnajduje spokój 
                    i bezpieczeństwo. Spotyka tajemniczego, smutnego chłopca i mysią przyjaciółkę. 
                    Mimo trudnego tematu depresji – która dręcząc rodziców dotyka również dzieci – 
                    historia nie pozbawiona jest uśmiechu. To opowieść o wyobraźni, cierpliwości 
                    i odwadze, w której jak w klasycznej baśni zwycięża dobro.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="text-lg">
                    <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Kup książkę
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/ksiazki">
                      <Book className="mr-2 h-5 w-5" />
                      Wszystkie książki
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Details */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Szczegóły wydania</h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Autorka</p>
                    <p className="font-medium">Katarzyna Ryrych</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ilustracje</p>
                    <p className="font-medium">Marianna Sztyma</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Wydawnictwo</p>
                    <p className="font-medium">Albus</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Oprawa</p>
                    <p className="font-medium">Twarda</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Liczba stron</p>
                    <p className="font-medium">168</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Format</p>
                    <p className="font-medium">15,5 x 22 cm</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ISBN</p>
                    <p className="font-medium">978-83-67085-10-6</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Wiek</p>
                    <p className="font-medium">6+</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* For Whom Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold">Dla kogo jest ta książka?</h2>
                <p className="text-lg text-muted-foreground">
                  Historia, która przemawia do serc dzieci i dorosłych
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Heart className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Dla dzieci</h3>
                  <p className="text-sm text-muted-foreground">
                    Które przeżywają trudne emocje i szukają sposobu, by sobie z nimi poradzić
                  </p>
                </Card>

                <Card className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Heart className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Dla rodziców</h3>
                  <p className="text-sm text-muted-foreground">
                    Którzy chcą zrozumieć, jak depresja może wpływać na ich dzieci
                  </p>
                </Card>

                <Card className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Sparkles className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Dla terapeutów</h3>
                  <p className="text-sm text-muted-foreground">
                    Jako narzędzie w pracy z dziećmi doświadczającymi depresji
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What This Book Teaches */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold">Czego uczy ta książka?</h2>
              </div>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Siła wyobraźni</h3>
                  <p className="text-muted-foreground">
                    Jak kreatywność i fantazja mogą stać się schronieniem i źródłem siły w trudnych chwilach
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Radzenie sobie z emocjami</h3>
                  <p className="text-muted-foreground">
                    Że nawet najtrudniejsze uczucia można oswoić i że każdy ma prawo do smutku
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Cierpliwość i odwaga</h3>
                  <p className="text-muted-foreground">
                    Że potrzeba czasu, by stawić czoła problemom i że odwaga rośnie małymi krokami
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Dobro zwycięża</h3>
                  <p className="text-muted-foreground">
                    Że mimo trudności zawsze jest nadzieja i że jak w baśni – dobro ostatecznie wygrywa
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold">Zajrzyj do środka</h2>
                <p className="text-lg text-muted-foreground">
                  Zobacz piękne ilustracje Marianny Sztymy
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {galleryImages.map((img, index) => (
                  <div key={index} className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Gotowy na podróż do mysiego miasta?
              </h2>
              <p className="text-lg text-muted-foreground">
                Zapraszamy do magicznego świata Linki, gdzie wyobraźnia leczy rany i daje siłę do walki z trudnymi emocjami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-lg">
                  <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Kup książkę
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/ksiazki">
                    <Book className="mr-2 h-5 w-5" />
                    Zobacz inne książki
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}