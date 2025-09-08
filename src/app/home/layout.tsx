import AppHeader from '@/components/layout/header';
import AppSidebar from '@/components/layout/app-sidebar';
import MobileBottomNav from '@/components/layout/mobile-bottom-nav';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1">
          <AppHeader />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 !pt-0">{children}</main>
        </SidebarInset>
      </div>
      <MobileBottomNav />
    </SidebarProvider>
  );
}
