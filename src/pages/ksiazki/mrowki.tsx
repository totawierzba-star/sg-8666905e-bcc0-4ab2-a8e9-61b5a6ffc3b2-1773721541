import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, ShoppingCart } from "lucide-react";

export default function MrowkiPage() {
  return (
    <>
      <SEO
        title="Mrówki - Anna Augustyniak | Książki do zadań specjalnych"
        description="Opowieść o utracie pracy przez rodzica i o tym, jak radzi sobie z tym faktem cała rodzina, opowiedziana z perspektywy dziewczynki szpiegującej swoich rodziców."
        image="/uploads/okłdkamrowki.jpg"
      />
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">
              Strona główna
            </Link>
            {" / "}
            <Link href="/ksiazki" className="hover:text-amber-600">
              Książki
            </Link>
            {" / "}
            <span className="text-gray-900">Mrówki</span>
          </nav>

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <Image
                src="/uploads/okłdkamrowki.jpg"
                alt="Okładka książki Mrówki"
                width={600}
                height={800}
                className="rounded-lg shadow-lg w-full"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4 w-fit">
                Albus
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Mrówki
              </h1>
              <p className="text-xl text-gray-600 mb-6">Anna Augustyniak</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Ilustracje</p>
                    <p className="text-gray-600">Kasia Augustyniak</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Szczegóły</p>
                    <p className="text-gray-600">
                      84 strony • Format 14,8 x 21,0 cm
                      <br />
                      Oprawa twarda • ISBN 978-83-67085-22-9
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Wiek</p>
                    <p className="text-gray-600">5+</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://tusieczyta.pl/pl/ksiazki-dla-dzieci/1259-mrowki-9788367085229.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Kup książkę
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">O książce</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              "Mrówki" opowiadają o utracie pracy przez jednego z rodziców i o tym, jak sobie radzi z tym faktem cała rodzina. Bohaterką książki jest Gaja, dziewczynka, która „zawodowo" zajmuje się szpiegowaniem, a jej uważnej obserwacji podlegają rodzice, znajomi i nauczyciele. W tajnym notesie zapisuje notatki, dzięki którym stara się zrozumieć świat i otaczających ją ludzi.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Inwazja mrówek na jej dom sprawia, że Gaja musi sprostać nowemu wyzwaniu i odkryć, dlaczego tata nagle zaczął przesiadywać w kuchni, a mama prawie nie wychodzi z gabinetu. Kto rozrusza zastały mięsień motywacyjny rodziny? Jak potoczy się wojna z insektami? Czy rodzina Kaczmarków poradzi sobie z utratą pracy jednego z rodziców? Tego wszystkiego dowiecie się z książki.
            </p>
          </div>

          {/* Illustrations Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Ilustracje
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={`/uploads/mrówki${num}.png`}
                    alt={`Ilustracja z książki Mrówki ${num}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              O autorce
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Anna Augustyniak</strong> – autorka książek dla dzieci, które pomagają zrozumieć trudne emocje i sytuacje życiowe. Jej opowieści łączą empatię z autentycznością, pokazując dzieciom, że trudności są naturalną częścią życia i można je pokonać.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-amber-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Chcesz poznać więcej książek?
            </h2>
            <p className="text-gray-600 mb-6">
              Zobacz pozostałe tytuły z naszej kolekcji książek do zadań specjalnych
            </p>
            <Link href="/ksiazki">
              <Button size="lg" variant="outline">
                Zobacz wszystkie książki
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}