import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function SkadJestem() {
  return (
    <>
      <SEO
        title="Skąd jestem? - Agnieszka Kacprzyk | Książki do Zadań Specjalnych"
        description="Książka edukacyjna o prokreacji i narodzinach, która pomaga rodzicom rozmawiać z dziećmi na tematy cielesności i seksualności w prawdomówny i odpowiedni sposób. Ilustracje: Marianna Sztyma."
        image="/uploads/skad-jestem_okładka.jpg"
      />
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Back Button */}
          <Link href="/ksiazki">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do książek
            </Button>
          </Link>

          {/* Book Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <Image
                  src="/uploads/skad-jestem_okładka.jpg"
                  alt="Okładka książki Skąd jestem?"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-4xl font-bold mb-4">Skąd jestem?</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Agnieszka Kacprzyk
                </p>
                
                <div className="prose prose-lg mb-8">
                  <p className="text-lg leading-relaxed italic text-gray-600 border-l-4 border-amber-500 pl-4 mb-6">
                    "Dzieci zadają mnóstwo pytań, a dorośli udzielają mniej lub bardziej trafnych odpowiedzi."
                  </p>
                </div>

                {/* Key Details */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Ilustracje:</span>
                    <span>Marianna Sztyma</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Liczba stron:</span>
                    <span>48</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Format:</span>
                    <span>27 x 17 cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">ISBN:</span>
                    <span>978-83-89284-42-6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Oprawa:</span>
                    <span>Twarda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Wiek:</span>
                    <span>3+</span>
                  </div>
                  <div className="pt-4">
                    <a
                      href="https://tusieczyta.pl/pl/albus/670-skad-jestem-marianna-sztyma-agnieszka-kacprzyk-9788389284426.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Kup książkę
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Description */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold mb-6">O książce</h2>
            <p className="text-lg leading-relaxed mb-4">
              Dzieci zadają mnóstwo pytań, a dorośli udzielają mniej lub bardziej trafnych odpowiedzi. Te najbardziej dociekliwe często dotyczą cielesności, seksualności i prokreacji, a jedno z najważniejszych: <strong>skąd jestem?</strong>, często pada z ust dziecka w bardzo wczesnym dzieciństwie.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              To proste pytanie nadal krępuje rodziców, opiekunów i dziadków, którzy udzielają odpowiedzi często mijających się z prawdą. Temat prokreacji i nazywanie części ciała, które biorą udział w akcie poczęcia wciąż nie przechodzi nam przez gardło.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              W książce <strong>„Skąd jestem?"</strong> podpowiadamy, jak rozmawiać z dziećmi na temat poczęcia i narodzin. Tekstowi autorstwa Agnieszki Kacprzyk towarzyszą piękne kolorowe ilustracje Marianny Sztymy.
            </p>
          </div>

          {/* Illustrations Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Ilustracje z książki</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.26.34.png"
                  alt="Ilustracja z książki Skąd jestem? - strona 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.26.24.png"
                  alt="Ilustracja z książki Skąd jestem? - strona 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/Screenshot_2026-03-04_13.26.10.png"
                  alt="Ilustracja z książki Skąd jestem? - strona 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">O autorce</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Agnieszka Kacprzyk</h3>
              <p className="text-lg leading-relaxed">
                Autorka książek dla dzieci, która z wyczuciem i empatią podejmuje trudne tematy związane z edukacją seksualną i rozwojem emocjonalnym dzieci. Jej teksty łączą rzetelną wiedzę z przystępnym, przyjaznym językiem, pomagając rodzicom i opiekunom w prowadzeniu otwartych, prawdomównych rozmów z dziećmi.
              </p>
            </div>
          </div>

          {/* Illustrator Section */}
          <div className="mb-16 bg-amber-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">O ilustratorce</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Marianna Sztyma</h3>
              <p className="text-lg leading-relaxed">
                Ilustratorka, której kolorowe i ciepłe prace wizualne wspaniale uzupełniają tekst edukacyjny. Jej ilustracje są przyjazne dzieciom, jednocześnie traktując tematy związane z ciałem i narodzinami z należytym szacunkiem i delikatnością.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Gotowy na szczerą rozmowę?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Pomóż swojemu dziecku zrozumieć skąd pochodzi w prawdomówny i odpowiedni sposób
            </p>
            <a
              href="https://tusieczyta.pl/pl/albus/670-skad-jestem-marianna-sztyma-agnieszka-kacprzyk-9788389284426.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Kup książkę teraz
              </Button>
            </a>
          </div>

          {/* Other Books */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Inne książki</h2>
            <Link href="/ksiazki">
              <Button variant="outline" size="lg">
                Zobacz wszystkie książki
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}