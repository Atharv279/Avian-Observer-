import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Eye, Leaf, Heart, Compass, Zap, Bird } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">About Avian Observer</h1>
        <p className="text-muted-foreground mt-3 text-lg max-w-3xl mx-auto">
          We believe that a deeper connection with birds creates a better world for all living things.
        </p>
      </header>

      <div className="space-y-10">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-3 text-3xl">
              <Eye className="h-8 w-8 text-primary" />
              Our Mission: Where Passion Takes Flight
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none text-base">
            <p>
              At Avian Observer, we’re on a mission to ignite a universal sense of wonder for the winged world. Birds are far more than just feathered creatures—they are vibrant storytellers of our ecosystems, powerful symbols of freedom, and the living bridges that connect humanity back to nature. Our platform was born from a simple yet profound idea: the more we understand and appreciate birds, the more we are moved to protect them and the delicate habitats they call home. We exist to be the spark that lights that fire of curiosity and stewardship.
            </p>
            <ul className="space-y-4 !pl-0">
              <li className="flex items-start gap-4">
                <Leaf className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                <div>
                  <h3 className="font-semibold text-lg !mb-1">Inspire Curiosity</h3>
                  <span>Whether you’re a city dweller spotting your first robin from a window or a seasoned naturalist tracking a rare migratory species across continents, we are here to deepen that moment of connection. Our rich species profiles, detailed guides, and stunning community gallery are designed not just to inform, but to enchant. We want to turn every glance towards the sky into an opportunity for discovery and transform casual interest into a lifelong passion for avian life.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                 <Compass className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                <div>
                  <h3 className="font-semibold text-lg !mb-1">Champion Conservation</h3>
                  <span>By celebrating the beauty and diversity of birds, we empower a global community to become active champions for their conservation. Every sighting logged, every photo shared contributes to a greater understanding of bird populations and their movements. We believe that awareness is the first step toward action, and by making birding accessible and engaging, we are building a formidable force for protecting their habitats and, by extension, the health of the entire planet we share.</span>
                </div>
              </li>
               <li className="flex items-start gap-4">
                 <Heart className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                <div>
                  <h3 className="font-semibold text-lg !mb-1">Empower Every Birder</h3>
                  <span>From absolute novices feeling overwhelmed by the sheer variety of species to seasoned experts seeking new challenges, we provide the essential tools for the journey. Our AI-powered identifier demystifies the unknown, our curated guides uncover hidden birding gems, and our community platform provides a space to share discoveries and learn from one another. We are committed to empowering every user with the knowledge and confidence to explore, identify, and contribute.</span>
                </div>
              </li>
            </ul>
            <p className="font-semibold">
              Through the thoughtful application of technology, a commitment to education, and the power of a shared passion, we’re building a future where every chirp, flutter, and soaring silhouette serves as a poignant and powerful reminder of nature’s enduring magic.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-3 text-3xl">
              <Users className="h-8 w-8 text-primary" />
              Who We Are: A Flock Built on Passion
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none text-base">
            <p>
              Avian Observer began as a dream shared among a small group of friends—a diverse handful of dedicated birders, innovative tech enthusiasts, and committed conservationists who believed that the timeless joy of birdwatching deserved a modern, intuitive, and joyful home. What started with conversations on muddy trails and sketches on coffee-stained napkins has grown into a vibrant platform. Today, we’re a dedicated team, but that original spirit of collaborative passion remains at our core. We are united by:
            </p>
             <ul className="space-y-4 !pl-0">
               <li className="flex items-start gap-4">
                <Bird className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                <div>
                  <h3 className="font-semibold text-lg !mb-1">Authentic Expertise</h3>
                  <span>Our strength lies in our synergy. We are ornithologists, wildlife biologists, software developers, and UX designers working side by side. This blend of scientific rigor and technical skill allows us to build a platform that is not only powerful and accurate but also beautiful and a delight to use. We ground our features in real-world ornithological principles to create an experience that is both trustworthy and deeply engaging.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Zap className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                <div>
                  <h3 className="font-semibold text-lg !mb-1">Relentless Innovation</h3>
                  <span>We are endlessly curious and driven to push the boundaries of what's possible. By harnessing the power of artificial intelligence, machine learning, and direct user feedback, we ensure that Avian Observer is a living, breathing platform that constantly evolves. We are committed to refining our tools and introducing new features that grow with our community and anticipate the needs of the modern birder.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Heart className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                <div>
                  <h3 className="font-semibold text-lg !mb-1">Unwavering Community Focus</h3>
                  <span>You, our user, are the reason we’re here. Your sightings, your stories, your feedback, and your boundless enthusiasm are the lifeblood of this platform. We are building more than just an app or a website; we are nurturing a global flock. Every decision we make is guided by how we can best serve, support, and connect this incredible community of nature lovers.</span>
                </div>
              </li>
            </ul>
            <p>
             We are your companions on this adventure. Together, let’s continue to explore, learn, and safeguard the skies for generations to come.
            </p>
            <p className="font-semibold text-lg text-center mt-6">Join us. The adventure is just beginning.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
