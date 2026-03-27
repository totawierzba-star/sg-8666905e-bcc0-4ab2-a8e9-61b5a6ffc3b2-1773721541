import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Heart, 
  ArrowRight, 
  PenTool
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BiblioterapiaPage() {
  return (
    <Layout>
      <SEO
        title="Biblioterapia - Teoria i praktyka"
        description="Kompleksowe źródło wiedzy o biblioterapii dla rodziców, nauczycieli i terapeutów."
        url="https://biblioterapia.org/biblioterapia"
      />

      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Terapia przez literaturę
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Biblioterapia w praktyce
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Kompleksowe źródło wiedzy i narzędzi dla rodziców, nauczycieli i terapeutów.
            </p>
            <Link href="/biblioterapia/narzedziownik">
              <Button size="lg" className="gap-2">
                <PenTool className="h-5 w-5" />
                Zobacz Narzędziownik
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Theory Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">
                  Dlaczego to działa?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg h-fit">
                      <BookOpen className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Bezpieczny dystans</h3>
                      <p className="text-muted-foreground">Książka pozwala "podejść" do trudnego tematu bez bezpośredniej konfrontacji. Dziecko obserwuje emocje bohatera, zachowując bezpieczną odległość.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg h-fit">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Normalizacja emocji</h3>
                      <p className="text-muted-foreground">Zobaczenie, że bohater przechodzi przez podobne doświadczenia, pomaga zrozumieć, że nasze emocje są normalne.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-8 rounded-2xl border">
                <h3 className="font-serif text-2xl font-bold mb-6">Kiedy stosować biblioterapię?</h3>
                <ul className="space-y-4">
                  {[
                    "Żałoba i strata bliskiej osoby",
                    "Rozwód lub separacja rodziców",
                    "Zmiana szkoły lub miejsca zamieszkania",
                    "Lęki i trudności w regulacji emocji",
                    "Budowanie pewności siebie"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA to Narzędziownik */}
          <section className="mb-20 bg-primary/5 border-2 border-primary/20 rounded-2xl p-12 text-center">
            <PenTool className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">
              Gotowe scenariusze zajęć
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              W Narzędziowniku znajdziesz kompletne scenariusze zajęć biblioterapeutycznych, karty pracy i przewodniki dla rodziców - wszystko gotowe do druku i wykorzystania.
            </p>
            <Link href="/biblioterapia/narzedziownik">
              <Button size="lg" className="gap-2">
                Przejdź do Narzędziownika
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </section>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Częste pytania</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Czym jest biblioterapia?</AccordionTrigger>
                <AccordionContent>
                  Biblioterapia to metoda terapeutyczna wykorzystująca literaturę do wspierania zdrowia psychicznego i emocjonalnego. Polega na czytaniu odpowiednio dobranych książek, które pomagają zrozumieć i przepracować trudne emocje.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Czy to zastępuje wizytę u psychologa?</AccordionTrigger>
                <AccordionContent>
                  Nie, biblioterapia jest metodą wspierającą. W przypadku poważnych problemów emocjonalnych lub traumy, zawsze należy skonsultować się ze specjalistą. Książki mogą być jednak doskonałym uzupełnieniem terapii.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Dla kogo są przeznaczone scenariusze z Narzędziownika?</AccordionTrigger>
                <AccordionContent>
                  Scenariusze są przygotowane dla nauczycieli, bibliotekarzy, pedagogów szkolnych, psychologów i rodziców, którzy chcą prowadzić zajęcia biblioterapeutyczne z dziećmi w wieku szkolnym.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </article>
    </Layout>
  );
}