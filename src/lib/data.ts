import {
  UtensilsCrossed,
  Shirt,
  Sparkles,
  Carrot,
  Apple,
  Bone,
  Gem,
  type LucideIcon,
} from 'lucide-react';

export type Store = {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  coverUrl: string;
  description: string;
  category: string;
  rating: number;
  ratingCount: number;
  distance: string;
  address: string;
  phone: string;
  whatsapp: string;
  lat: number;
  lng: number;
  hours: Record<string, string>;
  reviews: { id: string, author: string, rating: number, comment: string }[];
};

export type Category = {
  name:string;
  icon: LucideIcon;
};

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  storeName: string;
  stock: string;
  rating: number;
  options?: {
    size?: string[];
    color?: string[];
  }
};

export const categories: Category[] = [
  { name: 'Groceries', icon: Carrot },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Fashion', icon: Shirt },
  { name: 'Electronics', icon: Sparkles },
  { name: 'Butchery', icon: Bone },
  { name: 'Fruits', icon: Apple },
  { name: 'Jewelry', icon: Gem },
];

export const stores: Store[] = [
  {
    id: '1',
    name: 'GreenLeaf Organics',
    slug: 'greenleaf-organics',
    logoUrl: 'https://picsum.photos/100/100?random=1',
    coverUrl: 'https://picsum.photos/800/400?random=1',
    description: 'Your friendly neighborhood source for the freshest organic produce, straight from local farms. We believe in healthy living and sustainable practices.',
    category: 'Groceries',
    rating: 4.8,
    ratingCount: 256,
    distance: '1.2km',
    address: '123 Market St, Downtown',
    phone: '123-456-7890',
    whatsapp: '1234567890',
    lat: 34.0522,
    lng: -118.2437,
    hours: {
      Mon: '9 AM - 8 PM',
      Tue: '9 AM - 8 PM',
      Wed: '9 AM - 8 PM',
      Thu: '9 AM - 8 PM',
      Fri: '9 AM - 9 PM',
      Sat: '10 AM - 9 PM',
      Sun: '10 AM - 6 PM'
    },
    reviews: [
        { id: 'r1', author: 'Jane Doe', rating: 5, comment: 'Always fresh and amazing quality!'}
    ]
  },
  {
    id: '2',
    name: 'Urban Threads Boutique',
    slug: 'urban-threads-boutique',
    logoUrl: 'https://picsum.photos/100/100?random=2',
    coverUrl: 'https://picsum.photos/800/400?random=2',
    description: 'Curated collection of modern and vintage fashion. Find unique pieces that express your style.',
    category: 'Fashion',
    rating: 4.6,
    ratingCount: 412,
    distance: '2.5km',
    address: '45 Fashion Ave, Style District',
    phone: '123-456-7891',
    whatsapp: '1234567891',
    lat: 34.055,
    lng: -118.25,
    hours: {
      Mon: 'Closed',
      Tue: '11 AM - 7 PM',
      Wed: '11 AM - 7 PM',
      Thu: '11 AM - 8 PM',
      Fri: '11 AM - 8 PM',
      Sat: '10 AM - 8 PM',
      Sun: '12 PM - 5 PM'
    },
    reviews: [
        { id: 'r2', author: 'John Smith', rating: 4, comment: 'Great finds, a bit pricey but worth it.'}
    ]
  },
  {
    id: '3',
    name: 'GadgetHub',
    slug: 'gadgethub',
    logoUrl: 'https://picsum.photos/100/100?random=3',
    coverUrl: 'https://picsum.photos/800/400?random=3',
    description: 'The latest in tech and electronics. From smartphones to smart homes, we have it all. Expert advice and great prices.',
    category: 'Electronics',
    rating: 4.9,
    ratingCount: 1024,
    distance: '5.1km',
    address: '789 Tech Road, Silicon Alley',
    phone: '123-456-7892',
    whatsapp: '1234567892',
    lat: 34.04,
    lng: -118.26,
    hours: {
      Mon: '10 AM - 9 PM',
      Tue: '10 AM - 9 PM',
      Wed: '10 AM - 9 PM',
      Thu: '10 AM - 9 PM',
      Fri: '10 AM - 9 PM',
      Sat: '10 AM - 9 PM',
      Sun: '11 AM - 7 PM'
    },
    reviews: [
        { id: 'r3', author: 'Sam Wilson', rating: 5, comment: 'Best customer service and prices in town!'}
    ]
  },
];

export const products: Product[] = [
    { id: 'p1', name: 'Organic Avocados (3-pack)', imageUrl: 'https://picsum.photos/400/400?random=11', price: '$5.99', storeName: 'GreenLeaf Organics', stock: 'In Stock', rating: 4.9 },
    { id: 'p2', name: 'Vintage Denim Jacket', imageUrl: 'https://picsum.photos/400/400?random=12', price: '$85.00', storeName: 'Urban Threads', stock: 'Low Stock', rating: 4.7, options: { size: ['S', 'M', 'L'] }},
    { id: 'p3', name: 'Noise-Cancelling Headphones', imageUrl: 'https://picsum.photos/400/400?random=13', price: '$249.99', storeName: 'GadgetHub', stock: 'In Stock', rating: 4.9, options: { color: ['Black', 'White'] }},
    { id: 'p4', name: 'Fresh Sourdough Bread', imageUrl: 'https://picsum.photos/400/400?random=14', price: '$7.50', storeName: 'GreenLeaf Organics', stock: 'Out of Stock', rating: 4.8 },
    { id: 'p5', name: 'Handmade Leather Tote', imageUrl: 'https://picsum.photos/400/400?random=15', price: '$150.00', storeName: 'Urban Threads', stock: 'In Stock', rating: 4.9 },
    { id: 'p6', name: 'Smart WiFi Power Strip', imageUrl: 'https://picsum.photos/400/400?random=16', price: '$29.99', storeName: 'GadgetHub', stock: 'In Stock', rating: 4.7 },
];
