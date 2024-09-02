import React from "react";
import { Button } from "@/components/ui/button";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";

export default function NavbarCart() {
  return (
    <div className=" lg:flex lg:gap-6 justify-center items-center ">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <CiHeart size={24} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Wishlist</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Link href={"/shop/cart"}>
                <CiShoppingCart size={24} />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <CiUser size={24} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Account</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
