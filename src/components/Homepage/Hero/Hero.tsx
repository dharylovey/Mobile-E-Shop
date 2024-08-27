import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="flex  md:w-full px-4 lg:px-[160px] items-start justify-between md:items-center gap-12 gap-y-6 self-stretch flex-wrap mx-auto"
      style={{
        background: "linear-gradient(91deg, #211C24 0.64%, #211C24 101%)",
      }}
    >
      <div
        className="flex w-[375px]  items-center lg:items-start gap-8 lg:gap-6 flex-col pt-[88px] lg:pt-0 "
        style={{ flex: "1 0 0" }}
      >
        <p className="text-[#fff] text-center text-2xl font-semibold  non-italic lg:font-medium leading-8 opacity-40">
          Pro.Beyond
        </p>
        <h1 className="text-[#fff] text-center text-[72px] md:text-8xl non-italic font-extralight leading-[72px] tracking-[-0.72px] lg:tracking-[-0.95px]">
          Iphone 14{" "}
          <span className="text-8xl text-[#fff] non-italic font-semibold leading-[72px] tracking-[-0.96px]">
            Pro
          </span>
        </h1>
        <p className="text-[#909090] text-center text-[19px] md:text-lg font-medium leading-6">
          Created to change everything for the better. For everone
        </p>
        <Link href={"/products"}>
          <Button
            variant={"outline"}
            size={"lg"}
            className="bg-transparent text-[#fff] text-base font-medium leading-6"
          >
            Shop Now
          </Button>
        </Link>
      </div>
      <div className="flex px-3 justify-center items-center self-stretch md:flex-grow lg:flex-grow-0 ">
        <Image src={"/images/Iphone.png"} alt="" width={400} height={400} />
      </div>
    </section>
  );
}
