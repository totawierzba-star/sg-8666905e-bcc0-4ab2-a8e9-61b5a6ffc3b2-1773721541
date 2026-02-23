import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { BookCard } from "@/components/BookCard";
import Link from "next/link";

const books = [
  {
    title: "Żaba. Mała opowieść o żałobie",
    subtitle: "Książka wspierająca w czasie straty",
    description: "Delikatna historia o stracie i żałobie, która pomaga dzieciom zrozumieć i przepracować trudne emocje związane z odejściem bliskiej osoby.",
    image: "/uploads/okładka_z_aba.jpg",
    slug: "zaba",
    age: "4+",
    author: "Agnieszka Kacprzyk",
    color: "primary" as const,
  },
  {
    title: "Czasami szczęśliwi rodzice mieszkają oddzielnie",
    subtitle: "Książka o rozwodzie i nowych początkach",
    description: "Wzruszająca opowieść o rozstaniu rodziców, która pokazuje dzieciom, że miłość rodzicielska trwa na zawsze, nawet gdy mama i tata żyją osobno.",
    image: "/uploads/okładka_czasami-szczesliwi-rodzice-mieszkaja-oddzielnie_4_.jpg",
    slug: "czasami-szczesliwi-rodzice",
    age: "5+",
    author: "Agnieszka Kacprzyk",
    color: "accent" as const,
  },
  {
    title: "Nie znajdziesz mnie po śladach stóp",
    subtitle: "Szczera rozmowa o niepełnosprawności",
    description: "Autentyczna historia osoby na wózku inwalidzkim, która uczy dzieci, że niepełnosprawność to tylko jedna z wielu cech człowieka. Książka pełna ciepła, humoru i mądrości życiowej.",
    image: "/uploads/nie-znajdziesz-mnie-po-sladach-stop.jpg",
    slug: "nie-znajdziesz-mnie",
    age: "5+",
    author: "Sylwia Błach",
    color: "secondary" as const,
  },
  {
    title: "Kałużysko",
    subtitle: "Książka o depresji dziecięcej",
    description: "Opowieść o dziecięcej depresji, która z empatią i wrażliwością pokazuje, jak trudne emocje mogą wpływać na codzienne życie. Książka pomaga zrozumieć i nazwać to, co dzieje się w sercu.",
    image: "/uploads/kaluzyskoOkładka.jpg",
    slug: "kaluzysko",
    age: "5+",
    author: "Anna Augustyniak",
    color: "accent" as const,
  },
  {
    title: "Guzikożerca na tropie słów",
    subtitle: "Podróż do świata dziecka w spektrum autyzmu",
    description: "Dziesięć poruszających opowieści prowadzących do niezwykłego świata Leona, chłopca z autyzmem. Książka pomaga zrozumieć, dlaczego komunikacja bywa trudna i jak wygląda rzeczywistość, w której wszystko ułożone jest inaczej.",
    image: "/uploads/guzikozerca-na-tropie-slow.jpg",
    slug: "guzikozerca",
    age: "5+",
    author: "Olga Ptak",
    color: "primary" as const,
  },
  {
    title: "Skok",
    subtitle: "O radzeniu sobie ze zmianami w rodzinie",
    description: "Wzruszająca historia o tym, jak poradzić sobie, gdy poukładane życie zamienia się w chaos. Książka pełna humoru uczy dzieci i rodziców kompromisu, empatii i współpracy w trudnych momentach.",
    image: "/uploads/skokokładka.jpg",
    slug: "skok",
    age: "6+",
    author: "Anna Augustyniak",
    color: "secondary" as const,
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
                Książki do zadań specjalnych
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Tworzymy książki, które pomagają dzieciom i rodzicom w najtrudniejszych momentach życia. 
                Każda z nich powstaje we współpracy z ekspertami i jest pięknie zilustrowana, 
                by z czułością oswajać trudne tematy.
              </p>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Wyjątkowe tytuły</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Ekspertów merytorycznych</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Wsparcia dla rodzin</div>
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
                Potrzebujesz wsparcia?
              </h2>
              <p className="text-lg text-muted-foreground">
                Zajrzyj do naszej bazy wiedzy. Przygotowaliśmy artykuły o tym, 
                jak rozmawiać z dziećmi o trudnych sprawach i jak wykorzystywać książki w terapii.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/artykuly"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-medium transition-colors"
                >
                  Przeczytaj artykuły
                </Link>
                <Link
                  href="/biblioterapia"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 font-medium transition-colors"
                >
                  O biblioterapii
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}