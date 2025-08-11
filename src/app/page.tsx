import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { featuredBirds, guides, galleryPhotos } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://placehold.co/1600x900.png"
            alt="A serene bird-watching scene"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="serene bird watching"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="z-20 p-4 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Avian Observer
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto">
              Explore the World of Birds – Identification Guides, Tips, and a Community Gallery.
            </p>
            <div className="relative max-w-md mx-auto">
              <Input
                placeholder="Search for a bird species..."
                className="pr-10 text-black"
                aria-label="Search for a bird species"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </section>

        <section id="featured-species" className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 font-headline">Featured Species</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredBirds.map((bird) => (
                <Link href={`/species/${bird.slug}`} key={bird.slug}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <CardHeader className="p-0">
                      <Image
                        src={bird.image}
                        alt={bird.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                        data-ai-hint={bird.name}
                      />
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="font-headline text-xl">{bird.name}</CardTitle>
                      <p className="text-sm text-muted-foreground italic">{bird.scientificName}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline">New to Birding? Start Here.</h2>
              <p className="text-muted-foreground text-lg">
                Our guides cover everything from choosing the right binoculars to identifying birds by their song.
              </p>
              <div className="space-y-3">
                {guides.slice(0, 2).map((guide) => (
                  <Link href={`/guides/${guide.slug}`} key={guide.slug} className="block">
                     <Card className="hover:bg-accent transition-colors">
                        <CardContent className="p-4 flex items-center justify-between">
                            <h3 className="font-semibold">{guide.title}</h3>
                            <ArrowRight className="h-5 w-5 text-primary" />
                        </CardContent>
                     </Card>
                  </Link>
                ))}
              </div>
              <Button asChild>
                <Link href="/guides">
                  See All Guides <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
               <Image
                  src="https://placehold.co/600x400.png"
                  alt="Binoculars looking out over a forest"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="binoculars forest"
                />
            </div>
          </div>
        </section>

        <section id="gallery-preview" className="py-12 md:py-20 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold font-headline">Latest from the Gallery</h2>
                    <p className="text-muted-foreground mt-2">Community sightings from around the world.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryPhotos.slice(0, 8).map((photo) => (
                        <div key={photo.id} className="relative aspect-square rounded-lg overflow-hidden group">
                           <Image
                            src={photo.src}
                            alt={photo.alt}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={photo.alt}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-2">
                                <p className="text-white text-sm font-semibold">{photo.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                  <Button asChild variant="outline">
                    <Link href="/gallery">
                        View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
