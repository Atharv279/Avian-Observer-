export const birds = [
    {
      slug: 'blue-jay',
      name: 'Blue Jay',
      scientificName: 'Cyanocitta cristata',
      image: 'https://placehold.co/800x600.png',
      images: [
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
      ],
      description: 'The Blue Jay is a large crested songbird native to North America. It is blue, white, and black, and has a loud, harsh call.',
      habitat: 'Found in all kinds of forests, especially near oak trees; a common visitor to suburbs and city parks.',
      diet: 'Mostly nuts (especially acorns), seeds, and insects. Occasionally eats eggs or nestlings of other birds.',
      behavior: 'Known for its intelligence and complex social systems. They are noisy, bold, and aggressive birds.',
      breeding: 'Builds an open cup nest in the branches of a tree. Both sexes help build the nest and feed the young.',
      conservationStatus: 'Least Concern',
      wingspan: '34-43 cm',
      length: '22-30 cm',
      rangeMap: 'https://placehold.co/400x300.png',
      audioUrl: '#',
    },
    {
      slug: 'bald-eagle',
      name: 'Bald Eagle',
      scientificName: 'Haliaeetus leucocephalus',
      image: 'https://placehold.co/800x600.png',
      images: [
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
      ],
      description: 'The Bald Eagle is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle.',
      habitat: 'Typically nests near large bodies of open water with an abundant food supply and old-growth trees for nesting.',
      diet: 'Primarily fish, which it swoops down and snatches from the water with its talons. Also eats other birds and mammals.',
      behavior: 'Majestic and powerful. Often seen soaring high above the water or perched in a tall tree. They are monogamous and mate for life.',
      breeding: 'Builds some of the largest of all bird nests, up to 4 meters deep, 2.5 meters wide, and 1 metric ton in weight.',
      conservationStatus: 'Least Concern',
      wingspan: '1.8-2.3 m',
      length: '70-102 cm',
      rangeMap: 'https://placehold.co/400x300.png',
      audioUrl: '#',
    },
    {
      slug: 'american-robin',
      name: 'American Robin',
      scientificName: 'Turdus migratorius',
      image: 'https://placehold.co/800x600.png',
      images: [
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
      ],
      description: 'The American Robin is a migratory songbird of the true thrush genus and Turdidae, the wider thrush family.',
      habitat: 'Widespread throughout North America, wintering from southern Canada to central Mexico and along the Pacific Coast. Found in lawns, fields, and city parks.',
      diet: 'Eats earthworms, insects, and berries. Famously seen pulling worms from lawns.',
      behavior: 'Active during the day and assembles in large flocks at night. Its song is a familiar sound of spring.',
      breeding: 'Builds a cup-shaped nest of mud and grass. The female lays 3-6 light blue eggs.',
      conservationStatus: 'Least Concern',
      wingspan: '31-41 cm',
      length: '23-28 cm',
      rangeMap: 'https://placehold.co/400x300.png',
      audioUrl: '#',
    },
    {
      slug: 'northern-cardinal',
      name: 'Northern Cardinal',
      scientificName: 'Cardinalis cardinalis',
      image: 'https://placehold.co/800x600.png',
      images: [
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
      ],
      description: 'The Northern Cardinal is a bird in the genus Cardinalis; it is also known colloquially as the redbird, common cardinal or just cardinal.',
      habitat: 'Resident in woodlands, gardens, shrublands, and wetlands of eastern and central North America.',
      diet: 'Mainly seeds and fruits, supplemented with insects in the summer.',
      behavior: 'Males are known for their territorial singing. Pairs often mate for life and may stay together year-round.',
      breeding: 'The female builds a tidy cup nest in a dense shrub or low tree and lays 3-4 eggs.',
      conservationStatus: 'Least Concern',
      wingspan: '25-31 cm',
      length: '21-23 cm',
      rangeMap: 'https://placehold.co/400x300.png',
      audioUrl: '#',
    },
];

export const featuredBirds = birds.slice(0, 4);

