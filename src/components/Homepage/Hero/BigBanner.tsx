"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { products } from "@/lib/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BigBanner() {
  return (
    <section className="flex items-center justify-center py-6 self-stretch ">
      <MobileCarousel />
      <DesktopCarousel />
    </section>
  );
}

function MobileCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs md:hidden bg-[#F9F9F9]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card
                key={product.id}
                className="border-none shadow-none rounded-none"
              >
                <Link href={`/product/${product.id}`}>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={product.image}
                      width={200}
                      height={200}
                      alt="products"
                      className="text-center flex justify-center items-center mx-auto"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4 text-center ">
                    <CardTitle className="text-center leading-4">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-center text-xs">
                      {product.description}
                    </CardDescription>
                    <Button className="w-full">Shop Now</Button>
                  </CardFooter>
                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function DesktopCarousel() {
  const backgrounds = [
    "bg-[#FFF]",
    "bg-[#F9F9F9]",
    "bg-[#EAEAEA]",
    "bg-[#2C2C2C]",
  ];
  const filterProduct = products.slice(0, 4);
  return (
    <div className="hidden  items-start md:grid md:grid-cols-2 lg:flex">
      {filterProduct.map((product, index) => (
        <div
          className={`flex flex-col w-full  items-start py-10 gap-6 px-8 ${backgrounds[index % backgrounds.length]} ${index === 3 ? "text-[#FFF]" : ""}`}
          key={index}
        >
          <Image
            src={product.image}
            width={300}
            height={300}
            alt="products"
            className="text-center flex justify-center items-center mx-auto"
          />
          <h3 className="text-3xl font-light leading-10 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-[#909090]">{product.description}</p>
          <Link href={`/product/${product.id}`}>
            <Button
              variant={"outline"}
              className={`${index === 3 ? "bg-[#2C2C2C]" : ""}`}
            >
              Shop Now
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
