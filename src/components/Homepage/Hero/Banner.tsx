import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="lg:hidden flex flex-col w-full justify-center items-center flex-auto">
      <div className="flex flex-col justify-center items-center gap-6 self-stretch px-4 py-10">
        <Image
          src={"/images/headphone.png"}
          alt="banner"
          width={192}
          height={200}
        />
        <div className="flex flex-col justify-center items-center gap-2 self-stretch">
          <h2 className="text-[#000] text-[34px] font-light leading-10">
            Apple AirPods{" "}
            <span className="text-[#000] text-[30px] font-medium leading-10">
              Max
            </span>
          </h2>
          <p className="text-[#909090] text-center text-base font-medium leading-6">{`Computational audio. Listin, it's powerful`}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 self-stretch px-4 py-10 bg-[#353535] ">
        <Image
          src={"/images/applevisionpro.png"}
          alt="banner"
          width={325}
          height={192}
          className="w-[325px] h-[192px] object-cover"
        />
        <div className="flex flex-col justify-center items-center gap-2 self-stretch">
          <h2 className="text-[#fff] text-[34px] font-light leading-10">
            Apple Vision{" "}
            <span className="text-[#fff] text-[30px] font-medium leading-10">
              Pro
            </span>
          </h2>
          <p className="text-[#909090] text-center text-base font-medium leading-6">
            An immersive way to experience entertainment
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 self-stretch px-4 py-10 bg-[#fff]">
        <Image
          src={"/images/PlayStation.png"}
          alt="banner"
          width={192}
          height={200}
          className="w-[200px] h-[200px] object-cover"
        />
        <h2 className="text-center text-[34px] font-light leading-10 text-[#000]">
          PlayStation{" "}
          <span className="text-[34px] font-medium leading-10">5</span>
        </h2>
        <p className="text-center text-[#909090] text-base font-medium leading-6">
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
          redefine your PlayStation experience.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 self-stretch px-4 py-10 bg-[#EDEDED]">
        <Image
          src={"/images/MacBook.png"}
          alt="banner"
          width={192}
          height={200}
          className="flex w-[330.481px] h-[200px] px-[29.74px] py-[18px]  "
        />
        <h2 className="text-center text-[34px] font-light leading-10 text-[#000]">
          Macbook{" "}
          <span className="text-[#000] text-[34px] font-light leading-10">
            Air
          </span>
        </h2>
        <p className="text-center text-[#909090] text-base font-medium leading-6">
          The new 15‑inch MacBook Air makes room for more of what you love with
          a spacious Liquid Retina display.
        </p>
        <Link href={"/product"}>
          <Button
            variant={"outline"}
            size={"lg"}
            className="border-[#000] bg-transparent text-base font-medium leading-6 text-[#000]"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
