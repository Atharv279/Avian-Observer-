import Image from 'next/image';
import Link from 'next/link';
import { spots } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin } from 'lucide-react';

export default function SpotsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Best Birding Spots</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Discover birdwatching hotspots and seasonal migration events.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spots.map((spot) => (
          <Link href={`/spots/${spot.slug}`} key={spot.slug} className="block group">
            <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="p-0">
                <Image
                  src={spot.image}
                  alt={spot.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="travel landscape"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2 flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> {spot.title}</CardTitle>
                <CardDescription>{spot.excerpt}</CardDescription>
                 <div className="flex items-center mt-4 font-semibold text-primary">
                  Explore Spot <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
