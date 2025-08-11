import Image from 'next/image';
import Link from 'next/link';
import { guides } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Birding Guides</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Tips, tutorials, and gear guides for birdwatchers of all levels.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <Link href={`/guides/${guide.slug}`} key={guide.slug} className="block group">
            <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="p-0">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="nature tutorial"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{guide.title}</CardTitle>
                <CardDescription>{guide.excerpt}</CardDescription>
                <div className="flex items-center mt-4 font-semibold text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