export const guides = [
    {
        slug: 'birding-101',
        title: 'Birding 101: A Beginner\'s Guide',
        excerpt: 'Everything you need to know to start your birding adventure, from essential gear to field etiquette.',
        image: 'https://placehold.co/1200x600.png',
        content: '<h2>Introduction</h2><p>Birdwatching, or birding, is a fantastic hobby that connects you with nature. This guide will walk you through the basics.</p><h2>Essential Gear</h2><ul><li>Binoculars</li><li>Field Guide</li><li>Notebook & Pen</li></ul><h2>Tips for Success</h2><p>Be patient, listen carefully, and the early bird gets the worm (and sees the birds)!</p>',
    },
    {
        slug: 'choosing-binoculars',
        title: 'How to Choose the Right Binoculars',
        excerpt: 'A deep dive into magnification, field of view, and other features to consider when buying binoculars for birding.',
        image: 'https://placehold.co/1200x600.png',
        content: '<h2>Understanding the Numbers</h2><p>What does 8x42 mean? We break it down for you.</p><h2>Our Top Picks</h2><p>Here are some of the best binoculars for every budget.</p>',
    },
    {
        slug: 'bird-photography-tips',
        title: 'Top 10 Tips for Photographing Birds',
        excerpt: 'Learn how to capture stunning photos of birds in their natural habitat with these expert tips.',
        image: 'https://placehold.co/1200x600.png',
        content: '<h2>Camera Settings</h2><p>Shutter speed is key. We explain the ideal settings for sharp photos.</p><h2>Composition</h2><p>Learn how to frame your shot for maximum impact.</p>',
    }
];

export const spots = [
    {
        slug: 'costa-rica-hotspot',
        title: 'Birding in Costa Rica: A Tropical Paradise',
        excerpt: 'Discover the incredible avian diversity of Costa Rica, home to over 900 bird species.',
        image: 'https://placehold.co/1200x600.png',
        content: '<h2>Must-See Species</h2><p>The Resplendent Quetzal, Scarlet Macaw, and Keel-billed Toucan are just a few of the amazing birds you can see.</p><h2>Best Lodges</h2><p>We recommend the best eco-lodges for birdwatchers.</p>',
    },
    {
        slug: 'cape-may-migration',
        title: 'Cape May, New Jersey: A Migration Marvel',
        excerpt: 'Learn why Cape May is one of the world\'s best places to witness fall bird migration.',
        image: 'https://placehold.co/1200x600.png',
        content: '<h2>What to Expect</h2><p>Millions of birds pass through Cape May each fall. It\'s a spectacular sight.</p><h2>Key Locations</h2><p>The Cape May Hawkwatch and the "Morning Flight" at the beach are not to be missed.</p>',
    }
];

export const galleryPhotos = [
  { id: 1, src: 'https://placehold.co/500x500.png', alt: 'Northern Cardinal' },
  { id: 2, src: 'https://placehold.co/500x500.png', alt: 'Blue Jay' },
  { id: 3, src: 'https://placehold.co/500x500.png', alt: 'American Robin' },
  { id: 4, src: 'https://placehold.co/500x500.png', alt: 'Bald Eagle' },
  { id: 5, src: 'https://placehold.co/500x500.png', alt: 'Hummingbird' },
  { id: 6, src: 'https://placehold.co/500x500.png', alt: 'Goldfinch' },
  { id: 7, src: 'https://placehold.co/500x500.png', alt: 'Woodpecker' },
  { id: 8, src: 'https://placehold.co/500x500.png', alt: 'Sparrow' },
  { id: 9, src: 'https://placehold.co/500x500.png', alt: 'Osprey' },
  { id: 10, src: 'https://placehold.co/500x500.png', alt: 'Peregrine Falcon' },
  { id: 11, src: 'https://placehold.co/500x500.png', alt: 'Great Horned Owl' },
  { id: 12, src: 'https://placehold.co/500x500.png', alt: 'Indigo Bunting' },
];
