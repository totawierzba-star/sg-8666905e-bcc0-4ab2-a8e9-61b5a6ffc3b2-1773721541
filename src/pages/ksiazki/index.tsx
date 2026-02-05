import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookCard } from "@/components/BookCard";

const books = [
  {
    title: "Żaba",
    subtitle: "Mała opowieść o żałobie",
    image: "/uploads/okładka_z_aba.jpg",
    slug: "zaba",
    color: "secondary" as const,
    description: "Czuła opowieść o radzeniu sobie ze stratą, skierowana do dzieci i ich opiekunów.",
    age: "5+",
    pages: 48,
  },
];

export default function KsiazkiPage() {
  return (
    <Layout>
      <SEO
        title="Nasze książki - Książki do zadań specjalnych"
        description="Poznaj naszą kolekcję książek wspierających dzieci w trudnych sytuacjach życiowych - żałoba, rozwód, zmiany, pytania o pochodzenie."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Nasza pierwsza książka
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Rozpoczynamy serię "Książki do zadań specjalnych" od czułej opowieści o żałobie. 
                "Żaba" powstała we współpracy z ekspertami i została zilustrowana przez utalentowaną artystkę.
                To książka, która pomaga dzieciom i ich bliskim przejść przez trudny czas straty.
              </p>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-md mx-auto">
              {books.map((book) => (
                <BookCard key={book.slug} {...book} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-primary">48</div>
                  <div className="text-sm text-muted-foreground">Stron pełnych emocji</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Wiek czytelników</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Możliwości wsparcia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Chcesz dowiedzieć się więcej?
              </h2>
              <p className="text-lg text-muted-foreground">
                Przeczytaj nasze artykuły o wykorzystaniu książki "Żaba" w terapii 
                i rozmowach z dziećmi o trudnych tematach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="/ksiazki/zaba"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-medium transition-colors"
                >
                  Zobacz książkę
                </a>
                <a
                  href="/artykuly"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 font-medium transition-colors"
                >
                  Przeczytaj artykuły
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}