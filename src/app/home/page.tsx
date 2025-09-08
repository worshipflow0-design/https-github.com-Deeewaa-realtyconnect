import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AiProductSearch from '@/components/ai-product-search';
import { categories, stores, products } from '@/lib/data';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative text-center h-[400px] md:h-[500px] rounded-2xl overflow-hidden flex flex-col items-center justify-center text-white">
        <Image 
          src="https://picsum.photos/1600/600" 
          alt="Marketplace background" 
          fill 
          className="object-cover"
          data-ai-hint="marketplace background"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-white drop-shadow-md">
            welcome to vendors
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            Your one-stop marketplace for local goods. Find everything you need from stores near you.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            <AiProductSearch />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.name}>
              <div className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors duration-200">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <category.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-semibold text-center">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">Featured Stores</h2>
        {stores.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.slice(0, 3).map((store) => (
              <Link href={`/store/${store.slug}`} key={store.id}>
                <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-40 w-full">
                    <Image
                      src={store.coverUrl}
                      alt={`${store.name} cover image`}
                      fill
                      className="object-cover"
                      data-ai-hint="store cover"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <div className="flex items-start gap-4 flex-1">
                      <Image
                        src={store.logoUrl}
                        alt={`${store.name} logo`}
                        width={48}
                        height={48}
                        className="rounded-lg border bg-card"
                        data-ai-hint="company logo"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {store.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{store.category}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center text-sm">
                            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold">{store.rating}</span>
                            <span className="text-muted-foreground ml-1">({store.ratingCount})</span>
                          </div>
                          <Badge variant="secondary">{store.distance}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{store.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg font-semibold">No featured stores yet</p>
            <p className="text-muted-foreground mt-2">Check back later to see what's new.</p>
          </div>
        )}
      </section>
      
      <section>
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">Trending Products</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden relative">
                <Link href="#">
                  <div className="aspect-square relative w-full bg-muted">
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
                      <p className="font-bold text-base mt-1">K{product.price}</p>
                  </CardContent>
                </Link>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm">Add</Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg font-semibold">No trending products yet</p>
            <p className="text-muted-foreground mt-2">Come back soon to discover new items.</p>
          </div>
        )}
      </section>
    </div>
  );
}
