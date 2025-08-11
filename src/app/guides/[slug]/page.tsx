import { notFound } from 'next/navigation';
import Image from 'next/image';
import { guides } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{guide.title}</h1>
          <p className="text-xl text-muted-foreground">{guide.excerpt}</p>
          <div className="mt-6 w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={guide.image}
              alt={guide.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint="guide article"
            />
          </div>
        </header>

        <Card>
          <CardContent className="p-6 md:p-8">
            <div
              className="prose dark:prose-invert max-w-none prose-h2:font-headline prose-h2:text-2xl prose-h2:mb-4 prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
