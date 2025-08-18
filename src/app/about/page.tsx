import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Eye, Leaf, Heart, Compass } from 'lucide-react';

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
          <CardTitle className="font-headline flex items-center gap-3"><Eye className="h-6 w-6 text-primary" /> Our Mission: Where Passion Takes Flight</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
           <p>
            At Avian Observer, we’re on a mission to ignite wonder for the winged world. Birds are not just feathered creatures—they’re storytellers of ecosystems, symbols of freedom, and bridges between people and nature. We exist to:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <Leaf className="h-5 w-5 mt-1 text-primary"/>
              <span><strong>Inspire Curiosity</strong> – Whether you’re spotting your first robin or tracking a rare migratory species, we’re here to deepen your connection to avian life.</span>
            </li>
            <li className="flex items-start gap-3">
               <Compass className="h-5 w-5 mt-1 text-primary"/>
              <span><strong>Champion Conservation</strong> – By celebrating birds, we empower a global community to protect their habitats and the planet we share.</span>
            </li>
             <li className="flex items-start gap-3">
               <Heart className="h-5 w-5 mt-1 text-primary"/>
              <span><strong>Empower Every Birder</strong> – From novices to experts, we provide the tools to identify species, uncover hidden birding gems, and share discoveries with a thriving community.</span>
            </li>
          </ul>
          <p>
            Through technology, education, and shared passion, we’re building a future where every chirp, flutter, and soaring silhouette reminds us of nature’s magic.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-3"><Users className="h-6 w-6 text-primary" /> Who We Are: A Flock Built on Passion</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Avian Observer began as a dream among friends—a handful of birders, tech enthusiasts, and conservationists who believed birdwatching deserved a modern, joyful home. Today, we’re a diverse team united by:
          </p>
           <ul className="space-y-2">
            <li><strong>Expertise</strong> – Ornithologists, developers, and designers working side by side to create an intuitive, science-backed platform.</li>
            <li><strong>Innovation</strong> – Harnessing AI and user feedback to evolve, ensuring Avian Observer grows with you.</li>
            <li><strong>Community</strong> – You’re why we’re here. Your sightings, stories, and enthusiasm fuel our purpose.</li>
          </ul>
          <p>
           We’re more than an app or a website—we’re your birding companions. Together, let’s explore, learn, and safeguard the skies.
          </p>
          <p className="font-semibold">Join us. The adventure is just beginning.</p>
        </CardContent>
      </Card>
    </div>
  );
}
