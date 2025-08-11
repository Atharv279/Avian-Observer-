import { notFound } from 'next/navigation';
import Image from 'next/image';
import { birds } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Mic, Maximize } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export async function generateStaticParams() {
  return birds.map((bird) => ({
    slug: bird.slug,
  }));
}

export default function SpeciesProfilePage({ params }: { params: { slug: string } }) {
  const bird = birds.find((b) => b.slug === params.slug);

  if (!bird) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{bird.name}</h1>
        <p className="text-xl text-muted-foreground italic">{bird.scientificName}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
           <Carousel className="w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              {bird.images.map((src, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={src}
                    alt={`${bird.name} - image ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    data-ai-hint={`${bird.name} photo`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <Tabs defaultValue="description" className="w-full">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="habitat">Habitat & Range</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
              <TabsTrigger value="breeding">Breeding</TabsTrigger>
            </TabsList>
            <Card className="mt-2">
                <CardContent className="p-6 text-base">
                    <TabsContent value="description">
                        <p>{bird.description}</p>
                    </TabsContent>
                    <TabsContent value="habitat">
                        <p>{bird.habitat}</p>
                    </TabsContent>
                    <TabsContent value="behavior">
                        <p>{bird.behavior}</p>
                    </TabsContent>
                    <TabsContent value="breeding">
                        <p>{bird.breeding}</p>
                    </TabsContent>
                </CardContent>
            </Card>
          </Tabs>
        </div>

        <aside className="space-y-6 lg:pt-0">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <strong>Length:</strong> <span>{bird.length}</span>
                </li>
                <li className="flex justify-between">
                  <strong>Wingspan:</strong> <span>{bird.wingspan}</span>
                </li>
                <Separator />
                <li className="flex justify-between items-center">
                  <strong>Diet:</strong> <span className="text-right">{bird.diet}</span>
                </li>
                <Separator />
                <li className="flex justify-between items-center">
                  <strong>Status:</strong> <Badge variant="secondary">{bird.conservationStatus}</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><Mic size={20} /> Bird Call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Listen to the distinct call of the {bird.name}.</p>
              <Button asChild className="w-full">
                <a href={bird.audioUrl} target="_blank" rel="noopener noreferrer">Play Audio</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><MapPin size={20}/> Geographic Range</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={bird.rangeMap}
                alt={`${bird.name} range map`}
                width={400}
                height={300}
                className="w-full h-auto rounded-md border"
                data-ai-hint="geographic map"
              />
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
