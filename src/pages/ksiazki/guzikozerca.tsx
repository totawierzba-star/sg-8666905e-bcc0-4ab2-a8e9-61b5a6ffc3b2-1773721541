import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function GuzikozercaPage() {
  const galleryImages = [
    "/uploads/guzikozerca-na-tropie-slow_1_.jpg",
    "/uploads/guzikozerca-na-tropie-slow_2_.jpg",
    "/uploads/guzikozerca-na-tropie-slow_3_.jpg",
  ];

  return (
    <Layout>
      <SEO
        title="Guzikożerca na tropie słów - Podróż do świata dziecka w spektrum autyzmu | Olga Ptak"
        description="Dziesięć poruszających opowieści prowadzących do niezwykłego świata Leona, chłopca z autyzmem. Książka pomaga zrozumieć, dlaczego komunikacja bywa trudna i jak wygląda rzeczywistość, w której wszystko ułożone jest inaczej. Wiek: 5+"
        image="/uploads/guzikozerca-na-tropie-slow.jpg"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/ksiazki"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do książek
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
            {/* Book Cover */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/uploads/guzikozerca-na-tropie-slow.jpg"
                    alt="Okładka książki Guzikożerca na tropie słów"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="order-2 md:order-1 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Guzikożerca na tropie słów
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Podróż do świata dziecka w spektrum autyzmu
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Wiek: 5+
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                  Autyzm
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                  Komunikacja
                </span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Dziesięć krótkich, poruszających opowieści prowadzących do fascynującego świata Leona – chłopca, 
                  w którego mózgu wszystko poukładane jest inaczej. To niezwykła podróż przez zakamarki osobliwej 
                  rzeczywistości, w której wszystko się „rozpadło" i nic do siebie „nie pasuje".
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wraz z Leonem poszukujemy słów, których brakuje mu, aby opisać swój świat. Książka pomaga 
                  zrozumieć, skąd biorą się trudności w komunikacji między dzieckiem w spektrum autyzmu a dorosłymi. 
                  Otwiera przed nami nowe horyzonty i daje głos tym wszystkim, którzy są cichymi bohaterami każdego dnia.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://tusieczyta.pl/pl/glowna/1203-guzikozerca-na-tropie-slow-9788367085168.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Kup książkę
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Book Details Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Szczegóły wydania
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium">Autorka:</span>
                  <span className="text-muted-foreground">Olga Ptak</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium">Ilustracje:</span>
                  <span className="text-muted-foreground">Dominika Czerniak-Chojnacka</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium">Wiek:</span>
                  <span className="text-muted-foreground">5+</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium">ISBN:</span>
                  <span className="text-muted-foreground">978-83-67085-16-8</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium">Oprawa:</span>
                  <span className="text-muted-foreground">Twarda</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium">Liczba stron:</span>
                  <span className="text-muted-foreground">80</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium">Format:</span>
                  <span className="text-muted-foreground">22 x 14,8 cm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Dla kogo jest ta książka?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-center mb-8">
                To niezwykle ważna lektura dla wszystkich, którzy chcą lepiej zrozumieć świat dzieci w spektrum autyzmu:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Rodzice i opiekunowie</h3>
                  <p className="text-sm text-muted-foreground">
                    Dzieci w spektrum autyzmu oraz ich bliskich, pragnących głębiej zrozumieć ich świat
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Specjaliści</h3>
                  <p className="text-sm text-muted-foreground">
                    Terapeuci, psychologowie, pedagodzy i lekarze pracujący z dziećmi z niepełnosprawnością
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Nauczyciele</h3>
                  <p className="text-sm text-muted-foreground">
                    Pedagodzy i nauczyciele wspomagający rozwój dzieci ze specjalnymi potrzebami
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Dzieci</h3>
                  <p className="text-sm text-muted-foreground">
                    Młodzi czytelnicy od 5. roku życia, którzy chcą poznać historię Leona
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Zajrzyj do środka
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={image}
                    alt={`Fragment książki Guzikożerca na tropie słów - strona ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ważna informacja</h3>
              <p className="text-muted-foreground leading-relaxed">
                Jeśli posiadasz książkę <em>„Kto ukradł jutro? czyli dlaczego nie jest jak z obrazka"</em> wydaną 
                w 2019 roku – <strong>„Guzikożerca na tropie słów"</strong> to część tej przepięknej książki, 
                której nakład właśnie się kończy. Opowieść Leona otrzymała swoje nowe życie i oprawę, by dotrzeć 
                do jeszcze szerszego grona czytelników.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Gotowy na podróż do świata Leona?
            </h2>
            <p className="text-lg text-muted-foreground">
              Zamów książkę i odkryj fascynującą perspektywę dziecka w spektrum autyzmu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://tusieczyta.pl/pl/glowna/1203-guzikozerca-na-tropie-slow-9788367085168.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-medium transition-colors"
              >
                Kup w księgarni TuSieCzyta
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/ksiazki"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 font-medium transition-colors"
              >
                Zobacz inne książki
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}