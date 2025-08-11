import Image from 'next/image';
import Link from 'next/link';
import { birds } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function SpeciesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Species Guide</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          An encyclopedia of bird profiles. Search or browse by family.
        </p>
      </header>
      <div className="mb-8 max-w-lg mx-auto">
        <div className="relative">
          <Input placeholder="Search for a species..." className="pr-10" />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {birds.map((bird) => (
          <Link href={`/species/${bird.slug}`} key={bird.slug}>
            <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out group">
              <CardHeader className="p-0 relative">
                <Image
                  src={bird.image}
                  alt={bird.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={bird.name}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-xl mb-1">{bird.name}</CardTitle>
                <p className="text-sm text-muted-foreground italic">{bird.scientificName}</p>
                <Badge variant="outline" className="mt-2">
                  {bird.conservationStatus}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
