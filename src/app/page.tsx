import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AiProductSearch from '@/components/ai-product-search';
import { categories, stores, products } from '@/lib/data';
import { Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center bg-card p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Welcome to LocaliQ
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your one-stop marketplace for local goods. Find everything you need from stores near you.
        </p>
        <div className="mt-8 max-w-2xl mx-auto">
          <AiProductSearch />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold font-headline mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link href="#" key={category.name}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 ease-in-out hover:-translate-y-1">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <category.icon className="w-10 h-10 text-primary mb-2 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-semibold text-center">{category.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold font-headline mb-6">Featured Stores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.slice(0, 3).map((store) => (
            <Link href={`/store/${store.slug}`} key={store.id}>
              <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 w-full">
                  <Image
                    src={store.coverUrl}
                    alt={`${store.name} cover image`}
                    fill
                    className="object-cover"
                    data-ai-hint="store cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Image
                      src={store.logoUrl}
                      alt={`${store.name} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg border"
                      data-ai-hint="company logo"
                    />
                    <div>
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold font-headline mb-6">Trending Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
                    <p className="text-xs text-muted-foreground">{product.storeName}</p>
                    <h3 className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-bold text-base mt-1">{product.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
