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
  name: string;
  slug: string;
  icon: LucideIcon;
};

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
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
  { name: 'Groceries', slug: 'groceries', icon: Carrot },
  { name: 'Restaurants', slug: 'restaurants', icon: UtensilsCrossed },
  { name: 'Fashion', slug: 'fashion', icon: Shirt },
  { name: 'Electronics', slug: 'electronics', icon: Sparkles },
  { name: 'Butchery', slug: 'butchery', icon: Bone },
  { name: 'Fruits', slug: 'fruits', icon: Apple },
  { name: 'Jewelry', slug: 'jewelry', icon: Gem },
];

export const stores: Store[] = [];

export const products: Product[] = [];

export const orders: Order[] = [];
