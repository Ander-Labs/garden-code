import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CirclePlus } from "lucide-react";
import FormsSelect from "./formsSelect";

export default function BtnAdd() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="rounded-full px-4 py-4 bg-primary">
          {" "}
          <CirclePlus className="text-white font-bold text-4xl" />
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Sugerir un nuevo recurso</SheetTitle>
            <SheetDescription>
             Comparte en Garden Code tus recursos favoritos o uno que tu hayas desarrollado.
            </SheetDescription>
                  </SheetHeader>
                  <FormsSelect/>
        </SheetContent>
      </Sheet>
    </>
  );
}
