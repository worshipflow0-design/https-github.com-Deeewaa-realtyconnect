'use server';
/**
 * @fileOverview An AI-powered product search suggestion flow.
 *
 * - suggestProducts - A function that provides product suggestions based on search keywords.
 * - SuggestProductsInput - The input type for the suggestProducts function.
 * - SuggestProductsOutput - The return type for the suggestProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProductsInputSchema = z.object({
  keywords: z
    .string()
    .describe('The keywords entered by the user to search for products.'),
});
export type SuggestProductsInput = z.infer<typeof SuggestProductsInputSchema>;

const SuggestProductsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of product suggestions based on the keywords.'),
});
export type SuggestProductsOutput = z.infer<typeof SuggestProductsOutputSchema>;

export async function suggestProducts(input: SuggestProductsInput): Promise<SuggestProductsOutput> {
  return suggestProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProductsPrompt',
  input: {schema: SuggestProductsInputSchema},
  output: {schema: SuggestProductsOutputSchema},
  prompt: `You are an AI assistant that provides product search suggestions for an e-commerce marketplace.

  Based on the user's keywords, provide a list of suggested products they might be interested in.
  Consider current trends and common product attributes when generating suggestions.

  Keywords: {{{keywords}}}

  Suggestions:`,
});

const suggestProductsFlow = ai.defineFlow(
  {
    name: 'suggestProductsFlow',
    inputSchema: SuggestProductsInputSchema,
    outputSchema: SuggestProductsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
