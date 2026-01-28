import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  category?: string;
}

export function ArticleCard({
  title,
  excerpt,
  author,
  date,
  image,
  slug,
  category,
}: ArticleCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {category && (
          <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        )}
      </div>

      <CardHeader className="flex-1">
        <h3 className="font-serif text-xl font-semibold mb-2 line-clamp-2 hover:text-accent transition-colors">
          <Link href={`/artykuly/${slug}`}>{title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button asChild variant="ghost" size="sm" className="group">
          <Link href={`/artykuly/${slug}`}>
            Czytaj więcej
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}