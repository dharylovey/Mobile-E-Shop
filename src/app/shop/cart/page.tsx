"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { useState } from "react";
// import products from "@/lib/data";

export default function Cart() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-full items-center px-[160px] py-[112px]">
      <div className="flex gap-[48px]">
        <div className="gap-[40px] flex flex-col">
          <h3>Shopping Cart</h3>

          {/* product carts */}
          <div className="flex flex-col gap-[40px]">
            <div className="flex  py-4 gap-2 ">
              <div className="p-2">
                <Image
                  src={"/images/headphone.png"}
                  alt="headphone"
                  width={90}
                  height={90}
                  className="flex justify-center items-center"
                />
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex min-w-[106px] flex-col gap-2 items-start">
                    <h3>Apple Headphone Pro (MQ9T3RX/A)</h3>
                    <p>#D4D4D4</p>
                  </div>
                </div>
                <div className="flex  gap-1 items-center ">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        if (count > 0) setCount(count - 1);
                      }}
                      disabled={count <= 0}
                    >
                      -
                    </Button>
                    <p className="border border-gray-400 px-2 py-1 rounded">
                      {count}
                    </p>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        if (count < 5) setCount(count + 1);
                      }}
                      disabled={count >= 5}
                    >
                      +
                    </Button>
                  </div>
                  <div>$ 1,999.00</div>
                </div>
              </div>
            </div>
          </div>
          <Separator />

          {/* 2nd product */}
          <div className="flex flex-col gap-[40px]">
            <div className="flex  py-4 gap-2 ">
              <div className="p-2">
                <Image
                  src={"/images/MacBook.png"}
                  alt="headphone"
                  width={90}
                  height={90}
                  className="flex justify-center items-center"
                />
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex min-w-[106px] flex-col gap-2 items-start">
                    <h3>Apple MacBook Pro Max 1TB (MQ9T3RX/A)</h3>
                    <p>#D4D4D4</p>
                  </div>
                </div>
                <div className="flex  gap-1 items-center ">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        if (count > 0) setCount(count - 1);
                      }}
                      disabled={count <= 0}
                    >
                      -
                    </Button>
                    <p className="border border-gray-400 px-2 py-1 rounded">
                      {count}
                    </p>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        if (count < 5) setCount(count + 1);
                      }}
                      disabled={count >= 5}
                    >
                      +
                    </Button>
                  </div>
                  <div>$ 1,999.00</div>
                </div>
              </div>
            </div>
          </div>
          <Separator />
        </div>
        <div>
          <h1 className="capitalize">checkout form in this side</h1>
        </div>
      </div>
    </div>
  );
}
