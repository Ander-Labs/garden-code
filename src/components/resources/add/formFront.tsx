'use client'
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";


export default function FormFront() {

  const [state, action] = useFormState(signup, undefined);
  return (
    <>
          <form action="pos" method="post">
              

      </form>
    </>
  );
}
