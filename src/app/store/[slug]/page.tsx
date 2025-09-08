import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Phone, MessageCircle, MapPin, ExternalLink, Plus, Minus, Share2 } from 'lucide-react';
import { format } from 'date-fns';

import { stores, products as allProducts, Product } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import MapView from '@/components/map-view';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function StoreDetailPage({ params }: { params: { slug: string } }) {
  const store = stores.find((s) => s.slug === params.slug);

  if (!store) {
    notFound();
  }
  
  const storeProducts = allProducts.filter(p => p.store.name === store.name);

  const StockBadge = ({ product }: { product: Product }) => {
    let variant: 'default' | 'secondary' | 'destructive' = 'default';
    let className = '';
    let text = 'In Stock';

    if (product.inventory.stock <= 0) {
        variant = 'destructive';
        className = 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700';
        text = 'Out of Stock';
    } else if (product.inventory.stock <= product.inventory.lowStock) {
        variant = 'secondary';
        className = 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700';
        text = 'Low Stock';
    } else {
        variant = 'default';
        className = 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700';
    }
    return <Badge variant={variant} className={className}>{text}</Badge>;
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <div className="relative h-48 md:h-64 w-full">
          <Image src={store.coverUrl} alt={`${store.name} cover`} fill className="object-cover" data-ai-hint="store cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex justify-between items-end">
             <Image src={store.logoUrl} alt={`${store.name} logo`} width={80} height={80} className="rounded-xl border-4 border-background bg-background hidden md:block" data-ai-hint="company logo" />
             <div className="md:hidden"></div>
             <div className="flex gap-2">
                <Button variant="secondary" size="icon">
                    <Share2 className="w-5 h-5" />
                    <span className="sr-only">Share</span>
                </Button>
                <Button variant="secondary" size="icon">
                    <Phone className="w-5 h-5" />
                    <span className="sr-only">Call</span>
                </Button>
             </div>
          </div>
        </div>
        <CardContent className="p-4 md:p-6 pt-2">
            <div className="md:ml-[96px] -mt-6 md:-mt-10">
                <h1 className="text-2xl md:text-3xl font-bold font-headline">{store.name}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold text-foreground">{store.rating}</span>
                        <span className="ml-1">({store.ratingCount} ratings)</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" /> {store.distance} away
                    </div>
                    <Badge variant="outline">{store.category}</Badge>
                </div>
            </div>
             <div className="mt-4 flex flex-wrap gap-2">
                <Button>
                    <MessageCircle className="mr-2" /> WhatsApp
                </Button>
                <Button variant="secondary">
                    <ExternalLink className="mr-2" /> Directions
                </Button>
             </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="catalogue">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="catalogue">Catalogue</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="catalogue">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {storeProducts.map(product => (
                 <Card key={product.id} className="flex flex-col">
                    <CardHeader className="p-0">
                        <div className="aspect-video relative w-full">
                           <Image src={product.imageUrl} alt={product.name} fill className="object-cover rounded-t-lg" data-ai-hint="product photo" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3 flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                             <h3 className="font-semibold flex-1">{product.name}</h3>
                             <StockBadge product={product} />
                        </div>
                        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                        
                        <div className="flex items-center justify-between mt-auto pt-4">
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8"><Minus className="h-4 w-4" /></Button>
                                <span className="font-bold w-4 text-center">1</span>
                                <Button variant="outline" size="icon" className="h-8 w-8"><Plus className="h-4 w-4" /></Button>
                            </div>
                            <Button>Add to Cart</Button>
                        </div>
                    </CardContent>
                 </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="about">
            <Card className="mt-6">
                <CardContent className="p-4 md:p-6 grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg">Description</h3>
                            <p className="mt-2 text-muted-foreground">{store.description}</p>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="font-semibold text-lg">Location</h3>
                            <p className="mt-1 text-muted-foreground">{store.address}</p>
                            <div className="mt-4 rounded-lg overflow-hidden border aspect-video">
                                <MapView lat={store.lat} lng={store.lng} storeName={store.name} />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <div className="bg-muted/50 rounded-lg p-4">
                            <h3 className="font-semibold text-lg">Store Hours</h3>
                            <ul className="mt-2 space-y-1 text-muted-foreground">
                                {Object.entries(store.hours).map(([day, time]) => (
                                    <li key={day} className="flex justify-between text-sm">
                                        <span>{day}</span>
                                        <span className="font-medium text-foreground">{time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="reviews">
            <Card className="mt-6">
                <CardContent className="p-4 md:p-6 space-y-6">
                    {store.reviews.map(review => (
                        <div key={review.id} className="flex gap-4">
                             <Avatar>
                                <AvatarImage src={`https://picsum.photos/100/100?random=${review.id}`} data-ai-hint="person avatar" />
                                <AvatarFallback>{review.customer.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                             <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-x-2">
                                    <h4 className="font-semibold">{review.customer.name}</h4>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 sm:mt-0 sm:ml-auto">{format(new Date(review.createdAt), "PP")}</p>
                                </div>
                                 <p className="text-muted-foreground mt-1">{review.comment}</p>
                             </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
