import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  color: "primary" | "secondary" | "accent" | "tertiary";
  purchaseUrl?: string;
}

export function BookCard({
  title,
  subtitle,
  description,
  image,
  slug,
  color,
  purchaseUrl,
}: BookCardProps) {
  const colorClasses = {
    primary: "from-primary-light to-primary",
    secondary: "from-secondary-light to-secondary",
    accent: "from-accent-light to-accent",
    tertiary: "from-tertiary-light to-tertiary",
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link href={`/ksiazki/${slug}`} className="block">
        <div className="relative h-64 bg-gradient-to-br overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-10`} />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 italic">{subtitle}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </Link>
      <div className="px-6 pb-6 flex gap-3">
        <Link href={`/ksiazki/${slug}`} className="flex-1">
          <Button variant="ghost" size="sm" className="w-full group/btn">
            Dowiedz się więcej
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
        {purchaseUrl && (
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Button variant="default" size="sm" className="w-full group/btn bg-accent hover:bg-accent/90">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Kup książkę
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}