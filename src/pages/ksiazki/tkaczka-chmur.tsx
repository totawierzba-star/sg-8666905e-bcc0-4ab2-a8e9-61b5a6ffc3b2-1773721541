import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, Calendar, FileText } from "lucide-react";

export default function TkaczkaChmurPage() {
  return (
    <>
      <SEO
        title="Tkaczka chmur - Baśń o miłości, odwadze i radzeniu sobie z trudnymi emocjami"
        description="Niezwykła opowieść o rodzeństwie, która w delikatny sposób wprowadza w temat spotkania z chorobą, śmiercią i trudnymi emocjami. Dla dzieci 5+."
        image="/uploads/tkaczka-chmur-okładka.jpg"
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <Link
                href="/ksiazki"
                className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
              >
                ← Powrót do listy książek
              </Link>
            </nav>

            {/* Header Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Book Cover */}
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/uploads/tkaczka-chmur-okładka.jpg"
                    alt="Okładka książki Tkaczka chmur"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Book Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <Badge className="mb-4 bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-100">
                    Wiek 5+
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Tkaczka chmur
                  </h1>
                  <p className="text-xl text-amber-600 dark:text-amber-400 mb-6">
                    Katarzyna Jackowska-Enemuo
                  </p>
                </div>

                {/* Key Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <User className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Ilustracje
                      </p>
                      <p className="font-medium">Marianna Sztyma</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Strony
                      </p>
                      <p className="font-medium">72</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <FileText className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Format
                      </p>
                      <p className="font-medium">21x27,5 cm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        ISBN
                      </p>
                      <p className="font-medium">978-83-89284-83-9</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Oprawa: Twarda
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                O książce
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-700 dark:text-gray-300 mb-6">
                  „W pałacu Słońca, na samiuśkim końcu świata mieszkają Trzy
                  Zorze – trzy siostry prządki – które przędą, układają i
                  przecinają złote nici ludzkiego losu. I kiedy rodzi się
                  dziecko, Zorze przychodzą, przynoszą nić jego losu i każdemu
                  dziecku dają jakiś dar".
                </blockquote>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Tak zaczyna się opowieść o niezwykłych przygodach dwójki
                  rodzeństwa: Siostrzyczki i Braciszka. Opowieść o miłości,
                  odwadze, bliskości i zaufaniu – do siebie i do świata. O
                  znajdowaniu własnych, najlepszych sposobów na radzenie sobie z
                  tym, co trudne.
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  Baśń w delikatny, obrazowy sposób wprowadza widzów w temat
                  spotkania z tym, co nieuchronne: chorobą, śmiercią i
                  towarzyszącym im trudnym emocjom.
                </p>
              </div>
            </div>

            {/* Illustrations Gallery */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ilustracje
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    src: "/uploads/tkaczka1.png",
                    alt: "Ilustracja z książki Tkaczka chmur - scena 1",
                  },
                  {
                    src: "/uploads/tkaczka2.png",
                    alt: "Ilustracja z książki Tkaczka chmur - scena 2",
                  },
                  {
                    src: "/uploads/tkaczka3.png",
                    alt: "Ilustracja z książki Tkaczka chmur - scena 3",
                  },
                ].map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* About Author */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                O autorce
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Katarzyna Jackowska-Enemuo
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300">
                    Antropolożka kultury, muzykantka, opowiadaczka historii,
                    wędrownica i mama. Od ponad dwudziestu lat zajmuje się w
                    praktyce rzeką Smutku, kulturą tradycyjną, muzyką dawną i
                    etniczną, a także sztuką opowiadania w jej różnych
                    wymiarach – artystycznym i społecznym.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Zbiera opowieści oraz pisze własne – i opowiada je, tworząc
                    do nich autorską muzykę. Pisze teksty i komponuje muzykę.
                    Gra i śpiewa. Tańczy. Prowadzi warsztaty. Występuje na
                    festiwalach i w opłotkach.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Towarzyszy w dorastaniu synowi i uczy się żyć z córką,
                    która jest po drugiej stronie życia. Uwielbia słuchać świata
                    i przyglądać mu się z nieoczywistych perspektyw, chociaż
                    czasem nic nie rozumie. Ale to nie szkodzi.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-amber-100 to-rose-100 dark:from-amber-900/20 dark:to-rose-900/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Zainteresowała Cię ta książka?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Sprawdź inne tytuły w naszej kolekcji
              </p>
              <Link href="/ksiazki">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Zobacz wszystkie książki
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}