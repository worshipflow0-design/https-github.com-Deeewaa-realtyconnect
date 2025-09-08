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
  reviews: Review[];
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
  store: {
    name: string;
  };
  inventory: {
    stock: number;
    lowStock: number;
  };
  rating: number;
  variants?: Variant[];
};

export type Variant = {
  id: string;
  name: string;
  options: Record<string, any>;
  sku?: string;
  barcode?: string;
}

export type Order = {
  id: string;
  code: string;
  customer: { name: string };
  store: { name: string };
  status: "PENDING" | "CONFIRMED" | "READY" | "SHIPPED" | "COMPLETED" | "CANCELED";
  paymentState: "UNPAID" | "PENDING" | "PAID" | "FAILED" | "REFUNDED";
  totals: { total: number };
  deliveryMethod: "PICKUP" | "DELIVERY";
  items: OrderItem[];
  createdAt: string;
};

export type OrderItem = {
  id: string;
  name: string;
  qty: number;
  unitPrice: number;
}

export type Review = {
  id: string;
  customer: { name: string };
  rating: number;
  comment?: string;
  createdAt: string;
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
        { id: 'r1', customer: { name: 'Jane Doe' }, rating: 5, comment: 'Always fresh and amazing quality!', createdAt: '2024-07-20T10:30:00Z' }
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
        { id: 'r2', customer: { name: 'John Smith' }, rating: 4, comment: 'Great finds, a bit pricey but worth it.', createdAt: '2024-07-18T14:00:00Z'}
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
        { id: 'r3', customer: { name: 'Sam Wilson' }, rating: 5, comment: 'Best customer service and prices in town!', createdAt: '2024-07-19T11:00:00Z'}
    ]
  },
];

export const products: Product[] = [
    { id: 'p1', name: 'Organic Avocados (3-pack)', imageUrl: 'https://picsum.photos/400/400?random=11', price: '$5.99', store: { name: 'GreenLeaf Organics'}, inventory: { stock: 20, lowStock: 5 }, rating: 4.9 },
    { id: 'p2', name: 'Vintage Denim Jacket', imageUrl: 'https://picsum.photos/400/400?random=12', price: '$85.00', store: { name: 'Urban Threads' }, inventory: { stock: 4, lowStock: 3 }, rating: 4.7, variants: [ { id: 'v1', name: 'Size', options: {size: ['S', 'M', 'L']} }]},
    { id: 'p3', name: 'Noise-Cancelling Headphones', imageUrl: 'https://picsum.photos/400/400?random=13', price: '$249.99', store: { name: 'GadgetHub' }, inventory: { stock: 15, lowStock: 3 }, rating: 4.9, variants: [ { id: 'v2', name: 'Color', options: { color: ['Black', 'White'] }} ]},
    { id: 'p4', name: 'Fresh Sourdough Bread', imageUrl: 'https://picsum.photos/400/400?random=14', price: '$7.50', store: { name: 'GreenLeaf Organics' }, inventory: { stock: 0, lowStock: 5 }, rating: 4.8 },
    { id: 'p5', name: 'Handmade Leather Tote', imageUrl: 'https://picsum.photos/400/400?random=15', price: '$150.00', store: { name: 'Urban Threads' }, inventory: { stock: 8, lowStock: 2 }, rating: 4.9 },
    { id: 'p6', name: 'Smart WiFi Power Strip', imageUrl: 'https://picsum.photos/400/400?random=16', price: '$29.99', store: { name: 'GadgetHub' }, inventory: { stock: 10, lowStock: 3 }, rating: 4.7 },
];

export const orders: Order[] = [
    {
      id: "1",
      code: "#3210",
      customer: { name: "User" },
      store: { name: "GreenLeaf Organics" },
      status: "COMPLETED",
      paymentState: "PAID",
      totals: { total: 42.50 },
      deliveryMethod: "PICKUP",
      items: [
        { id: "oi1", name: "Organic Avocados (3-pack)", qty: 1, unitPrice: 5.99 },
        { id: "oi2", name: "Fresh Sourdough Bread", qty: 2, unitPrice: 7.50 },
      ],
      createdAt: "2024-07-20T10:00:00Z",
    },
    {
      id: "2",
      code: "#3209",
      customer: { name: "User" },
      store: { name: "Urban Threads Boutique" },
      status: "CANCELED",
      paymentState: "REFUNDED",
      totals: { total: 120.00 },
      deliveryMethod: "DELIVERY",
      items: [
        { id: "oi3", name: "Vintage Denim Jacket", qty: 1, unitPrice: 85.00 },
      ],
      createdAt: "2024-07-18T11:30:00Z",
    },
    {
        id: "3",
        code: "#3205",
        customer: { name: "User" },
        store: { name: "GadgetHub" },
        status: "COMPLETED",
        paymentState: "PAID",
        totals: { total: 249.99 },
        deliveryMethod: "DELIVERY",
        items: [
            { id: "oi4", name: "Noise-Cancelling Headphones", qty: 1, unitPrice: 249.99 },
        ],
        createdAt: "2024-07-15T14:00:00Z",
    },
    {
        id: "4",
        code: "#3201",
        customer: { name: "User" },
        store: { name: "GreenLeaf Organics" },
        status: "COMPLETED",
        paymentState: "PAID",
        totals: { total: 15.75 },
        deliveryMethod: "PICKUP",
        items: [
            { id: "oi5", name: "Organic Avocados (3-pack)", qty: 1, unitPrice: 5.99 },
        ],
        createdAt: "2024-07-12T09:00:00Z",
    }
];
