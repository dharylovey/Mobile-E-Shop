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
    <section className="flex items-center justify-center py-4 self-stretch">
      <MobileCarousel />
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
      className="w-full max-w-xs"
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
