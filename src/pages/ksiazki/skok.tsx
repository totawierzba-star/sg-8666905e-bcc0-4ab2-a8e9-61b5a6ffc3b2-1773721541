import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Heart } from "lucide-react";

const galleryImages = [
  { src: "/uploads/skok1.jpg", alt: "Ilustracja ze strony książki Skok - strona 1" },
  { src: "/uploads/skok.png", alt: "Ilustracja ze strony książki Skok - strona 2" },
  { src: "/uploads/skok2.png", alt: "Ilustracja ze strony książki Skok - strona 3" },
];

export default function SkokPage() {
  return (
    <Layout>
      <SEO
        title="Skok - O radzeniu sobie ze zmianami w rodzinie | Anna Augustyniak"
        description="Historia o tym, jak poradzić sobie, gdy poukładane życie zamienia się w chaos. Książka pełna humoru uczy dzieci i rodziców kompromisu, empatii i współpracy. Wiek: 6+"
        image="/uploads/skokokładka.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Wiek: 6+
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Skok
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  O radzeniu sobie ze zmianami w rodzinie
                </p>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    To coś więcej niż opowieść dla najmłodszych. To historia o wyzwaniach, 
                    wysiłku i umiejętności dostosowania się do zmieniającej się codzienności. 
                    Jak postępować, gdy uporządkowane życie zamienia się w nieoczekiwany chaos?
                  </p>
                  <p>
                    Rodzice Filipa i Luśki stają przed tym dylematem, a my możemy towarzyszyć 
                    im w tej pełnej ciepła i humoru przygodzie.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a 
                      href="https://tusieczyta.pl/pl/wydawnictwa/1182-skok-9788367085137.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      Kup książkę
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/ksiazki">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Inne książki
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-muted">
                  <Image
                    src="/uploads/skokokładka.jpg"
                    alt="Okładka książki Skok"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Details */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Szczegóły wydania</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Autorka</div>
                  <div className="font-semibold">Anna Augustyniak</div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Ilustracje</div>
                  <div className="font-semibold">Kasia Augustyniak</div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Projekt graficzny</div>
                  <div className="font-semibold">Kasia Augustyniak</div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Wydawnictwo</div>
                  <div className="font-semibold">Albus</div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">ISBN</div>
                  <div className="font-semibold">978-83-67085-13-7</div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Format</div>
                  <div className="font-semibold">14,8 x 21 cm</div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Liczba stron</div>
                  <div className="font-semibold">88</div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Oprawa</div>
                  <div className="font-semibold">Twarda</div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Wiek</div>
                  <div className="font-semibold">6+</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Whom Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Dla kogo jest ta książka?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Dla rodzin</h3>
                  <p className="text-sm text-muted-foreground">
                    Dla rodziców i dzieci, którzy chcą nauczyć się wspólnie radzić 
                    z życiowymi zmianami i wyzwaniami
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Dla dzieci</h3>
                  <p className="text-sm text-muted-foreground">
                    Historia Filipa i Luśki pomaga dzieciom zrozumieć, 
                    że zmiany są naturalną częścią życia
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Do biblioterapii</h3>
                  <p className="text-sm text-muted-foreground">
                    Narzędzie wspierające w nauce empatii, kompromisu 
                    i współpracy w rodzinie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What the Book Teaches */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Czego uczy ta książka?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong>"Skok"</strong> kładzie szczególny nacisk na potrzebę wzajemnego 
                  zrozumienia w relacjach rodzinnych. Książka uczy dzieci i dorosłych:
                </p>
                <ul className="space-y-2">
                  <li><strong>Kompromisu</strong> - znajdowania rozwiązań satysfakcjonujących wszystkich</li>
                  <li><strong>Empatii</strong> - rozumienia uczuć i potrzeb innych członków rodziny</li>
                  <li><strong>Współpracy</strong> - wspólnego radzenia sobie z trudnościami</li>
                  <li><strong>Elastyczności</strong> - dostosowywania się do zmieniających się okoliczności</li>
                </ul>
                <p>
                  Życie jest pełne niespodzianek i wyzwań, ale <strong>"Skok"</strong> pokazuje 
                  z humorem i ciepłem, że można się z nimi uporać - razem, jako rodzina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Zajrzyj do środka
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {galleryImages.map((img, index) => (
                  <div key={index} className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg bg-muted hover:shadow-xl transition-shadow">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Gotowy na podróż pełną humoru i mądrości?
              </h2>
              <p className="text-lg text-muted-foreground">
                Dołącz do Filipa i Luśki w ich przygodzie i odkryj, 
                jak rodzina może wspólnie pokonywać życiowe wyzwania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="group">
                  <a 
                    href="https://tusieczyta.pl/pl/wydawnictwa/1182-skok-9788367085137.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    Kup na TuSięCzyta.pl
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/ksiazki">
                    Poznaj inne książki
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