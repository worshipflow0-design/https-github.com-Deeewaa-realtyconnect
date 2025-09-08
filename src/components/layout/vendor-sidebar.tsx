'use client';

import {
  LayoutGrid,
  Store,
  Package,
  Settings,
  LogOut,
  ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';

const vendorNavItems = [
  { href: '/vendor/dashboard', icon: LayoutGrid, label: 'Dashboard' },
  { href: '/vendor/products', icon: Store, label: 'Products' },
  { href: '/vendor/orders', icon: Package, label: 'Orders' },
];

const settingsNavItems = [
    { href: '/vendor/settings', icon: Settings, label: 'Settings' },
];

export default function VendorSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    // Exact match for dashboard, startsWith for others
    if (href === '/vendor/dashboard') {
        return pathname === href;
    }
    // Handle cases like /vendor/products/new
    if (href === '/vendor/products') {
        return pathname.startsWith('/vendor/products');
    }
    return pathname.startsWith(href);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="items-center justify-center p-3">
        <Link href="/vendor/dashboard" className='flex items-center gap-2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-lg font-bold font-headline group-data-[collapsible=icon]:hidden">
            vendors
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {vendorNavItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.href)}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
         <SidebarMenu>
           {settingsNavItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.href)}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
         <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              variant="outline"
              className="w-full justify-center"
              tooltip="Switch to Buying"
            >
              <Link href="/home">
                <ShoppingCart />
                <span>Switch to Buying</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <SidebarMenuButton
              asChild
              variant="outline"
              className="w-full justify-center"
              tooltip="Log Out"
            >
              <Link href="/">
                <LogOut />
                <span>Log Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <Avatar className="size-8">
            <AvatarImage src="https://picsum.photos/100/100" data-ai-hint="person avatar" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Vendor User</span>
            <span className="text-xs text-muted-foreground">vendor@email.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
