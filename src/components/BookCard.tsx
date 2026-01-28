import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  color: "primary" | "secondary" | "accent" | "tertiary";
}

export function BookCard({
  title,
  subtitle,
  description,
  image,
  slug,
  color,
}: BookCardProps) {
  const colorClasses = {
    primary: "from-primary-light to-primary",
    secondary: "from-secondary-light to-secondary",
    accent: "from-accent-light to-accent",
    tertiary: "from-tertiary-light to-tertiary",
  };

  return (
    <Link
      href={`/ksiazki/${slug}`}
      className="group block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 bg-gradient-to-br overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-10`} />
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
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
        <Button variant="ghost" size="sm" className="group/btn">
          Dowiedz się więcej
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Link>
  );
}