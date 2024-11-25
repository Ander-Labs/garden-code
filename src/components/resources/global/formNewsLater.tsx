"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInput } from "@/components/ui/sidebar";

export function FormNewsLater() {
  return (
    <>
      <Card className="shadow-none">
        <form>
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-sm">
              Suscríbase a nuestra newsletter
            </CardTitle>
            <CardDescription>
              Suscríbase para recibir actualizaciones y noticias sobre Garden
              Code y futuros proyectos.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2.5 p-4">
            <SidebarInput type="email" placeholder="Email" />
            <Button
              className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
              size="sm"
            >
              Suscríbirse
            </Button>
          </CardContent>
        </form>
      </Card>
    </>
  );
}
