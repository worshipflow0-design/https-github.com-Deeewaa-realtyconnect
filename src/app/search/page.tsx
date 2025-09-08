'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Plus } from 'lucide-react';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const filteredProducts = query 
    ? products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.store.name.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-3">
            <Search className="w-8 h-8" />
            <h1 className="text-3xl font-bold font-headline">
            {query ? 'Search Results' : 'All Products'}
            </h1>
        </div>
        {query && <p className="text-lg text-muted-foreground mt-2">Showing results for: <span className="text-foreground font-semibold">"{query}"</span></p>}
      </section>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden relative">
              <Link href="#">
                <div className="aspect-square relative w-full bg-muted rounded-t-lg overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    data-ai-hint="product photo"
                  />
                </div>
                <CardContent className="p-3">
                    <p className="text-xs text-muted-foreground">{product.store.name}</p>
                    <h3 className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-bold text-base mt-1">K{product.price.toFixed(2)}</p>
                </CardContent>
              </Link>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" className="w-8 h-8">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <Search className="w-16 h-16 mx-auto text-muted-foreground/30" />
            <p className="text-xl font-semibold mt-4">No products found</p>
            <p className="text-muted-foreground mt-2">Try a different search term or check back later.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<SearchPageSkeleton />}>
            <SearchResults />
        </Suspense>
    )
}

function SearchPageSkeleton() {
    return (
        <div className="space-y-8 animate-pulse">
            <section>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full" />
                    <div className="h-8 w-48 bg-muted rounded-md" />
                </div>
                <div className="h-6 w-64 bg-muted rounded-md mt-2" />
            </section>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {[...Array(10)].map((_, i) => (
                    <Card key={i}>
                        <div className="aspect-square w-full bg-muted rounded-t-lg" />
                        <CardContent className="p-3 space-y-2">
                            <div className="h-3 w-1/3 bg-muted rounded-md" />
                            <div className="h-4 w-full bg-muted rounded-md" />
                            <div className="h-5 w-1/2 bg-muted rounded-md" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
