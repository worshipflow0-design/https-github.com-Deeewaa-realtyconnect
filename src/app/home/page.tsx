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
    <div className="space-y-16">
      <section className="relative text-center h-[500px] md:h-[600px] rounded-3xl overflow-hidden flex flex-col items-center justify-center text-white">
        <Image 
          src="https://picsum.photos/1600/600" 
          alt="Marketplace background" 
          fill 
          className="object-cover"
          data-ai-hint="marketplace background"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-headline text-white drop-shadow-lg mb-6">
            Discover Local Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
            Explore curated collections from exceptional local businesses, each offering unique products crafted with passion and expertise.
          </p>
          <div className="max-w-2xl mx-auto">
            <AiProductSearch />
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-foreground mb-4">Explore Categories</h2>
          <p className="text-lg text-muted-foreground">Discover what your community has to offer</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.name}>
              <Card className="group hover-lift border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-semibold text-center group-hover:text-primary transition-colors">{category.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-foreground mb-4">Featured Stores</h2>
          <p className="text-lg text-muted-foreground">Handpicked businesses making a difference in our community</p>
        </div>
        {stores.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.slice(0, 3).map((store) => (
              <Link href={`/store/${store.slug}`} key={store.id}>
                <Card className="group hover-lift border-0 shadow-sm bg-card/50 backdrop-blur-sm h-full flex flex-col">
                  <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
                    <Image
                      src={store.coverUrl}
                      alt={`${store.name} cover image`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint="store cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-4 flex-1">
                      <Image
                        src={store.logoUrl}
                        alt={`${store.name} logo`}
                        width={56}
                        height={56}
                        className="rounded-xl border-2 border-background bg-card shadow-sm"
                        data-ai-hint="company logo"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors mb-1">
                          {store.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{store.category}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center text-sm">
                            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold">{store.rating}</span>
                            <span className="text-muted-foreground ml-1">({store.ratingCount})</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">{store.distance}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 line-clamp-2 leading-relaxed">{store.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
            <CardContent className="text-center py-16">
              <Store className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-xl font-semibold mb-2">No featured stores yet</p>
              <p className="text-muted-foreground">Check back soon to discover amazing local businesses.</p>
            </CardContent>
          </Card>
        )}
      </section>
      
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-foreground mb-4">Trending Products</h2>
          <p className="text-lg text-muted-foreground">Popular items from our community of vendors</p>
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover-lift border-0 shadow-sm bg-card/50 backdrop-blur-sm relative overflow-hidden">
                <Link href="#">
                  <div className="aspect-square relative w-full bg-muted rounded-t-2xl overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint="product photo"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.store.name}</p>
                    <h3 className="font-semibold text-sm truncate group-hover:text-primary transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="font-bold text-lg">K{product.price}</p>
                  </CardContent>
                </Link>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" className="shadow-lg">Add</Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
            <CardContent className="text-center py-16">
              <Sparkles className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-xl font-semibold mb-2">No trending products yet</p>
              <p className="text-muted-foreground">Come back soon to discover new items from local vendors.</p>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
