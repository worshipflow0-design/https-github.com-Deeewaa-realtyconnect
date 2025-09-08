
'use client';

import {
  Home,
  Search,
  Package,
  User,
  Store,
  LayoutGrid,
  Settings,
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

const navItems = [
  { href: '/home', icon: Home, label: 'Home' },
  { href: '/search', icon: Search, label: 'Search' },
  { href: '/orders', icon: Package, label: 'Orders' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export default function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return href === '/home' ? pathname === href : pathname.startsWith(href) && href !== '/';
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="items-center justify-center p-3">
        <Link href="/" className='flex items-center gap-2'>
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
          {navItems.map((item) => (
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
              variant="default"
              className="w-full justify-center"
              tooltip="Switch to Selling"
            >
              <Link href="/vendor/dashboard">
                <Store />
                <span>Switch to Selling</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <div className="flex items-center gap-2">
          <Avatar className="size-8">
            <AvatarImage src="https://picsum.photos/100/100" data-ai-hint="person avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">User</span>
            <span className="text-xs text-muted-foreground">user@email.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
