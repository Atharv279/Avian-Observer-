
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { birds } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function SpeciesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const filteredBirds = useMemo(() => {
    if (!searchTerm) {
      return birds;
    }
    return birds.filter(
      (bird) =>
        bird.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bird.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    router.push('/species');
  };

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
          <Input
            placeholder="Search for a species..."
            className="pl-10 pr-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          {searchTerm && (
            <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBirds.length > 0 ? (
          filteredBirds.map((bird) => (
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
                  <CardTitle className="font-headline text-xl mb-1 break-words">{bird.name}</CardTitle>
                  <p className="text-sm text-muted-foreground italic">{bird.scientificName}</p>
                  <Badge variant="outline" className="mt-2">
                    {bird.conservationStatus}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No species found for &quot;{searchTerm}&quot;.</p>
        )}
      </div>
    </div>
  );
}
