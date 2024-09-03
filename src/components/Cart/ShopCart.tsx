"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ShopCart() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex  h-full items-center px-[160px] py-[112px]">
      <div className="flex-wrap md:flex   w-full gap-[48px]">
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
        <div className="border flex-grow p-14 rounded-md">
          <div className=" flex flex-col mb-10">
            <h1 className="capitalize font-semibold">Order Summary</h1>
          </div>
          <form className="flex flex-col gap-4 mb-8">
            <Label htmlFor="promocode" className="text-sm">
              Promo code
            </Label>
            <Input id="promocode" placeholder="Promo code" />
            <Label htmlFor="cardnumber" className="text-sm">
              Your bonus card number
            </Label>
            <Input id="cardnumber" placeholder="Enter Card Number" />
            <Button variant="outline">Apply</Button>
          </form>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <h2>SubTotal</h2>
              <p>$ 1,999.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Estimated Tax</p>
              <p>$ 0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">
                Estimated Shipping & Handling
              </p>
              <p>$ 0.00</p>
            </div>
            <Separator />
            <div className="flex justify-between">
              <h3>Total</h3>
              <h3>$ 1,999.00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
