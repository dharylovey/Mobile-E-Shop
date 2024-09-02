"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiSettingsKnobs } from "react-icons/gi";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import { ProductsCategory } from "./ProductsCategory";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const Categorys = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Samsung" },
  { id: "3", name: "Xiaomi" },
  { id: "4", name: "Huawei" },
  { id: "5", name: "Oppo" },
  { id: "6", name: "Vivo" },
  { id: "7", name: "Realme" },
];

export function ProductSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex min-w[140px] md:w-[344px] p-4 justify-between items-center flex-1 flex-shrink-0 basis-0 rounded-[8px] border-[1px] border-[#D4D4D4] bg-[#fff]  ">
          <p className="text-[#000] text-[15px] font-normal leading-4 tracking-[-0.75px]">
            Filters
          </p>
          <div>
            <GiSettingsKnobs />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="space-y-6">
        <SheetHeader className="space-y-1 mb-4">
          <SheetTitle>Brand</SheetTitle>
          <Separator />
        </SheetHeader>
        <div className="relative">
          <Input placeholder="Search" className="pl-7" />
          <CiSearch className="absolute ml-[10px] top-[10px] text-gray-500" />
        </div>
        <div>
          {Categorys.map((category) => (
            <div className="flex items-center gap-4 pb-2" key={category.id}>
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
            </div>
          ))}
          <ProductsCategory />
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
