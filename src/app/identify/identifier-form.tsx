'use client';

import { useState, useRef, useTransition } from 'react';
import Image from 'next/image';
import { identifyBird } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, Sparkles, Loader2, CheckCircle, AlertTriangle, Bird } from 'lucide-react';

const fileToDataUri = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export function IdentifierForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [result, setResult] = useState<{ success: boolean; message?: string; species?: string[] } | null>(null);
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit for Gemini
        toast({
            variant: "destructive",
            title: "Image too large",
            description: "Please select an image smaller than 4MB.",
        });
        return;
      }
      const dataUri = await fileToDataUri(file);
      setImagePreview(dataUri);
      setResult(null); // Reset result on new image
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!imagePreview) {
      toast({
        variant: "destructive",
        title: "No image selected",
        description: "Please upload a photo of the bird.",
      });
      return;
    }
    formData.append('photoDataUri', imagePreview);

    startTransition(async () => {
      const state = await identifyBird(result, formData);
      setResult(state);
      if (!state.success) {
        toast({
          variant: "destructive",
          title: "Identification Failed",
          description: state.message,
        });
      }
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="font-headline">Upload Sighting</CardTitle>
            <CardDescription>Provide a photo and location of your bird sighting.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="bird-photo">Bird Photo</Label>
              <Input id="bird-photo" name="bird-photo" type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} className="hidden" />
              <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()} className="w-full flex items-center gap-2">
                <Upload className="h-4 w-4" />
                <span>{imagePreview ? 'Change Photo' : 'Select Photo'}</span>
              </Button>
            </div>
            {imagePreview && (
              <div className="relative w-full aspect-video rounded-md overflow-hidden border">
                <Image src={imagePreview} alt="Bird preview" layout="fill" objectFit="contain" />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="location">Location Sighted</Label>
              <Input id="location" name="location" placeholder="e.g., Central Park, NYC" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isPending || !imagePreview}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Identifying...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Identify Bird
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Identification Results</CardTitle>
          <CardDescription>Potential species will be listed here.</CardDescription>
        </CardHeader>
        <CardContent>
          {!result && !isPending && (
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-48">
              <Bird className="h-12 w-12 mb-4" />
              <p>Results will appear here once you submit an image.</p>
            </div>
          )}
          {isPending && (
             <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-48">
              <Loader2 className="h-12 w-12 mb-4 animate-spin text-primary" />
              <p>Analyzing your sighting...</p>
            </div>
          )}
          {result && result.success && (
            <div className="space-y-4">
               <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <p className="font-semibold">{result.message}</p>
              </div>
              <ul className="space-y-2 list-disc list-inside bg-secondary p-4 rounded-md">
                {result.species?.map((species, index) => (
                  <li key={index} className="font-medium text-lg">{species}</li>
                ))}
              </ul>
            </div>
          )}
           {result && !result.success && !isPending && (
             <div className="flex flex-col items-center justify-center text-center text-destructive h-48">
              <AlertTriangle className="h-12 w-12 mb-4" />
              <p className="font-semibold">Identification Failed</p>
              <p className="text-sm">{result.message}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
