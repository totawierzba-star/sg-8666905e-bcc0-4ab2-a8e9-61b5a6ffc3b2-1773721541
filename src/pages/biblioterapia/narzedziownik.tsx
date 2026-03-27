import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { 
  ArrowRight, 
  PenTool,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function NarzedziownikPage() {
  return (
    <Layout>
      <SEO
        title="Narzędziownik Biblioterapeuty - Scenariusze zajęć"
        description="Gotowe scenariusze zajęć biblioterapeutycznych dla dzieci i młodzieży. Materiały do druku, karty pracy i przewodniki dla rodziców."
        url="https://biblioterapia.org/biblioterapia/narzedziownik"
      />

      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Narzędziownik
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Scenariusze zajęć biblioterapeutycznych
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Gotowe do wykorzystania materiały edukacyjne przygotowane przez ekspertów. Pobieraj, drukuj i prowadź profesjonalne zajęcia.
            </p>
          </div>

          {/* Scenarios Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Gdy doniczka przecieka */}
            <Link href="/biblioterapia/scenariusze/gdy-doniczka-przecieka" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">EMOCJE</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Gdy doniczka przecieka</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>45 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Scenariusz zajęć o radzeniu sobie z trudnymi emocjami na podstawie książki "Zielona dziewczynka".
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2: Moja przezroczysta Żaba */}
            <Link href="/biblioterapia/scenariusze/moja-przezroczysta-zaba" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-600 dark:to-pink-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">ŻAŁOBA</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Moja przezroczysta Żaba</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Praca indywidualna z dzieckiem przeżywającym stratę. Normalizacja emocji i oswajanie żałoby.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3: Muzeum Miłości */}
            <Link href="/biblioterapia/scenariusze/muzeum-milosci-rozwod" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">ROZWÓD</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Muzeum Miłości</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60-90 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Symboliczna podróż przez emocje związane z rozwodem rodziców. Aktywności inspirowane książką „Czasami szczęśliwi rodzice mieszkają oddzielnie".
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 4: Moje ptaki i moje posypki */}
            <Link href="/biblioterapia/scenariusze/moje-ptaki-i-posypki" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 dark:from-purple-600 dark:to-fuchsia-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">RÓŻNORODNOŚĆ</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Moje ptaki i moje posypki</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>45-60 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Lekcja o różnorodności, empatii i mądrego pomagania. Niepełnosprawność to tylko jedna z wielu cech – jak posypka na lodach.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 5: Skok - Mój domowy wulkan */}
            <Link href="/biblioterapia/scenariusze/skok-domowy-wulkan" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">ADHD</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Skok: Mój domowy wulkan</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60-75 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Warsztat o nadpobudliwości i przepełnieniu emocjami. Aktywności ruchowe i rozmowa o "wulkanach" w naszym ciele.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 6: Tkaczka Chmur - Podróż przez emocje */}
            <Link href="/biblioterapia/scenariusze/tkaczka-chmur-emocje" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-600 dark:to-indigo-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">EMOCJE</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Tkaczka Chmur: Podróż przez emocje</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60-75 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Warsztat o radzeniu sobie z trudnymi emocjami: smutek, gniew, rozpacz. Aktywności plastyczne, teatralne i rozmowa o przechodzeniu przez emocjonalne próby.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 7: Mrówki - Jak rozmawiać o utracie pracy */}
            <Link href="/biblioterapia/scenariusze/mrowki-utrata-pracy" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">KRYZYS RODZINNY</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Jak rozmawiać o utracie pracy rodzica?</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60-75 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Warsztaty pomocne w sytuacji kryzysu rodzinnego związanego z utratą pracy rodzica. Wykorzystują metaforę mrówek z książki do rozmowy o problemach i rodzinnym wsparciu.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 8: Połezja - Łzy i emocje */}
            <Link href="/biblioterapia/scenariusze/polezja-lzy-i-emocje" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">EMOCJE I ZDROWIE PSYCHICZNE</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Łzy i emocje</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60-75 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Normalizacja płaczu i wyrażania emocji. Edukacja o rodzajach łez, ich funkcjach biologicznych i pięknie pod mikroskopem. Redukcja wstydu związanego z okazywaniem uczuć.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 9: Guzikożerca - Na tropie słów */}
            <Link href="/biblioterapia/scenariusze/guzikozerca-na-tropie-slow" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">KOMUNIKACJA</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Guzikożerca na tropie słów</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60-75 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Warsztat o rozumieniu emocji i zachowań bez oceniania. Praca z komunikacją niewerbalną i przeciążeniem bodźcami.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 10: Linka w Mysim Mieście */}
            <Link href="/biblioterapia/scenariusze/linka-w-mysim-miescie" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-600 dark:to-sky-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">SMUTEK I SAMOTNOŚĆ</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Linka w Mysim Mieście</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60-75 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Warsztat o oswajaniu smutku i samotności dziecka. Praca z metaforą „Pani De”, bezpieczną wyobraźnią i relacjami wspierającymi.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 11: Skąd jestem? */}
            <Link href="/biblioterapia/scenariusze/skad-jestem-cialo-narodziny-bliskosc" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 p-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">CIAŁO I ROZWÓJ</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform">Skąd jestem?</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>60-75 min</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Warsztat o rozmowie z dziećmi o ciele, narodzinach i bliskości. Bez tabu, bez zawstydzania, z językiem adekwatnym do wieku.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Scenariusz</span>
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium group-hover:gap-3 transition-all">
                      <span>Zobacz więcej</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Placeholder for future workshops */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 flex flex-col items-center justify-center text-center h-full min-h-[200px]">
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <PenTool className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold mb-3 text-amber-900">
                  Jak używać scenariuszy?
                </h2>
                <ul className="space-y-2 text-amber-900">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">1.</span>
                    <span>Pobierz pełny scenariusz w formacie PDF (przycisk na stronie scenariusza)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">2.</span>
                    <span>Przygotuj wymienione materiały (szablony, kolorowe kartki, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">3.</span>
                    <span>Przeprowadź zajęcia zgodnie z planem (wstęp, czytanie, rozmowa, działanie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">4.</span>
                    <span>Wydrukuj przewodnik dla rodziców i przekaż opiekunom dzieci</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-amber-800 font-medium">
                  💡 Wszystkie materiały są darmowe do użytku edukacyjnego i terapeutycznego.
                </p>
              </div>
            </div>
          </div>

        </div>
      </article>
    </Layout>
  );
}