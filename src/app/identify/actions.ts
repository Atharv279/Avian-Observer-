'use server';

import { identifyBirdSpecies } from '@/ai/flows/identify-bird-species';
import { z } from 'zod';

const IdentifySchema = z.object({
  photoDataUri: z.string().refine(val => val.startsWith('data:image/'), {
    message: 'Invalid image data URI',
  }),
  location: z.string().min(1, 'Location is required.'),
});

type State = {
  success: boolean;
  message?: string;
  species?: string[];
};

export async function identifyBird(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = IdentifySchema.safeParse({
    photoDataUri: formData.get('photoDataUri'),
    location: formData.get('location'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.photoDataUri?.[0] || validatedFields.error.flatten().fieldErrors.location?.[0] || 'Invalid input.',
    };
  }

  try {
    const result = await identifyBirdSpecies(validatedFields.data);
    if (result.species && result.species.length > 0) {
      return { success: true, species: result.species, message: 'Identification successful!' };
    } else {
      return { success: false, message: "Could not identify the bird species. Please try another image." };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
