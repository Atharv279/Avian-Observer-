'use server';

/**
 * @fileOverview Identifies bird species based on an image and location.
 *
 * - identifyBirdSpecies - A function that identifies bird species.
 * - IdentifyBirdSpeciesInput - The input type for the identifyBirdSpecies function.
 * - IdentifyBirdSpeciesOutput - The return type for the identifyBirdSpecies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifyBirdSpeciesInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a bird, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  location: z.string().describe('The location where the bird was sighted.'),
});
export type IdentifyBirdSpeciesInput = z.infer<typeof IdentifyBirdSpeciesInputSchema>;

const IdentifyBirdSpeciesOutputSchema = z.object({
  species: z
    .array(z.string())
    .describe('A list of potential bird species identifications.'),
});
export type IdentifyBirdSpeciesOutput = z.infer<typeof IdentifyBirdSpeciesOutputSchema>;

export async function identifyBirdSpecies(
  input: IdentifyBirdSpeciesInput
): Promise<IdentifyBirdSpeciesOutput> {
  return identifyBirdSpeciesFlow(input);
}

const identifyBirdSpeciesPrompt = ai.definePrompt({
  name: 'identifyBirdSpeciesPrompt',
  input: {schema: IdentifyBirdSpeciesInputSchema},
  output: {schema: IdentifyBirdSpeciesOutputSchema},
  prompt: `You are an expert ornithologist specializing in identifying bird species.

  Based on the provided image and location, suggest potential bird species identifications.

  Photo: {{media url=photoDataUri}}
  Location: {{{location}}}

  Return a list of potential bird species.`,
});

const identifyBirdSpeciesFlow = ai.defineFlow(
  {
    name: 'identifyBirdSpeciesFlow',
    inputSchema: IdentifyBirdSpeciesInputSchema,
    outputSchema: IdentifyBirdSpeciesOutputSchema,
  },
  async input => {
    const {output} = await identifyBirdSpeciesPrompt(input);
    return output!;
  }
);
