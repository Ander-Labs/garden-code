import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/resources/global/app-sidebar";

import BreadcrumbNav from "@/components/resources/global/breadcrumb-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <BreadcrumbNav/>
          </header>
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
