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
  {
    title: "30 znikających trampolin",
    subtitle: "",
    image: "/uploads/30-znikajacych-trampolin_okładka.jpg",
    slug: "30-znikajacych-trampolin",
    color: "accent" as const,
    description: "Fascynująca historia o zmianach i adaptacji w życiu dziecka.",
    age: "6+",
    pages: 40,
  },
  {
    title: "Skąd jestem?",
    subtitle: "",
    image: "/uploads/skad-jestem_okładka.jpg",
    slug: "skad-jestem",
    color: "secondary" as const,
    description: "Delikatne wprowadzenie do tematu pochodzenia i tożsamości.",
    age: "4+",
    pages: 32,
  },
  {
    title: "Czasami szczęśliwi rodzice mieszkają oddzielnie",
    subtitle: "",
    image: "/uploads/czasami-szczesliwi-rodzice-mieszkaja-oddzielnie.okładka.jpg",
    slug: "czasami-szczesliwi-rodzice",
    color: "primary" as const,
    description: "Pomocna książka o rozwodzie i nowych układach rodzinnych.",
    age: "5+",
    pages: 36,
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
                Nasze książki
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Książki stworzone z myślą o dzieciach i ich bliskich, które wspierają w trudnych momentach życia. 
                Każda z nich powstała we współpracy z ekspertami i została zilustrowana przez utalentowanych artystów.
              </p>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Wyjątkowe tytuły</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-primary">48</div>
                  <div className="text-sm text-muted-foreground">Pięknych ilustracji</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Wiek czytelników</div>
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
                Nie wiesz, którą książkę wybrać?
              </h2>
              <p className="text-lg text-muted-foreground">
                Skontaktuj się z nami, a pomożemy wybrać odpowiedni tytuł dla Twojego dziecka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-medium transition-colors"
                >
                  Skontaktuj się
                </a>
                <a
                  href="/o-ksiazkach"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 font-medium transition-colors"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}