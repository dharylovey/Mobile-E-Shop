import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section
      className="flex px-[160px] justify-between items-center gap-y-6 self-stretch flex-wrap"
      style={{
        background: "linear-gradient(91deg, #211C24 0.64%, #211C24 101%)",
      }}
    >
      <div
        className="flex min-w-[400px] items-start gap-6 flex-col"
        style={{ flex: "1 0 0" }}
      >
        <p className="text-[#fff] text-2xl non-italic font-medium leading-8 opacity-40">
          Pro.Beyond
        </p>
        <h1 className="text-[#fff] text-8xl non-italic font-extralight leading-[72px] tracking-[-0.95px]">
          Iphone 14{" "}
          <span className="text-8xl text-[#fff] non-italic font-semibold leading-[72px] tracking-[-0.96px]">
            Pro
          </span>
        </h1>
        <p className="text-[#909090] text-lg font-medium leading-6">
          Created to change everything for the better. For everone
        </p>
        <Button variant={"outline"} size={"lg"}>
          Shop Now
        </Button>
      </div>
      <div>
        <Image src={"/images/Iphone.png"} alt="" width={400} height={400} />
      </div>
    </section>
  );
}
