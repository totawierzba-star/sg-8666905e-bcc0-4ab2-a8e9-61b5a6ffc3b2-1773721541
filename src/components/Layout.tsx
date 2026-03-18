import { ReactNode } from "react";
import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Strona główna", href: "/" },
  { name: "Biblioterapia", href: "/biblioterapia" },
  { name: "Scenariusze warsztatów", href: "/biblioterapia/narzedziownik" },
  { name: "Książki", href: "/ksiazki" },
  { name: "Artykuły", href: "/artykuly" },
];

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background-alt/95 backdrop-blur supports-[backdrop-filter]:bg-background-alt/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <BookOpen className="h-6 w-6 text-secondary transition-colors group-hover:text-accent" />
              <span className="font-serif text-xl font-semibold text-primary transition-colors group-hover:text-accent">
                Książki do zadań specjalnych
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Otwórz menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-background-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* O projekcie */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">
                O projekcie
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Książki do zadań specjalnych to seria publikacji wspierających
                dzieci i rodziców w trudnych momentach życia. Z empatią i
                profesjonalizmem.
              </p>
            </div>

            {/* Książki */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">Książki</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/ksiazki/zaba"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Żaba. Mała opowieść o żałobie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/czasami-szczesliwi-rodzice"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Czasami szczęśliwi rodzice mieszkają oddzielnie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/nie-znajdziesz-mnie"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Nie znajdziesz mnie po śladach. Stop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/kaluzysko"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Kałuzysko
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/guzikozerca"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Guzikożerca na tropie słów
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/skok"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Skok
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/linka-w-mysim-miescie"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Linka w mysim mieście
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/tkaczka-chmur"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Tkaczka chmur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/mrowki"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Mrówki
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/skad-jestem"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Skąd jestem?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/polezja"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Polezja o niezwykłej mocy łez
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ksiazki/zielona-dziewczynka"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Zielona dziewczynka
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border-light text-center text-sm text-muted-foreground">
            <p>© 2026 Książki do zadań specjalnych. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}