"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { usePathname } from "next/navigation";

export default function BreadcrumbNav() {
  const pathname = usePathname();

  // Dividir la ruta en segmentos
  const pathSegments = pathname.split("/").filter(Boolean); // Filtra los vacíos

  // Convertir segmento a texto amigable
  const formatSegment = (segment: string) =>
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char: string) => char.toUpperCase());

  // Construir breadcrumbs dinámicos
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return (
      <BreadcrumbItem key={href}>
        <BreadcrumbLink href={href}>{formatSegment(segment)}</BreadcrumbLink>
        {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
      </BreadcrumbItem>
    );
  });

  return (
    <div className="flex items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/resources">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.length > 0 && (
            <BreadcrumbSeparator className="hidden md:block" />
          )}
          {breadcrumbs}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
