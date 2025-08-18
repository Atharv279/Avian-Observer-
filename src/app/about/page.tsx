import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">About Avian Observer</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Connecting bird enthusiasts with the world of birds.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-3"><Eye className="h-6 w-6 text-primary" /> Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            At Avian Observer, our mission is to foster a deeper appreciation for avian life and to provide a comprehensive resource for birdwatchers of all levels. We believe that by connecting people with the beauty and complexity of birds, we can inspire a greater commitment to conservation and the protection of natural habitats.
          </p>
          <p>
            We strive to be the go-to platform for identifying species, discovering new birding locations, and sharing the joy of birdwatching with a vibrant community of fellow enthusiasts.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-3"><Users className="h-6 w-6 text-primary" /> Who We Are</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Avian Observer was started by a small group of passionate birders, developers, and conservationists who wanted to create a modern, user-friendly tool for the birdwatching community. Our team combines expertise in ornithology, technology, and design to build a platform that is both educational and enjoyable to use.
          </p>
          <p>
            We are dedicated to continuous improvement, using feedback from our users and the latest in AI technology to make Avian Observer the best birding companion available. Join us on our journey to explore and celebrate the incredible world of birds.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
