import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { Button } from "../ui/button";
import { products } from "@/lib/data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ProductsPage() {
  return (
    <div className="flex flex-col justify-center items-center px-4 mx-auto">
      {/* filter */}
      <div className="flex  w-[344px] md:w-full lg:justify-between  justify-center items-center gap-4 pt-10 px-4">
        {/* 1st div */}
        <div className="flex min-w[140px] md:w-[344px] p-4 justify-between items-center flex-1 flex-shrink-0 basis-0 rounded-[8px] border-[1px] border-[#D4D4D4] bg-[#fff]  ">
          <p className="text-[#000] text-[15px] font-normal leading-4 tracking-[-0.75px]">
            Filters
          </p>
          <button>
            <GiSettingsKnobs />
          </button>
        </div>
        {/* 2nd div */}
        <div className="flex min-w[140px] mdw-[344px] p-4 justify-between items-center flex-1 flex-shrink-0 basis-0 rounded-[8px] border-[1px] border-[#D4D4D4] bg-[#fff]">
          <p className="text-[#000] text-[15px] font-normal leading-4 tracking-[-0.75px]">
            By Rating
          </p>
          <button>
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
      </div>
      {/* products */}
      <div className="w-full justify-center items-center pt-10 ">
        {/* products results */}
        <div className="flex flex-grow w-full flex-col justify-center items-start mx-auto pb-3">
          {/* results */}
          <div className="flex items-end gap-4 pb-4 px-4">
            <p className="text-[#6C6C6C] text-[16px] font-normal leading-4 tracking-[0.48px]">
              Products Result:{" "}
            </p>{" "}
            <span className="text-[#000] text-[18px] font-normal leading-4 tracking-[-0.75px]">
              85
            </span>
          </div>
          {/* products grid*/}
          <div className="flex  items-center justify-center px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {products.slice(0, 8).map((product) => (
                <Card key={product.id} className="bg-[#F6F6F6]">
                  <Link href={`/products/${product.id}`}>
                    <CardHeader className="flex items-end">
                      <CiHeart size={24} className="text-red-500" />
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={product.image}
                        width={200}
                        height={200}
                        alt="products"
                        className="text-center flex justify-center items-center mx-auto"
                      />
                      <div className="flex flex-col gap-4">
                        <h3 className="line-clamp-1 text-center font-medium leading-6">
                          {product.name}
                        </h3>
                        <p className="text-center font-semibold">
                          ${product.price}
                        </p>
                        <Button className="w-full flex mt-auto">Buy Now</Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* pagination  */}
        <div className="m-4 flex justify-center md:justify-end ">
          <ProductPagination />
        </div>
      </div>
    </div>
  );
}

export function ProductPagination() {
  return (
    <Pagination className="m-4 flex justify-center md:justify-end ">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
