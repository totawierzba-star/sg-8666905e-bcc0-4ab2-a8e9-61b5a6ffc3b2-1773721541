import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BiblioterapiaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czym jest biblioterapia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biblioterapia to metoda terapeutyczna wykorzystująca literaturę do wspierania zdrowia psychicznego i emocjonalnego. Polega na czytaniu odpowiednio dobranych książek, które pomagają zrozumieć i przepracować trudne emocje, sytuacje życiowe i wyzwania rozwojowe."
        }
      },
      {
        "@type": "Question",
        "name": "Dla kogo jest biblioterapia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biblioterapia jest skuteczna zarówno dla dzieci, jak i dorosłych. Może być stosowana indywidualnie lub w grupach, przez terapeutów, pedagogów, rodziców i nauczycieli. Szczególnie pomocna jest w pracy z dziećmi przeżywającymi trudne sytuacje życiowe."
        }
      },
      {
        "@type": "Question",
        "name": "Czy biblioterapia może zastąpić terapię psychologiczną?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biblioterapia jest wsparciem, nie leczeniem. W przypadku poważniejszych problemów psychicznych (depresja, lęki, trauma) zawsze należy skonsultować się z psychologiem lub psychiatrą. Biblioterapia może być elementem kompleksowego leczenia pod nadzorem specjalisty."
        }
      },
      {
        "@type": "Question",
        "name": "Jak wybrać odpowiednią książkę do biblioterapii?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Przy wyborze książki uwzględnij: wiek i etap rozwoju dziecka, aktualną sytuację życiową, gotowość emocjonalną do poruszenia tematu oraz jakość merytoryczną publikacji. Najlepiej wybierać książki stworzone z myślą o biblioterapii, we współpracy z ekspertami."
        }
      },
      {
        "@type": "Question",
        "name": "Kiedy stosować biblioterapię z dzieckiem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biblioterapię można stosować przy: żałobie i stracie, rozwodzie rodziców, zmianie szkoły lub miejsca zamieszkania, chorobie w rodzinie, lękach i obawach, budowaniu pewności siebie, edukacji emocjonalnej. Najważniejsze to odpowiedni moment i gotowość dziecka."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Biblioterapia - Czym jest i jak działa terapia przez książki?"
        description="Biblioterapia to metoda wykorzystująca literaturę do wspierania zdrowia psychicznego dzieci i dorosłych. Dowiedz się, jak książki mogą pomóc w trudnych chwilach."
        url="https://ksiazki-do-zadan-specjalnych.pl/biblioterapia"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Terapia przez literaturę
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Czym jest biblioterapia?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Odkryj moc słowa pisanego w procesie uzdrawiania i wspierania
              rozwoju emocjonalnego dzieci i dorosłych.
            </p>
          </div>

          {/* Quick Overview */}
          <div className="bg-background-alt rounded-lg p-8 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              <strong className="text-primary">Biblioterapia</strong> to metoda
              terapeutyczna wykorzystująca literaturę do wspierania zdrowia
              psychicznego i emocjonalnego. Polega na czytaniu odpowiednio
              dobranych książek, które pomagają zrozumieć i przepracować trudne
              emocje, sytuacje życiowe i wyzwania rozwojowe.
            </p>
            <p className="text-lg leading-relaxed">
              W rękach empatycznego dorosłego – terapeuty, pedagoga czy rodzica
              – właściwa książka może stać się pomostem do rozmowy o tym, co
              najtrudniejsze, i kluczem do zrozumienia własnych przeżyć.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              Jak działa biblioterapia?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background-subtle rounded-lg p-6 border border-border-light">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      Bezpieczny dystans
                    </h3>
                    <p className="text-muted-foreground">
                      Książka pozwala "podejść" do trudnego tematu bez
                      bezpośredniej konfrontacji. Dziecko obserwuje emocje
                      bohatera, zachowując bezpieczną odległość od własnego bólu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle rounded-lg p-6 border border-border-light">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      Normalizacja emocji
                    </h3>
                    <p className="text-muted-foreground">
                      Zobaczenie, że bohater przechodzi przez podobne
                      doświadczenia, pomaga zrozumieć, że nasze emocje są
                      normalne i naturalne.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle rounded-lg p-6 border border-border-light">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      Most do rozmowy
                    </h3>
                    <p className="text-muted-foreground">
                      Wspólne czytanie tworzy naturalną okazję do rozmowy o
                      trudnych tematach. Rodzic może zadawać pytania o uczucia
                      bohatera i dziecka.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-subtle rounded-lg p-6 border border-border-light">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-dark/10 rounded-lg p-3">
                    <Sparkles className="h-6 w-6 text-secondary-dark" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      Nowe strategie
                    </h3>
                    <p className="text-muted-foreground">
                      Obserwując, jak bohaterowie radzą sobie z trudnościami,
                      dzieci uczą się nowych sposobów radzenia sobie z własnymi
                      emocjami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="bg-accent/5 rounded-lg p-8 mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">
              Kiedy stosować biblioterapię?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Żałoba i strata bliskiej osoby</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Rozwód lub separacja rodziców</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Zmiana szkoły lub miejsca zamieszkania</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Choroba w rodzinie</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Lęki i obawy dziecka</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Budowanie pewności siebie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Edukacja emocjonalna</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Trudne pytania egzystencjalne</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              Najczęściej zadawane pytania
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Czym jest biblioterapia?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Biblioterapia to metoda terapeutyczna wykorzystująca literaturę
                  do wspierania zdrowia psychicznego i emocjonalnego. Polega na
                  czytaniu odpowiednio dobranych książek, które pomagają
                  zrozumieć i przepracować trudne emocje, sytuacje życiowe i
                  wyzwania rozwojowe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Dla kogo jest biblioterapia?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Biblioterapia jest skuteczna zarówno dla dzieci, jak i
                  dorosłych. Może być stosowana indywidualnie lub w grupach,
                  przez terapeutów, pedagogów, rodziców i nauczycieli.
                  Szczególnie pomocna jest w pracy z dziećmi przeżywającymi
                  trudne sytuacje życiowe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Czy biblioterapia może zastąpić terapię psychologiczną?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Biblioterapia jest wsparciem, nie leczeniem. W przypadku
                  poważniejszych problemów psychicznych (depresja, lęki, trauma)
                  zawsze należy skonsultować się z psychologiem lub psychiatrą.
                  Biblioterapia może być elementem kompleksowego leczenia pod
                  nadzorem specjalisty.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Jak wybrać odpowiednią książkę do biblioterapii?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Przy wyborze książki uwzględnij: wiek i etap rozwoju dziecka,
                  aktualną sytuację życiową, gotowość emocjonalną do poruszenia
                  tematu oraz jakość merytoryczną publikacji. Najlepiej wybierać
                  książki stworzone z myślą o biblioterapii, we współpracy z
                  ekspertami.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Kiedy stosować biblioterapię z dzieckiem?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Biblioterapię można stosować przy: żałobie i stracie, rozwodzie
                  rodziców, zmianie szkoły lub miejsca zamieszkania, chorobie w
                  rodzinie, lękach i obawach, budowaniu pewności siebie, edukacji
                  emocjonalnej. Najważniejsze to odpowiedni moment i gotowość
                  dziecka.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Poznaj nasze książki do biblioterapii
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nasze publikacje powstają we współpracy z psychologami,
              pedagogami i terapeutami. Każda książka jest starannie
              przemyślana, aby wspierać dzieci i rodziców w najtrudniejszych
              momentach życia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/ksiazki">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Zobacz książki
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/artykuly">Przeczytaj artykuły</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}