import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, stores } from '@/lib/data';
import { Star } from 'lucide-react';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const filteredStores = stores.filter(
    (store) => store.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-3">
          <category.icon className="w-8 h-8" />
          <h1 className="text-3xl font-bold font-headline">{category.name}</h1>
        </div>
        <p className="text-lg text-muted-foreground mt-2">
          Browse stores in the {category.name} category.
        </p>
      </section>

      {filteredStores.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStores.map((store) => (
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
        <div className="text-center py-16">
          <category.icon className="w-16 h-16 mx-auto text-muted-foreground/30" />
          <p className="text-xl font-semibold mt-4">No stores found</p>
          <p className="text-muted-foreground mt-2">
            There are currently no stores in the {category.name} category.
          </p>
        </div>
      )}
    </div>
  );
}
