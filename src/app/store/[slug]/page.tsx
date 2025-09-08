import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Phone, MessageCircle, MapPin, ExternalLink, Plus, Minus } from 'lucide-react';

import { stores, products as allProducts } from '@/lib/data';
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
  
  const storeProducts = allProducts.filter(p => p.storeName === store.name);

  const StockBadge = ({ stock }: { stock: string }) => {
    let variant: 'default' | 'secondary' | 'destructive' = 'default';
    let className = '';
    if (stock === 'In Stock') {
        variant = 'default';
        className = 'bg-green-100 text-green-800 border-green-200';
    } else if (stock === 'Low Stock') {
        variant = 'secondary';
        className = 'bg-yellow-100 text-yellow-800 border-yellow-200';
    } else {
        variant = 'destructive';
        className = 'bg-red-100 text-red-800 border-red-200';
    }
    return <Badge variant={variant} className={className}>{stock}</Badge>;
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <div className="relative h-48 md:h-64 w-full">
          <Image src={store.coverUrl} alt={`${store.name} cover`} fill className="object-cover" data-ai-hint="store cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 md:left-6">
             <Image src={store.logoUrl} alt={`${store.name} logo`} width={80} height={80} className="rounded-xl border-4 border-background bg-background" data-ai-hint="company logo" />
          </div>
        </div>
        <CardContent className="p-6 pt-2">
            <h1 className="text-3xl font-bold font-headline mt-4">{store.name}</h1>
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
             <div className="mt-4 flex flex-wrap gap-2">
                <Button>
                    <Phone className="mr-2" /> Call
                </Button>
                <Button variant="secondary">
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
                 <Card key={product.id}>
                    <CardHeader className="p-0">
                        <div className="aspect-video relative w-full">
                           <Image src={product.imageUrl} alt={product.name} fill className="object-cover rounded-t-lg" data-ai-hint="product photo" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                        <div className="flex justify-between items-start">
                             <h3 className="font-semibold">{product.name}</h3>
                             <StockBadge stock={product.stock} />
                        </div>
                        <p className="text-lg font-bold">{product.price}</p>
                        
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8"><Minus className="h-4 w-4" /></Button>
                                <span className="font-bold w-4 text-center">1</span>
                                <Button variant="outline" size="icon" className="h-8 w-8"><Plus className="h-4 w-4" /></Button>
                            </div>
                            <Button className="bg-accent hover:bg-accent/90">Add to Cart</Button>
                        </div>
                    </CardContent>
                 </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="about">
            <Card className="mt-6">
                <CardContent className="p-6 space-y-6">
                    <div>
                        <h3 className="font-semibold text-lg">Description</h3>
                        <p className="mt-2 text-muted-foreground">{store.description}</p>
                    </div>
                    <Separator />
                     <div>
                        <h3 className="font-semibold text-lg">Store Hours</h3>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                            {Object.entries(store.hours).map(([day, time]) => (
                                <li key={day} className="flex justify-between">
                                    <span>{day}</span>
                                    <span className="font-medium text-foreground">{time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <Separator />
                    <div>
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="mt-1 text-muted-foreground">{store.address}</p>
                        <div className="mt-4 rounded-lg overflow-hidden border">
                            <MapView lat={store.lat} lng={store.lng} storeName={store.name} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="reviews">
            <Card className="mt-6">
                <CardContent className="p-6 space-y-6">
                    {store.reviews.map(review => (
                        <div key={review.id} className="flex gap-4">
                             <Avatar>
                                <AvatarImage src={`https://picsum.photos/100/100?random=${review.id}`} data-ai-hint="person avatar" />
                                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                             </Avatar>
                             <div>
                                <div className="flex items-center gap-2">
                                    <h4 className="font-semibold">{review.author}</h4>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                                        ))}
                                    </div>
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
