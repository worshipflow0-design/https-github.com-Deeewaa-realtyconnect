"use client";

import { useState, useTransition, useCallback, useEffect } from 'react';
import { Search, Loader2, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { suggestProducts, type SuggestProductsOutput } from '@/ai/flows/ai-suggested-product-search';
import { cn } from '@/lib/utils';

// Debounce function
const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
};

export default function AiProductSearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestProductsOutput['suggestions']>([]);
  const [isPending, startTransition] = useTransition();
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };
  
  const debouncedSuggest = useCallback(debounce(async (searchQuery: string) => {
    if (searchQuery.length > 2) {
      startTransition(async () => {
        const result = await suggestProducts({ keywords: searchQuery });
        setSuggestions(result.suggestions);
      });
    } else {
      setSuggestions([]);
    }
  }, 300), []);

  useEffect(() => {
    debouncedSuggest(query);
  }, [query, debouncedSuggest]);

  const showSuggestions = isFocused && (suggestions.length > 0 || isPending);

  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(query);
        }}
        className="flex w-full items-center space-x-2"
      >
        <div className="relative flex-grow">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for products with AI assistance..."
            className="pl-11 h-14 text-base bg-white/95 backdrop-blur-sm text-black placeholder:text-gray-500 focus:bg-white border-white/20 shadow-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
        </div>
        <Button type="submit" size="lg" className="h-14 px-6 shadow-lg hover-lift">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
      
      <div className={cn(
        "absolute top-full mt-2 w-full z-10 transition-opacity duration-300",
        showSuggestions ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}>
        <Card className="shadow-2xl border-0 glass-effect">
          <CardContent className="p-6">
            {isPending && (
              <div className="flex items-center justify-center p-6">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <p className="ml-3 text-muted-foreground font-medium">AI is thinking...</p>
              </div>
            )}
            {!isPending && suggestions.length > 0 && (
              <>
                <h4 className="text-sm font-semibold flex items-center mb-4 text-primary">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Suggestions
                </h4>
                <ul className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        onClick={() => handleSearch(suggestion)}
                        className="w-full text-left p-3 rounded-lg hover:bg-muted/50 text-sm transition-smooth font-medium"
                      >
                        {suggestion}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
