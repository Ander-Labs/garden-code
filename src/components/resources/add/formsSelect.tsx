import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FormsSelect() {
  return (
    <>
      <Tabs defaultValue="frontend" className="w-full pt-2">
        <TabsList className="w-full flex justify-around items-center ">
          <TabsTrigger value="frontend">Frond-End</TabsTrigger>
          <TabsTrigger value="backend">Back-End</TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">Formulario de Front-End</TabsContent>
        <TabsContent value="backend">Formulario de Back-End</TabsContent>
      </Tabs>
    </>
  );
}
