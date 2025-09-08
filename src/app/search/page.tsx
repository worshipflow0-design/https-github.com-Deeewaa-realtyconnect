'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { products } from '@/lib/data';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query?.toLowerCase() ?? '') ||
    product.store.name.toLowerCase().includes(query?.toLowerCase() ?? '')
  );

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
          <Search className="w-8 h-8" />
          Search Results
        </h1>
        {query && <p className="text-lg text-muted-foreground mt-2">Showing results for: <span className="text-foreground font-semibold">"{query}"</span></p>}
      </section>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <Link href="#" key={product.id}>
              <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative w-full bg-gray-100">
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
                    <p className="font-bold text-base mt-1">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl font-semibold">No products found</p>
          <p className="text-muted-foreground mt-2">Try a different search term.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    )
}
