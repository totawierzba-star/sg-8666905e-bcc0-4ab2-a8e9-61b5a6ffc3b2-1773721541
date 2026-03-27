import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { 
  ArrowLeft, 
  Download, 
  Users, 
  Clock, 
  BookOpen,
  Heart,
  Camera,
  MessageSquare,
  Sprout,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function MuzeumMilosciPage() {
  return (
    <Layout>
      <SEO
        title="Muzeum Miłości - scenariusz o rozwodzie rodziców"
        description="Scenariusz zajęć biblioterapeutycznych dla dzieci przeżywających rozwód rodziców. Aktywności inspirowane książką 'Czasami szczęśliwi rodzice mieszkają oddzielnie'."
        url="https://biblioterapia.org/biblioterapia/scenariusze/muzeum-milosci-rozwod"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <article className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            <div className="mb-6">
              <Link 
                href="/biblioterapia/narzedziownik"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót do Narzędziownika
              </Link>
            </div>

            <div className="bg-card border rounded-2xl p-8 mb-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-amber-600" />
                </div>
                <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
                  Rozwód rodziców
                </span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Muzeum Miłości – jak pomóc dziecku zrozumieć rozwód rodziców
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Scenariusz zajęć inspirowanych książką „Czasami szczęśliwi rodzice mieszkają oddzielnie". Poprzez symboliczną podróż przez Muzeum Miłości dzieci uczą się, że rozwód nie jest ich winą.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span><strong>Czas:</strong> 60-90 minut</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span><strong>Wiek:</strong> 6-10 lat</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span><strong>Forma:</strong> Indywidualna lub grupa (max 6 dzieci)</span>
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Pobierz scenariusz PDF
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-bold text-blue-900 mb-2">
                    📖 Książka do tego scenariusza
                  </h2>
                  <p className="text-blue-800 mb-3">
                    Ten scenariusz oparty jest na książce:
                  </p>
                  <Link 
                    href="/ksiazki/czasami-szczesliwi-rodzice"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    „Czasami szczęśliwi rodzice mieszkają oddzielnie" →
                  </Link>
                  <p className="text-sm text-blue-700 mt-3">
                    Przeczytaj książkę przed przeprowadzeniem zajęć, aby lepiej zrozumieć metafory i symbolikę.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-6 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">Cele spotkania</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span><strong>Normalizacja emocji:</strong> Pokazanie, że smutek i złość są naturalne i potrzebne w procesie przepracowania rozwodu</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span><strong>Zdjęcie poczucia winy:</strong> Uświadomienie dziecku, że rozwód nie jest jego winą</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span><strong>Zrozumienie świata dorosłych:</strong> Pokazanie, że dorośli też mają trudności i popełniają błędy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span><strong>Pielęgnowanie miłości:</strong> Przekazanie, że miłość rodziców nie znika, tylko zmienia formę</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span><strong>Budowanie nadziei:</strong> Pokazanie, że można odnaleźć szczęście w nowej rzeczywistości</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4 text-amber-900">Potrzebne materiały</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-amber-900">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Książka „Czasami szczęśliwi rodzice mieszkają oddzielnie"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Kartki papieru i kredki/flamastry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Zdjęcia rodzinne (przyniesione przez dziecko)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Album lub duży arkusz papieru</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Doniczka z roślinką lub nasiona do zasadzenia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Poduszki (do ambulansu emocjonalnego)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Koperty (na listy do rodziców)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 mb-8">
              <h2 className="font-serif text-3xl font-bold">Przebieg zajęć</h2>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Wstęp i przedstawienie książki (10 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Cel:</strong> Stworzenie bezpiecznej przestrzeni i wprowadzenie do tematu rozwodu w delikatny sposób.
                  </p>
                  <p>
                    <strong>Co robisz:</strong> Zacznij od rozmowy o tym, że dzisiaj przeczytacie razem wyjątkową książkę o dziewczynce imieniem Helena, której rodzice postanowili się rozstać.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3">
                    <p className="text-sm text-blue-900">
                      <strong>💬 Przykładowe wprowadzenie:</strong> „Przeczytamy dzisiaj książkę o Helenie. Jej rodzice postanowili się rozstać. Helena ma dużo pytań i emocji. Ta książka pomoże nam zrozumieć, co się dzieje."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Czytanie książki (25-30 minut)</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Czytaj powoli. Zatrzymuj się przy najważniejszych fragmentach i rozmawiaj z dzieckiem.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Camera className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-rose-900 mb-2">Sala pamiątek – Miłość naprawdę istniała</h4>
                          <p className="text-sm text-rose-800 mb-2">
                            <strong>Fragment:</strong> Helena i Hektor oglądają albumy, zdjęcia i nagrania swoich rodziców z czasów, gdy byli szczęśliwi.
                          </p>
                          <p className="text-sm text-rose-800">
                            <strong>Cel:</strong> Pokazać, że miłość rodziców była prawdziwa.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-blue-900 mb-2">Gra „Zwyczajne życie"</h4>
                          <p className="text-sm text-blue-800">
                            <strong>Cel:</strong> Pokazać, że dorośli też mają trudności i że rozwód nie jest winą dziecka.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-amber-900 mb-2">Ambulans emocjonalny</h4>
                          <p className="text-sm text-amber-800">
                            <strong>Cel:</strong> Dać dziecku pozwolenie na wyrażanie wszystkich emocji bez wstydu.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Sprout className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-green-900 mb-2">Podlewanie miłością</h4>
                          <p className="text-sm text-green-800">
                            <strong>Cel:</strong> Pokazać, że miłość nie znika, tylko zmienia formę.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Aktywność: Album wspomnień (15 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Wspólnie naklejcie zdjęcia z czasów, gdy rodzice byli razem i porozmawiajcie o tych chwilach.
                  </p>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Aktywność: Ambulans emocjonalny (10 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Stwórzcie kącik emocji – miejsce, gdzie dziecko może wyrażać uczucia (poduszki, worek treningowy, zeszyt).
                  </p>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold text-primary">5</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Aktywność: List do rodziców (10 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Zachęć do napisania lub narysowania listu do rodziców. Dziecko samo decyduje, czy chce go pokazać.
                  </p>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold text-primary">6</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Aktywność: Rytuał rośliny (10 minut)</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Zasadźcie razem roślinę jako symbol miłości, która rośnie i nie znika.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-rose-50 border-2 border-amber-200 rounded-2xl p-8 mb-8 print:break-before-page">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-amber-700" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-amber-900">
                  Przewodnik: Czego unikać, a co wspierać?
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-300 p-4 text-left font-bold text-amber-900">
                        ❌ Czego unikać
                      </th>
                      <th className="border border-amber-300 p-4 text-left font-bold text-amber-900">
                        ✅ Jak wspierać
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-amber-300 p-4 text-amber-900">
                        „Nie płacz, musisz być dzielny/a"
                      </td>
                      <td className="border border-amber-300 p-4 text-green-900 bg-green-50">
                        „Możesz płakać. Twoje łzy pokazują, jak bardzo kochasz swoich rodziców"
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-amber-300 p-4 text-amber-900">
                        „Nie wolno tak krzyczeć"
                      </td>
                      <td className="border border-amber-300 p-4 text-green-900 bg-green-50">
                        „Jesteś zły/a. Masz prawo. Wykrzyczymy to razem w poduszkę"
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-amber-300 p-4 text-amber-900">
                        Eufemizmy: „Tata odszedł"
                      </td>
                      <td className="border border-amber-300 p-4 text-green-900 bg-green-50">
                        „Mama i tata postanowili się rozstać. Będą mieszkać osobno"
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 print:break-before-page">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-700" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-blue-900">
                  Apteczka Pierwszej Pomocy Emocjonalnej
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-3">
                    1. Gdy pojawia się płacz lub smutek
                  </h3>
                  <div className="bg-white border border-blue-200 rounded-lg p-4 space-y-2">
                    <p className="text-sm text-blue-800">💬 „Płacz, kochanie. Nie musisz być silny/a."</p>
                    <p className="text-sm text-blue-800">💬 „Możemy popłakać razem."</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-3">
                    2. Gdy wybucha złość
                  </h3>
                  <div className="bg-white border border-blue-200 rounded-lg p-4 space-y-2">
                    <p className="text-sm text-blue-800">💬 „Masz prawo być zły/a. Złość jest naturalna."</p>
                    <p className="text-sm text-blue-800">💬 „Wykrzyczymy to razem w poduszkę."</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-3">
                    3. Gdy dziecko milczy
                  </h3>
                  <div className="bg-white border border-blue-200 rounded-lg p-4 space-y-2">
                    <p className="text-sm text-blue-800">💬 „Nie musisz teraz mówić. Jestem tu obok."</p>
                    <p className="text-sm text-blue-800">💬 „Kiedy będziesz gotowy/a, daj mi znać."</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-3">
                    4. Budowanie nowej codzienności
                  </h3>
                  <div className="bg-white border border-blue-200 rounded-lg p-4 space-y-2">
                    <p className="text-sm text-blue-800">💬 „Pamiętasz, jak razem z tatą/mamą się bawiliście?"</p>
                    <p className="text-sm text-blue-800">💬 „Dzisiaj jest ci łatwiej. To dobrze."</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </article>
      </div>
    </Layout>
  );
}