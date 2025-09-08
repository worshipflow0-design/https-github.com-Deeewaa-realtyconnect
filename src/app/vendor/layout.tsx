import VendorSidebar from '@/components/layout/vendor-sidebar';
import AppHeader from '@/components/layout/header';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import MobileBottomNav from '@/components/layout/mobile-bottom-nav';

export default function VendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <VendorSidebar />
        <SidebarInset className="flex flex-col flex-1">
          <AppHeader />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 !pt-0">{children}</main>
        </SidebarInset>
      </div>
      {/* While this is a vendor section, we might want to keep mobile nav for responsiveness */}
      {/* <MobileBottomNav />  <- Decide if you want this for vendors */}
    </SidebarProvider>
  );
}
