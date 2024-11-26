import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import dynamic from "next/dynamic";

const FormFront = dynamic(() => import("./formFront"));

export default function FormsSelect() {
  return (
    <>
      <Tabs defaultValue="frontend" className="w-full pt-2">
        <TabsList className="w-full flex justify-around items-center ">
          <TabsTrigger value="frontend">Frond-End</TabsTrigger>
          <TabsTrigger value="backend">Back-End</TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">
          <ScrollArea className="mx-auto h-[500px]">
            <FormFront />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="backend">Formulario de Back-End</TabsContent>
      </Tabs>
    </>
  );
}
