"use client";

import * as React from "react";
import { CaretDownIcon, CaretLeftIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const Categorys = [
  { id: "1", name: "4GB" },
  { id: "2", name: "8GB" },
  { id: "3", name: "16GB" },
  { id: "4", name: "32GB" },
];

export function ProductsCategory() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[280px] md:w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Built-in memory</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? (
              <CaretDownIcon className="h-4 w-4" />
            ) : (
              <CaretLeftIcon className="h-4 w-4" />
            )}

            {/* <span className="sr-only">Toggle</span> */}
          </Button>
        </CollapsibleTrigger>
      </div>
      <Separator />
      {Categorys.map((category) => (
        <CollapsibleContent
          className=" space-x-4 items-center flex "
          key={category.id}
        >
          <Checkbox id={category.id} />
          <Label htmlFor={category.id}>{category.name}</Label>
        </CollapsibleContent>
      ))}
    </Collapsible>
  );
}
