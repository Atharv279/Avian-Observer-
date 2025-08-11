import Image from 'next/image';
import { galleryPhotos } from '@/lib/placeholder-data';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Community Gallery</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          A visual celebration of birds, contributed by enthusiasts like you.
        </p>
      </header>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryPhotos.map((photo) => (
          <Dialog key={photo.id}>
            <DialogTrigger asChild>
              <div className="overflow-hidden rounded-lg cursor-pointer break-inside-avoid group relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={photo.alt}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="absolute bottom-2 left-3 text-white font-semibold">{photo.alt}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0">
               <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                   data-ai-hint={photo.alt}
                />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
