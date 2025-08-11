import { notFound } from 'next/navigation';
import Image from 'next/image';
import { spots } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export async function generateStaticParams() {
  return spots.map((spot) => ({
    slug: spot.slug,
  }));
}

export default function SpotPage({ params }: { params: { slug: string } }) {
  const spot = spots.find((s) => s.slug === params.slug);

  if (!spot) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 flex items-center gap-3"><MapPin className="h-10 w-10 text-primary"/>{spot.title}</h1>
          <p className="text-xl text-muted-foreground">{spot.excerpt}</p>
          <div className="mt-6 w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={spot.image}
              alt={spot.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint="location guide"
            />
          </div>
        </header>

        <Card>
          <CardContent className="p-6 md:p-8">
            <div
              className="prose dark:prose-invert max-w-none prose-h2:font-headline prose-h2:text-2xl prose-h2:mb-4 prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4"
              dangerouslySetInnerHTML={{ __html: spot.content }}
            />
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
