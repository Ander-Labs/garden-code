import dynamic from "next/dynamic";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/resources/global/app-sidebar";

import BreadcrumbNav from "@/components/resources/global/breadcrumb-nav";
import BtnAdd from "@/components/resources/add/btnAdd";

const ThemeBtn = dynamic(() => import("@/components/global/themeBtn"));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b mb-4">
            <BreadcrumbNav />
            <div className="pr-4 flex justify-around items-center gap-2">
              <UserButton />
              <ThemeBtn />
            </div>
          </header>
          <main>{children}</main>
          <div className="fixed bottom-0 right-0 pr-6 md:pr-10  pb-10 ">
            <BtnAdd />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
