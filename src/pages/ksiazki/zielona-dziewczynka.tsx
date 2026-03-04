import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ZielonaDziewczynka() {
  const illustrations = [
    "/uploads/Screenshot_2026-03-04_13.42.40.png",
    "/uploads/Screenshot_2026-03-04_13.42.49.png",
    "/uploads/Screenshot_2026-03-04_13.42.56.png",
  ];

  return (
    <>
      <SEO
        title="Zielona dziewczynka. Czyli popołudnie, którego nie było - Książki do zadań specjalnych"
        description="Książka o chorobie Alzheimera i roli rodziny w opiece nad chorym. Opowieść o zapominaniu, przypominaniu i dorastaniu do odpowiedzialności."
        image="/uploads/zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bylo.jpg"
      />
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/ksiazki" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8">
            ← Powrót do książek
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <Image
                src="/uploads/zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bilo.jpg"
                alt="Zielona dziewczynka. Czyli popołudnie, którego nie było"
                width={600}
                height={800}
                className="w-full rounded-lg shadow-lg"
                priority
              />
            </div>

            <div>
              <div className="mb-4">
                <span className="text-sm text-amber-600 font-medium">ALBUS</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Zielona dziewczynka. Czyli popołudnie, którego nie było</h1>
              <p className="text-xl text-gray-600 mb-6">Anna Augustyniak</p>

              <div className="prose prose-lg mb-8">
                <p>
                  W niniejszej książce widzimy rodzinę, w której pojawia się osoba chora na Alzheimera. Autorka opisuje początek zmagań członków rodziny, zaczynający się od zaakceptowania faktu, że babci trzeba pomóc. Że wszystko trzeba na nowo poukładać. Że trzeba porozmawiać, by podjąć konkretne decyzje: kto i w jaki sposób opiekuje się chorym.
                </p>
                <p>
                  Książka opowiada o zapominaniu i przypominaniu sobie, stanowiąc metaforyczny wstęp do rozmowy o tym, czym jest Alzheimer oraz o tym czym jest dorastanie i branie odpowiedzialności za osoby nam najbliższe. Bo pomaganie, to nie tylko zdjęcie kogoś z dachu i podanie mu kolacji, to także wysłuchanie, cierpliwość i wsparcie emocjonalne.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h2 className="font-semibold mb-4">Kluczowe szczegóły</h2>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Ilustracje:</dt>
                    <dd className="font-medium">Kasia Augustyniak</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Oprawa:</dt>
                    <dd className="font-medium">Twarda</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Liczba stron:</dt>
                    <dd className="font-medium">88</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Format:</dt>
                    <dd className="font-medium">14,8 x 21 cm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">ISBN:</dt>
                    <dd className="font-medium">978-83-67085-32-8</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Wiek:</dt>
                    <dd className="font-medium">12+</dd>
                  </div>
                </dl>
                <div className="pt-4">
                  <a 
                    href="https://tusieczyta.pl/pl/albus/1479-zielona-dziewczynka-czyli-popoludnie-ktorego-nie-bylo-978836708532.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Kup książkę
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Emocje w rodzinie</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                W każdym z członków rodziny kotłują się emocje. Babcia odczuwa strach, poczucie osamotnienia, czasem nawet agresję czy rozpacz. Jej dzieci i wnuki – podobnie. Oni też się boją. Przeżywają stratę. Następuje zamiana ról: rodzice stają się podopiecznymi, dzieci opiekunami.
              </p>
              <p>
                A wnuki? Przecież one też w tym uczestniczą. Dorastają trochę szybciej, kiedy muszą pomagać, tracąc chwile beztroskiej zabawy, zdobywając w zamian doświadczenie i mądrość życiową. Każda rodzina musi samodzielnie oswoić chorobę, a książka może być w tym procesie bardzo pomocna.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Ilustracje z książki</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {illustrations.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Ilustracja ${index + 1} z książki Zielona dziewczynka`}
                  width={400}
                  height={500}
                  className="w-full rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Dlaczego warto przeczytać?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Trudny temat oswojony</h3>
                <p className="text-gray-700">
                  Książka pomaga rodzinom zrozumieć i zaakceptować chorobę Alzheimera, pokazując proces oswajania tej trudnej sytuacji.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Perspektywa całej rodziny</h3>
                <p className="text-gray-700">
                  Przedstawia emocje wszystkich członków rodziny - babci, rodziców i wnuków, pokazując jak choroba wpływa na każdego.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">O dorastaniu i odpowiedzialności</h3>
                <p className="text-gray-700">
                  Opowieść o tym, jak młodzi ludzie uczą się brać odpowiedzialność za najbliższych i jak to wpływa na ich dorastanie.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Wsparcie dla rodzin</h3>
                <p className="text-gray-700">
                  Praktyczne podejście do tematu opieki - nie tylko fizycznej, ale także emocjonalnej i psychicznej.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">O autorce i ilustratorce</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Anna Augustyniak</h3>
                <p className="text-gray-700">
                  Autorka książek dla dzieci, która z wyjątkową wrażliwością podejmuje trudne tematy życia rodzinnego. W swojej twórczości pokazuje, jak rozmawiać z dziećmi o sytuacjach, które budzą lęk i niepewność, pomagając rodzinom wspólnie przechodzić przez trudne momenty.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Kasia Augustyniak</h3>
                <p className="text-gray-700">
                  Ilustratorka, której prace tworzą ciepłą, pełną empatii atmosferę. Jej ilustracje delikatnie podkreślają emocjonalny wymiar historii, pomagając młodym czytelnikom zrozumieć złożone uczucia towarzyszące trudnym sytuacjom rodzinnym.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
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