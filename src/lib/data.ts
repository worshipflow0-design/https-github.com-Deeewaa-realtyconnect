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
  { name: 'Groceries', icon: Carrot },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Fashion', icon: Shirt },
  { name: 'Electronics', icon: Sparkles },
  { name: 'Butchery', icon: Bone },
  { name: 'Fruits', icon: Apple },
  { name: 'Jewelry', icon: Gem },
];

export const stores: Store[] = [];

export const products: Product[] = [];

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
